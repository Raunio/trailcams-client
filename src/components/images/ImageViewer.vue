<script setup lang="ts">
</script>

<script lang="ts">

import { ImageService } from '../../services/image.service';
import { ImageUtil } from '../../util/ImageUtil';
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['close'],
    props: {
        objectKey: String
    },
    data() {
        return {
            data: '',
            metadata: {
                timestamp: ''
            }
        }
    },
    methods: {

    },
    async created() {
        let getObjRes = await ImageService.getObject(this.objectKey as string);
        if(getObjRes.payload) {
            this.data = ImageUtil.getCssUrlFromBase64Data(getObjRes.payload.mimetype, getObjRes.payload.data);

            this.metadata = {
                timestamp: getObjRes.payload.timestamp,
            }
        }
    }
});
</script>
<template>
    <div class="image-viewer-modal">
        <div class="image-viewer-modal-content" v-if="data">
            <div class="image-viewer-modal-header text-light">
                <h5 class="image-viewer-modal-title">Title</h5>
            </div>
            <div class="image-viewer-modal-body">
                <img v-bind:src="data" />
            </div>
            <div class="image-viewer-modal-footer text-light">
                <label>timestamp: {{ metadata.timestamp }}</label>
                <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
            </div>
        </div>
    </div>
</template>