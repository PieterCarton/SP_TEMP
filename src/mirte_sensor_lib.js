/**
 * An example JsDoc comment
 * (VSCode will autofill most of this for you)
 * @param {Integer} num
 * @returns whether num is even
 */
function isEven (num) {
  return num % 2 === 0;
}

module.exports = {
  isEven: isEven
};