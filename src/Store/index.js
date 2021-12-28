import Vue from 'vue';
import Vuex from 'vuex';
import products from '../mock/products.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    getters: {
        products: state => state.products,
        cart: state => state.cart
    },
    actions: {
        getProducts({ commit }) {
            commit("getProductsData");
        },
        addToCart({ commit }, item) {
            commit("addItemToCart", item)
        },
        reduceQty({ commit }, id) {
            commit("reduceQty", id);
        },
        addQty({ commit }, id) {
            commit("addQty", id)
        },
        removeQty({ commit }, id) {
            commit("removeQty", id)
        },
        clearCart({ commit }) {
            commit("clearCart");
        }
    },
    mutations: {
        getProductsData(state) {
            state.products = products
        },
        addItemToCart(state, item) {
            const products = state.cart.find(product => product.id === item.id);
            if (products) {
                products.qty++
            } else {
                state.cart.push({ ...item, qty: 1 });
            }
        },
        reduceQty(state, id) {
            const product = state.cart.find(product => product.id === id);
            if (product.qty > 1) {
                product.qty--
            } else {
                state.cart = state.cart.filter(product => product.id !== id)
            }
        },
        addQty(state, id) {
            const product = state.cart.find(product => product.id === id);
            product.qty++
        },
        removeQty(state, id) {
            state.cart = state.cart.filter(product => product.id !== id)
        },
        clearCart(state) {
            state.cart = [];
        }
    },
})