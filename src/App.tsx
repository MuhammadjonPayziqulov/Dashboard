import { UserList } from './pages/UserList'
import { UserProvider } from './contexts/UserContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './Root'
import { GroupList } from './pages/GroupList'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element:<UserList/>
        },
        {
          path:"/group",
          element:<GroupList/>
        }
      ]
    }
  ])

  return (
    <>
      <UserProvider>
        <RouterProvider router={router}/>
        {/* <UserList /> */}
      </UserProvider>
    </>
  )
}

export default App
