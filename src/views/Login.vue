<script setup lang="ts">
</script>
<script>
import { LoginService } from '../services/login.service';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                await LoginService.login(this.username, this.password);
                this.$router.push('/');
            }
            catch(ex) {
                this.$router.push('/login');
            }
        }
    },
});
</script>
<template>
<div>
    <h4>Login</h4>
    <form>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" v-model="username" />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" />
        </div>
        <button type="button" class="btn btn-primary" @click="login()">Login</button>
    </form>
</div>
</template>