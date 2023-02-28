<template>
    <div class="loading_container">
        <span class="loader"></span>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .loading_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }

    .loader,
    .loader:before,
    .loader:after {
    background: #263159;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    }

    .loader {
    color: #263159;
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    }

    .loader:before,
    .loader:after {
    position: absolute;
    top: 0;
    content: '';
    }

    .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    }

    .loader:after {
    left: 1.5em;
    }

    @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
        box-shadow: 0 0;
        height: 4em;
    }
    40% {
        box-shadow: 0 -2em;
        height: 5em;
    }
    }

    @keyframes load1 {
    0%,
    80%,
    100% {
        box-shadow: 0 0;
        height: 4em;
    }
    40% {
        box-shadow: 0 -2em;
        height: 5em;
    }
    }

    .loader,
    .loader:before,
    .loader:after {
    background: #263159;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    }

    .loader {
    color: #263159;
    text-indent: -9999em;
    margin: 88px;
    }
// .loader {
//     width: 48px;
//     height: 48px;
//     border: 5px solid #FFF;
//     border-bottom-color: transparent;
//     border-radius: 50%;
//     display: inline-block;
//     box-sizing: border-box;
//     animation: rotation 1s linear infinite;
//     }

//     @keyframes rotation {
//     0% {
//         transform: rotate(0deg);
//     }
//     100% {
//         transform: rotate(360deg);
//     }
//     } 
</style>