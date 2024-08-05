<script setup>
import { ref,onMounted } from 'vue';
import Detailproject from '../components/Detailproject.vue'
import Footer from '../components/Footer.vue'
import Socail from '../components/Socail.vue'
import ScrollTotop from '../components/ScrollTotop.vue'

const topPage=ref(false);

onMounted(()=>{
    window.scrollTo(0,0);
})
</script>
<template>
    <div class="header"></div>
    <div class="container">
        <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 title">
                <h1>
                    Explore
                </h1>
                <h2>
                    the projects.
                </h2>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 des">
                <span>
                    We’ve worked together with many companies 
                    across corporate and institutions to create 
                    a fresh new professional experience where our 
                    serviced deliverables and designs are trusted.
                </span>
            </div>
        </div>
    </div>
    <Detailproject/>
    <Socail style="margin-bottom: 70px;"/>
    <Footer/>
    <scrollTotop/>
</template>
<style scoped>
@import '../assets/styles/project.css';
</style>