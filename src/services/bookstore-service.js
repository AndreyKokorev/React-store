export default class BookstoreService {
  data = [{
      id: 1,
      title: 'Production-ready Microservices',
      author: 'Susan J. Flower',
      price: 40,
      coverImage: 'https://im0-tub-ru.yandex.net/i?id=fa2202093458272e10bd47ddfe432ee5&n=13&exp=1'
    },
    {
      id: 2,
      title: 'Release It',
      author: 'Michael T. Nygard',
      price: 50,
      coverImage: 'http://images.kangoo.pl/52896149/9145423/x-large/release_it_design_and_deploy_production_ready_software_pragmatic_programmers__sklep.jpg'
    }
  ];

  getBooks() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {       
        resolve(this.data);
        reject(new Error('Something bad happened'));
      }, 500);
    });
  }
}