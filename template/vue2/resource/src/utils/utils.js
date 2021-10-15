import { smsApi } from '@/apis/';
import { textFind } from '@/apis/teaching.js';
import router from '@/router';

/**
 * 数字转成汉字
 * @params num === 要转换的数字
 * @return 汉字
 * */
export function toChinesNum(num) {
  var arr1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var arr2 = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿']; //可继续追加更高位转换值
  if (!num || isNaN(num)) {
    return '零';
  }
  var english = num.toString().split('');
  var result = '';
  for (var i = 0; i < english.length; i++) {
    var des_i = english.length - 1 - i; //倒序排列设值
    result = arr2[i] + result;
    var arr1_index = english[des_i];
    result = arr1[arr1_index] + result;
  }
  result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
  result = result.replace(/零+/g, '零');
  result = result.replace(/零亿/g, '亿').replace(/零万/g, '万');
  result = result.replace(/亿万/g, '亿');
  result = result.replace(/零+$/, '');
  result = result.replace(/^一十/g, '十');
  return result;
}

export function pasteContent(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export function phoneHider(str = '') {
  return (str || '').replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

const sendCode = (function () {
  let sending = false;
  return (phonenum) => {
    if (sending) {
      return;
    }
    sending = true;
    return smsApi.sendSmsCode({ phonenum }, true).then((res) => {
      sending = false;
      return res;
    });
  };
})();

export { sendCode };

// 通过url拉取富文本
export function getRichText(str) {
  if (!str) {
    return new Promise((resolve) => {
      resolve();
    });
  }
  return textFind({ id: str }).then((res) => {
    return (res.body && res.body.content) || '';
  });
}

export function checkFileType(types, fileName) {
  return types.split(',').includes('.' + fileName.split('.')[1]);
}

export function checkLogin(noRedirect) {
  if (!window.$keycloak.idTokenParsed) {
    if (!noRedirect) {
      const loginUrl = window.$keycloak.createLoginUrl();
      window.location.replace(loginUrl);
    }
    return false;
  }
  return true;
}

export function checkAuth(errorCode, targetCode = '-801', redirectUrl = '/') {
  if (`${errorCode}` === `${targetCode}`) {
    router.replace(redirectUrl);
    return false;
  }
  return true;
}
