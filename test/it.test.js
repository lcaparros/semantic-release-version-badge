import { readFile, writeFile, unlink } from 'fs/promises'
import plugin from '../lib/index.js'

const { prepare } = plugin

describe('semantic-release-version-badge', () => {
  it('should update version badge in README', async () => {
    const readmePath = 'README.md'
    const initialContent =
      '# Test content\n![Version](https://img.shields.io/badge/version-${version}-blue.svg)\nSome content'

    await writeFile(readmePath, initialContent)

    const context = {
      nextRelease: { version: '2.0.0' },
      logger: {
        log: console.log,
        error: console.error
      }
    }

    await prepare({}, context)

    const updatedContent = await readFile(readmePath, 'utf-8')
    expect(updatedContent).toContain('version-2.0.0-blue.svg')

    await unlink(readmePath)
  })

  it('should update version badge in README with custom badgeTemplate and readmePath', async () => {
    const readmePath = 'tempREADME.md'
    const badgeTemplate =
      '![Test Version](https://img.shields.io/badge/version-${version}-purple.svg)'
    const initialContent =
      '# Test content\n![Test Version](https://img.shields.io/badge/version-1.0.0-purple.svg)\nSome content'

    await writeFile(readmePath, initialContent)

    const context = {
      nextRelease: { version: '2.0.0' },
      logger: {
        log: console.log,
        error: console.error
      }
    }

    await prepare({ badgeTemplate, readmePath }, context)

    const updatedContent = await readFile(readmePath, 'utf-8')
    expect(updatedContent).toContain('version-2.0.0-purple.svg')

    await unlink(readmePath)
  })

  it('should thow an error if readme file does not exist', async () => {
    const context = {
      nextRelease: { version: '2.0.0' },
      logger: {
        log: console.log,
        error: console.error
      }
    }

    await expect(prepare({}, context)).rejects.toThrow('ENOENT')
  })
})
