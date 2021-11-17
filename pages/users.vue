<template>
    <div class="userpage">
        <Menu title="logoipsum" />
        <div class="userlist">
            <h1><u>USERS</u></h1>
            <UserList @see-user="seeUser" :users="users"/>
        </div>
        <Popup  :showUser="showUser" @close="showUser=false" :user="user" />
    </div>
</template>

<script>
import Menu from '../components/Menu'
import UserList from '../components/UserList'
import Popup from '../components/Popup'
import { getUsers } from "../firebase";

export default{
    name: 'User',
    components: {
        Menu,
        Popup,
        UserList
    },
    data() {
        return{
            users: [],
            user: null,
            showModal: false,
            showUser: false
        }
    },
    methods: {
        seeUser(id){
            this.user = this.users.find((c) => c.id == id)
            this.showUser = true
        }
    },
    async created(){
        this.users = await getUsers()
    }
}
</script>

<style scoped>
h1{
    text-align: right;
    margin-right: 150px;
    color: #2b414f;
    font-family: 'Courier New', Courier, monospace;
}

.userpage{
    display: flex;
    height: 600px;
}
</style>
