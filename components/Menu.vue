<template>
    <header>
       <h3>{{ title }} </h3>
       <span class="item"><hr><h4>Menu Element</h4><hr></span>
       <span class="item"> <hr><h4>Menu Element</h4><hr></span>
       <span class="item"><hr><h4>Menu Element</h4><hr></span>
        <router-link to='/'>
            <p> -] Admin</p>
        </router-link>
    </header>
</template>

<script>

export default {
    name: 'Menu',   
    props: {
        title: String,
    }
}
</script>

<style scoped>
header{
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    color: #2c3e50;
}


a{
    color: black;
    text-decoration: none;
    position: fixed;
    bottom: 0;   
}

h4{
    margin: 0 30px 0 20px;
}

h3{
    float: left;
    margin-left: 10px;
}

.item{
    max-width: 80%;
    margin-top: 20px;
    cursor: pointer;
}
</style>
