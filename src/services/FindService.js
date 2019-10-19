import Api from '@/services/Api';

export default {
  findMovie(params) {
    return Api().post('findmovie', params);
  },
};
