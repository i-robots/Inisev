<template>
    <li class="client"  @click="$emit('see-client')">
        <p>{{ client.first_name }} {{ client.last_name }} </p>
        <img v-src="user.imgSrc"/>
        <p>{{ user.first_name }} </p>
        <p>{{ user.last_name }} </p>
        <p>{{user.address}}</p>
        <p>{{client.phone_no}}</p>
    </li>
</template>

<script>
export default{
    name: 'Item',
    props: {
        user: Object
    }
}
</script>
