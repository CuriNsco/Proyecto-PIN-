import React from 'react'

export const Formulario = () => {
  return (
    <div className='quintaseccion' id='formulario'>
        <span className='segundocolor'></span>
        <img src="./fotoform.jpg" alt="argentina" />
        <h1>Get in touch We are hiring!</h1>
        <div className="contenedor-form">
            <div className="form-floating mb-3">
                <input type="name" className="form-control" id="floatingInput" placeholder="name"/>
                    <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="phone"/>
                    <label for="floatingInput">Phone</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control" id="floatingTextarea2" placeholder="Deja tu comentario aqui"/>
                    <label for="floatingTextarea2">Comments</label>
            </div>
            <button className="btn btn-primary" type="submit">Send</button>
        </div>
    </div>
  )
}
