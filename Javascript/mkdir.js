const argv = require('minimist')(process.argv.slice(2));
const fse = require('fs-extra');
const ora = require('ora');
const chalk = require('chalk');
const {padStart, isInteger} = require('lodash');

const {n, s} = argv;
const spinner = ora(`Creating ${chalk.blue('LeetCode Problem')} ...\n`).start();

if (!n || !s || !isInteger(n) || n < 0) {
  spinner.fail(chalk.red(`
    --n: enter problem positive integer number\n
    --s: enter solution name\n
    Please enter problem number and solution name to create files.\n
  `));
  process.exit(-1);
}

const fill_n = padStart(n, 4, '0');
const caseDir = `./src/LeetCode${fill_n}/${s}.case.js`;
const srcDir = `./src/LeetCode${fill_n}/${s}.problem.js`;
const testDir = `./src/LeetCode${fill_n}/${s}.test.js`;
fse.ensureFileSync(caseDir);
fse.ensureFileSync(srcDir);
fse.ensureFileSync(testDir);
spinner.succeed(chalk.green(
  `Create Succeed!\n
  > ${chalk.green(caseDir)}\n
  > ${chalk.green(srcDir)}\n
  > ${chalk.green(testDir)}\n`
));
