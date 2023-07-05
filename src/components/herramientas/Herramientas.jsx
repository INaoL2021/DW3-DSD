import './Herramientas.css'
import img1 from '../../assets/canva.jpg'
import img2 from '../../assets/citethis.jpg'
import img3 from '../../assets/creately.jpg'
import img4 from '../../assets/dialnet.jpg'
import img5 from '../../assets/docsity.jpg'


const sets = [
    {
        title: 'Canvas',
        img: img1,
        description: 'Canva es una página de la que ya te hemos hablado alguna vez. Es una web de diseño gráfico muy versátil, y tiene una gran cantidad de opciones y trucos con los que crear todo tipo de diseños, ya sean personales, educativos o profesionales, pudiendo hacer panfletos, papelería, imágenes y otros tipos de proyectos múltiples. Horarios, panfletos, calendarios, posters, y cualquier tipo de diseño gráfico que pueda usarse en trabajos.'
    },
    {
        title: 'Cite This For Me',
        img: img2,
        description: 'Es muy importante cuando estás haciendo trabajos académicos ser capaz de citar correctamente las fuentes en las que te has basado. Esta es una página gratuita que te ayuda a citar correctamente en tu bibliografía, y que tiene la experiencia de llevar en marcha desde octubre del 2010. La página tiene una gran cantidad de estilos de citación por si acaso se te hubiera pedido utilizar alguno de ellos en concreto. Lo único que tienes que hacer en la web es elegir un estilo, elegir después si la cita es de una web, un libro u otra referencia, y utilizar el buscador de fuentes para encontrar la que quieres citar.'
    },
    {
        title: 'Creately',
        img: img3,
        description: 'Se trata de una herramienta que te ayuda a hacer diagramas y mapas conceptuales de una forma sencilla, y con todas las herramientas para poder hacerlo muy visual. También puede servirte para esbozar conceptos, analizar procesos o generar planificaciones. Ofrece una gran cantidad de gráficos y formas para hacer hasta 70 tipos diferentes de diagramas.'
    },
    {
        title: 'Dialnet',
        img: img4,
        description: 'Se trata de un buscador de tesis y artículos científicos de revistas o documentos en español, y que está coordinado por la Universidad de La Rioja. Su funcionamiento es extremadamente sencillo, pues tiene dos buscadores, uno para documentos y otro para revistas. Lo único que tienes que hacer es buscar el término que quieras en uno de ellos y listo, como si fuera Google, te aparecerán todos los resultados.'
    },
    {
        title: 'Docsity',
        img: img5,
        description: 'Docsity es una especie de comunidad para el intercambio de documentos académicos entre estudiantes, el servicio que se fusionó con la archiconocida web de Patatabrava. El proyecto cuenta con un total de más de 10 millones de usuarios registrados, quienes han compartido más de dos millones de documentos.'
    }
]

function Herramientas() {
    return (
        <>
            <h1 className='title'>Herramientas que te recomendamos para tu estudio</h1>
            <div className='her_container'>
                <div className='obj_container'>
                    {sets.map((item, index) => {
                        return (
                            <div className='her_articles' key={index}>
                                <img className="her_img" src={item.img} alt="" />
                                <h2 className='her_titles_art'>{item.title}</h2>
                                <p>{item.description}</p>
                                <div className='opt_cont'>
                                    <input type="checkbox" name="check" id="check-gratis"/>
                                    Gratuita
                                    <input type="checkbox" name="check" id="check-online"/>
                                    Online
                                    <button className='btn_carrito'>Usar ahora</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Herramientas;