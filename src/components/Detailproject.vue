<script setup>
import { ref } from 'vue';
import {projectList} from '../components/Store.js';

// const showlink=ref(false);
const showLink=(pro)=>{
    pro.isactive=true
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div 
            v-for="(pro,i) in projectList" :key="i"
            class="col-xxl-6 col-xl-6 col-lg-6 container-pro">
                <div data-aos="fade-up" data-aos-once="true" class="box-pro">
                    <div class="img-box">
                        <img :src="pro.img" alt="">
                        <a class="btn-grad" :href="pro.link">View website</a>
                    </div>
                    <div class="title-box">
                        <h2>{{pro.title}}</h2>
                        <span>{{pro.devo}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/styles/project.css';
</style>