module.exports = function buildChristmasTree(altura) {
  let str = ''
  for (let i = 1; i <= altura; i++) {
    const espacios = ' '.repeat(Math.ceil(altura - i))
    const asteriscos = '*'.repeat(i * 2 - 1)

    str += espacios + asteriscos + espacios

    if (i < altura) {
      str += '\n'
    }
  }
  return str
}
