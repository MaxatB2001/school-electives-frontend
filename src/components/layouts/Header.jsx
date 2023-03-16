import { useContext } from "react"
import {Context} from "../../main"

const Header = () => {
  const {user} = useContext(Context)
  return (
    <header className="max-w-5xl mx-auto text-white w-full bg-blue-800 flex justify-between items-center p-5">
      <h1 className="font-medium text-2xl">Факультативы</h1>
      {user.isAuth ? <button>Выход</button> : <button>Вход</button>}
    </header>
  )
}

export default Header