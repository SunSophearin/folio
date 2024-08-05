<script setup>
import Topic from '../components/Topic.vue'
import Socail from '../components/Socail.vue'
import Footer from '../components/Footer.vue'
import ScrollTotop from '../components/ScrollTotop.vue'  
import RunTxt from '../components/RunTxt.vue'
import { ref,onMounted, onBeforeMount } from 'vue';

onBeforeMount(()=>{
    window.scrollTo(0,0);
})
</script>
<template >
    <!-- <div class="header" id="el">
    </div> -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 container-title">
                <div class="title-box">
                    <span>Web/App Devoloper</span>
                    <h2>Hello !</h2>
                    <!-- <h1>I'm Sun Sophearin</h1> -->
                    <RunTxt/>
                    <div class="option-box">
                            <RouterLink to="/aboute">More About Me</RouterLink>
                            <RouterLink to="/project">Project</RouterLink>
                    </div>
                    <div class="img_Elements">
                        <img data-aos="fade-down" data-aos-once="true" data-aos-duration="2500" src="../assets/img/elements.png" alt="">
                    </div>
                    <div class="img_Elements2">
                        <img data-aos="zoom-in" data-aos-once="true" data-aos-duration="2000" src="../assets/img/ux.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 container-pic">
                <div class="pic-box">
                    <img src="../assets/img/rin2.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <Socail/>
    <Topic/>
    <ScrollTotop/>
    <div>
       <Footer/> 
    </div>
</template>
<style scoped>
@import '../assets/styles/home.css';

</style>