var wms_layers = [];

var format_india_st_0 = new ol.format.GeoJSON();
var features_india_st_0 = format_india_st_0.readFeatures(json_india_st_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_india_st_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_st_0.addFeatures(features_india_st_0);
var lyr_india_st_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_india_st_0, 
                style: style_india_st_0,
                popuplayertitle: "india_st",
                interactive: true,
                title: '<img src="styles/legend/india_st_0.png" /> india_st'
            });
var format_india_ds_1 = new ol.format.GeoJSON();
var features_india_ds_1 = format_india_ds_1.readFeatures(json_india_ds_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_india_ds_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_ds_1.addFeatures(features_india_ds_1);
var lyr_india_ds_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_india_ds_1, 
                style: style_india_ds_1,
                popuplayertitle: "india_ds",
                interactive: true,
    title: 'india_ds<br />\
    <img src="styles/legend/india_ds_1_0.png" /> 101722 - 187739<br />\
    <img src="styles/legend/india_ds_1_1.png" /> 187739 - 269348<br />\
    <img src="styles/legend/india_ds_1_2.png" /> 269348 - 346766<br />\
    <img src="styles/legend/india_ds_1_3.png" /> 346766 - 429615<br />\
    <img src="styles/legend/india_ds_1_4.png" /> 429615 - 499578<br />'
        });
var format_LSRSHAPE1_2 = new ol.format.GeoJSON();
var features_LSRSHAPE1_2 = format_LSRSHAPE1_2.readFeatures(json_LSRSHAPE1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSRSHAPE1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSRSHAPE1_2.addFeatures(features_LSRSHAPE1_2);
var lyr_LSRSHAPE1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSRSHAPE1_2, 
                style: style_LSRSHAPE1_2,
                popuplayertitle: "LSRSHAPE1",
                interactive: true,
                title: '<img src="styles/legend/LSRSHAPE1_2.png" /> LSRSHAPE1'
            });

lyr_india_st_0.setVisible(true);lyr_india_ds_1.setVisible(true);lyr_LSRSHAPE1_2.setVisible(true);
var layersList = [lyr_india_st_0,lyr_india_ds_1,lyr_LSRSHAPE1_2];
lyr_india_st_0.set('fieldAliases', {'STATE': 'STATE', });
lyr_india_ds_1.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'Book1_DISTRICT': 'Book1_DISTRICT', 'Book1_STATE': 'Book1_STATE', 'Book1_Population': 'Book1_Population', });
lyr_LSRSHAPE1_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_india_st_0.set('fieldImages', {'STATE': 'TextEdit', });
lyr_india_ds_1.set('fieldImages', {'DST_ID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'Book1_DISTRICT': 'TextEdit', 'Book1_STATE': 'TextEdit', 'Book1_Population': 'Range', });
lyr_LSRSHAPE1_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_india_st_0.set('fieldLabels', {'STATE': 'no label', });
lyr_india_ds_1.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'Book1_DISTRICT': 'no label', 'Book1_STATE': 'no label', 'Book1_Population': 'no label', });
lyr_LSRSHAPE1_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LSRSHAPE1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});