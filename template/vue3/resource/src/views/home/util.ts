export function formattedNumber(num: number | string): string {
  const str = num.toString();
  const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, '$1,');
}
// export function formattedNumber(num: number, fix = 2): string {
//   let val: number | string = num;
//   val = val.toFixed(fix) + ''; // 保留小数2位
//   val = '' + val; // 转换成字符串
//   let int = val.slice(0, fix * -1 - 1); // 拿到整数
//   const ext = val.slice(fix * -1 - 1); // 获取到小数
//   //每个三位价格逗号
//   int = int.split('').reverse().join(''); // 翻转整数
//   let temp = ''; // 临时变量
//   for (let i = 0; i < int.length; i++) {
//     temp += int[i];
//     if ((i + 1) % 3 == 0 && i != int.length - 1) {
//       temp += ','; // 每隔三个数字拼接一个逗号
//     }
//   }
//   temp = temp.split('').reverse().join(''); // 加完逗号之后翻转
//   temp = temp + ext; // 整数小数拼接
//   return temp; // 返回
// }

export function formattedNumberCN(num: number): string | number {
  let result: string | number = 0;
  if (num < 1000) {
    result = num;
  } else if (num < 10000 && num > 1000) {
    result = formattedNumber(num);
  } else {
    result = formattedNumber((num / 10000).toFixed(1)) + '万';
    // result = formattedNumber(num) + '万';
  }
  return result;
}

/***
 * 乘法，获取精确乘法的结果值
 * @param arg1
 * @param arg2
 * @returns
 */
function accMul(arg1, arg2) {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {
    // console.warn(e);
  }
  try {
    m += s2.split('.')[1].length;
  } catch (e) {
    // console.warn(e);
  }
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
}
/**
 * 获取对应值的带单位的额度
 * @returns 转换后的储存量 string
 * ps:先将获取到的数据统一转换为字节（b），然后再从字节层面统一向上计算
 */
export function getUsageResult(data: number | string, toFixedLength = 1): string {
  const dataSize: number = accMul(data, accMul(accMul(1024, 1024), 1024));
  let sizeTxt: number | string;
  if (dataSize / 1024 < 1) {
    sizeTxt = Math.ceil(dataSize * 100) / 100;
    sizeTxt = sizeTxt.toFixed(toFixedLength) + 'B';
  } else if (dataSize / 1024 / 1024 < 1) {
    sizeTxt = Math.ceil((dataSize / 1024) * 100) / 100;
    sizeTxt = sizeTxt.toFixed(toFixedLength) + 'KB';
  } else if (dataSize / 1024 / 1024 / 1024 < 1) {
    sizeTxt = Math.ceil((dataSize / 1024 / 1024) * 100) / 100;
    sizeTxt = sizeTxt.toFixed(toFixedLength) + 'MB';
  } else if (dataSize / 1024 / 1024 / 1024 / 1024 < 1) {
    sizeTxt = Math.ceil((dataSize / 1024 / 1024 / 1024) * 100) / 100;
    sizeTxt = sizeTxt.toFixed(toFixedLength) + 'GB';
  } else {
    sizeTxt = Math.ceil((dataSize / 1024 / 1024 / 1024 / 1024) * 100) / 100;
    sizeTxt = sizeTxt.toFixed(toFixedLength) + 'TB';
  }
  return sizeTxt;
}
