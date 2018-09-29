<template lang="pug">
  div(id="order-list")
    .title-area
      .form-label
        p 注文状況一覧
      .list-description
        p 注文を取り消す場合は該当日付の名前をクリックしてください
        a(href="http://www.tamagoya.co.jp/menu_list/" target="_blank") お弁当のメニュー
    ul.order-list
      li.order-item
        ul.order-item-cell-wapper
          li.order-item-cell.is-title
            p 日付
          li.order-item-cell.is-title
            p 天気
          li.order-item-cell.is-title
            p 注文状況
          li.order-item-cell.is-title.is-user
            p 注文者
      li.order-item(v-for="order in orders" :key=index)
        ul.order-item-cell-wapper
          li.order-item-cell.is-title
            p {{ `${order.date}(${order.day_of_week_ja})` }}
          li.order-item-cell
            p -
          li.order-item-cell
            p {{ `${order.order_users_relations.length}/10` }}
          li.order-item-cell.is-user(v-for="user in order.order_users_relations" :key=index)
            p {{ user.user_name }}
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
  .title-area {
    padding: 15px
  }
  .list-description {
    font-size: 12px;
    font-weight: bold;
  }
  .order-list {
    width: 100%;
    overflow-x: auto;
    display: flex;
  }
  .order-item {
    font-size: 14px;
    font-weight: bold;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    &:first-child{
      margin-left: 15px;
      border-left: 1px solid gray;
    }
    &:last-child{
      margin-right: 15px;
    }
    .order-item-cell-wapper{
      height: 100%;
    }
    .order-item-cell{
      width: 75px;
      padding: 10px;
      border-bottom: 1px solid gray;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      &:first-child{
        border-top: 1px solid gray;
      }
      &.is-title{
        background-color: bisque;
        &.is-user{
          height: calc(100% - 126px); // FIXME: ハードコード
        }
      }
      &.is-user{
        border-bottom: 0;
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
}
</style>