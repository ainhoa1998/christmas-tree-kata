module.exports = function buildChristmasTree(altura) {
  let str = ''
  for (let i = 0; i < altura; i++) {
    if (altura - 1 === i) {
      str += '*'.repeat(i * 2 + 1)
    } else {
      str += ' '.repeat(Math.ceil((altura - i) / 2))
      str += '*'.repeat(i * 2 + 1)
      str += ' '.repeat(Math.ceil((altura - i) / 2))
    }
    if (i < altura - 1) {
      str += '\n'
    }
  }
  return str
}
