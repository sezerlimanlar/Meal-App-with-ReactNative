import Category from '../models/category';
import Meal from '../models/meal';
export const CATEGORIES = [
  new Category('c1', 'İtalyan', '#f5428d'),
  new Category('c2', 'Hızlı & Kolay', '#f54242'),
  new Category('c3', 'Hamburgerler', '#f5a442'),
  new Category('c4', 'Alman', '#f5d142'),
  new Category('c5', 'Hafif & Hoş', '#368dff'),
  new Category('c6', 'Egzotik', '#41d95d'),
  new Category('c7', 'Kahvaltı', '#9eecff'),
  new Category('c8', 'Asya', '#b9ffb0'),
  new Category('c9', 'Fransız', '#ffc7ff'),
  new Category('c10', 'Yaz', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Domates Soslu Spagetti',
    'uygun fiyatlı',
    'basit',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Domates',
      '1 Yemek Kaşığı Zeytinyağı',
      '1 Soğan',
      '250g Spagetti',
      'Baharatlar',
      'Peynir (isteğe bağlı)'
    ],
    [
      'Domatesleri ve soğanı küçük parçalara kesin.',
      'Biraz su kaynatın - su kaynadığında tuz ekleyin.',
      'Spagettiyi kaynayan suya koyun - yaklaşık 10-12 dakika pişmelidir.',
      'Bu arada biraz zeytinyağını ısıtın ve doğranmış soğanı ekleyin.',
      '2 dakika sonra domates parçalarını, tuz, biber ve diğer baharatları ekleyin.',
      'Spagetti piştikten sonra sos da hazır olacak.',
      'Üzerine biraz peynir serpebilirsiniz.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Hawaii Tostu',
    'uygun fiyatlı',
    'basit',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Dilim Beyaz Ekmek',
      '1 Dilim Jambon',
      '1 Dilim Ananas',
      '1-2 Dilim Peynir',
      'Tereyağı'
    ],
    [
      'Beyaz ekmeğin bir tarafını yağlayın.',
      'Jambon, ananas ve peyniri ekmeğin üzerine katman olarak ekleyin.',
      'Tostu 200°C fırında yaklaşık 10 dakika pişirin.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Klasik Hamburger',
    'pahalı',
    'basit',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g Dana Kıyma',
      '1 Domates',
      '1 Salatalık',
      '1 Soğan',
      'Ketçap',
      '2 Hamburger Ekmeği'
    ],
    [
      '2 köfte yapın.',
      'Köfteleri her iki tarafı yaklaşık 4 dakika pişirin.',
      'Ekmekleri her iki tarafını yaklaşık 1 dakika kızartın.',
      'Ekmeklere ketçap sürün.',
      'Hamburgeri domates, salatalık ve soğanla servis edin.'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Viyana Şnitzel',
    'lüks',
    'zorlayıcı',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Dana Biftek',
      '4 Yumurta',
      '200g Galeta Unu',
      '100g Un',
      '300ml Tereyağı',
      '100g Ayçiçek Yağı',
      'Tuz',
      'Limon Dilimleri'
    ],
    [
      'Eti yaklaşık 2–4 mm kalınlığa kadar dövün ve her iki tarafını tuzlayın.',
      'Düz bir tabakta yumurtaları çatal yardımıyla hafifçe çırpın.',
      'Eti önce una, sonra yumurtaya ve son olarak galeta ununa bulayın.',
      'Büyük bir tavada tereyağı ve yağı ısıtın (yağ çok sıcak olmalı) ve şnitzelleri her iki tarafı altın rengine dönene kadar kızartın.',
      'Şnitzellerin yağın içinde yüzebilmesi için tavayı sık sık sallayın.',
      'Kağıt havlu üzerine alın ve fazla yağı süzdürün. Maydanozu kalan yağda kızartın ve süzdürün.',
      'Şnitzelleri sıcak bir tabağa koyun ve üzerine maydanoz ve limon dilimleri ekleyerek servis edin.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Somonlu Salata',
    'lüks',
    'basit',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Rokfor',
      "Kuzu Kulağı",
      'Maydanoz',
      'Rezene',
      '200g Füme Somon',
      'Hardal',
      'Balsamik Sirke',
      'Zeytinyağı',
      'Tuz ve Karabiber'
    ],
    [
      'Salata ve otları yıkayın ve kesin.',
      'Somonu küp küp doğrayın.',
      'Hardal, sirke ve zeytinyağını karıştırarak sos hazırlayın.',
      'Salatayı hazırlayın.',
      'Somon küplerini ve sosu ekleyin.'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Lezzetli Portakal Köpüğü',
    'uygun fiyatlı',
    'zor',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Yaprak Jelatin',
      '150ml Portakal Suyu',
      '80g Şeker',
      '300g Yoğurt',
      '200g Krema',
      'Portakal Kabuğu'
    ],
    [
      'Jelatini tencerede eritin.',
      'Portakal suyu ve şekeri ekleyin.',
      'Tencereyi ocaktan alın.',
      '2 yemek kaşığı yoğurt ekleyin.',
      'Kalan yoğurda jelatini karıştırın.',
      'Her şeyi buzdolabında soğutun.',
      'Kremayı çırpın ve portakallı karışıma ekleyin.',
      'En az 4 saat daha soğutun.',
      'Portakal kabuğu ile servis edin.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pankek',
    'uygun fiyatlı',
    'basit',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Su Bardağı Un',
      '3 1/2 Tatlı Kaşığı Kabartma Tozu',
      '1 Tatlı Kaşığı Tuz',
      '1 Yemek Kaşığı Beyaz Şeker',
      '1 1/4 Su Bardağı Süt',
      '1 Yumurta',
      '3 Yemek Kaşığı Tereyağı, eritilmiş'
    ],
    [
      'Büyük bir kapta un, kabartma tozu, tuz ve şekeri eleyin.',
      'Ortasında bir çukur açın ve süt, yumurta ve eritilmiş tereyağını ekleyin; pürüzsüz hale gelene kadar karıştırın.',
      'Orta ateşte hafif yağlanmış bir tavayı ısıtın.',
      'Hamuru tavaya dökün ve her pankek için yaklaşık 1/4 su bardağı kullanın. Her iki tarafı kahverengi olana kadar pişirin ve sıcak servis edin.'
    ],
    true,
    true,
    true,
    false
  ),
  new Meal(
    'm8',
    ['c8'],
    'Kremalı Hint Tavuk Yemeği',
    'pahalı',
    'zorlayıcı',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Tavuk Göğsü',
      '1 Soğan',
      '2 Diş Sarımsak',
      '1 Parça Taze Zencefil',
      '4 Yemek Kaşığı Badem',
      '1/2 Çay Kaşığı Acı Biber Tozu',
      '1/2 Çay Kaşığı Zerdeçal',
      '1 Çay Kaşığı Garam Masala',
      '1 Çay Kaşığı Kişniş',
      '400ml Hindistan Cevizi Sütü'
    ],
    [
      'Tavuğu küçük parçalar halinde doğrayın.',
      'Soğanı, sarımsağı ve zencefili ince ince doğrayın.',
      'Bademleri ve diğer baharatları bir tavada kavurun.',
      'Soğanı, sarımsağı ve zencefili tavaya ekleyip pişirin.',
      'Tavukları ekleyin ve pişirin.',
      'Hindistan cevizi sütünü ekleyip yaklaşık 10 dakika pişirin.'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Çikolatalı Fondan',
    'lüks',
    'zor',
    'https://cdn.pixabay.com/photo/2017/12/09/08/18/chocolate-souffle-3001368_1280.jpg',
    45,
    [
      '200g Bitter Çikolata',
      '100g Tereyağı',
      '3 Yumurta',
      '100g Şeker',
      '1 Paket Vanilya',
      '50g Un'
    ],
    [
      'Fırını 200°C’ye ısıtın.',
      'Çikolata ve tereyağını benmari usulü eritin.',
      'Yumurtaları şeker ve vanilya ile çırpın.',
      'Eritilmiş çikolatayı karışıma ekleyin.',
      'Unu ekleyip karıştırın.',
      'Karışımı yağlanmış küçük kaplara dökün.',
      'Fırında yaklaşık 10-12 dakika pişirin.'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Kuymak Salatası ve Cherry Domatesleri',
    'lüks',
    'basit',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'Beyaz ve Yeşil Kuymak',
      '30g Çam Fıstığı',
      '300g Kiraz Domatesi',
      'Salata',
      'Tuz, Karabiber ve Zeytinyağı'
    ],
    [
      'Kuymakları yıkayın, soyun ve doğrayın',
      'Tuzlu suda pişirin',
      'Kuymakları tuzlayın ve biberle',
      'Çam fıstıklarını kavurun',
      'Domatesleri ikiye kesin',
      'Kuymak, salata ve sosla karıştırın',
      'Bagetle servis edin'
    ],
    true,
    true,
    true,
    true
  )
  
];

