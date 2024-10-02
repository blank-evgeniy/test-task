import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
