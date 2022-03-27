<script setup lang="ts">
import Thumbnail from './Thumbnail.vue';
import ImageViewer from './ImageViewer.vue';
</script>

<script lang="ts">
import { ImageService } from '../../services/image.service';
import { defineComponent } from 'vue';
import { ImageUtil } from '../../util/ImageUtil';

export default defineComponent({
    props: {
        cameraName: String
    },
    data() {
        return {
            objects: [],
            previewImage: null,
            showModal: false,
        }
    },
    methods: {
        async listObjects() {
            let listObjectsRes = await ImageService.listObjects(this.cameraName);
            if(listObjectsRes.payload) {
                this.objects = listObjectsRes.payload;
            }
        },
        async getObject(key: string) {
            let getObjRes = await ImageService.getObject(key);
            if(getObjRes.payload) {
                return ImageUtil.getCssUrlFromBase64Data(getObjRes.payload.mimetype, getObjRes.payload.data);
            }
        },
        preview(key) {
            this.previewImage = key;
            this.showModal = true;
        }
    },
    async created() {
        await this.listObjects();
    }
});
</script>

<template>
    <div class="img-list-header">
        <h4>Latest captures</h4>
    </div>
    <div class="img-list-container">
        <Thumbnail v-for="obj in objects" :object-key="obj.key" @click="preview(obj.key)"></Thumbnail>
    </div>
    <transition name="modal">
            <ImageViewer :object-key="previewImage" :key="previewImage" v-if="previewImage && showModal" @close="showModal = false"></ImageViewer>
    </transition>
</template>