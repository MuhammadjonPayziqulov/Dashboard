import { UserList } from './pages/UserList'
import { UserProvider } from './contexts/UserContext'

function App() {

  return (
    <>
      <UserProvider>
        <UserList/>
      </UserProvider>
    </>
  )
}

export default App
