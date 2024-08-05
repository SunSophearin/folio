<script setup>
import FormAboutme from '../components/FormAboutme.vue'
import TitleAboutme from '../components/TitleAboutme.vue';
import Socail from '../components/Socail.vue';
import Footer from '../components/Footer.vue';
import Myplanbuil from '../components/Myplanbuild.vue'
import Skillcard from '../components/Skillcard.vue'
import { ref,onMounted } from 'vue';
import ScrollTotop from '../components/ScrollTotop.vue'

onMounted(()=>{
    window.scrollTo(0,0);
})
</script>
<template>
    <div class="header"></div>
    <TitleAboutme/>
    <Socail/>
    <Myplanbuil/>
    <FormAboutme/>
    <Skillcard/>
    <Footer/>
    <scrollTotop/>
    
</template>