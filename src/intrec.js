ymaps.ready(function () {
    //Начальные данные
    var mapCenter = [52.58611018, 46.95223216],
        map = new ymaps.Map('map', {
            center: mapCenter,
            zoom: 5.4,
            controls: []
        });

    var customItemContentLayout = ymaps.templateLayoutFactory.createClass(
        '<h2 class=ballon_header>{{ properties.balloonContentHeader|raw }}</h2>' +
        '<div class=ballon_body>{{ properties.balloonContentBody|raw }}</div>' +
        '<div class=ballon_footer>{{ properties.balloonContentFooter|raw }}</div>'
    );
    
    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: true,
        clusterOpenBalloonOnClick: true,
        clusterBalloonPanelMaxMapArea: 0,
        clusterBalloonContentLayoutWidth: 1000,
        clusterBalloonItemContentLayout: customItemContentLayout,
        clusterBalloonLeftColumnWidth: 200
    });

    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');

    var myInit = {
        method: 'GET',
        headers: myHeaders,
    };

    //Челябинск

    // Челябинск
    var Chelyabinsk = [];

    var ChelVuz = new ymaps.Placemark([55.12056144, 61.372119500], {
        balloonContentHeader: 'ВУЗ-ы',
        balloonContentFooter: 'Челябинск'
    });
    fetch('/src/Chelyabinsk/ChelVuz.html', myInit)
        .then(data => data.text())
        .then(data => {
            ChelVuz.properties.set('balloonContentBody', data);
        });
    Chelyabinsk.push(ChelVuz);

    var ChelComm = new ymaps.Placemark([55.12056144, 61.37211950], {
        balloonContentHeader: 'Комьюнити + конференции',
        balloonContentFooter: 'Челябинск'
    });
    fetch('/src/Chelyabinsk/ChelCommData.html', myInit)
        .then(data => data.text())
        .then(data => {
            ChelComm.properties.set('balloonContentBody', data);
        });
    Chelyabinsk.push(ChelComm);

    var ChelMarket = new ymaps.Placemark([55.12056144, 61.37211950], {
        balloonContentHeader: 'Объем рынка',
        balloonContentFooter: 'Челябинск'
    });
    fetch('/src/Chelyabinsk/ChelMarketData.html', myInit)
        .then(data => data.text())
        .then(data => {
            ChelMarket.properties.set('balloonContentBody', data);
        });
    Chelyabinsk.push(ChelMarket);

    var ChelCompanies = new ymaps.Placemark([55.12056144, 61.37211950], {
        balloonContentHeader: 'Компании-доноры',
        balloonContentFooter: 'Челябинск'
    });
    fetch('/src/Chelyabinsk/ChelCompaniesData.html', myInit)
        .then(data => data.text())
        .then(data => {
            ChelCompanies.properties.set('balloonContentBody', data);
        });
    Chelyabinsk.push(ChelCompanies);

    var ChelConversion = new ymaps.Placemark([55.12056144, 61.37211950], {
        balloonContentHeader: 'Конверсия',
        balloonContentFooter: 'Челябинск'
    });
    fetch('/src/Chelyabinsk/ChelConversionData.html', myInit)
        .then(data => data.text())
        .then(data => {
            ChelConversion.properties.set('balloonContentBody', data);
        });
    Chelyabinsk.push(ChelConversion);

    var ChelStats = new ymaps.Placemark([55.12056144, 61.37211950], {
        balloonContentHeader: 'Статистика найма',
        balloonContentFooter: 'Челябинск'
    });
    fetch('/src/Chelyabinsk/ChelStatsData.html', myInit)
        .then(data => data.text())
        .then(data => {
            ChelStats.properties.set('balloonContentBody', data);
        });
    Chelyabinsk.push(ChelStats);

    var ChelSummary = new ymaps.Placemark([55.12056144, 61.37211950], {
        balloonContentHeader: 'Итоги',
        balloonContentFooter: 'Челябинск'
    });
    fetch('/src/Chelyabinsk/ChelSummaryData.html', myInit)
        .then(data => data.text())
        .then(data => {
            ChelSummary.properties.set('balloonContentBody', data);
        });
    Chelyabinsk.push(ChelSummary);

    clusterer.add(Chelyabinsk);
    map.geoObjects.add(clusterer);

    //Уфа
    var Ufa = [];

    var UfaVuz = new ymaps.Placemark([54.70068845, 55.99398021], {
        balloonContentHeader: 'ВУЗ-ы',
        balloonContentFooter: 'Уфа'
    });
    fetch('/src/Ufa/UfaVuzData.html', myInit)
        .then(data => data.text())
        .then(data => {
            UfaVuz.properties.set('balloonContentBody', data);
        });
    Ufa.push(UfaVuz);

    var UfaComm = new ymaps.Placemark([54.70068845, 55.99398021], {
        balloonContentHeader: 'Комьюнити + конференции',
        balloonContentFooter: 'Уфа'
    });
    fetch('/src/Ufa/UfaCommData.html', myInit)
        .then(data => data.text())
        .then(data => {
            UfaComm.properties.set('balloonContentBody', data);
        });
    Ufa.push(UfaComm);

    var UfaMarket = new ymaps.Placemark([54.70068845, 55.99398021], {
        balloonContentHeader: 'Объем рынка',
        balloonContentFooter: 'Уфа'
    });
    fetch('/src/Ufa/UfaMarketData.html', myInit)
        .then(data => data.text())
        .then(data => {
            UfaMarket.properties.set('balloonContentBody', data);
        });
    Ufa.push(UfaMarket);

    var UfaCompanies = new ymaps.Placemark([54.70068845, 55.99398021], {
        balloonContentHeader: 'Компании-доноры',
        balloonContentFooter: 'Уфа'
    });
    fetch('/src/Ufa/UfaCompaniesData.html', myInit)
        .then(data => data.text())
        .then(data => {
            UfaCompanies.properties.set('balloonContentBody', data);
        });
    Ufa.push(UfaCompanies);

    var UfaConversion = new ymaps.Placemark([54.70068845, 55.99398021], {
        balloonContentHeader: 'Конверсия',
        balloonContentFooter: 'Уфа'
    });
    fetch('/src/Ufa/UfaConversionData.html', myInit)
        .then(data => data.text())
        .then(data => {
            UfaConversion.properties.set('balloonContentBody', data);
        });
    Ufa.push(UfaConversion);

    var UfaStats = new ymaps.Placemark([54.70068845, 55.99398021], {
        balloonContentHeader: 'Статистика найма',
        balloonContentFooter: 'Уфа'
    });
    fetch('/src/Ufa/UfaStatsData.html', myInit)
        .then(data => data.text())
        .then(data => {
            UfaStats.properties.set('balloonContentBody', data);
        });
    Ufa.push(UfaStats);

    var UfaSummary = new ymaps.Placemark([54.70068845, 55.99398021], {
        balloonContentHeader: 'Итоги',
        balloonContentFooter: 'Уфа'
    });
    fetch('/src/Ufa/UfaSummaryData.html', myInit)
        .then(data => data.text())
        .then(data => {
            UfaSummary.properties.set('balloonContentBody', data);
        });
    Ufa.push(UfaSummary);

    clusterer.add(Ufa);
    map.geoObjects.add(clusterer);

    //Екатеринбург
    var Ekaterinburg = [];

    var EkatVuz = new ymaps.Placemark([56.75837475, 60.56429271], {
        balloonContentHeader: 'ВУЗ-ы',
        balloonContentFooter: 'Екатеринбург'
    });
    fetch('/src/Ekaterinburg/EkatVuzData.html', myInit)
        .then(data => data.text())
        .then(data => {
            EkatVuz.properties.set('balloonContentBody', data);
        });
    Ekaterinburg.push(EkatVuz);

    var EkatComm = new ymaps.Placemark([56.75837475, 60.56429271], {
        balloonContentHeader: 'Комьюнити + конференции',
        balloonContentFooter: 'Екатеринбург'
    });
    fetch('/src/Ekaterinburg/EkatCommData.html', myInit)
        .then(data => data.text())
        .then(data => {
            EkatComm.properties.set('balloonContentBody', data);
        });
    Ekaterinburg.push(EkatComm);

    var EkatMarket = new ymaps.Placemark([56.75837475, 60.56429271], {
        balloonContentHeader: 'Объем рынка',
        balloonContentFooter: 'Екатеринбург'
    });
    fetch('/src/Ekaterinburg/EkatMarketData.html', myInit)
        .then(data => data.text())
        .then(data => {
            EkatMarket.properties.set('balloonContentBody', data);
        });
    Ekaterinburg.push(EkatMarket);

    var EkatCompanies = new ymaps.Placemark([56.75837475, 60.56429271], {
        balloonContentHeader: 'Компании-доноры',
        balloonContentFooter: 'Екатеринбург'
    });
    fetch('/src/Ekaterinburg/EkatCompaniesData.html', myInit)
        .then(data => data.text())
        .then(data => {
            EkatCompanies.properties.set('balloonContentBody', data);
        });
    Ekaterinburg.push(EkatCompanies);

    var EkatConversion = new ymaps.Placemark([56.75837475, 60.56429271], {
        balloonContentHeader: 'Конверсия',
        balloonContentFooter: 'Екатеринбург'
    });
    fetch('/src/Ekaterinburg/EkatConversionData.html', myInit)
        .then(data => data.text())
        .then(data => {
            EkatConversion.properties.set('balloonContentBody', data);
        });
    Ekaterinburg.push(EkatConversion);

    var EkatStats = new ymaps.Placemark([56.75837475, 60.56429271], {
        balloonContentHeader: 'Статистика найма',
        balloonContentFooter: 'Екатеринбург'
    });
    fetch('/src/Ekaterinburg/EkatStatsData.html', myInit)
        .then(data => data.text())
        .then(data => {
            EkatStats.properties.set('balloonContentBody', data);
        });
    Ekaterinburg.push(EkatStats);

    var EkatSummary = new ymaps.Placemark([56.75837475, 60.56429271], {
        balloonContentHeader: 'Итоги',
        balloonContentFooter: 'Екатеринбург'
    });
    fetch('/src/Ekaterinburg/EkatSummaryData.html', myInit)
        .then(data => data.text())
        .then(data => {
            EkatSummary.properties.set('balloonContentBody', data);
        });
    Ekaterinburg.push(EkatSummary);

    clusterer.add(Ekaterinburg);
    map.geoObjects.add(clusterer);

    //Пермь
    var PermCity = [];

    var PermVuz = new ymaps.Placemark([57.95470387, 56.21370677], {
        balloonContentHeader: 'ВУЗ-ы',
        balloonContentFooter: 'Пермь'
    });
    fetch('/src/Perm/PermVuzData.html', myInit)
        .then(data => data.text())
        .then(data => {
            PermVuz.properties.set('balloonContentBody', data);
        });
    PermCity.push(PermVuz);

    var PermComm = new ymaps.Placemark([57.95470387, 56.21370677], {
        balloonContentHeader: 'Комьюнити + конференции',
        balloonContentFooter: 'Пермь'
    });
    fetch('/src/Perm/PermCommData.html', myInit)
        .then(data => data.text())
        .then(data => {
            PermComm.properties.set('balloonContentBody', data);
        });
    PermCity.push(PermComm);

    var PermMarket = new ymaps.Placemark([57.95470387, 56.21370677], {
        balloonContentHeader: 'Объем рынка',
        balloonContentFooter: 'Пермь'
    });
    fetch('/src/Perm/PermMarketData.html', myInit)
        .then(data => data.text())
        .then(data => {
            PermMarket.properties.set('balloonContentBody', data);
        });
    PermCity.push(PermMarket);

    var PermCompanies = new ymaps.Placemark([57.95470387, 56.21370677], {
        balloonContentHeader: 'Компании-доноры',
        balloonContentFooter: 'Пермь'
    });
    fetch('/src/Perm/PermCompaniesData.html', myInit)
        .then(data => data.text())
        .then(data => {
            PermCompanies.properties.set('balloonContentBody', data);
        });
    PermCity.push(PermCompanies);

    var PermConversion = new ymaps.Placemark([57.95470387, 56.21370677], {
        balloonContentHeader: 'Конверсия',
        balloonContentFooter: 'Пермь'
    });
    fetch('/src/Perm/PermConversionData.html', myInit)
        .then(data => data.text())
        .then(data => {
            PermConversion.properties.set('balloonContentBody', data);
        });
    PermCity.push(PermConversion);

    var PermStats = new ymaps.Placemark([57.95470387, 56.21370677], {
        balloonContentHeader: 'Статистика найма',
        balloonContentFooter: 'Пермь'
    });
    fetch('/src/Perm/PermStatsData.html', myInit)
        .then(data => data.text())
        .then(data => {
            PermStats.properties.set('balloonContentBody', data);
        });
    PermCity.push(PermStats);

    var PermSummary = new ymaps.Placemark([57.95470387, 56.21370677], {
        balloonContentHeader: 'Итоги',
        balloonContentFooter: 'Пермь'
    });
    fetch('/src/Perm/PermSummaryData.html', myInit)
        .then(data => data.text())
        .then(data => {
            PermSummary.properties.set('balloonContentBody', data);
        });
    PermCity.push(PermSummary);

    clusterer.add(PermCity);
    map.geoObjects.add(clusterer);

    //Краснодар
    var Krasnodar = [];

    var KrasVuz = new ymaps.Placemark([45.01073649, 38.98714427], {
        balloonContentHeader: 'ВУЗ-ы',
        balloonContentFooter: 'Краснодар'
    });
    fetch('/src/Krasnodar/KrasVuzData.html', myInit)
        .then(data => data.text())
        .then(data => {
            KrasVuz.properties.set('balloonContentBody', data);
        });
    Krasnodar.push(KrasVuz);

    var KrasComm = new ymaps.Placemark([45.01073649, 38.98714427], {
        balloonContentHeader: 'Комьюнити + конференции',
        balloonContentFooter: 'Краснодар'
    });
    fetch('/src/Krasnodar/KrasCommData.html', myInit)
        .then(data => data.text())
        .then(data => {
            KrasComm.properties.set('balloonContentBody', data);
        });
    Krasnodar.push(KrasComm);

    var KrasMarket = new ymaps.Placemark([45.01073649, 38.98714427], {
        balloonContentHeader: 'Объем рынка',
        balloonContentFooter: 'Краснодар'
    });
    fetch('/src/Krasnodar/KrasMarketData.html', myInit)
        .then(data => data.text())
        .then(data => {
            KrasMarket.properties.set('balloonContentBody', data);
        });
    Krasnodar.push(KrasMarket);

    var KrasCompanies = new ymaps.Placemark([45.01073649, 38.98714427], {
        balloonContentHeader: 'Компании-доноры',
        balloonContentFooter: 'Краснодар'
    });
    fetch('/src/Krasnodar/KrasCompaniesData.html', myInit)
        .then(data => data.text())
        .then(data => {
            KrasCompanies.properties.set('balloonContentBody', data);
        });
    Krasnodar.push(KrasCompanies);

    var KrasConversion = new ymaps.Placemark([45.01073649, 38.98714427], {
        balloonContentHeader: 'Конверсия',
        balloonContentFooter: 'Краснодар'
    });
    fetch('/src/Krasnodar/KrasConversionData.html', myInit)
        .then(data => data.text())
        .then(data => {
            KrasConversion.properties.set('balloonContentBody', data);
        });
    Krasnodar.push(KrasConversion);

    var KrasStats = new ymaps.Placemark([45.01073649, 38.98714427], {
        balloonContentHeader: 'Статистика найма',
        balloonContentFooter: 'Краснодар'
    });
    fetch('/src/Krasnodar/KrasStatsData.html', myInit)
        .then(data => data.text())
        .then(data => {
            KrasStats.properties.set('balloonContentBody', data);
        });
    Krasnodar.push(KrasStats);

    var KrasSummary = new ymaps.Placemark([45.01073649, 38.98714427], {
        balloonContentHeader: 'Итоги',
        balloonContentFooter: 'Краснодар'
    });
    fetch('/src/Krasnodar/KrasSummaryData.html', myInit)
        .then(data => data.text())
        .then(data => {
            KrasSummary.properties.set('balloonContentBody', data);
        });
    Krasnodar.push(KrasSummary);

    clusterer.add(Krasnodar);
    map.geoObjects.add(clusterer);

    //Ростов-на-Дону
    var RostovOnDon = [];

    var RostODVuz = new ymaps.Placemark([47.15102362, 39.73421458], {
        balloonContentHeader: 'ВУЗ-ы',
        balloonContentFooter: 'Ростов-на-Дону'
    });
    fetch('/src/RostovOnDon/RostODVuzData.html', myInit)
        .then(data => data.text())
        .then(data => {
            RostODVuz.properties.set('balloonContentBody', data);
        });
    RostovOnDon.push(RostODVuz);

    var RostODComm = new ymaps.Placemark([47.15102362, 39.73421458], {
        balloonContentHeader: 'Комьюнити + конференции',
        balloonContentFooter: 'Ростов-на-Дону'
    });
    fetch('/src/RostovOnDon/RostODCommData.html', myInit)
        .then(data => data.text())
        .then(data => {
            RostODComm.properties.set('balloonContentBody', data);
        });
    RostovOnDon.push(RostODComm);

    var RostODMarket = new ymaps.Placemark([47.15102362, 39.73421458], {
        balloonContentHeader: 'Объем рынка',
        balloonContentFooter: 'Ростов-на-Дону'
    });
    fetch('/src/RostovOnDon/RostODMarketData.html', myInit)
        .then(data => data.text())
        .then(data => {
            RostODMarket.properties.set('balloonContentBody', data);
        });
    RostovOnDon.push(RostODMarket);

    var RostODCompanies = new ymaps.Placemark([47.15102362, 39.73421458], {
        balloonContentHeader: 'Компании-доноры',
        balloonContentFooter: 'Ростов-на-Дону'
    });
    fetch('/src/RostovOnDon/RostODCompaniesData.html', myInit)
        .then(data => data.text())
        .then(data => {
            RostODCompanies.properties.set('balloonContentBody', data);
        });
    RostovOnDon.push(RostODCompanies);

    var RostODConversion = new ymaps.Placemark([47.15102362, 39.73421458], {
        balloonContentHeader: 'Конверсия',
        balloonContentFooter: 'Ростов-на-Дону'
    });
    fetch('/src/RostovOnDon/RostODConversionData.html', myInit)
        .then(data => data.text())
        .then(data => {
            RostODConversion.properties.set('balloonContentBody', data);
        });
    RostovOnDon.push(RostODConversion);

    var RostODStats = new ymaps.Placemark([47.15102362, 39.73421458], {
        balloonContentHeader: 'Статистика найма',
        balloonContentFooter: 'Ростов-на-Дону'
    });
    fetch('/src/RostovOnDon/RostODStatsData.html', myInit)
        .then(data => data.text())
        .then(data => {
            RostODStats.properties.set('balloonContentBody', data);
        });
    RostovOnDon.push(RostODStats);

    var RostODSummary = new ymaps.Placemark([47.15102362, 39.73421458], {
        balloonContentHeader: 'Итоги',
        balloonContentFooter: 'Ростов-на-Дону'
    });
    fetch('/src/RostovOnDon/RostODSummaryData.html', myInit)
        .then(data => data.text())
        .then(data => {
            RostODSummary.properties.set('balloonContentBody', data);
        });
    RostovOnDon.push(RostODSummary);

    clusterer.add(RostovOnDon);
    map.geoObjects.add(clusterer);

    //Ярославль
    var Yaroslavl = [];

    var YarVuz = new ymaps.Placemark([57.57896596, 39.86605052], {
        balloonContentHeader: 'ВУЗ-ы',
        balloonContentFooter: 'Ярославль'
    });
    fetch('/src/Yaroslavl/YarVuzData.html', myInit)
        .then(data => data.text())
        .then(data => {
            YarVuz.properties.set('balloonContentBody', data);
        });
    Yaroslavl.push(YarVuz);

    var YarComm = new ymaps.Placemark([57.57896596, 39.86605052], {
        balloonContentHeader: 'Комьюнити + конференции',
        balloonContentFooter: 'Ярославль'
    });
    fetch('src/Yaroslavl/YarCommData.html', myInit)
        .then(data => data.text())
        .then(data => {
            YarComm.properties.set('balloonContentBody', data);
        });
    Yaroslavl.push(YarComm);

    var YarMarket = new ymaps.Placemark([57.57896596, 39.86605052], {
        balloonContentHeader: 'Объем рынка',
        balloonContentFooter: 'Ярославль'
    });
    fetch('src/Yaroslavl/YarMarketData.html', myInit)
        .then(data => data.text())
        .then(data => {
            YarMarket.properties.set('balloonContentBody', data);
        });
    Yaroslavl.push(YarMarket);

    var YarCompanies = new ymaps.Placemark([57.57896596, 39.86605052], {
        balloonContentHeader: 'Компании-доноры',
        balloonContentFooter: 'Ярославль'
    });
    fetch('src/Yaroslavl/YarCompaniesData.html', myInit)
        .then(data => data.text())
        .then(data => {
            YarCompanies.properties.set('balloonContentBody', data);
        });
    Yaroslavl.push(YarCompanies);

    var YarConversion = new ymaps.Placemark([57.57896596, 39.86605052], {
        balloonContentHeader: 'Конверсия',
        balloonContentFooter: 'Ярославль'
    });
    fetch('src/Yaroslavl/YarConversionData.html', myInit)
        .then(data => data.text())
        .then(data => {
            YarConversion.properties.set('balloonContentBody', data);
        });
    Yaroslavl.push(YarConversion);

    var YarStats = new ymaps.Placemark([57.57896596, 39.86605052], {
        balloonContentHeader: 'Статистика найма',
        balloonContentFooter: 'Ярославль'
    });
    fetch('src/Yaroslavl/YarStatsData.html', myInit)
        .then(data => data.text())
        .then(data => {
            YarStats.properties.set('balloonContentBody', data);
        });
    Yaroslavl.push(YarStats);

    var YarSummary = new ymaps.Placemark([57.57896596, 39.86605052], {
        balloonContentHeader: 'Итоги',
        balloonContentFooter: 'Ярославль'
    });
    fetch('src/Yaroslavl/YarSummaryData.html', myInit)
        .then(data => data.text())
        .then(data => {
            YarSummary.properties.set('balloonContentBody', data);
        });
    Yaroslavl.push(YarSummary);

    clusterer.add(Yaroslavl);
    map.geoObjects.add(clusterer);

});
