import './Carrito.css'
import imgCart from '../../assets/cart.svg'

function Carrito({ carrito, setCarrito }) {


  function eliminarProducto(index) {
    const newCarrito = [...carrito]
    
    if (newCarrito[index].cantidad > 1) {
      newCarrito[index].cantidad--
      setCarrito(newCarrito)
    } else {
      newCarrito.splice(index, 1)
      setCarrito(newCarrito)
    }
  }
  
  return (
    <>
      <h1 className='title_carrito'>CARRITO DE COMPRAS
      <img className="img_cart" src={imgCart} alt="" />
      </h1>
      <div className="container_cart">
        <div className="cart_add_container">
          {carrito.map((item, index) => {
            return (
              <div className='card' key={index}>
                <img src={item.img} alt="img" />
                <h3 className='name_met'>{item.title}</h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '50%'
                }}>
                  <p className='price_cost'>{item.price}
                    <span
                      style={{
                        fontSize: '1.2rem',
                        color: '#6458F8',
                        marginLeft: '2px'
                      }}
                    >$</span>
                  </p>
                  <p>Cantidad: {item.cantidad}</p>
                </div>
                <button className='btn_carrito'
                  onClick={()=> eliminarProducto(index)}>
                  Quitar
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <button className='btn_finish'>Terminar Compra</button>
    </>
  )
}

export default Carrito;