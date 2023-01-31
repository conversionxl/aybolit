# Publishing packages


## CXL Registry

We maintain custom npm registry: https://npm.cxl.co and publish there Aybolit packages.

It is important to check if there's `.npmrc` file on main Aybolit directory with following entry:

```
@conversionxl:registry=https://npm.cxl.co
```

## Log in

In order to publish packages you need to log in to npm registry.

```
npm login --registry=https://npm.cxl.co
```

## Install dependencies and build

Run following commands in main repository directory:

```
yarn
yarn build
yarn dist
```

## Publish package

**Important:** before performing following steps make sure your workdir is clean and contains only necessary files and directories. Clean it up from everyting else as publish everything sitting in the package directory.

In following steps `cxl-ui` package is used but you can replace it with name of the other package.


### Steps

1. `cd packages/cxl-ui`
2. Edit package version in `package.json`.

  ```diff
  - "version": "1.1.0-alpha.2",
  + "version": "1.1.0-alpha.3",
  ```

3. Save and commit it.
4. `yarn publish`
5. Go through all steps. When asked about version, use value you just placed in `package.json` eg. `1.1.0-alpha.3`
6. Done.

### yarn options

It's possible to use following options:

* `--registry <url> // override configuration registry`
* `--new-version [version] // new version`
* `--tag [tag] // tag`


More: `yarn --help`

### Tags

Package versions can be tagged, eg. `cxl-ui` has `playbooks` tag.

#### Flow for new tag

When you publish, simply add `--tag tagname` param to the publish command.

#### Flow if the tag exists

If you want tag to point always to latest version of specific branch (?) (eg. `playbooks`) you need remove tag first and then tag latest release.

1. `npm dist-tag rm <pkg> <tag> --registry=https://npm.cxl.co`
  * eg. `npm dist-tag rm @conversionxl/cxl-ui playbooks --registry=https://npm.cxl.co`
2. `npm dist-tag add <pkg>@<version> [<tag>] --registry=https://npm.cxl.co`
  * eg. `npm dist-tag add @conversionxl/cxl-ui@1.1.0-alpha.4 playbooks --registry=https://npm.cxl.co`

More:

* [npm dist tag](https://docs.npmjs.com/cli/v6/commands/npm-dist-tag)
* [yarn tag](https://classic.yarnpkg.com/en/docs/cli/tag/)

**Important:** for some reason http://npm.cxl.co does not show tag updates immediately. If you want to check status of tags use `npm dist-tag`.

## Publish flow and standards

* every package has to be published separately (`cxl-ui`, `cxl-lumo-styles`, ...),
* we keep versions of the packages in sync, even if changes are introduced to only one of them.

## Unpublish package

This operation is not recommended. Be careful before publishing packages. In case of making a mistake (we're all humans) it's easier to publish a new version then unpublishing.

### `yarn`

> Once a package is published, you can never modify that specific version, so take care before publishing.


### `npm unpublish`

> If you want to remove a single version of a package, you can unpublish one version without affecting the others. This will delete only that version from the registry and it will be unable to be installed. This option is only available via the npm CLI.

> Once a package is unpublished, republishing under the same name is blocked for 24 hours.

### Documentation

* [yarn](https://classic.yarnpkg.com/lang/en/docs/cli/publish/)
* [npm](https://docs.npmjs.com/unpublishing-packages-from-the-registry)
