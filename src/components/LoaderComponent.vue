<template>
    <div class="loader-container">
        <div class="loader JS_on">
            <span class="binary"></span>
            <span class="binary"></span>
            <span class="getting-there">LOADING STUFF...</span>
        </div>
    </div>
</template>

<script>
export default{}
</script>

<style scoped>
.loader-container{
    width: 100vw;
    height: 90vh;
    background-image: linear-gradient(#d0d0d0, #ffcab0);
    display: flex;
    justify-content: center;
    align-items: center;
}
.loader {
    width: 130px;
    height: 170px;
    position: relative;
    font-family: inherit;
  }
  
  .loader::before, .loader::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: 30px;
    left: 15px;
    z-index: 1;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 20px solid #1b2a33;
    transform: scale(0);
    transition: all 0.2s ease;
  }
  
  .loader::after {
    border-right: 15px solid transparent;
    border-bottom: 20px solid #162229;
  }
  
  .loader .getting-there {
    width: 120%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: -7%;
    font-size: 12px;
    letter-spacing: 2px;
    color: rgb(0, 0, 0);
  }
  
  .loader .binary {
    width: 100%;
    height: 140px;
    display: block;
    color: rgb(0, 0, 0);
    position: absolute;
    top: 0;
    left: 15px;
    z-index: 2;
    overflow: hidden;
  }
  
  .loader .binary::before, .loader .binary::after {
    font-family: "Lato";
    font-size: 24px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  
  .loader .binary:nth-child(1)::before {
    content: "0";
    animation: a 1.1s linear infinite;
    color: black;
  }
  
  .loader .binary:nth-child(1)::after {
    content: "0";
    animation: b 1.3s linear infinite;
    color: black;

  }
  
  .loader .binary:nth-child(2)::before {
    content: "1";
    animation: c 0.9s linear infinite;
    color: black;

  }
  
  .loader .binary:nth-child(2)::after {
    content: "1";
    animation: d 0.7s linear infinite;
    color: black;

  }
  
  .loader.JS_on::before, .loader.JS_on::after {
    transform: scale(1);
    color: black;

  }
  
  @keyframes a {
    0% {
      transform: translate(30px, 0) rotate(30deg);
      opacity: 0;
    }
  
    100% {
      transform: translate(30px, 150px) rotate(-50deg);
      opacity: 1;
    }
  }
  
  @keyframes b {
    0% {
      transform: translate(50px, 0) rotate(-40deg);
      opacity: 0;
    }
  
    100% {
      transform: translate(40px, 150px) rotate(80deg);
      opacity: 1;
    }
  }
  
  @keyframes c {
    0% {
      transform: translate(70px, 0) rotate(10deg);
      opacity: 0;
    }
  
    100% {
      transform: translate(60px, 150px) rotate(70deg);
      opacity: 1;
    }
  }
  
  @keyframes d {
    0% {
      transform: translate(30px, 0) rotate(-50deg);
      opacity: 0;
    }
  
    100% {
      transform: translate(45px, 150px) rotate(30deg);
      opacity: 1;
    }
  }
  
</style>
