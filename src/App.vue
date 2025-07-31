<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <div id="layout"> -->
    <!-- 3.4 -->
    <div class="text-center font-sans text-gray-700 antialiased">
   <header>
     <div class="wrapper">

        <div id="flashMessage" class="animate-fade" v-if="message">
          <h4>{{ message }}</h4>
        </div>
       <!-- <nav>
         <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink> |
         <RouterLink :to="{ name: 'about' }">About</RouterLink> |
         <RouterLink :to="{ name: 'students' }">Student</RouterLink> -->
         <!-- 9 -->
         <nav class="py-6"> <RouterLink :to="{ name: 'event-list-view' }" class="font-bold text-gray-700" exact-active-class="text-green-500">Event</RouterLink> |
          <RouterLink :to="{ name: 'about' }" class="font-bold text-gray-700" exact-active-class="text-green-500">About</RouterLink> |
          <RouterLink :to="{ name: 'students' }" class="font-bold text-gray-700" exact-active-class="text-green-500">Student</RouterLink>
        </nav>
     </div>
   </header>


   <RouterView />
 </div>
</template>

<style >
/* #layout {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
/* remove */
/* nav {
  padding: 30px;
} */

/* nav a {
 font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

h2 {
  font-size: 20px;
}

</style>
