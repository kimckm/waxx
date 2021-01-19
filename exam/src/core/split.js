/*
 * 填空题核心逻辑
 */
// 字符分割
const str = 'abc{0}de12{31}23s{1}!!{12351}!';

const c = str.split(/{\d+}/);
const keys = str.match(/{\d+}/g);

const rs = [];
c.forEach((v, i) => {
  rs.push(v);
  if (keys[i]) {
    rs.push(keys[i]);
  }
});


console.log(str);
console.log(c);
console.log(keys);
console.log(rs);
