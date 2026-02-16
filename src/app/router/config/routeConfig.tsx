import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {JSX} from "react";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

interface AppRouteConfig {
    path: string;
    element: JSX.Element;
}

export const routeConfig: Record<AppRoutes, AppRouteConfig> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
}
