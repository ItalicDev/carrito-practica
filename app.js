
// const fragment = document.createDocumentFragment()
// const carrito = document.getElementById('carrito')
// const botones = document.querySelectorAll('.card .btn')
// const idtemplate = document.getElementById('idtemplate')

// const carritoObjeto = []
 
// const agregarCarrito = (e) => {
//     const productos = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1
//     } 
//     const index = carritoObjeto.findIndex((item) => item.titulo === productos.titulo)
//     if (index === -1) {
//         carritoObjeto.push(productos)
//     }else {
//         carritoObjeto[index].cantidad++
//     }
//     pintarCarrito(carritoObjeto)
// }
// const pintarCarrito = (array) => {
//     array.forEach(item => {
//         carrito.textContent = ""
//         const clone = idtemplate.content.firstElementChild.cloneNode(true)
//         clone.querySelector('.lead').textContent = item.titulo
//         clone.querySelector('.badge').textContent = item.cantidad
//         fragment.appendChild(clone)
//     })
//     carrito.appendChild(fragment)
// }

// botones.forEach((btn) => {btn.addEventListener("click", agregarCarrito) })

