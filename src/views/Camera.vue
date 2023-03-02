<script setup lang="ts">
import ImageList from '../components/images/ImageList.vue';
import { CameraService } from '../services/camera.service';
</script>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        name: String
    },
    data() {
        return {
            name: '' as string,
        }
    },
    watch: {
        $route(to, from) {
            this.name = to.params.name as string;
        }
    },
    mounted() {
        this.name = this.$route.params.name as string;
    }
});
</script>
<template>
    <ImageList :camera-name="name" :key="name" v-if="name"></ImageList>
</template>