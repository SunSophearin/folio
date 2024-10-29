
<template>
    <div class="container">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 boxSocail">
                <h1>JOIN OUR SOCIAL NETWORKS!</h1>
                <ul data-aos="fade-up" data-aos-once="true">
                    <li ><a  href="https://www.facebook.com/zi.rin.75?mibextid=ZbWKwL" >
                        <img src="../assets/img/fb.png" alt="" >
                    </a></li>
                    <li><a href="https://www.instagram.com/zi.rin?igsh=ZGUzMzM3NWJiOQ==">
                        <img src="../assets/img/ig.png" alt="">
                    </a></li>
                    <li><a href="https://t.me/Sunsophearin">
                        <img src="../assets/img/tele.png" alt="">
                    </a></li>
                    <li><a href="https://github.com/SunSophearin?tab=overview&from=2024-06-01&to=2024-06-30">
                        <img src="../assets/img/github.png" alt="">
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.boxSocail{
    margin-top: 20px;
    color: #6b6f75;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.boxSocail h1{
    display: block;
    font-size: 13px;
}
.boxSocail ul{
    width: 50%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-content: center;
    
}
.boxSocail ul li a{
    display: block;
    padding: 15px;
}
.boxSocail ul li a:hover{
    border-radius: 90%;
    box-shadow: 0px 5px 15px #FFC837;
}
.boxSocail ul li a img{
    width: 40px;
    object-fit: cover;
}

@media (max-width: 575.98px) {}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .boxSocail{
        padding: 96px;
        margin-top: 0;
    }
    .boxSocail h1{
        margin-bottom: 50px;
    }
    .boxSocail ul li a{
        padding: 25px;
    }
    .boxSocail ul li a img{
        width: 70px;
    }
    
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    .boxSocail{
        padding: 96px;
        margin-top: 0;
    }
    .boxSocail ul li a img{
        width: 70px;
    }
    .boxSocail h1{
        margin-bottom: 50px;
    }
}
</style>