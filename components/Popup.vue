<template>
      <transition-group name="fade" tag="div">
        <div class="modal-overlay" v-if="showUser" key="101"></div>
        <div v-if="showUser" class="modal" key="103">         
            <img :src="user.image"/>
            <div>
                <p>{{ user.name }} </p>
                <p>{{ user.email }} </p>
                <p>{{ user.phone }} </p>
                <p>{{ user.address.city }} </p>
                <p>{{ user.address.street }} </p>
                <p>{{ user.website }} </p>
            </div>
             <span @click="$emit('close')" class="close">&times;</span>
        </div>
      </transition-group>
</template>

<script>
export default {
    props:{
        showUser: Boolean,
        user: Object,
    }
}
</script>

<style scoped src="@/assets/style/popup.css">
</style>