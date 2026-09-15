import React from 'react'
import type { IUser } from '../../interfaces/users/IUser'

interface ListUsersProps{
    u: IUser[]
}


const ListUsers = ({ u } : ListUsersProps) => {
  return (
    <>
        <div>Lista de Usuarios</div>
        <table className='tabla'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {
                    u.map((us: IUser)=>( 
                        <tr>
                            <td>{ us.nombre }</td>
                            <td>{ us.email }</td>
                        </tr>
                     ))   
                }
            </tbody>
        </table>
    </>
  )
}

export default ListUsers