# semantic-release-version-badge

![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A [semantic-release](https://github.com/semantic-release/semantic-release) plugin that updates version badge in README file with the latest released version.

## Installation

```bash
npm install --save-dev semantic-release-version-badge
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "semantic-release-version-badge"
  ]
}
```

## Configuration

### Plugin Options

| Option         | Description                                                  | Default                                                       |
|---------------|--------------------------------------------------------------|--------------------------------------------------------------|
| `badgeTemplate`| Template string for the version badge                        | `![Version](https://img.shields.io/badge/version-${version}-blue.svg)` |
| `readmePath`   | Path to the README file                                      | `README.md`                                                    |

### Example Configuration

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["semantic-release-version-badge", {
      "badgeTemplate": "![Current Version](https://img.shields.io/badge/version-${version}-green.svg)",
      "readmePath": "./docs/README.md"
    }]
  ]
}
```

## How it Works

The plugin runs during the `prepare` phase of semantic-release. It:
1. Reads the specified README file
2. Updates the version badge using the new version
3. Writes the changes back to the file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/lcaparros/semantic-release-version-badge.git

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
