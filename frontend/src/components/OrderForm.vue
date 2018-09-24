<template lang="pug">
  div.order-form(id="order-form")
    p Obent Order App
    router-link.order-btn(to="/new")
      p.order-btn-text 注文を
      p.order-btn-text 登録する
    router-link.back-btn(to="/")
      p.back-btn-text 一覧に戻る
</template>

<script>
import axios from 'axios';

const hostName = 'localhost:3000';
const path = '/api/orders';

export default {
  name: 'order-form',
  methods: {
    Order: function() {
      axios.post(`http://${hostName}${path}`,
          `order[text]=${this.newOrder}`
        )
        .then(() => {
          this.getOrders();
          this.newOrder = '';
        })
        .catch(() => {
        });
    },
  },
}
</script>

<style lang="scss">
.order-form {
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
  .back-btn {
    margin: 20px auto;
    padding: 5px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    width: 100px;
  }
  .back-btn-text {
    margin: 5px 0;
    letter-spacing: 1px;
  }
}
</style>