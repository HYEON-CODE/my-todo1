<template>
  <div>
    <div>News</div>
    <list-item :listData="list"></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';

export default {
  components: {ListItem},
  computed: {
    list() {
      return this.$store.state.list
    }
  },
  created() {
    this.$store.dispatch('FETCH_LIST', 'news')
  }
}
</script>

<style> 

</style>