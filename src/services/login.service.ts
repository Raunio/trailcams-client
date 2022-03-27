import axios, { AxiosResponse } from 'axios';
import { Routes } from '../router/routes';
export class LoginService {
    static async login(username: string, password: string) {
        try {
            const response: AxiosResponse<string> = await axios.post<string>(
                Routes.SERVICE_URL + Routes.LOGIN_ENDPOINT,
                { username, password },
                { withCredentials: true },
            );
        } catch (ex) {
            console.log(ex);
        }
    }
}
