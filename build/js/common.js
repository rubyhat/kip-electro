
  ymaps.ready(function () {
    let kokshetau_map;
    kokshetau_map = new ymaps.Map("yandex_map", {
      center: [53.294389, 69.408510],
      zoom: 17
    });

    let myPlacemark = new ymaps.Placemark([53.294369, 69.408443], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/icons/map-pin.svg',
      iconImageSize: [32, 32],
      iconImageOffset: [-3, -42]
    });

    kokshetau_map.geoObjects
      .add(myPlacemark)
  });
