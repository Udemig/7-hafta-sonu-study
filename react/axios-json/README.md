# HTTP İstekler

- get > veri çekme isteği
- `axios.get("url")`

- post > veri gönderme isteği

- put/path > veri güncelleme isteği

- delete > veri silme isteği
- fetch("url/id",{method:"DELETE"})
- axios.delete("url/id")

# Json Server

- Kendi bilgisyarımızda API'lar oluşturmaya yarar.
- Oluşturudğumuz db.json dosyasındaki verileri izler.
- Herbir veri için endpoint oluştururç
- Bu endpointlere yapılan istekleri izler
- İstekler(get-post-put-delete) sonucunda gerçekleşen değişmileri db.json dosyasona aktarır

## Faydaları

1- Hızlı Protoipleme: Gerçek sunucu oluşturmadan önce uygulamamzın temel işlevlerini oluşturmamaıza yarar

2- Bağımsız Geliştirme: Backend gelitiricisi API'ı hazırladığı süreçte beklemek yerine basit bir kopyasını oluşturup onun üzerinden ilerleyebiliyoruz.

## Koşul Tanımla

- 1-yol
- todos && todos.map(() => {})

- 2-yol > conditional chaining (koşullu zincirleme)
- kısa yoldan koşul tanımalamaya yarar
- todos?.map(() => {})

- todos && todos.map(() => {})
- todos?.map(() => {})

## ALtın Kural

- Projede api varsa
- - API Güncellendiği zaman aynısını state'de güncelle

# g
