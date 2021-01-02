#!/usr/bin/env ts-node

import * as tyu from 'object-relational-mapping'

import { Command } from 'commander';
const program = new Command();

program
  .command('users')
  .description('show all users')
  .action(function () {
    tyu.users.all(function ({ message }: any) {
      console.log('users.all :::', message)
    })
  })

program
  .command('register <email> <username> <password>')
  .description('authenticate a user')
  .action(function (email, username, password) {
    tyu.users.register(email, username, password, function ({ message }: any) {
      console.log('users.register :::', message)
    })
  })

program
  .command('login <email> <password>')
  .description('authenticate a user')
  .action(function (email, password) {
    tyu.users.login(email, password, function ({ message }: any) {
      console.log('users.login :::', message)
    })
  })

program.parse(process.argv);