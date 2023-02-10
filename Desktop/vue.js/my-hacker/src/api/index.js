//./api/index.js
import axios from 'axios';

// 1.http request & respons 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

// 2.api함수들을 정리 : 데이터를 가져오는 행동 대장들
function fetchListItem(pageName) {
  return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}
function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}/user/${userName}.json`);
}
function fetchAskItem(askId) {
  return axios.get(`${config.baseUrl}/item/${askId}.json`);
}
// 3. export : 행동대장들을 actions가 쓸 수 있도록 export해둠.
export { fetchListItem, fetchUserInfo, fetchAskItem };