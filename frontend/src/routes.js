import OrderList from './components/OrderList.vue';
import OrderForm from './components/OrderForm.vue';

export default [
    {
        path: '/',
        component: OrderList
    },
    {
        path: '/new',
        component: OrderForm
    }
]
