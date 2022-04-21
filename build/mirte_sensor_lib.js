/**
 * An example JsDoc comment
 * @param {Integer} num
 * @returns whether num is even
 */
function isEven (num) {
  return num % 2 === 0;
}

module.exports = {
  isEven: isEven
};