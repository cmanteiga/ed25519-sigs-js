![coverage](https://img.shields.io/badge/coverage-80%25-yellowgreen)
![version](https://img.shields.io/badge/version-0.1.0-blue)
![dependencies](https://img.shields.io/badge/dependencies-out%20of%20date-orange)
![codacy](https://img.shields.io/badge/codacy-B-green)

# ed25519-sigs
Fast Ed25519 signatures for node and the browser

Uses and is compatible with the OpenSSH key format (from openSSH 6.5+).

## Usage

### API

- add
- sign(message)
- verify (message, signature, pubKey)

 interface KeyPair:
- generate
- toJSON
- fromJSON

## Contributing

### Development

1. Install Node 8 or later. You can use the [package manager][] of your choice.
   Tests need to pass in Node 8 and 10.
2. Clone this repository.
3. Run `npm ci` to install the dependencies.
4. Run `npm start` to start the badge server and the frontend dev server.
5. Open `http://localhost:3000/` to view the frontend.

When server source files change, the badge server should automatically restart
itself (using [nodemon][]). When the frontend files change, the frontend dev
server (`gatsby dev`) should also automatically reload. However the ed25519 signature
definitions are built only before the server first starts. To regenerate those,
either run `npm run defs` or manually restart the server.

To debug a badge from the command line, run `npm run badge -- /npm/v/nock`.
It also works with full URLs like
`npm run badge -- https://img.shields.io/npm/v/nock`.

Use `npm run debug:server` to start server in debug mode.
[This recipe][nodemon debug] shows how to debug Node.js application in [VS Code][].

Ed25519-sigs has experimental support for [Gitpod][gitpod], a pre-configured development
environment that runs in your browser. To use Gitpod, click the button below and
sign in with GitHub. Gitpod also offers a browser add-on, though it is not required.
Please report any Gitpod bugs, questions, or suggestions in issue
[#2772](https://github.com/badges/shields/issues/2772).

[![Edit with Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/badges/shields)

[Snapshot tests][] ensure we don't inadvertently make changes that affect the
SVG or JSON output. When deliberately changing the output, run
`SNAPSHOT_DRY=1 npm run test:js:server` to preview changes to the saved
snapshots, and `SNAPSHOT_UPDATE=1 npm run test:js:server` to update them.

## Related projects

- [self-25519-edwards gem][gem]
- [pySigs python library][pysigs]

[gem]: https://github.com/ed2519/edwards-sigsorhands
[pysigs]: https://github.com/google/pysigs-in-the-wind

## License

All assets and code are under the [MIT LICENSE](LICENSE) and in the public
domain unless specified otherwise.

The assets in `logo/` are trademarks of their respective companies and are
under their terms and license.

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/badges/shields/graphs/contributors"><img src="https://opencollective.com/shields/contributors.svg?width=890" /></a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/shields#backer)]

<a href="https://opencollective.com/shields#backers" target="_blank"><img src="https://opencollective.com/shields/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/shields#sponsor)]

<a href="https://opencollective.com/shields/sponsor/0/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/1/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/2/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/3/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/4/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/5/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/6/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/7/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/8/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/shields/sponsor/9/website" target="_blank"><img src="https://opencollective.com/shields/sponsor/9/avatar.svg"></a>
