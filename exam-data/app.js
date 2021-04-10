const fetch = require('node-fetch');

const l = [
  '文件描述符',
  '低级I/O——read和write',
  'open、creat、close和unlink',
  '随机访问——lseek',
  '实例——fopen和getc函数的实现',
  '实例——目录列表',
  '实例——存储分配程序',
];

const s = 1;

const start = (i, arr) => {
  const data = {
    title: arr[i],
    seq: s + i,
    pid: 9727922831360,
    topicId: 8862059102208,
  };

  fetch('http://8.135.66.238/api/catalogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.text())
    .then(text => {
      console.log(data, text);
    })
    .then(() => {
      if (i + 1 < arr.length) {
        start(i + 1, arr);
      }
    })
    .catch(console.error);
}

start(0, l);
