<script setup>
import {showMenuLeft} from '../components/Store.js';
</script>
<template>
    <div class="container-leftMenu" :class="{'showLeftmenu':showMenuLeft}">
        <ul>
            <li >
                <RouterLink  to="/" :class="{' animate__animated animate__lightSpeedInRight':showMenuLeft}">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/project" :class="{' animate__animated animate__lightSpeedInRight':showMenuLeft}" >Project</RouterLink>
            </li>
            <li>
                <RouterLink to="/aboute" :class="{' animate__animated animate__lightSpeedInRight':showMenuLeft}" >About-us</RouterLink>
            </li>
        </ul>
        <div class="rights">
            <p>&copy; 2024|| All Rights Reserved by Rin</p>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/styles/leftmenu.css';
</style>