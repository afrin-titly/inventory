<template>
    <div v-if="item" class="row">
        <div class="col-sm-6">
            <img :src="item.photo" />
        </div>
        <div class="col-sm-6">
            <h3> {{ item.title}} </h3>
            <p> {{item.description}} </p>
            <p> {{ item.price}} </p>
            <a @click="addToCart(item)" class="btn btn-primary">+ Add to Cart</a>
        </div>
    </div>
    <h1 v-else> Loading...</h1>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ItemDetails",
        data() {
            return {
                item: null
            }
        },
        mounted() {
            this.fetchItem()
        },
        methods: {
            fetchItem() {
                axios.get("http://localhost:3000/item/"+this.$route.params.id).then(response => {
                    this.item = response.data
                })
            },
            addToCart(item){
                return this.$store.commit('addToCart', item)
            }
        }
    }
</script>

<style scoped>

</style>