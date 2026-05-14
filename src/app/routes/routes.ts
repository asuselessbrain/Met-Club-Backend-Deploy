import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ContentRoutes } from '../modules/content/content.route';
import { TutorialRoutes } from '../modules/tutorial/tutorial.route';
const router = express.Router();

const routes = [
    {
        path: "/user",
        route: UserRoutes
    },
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/content",
        route: ContentRoutes
    },
    {
        path: "/tutorials",
        route: TutorialRoutes
    }
]

routes.forEach(route => router.use(route.path, route.route))

export default router;