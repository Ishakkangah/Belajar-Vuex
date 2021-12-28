<template>
   <div>
      <div class="row">
         <div class="col-md-4" v-for="item in products" :key="item.id">
            <div class="card mt-2">
               <img :src="require('../assets/img/' + item.img)" class="card-img-top" :alt="item.name" />
               <div class="card-body">
                  <h4 class="card-title fw-bold">{{ item.name }}</h4>
                  <p class="card-text">
                     <small> $</small><strong> {{ item.price }}</strong>
                  </p>
                  <a href="#" class="btn btn-primary" @click="addToCart(item)"><i class="bi bi-bag-check-fill"></i> Add to cart</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   name: "productsList",
   methods: {
      ...mapActions(["getProducts", "addToCart"]),
   },
   mounted() {
      this.getProducts();
   },
   computed: {
      ...mapGetters(["products"]),
   },
};
</script>
