<template>
    <ul class="list-group">
          <li class="list-group-item">
            <span class="item-name"> Name </span>
            <span class="item-price float-right"> Price </span>
          </li>
          <li v-for="(item,index) in items" :key="item.id" class="list-group-item">
            <button class="btn btn-sm btn-danger" @click="removeItem(index)"> - </button>
            <span class="item-name"> {{item.title}} </span>
            <span class="item-price float-right"> {{item.price}} </span>
          </li>
          <li class="list-group-item">
            <span class="item-name"> Total </span>
            <span class="item-price float-right"> ${{ totalPrice }} </span>
          </li>
        </ul>
</template>

<script>
    export default {
        name: "Cart",
        props: ['items'],
        computed: {
          totalPrice(){
            var total = 0.0
            this.items.forEach(item => {
              total += parseFloat(item.price)
            })
            return total
          }
        },
        methods: {
          removeItem(index) {
            this.$emit("removeItem", index)
          }
        }
    }
</script>

<style scoped>

</style>