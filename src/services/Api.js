import axios from 'axios';

export default () => axios.create({
  baseURL: 'https://moviefinder-vue.herokuapp.com',
  /* baseURL: 'http://localhost:5000', */
});
