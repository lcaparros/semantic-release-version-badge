import { readFile, writeFile } from 'fs/promises'
import type { PrepareContext } from 'semantic-release'

interface PluginConfig {
  badgeTemplate?: string
  readmePath?: string
}

async function prepare (pluginConfig: PluginConfig, context: PrepareContext): Promise<void> {
  const { nextRelease, logger } = context
  const readmePath = pluginConfig.readmePath || 'README.md'
  const badgeTemplate =
    pluginConfig.badgeTemplate ||
    '![Version](https://img.shields.io/badge/version-${version}-blue.svg)'

  try {
    const content = await readFile(readmePath, 'utf-8')
    const newBadge = badgeTemplate.replace('${version}', nextRelease.version)
    const updatedContent = content.replace(
      /!\[Version\]\(https:\/\/img\.shields\.io\/badge\/version-.*-*\.svg\)/,
      newBadge
    )

    await writeFile(readmePath, updatedContent)
    logger.log('Version badge updated successfully')
  } catch (error) {
    logger.error('Error updating version badge:', error)
    throw error
  }
}

export = {
  prepare
}
