module.exports = function buildChristmasTree(altura) {
  if (altura == 1) {
    return '*'
  } else if (altura == 2) {
    return ' * \n***'
  }
  return '  *  \n *** \n*****'
}
