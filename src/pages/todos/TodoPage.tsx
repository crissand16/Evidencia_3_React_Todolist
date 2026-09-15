import { useState , useEffect } from 'react'

//subcomponentes
import ListTodo 
    from '../../components/todos/ListTodo'

import type { Priority, Todo } from '../../interfaces/todos/Form'

import FormTodo 
    from '../../components/todos/FormTodo'

import { consultarTodosAxios, crearTodoAxios, crearTodoFetch } 
    from '../../services/todos/TodoService'



const TodoPage = () => {
 
    const [listaTodo, setListaTodo] = 
                useState<Todo[]>([])

    //useEffect: hook: metodo 
      //           para controlar ciclo
      //           de vida del componente
      //           controlar lo que pase 
      //           cuando se carga el componente(App)
      //por primera vez
      
    useEffect( ( ) => {
        const consultar = async () => {
            //llame al servicio
            //para traer datos
            const datos = await consultarTodosAxios()
            //cargar el estado
            //con los datos traidos
            setListaTodo(datos)
        }
        consultar() 
    }, [ ])

    // crear  funcion para añadir 
      //nueva tarea a listaTodo
      //pero aislada 
      //Necesita los atributos de la nueva
      //como tarea parametros  
    
    const addToDo = async ( titulo: string , 
                        prioridad: Priority) => {
        const Tarea: Todo ={
            //UUID: Tipo de dato de ID unico y universal
            id: crypto.randomUUID(),
            titulo: titulo,
            prioridad: prioridad, 
            completada: false
        }
    
        //guardar el nuevo todo
        //en la api
        const nuevaData = await crearTodoAxios(Tarea)
    
        //poner la nueva funcion 
        //en la lista
        setListaTodo ((prev)=>[...prev , nuevaData])
    }
 
    return (
        <>    
            {/*aqui se pone el subcomponente del formulario*/}
            <FormTodo addToDo={addToDo}/>
            {/* aqui se pone el subcomponente
                ListTodo(tabla) */}
            <ListTodo TodoLista={listaTodo}/>
        </>
  )
}

export default TodoPage