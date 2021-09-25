<template>
    <header>
        <div><img src="https://www.google.com/search?q=logo&sxsrf=AOaemvLl_W5FuHuO_3nw_pzHCFWGIHsH3Q:1632566733233&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B2JTakzmYj7C1LM%252CKus-4YDXfn7roM%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BCcv_RvEQQ41FEM%252CKus-4YDXfn7roM%252C_%253Bz20VsyMwKMnQJM%252CldkRqsCRrSjoyM%252C_%253BnL8CAgm83ZNLkM%252C4AAkN3JBEU6mOM%252C_%253BSnt_fV0oaRcAOM%252CqvQL6wird7ffAM%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_%253BQCvogC48Oba-IM%252Cho91D9YnEeo1TM%252C_%253BH7dPFGVoi8q_AM%252CQf1mHEuQYVEMIM%252C_&vet=1&usg=AI4_-kS99MY-nc5YhTYHiKSq8-L-SDHqAA&sa=X&ved=2ahUKEwiT7dKB-ZnzAhVDOBoKHQKnD2AQ9QF6BAgOEAE#imgrc=-eDJED2XpumqjM">
        <h1>{{ title }} </h1></div>
        <div>
        <router-link to='/'>
            <p>Log Out<p/>
        </router-link>
        </div>
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
    justify-content: space-between;
    align-items: center;
    color: #2c3e50;
}

h1,img{
    float: left;
    margin-left: 20px;
}
</style>
