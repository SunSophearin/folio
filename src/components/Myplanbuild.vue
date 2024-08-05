<template>
    <div class="container">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 planbuil">
                <h3>
                    I am a front-end web developer working
                     on the visual part of the website.
                      I design the physical layout of each page,
                       integrate graphics, and use Vue Typescript
                        to enhance the site. To make the web seem nice,
                         friendly, convenient, responsive, and speedy, 
                         this task requires both creativity and logical thought.
                </h3>
            </div>
        </div>
    </div>
</template>
<style scoped>
.planbuil{
    margin-block: 30px;
}
.planbuil h3{
    text-align: center;
    font-size: 20px;
    font-family: "Merriweather", serif;
    color: #333232;
    letter-spacing: 2px;
    word-spacing: 2px;
    line-height: 2;
}
@media (max-width: 575.98px) {}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    .planbuil{
        margin: auto;
        width: 70%;
    }
    .planbuil h3{
        line-height: 2;
    }
}
</style>