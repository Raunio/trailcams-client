import { createRouter, createWebHistory, Router } from 'vue-router';
import { Routes } from './routes';

export class RouterFactory {
    private constructor() {}

    private static router: Router;

    static getRouter(): Router {
        if (!this.router) {
            this.router = createRouter({
                routes: Routes.getRoutes(),
                history: createWebHistory(),
            });
        }
        return this.router;
    }
}
