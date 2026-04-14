import type { ComponentType } from "react";
import Home from "../screens/home/Home";
import NotFound from "../screens/not-found/NotFound";

interface IRoute {
  path: string,
  title: string,
  component: ComponentType,
}

export const appRoutes: IRoute[] = [
  {
    path: '/',
    title: 'Главная',
    component: Home
  },
  {
    path: '/not-found',
    title: 'Страница не найдена',
    component: NotFound
  }

]