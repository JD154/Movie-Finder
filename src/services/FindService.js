import Api from '@/services/Api';

export default {
  findMovie(params) {
    return Api().post('api', params);
  },
};
