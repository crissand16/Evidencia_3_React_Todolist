import axios from "axios";

const API_URL="http://localhost:3006/users"

export const getAllUsers = async( ) => { 
    const response = await axios.
                            get(API_URL)
    const data = await response.data
    return data
 }

export const createUser = ( ) => { }