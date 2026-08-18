import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { TodoForm, Todo } from './interfaces/Form'



const App = () => {


  //datos internos del componente
  //se engaancha(hooks) la variable
  //contador a el componente
  //useState: Hook que permite
  //crear UN ESTADO(variable reactiva)

  const [contador, setContador] = useState<number>(10)

  //estado para el formulario 
  const [formulario, setFormulario] = 
                  useState<TodoForm>({
                    titulo:'',
                    prioridad:'Baja'
                  })
    
  const [listaTodo, setListaTodo] = useState<Todo[]>([])

  // funcion para incrementar la variable
  const incrementar = () => {
    //funcion del state para
    //modificar o asignar valor
    //al estado
    //para evitar la perdida del dato 
    //se trabaja con una funcion reductora
    //prev: tomaar el dato anterior 
    //  del estado
    setContador(( prev ) => ( prev + 1 ))
  }


  const disminuir = () => {
    setContador(( prev ) => ( prev - 1 ))
  }
   //function para tratar el form
   const inputChange = (event:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    //separar: nombre del control y valor 
    //         en dos variables
    const { name , value } = event.target
    console.log(`${name} - ${value}`)

    //asignar los valores del formulario 
    // al estado:
    // operador spread: separar un objeto(form )
    setFormulario({
      ...formulario,
      [name] : value
    })
  }

  //fuction para tratar el submit 
  const envioForm=(event:any)=>{
    event.preventDefault() 
    
  //establecer el atributo: completada
  // a la tarea del formulario

  const Tarea: Todo={
  ...formulario, 
      completada: false
  } 


    //spread: separar cada todo en el 
    // arreglo, volverlos a unir en otro arreglo 
    // pero con el nuevo todo
    setListaTodo([...listaTodo, Tarea])
  }

  return (
    <>
      <div>Mis quehaceres</div>
      <p>{ contador }</p>
      <button onClick={ incrementar }> Incrementar  contador </button><br/>
      <button onClick={ disminuir }> Disminuir contador </button>
      {/*El formulario para registro de nuevo todo*/}
      <section>
         <h2> Registro de nueva tarea</h2>
         <form onSubmit={ envioForm }> 
            {/* un div por cada control del formulario*/}
            <div>
                {/* Cada control tendra un label y un input*/}
                <label>Titulo de la Tarea</label> <br/>
                <input 
                      type="text"
                      id="tiutlo"
                      placeholder="p.ej revisar github"
                      name="titulo"
                      onChange={ inputChange } 
                 />
            </div>
            <div>
              <label htmlFor='prioridad'>Prioridad:</label>
              <select   
                  id="prioridad"
                  name="prioridad"
                  onChange={ inputChange }  
              >
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>
            </div>
            <div><br/>
              <button type='submit'>
                Crear tarea
              </button>  
            </div>          
         </form>
      </section>


    </>
    
  )
}

export default App