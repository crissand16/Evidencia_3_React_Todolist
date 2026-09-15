import React from 'react'
import type { Todo } from '../../interfaces/todos/Form'

import { FiAlertTriangle } from "react-icons/fi";

interface ItemTodoProps{
    t:Todo

}

function ItemTodo({t} : ItemTodoProps) {
  return (
    <tr>
                  <td>{ t.id  }</td>
                  <td>{ t.titulo  }</td>
                  <td>{ t.prioridad  }</td>
                  {/*
                    operador ternario: ?:
                  */}
                  <td>{ (t.completada)===true ? 
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
                                              }> <FiAlertTriangle/> no </span>
                      }</td>

                </tr>
  )
}

export default ItemTodo