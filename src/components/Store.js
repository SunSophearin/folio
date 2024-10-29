import { ref } from "vue";

export const showMenuLeft=ref(false);
export const showPopup=ref(false);
export const clickback=ref(true);
export const projectList=ref([
    {
        id:'1',
        title:'Logical Computer',
        isactive:false,
        img:'/assets/img/rin-lgc.png',
        link:'https://rin-lgc.vercel.app/',
        devo:'NuxtJS with Element UI Plus'
    },
    {
        id:'2',
        title:'TOA Cambodia',
        isactive:false,
        img:'/assets/img/toa.png',
        link:'https://rin-toa.vercel.app/',
        devo:'Vue with boostrap'
    },
    {
        id:'3',
        title:'Technology Cambodia',
        isactive:true,
        img:'/assets/img/tech.png',
        link:'https://tech-cambodia.netlify.app/',
        devo:'Vue(boostrap) with API(directus)'
    },
    {
        id:'4',
        title:'Portfolio',
        isactive:false,
        img:'/assets/img/polio.png',
        link:'https://portfolio-sunsophearin.vercel.app/',
        devo:'Vue with boostrap'
    },
    
]);