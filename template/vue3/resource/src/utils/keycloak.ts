import config from '../config';
const Keycloak = require('keycloak-js');
import { axios } from '../request';
import request from '../request';

export function getKeycloakUrl(): string {
  const keycloakUrl = document.getElementsByTagName('body')[0].getAttribute('keycloakurl') || config.keycloakUrl;
  return keycloakUrl;
}

const initOptions = {
  onLoad: 'login-required',
  realm: 'TechnicalMiddlePlatform',
  url: getKeycloakUrl(),
  clientId: 'dlp-train-front',
  'ssl-required': 'external',
  resource: 'dlp-train-front',
  'public-client': true,
  'confidential-port': 0,
};

export const keycloak = Keycloak(initOptions);

export function checkLogin(): Promise<any> {
  return keycloak
    .init({
      onLoad: 'login-required',
      checkLoginIframe: false, // 检测登陆状态
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.error('未登录');
        window.location.reload();
      } else {
        axios.interceptors.request.use((config) => {
          config.headers.Authorization = 'Bearer ' + keycloak.token;
          return config;
        });
      }
      // 检测token是否刷新
      setInterval(() => {
        keycloak.updateToken();
      }, 60000);
    })
    .catch((error) => {
      console.error('keycloak错误');
      throw error;
    });
}

export async function logout(redirectUrl?: string): Promise<any> {
  const path = redirectUrl || location.href;
  document.cookie = ''; // 退出登录清除cookie
  const keycloakUrl = getKeycloakUrl();
  await request('/course_model/web/logout');
  window.location.replace(`${keycloakUrl}/realms/TechnicalMiddlePlatform/protocol/openid-connect/logout?redirect_uri=${path}`);
}

enum AuthType {
  'home' = 'MGM_FRONT_PAGE',
  'compute' = 'MGM_ACCOUNTING',
  'exam' = 'MGM_EXAM',
  // 'MGM_INSTANCE' = '运营管理实例管理页面权限',
  'announcement' = 'MGM_NOTICE',
}

export function checkAuth(authType: string): boolean {
  if (!keycloak.authenticated) {
    return true;
  }
  const authCollections = keycloak.resourceAccess['dlp-train-front']?.roles || [];
  if (AuthType[authType]) {
    return authCollections.includes(AuthType[authType]);
  }
  return true;
}

export default {
  getKeycloakUrl,
  checkLogin,
  logout,
  keycloak,
};
