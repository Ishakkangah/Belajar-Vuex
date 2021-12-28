<template>
   <div id="app">
      <Header />
      <div class="container">
         <div class="d-none d-md-block">
            <div class="row mt-4">
               <div class="col-sm-7">
                  <div class="card-body">
                     <h2 class="cart-title text-start mt-5 mb-2">Product list <strong>Leptop</strong></h2>
                     <ProductsList />
                  </div>
               </div>
               <div class="col-sm-5">
                  <div class="card-body">
                     <h2 class="cart-title text-start mt-5 mb-2"></h2>
                     <Cart />
                  </div>
               </div>
            </div>
         </div>
         <!-- VERSION MOBILE -->
         <div class="d-sm-block d-md-none">
            <div class="col-sm-4">
               <div class="card-body">
                  <Cart />
               </div>
            </div>
            <div class="row mt-4">
               <div class="col-sm-8">
                  <div class="card-body">
                     <h2 class="cart-title text-start mt-5 mb-2">Product list <strong>Leptop</strong></h2>
                     <ProductsList />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ProductsList from "@/components/productsList.vue";
import Cart from "@/components/Cart.vue";

export default {
   name: "App",
   components: {
      Header,
      ProductsList,
      Cart,
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 0;
}
</style>
