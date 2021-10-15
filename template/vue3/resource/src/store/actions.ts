import { fetch } from '@/rapper';

const actions = {
  getUserInfo({ commit }: { commit: any }): void {
    fetch['GET/keycloak/web/user/getuserinfo']().then((res) => {
      commit('UPDATE_USERINFO', res.body);
    });
  },
};

export default actions;
