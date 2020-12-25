import * as tyu from '../object-relational-mapping/src/index'

console.log('tyu', tyu)

// /**
//  * users
//  */
// // init users library
tyu.users.run()

// // show all
tyu.users.all(function ({ message }: any) {
  console.log('users.all :::', message)
})

