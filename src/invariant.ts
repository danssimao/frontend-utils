/** 
  A easy way to throw error without need lots of nested if/else statements
*/

const invariant = (condition: boolean, message?: string): never => {
  if (!condition) {
    throw Error(message);
  }
}

export default invariant;
