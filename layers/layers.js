var wms_layers = [];
var format_EasternArcMountainsBlocs_0 = new ol.format.GeoJSON();
var features_EasternArcMountainsBlocs_0 = format_EasternArcMountainsBlocs_0.readFeatures(json_EasternArcMountainsBlocs_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EasternArcMountainsBlocs_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_EasternArcMountainsBlocs_0.addFeatures(features_EasternArcMountainsBlocs_0);var lyr_EasternArcMountainsBlocs_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EasternArcMountainsBlocs_0, 
                style: style_EasternArcMountainsBlocs_0,
                title: '<img src="styles/legend/EasternArcMountainsBlocs_0.png" /> Eastern Arc Mountains Blocs'
            });var format_EasternArcMountainsForestPatches_1 = new ol.format.GeoJSON();
var features_EasternArcMountainsForestPatches_1 = format_EasternArcMountainsForestPatches_1.readFeatures(json_EasternArcMountainsForestPatches_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EasternArcMountainsForestPatches_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_EasternArcMountainsForestPatches_1.addFeatures(features_EasternArcMountainsForestPatches_1);var lyr_EasternArcMountainsForestPatches_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EasternArcMountainsForestPatches_1, 
                style: style_EasternArcMountainsForestPatches_1,
                title: '<img src="styles/legend/EasternArcMountainsForestPatches_1.png" /> Eastern Arc Mountains Forest Patches'
            });var format_MagomberaForest_2 = new ol.format.GeoJSON();
var features_MagomberaForest_2 = format_MagomberaForest_2.readFeatures(json_MagomberaForest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MagomberaForest_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MagomberaForest_2.addFeatures(features_MagomberaForest_2);var lyr_MagomberaForest_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MagomberaForest_2, 
                style: style_MagomberaForest_2,
                title: '<img src="styles/legend/MagomberaForest_2.png" /> Magombera Forest'
            });var format_IllovoSugarCompany_3 = new ol.format.GeoJSON();
var features_IllovoSugarCompany_3 = format_IllovoSugarCompany_3.readFeatures(json_IllovoSugarCompany_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IllovoSugarCompany_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_IllovoSugarCompany_3.addFeatures(features_IllovoSugarCompany_3);var lyr_IllovoSugarCompany_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IllovoSugarCompany_3, 
                style: style_IllovoSugarCompany_3,
                title: '<img src="styles/legend/IllovoSugarCompany_3.png" /> Illovo Sugar Company'
            });var format_SelousGameReserve_4 = new ol.format.GeoJSON();
var features_SelousGameReserve_4 = format_SelousGameReserve_4.readFeatures(json_SelousGameReserve_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SelousGameReserve_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SelousGameReserve_4.addFeatures(features_SelousGameReserve_4);var lyr_SelousGameReserve_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SelousGameReserve_4, 
                style: style_SelousGameReserve_4,
                title: '<img src="styles/legend/SelousGameReserve_4.png" /> Selous Game Reserve'
            });var format_UdzungwaMountainsNationalPark_5 = new ol.format.GeoJSON();
var features_UdzungwaMountainsNationalPark_5 = format_UdzungwaMountainsNationalPark_5.readFeatures(json_UdzungwaMountainsNationalPark_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UdzungwaMountainsNationalPark_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UdzungwaMountainsNationalPark_5.addFeatures(features_UdzungwaMountainsNationalPark_5);var lyr_UdzungwaMountainsNationalPark_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UdzungwaMountainsNationalPark_5, 
                style: style_UdzungwaMountainsNationalPark_5,
                title: '<img src="styles/legend/UdzungwaMountainsNationalPark_5.png" /> Udzungwa Mountains National Park'
            });var format_Rivers_6 = new ol.format.GeoJSON();
var features_Rivers_6 = format_Rivers_6.readFeatures(json_Rivers_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Rivers_6.addFeatures(features_Rivers_6);var lyr_Rivers_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rivers_6, 
                style: style_Rivers_6,
                title: '<img src="styles/legend/Rivers_6.png" /> Rivers'
            });var format_IringaRoad_7 = new ol.format.GeoJSON();
var features_IringaRoad_7 = format_IringaRoad_7.readFeatures(json_IringaRoad_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IringaRoad_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_IringaRoad_7.addFeatures(features_IringaRoad_7);var lyr_IringaRoad_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IringaRoad_7, 
                style: style_IringaRoad_7,
                title: '<img src="styles/legend/IringaRoad_7.png" /> Iringa Road'
            });var format_MikumitoIfakaraRoad_8 = new ol.format.GeoJSON();
var features_MikumitoIfakaraRoad_8 = format_MikumitoIfakaraRoad_8.readFeatures(json_MikumitoIfakaraRoad_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MikumitoIfakaraRoad_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MikumitoIfakaraRoad_8.addFeatures(features_MikumitoIfakaraRoad_8);var lyr_MikumitoIfakaraRoad_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MikumitoIfakaraRoad_8, 
                style: style_MikumitoIfakaraRoad_8,
                title: '<img src="styles/legend/MikumitoIfakaraRoad_8.png" /> Mikumi to Ifakara Road'
            });var format_MajorCities_9 = new ol.format.GeoJSON();
