import React from 'react'

export const Formulario = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <div className='quintaseccion' id='formulario'>
        <span className='segundocolor'></span>
        <img src="./fotoform.jpg" alt="argentina" />
        <h1>Get in touch We are hiring!</h1>
        <div className="contenedor-form">


            <div className="form-floating mb-3">
                <input onChange={props.handleChange} type="name" className="form-control" id="floatingInput" placeholder="name" value={props.contactInfo.name}/>
                    <label for="floatingInput">Name</label>
            </div>


            <div className="form-floating mb-3">
                <input  onChange={props.handleChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required value={props.contactInfo.email}/>
                    <label for="floatingInput">Email</label>
            </div>


            <div className="form-floating mb-3">
                <input onChange={props.handleChange} type="number" className="form-control" id="floatingInput" placeholder="phone" required value={props.contactInfo.number}/>
                    <label for="floatingInput">Phone</label>
            </div>


            <div className="form-floating">
                <textarea onChange={props.handleChange} type='text'className="form-control" id="message" placeholder="Deja tu comentario aqui" value={props.contactInfo.message}/>
                    <label for="floatingTextarea2">Comments</label>
            </div>


            <button className="btn btn-primary" type="submit">Send</button>

        </div>


    </div>
    </form>
  )
}
