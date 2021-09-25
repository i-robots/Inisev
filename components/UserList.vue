<template>
    <transition-group tag="ul" name="list">
        <User @see-client="$emit('see-client',client._id)" 
                @delete-item="$emit('delete-item',client._id)" :client="client" 
                :key="client._id" v-for="client in listItems"/>
    </transition-group>
</template>

<script>
import User from './User'

export default {
    name: 'List',
    props: {
        listItems: Array
    },
    components: {
        User
    },
    emits: ['delete-item','see-client']
}
</script>
<style scoped>
ul{
    width: fit-content;
    margin-top: 15px; 
    padding: 10px 10px;
    border-radius: 0.2em;
    background-image: linear-gradient(to right, #adb6bb,#dedad4);  
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
