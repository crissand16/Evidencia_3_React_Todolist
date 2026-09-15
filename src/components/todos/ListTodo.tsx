import React from 'react'
import type { Todo } from '../../interfaces/todos/Form'
import ItemTodo from './ItemTodo';


interface ListTodoProps{
    TodoLista:Todo[]
}

/**
 * ListTodo: va a mostrar la 
 *           lista de tareas
 * lista de tareas: viene del papá (App.tsx)
 *                  y llega aqui por medio de un 
 *                  prop
 * 
 */
function ListTodo({TodoLista}:ListTodoProps) {
  return (
    

    
    <section>
        {/*
        @por hacer: cortar 
        y pegar la tabla de tareas
        */}
        <h1 style={{
                        fontSize: "35px",
                        color: "#000000",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                        margin: "10px 0 20px",
                        paddingLeft: "12px",
                        borderRadius: "4px",
                    }
                   }> Mis tareas</h1>
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
              TodoLista.map((todo: Todo) => (
                <ItemTodo t={todo} />
              ))
            }
          </tbody>
          <tfoot></tfoot>
        </table>

      </section>
      
  )
}

export default ListTodo