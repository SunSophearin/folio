<script setup>
import {showPopup,showMenuLeft,clickback} from '../components/Store.js'

const clickPopup=()=>{
    showMenuLeft.value=!showMenuLeft.value
    showPopup.value=!showPopup.value
    clickback.value=!clickback.value

}
</script>
<template>
    <div 
    @click="clickPopup()"
    class="popUp"></div>
</template>
<style scoped>
.popUp{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.363);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1900;
}
</style>