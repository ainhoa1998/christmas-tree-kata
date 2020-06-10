module.exports = function buildChristmasTree(altura) {
  let str = ''
  for (let i = 1; i <= altura; i++) {
    const aire = ' '.repeat(Math.ceil(altura - i))
    const arbol = '*'.repeat(i * 2 - 1)

    str += aire + arbol + aire

    if (i < altura) {
      str += '\n'
    }
  }
  return str
}
