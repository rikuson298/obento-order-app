<template>
  <div id="app-task">
    <form v-on:submit.prevent="postTask">
      <input id="new-task-form" type="text" v-model="newTask" placeholder="やりたいことは...">
    </form>
    <ul id="task-list">
      <li class="task" v-for="task in tasks" :key=task.text><p>{{ task.text }}</p><button class="delete-button" v-on:click="deleteTask(task.id)">×</button></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const hostName = 'localhost:3000';
const path = '/api/order'

export default {
  name: 'app-task',
  data () {
    return {
      tasks: [],
      newTask: '',
    }
  },
  methods: {
    getTasks: function() {
      axios.get(`http://${hostName}${path}s`)
        .then((response) => {
          this.tasks = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    postTask: function() {
      axios.post(`http://${hostName}${path}`,
          `task[text]=${this.newTask}`
        )
        .then((response) => {
          this.getTasks();
          this.newTask = '';
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteTask: function(id) {
      axios.delete(`http://${hostName}${path}/${id}`)
        .then((response) => {
          this.getTasks();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted: function() {
    this.getTasks();
  }
}
</script>

<style>

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

#app-task {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#new-task-form {
  width: 100%;
  height: 30px;
}

#task-list {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  border-bottom: dashed 1px gray;
}

.delete-button {
  width: 20px;
  height: 20px;
  margin: 0 8px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 50%;
}

</style>