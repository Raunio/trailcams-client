<script setup lang="ts">
import { TrailApiResponse } from '../../dto/trail.api.response';
import { CameraDTO } from '../../dto/cameras/camera.dto';
</script>

<script lang="ts">
import { CameraService } from '../../services/camera.service';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            cameras: [] as CameraDTO[]
        }
    },
    async created() {
        let cameraResponse = await CameraService.listCameras() as TrailApiResponse<CameraDTO[]>;
        if(cameraResponse.payload) {
            this.cameras = cameraResponse.payload;
        }
    },
})

</script>
<template>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Cameras
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button v-for="cam in cameras" class="dropdown-item" type="button"><router-link :to="{ name: 'Camera', params: { name: cam.name } }" class="nav-link">{{cam.name}}</router-link></button>
    </div>
    </div>
</template>