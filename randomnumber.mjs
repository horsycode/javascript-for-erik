/**
 * Returns a random whole number between 1 and max (inclusive)
 * @param {number} max 
 */
export function randomNumber(max = 10) {
    return Math.floor(Math.random() * max) % max + 1
}