const buildChristmasTree = require('../src/christmasTree.js')

describe('Christmas Tree', () => {
  it('debería poder crear un arbol de 1 altura', () => {
    // Arrange

    // Act
    // Usar christmasTree pasándole 1 y guardar el arbol generado
    const christmasTree = buildChristmasTree(1)

    // Assert
    // que el arbol sea *
    expect(christmasTree).toBe('*')
  })
  it('debería poder crear un arbol de 2 alturas', () => {
    //Arrange

    //Act
    const christmasTree = buildChristmasTree(2)
    //Assert
    expect(christmasTree).toBe(' * \n***')
  })
  it('debería poder crear un arbol de 5 alturas', () => {
    //Arrange

    //Act
    const christmasTree = buildChristmasTree(3)
    //Assert
    expect(christmasTree).toBe('  *  \n *** \n*****')
  })
})
