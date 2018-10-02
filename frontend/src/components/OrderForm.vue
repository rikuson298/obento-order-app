<template lang="pug">
  div.order-form(id="order-form")
    .page-title
      p 注文する
    .form-label
      p お名前(絵文字は使えません)
    .form-control
      input.form-input(id="order-user-name" type="text" v-model="userName" placeholder="入力してください")
    .form-label
      p 注文日
    div(v-if="!!orders")
      ul.form-order-list
        li.form-order-list-item
          input(type="checkbox" v-on:change="onChageAllCheck" id="'allCkeck'" v-model="allChecked")
          label.checkbox(for="'allCkeck'") 一括チェック
        li.form-order-list-item(v-for="(order, index) in orders" :key="index")
          input(type="checkbox" v-bind:id="order.id" v-model="order.checked")
          label.checkbox(v-bind:for="order.id") {{ `${order.date}(${order.day_of_week_ja})` }}

    .errors(v-if="errors.length > 0")
      .error-msg(v-for="error in errors")
        p {{ error }}
    .order-btn(v-on:click="craeatOrders")
      p.order-btn-text 注文を
      p.order-btn-text 登録する
    router-link.back-btn(to="/")
      p.back-btn-text 一覧に戻る
</template>

<script>
import axios from 'axios';

const hostName = 'https://test-obento-order-app.herokuapp.com/';

export default {
  name: 'order-form',
  title: '新規注文',
  data () {
    return {
      orders: [],
      errors: [],
      userName: '',
      allChecked: false,
    }
  },
  methods: {
    getOrders: function() {
      axios.get(`${hostName}/api/order_users_relations/new`)
        .then((response) => {
          this.orders = response.data
        })
        .catch(() => {
        });
    },
    craeatOrders: function() {
      const orderIds = this.orders.filter(o => o.checked).map(o => o.id)
      if (!this.validetionForm(orderIds)) return
      axios.post(`${hostName}/api/order_users_relations/bulk_create`,{
        order_users_relation: {
          user_name: this.userName,
          order_ids: orderIds
        },
      }).then(() => {
        this.errors = []
        this.$router.push('/')
      }).catch(() => {
      })
    },
    validetionForm: function(orderIds) {
      let errors = []
      if (!this.userName) {
        errors.push('お名前を入力してください')
      }
      if (orderIds && orderIds.length < 1) {
        errors.push('注文日を1つ以上選択してください')
      }
      if (errors.length > 0) {
        this.errors = errors
        return false
      }
      return true
    },
    onChageAllCheck: function() {
      this.orders = this.orders.map((order) => {
        return {
          ...order,
          checked: this.allChecked
        }
      })
    }
  },
  mounted: function() {
    this.getOrders();
  }
}
</script>

<style lang="scss">
.order-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
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
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

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
  .form-order-list {
    padding: 10px 50px;
  }
  .form-order-list-item {
    display: flex;
    justify-content: space-around;
    margin: 15px;
    font-weight: bold;
  }
  .errors {
    margin: 10px auto;
    color: red;
    text-align: center;
  }
}
</style>