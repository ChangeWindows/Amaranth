'use strict';

import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import chalk from 'chalk';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../icons/');
const destDir = path.join(__dirname, '../hugo/content/icons/');

(async () => {
  try {
    const timer = chalk.cyan('Icon page generation');
    console.time(timer);

    const iconSvgs = await fs.readdir(sourceDir);

    await Promise.all(iconSvgs.map((iconSvg) => generatePageFromTemplate(iconSvg)));

    console.log(chalk.green('\%s page%s generated'), iconSvgs.length, iconSvgs.length !== 1 ? 's' : '');
    console.timeEnd(timer);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

function capitalizeFirstLetter(string) {
  return string.replaceAll('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}

async function generatePageFromTemplate(iconSvg) {
  const iconBasename = path.basename(iconSvg, path.extname(iconSvg));
  const pagePath = path.join(destDir, `${iconBasename}.md`);

  const iconTemplate =
`---
title: ${capitalizeFirstLetter(iconBasename)}
tags:
categories:
---
`;

  try {
    await fs.access(pagePath, fs.F_OK);
    console.log(`Page skipped: ${chalk.cyan(iconBasename)}`);
  } catch (_) {
    await fs.writeFile(pagePath, iconTemplate);
    console.log(chalk.green(`Page build: ${iconBasename}`));
  }
}