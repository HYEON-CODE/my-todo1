<template>
    <div class="user_profile">
      <strong>User name : {{userInfo.id}}</strong>
      <b>Write : {{userInfo.created}}</b>
      <b>Karma : {{userInfo.karma}}</b>
    </div>
  </template>
  
  <script>
  export default {
    computed:{
      userInfo() {
        return this.$store.state.user;
              // vuex와 api셋팅이 끝나면 가져올 수 있을 것이다.
      }
    },
    created() {
      this.$store.dispatch('FETCH_USER', this.$route.params.id);
          // this.$route.params.id 정보와 함께 FETCH_USER라는 신호를 보낸다.
    }
  }
  </script>
  
  <style>
  .user_profile {font-size: 24px}
  .user_profile > * {display: block;}
  .user_profile > span {margin-right:5px}
  .user_profile > strong {color:#2455c3; }
  </style>