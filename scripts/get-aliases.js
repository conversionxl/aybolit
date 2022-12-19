const path = require("path");

const getAliases = (args) => {
    // eslint-disable-next-line import/no-unresolved,global-require,import/no-dynamic-require
    const pkgAliases = require(path.resolve(__dirname, '../', 'package.json')).aliases;

    const aliasesPath =
        Object.keys(pkgAliases).reduce((aliases, alias) => {
                const aliasPath = pkgAliases[alias];
                return {
                    ...aliases,
                    [alias]: path.resolve(__dirname, args.currentPath, aliasPath)
                };
            },
            {}
        );

    return aliasesPath;
};

module.exports = getAliases;
