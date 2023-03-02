import axios from 'axios';
import { ObjectDTO } from '../dto/images/object.dto';
import { TrailApiResponse } from '../dto/trail.api.response';
import { Routes } from '../router/routes';

export class ImageService {
    static async listThumbnails(): Promise<TrailApiResponse<ObjectDTO[]>> {
        return await this.list(Routes.LIST_THUMBNAILS_ENDPOINT);
    }
    static async listObjects(
        cameraName?: string,
    ): Promise<TrailApiResponse<ObjectDTO[]>> {
        return await this.list(Routes.LIST_OBJECTS_ENDPOINT, cameraName);
    }

    private static async list(
        endpoint: string,
        cameraName?: string,
    ): Promise<TrailApiResponse<ObjectDTO[]>> {
        try {
            const res = await axios.get<TrailApiResponse<ObjectDTO[]>>(
                Routes.SERVICE_URL + endpoint,
                { withCredentials: true, params: { cameraName } },
            );

            return res.data as TrailApiResponse<ObjectDTO[]>;
        } catch (ex) {
            throw ex; // TODO: some actual error handling
        }
    }

    static async getObject(
        key: string,
        thumbnail?: boolean,
    ): Promise<TrailApiResponse<ObjectDTO>> {
        try {
            const res = await axios.get<TrailApiResponse<ObjectDTO>>(
                Routes.SERVICE_URL + Routes.GET_OBJECT_ENDPOINT,
                { withCredentials: true, params: { key, thumbnail } },
            );

            return res.data as TrailApiResponse<ObjectDTO>;
        } catch (ex) {
            throw ex; // TODO: some actual error handling
        }
    }
}
