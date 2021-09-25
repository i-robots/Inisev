<template>
    <div>
        <Menu title="User List" />
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal"></div>
        </transition>
        <UserList @see-user="seeUser" :users="users"/>
        <Popup  :showUser="showUser" @close="showUser=false" :user="user" />
        <NotificationList :notifications="notifications" 
            @remove-notification="removeNotification"/>
    </div>
</template>

<script>
import Menu from '../components/Menu'
import UserList from '../components/UserList'
import Popup from '../components/Popup'
import NotificationList from '../components/NotificationList' 

export default{
    name: 'User',
    components: {
        Menu,
        Popup,
        NotificationList,
        UserList
    },
    data() {
        return{
            users: [],
            user: null,
            showModal: false,
            showUser: false,
            delId: '',
            notifications: []
        }
    },
    methods: {
        async fetchusers(){
            const res = await fetch('https://api.mocki.io/v1/134409c3')
            const data = await res.json()
            return data
        },
        seeUser(id){
            this.user = this.users.find((c) => c._id == id)
            this.showUser = true
        },
        addNotification(notif){
            this.notifications.push(notif)
        },
        removeNotification(id){
            this.notifications = this.notifications.filter((notif) => notif.id !== id)
        }
    },
    async created(){
        this.users = await this.fetchusers()
    }
}
</script>

<style>
.modal-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
}

.modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    z-index: 98;
    width: 100%;
    max-width: 400px;
    background-color: rgb(243, 228, 225);
    border-radius: 16px; 
    padding: 25px;
}

.modal h1{
    color: rgba(148, 37, 37, 0.884);
}

.modal button{
    margin-right: 20px;
}

button:hover {
    box-shadow: 1px 1px rgba(87, 81, 81, 0.6);
}

.fade-leave-active{
    transition: opacity .5s;
}

.fade-leave-to {
    opacity: 0;
}

.slide-leave-active {
    transition: transform .2s;
}
</style>
