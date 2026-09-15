import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { Priority, TodoForm } from '../../interfaces/todos/Form'

//interface em la cual 
//definimos un prop funcion 
interface FormTodoProps {
    addToDo : (titulo:  string , prioridad:Priority)=>void
}



function FormTodo( {addToDo}:FormTodoProps) {

    const [formulario, setFormulario] = 
                  useState<TodoForm>({
                    titulo:'',
                    prioridad:'Baja'
                  })

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
        addToDo(formulario.titulo,
                formulario.prioridad)
        //limpiar el formulario

        setFormulario({
            titulo: "",
            prioridad:"Baja"
        })

    }




  return (
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
         <form onSubmit={envioForm} className="form"> 
            {/* un div por cada control del formulario*/}
            <div>
                {/* Cada control tendra un label y un input*/}
                <label> Titulo de la Tarea </label> <br/>
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
  )
}

export default FormTodo