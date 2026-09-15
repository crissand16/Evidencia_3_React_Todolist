import {useState , 
        useEffect} from 'react'
import ListUsers from '../../components/users/ListUsers'
import FormUser from '../../components/users/FormUser'
import type { IUser } from '../../interfaces/users/IUser'
import { getAllUsers } from '../../services/users/UserService'

const UserPage = () => {

    //crear estado de listado de usuarios
    const [listaUsers,
           setlistaUsers
          ] = useState<IUser[]>([])


    useEffect( ( ) => {
            const consultar = async () => {                //llame al servicio
            //para traer datos
            const datos = await getAllUsers()
            //cargar el estado
            //con los datos traidos
            setlistaUsers(datos)
        }
        consultar() 
    }, [ ])



  return (
    <>
        <FormUser />
        <ListUsers u={listaUsers}/>

    </>
  )
}

export default UserPage