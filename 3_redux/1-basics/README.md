# State Yönetimi

- State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özelliklerdir.

- Prop Drilling: Bileşnlerden yukarıdan aşağıya veri taşınması

- Context API: Uygulamdaki statelerin yöneteilebildiği state yönetim aracı

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereken statel'erin yönetimini sağlar

# Neden Redux

- Kod tekrarını önler
- Performansını arttırır
- Bileşen içerisindeki karışıklığı azaltır
- Hata ayıklama daha kolaydır
- Orta - Büyük ölçekli uygulamalarda state yönetyimini kolaylaştırır

# Reduxla iligli bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişlebilen ve değiştrielebilien merkezi state deposu

2. Reducer: Aksiyondan aldığı talimat ve state ile store'u içerisinde barındırdığı fonksiton sayesinde güncelleyen yapı

3. Action: Store'u güncellemek için reducer'a gönderdiğimiz emir/haber

- - Action, İki değere sahip bir objedir:
- - type: Action'ın görevini tanımlayan string ifade(ADD_TODO)
- - payload: Gönderilen eylemin verisi (newTodo)

4. Dispatch: Action'un gerçekleştiğini reducer'a haber veren method

5. Subscribe: Bileşenlerin store'a erişimini tanımlayan terim (useContext | useSelector)

6. Provider: Store'da tutulan verileri uygulamaya sağlar.

# Redux Kullanmak İçin Aşamalar (Kurulum)

- `redux` ve `react-redux` paketlerini indir
- reducer/reducelar kurlumunu yap
- store kurulumunu yap
- store'u projeye tanıt

# Altın Kural

- Hem api hem redux'ın kullanılıdğım projelerde
- store'i güncelleme işlemini ile isteği bağımlı hale getirlmeli
- ancak istek başarılı olursa store'da değişim gerçekleşmeli
