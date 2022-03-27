import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Camera from '../views/Camera.vue';

export class Routes {
    public static readonly SERVICE_URL = 'http://localhost:5000';

    public static readonly LOGIN_ENDPOINT = '/auth/login';

    public static readonly LIST_OBJECTS_ENDPOINT = '/images/list';
    public static readonly LIST_THUMBNAILS_ENDPOINT = 'images/list/thumbnails';
    public static readonly GET_OBJECT_ENDPOINT = '/images';

    public static readonly LIST_CAMERAS_ENDPOINT = '/cameras/list';

    private static readonly ROUTES = [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { requireAuth: true },
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/camera/:name',
            name: 'Camera',
            component: Camera,
        },
    ];

    static getRoutes() {
        return this.ROUTES;
    }
}
