import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";
import Todos from "../pages/Todos";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/event',
    TODOS = '/todos'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event},
    {path: RouteNames.TODOS, exact: true, component: Todos}
]