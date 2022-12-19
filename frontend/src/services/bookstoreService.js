export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Гарри Поттер и Узник Азкабана',
      author: 'Дж. К. Роулинг',
      price: 699,
      coverImage: 'https://sun9-18.userapi.com/impg/LiKizQ3gV8UWMhS1vbzYtkNyIrMPB1nXZbihjA/Ez06rl3vctM.jpg?size=654x960&quality=96&sign=fb67b888192fec8d9888a789aaf482f1&type=album',
    },
    {
     id: 2,
     title: 'Гарри Поттер и Кубок Огня',
      author: 'Дж. К. Роулинг',
     price: 699,
     coverImage: 'https://sun9-70.userapi.com/impg/qmcwsvV6J6jzw4YVcQAXVprex8Y3d1_NagxKAQ/-s_d-2-LKYE.jpg?size=654x960&quality=96&sign=9890dffc5263cea17f672a7fb7b8ff16&type=album',
   }
  ];

   getBooks() {
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.75) {
          resolve(this.data)
        } else {
          reject(new Error('Что-то пошло не так'))
        }
      }, 1000)
     });
   }
}