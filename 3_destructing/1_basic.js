

/**
 * 1. Try to refactor this method to es6 using 3_destructing
 * https://github.com/lukehoban/es6features#destructuring
 */

const user = {
    name: 'John',
    age: undefined,
};

/**
* START REFACTOR HERE
*/

// var [name, age] = user;

// const name = user.name || '';
// const age = user.age || 18;

const { name, age } = user;

console.log(`Mr ${name} is ${age} years old.`);
