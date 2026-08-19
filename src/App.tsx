import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { TodoForm, Todo } from './interfaces/Form'

import { FaPencilAlt } from "react-icons/fa";




const App = () => {


  //datos internos del componente
  //se engaancha(hooks) la variable
  //contador a el componente
  //useState: Hook que permite
  //crear UN ESTADO(variable reactiva)

  //estado para el formulario 
  const [formulario, setFormulario] = 
                  useState<TodoForm>({
                    titulo:'',
                    prioridad:'Baja'
                  })
    
  const [listaTodo, setListaTodo] = useState<Todo[]>([])

  // funcion para incrementar la variable

   //function para tratar el form
   const inputChange = (event:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    //separar: nombre del control y valor 
    //         en dos variables
    const { name , value } = event.target

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
    // Quitar el comoportamiento
    // por defecto del from
    // submit 
    event.preventDefault() 
    
  //establecer el atributo: completada
  // a la tarea del formulario

  const Tarea: Todo ={
    // UUID: Tipo de dato de ID unico y universal
    id: crypto.randomUUID(),
    ...formulario, 
      completada: false
  } 


    //spread: separar cada todo en el 
    // arreglo, volverlos a unir en otro arreglo 
    // pero con el nuevo todo
    setListaTodo([...listaTodo, Tarea])
    // cambiar el estado del formulario 
    // a vacio
    setFormulario({
      titulo:'',
      prioridad:'Baja'
    })
  }

  return (
    <>
      
      {/*El formulario para registro de nuevo todo*/}
      <section>
         <h1 style={{
                        fontSize: "35px",
                        color: "#000000",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                        margin: "10px 0 20px",
                        paddingLeft: "12px",
                        borderRadius: "4px",
                    }
                   }>Registrar una nueva tarea</h1>
         <form onSubmit={ envioForm } className="tareas"> 
            {/* un div por cada control del formulario*/}
            <div>
                {/* Cada control tendra un label y un input*/}
                <label> <FaPencilAlt/>Titulo de la Tarea </label> <br/>
                <input 
                      type="text"
                      id="titulo"
                      placeholder="p.ej revisar github"
                      name="titulo"
                      onChange={ inputChange }
                      value={ formulario.titulo }                
                 />
            </div>
            <div>
              <label htmlFor='prioridad'>Prioridad:</label>
              <select   
                  id="prioridad"
                  name="prioridad"
                  onChange={ inputChange }
                  value={ formulario.prioridad }  
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

      <section>
        <h1> Mis tareas</h1>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Prioridad</th>
              <th>Completada</th>
            </tr>
          </thead>
          <tbody>
            {
              listaTodo.map((todo: Todo) => (
                <tr>
                  <td>{ todo.id  }</td>
                  <td>{ todo.titulo  }</td>
                  <td>{ todo.prioridad  }</td>
                  {/*
                    operador ternario: ?:
                  */}
                  <td>{ (todo.completada)===true ? 
                                  <span style={ { 
                                                  color: "rgb(37, 175, 9)",
                                                  fontSize: "1 rem",
                                                  backgroundColor: "gray",
                                                }
                                              }>si</span> : 
                                              
                                  <span style={ { 
                                                  color: "#ff0000" ,
                                                  fontSize: "1 rem",
                                                  backgroundColor: "white", 
                                                }
                                              }> no </span>
                      }</td>

                </tr>
              ))
            }
          </tbody>
          <tfoot></tfoot>
        </table>

      </section>


    </>
    
  )
}

export default App