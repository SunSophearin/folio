import { ref } from "vue";

export const showMenuLeft=ref(false);
export const showPopup=ref(false);
export const clickback=ref(true);
export const projectList=ref([
    {
        id:'1',
        title:'Technology Cambodia',
        isactive:true,
        img:'/assets/img/tech.png',
        link:'https://tech-cambodia.netlify.app/',
        devo:'Vue(boostrap) with API(directus)'
    },
    {
        id:'2',
        title:'TOA Cambodia',
        isactive:false,
        img:'/assets/img/toa.png',
        link:'https://toakhmer.netlify.app/',
        devo:'Vue with boostrap'
    },
    {
        id:'3',
        title:'Post Khmer',
        isactive:false,
        img:'/assets/img/pka.png',
        link:'https://postkhmerasia.com/',
        devo:'Vue with boostrap'
    },
    {
        id:'4',
        title:'Logical Computer',
        isactive:false,
        img:'/assets/img/lgc.png',
        link:'https://lgc24.com/',
        devo:'Vue with boostrap'
    }
]);