import { useContext } from "react"
import {Context} from "../../main"
import icon from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { COURSES_ROUTE, USER_ROUTE } from "../../data/constants"

const Header = () => {
  const navigate = useNavigate()
  const {user} = useContext(Context)
  return (
    <div className='max-w-5xl w-full mx-auto p-2 flex flex-row items-center justify-between' style={{height: "50px", background: "lightblue"}}>
    <img onClick={() => navigate("/")} className='w-11 cursor-pointer' src={icon}/>
    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a onClick={() => navigate(COURSES_ROUTE)} className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Курсы</a>
                    </li>
                    <li>
                        <a  onClick={() => navigate(USER_ROUTE)} className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Личный кабинет</a>
                    </li>
        
                </ul>
  </div>
  )
}

export default Header