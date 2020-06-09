module.exports = function buildChristmasTree(altura) {
  if (altura == 1) {
    return '*'
  }
  let str = ' * '
  str = str.concat('\n***')
  return str
}
