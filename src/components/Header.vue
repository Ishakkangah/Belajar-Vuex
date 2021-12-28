<template>
   <div>
      <nav class="navbar navbar-dark bg-success" @keydown="gantiWarna">
         <div class="container">
            <a class="navbar-brand">Test</a>
            <div class="dropdown">
               <a class="nav-link text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Cart <span class="badge bg-danger">{{ cart.length }}</span>
               </a>
               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li v-for="item in cart" :key="item.id">
                     <a class="dropdown-item" href="#">{{ item.name }}</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
   name: "Navbar",
   computed: {
      ...mapGetters(["cart"]),
   },
};
</script>
