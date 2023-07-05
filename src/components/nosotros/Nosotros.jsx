import './Nosotros.css';
import imgBook from '../../assets/book.svg';

function Nosotros() {
    return (
        <>
            <div className='info_all'>
                <div className='nosotros_info'>
                    <img className="img_us" src={imgBook} alt="" />
                    <h3 className='title_us'>¿Quiénes somos?</h3>
                </div>
                <div className='text_content_us'>
                    <p><b>¡Bienvenido!</b> Nosotros somos una organización dedicada a encontrar diferentes maneras de mejorar tu actual nivel de educación. Siendo el origen de todo esto la frustación de estudiantes, los cuales no pueden llegar a entener algunas materias que se dan en clase, universidad o curso, creando este lugar para que tu puedas ver otras maneras existentes. Para esto te queremos mostrar diferentes metodos reconocidos por especialistas en el tema.</p>
                    <p>Por lo tanto, nosotros no dedicaremos a enseñarte cada una de ellas para que luego vos puedas decidir cual de todas se ajusta más a tu metodo de estudio. Además de poder poder comprar un plan de estudio que se compromete a seguir un seguimiento segun el metodo seleccionada por usted.</p>
                    <p>Dignissimos, sit necessitatibus eius repellat aut deserunt omnis doloremque asperiores ipsam ipsum nostrum ut amet consequuntur fuga nisi quas magnam vel accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic recusandae dolores dolore commodi. Praesentium unde repellat, quis inventore autem dignissimos alias distinctio quidem fugit iusto optio! Consectetur voluptates omnis perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati a dolore, nemo consectetur tenetur tempore saepe ipsam optio atque itaque distinctio aliquid iusto cum, ipsa vitae placeat? Minima, architecto!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi reiciendis eos voluptatibus temporibus iure, incidunt magnam ipsam quia velit, architecto mollitia. Quos officiis corporis autem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat architecto nihil optio, saepe a commodi iste perferendis id vero fugit minima voluptatibus hic illum similique placeat facere quidem! Nostrum, libero?, ipsa explicabo dicta tempore.</p>
                </div>
            </div>
            <div className='options_container'>
                <div className='box_container'>
                    <div className='box_info'>
                        <h2 className='opt_text'>Elige tu método de estudio</h2>
                        <p className='opt_text'>Conoce cada uno de los métodos que te ofrecemos. Para que/quienes sirve, caules son sus beneficios y como decidir tu método ideal.</p>
                        <button className='opt_btn'>Más Información</button>
                    </div>
                    <div className='box_info'>
                        <h2 className='opt_text'>Te brindamos herramientas gratuitas para tu estudio</h2>
                        <p className='opt_text'>Conoce cada uno de los métodos que te ofrecemos. Para que/quienes sirve, caules son sus beneficios y como decidir tu método ideal.</p>
                        <button className='opt_btn'>Más Información</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nosotros