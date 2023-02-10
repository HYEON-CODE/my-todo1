<template>
  <div>
    <div class="user_profile">
        <span>by
        <strong><router-link :to="`/user/${askItem.user}`">{{askItem.user}}</router-link></strong></span>
        <b>{{ askItem.time_age }}</b>
    </div>
    <h2>{{ askItem.title }}</h2>
    <div v-html="askItem.content"></div>
    <ul class="comments">
        <li v-for="item in askItem.comments" :key="item.id">
            <i class="fas fa-arrow-right"></i>
            <div v-html="item.content"></div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed: {
        askItem() {
            return this.$store.state.item
        }
    },
    created() {
        this.$store.dispatch('FETCH_ITEM', this.$route.query.id)
    }
}
</script>

<style>
h2 {
    margin: 5px 0 30px;
    font-size: 32px;
}
.comments {margin-top:30px;font-size:16px;color:rgb(131, 96, 8)}
.comments ul {margin:10px 0}
.comments li {
    position: relative;
    padding-left:40px;
    margin-top:40px; 
    padding-top:40px; 
    border-top:1px solid rgb(100, 65, 25)
    }
.comments li > i.fa-arrow-right {position:absolute; left:10px; top:42px;}
.user_profile > span {margin-right:5px}
.user_profile > strong > a {color:#2455c3; margin-right:10px;}
.user_profile > b {font-size: 14px; color:#999}
.user_profile .created {font-size:18px; color:red; margin-right:20px;}
.user_profile .karma {font-size:18px; color:red; margin-right:20px;}
</style>