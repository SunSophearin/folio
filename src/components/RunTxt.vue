
<template>
   <p>I'm Sun Sophearin</p>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');


p {
  border-right: solid 5px #ff8f00;
  white-space: nowrap;
  overflow: hidden;    
  /* font-family: 'Source Code Pro', monospace;   */
  font-family: "Playfair Display", serif;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 58px;
  color: black;
  /* width: 400px; */
}

/* Animation */
p {
  animation: animated-text 4s linear 1s 1 normal both,
             animated-cursor 600ms linear infinite;
}

/* text animation */

@keyframes animated-text{
  from{width: 0;}
  to{width: 550px;}
}

/* cursor animations */

@keyframes animated-cursor{
  from{border-right-color: #ff8f00;}
  to{border-right-color: transparent;}
}

@media (min-width: 0px) and (max-width: 575.98px) {
    p {
        font-size: 27px;
    }
    @keyframes animated-text{
        from{width: 0;}
        to{width: 270px;}
    }

}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    p {
        font-size: 50px;
    }
    @keyframes animated-text{
        from{width: 0;}
        to{width: 480px;}
    }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    p {
        font-size: 64px;
    }
    @keyframes animated-text{
        from{width: 0;}
        to{width: 600px;}
    }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    p {
        font-size: 42px;
    }
    @keyframes animated-text{
        from{width: 0;}
        to{width: 400px;}
    }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}
</style>