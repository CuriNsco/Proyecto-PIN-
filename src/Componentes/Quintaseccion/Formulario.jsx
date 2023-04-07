export const Formulario = (props) => {
  return (
    <div className='quintaseccion' id='formulario'>
        <span className='segundocolor'></span>
        <img src="./fotoform.jpg" alt="argentina" />
        <h1>Get in touch We are hiring!</h1>
        <div className="contenedor-form">
        <form onSubmit={props.handleSubmit}  >
            <div className="form-floating mb-3">
                <input onChange={props.handleChange} type="text" className="form-control" id="name" placeholder="name"/>
                    <label for="floatingInput">Name</label >
            </div>
            {/* value={props.contactInfo.name} PONIENDO ESTO EN CADA INPUT O EN UNO, LA PAGINA DESAPARECE POR COMPLETO, DESCONOCEMOS EL ERROR*/}

            <div className="form-floating mb-3">
                <input onChange={props.handleChange} type="email" className="form-control" id="email" placeholder="name@example.com" required/>
                    <label for="floatingInput">Email</label>
            </div>


            <div className="form-floating mb-3">
                <input onChange={props.handleChange} type="number" className="form-control" id="phone" placeholder="phone" required/>
                    <label for="floatingInput">Phone</label>
            </div>


            <div className="form-floating">
                <textarea onChange={props.handleChange} type='text' className="form-control" id="message" placeholder="Deja tu comentario aqui"/>
                    <label for="floatingTextarea2">Comments</label>
            </div>


            <button className="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}
