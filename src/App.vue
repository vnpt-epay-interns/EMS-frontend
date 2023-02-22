
<script setup>
import Register from './views/auth/Register/Register.vue';
import SelectingRolePage from './views/auth/Register/SelectingRolePage.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

/* //<style >
// :root {
//     ---primary: #4ade80;
//     --grey: #64748b;
//     --dark: #1e293b;
//     --dark-alt: #334155;
//     --sidebar-width: 300px;
// }

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     background: var(--light);
// }

// button {
//     cursor: pointer;
//     appearance: none;
//     border: none;
//     outline: none;
//     background: none;
// }

// .app {
//     display: flex;

//     main {
//         flex: 1 1 0;
//         padding: 2rem;
//         @media (max-width: 768px) {
//             padding: 6rem;
//         }
//     }

// }
//======= */
:root {
  --primary: #263159;
  --primary-hover: #40559f;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
</style>
