# semantic-release-version-badge

![Version](https://img.shields.io/badge/version-1.0.5-blue.svg)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)

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

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message must be structured as follows:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: (Minor) New feature or significant enhancement
- `fix`: (Patch) Bug fix
- `docs`: (Patch) Documentation updates
- `style`: (No Release) Code formatting changes
- `refactor`: (Patch) Code restructuring without behavior change
- `perf`: (Patch) Performance improvements
- `test`: (No Release) Adding/modifying tests
- `build`: (Patch) Changes affecting build system
- `ci`: (No Release) Changes to CI configuration
- `chore`: (No Release) Maintenance tasks
- `revert`: (Special) Reverts a previous commit

### Scopes
Common scopes include:
- `auth`: Authentication related changes
- `api`: API endpoints
- `db`: Database changes
- `email`: Email functionality
- `security`: Security features
- `ui`: User interface
- `docs`: Documentation
- `tests`: Test infrastructure

### Examples
```bash
feat(auth): add password reset functionality
```
```bash
fix(email): handle sendgrid connection timeout
```
```bash
docs(readme): update installation steps
```
```bash
style(lint): format code according to prettier rules
```
```bash
refactor(api): simplify error handling
```

### Breaking Changes
For breaking changes:
1. Add `!` after type/scope
2. Add `BREAKING CHANGE:` in footer

Example:
```bash
feat(auth)!: change authentication token format

BREAKING CHANGE: New token format is not backward compatible with existing clients
```

### Version Impact
- Breaking changes (`!`) -> Major version bump
- `feat` -> Minor version bump
- `fix`, `perf`, `refactor` -> Patch version bump
- `docs`, `style`, `test`, `ci`, `chore` -> No version bump

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
