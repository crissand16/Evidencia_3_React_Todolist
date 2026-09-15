import { Routes, 
         Route,
         NavLink,
         Navigate 
       } from 
    'react-router-dom'
import TodoPage from './pages/todos/TodoPage'
import UserPage from './pages/users/UserPage'


const App = () => {
  return(
    //Bloque de navegacion global 
    <>
      <nav style={{ display: "flex", 
                    gap: "20px",
                    paddingBottom: "50px", 
                    paddingTop: "50px", 
                    backgroundColor :"beige"
       }}>
          <NavLink to="/todos">
              Tareas
          </NavLink>
          <NavLink to="/users">
              User
          </NavLink>
      </nav>
      <hr/>
      <main>
        <Routes>
          <Route 
              path='/todos'
              element={<TodoPage />} 
          />
          <Route
              path='/users'
              element={<UserPage />} 
          />
        </Routes>
      </main>
    </>
  )

}

export default App