<template>
    <li @click="$emit('see-user')">
        <div class="wrapper">
            <img :src="user.image"/>
            <span class="desc">
                <p>{{user.name}}</p>
                <p>{{user.address}}</p>
            </span>
        </div>
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

<style scoped>
img{
    max-width: 150px;
    border-radius: 0.6em;
}

.wrapper{
    position: relative;
}

.desc{
    text-align: center;
    position: absolute;
    margin-top: 40px;
    top: 0;
    left: 0;
    right: 0;
    color: white;
    font-weight: bold;
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s, visibility .2s;
}

.wrapper:hover .desc {
  visibility: visible;
  opacity: 1;
}

li{
    list-style: none;
    margin: 0 0 60px 60px;
    cursor: pointer;
}

li:hover{
    opacity: 0.8;
}
</style>
