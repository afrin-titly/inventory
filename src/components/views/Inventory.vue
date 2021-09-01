<template>
    <div v-if="!loading" class="row">
      <div v-for="item in items" :key="item.id" class="card" style="width: 18rem;">
        <router-link :to="{path: '/item/'+item.id}" >
          <img class="card-img-top" :src="item.photo">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
          </div>
        </router-link>
        <div class="card-footer">
          <p class="card-text">{{ item.price}}</p>
          <a @click="addToCart(item)" class="btn btn-primary">+ Add Cart</a>
        </div>
      </div>
    </div>
    <h1 v-else>Loading...</h1>
</template>

<script>
    import axios from "axios"
    export default {
        name: "Inventory",
        // props: ['items'],
        data() {
          return {
            loading: true,
          }
        },
        mounted() {
          this.fetchInventory()
        },
        computed: {
          items() {
            return this.$store.getters.getInventory
          }
        },
        methods: {
            addToCart(item){
                // this.$emit("newItemAdded", item)
                this.$store.commit('addToCart', item)
            },
            fetchInventory() {
              axios.get("http://localhost:3000/items").then(response =>{
                this.$store.commit('setInventory', response.data)
                this.loading = false
              })
            }
        }
    }
</script>

<style scoped>

</style>