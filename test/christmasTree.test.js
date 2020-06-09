const buildChristmasTree = require('../src/christmasTree.js')

describe('Christmas Tree', () => {
  it('debería poder crear un arbol de 1 altura', () => {
    // Arrange

    // Act
    // Usar christmasTree pasándole 1 y guardar el arbol generado
    const christmasTree = buildChristmasTree(1)

    // Assert
    // que el arbol sea *
    expect(christmasTree).toMatch('*')
  })
})
