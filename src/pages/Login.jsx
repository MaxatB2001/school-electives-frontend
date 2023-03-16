import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import { useInput } from "../hooks/useInput";
import { login } from "../queries/userApi";
import {observer} from "mobx-react-lite"
import { useContext } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { USER_ROUTE } from "../data/constants";

export const Login = () => {
  const {user} = useContext(Context)
  const email = useInput("")
  const password = useInput("")
  const navigate = useNavigate()
  const submitLogin = async (e) => {
    e.preventDefault()
    try {
      const data = await login(email.value, password.value)
      user.setIsAuth(true)
      user.setUser(data)
      navigate(`${USER_ROUTE}/${data.id}`)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-4 max-w-md w-full">
        <form className="p-4 border border-sky-900 space-y-4 rounded-md" onSubmit={submitLogin}>
          <InputField placeholder="логин" type="text" value={email.value} onChange={email.onChange}/>
          <InputField placeholder="пароль" type="password" value={password.value} onChange={password.onChange}/>
          <Button size={"sm"}>Войти</Button>
        </form> 
      </div>
    </div>
  );
};
