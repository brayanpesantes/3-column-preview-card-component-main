const colums = document.querySelectorAll('.column')

let columnActiva = 1

colums.forEach((column, index) => {
  column.addEventListener('click', () => {
    cambiarColumna(index)
  })
})

function cambiarColumna (indice) {
  colums[columnActiva].classList.remove('active')
  colums[indice].classList.add('active')
  columnActiva = indice
}
