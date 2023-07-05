import { useState, useEffect } from 'react'
import './App.css'

{/*IMÁGENES IMPORTADAS*/}
import imgMet1 from './assets/subrayar.jpg'
import imgMet2 from './assets/imagenes.jpg'
import imgMet3 from './assets/pregunt.png'
import imgMet4 from './assets/practicas.jpg'

{/*JSX IMPORTADOS*/}
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Carrito from './components/carrito/Carrito'
import Nosotros from './components/nosotros/Nosotros'
import Herramientas from './components/herramientas/Herramientas'

const data = [
  {
    title: 'Subrayar y hacer esquemas',
    descripcion: 'Subrayar los conceptos clave ayuda a identificar las ideas principales a simple vista al releer el texto. Además, permite realizar conexiones entre los diferentes términos para crear un mapa conceptual a posteriori. Al realizar esquemas o resúmenes, se hace un ejercicio de síntesis que ayuda a extraer los puntos más importantes y asociarlos con otros contenidos más secundarios. ',
    price: 150,
    img: imgMet1
  },
  {
    title: 'Asociación de imágenes',
    descripcion: 'Para las personas que son más visuales, la adquisición de nuevos contenidos puede realizarse con la ayuda de imágenes, de colores o de figuras. En estos casos se suelen utilizar marcadores de diferente colorido para subrayar textos o se introducen imágenes que actúan como un interruptor que despierta la asociación de conceptos y contenidos para afianzarlos en la memoria.',
    price: 200,
    img: imgMet2
  },
  {
    title: 'Responder a preguntas',
    descripcion: 'Otra de las formas de estudiar que puede ayudar a tener buenos resultados. Consiste en repasar la materia de estudio respondiendo cuestiones acerca de lo que acabamos de estudiar. Es una manera muy eficaz de comprobar si la materia se está entendiendo y asimilando correctamente.',
    price: 250,
    img: imgMet3
  },
  {
    title: 'Prácticas de ejercicios y exámenes',
    descripcion: 'Muy parecido al anterior es el método de estudio a través de la realización de ejercicios, test y modelos de exámenes. De esta manera se comprueba si se conoce la materia y se identifican los puntos o aspectos en los que hay que seguir trabajando.',
    price: 200,
    img: imgMet4
  }
]

function App() {
  const [carrito, setCarrito] = useState([]);
  const [expandirTitulo, setExpandirTitulo] = useState(false);
  function addCarrito(title, descripcion, price, img){
    const producto = carrito.find(item => item.title === title);
    if(producto){
      setCarrito(carrito.map(item =>
        item.title === title
        ? {...producto, cantidad: producto.cantidad + 1}
        : item
      ))
    }else{
      setCarrito([
        ...carrito,
        { title, descripcion, price, img, cantidad: 1 }
      ])
    }
  }
  useEffect(() => {
    console.log(carrito)
  }, [carrito])

  return (
    <>
      <Nosotros/>
      <Herramientas/>
      <Header handleClick={() => setExpandirTitulo(!expandirTitulo)} />
      <h1 className="title">Metodos que te recomendamos para tu estudio</h1>
      <div className="container_main">
        <div className="tienda_container">
          {data.map((item, index)=> {
            return (
              <div className='card' key={index}>
                <img src={item.img} alt="img"/>
                <h3 className='name_met'>{item.title}</h3>
                <p className='des_met'>{item.descripcion}</p>
                <p className='price_cost'> 
                  {item.price}
                  <span
                    style={{
                      fontSize: '1.2rem',
                      color: '#6458F8',
                      marginLeft: '2px'
                    }}
                  >$</span>
                </p>
                <button className='btn_carrito'
                onClick={()=>addCarrito(
                  item.title, 
                  item.descripcion, 
                  item.price,
                  item.img)}>
                  Agregar al carrito
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <Carrito 
        carrito={carrito}
        setCarrito={setCarrito}/>
      <Footer />
    </>
  )
}

export default App