export interface Hotel {
    id: number;
    name: string;
    country: string;
    city: string;
    street: string;
    rating: number;
    capacity: number;
    cost: number;
    photo_url: string;
    additional_info: string;
}

export const hotels = [
    {
      "id": 1,
      "name": "Морской Бриз",
      "country": "Россия",
      "city": "Санкт-Петербург",
      "street": "Невский проспект 22",
      "rating": 4.5,
      "capacity": 150,
      "cost": 3000,
      "photo_url": "https://avatars.mds.yandex.net/get-altay/223006/2a0000015b2eb87d0a914c5941d06de4293e/XXL",
      "additional_info": "Недалеко от метро; включает завтрак"
    },
    {
      "id": 2,
      "name": "Золотые Пески",
      "country": "Россия",
      "city": "Сочи",
      "street": "Проспект Морской 18",
      "rating": 4.7,
      "capacity": 200,
      "cost": 5000,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428657485.jpg?k=c634173ef99471c972ba948f7f0332401b53143065991d24bfab458f4a874f39&o=&hp=1",
      "additional_info": "Вид на море; есть бассейн"
    },
    {
      "id": 3,
      "name": "Горный Эдельвейс",
      "country": "Россия",
      "city": "Красная Поляна",
      "street": "Горная улица 5",
      "rating": 4.8,
      "capacity": 80,
      "cost": 4500,
      "photo_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/69/34/a4/caption.jpg?w=800&h=-1&s=1",
      "additional_info": "Рядом с подъемниками; сауна включена"
    },
    {
      "id": 4,
      "name": "Императорский Дворец",
      "country": "Россия",
      "city": "Москва",
      "street": "Красная площадь 1",
      "rating": 5.0,
      "capacity": 200,
      "cost": 7500,
      "photo_url": "https://www.memotest.ru//ImageUpload/b805a10b-bd70-4aab-a04e-cfe79d2cc36d/3.jpg",
      "additional_info": "В самом центре столицы; роскошные интерьеры"
    },
    {
      "id": 5,
      "name": "Garden Villa",
      "country": "Таиланд",
      "city": "Пхукет",
      "street": "Beach Road 12",
      "rating": 4.3,
      "capacity": 50,
      "cost": 2500,
      "photo_url": "https://pix3.agoda.net/hotelimages/49050/-1/3cf9219b9a9256f8eb4087fa10bdfec7.jpg",
      "additional_info": "Тропический сад; близость к пляжу"
    },
    {
      "id": 6,
      "name": "Sunrise Resort",
      "country": "Египет",
      "city": "Шарм-эль-Шейх",
      "street": "Sphinx Street 3",
      "rating": 4.6,
      "capacity": 300,
      "cost": 3500,
      "photo_url": "https://d1wo7kaelp5eck.cloudfront.net/sunrise-resorts.com-1611976553/cms/cache/v2/6492d5a8d472b.jpg/1920x1080/resize/80/eef5333a52db53762f7e02555877feb7.jpg",
      "additional_info": "5 звезд; все включено"
    },
    {
      "id": 7,
      "name": "Mont Blanc Chalet",
      "country": "Франция",
      "city": "Шамони",
      "street": "Mont Blanc Square 7",
      "rating": 4.9,
      "capacity": 25,
      "cost": 6000,
      "photo_url": "https://images.trvl-media.com/lodging/1000000/180000/175200/175133/6ff71883.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "additional_info": "Вид на горы; лыжный курорт"
    },
    {
      "id": 8,
      "name": "Royal Safari Lodge",
      "country": "Кения",
      "city": "Найроби",
      "street": "Savannah Street 8",
      "rating": 4.8,
      "capacity": 40,
      "cost": 7000,
      "photo_url": "https://www.andbeyond.com/wp-content/uploads/sites/5/Main-Vista-at-Jamala-Madikwe-Royal-Safari-Lodge.jpg",
      "additional_info": "Сафари туры; дикая природа"
    },
    {
      "id": 9,
      "name": "Castle Rock Hotel",
      "country": "Великобритания",
      "city": "Эдинбург",
      "street": "Castlehill 5",
      "rating": 4.4,
      "capacity": 120,
      "cost": 4000,
      "photo_url": "https://i.travelapi.com/hotels/6000000/5960000/5955500/5955496/eb34140f_z.jpg",
      "additional_info": "Историческое здание; рядом с замком"
    },
    {
      "id": 10,
      "name": "Northern Lights Inn",
      "country": "Исландия",
      "city": "Рейкьявик",
      "street": "Aurora Road 15",
      "rating": 4.7,
      "capacity": 30,
      "cost": 5500,
      "photo_url": "https://images.squarespace-cdn.com/content/v1/6408a72a2785c51ddccdd825/f7185dc4-50d7-499b-8f9a-72827d82d86f/nli-outside-evening-bw6460.jpg?format=2500w",
      "additional_info": "Шанс увидеть северное сияние"
    },
    {
      "id": 11,
      "name": "Tokyo Skyline Suites",
      "country": "Япония",
      "city": "Токио",
      "street": "Nishi-Shinjuku 22-2-3",
      "rating": 4.8,
      "capacity": 200,
      "cost": 8000,
      "photo_url": "https://goodlayers.b-cdn.net/hotale/hotelchain/wp-content/uploads/sites/11/2023/04/yu-kato-cddaZDt6uRw-unsplash.jpg",
      "additional_info": "Панорамные виды города; рядом с метро"
    },
    {
      "id": 12,
      "name": "Ocean View Retreat",
      "country": "Австралия",
      "city": "Сидней",
      "street": "Seaside Blvd 18",
      "rating": 4.6,
      "capacity": 100,
      "cost": 6500,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/445044900.jpg?k=22d8044510f85afec9a1c180e675a8f7f3807b609d4ba2f6154eda1f80f11f25&o=&hp=1",
      "additional_info": "С видом на океан; бесплатный Wi-Fi"
    },
    {
      "id": 13,
      "name": "Las Ramblas Cozy Stay",
      "country": "Испания",
      "city": "Барселона",
      "street": "Ramblas 45",
      "rating": 4.4,
      "capacity": 60,
      "cost": 5500,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107289489.jpg?k=458f6be5e255709499634ab1347404b125805452fd51f0971d4b53ce07dd5004&o=&hp=1",
      "additional_info": "В самом сердце города; рядом с рынком"
    },
    {
      "id": 14,
      "name": "Alpine Ski Lodge",
      "country": "Швейцария",
      "city": "Церматт",
      "street": "Snowpeak Road 7",
      "rating": 4.9,
      "capacity": 50,
      "cost": 7500,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/242452370.jpg?k=2bdb8023d8ddb22b697da632832c5557dc93513a5eec7a94a0265ff5125df650&o=&hp=1",
      "additional_info": "Прямой доступ к склонам; горячие источники"
    },
    {
      "id": 15,
      "name": "Bamboo Forest Hotel",
      "country": "Китай",
      "city": "Чэнду",
      "street": "Bamboo Grove 11",
      "rating": 4.5,
      "capacity": 80,
      "cost": 5800,
      "photo_url": "https://www.designboom.com/twitterimages/uploads/2019/11/jaxda-miyuan-boutique-hotel-bamboo-forest-anhui-china-10-31-2019-designboom-1200.jpg",
      "additional_info": "Рядом с бамбуковым лесом; традиционный дизайн"
    },
    {
      "id": 16,
      "name": "The Grand Venetian",
      "country": "Италия",
      "city": "Венеция",
      "street": "Canal Grande 42",
      "rating": 4.8,
      "capacity": 120,
      "cost": 8500,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447693213.jpg?k=db2fd765cb61ef2a5370b83aeac9f03d2850cb84ec1dd762bc8e94857e90267b&o=&hp=1",
      "additional_info": "Расположен на берегу канала; включает завтрак"
    },
    {
      "id": 17,
      "name": "Savannah Plains Resort",
      "country": "Кения",
      "city": "Найроби",
      "street": "Safari Path 101",
      "rating": 4.6,
      "capacity": 75,
      "cost": 7200,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326644426.jpg?k=8e91c6a039c7a89f0283b9bbcee37c7e029b2477910651f27734e02db3533f8e&o=&hp=1",
      "additional_info": "Сафари туры; бассейн с видом на саванну"
    },
    {
      "id": 18,
      "name": "Tokyo Skyline Hotel",
      "country": "Япония",
      "city": "Токио",
      "street": "Shinjuku 5-15-15",
      "rating": 4.7,
      "capacity": 200,
      "cost": 8900,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/464903654.jpg?k=e3e7ca327a7806515c6d915ab05499fb02ec6b515cbef8ed31ea1f9ae68a2dc9&o=&hp=1",
      "additional_info": "Панорамный вид на город; ресторан на крыше"
    },
    {
      "id": 19,
      "name": "Cape Town Nest",
      "country": "South Africa",
      "city": "Cape Town",
      "street": "Oceanview Drive 88",
      "rating": 4.5,
      "capacity": 90,
      "cost": 5500,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/361335854.jpg?k=07a728bf0281db2295b55a30ec4f78e01e35aad58e79f8aa6d6d5ea913c84d45&o=&hp=1",
      "additional_info": "Вид на Table Mountain; рядом с пляжем"
    },
    {
      "id": 20,
      "name": "Northern Lights Lodge",
      "country": "Норвегия",
      "city": "Tromsø",
      "street": "Aurora Street 5",
      "rating": 4.9,
      "capacity": 40,
      "cost": 10000,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/291056475.jpg?k=51cbb28beff3bef0e749b9fc958732314c101c4b84bff18f18d2b0cc35c8f58d&o=&hp=1",
      "additional_info": "Вид на северное сияние; включает экскурсии"
    },
    {
      "id": 21,
      "name": "Las Vegas Fun Stay",
      "country": "США",
      "city": "Las Vegas",
      "street": "The Strip 777",
      "rating": 4.2,
      "capacity": 300,
      "cost": 6500,
      "photo_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/01/00/2b/the-strip.jpg?w=1200&h=-1&s=1",
      "additional_info": "Развлекательные шоу; казино в отеле"
    },
    {
      "id": 22,
      "name": "Giza Pyramids View",
      "country": "Egypt",
      "city": "Giza",
      "street": "Sphinx Alley 3",
      "rating": 4.7,
      "capacity": 150,
      "cost": 7800,
      "photo_url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/361763229.jpg?k=e5a1f8039d3582ef8146dc5c82d5e43dba3e6712311c4bb5c43ee0c46bfe576f&o=&hp=1",
      "additional_info": "Вид на пирамиды; тематические ужины"
    }
  ]
