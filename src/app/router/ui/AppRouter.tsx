import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {routeConfig} from 'app/router/config/routeConfig';
import {Loader} from "widgets/Loader/ui/Loader";

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) =>(
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;

