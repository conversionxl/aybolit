#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const glob = require('glob');
const { sassRender } = require('../index.js');

const options = [
  {
    name: 'source',
    alias: 's',
    type: String,
    description: 'Template file to render sass into.',
    defaultOption: true,
  },
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Print this message.',
  },
];

const { source, help } = commandLineArgs(options);

function printUsage() {
  const sections = [
    {
      header: 'sass-render',
      content: 'Render sass into css tagged template literal',
    },
    {
      header: 'Options',
      optionList: options,
    },
  ];
  console.log(commandLineUsage(sections));
}

if (help) {
  printUsage();
  process.exit(0);
}

if (!source) {
  console.error('Must provide a source!');
  printUsage();
  process.exit(-1);
}

glob(source, (err, files) => {
  files
    // .filter(file => !path.basename(file).startsWith('_'))
    .map((file) => {
      // if not partial, process like regular file
      const isPartial = path.basename(file).startsWith('_');
      if (!isPartial) {
        return file;
      }

      // if this is a partial, try to find its parent searching for `${parent_dir}.scss`
      const mainScss = `${path.dirname(file)}.scss`;
      if (fs.existsSync(mainScss)) {
        return mainScss;
      }

      console.log(
        `Warning! Partial file detected ${file} \nbut can't find file that should import it: ${mainScss}`
      );
      return null;
    })
    .filter((file) => file !== null)
    .forEach((file) => {
      sassRender(file).catch((error) => {
        console.error(error);
        process.exit(-1);
      });
    });
});
