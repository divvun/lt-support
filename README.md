# lt-support

Documentation of support for all aspects of language technology in various OS and office applications. It is inspired by the [Can I use](https://caniuse.com) site.

[The documentation](docs/index.md).

# Documentation structure

The data documents are simple [yaml](https://yaml.org) files, automatically converted to tables.
The values used in the yaml files are as follows:

- `y`: `yes` - the feature is fully covered/accessible/documented
- `n`: `no` - the feature is inaccessible/unimplemented/unavailable/undocumented
- `p`: `partial` - the feature is only partially implemented/available by a NDA/...
- `u`: `unknown` - the status of a feature on a system is unknonw

Documentation links can be both internal and external:
- if there is one authorative, external doc, link directly to it
- if there is a collection of docs that together documents the use of an API/a feature,
  these should be linked to from a separate internal doc, which is linked to from the yaml file

There might be image links to illustrate some of the issues described.

# Contribution

Pull Requests welcome! All contributions are assumed having a CC0-1.0 license,
same as the original.

# License

[CC0-1.0](LICENSE)
