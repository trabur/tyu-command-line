import * as tyu from 'tyu';
console.log('tyu', tyu);
// /**
//  * users
//  */
// // init users library
tyu.users.run();
// // show all
tyu.users.all(function ({ message }) {
    console.log('users.all :::', message);
});
//# sourceMappingURL=index.js.map