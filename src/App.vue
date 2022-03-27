<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';</script>
<script lang="ts">
export default {
  name: 'App'
}
</script>

<template>
<Header></Header>
<div id="main">
  <div class="main-left">
    <Navbar></Navbar>
  </div>
  <div class="main-right">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>