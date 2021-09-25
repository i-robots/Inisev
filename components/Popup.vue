<template>
      <transition-group name="fade" tag="div">
        <div class="modal-overlay" v-if="showUser" key="101"></div>
        <div v-if="showUser" class="modal" key="103">
            <img v-src="user.imgSrc"/>
            <p>{{ user.first_name }} </p>
            <p>{{ User.last_name }} </p>
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