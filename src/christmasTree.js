module.exports = function buildChristmasTree(altura) {
  let str = ''
  for (let i = 1; i <= altura; i++) {
    let espacios = ' '.repeat(Math.ceil(altura - i))
    str += espacios
    str += '*'.repeat(i * 2 - 1)
    str += espacios

    if (i < altura) {
      str += '\n'
    }
  }
  return str
}
