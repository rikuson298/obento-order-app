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
          li.order-item-cell.is-title.is-no-border
            p 注文者
      li.order-item(v-for="order in orders" :key=index)
        ul.order-item-cell-wapper
          li.order-item-cell.is-title
            p {{ `${order.date}(${order.day_of_week_ja})` }}
          li.order-item-cell
            p -
          li(v-if="order.status === 'acceptable'"
            v-on:click="order.order_users_relations.length >= order.app_border && onClickStatus(order)"
            :class="getOrderStatusClass(order)")
            p {{ `${order.order_users_relations.length}/${order.app_border}` }}
            img.order-item-cell-icon(
              v-if="order.order_users_relations.length >= order.app_border"
              src=".././assets/svg/phone.svg"
              width="13"
              height="13")
          li.order-item-cell(v-else-if="order.status === 'ordered'")
            p {{ `${order.order_users_relations.length}/${order.app_border}` }}
            img.order-item-cell-icon(
              src=".././assets/svg/check.svg"
              width="13"
              height="13")
          li.order-item-cell.is-disabled(v-else-if="order.status === 'not_ordered'")
            p {{ `${order.order_users_relations.length}/${order.app_border}` }}
          li(v-for="user in order.order_users_relations" :key="user.id")
            .order-item-cell.is-no-border.is-active(
              v-if="order.status === 'acceptable'"
              v-on:click="onClickUser(user, `${order.date}(${order.day_of_week_ja})`)")
              p {{ user.user_name }}
            .order-item-cell.is-no-border.is-no-padding.is-wide(
              v-else-if="order.status === 'ordered'"
              v-on:click="updateUser(user)")
              input(type="checkbox" v-bind:id="user.id" v-model="user.status === 'received'")
              label.checkbox.is-small(v-bind:for="user.id") {{ user.user_name }}
            .order-item-cell.is-no-border.is-disabled(
              v-else-if="order.status === 'not_ordered'")
              p {{ user.user_name }}
          li.order-item-cell.is-no-border.is-alert(v-if="order.status === 'ordered'")
              p 支払ったら チェック！
    router-link.order-btn(to="/new")
      p.order-btn-text 注文する
    
    Toast(
      :isShown="isToastShown === true"
      :onCloseHandler="toastClose",
      :onConformHandler="onConformHandler"
      :text="toastText")
</template>

<script>
import axios from 'axios';
import Toast from './Toast.vue'

const hostName = 'localhost:3000';

export default {
  name: 'order-list',
  data () {
    return {
      orders: [],
      isToastShown: false,
      onConformHandler: () => {} ,
      toastText: '' ,
    }
  },
  components: {
    Toast,
  },
  methods: {
    getOrders: function() {
      axios.get(`http://${hostName}/api/orders`)
        .then((response) => {
          this.orders = response.data;
        })
        .catch(() => {
        });
    },
    updateOrder: function(id, status) {
      axios.put(`http://${hostName}/api/orders/${id}`, {
          order: {
            id,
            status,
          }
        })
        .then(() => {
          this.getOrders();
        })
        .catch(() => {
        });
    },
    deleteUsersOrder: function(id) {
      axios.delete(`http://${hostName}/api/order_users_relations/${id}`)
        .then(() => {
          this.getOrders();
        })
        .catch(() => {
        });
    },
    onClickUser: function(user, date) {
      this.onConformHandler = () => this.deleteUsersOrder(user.id)
      this.toastText = `${user.user_name}さんの${date}の注文を取り消してもよろしいですか？`
      this.isToastShown = true
    },
    updateUser: function(user) {
      axios.put(`http://${hostName}/api/order_users_relations/${user.id}`, {
          status: user.status === 'received' ? 'not_receive' : 'received',
         }).then(() => {
          this.getOrders();
        })
        .catch(() => {
        });
    },
    onClickStatus: function(order) {
      this.onConformHandler = () => this.updateOrder(order.id, 'ordered')
      this.toastText = `${order.date}(${order.day_of_week_ja})を注文済みにしてもよろしいですか？(この操作は取り消せません)`
      this.isToastShown = true
    },
    toastClose: function() {
      this.isToastShown = false
    },
    getOrderStatusClass: function(order) {
      return `order-item-cell ${order.order_users_relations.length >= order.app_border && 'is-active'}`
    }
  },
  mounted: function() {
    this.getOrders();
  }
}
</script>

<style lang="scss">

$list-item-height:   30px;
#order-list {
  padding-bottom: 15px;
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
      min-width: 65px;
      max-width: 85px;
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
        &.is-no-border{
          height: calc(100% - 126px); // FIXME: ハードコード
        }
      }
      &.is-no-border{
        border: 0;
      }
      &.is-no-padding{
        padding: 0;
      }
      &.is-wide{
        min-width: 105px;
        max-width: 105px;
      }
      &.is-active {
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
      &.is-disabled {
        background-color: lightgray;
      }
      &.is-alert {
        color: red;
      }
    }
    .order-item-cell-icon {
      margin: 0 5px;
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