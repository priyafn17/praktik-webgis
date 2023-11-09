var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NDVI_SURABAYA_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_SURABAYA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_SURABAYA_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12533597.767725, -820656.874640, 12562124.749540, -801614.325356]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_NDVI_SURABAYA_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NDVI_SURABAYA_1];
