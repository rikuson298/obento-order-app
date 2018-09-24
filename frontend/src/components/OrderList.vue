<template lang="pug">
  div(id="order-list")
    ul.order-list
      li.order(v-for="order in orders" :key=index)
        p {{ order.name }}
        button.delete-button(v-on:click="deleteOrder(order.id)") ×
    router-link.order-btn(to="/new")
      p.order-btn-text 注文する
</template>

<script>
import axios from 'axios';

const hostName = 'localhost:3000';
const path = '/api/orders';

export default {
  name: 'order-list',
  data () {
    return {
      orders: [],
      newOrder: '',
    }
  },
  methods: {
    getOrders: function() {
      axios.get(`http://${hostName}${path}`)
        .then((response) => {
          this.orders = response.data;
        })
        .catch(() => {
        });
    },
    deleteOrder: function(id) {
      axios.delete(`http://${hostName}${path}/${id}`)
        .then(() => {
          this.getOrders();
        })
        .catch(() => {
        });
    },
  },
  mounted: function() {
    this.getOrders();
  }
}
</script>

<style lang="scss">

$list-item-height:   30px;
#order-list {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.order-list {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  .order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: $list-item-height;
    border-bottom: dashed 1px gray;
    p {
      margin: 0;
      padding-left: 10px;
    }
  }
}
.order-btn {
  margin: 20px auto;
  padding: 5px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.order-btn-text {
  margin: 5px 0;
  letter-spacing: 1px;
}
</style>