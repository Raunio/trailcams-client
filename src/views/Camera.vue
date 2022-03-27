<script setup lang="ts">
import ImageList from '../components/images/ImageList.vue';
import { CameraService } from '../../services/camera.service';
</script>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            name: undefined,
        }
    },
    watch: {
        $route(to, from) {
            this.name = to.params.name;
        }
    },
    mounted() {
        this.name = this.$route.params.name;
    }
});
</script>
<template>
    <ImageList :camera-name="name" :key="name" v-if="name"></ImageList>
</template>