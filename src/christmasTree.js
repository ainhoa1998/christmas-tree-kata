module.exports = function buildChristmasTree(altura) {
  let str = ''
  for (let i = 1; i <= altura; i++) {
    str += ' '.repeat(Math.ceil(altura - i))
    str += '*'.repeat(i * 2 - 1)
    str += ' '.repeat(Math.ceil(altura - i))

    if (i < altura) {
      str += '\n'
    }
  }
  return str
}
