// Interface'lerde generic kullanım
interface IRepo<T> {
  getById(id: number): T;
  getAll(): T[];
  createRepo(item: T): void;
}

// bir github repostnun itipi
interface IRepoInfo {
  repo_name: string;
  id: number;
  stars: number;
}
// Irepo interface'ini kullanmak için generic tip oalrak
// bir github reposnun tipini gönderdik
// adırdına methodları ona göre tanumladık
const userRepo: IRepo<IRepoInfo> = {
  getById(id) {
    console.log('api isteği atılıyor...');
    return {
      repo_name: 'Calculator_JS',
      id: 143325,
      stars: 12,
    };
  },

  getAll() {
    console.log('api isteği atılıyor...');
    return [
      {
        repo_name: 'REACT_PORTFOLIO',
        id: 123,
        stars: 20,
      },
      {
        repo_name: 'Chat_App',
        id: 456,
        stars: 170,
      },
    ];
  },

  createRepo(item) {
    console.log(item + 'için api isteği atılıyor...');
  },
};
