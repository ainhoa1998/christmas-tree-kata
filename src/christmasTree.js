module.exports = function buildChristmasTree(altura) {
  let arbol = ''
  for (let piso = 1; piso <= altura; piso++) {
    const aire = ' '.repeat(Math.ceil(altura - piso))
    const rama = '*'.repeat(piso * 2 - 1)

    arbol += aire + rama + aire

    if (piso < altura) {
      arbol += '\n'
    }
  }
  return arbol
}
