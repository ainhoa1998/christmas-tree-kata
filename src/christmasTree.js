module.exports = function buildChristmasTree(altura) {
  let str = ''
  for (let i = 0; i < altura; i++) {
    str += ' '.repeat(Math.ceil(altura - i - 1))
    str += '*'.repeat(i * 2 + 1)
    str += ' '.repeat(Math.ceil(altura - i - 1))

    if (i < altura - 1) {
      str += '\n'
    }
  }
  return str
}
