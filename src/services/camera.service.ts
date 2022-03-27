import axios from 'axios';
import { CameraDTO } from 'src/dto/cameras/camera.dto';
import { TrailApiResponse } from 'src/dto/trail.api.response';
import { Routes } from '../router/routes';

export class CameraService {
    static async listCameras(): Promise<TrailApiResponse<CameraDTO[]>> {
        try {
            const response = await axios.get<TrailApiResponse<CameraDTO[]>>(
                Routes.SERVICE_URL + Routes.LIST_CAMERAS_ENDPOINT,
                { withCredentials: true },
            );
            return response.data as TrailApiResponse<CameraDTO[]>;
        } catch (ex) {
            throw ex; // TODO
        }
    }
}
