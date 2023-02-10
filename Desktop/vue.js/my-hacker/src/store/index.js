// ./store/index.js
import { createStore } from 'vuex'
import { fetchListItem, fetchUserInfo, fetchAskItem } from '../api/index.js'
// ./api/index.js에 설정된 fetchUserInfo를 전역에 import 한다. 

export default createStore({
  state: {
    // 데이터 저장하는 일
    list: [],
    user: '', // 사용할 데이터 정의
    item: '',
  },
  mutations: {
    // state에 저장
    SET_LIST(state, list) {
      state.list = list;
    },
    SET_USER(state, user) { // 받아온 데이터 저장
      state.user = user;
    },
    SET_ITEM(state, id) { // 받아온 데이터 저장
      state.item = id;
    }
  },
  actions: {
    // api/index.js에 데이터 가져오는 행동대장들을 호출해서 받고, 뮤테이션에 넘김
    // promise 방식
    FETCH_LIST(context, pageName) {
      return fetchListItem(pageName)
        .then((res) => {
          context.commit('SET_LIST', res.data);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async FETCH_USER(context, userName) { // api/index.js로 요청되거 보내주기
      try {
        const res = await fetchUserInfo(userName);  // 요청결과 받아오기
        context.commit('SET_USER', res.data); // 결과를 mutations에 넘겨줌
        return res;
      } catch (err) {
        console.log(err);
      }
    },
    FETCH_ITEM(context, id) {
      return fetchAskItem(id)
        .then((res) => {
          context.commit('SET_ITEM', res.data);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
