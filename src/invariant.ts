/** 
  A easy way to throw error without need lots of nested if/else statements
*/

export const invariant(condition: boolean, message?: string): never {
  if (!condition) {
    throw Error(message);
  }
}
