import axios from 'axios';
import { Interceptor } from './interceptor';
import { RouterFactory } from '../router/router.factory';

export class AuthInteceptor implements Interceptor {
    use() {
        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response.status === 401) {
                    RouterFactory.getRouter().push('/login');
                }

                return error;
            },
        );
    }
}
