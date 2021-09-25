<template>
<div>
  <div class="container">
        <h1> SIGN IN TO YOUR ACCOUNT </h1>
      <form @submit.prevent="login">
          <div class="mb-3">
              <input type="text" v-model="username" placeholder="Username">
          </div>
          <div class="mb-3">     
              <input type="password" v-model="password" placeholder="Password">
          </div>    
          <button type="submit" class="btn">Login</button>
      </form>
  </div>
  <NotificationList :notifications="notifications" @remove-notification="removeNotification"/>
</div>
</template>

<script>
import NotificationList from '../components/NotificationList'

export default {
  name: 'Login',
  data(){
    return{
      username:'',
      password:'',
      notifications: []
    }
  },
  components:{
    NotificationList
  },
  methods:{
        login(){
          if(this.username=="admin" && this.password == "1234"){
                this.$router.push('users')
            }else{
                this.showNotification("Incorrect username or password",1001)
          }
        },
        removeNotification(id){
            this.notifications = this.notifications.filter((notif) => notif.id !== id)
        },
        showNotification(msg, nid){
            let show = true;
            this.notifications.forEach((notif) => {if(notif.id == nid){show = false}})
            if(show){this.notifications.push({id: nid, message: msg, type: 'dismissible'})}
        }
    }
}
</script>
<style scoped src='@/assets/style/style.css'>
</style>
