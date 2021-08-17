<template>
    <div class="row">
          <div v-for="item in items" :key="item.id" class="card" style="width: 18rem;">
            <img class="card-img-top" :src="item.photo">
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{ item.price}}</p>
              <a @click="addToCart(item)" class="btn btn-primary">+ Add Cart</a>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
        name: "Inventory",
        props: ['items'],
        methods: {
            addToCart(item){
                this.$emit("newItemAdded", item)
            }
        }
    }
</script>

<style scoped>

</style>