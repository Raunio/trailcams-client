<script setup lang="ts">
import CameraList from '../components/cameras/CameraList.vue';</script>

<template>
    <nav class="navbar">
      <div class="container-fluid">
        <div class="collapse navbar-collapse show" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-link">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <CameraList></CameraList>
          </ul>
        </div>
      </div>
    </nav>
</template>