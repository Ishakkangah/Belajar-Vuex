<template>
   <div>
      <div class="alert alert-info" role="alert" v-if="!cart.length">No transaction yet</div>
      <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="orderPlaced">
         <strong>Successfully!</strong> Transaction was successfully.
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="closeAlert"></button>
      </div>
      <div v-for="(item, index) in cart" :key="item.id">
         <table class="table tabe-borderless">
            <tbody>
               <tr>
                  <th>{{ ++index }}</th>
                  <td><img :src="require('../assets/img/' + item.img)" alt="item.name" width="40" /></td>
                  <td>
                     <strong>{{ item.name }}</strong>
                  </td>
                  <td><button type="button" class="btn-close btn-sm" @click="removeQty(item.id)"></button></td>
               </tr>
            </tbody>
         </table>
         <div class="d-flex justify-content-center">
            <button class="fw-bold bg-secondary rounded-circle mx-1" @click="reduceQty(item.id)" width="30">-</button>
            <p>Total : {{ item.qty }}</p>
            <button class="fw-bold bg-secondary rounded-circle mx-1" @click="addQty(item.id)" width="30">+</button>
         </div>
      </div>
      <div class="d-flex justify-content-center mt-2">
         <button class="float-center btn-lg btn btn-success d-flex" v-if="cart.length" @click="process">
            <div v-if="isProcessing">
               <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
               </div>
            </div>
            <div v-else>
               <i class="bi bi-bag-check-fill"></i>
               <i class="bi bi-currency-dollar"></i>
               {{ totalBuy }}
            </div>
         </button>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   name: "Cart",
   data() {
      return {
         isProcessing: false,
         orderPlaced: false,
      };
   },
   computed: {
      ...mapGetters(["cart"]),
      totalBuy() {
         return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
      },
   },
   methods: {
      ...mapActions(["reduceQty", "addQty", "removeQty", "clearCart"]),
      process() {
         this.isProcessing = true;
         setTimeout(() => {
            this.isProcessing = false;
            this.orderPlaced = true;
            this.clearCart();
            setTimeout(() => {
               this.orderPlaced = false;
            }, 3000);
         }, 1500);
      },
      closeAlert() {
         this.orderPlaced = false;
      },
   },
};
</script>

<style scoped>
.rounded-circle {
   width: 30px;
   border: 0;
   color: aliceblue;
}
</style>
