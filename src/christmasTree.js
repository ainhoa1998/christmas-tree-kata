module.exports = function buildChristmasTree(altura) {
  let arbol = ''
  for (let i = 1; i <= altura; i++) {
    const aire = ' '.repeat(Math.ceil(altura - i))
    const rama = '*'.repeat(i * 2 - 1)

    arbol += aire + rama + aire

    if (i < altura) {
      arbol += '\n'
    }
  }
  return arbol
}
