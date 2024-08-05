<template>
    <div class="container">
        <div class="row" >
            <div class="col-xxl-12 col-xl-12 col-lg-12 topic" >
                <h2 data-aos="zoom-in" data-aos-once="true">
                    "A good speech should be like a woman's skirt: long enough to cover the subject and short enough to create interest"
                </h2>
            </div>
        </div>
    </div>
</template>
<style scoped>
.topic{
    margin-block: 70px;
    /* padding-block: 40px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.topic h2{
    width: 90%;
    font-size: 55px;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
}

@media (min-width: 5px) and (max-width: 575.98px) {
    .topic h2{
        font-size: 22px;
    }
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .topic h2{
        font-size: 40px;
    }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .topic h2{
        font-size: 40px;
    }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}
</style>