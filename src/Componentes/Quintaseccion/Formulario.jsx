import React from 'react'

export const Formulario = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
    <div className='quintaseccion' id='formulario'>
        <span className='segundocolor'></span>
        <img src="./fotoform.jpg" alt="argentina" />
        <h1>Get in touch We are hiring!</h1>
        <div className="contenedor-form">
            <div className="form-floating mb-3">
                <input onSubmit={props.handleChange} type="name" className="form-control" id="name" placeholder="name"/>
                    <label for="floatingInput">Name</label>
            </div>


            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                    <label for="floatingInput">Email</label>
            </div>


            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="phone" placeholder="phone" required/>
                    <label for="floatingInput">Phone</label>
            </div>


            <div className="form-floating">
                <textarea type='text'className="form-control" id="message" placeholder="Deja tu comentario aqui"/>
                    <label for="floatingTextarea2">Comments</label>
            </div>


            <button className="btn btn-primary" type="submit" onSubmit={props.handleSubmit} >Send</button>
        </div>
    </div>
    </form>
  )
}
