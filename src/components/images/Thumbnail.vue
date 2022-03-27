<script setup lang="ts">
</script>

<script lang="ts">

import { ImageService } from '../../services/image.service';
import { ImageUtil } from '../../util/ImageUtil';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        objectKey: String
    },
    data() {
        return {
            objectData: null,
            timestamp: null
        }
    },
    methods: {
        async getObjectData() {
            let getObjRes = await ImageService.getObject(this.objectKey, true);

            if(getObjRes && getObjRes.payload) {
                this.objectData = ImageUtil.getCssUrlFromBase64Data(getObjRes.payload.mimetype, getObjRes.payload.data);
                this.timestamp = getObjRes.payload.timestamp;
            }
        }
    },
    async created() {
        await this.getObjectData();
    }
});

</script>
<template>
<div class="thumbnail-container">
    <img class="thumbnail" v-bind:src="objectData" />
    <div class="thumbnail-tooltip"><span>{{ timestamp }}</span></div>
</div> 
</template>