import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={RoutePath.main} element={<MainPage />} />
                <Route path={RoutePath.about} element={<AboutPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;