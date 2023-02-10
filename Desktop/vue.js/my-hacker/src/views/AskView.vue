<template>
  <div>
  <div>Ask</div>
  <list-item :listData="list"></list-item>
</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {ListItem},
  computed: {
    list() {
      return this.$store.state.list
    }
  },
  created() {
    this.$store.dispatch('FETCH_LIST', 'ask')
  }
}
</script>

<style> 

</style>