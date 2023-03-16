import { Routes, Route } from "react-router-dom";
import { publicRoutes, authRoutes } from "../data/routes";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../main";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  console.log(user.isAuth);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={<r.component />} />
        ))}
      {publicRoutes.map((r) => (
        <Route key={r.path} path={r.path} element={<r.component />} />
      ))}
    </Routes>
  );
});

export default AppRouter;
