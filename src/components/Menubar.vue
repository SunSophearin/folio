<script setup>
// import { datalist } from './Store';
import LeftMenu from './LeftMenu.vue';
import Popup from './Popup.vue';
import {showMenuLeft,showPopup,clickback} from '../components/Store.js'
import { ref,onBeforeMount} from 'vue';

const scrollChange=ref(false);

const clickPopup=()=>{
    showPopup.value=!showPopup.value
}
const clickMenuleft=()=>{
    showMenuLeft.value=!showMenuLeft.value
}
const scrollChangeBg=()=>{
    if(window.scrollY>55){
        scrollChange.value=true;
    }else{
        scrollChange.value=false;
    }
}
onBeforeMount(()=>{
    window.addEventListener('scroll',scrollChangeBg)
})
</script>
<template>
    <div class="container-fluid" :class="{'changeBg':scrollChange}">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 container-menu">
                    <ul class="logo">
                        <li>
                            <RouterLink style="text-decoration: none;" :class="{'changeTxt':scrollChange}" to="/" >
                             <h1  :class="{'changeTxt':scrollChange}">Rin.</h1>
                            </RouterLink>
                           
                        </li>
                    </ul>
                    <ul class="menu-box">
                        <li>
                            <RouterLink :class="{'changeTxt':scrollChange}" to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="{'changeTxt':scrollChange}" to="/project">Project</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="{'changeTxt':scrollChange}" to="/aboute">About-us</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">
                               <img src="../assets/img/cam.png" alt="" v-if="!(scrollChange)">
                               <img src="../assets/img/flag2.svg" alt="" v-else-if="scrollChange">
                            </RouterLink>
                        </li>
                    </ul>
                    <ul class="sub-menu">
                        
                        <li>
                            <RouterLink to="/">
                                <img src="../assets/img/cam.png" alt="" v-if="!(scrollChange)">
                                <img src="../assets/img/flag2.svg" alt="" v-else-if="scrollChange">
                            </RouterLink>
                        </li>
                        <li @click="clickMenuleft(),clickPopup()" class="bar" >
                            <button 
                            :class="{'aria-expanded':clickback }"
                            
                             class="menu" onclick="this.classList.toggle('opened'),this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
                                    <svg width="45" height="45" viewBox="0 0 100 100" :class="{'changeLogo':scrollChange}">
                                        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" :class="{'changeLogo':scrollChange}" />
                                        <path class="line line2" d="M 20,50 H 80" :class="{'changeLogo':scrollChange}" />
                                        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" :class="{'changeLogo':scrollChange}" />
                                    </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    <LeftMenu/>
    <Popup v-if="showPopup"/>
</template>
<style scoped>
@import '../assets/styles/menubar.css';
</style>