var features_MajorCities_9 = format_MajorCities_9.readFeatures(json_MajorCities_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorCities_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MajorCities_9.addFeatures(features_MajorCities_9);var lyr_MajorCities_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MajorCities_9, 
                style: style_MajorCities_9,
                title: '<img src="styles/legend/MajorCities_9.png" /> Major Cities'
            });var format_StudyVillages_10 = new ol.format.GeoJSON();
var features_StudyVillages_10 = format_StudyVillages_10.readFeatures(json_StudyVillages_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyVillages_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_StudyVillages_10.addFeatures(features_StudyVillages_10);var lyr_StudyVillages_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StudyVillages_10, 
                style: style_StudyVillages_10,
                title: '<img src="styles/legend/StudyVillages_10.png" /> Study Villages'
            });

lyr_EasternArcMountainsBlocs_0.setVisible(true);lyr_EasternArcMountainsForestPatches_1.setVisible(true);lyr_MagomberaForest_2.setVisible(true);lyr_IllovoSugarCompany_3.setVisible(true);lyr_SelousGameReserve_4.setVisible(true);lyr_UdzungwaMountainsNationalPark_5.setVisible(true);lyr_Rivers_6.setVisible(true);lyr_IringaRoad_7.setVisible(true);lyr_MikumitoIfakaraRoad_8.setVisible(true);lyr_MajorCities_9.setVisible(true);lyr_StudyVillages_10.setVisible(true);
var layersList = [lyr_EasternArcMountainsBlocs_0,lyr_EasternArcMountainsForestPatches_1,lyr_MagomberaForest_2,lyr_IllovoSugarCompany_3,lyr_SelousGameReserve_4,lyr_UdzungwaMountainsNationalPark_5,lyr_Rivers_6,lyr_IringaRoad_7,lyr_MikumitoIfakaraRoad_8,lyr_MajorCities_9,lyr_StudyVillages_10];
lyr_EasternArcMountainsBlocs_0.set('fieldAliases', {'BLOCID': 'BLOCID', 'BLOCNAME': 'BLOCNAME', 'AREA_KM2': 'AREA_KM2', 'PERIM_KM': 'PERIM_KM', });
lyr_EasternArcMountainsForestPatches_1.set('fieldAliases', {'BLOCID': 'BLOCID', 'BLOCNAME': 'BLOCNAME', 'AREA_KM2_1': 'AREA_KM2_1', 'PERIM_KM2': 'PERIM_KM2', 'Patch': 'Patch', });
lyr_MagomberaForest_2.set('fieldAliases', {'GENVEG': 'GENVEG', });
lyr_IllovoSugarCompany_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_SelousGameReserve_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_UdzungwaMountainsNationalPark_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Rivers_6.set('fieldAliases', {'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_IringaRoad_7.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_MikumitoIfakaraRoad_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_MajorCities_9.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_StudyVillages_10.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_EasternArcMountainsBlocs_0.set('fieldImages', {'BLOCID': 'Range', 'BLOCNAME': 'TextEdit', 'AREA_KM2': 'TextEdit', 'PERIM_KM': 'TextEdit', });
lyr_EasternArcMountainsForestPatches_1.set('fieldImages', {'BLOCID': 'Range', 'BLOCNAME': 'TextEdit', 'AREA_KM2_1': 'TextEdit', 'PERIM_KM2': 'TextEdit', 'Patch': 'Range', });
lyr_MagomberaForest_2.set('fieldImages', {'GENVEG': 'TextEdit', });
lyr_IllovoSugarCompany_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_SelousGameReserve_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'TextEdit', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'TextEdit', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_UdzungwaMountainsNationalPark_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'TextEdit', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'TextEdit', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Rivers_6.set('fieldImages', {'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_IringaRoad_7.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', });
lyr_MikumitoIfakaraRoad_8.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', });
lyr_MajorCities_9.set('fieldImages', {'Id': 'Range', 'Name': '', });
lyr_StudyVillages_10.set('fieldImages', {'Id': 'Range', 'Name': '', });
lyr_EasternArcMountainsBlocs_0.set('fieldLabels', {'BLOCID': 'no label', 'BLOCNAME': 'no label', 'AREA_KM2': 'no label', 'PERIM_KM': 'no label', });
lyr_EasternArcMountainsForestPatches_1.set('fieldLabels', {'BLOCID': 'no label', 'BLOCNAME': 'no label', 'AREA_KM2_1': 'no label', 'PERIM_KM2': 'no label', 'Patch': 'no label', });
lyr_MagomberaForest_2.set('fieldLabels', {'GENVEG': 'no label', });
lyr_IllovoSugarCompany_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_SelousGameReserve_4.set('fieldLabels', {'OBJECTID': 'no label', 'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_UdzungwaMountainsNationalPark_5.set('fieldLabels', {'OBJECTID': 'no label', 'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Rivers_6.set('fieldLabels', {'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_IringaRoad_7.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_MikumitoIfakaraRoad_8.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_MajorCities_9.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_StudyVillages_10.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_StudyVillages_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});