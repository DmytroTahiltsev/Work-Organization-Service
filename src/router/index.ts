import React from "react";
import About from "../pages/About";
import Event from "../pages/Event";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Todos from "../pages/Todos";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/event',
    TODOS = '/todos',
    ABOUT = '/about',
    PROFILE = '/profile'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event},
    {path: RouteNames.TODOS, exact: true, component: Todos},
    {path: RouteNames.ABOUT, exact: true, component: About},
    {path: RouteNames.PROFILE, exact: true, component: Profile}
]