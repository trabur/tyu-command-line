#!/usr/bin/env node
import * as tyu from '../object-relational-mapping/src/index';
import { Command } from 'commander';
const program = new Command();
program
    .command('users')
    .description('show all users')
    .action(function () {
    console.log('users');
    // init users library
    tyu.users.run();
    tyu.users.all(function ({ message }) {
        console.log('users.all :::', message);
    });
});
program
    .command('build')
    .description('build web site for deployment')
    .action(() => {
    console.log('build');
});
program
    .command('deploy')
    .description('deploy web site to production')
    .action(() => {
    console.log('deploy');
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map