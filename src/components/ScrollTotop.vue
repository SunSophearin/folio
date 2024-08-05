<script setup>
import {ref,onMounted,onBeforeMount} from 'vue';

const showRocket=ref(false);

const clickTotop=()=>{
    window.scrollTo(0,0);
}
onBeforeMount(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>20){
        showRocket.value=true;
    }else{
        showRocket.value=false;
    }
    })
})

</script>
<template>
    <div class="roket" @click="clickTotop" v-if="showRocket">
        <img src="../assets/img/rocket.png" alt="">
    </div>
</template>
<style scoped>
.roket{
    cursor: pointer;
    position: fixed;
    right: 8px;
    bottom: 15px;
    padding: 10px;
    width: 100px;
    height: 100px;
    z-index: 4000;
    border: none;
}
.roket img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media (min-width: 0px) and (max-width: 575.98px) {
    .roket{
        width: 68px;
        height: 68px;
        right: 0;
    }
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .roket{
        width: 80px;
        height: 80px;
    }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .roket{
        width: 85px;
        height: 85px;
    }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .roket{
        width: 85px;
        height: 85px;
    }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    .roket{
        width: 85px;
        height: 85px;
    }
}
</style>
