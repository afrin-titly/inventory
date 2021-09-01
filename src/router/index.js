import Inventory from '../components/views/Inventory.vue'
// import Test from '../components/views/Test.vue'
import ItemDetails from '../components/views/ItemDetails.vue'

export const routes = [
    {
        path: "/",
        name: "Inventory",
        component: Inventory
    },
    // {
    //     path: "/test/:id",
    //     name: "Test",
    //     component: Test
    // },
    {
        path: "/item/:id",
        name: "ItemDetails",
        component: ItemDetails
    },
]

