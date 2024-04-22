 $(document).ready(function(){
    var singleSliderObj = [
      {imgsrc:"Hitachi_ZX210LC_Excavator_581212_3000x1999.jpg",titlecard:"Специальность:",  desctext:"Эксковаторщик (1 человвека)", titlecard1:"Зарплата:", desctext1:"От 750 евро в месяц на руки. Зарплата зависит от отработаных часов", titlecard2:"Требования:", desctext2:"Опыт работы 2 года", titlecard3:"Примечание:",desctext3:"Предусматривается питание, проживание, на работу возят.",},
      {imgsrc:"photo_2024-02-11_22-38-00.jpg",titlecard:"Специальность:",  desctext:"Изготовление тубы (10 человек),мужчины и женщины Катовице", titlecard1:"Зарплата:", desctext1:"2800 злотых (8 часов, 5 дней в неделю с налогом), 3230 злотых (10 часов, 5 дней в неделю с налогом), Если сотрудник захочет работать 6 дней в неделю, доп.заработанная за это время +50%", titlecard2:"Требования:", desctext2:"Опыт работы не требуется", titlecard3:"Примечание:",desctext3:"Проживание,рабочая одежда за счет работодателя",},
      {imgsrc:"zqf1hellk0fyqeth2ob741ctphv5hjt7.jpg",titlecard:"Специальность:",desctext:"Водители 6 человек в 2 фирмы в одном городе.Перевозка груза по территории Польши.Город Высокое Мазовецкое,25км от Белостока.", titlecard1:"Зарплата:", desctext1:"5000-7000злот в месяц.Зависит от водителя, как быстро освоится", titlecard2:"Требования:", desctext2:"категория C,E,D", titlecard3:"Примечание:",desctext3:"Для них будем готовить жильё перед их приездом( за жильё оплата 400-600 злотых в месяц).Карту водителя и Сертификат с Код 95 будем готовить в Польше.",},
      {imgsrc:"strojkakamensikstroitelinovostrojka15.jpg",titlecard:"Специальность:",  desctext:"Каменщики, строительство частного дома (5-10 человек)", titlecard1:"Зарплата:", desctext1:"Оплата от 25 злотых в час, Работать 8-10 часов 1.Зарпалата (8 часов, 5 дней в неделю) -4000 злотых (890 евро без налогов) 2. Зарплата( 10 часов, 6 дней)- 6000 злотых (1348 евро без налогов)", titlecard2:"Требования:",desctext2:"", titlecard3:"Примечание:",desctext3:"Жильё за счёт фирмы",},
      {imgsrc:"pomoshtnik-kamenshtika_5.jpg",titlecard:"Специальность:",  desctext:"Помощники каменщиков", titlecard1:"Зарплата:", desctext1:"От 20-22 злотых в час , рабочий день 10 часов (5 дней) оплата в месяц 4000 злотых (890 евро без налогов) При 6 дневном рабочем дне оплата 5000 злотых (1123 евро без налогов)", titlecard2:"Требования:",desctext2:"", titlecard3:"Примечание:",desctext3:"Жильё за счёт фирмы"},
      {imgsrc:"2342-202110231732061298.jpg",titlecard:"Специальность:",  desctext:"Фабрика по убою и разделке курицы ( 15-20 человек) халял", titlecard1:"Зарплата:", desctext1:"От 20 злотых в час нетто (с налогами) Если рабочий день 10 часов (5 дней) оплата в месяц 4000 злотых (890 евро без вычетов) При 6 дневном рабочем дне оплата 5000 злотых (1123 евро без вычетов)", titlecard2:"Требования:", desctext2:"", titlecard3:"Примечание:",desctext3:"Жилье предоставляется",},
    ];

  
    function outputIt() {
      for (var i = 0; i < singleSliderObj.length; i++) {
        var outputs =
            '<div class="singlecard">'+
            '<div class="singlecard-header">'+
            '<img data-lazy="'+ singleSliderObj[i].imgsrc +'">'+
            '</div>'+
            '<div class="singlecard-body">'+
            '<div class="singlecard-content">'+
            '<div class="singlecard-title"><strong>'+ singleSliderObj[i].titlecard +'</strong></div>'+
            '<div class="singlecard-text">'+
            '<p>'+ singleSliderObj[i].desctext +'</p>'+
            '<p>'+
            '<div class="singlecard-title"><strong>'+ singleSliderObj[i].titlecard1 +'</strong></div>'+
            '<div class="singlecard-text">'+
            '<p>'+ singleSliderObj[i].desctext1 +'</p>'+
            '<p>'+
            '<div class="singlecard-title"><strong>'+ singleSliderObj[i].titlecard2 +'</strong></div>'+
            '<div class="singlecard-text">'+
            '<p>'+ singleSliderObj[i].desctext2 +'</p>'+
            '<p>'+
            '<div class="singlecard-title"><strong>'+ singleSliderObj[i].titlecard3 +'</strong></div>'+
            '<div class="singlecard-text">'+
            '<p>'+ singleSliderObj[i].desctext3 +'</p>'+
            '<p>'+

            '</div>'+
            '</div>'+
            '</div>';
        $('.slide-sec').append(outputs);
      }
    }
    outputIt();
  
    $('.slide-sec').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots:true
    });
  });
 $(document).ready(function(){
    var singleSliderObj = [
      {imgsrc:"svarochnye-raboty.jpg",titlecard:"Специальность:",  desctext:"Сварщики", titlecard1:"Зарплата:", desctext1:"От 22-25 злотых в час", titlecard2:"Требования:", desctext2:"Опыт работы на MIG MAG не менее 2 лет", titlecard3:"Примечание:",desctext3:"Жильё за счёт работодателя; Питание за свой счёт",},
      {imgsrc:"1667525753_41-sportishka-com-p-mashina-dlya-ukladki-asfalta-oboi-46.jpg",titlecard:"Специальность:",  desctext:"Работа в Бельгии 12 человек на строительство асфальтных дорог", titlecard1:"Зарплата:", desctext1:"12 евро в час.В зависимости от часов и дней зависит зарабатная плата ", titlecard2:"Требования:", desctext2:"Знание Английского языка", titlecard3:"Примечание:",desctext3:"Проживание 350-400 € в месяц оплачивает сотрудник",},
      {imgsrc:"stage-racking-shuttle 1.png",titlecard:"Специальность:",  desctext:"Работа в Германии Вакансии для мужчин - 20 человек Скрутка стеллажей в Логистических центрах. Работа с шуруповёртом ", titlecard1:"Зарплата:", desctext1:"От 12 евро в час", titlecard2:"Требования:", desctext2:"Знание Немецкого или Английского языка", titlecard3:"Примечание:",desctext3:" проживание за счёт работодателя",},
      {imgsrc:"abaasd_1aa04.jpg",titlecard:"Специальность:",  desctext:"Строительство Электро Станций солнечных батарей в Германии, Австрии и на О. Мальта приглашают на работу мужчин. Количество вакансий до 50 человек", titlecard1:"Зарплата:", desctext1:"12 Евро в час", titlecard2:"Требования:", desctext2:"Знание Русского или Английского языка", titlecard3:"Примечание:",desctext3:"жильё за счёт работодателя",},
      {imgsrc:"Karkasnyy-dom.jpg",titlecard:"Специальность:",  desctext:"Строительство щитовых домов по Канадской технологии Колличество вакансий-10-15 человек", titlecard1:"Зарплата:", desctext1:"12 Евро в час", titlecard2:"Требования:", desctext2:"Знание Русского или Английского языка", titlecard3:"Примечание:",desctext3:"Жильё за счёт работодателя",},
      {imgsrc:"755708034972668.jpg",titlecard:"Специальность:",  desctext:"Водители в Германию", titlecard1:"Зарплата:", desctext1:"Оплата 3000 евро", titlecard2:"Требования:", desctext2:"Категория C,CE,D, знание немецкого на уровне разговорного", titlecard3:"Примечание:",desctext3:"Питание, проживание за свой счет, но компания находит жилье.",},
    ];

  
    function outputIt() {
      for (var i = 0; i < singleSliderObj.length; i++) {
        var outputs =
            '<div class="singlecard">'+
            '<div class="singlecard-header">'+
            '<img data-lazy="'+ singleSliderObj[i].imgsrc +'">'+
            '</div>'+
            '<div class="singlecard-body">'+
            '<div class="singlecard-content">'+
            '<div class="singlecard-title"><strong>'+ singleSliderObj[i].titlecard +'</strong></div>'+
            '<div class="singlecard-text">'+
            '<p>'+ singleSliderObj[i].desctext +'</p>'+
            '<p>'+
            '<div class="singlecard-title"><strong>'+ singleSliderObj[i].titlecard1 +'</strong></div>'+
            '<div class="singlecard-text">'+
            '<p>'+ singleSliderObj[i].desctext1 +'</p>'+
            '<p>'+
            '<div class="singlecard-title"><strong>'+ singleSliderObj[i].titlecard2 +'</strong></div>'+
            '<div class="singlecard-text">'+
            '<p>'+ singleSliderObj[i].desctext2 +'</p>'+
            '<p>'+
            '<div class="singlecard-title"><strong>'+ singleSliderObj[i].titlecard3 +'</strong></div>'+
            '<div class="singlecard-text">'+
            '<p>'+ singleSliderObj[i].desctext3 +'</p>'+
            '<p>'+

            '</div>'+
            '</div>'+
            '</div>';
        $('.slide-1').append(outputs);
      }
    }
    outputIt();
  
    $('.slide-1').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots:true
    });
  });
