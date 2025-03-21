import { readFile, writeFile } from 'fs/promises'
import type { PrepareContext } from 'semantic-release'

interface PluginConfig {
  badgeTemplate?: string
  readmePath?: string
}

function createBadgeRegex(template: string): RegExp {
  // Escape special regex characters except $
  const escapedTemplate = template
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace('\\$\\{version\\}', '.*?')

  return new RegExp(escapedTemplate)
}

async function prepare(pluginConfig: PluginConfig, context: PrepareContext): Promise<void> {
  const { nextRelease, logger } = context
  const readmePath = pluginConfig.readmePath || 'README.md'
  const badgeTemplate =
    pluginConfig.badgeTemplate ||
    '![Version](https://img.shields.io/badge/version-${version}-blue.svg)'

  try {
    const content = await readFile(readmePath, 'utf-8')
    const newBadge = badgeTemplate.replace('${version}', nextRelease.version)
    const badgeRegex = createBadgeRegex(badgeTemplate)
    const updatedContent = content.replace(badgeRegex, newBadge)

    await writeFile(readmePath, updatedContent)
    logger.log('Version badge updated successfully')
  } catch (error) {
    logger.error('Error updating version badge:', error)
    throw error
  }
}

export default {
  prepare
}
