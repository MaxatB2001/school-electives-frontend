import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Loader from './components/ui/Loader'
import { Context } from './main'

const App = observer(() =>  {
  const {user} = useContext(Context)
  useEffect(() => {
    user.checkAuthorization()
  }, [])

  if (user.isLoading) return <div className="h-screen w-screen flex items-center justify-center"><Loader/></div>

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
})

export default App
