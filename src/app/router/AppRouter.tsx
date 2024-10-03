import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";
import Loader from "@/components/shared/Loader/Loader";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
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
