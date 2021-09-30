<template>
    <transition-group tag="ul" name="list">
        <User @see-user="$emit('see-user',user.id)" 
                :user="user" 
                :key="user.id" 
                v-for="user in users"/>
    </transition-group>
</template>

<script>
import User from './User'

export default {
    name: 'List',
    props: {
        users: Array
    },
    components: {
        User
    },
    emits: ['see-user']
}
</script>
<style scoped>
ul{
    padding: 0;
    margin: 0;
}
ul li{
    display: inline-table;
}

.list-enter-from{
    opacity: 0;
    transform: scale(0.6) rotate(10deg);
    -moz-transform: scale(0.6) rotate(10deg);
}
.list-enter-to{
    opacity: 1;
    transform: scale(1);
    -moz-transform: scale(1);
}
.list-enter-active{
    transition: all 0.6s ease;
    -moz-transition: all 0.6s ease;
}
</style>
