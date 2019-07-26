import { a as __decorate, _ } from './chunk-1bec01b6.js';
import './chunk-5732a1e2.js';
import { M as Component, P as Provide, n as ngRequire, j as jsonConstants_1, x as logger_3, f as flags, e as blinkConstants_1, h as stringUtil_1 } from './chunk-68eb1584.js';
import { aM as BaseComponent, c as chartTypes, W as BaseChart, b7 as areMapTilesEnabled, b8 as chartScreen } from './chunk-31e8efbd.js';
import { a as getGeoMapScreenConfig } from './chunk-f1c2ddb8.js';
import { D as DATA_LABEL_AVG_CHAR_WIDTH, a as DATA_LABEL_LINE_HEIGHT, G as GeoUtils, o as ol, V as VIEW_PROJECTION, b as GeoPropField, c as DATA_PROJECTION, d as GeoCountryConfig, e as DEFAULT_GEO_DATA_NORMALIZER, f as GEO_AREA_OPACITY, g as DATA_LABEL_FILL_COLOR, h as DATA_LABEL_STROKE_COLOR, A as ADMIN_DIV_0_AND_1_MAX_BUBBLE_SIZE, M as MIN_BUBBLE_RADIUS, B as BUBBLE_OPACITY, H as HOVERED_BOUNDARY_COLOR, i as HOVERED_BOUNDARY_THICKNESS, j as BOUNDARY_THICKNESS, k as DEFAULT_BUBBLE_RADIUS, l as DEFAULT_BUBBLE_COLOR, m as GEO_NEARBY_OBJECTS_LAYER_BOUNDARY_COLOR, n as HEATMAP_GRADIENT_COLORS, p as DEFAULT_BOUNDARY_COLOR, q as DEFAULT_FILL_COLOR, r as DEFAULT_MAX_BUBBLE_SIZE, s as BACKGROUND_WORLD_MAP_BOUNDARY_COLOR, t as BACKGROUND_WORLD_MAP_FILL_COLOR, C as CHOROPLETH_DIV_1_BOUNDARY_COLOR, u as CHOROPLETH_DIV_2_BOUNDARY_COLOR, v as HEATMAP_WEIGHT_BASE, w as HEATMAP_WEIGHT_FRACTION, x as MAX_DEFAULT_ZOOM_OTHERS, y as MAX_DEFAULT_ZOOM_ZIP_AND_POINT, I as IMAGE_TILE_SIZE } from './chunk-551dd436.js';

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview UI component to show a color range.
 */
var ColorScaleComponent_1;
let ColorScaleComponent = ColorScaleComponent_1 = class ColorScaleComponent extends BaseComponent {
    constructor(options) {
        super();
        this.options = options;
        this.disableScaling = false;
        this.leftText = options.leftText;
        this.rightText = options.rightText;
        this.getSelectedColor = options.getSelectedColor ? options.getSelectedColor : _.noop;
        this.onClickBox = _.isFunction(options.onSelection) ? options.onSelection : _.noop;
        let resolution = options.resolution || ColorScaleComponent_1.DEFAULT_RESOLUTION;
        this.disableScaling = options.disableScaling || false;
        this.colors = [];
        if (this.disableScaling) {
            let colorList = options.colors;
            this.colors = colorList;
        }
        else {
            let colorFunc = options.colors;
            if (!_.isFunction(colorFunc)) {
                colorFunc = chroma.scale(colorFunc);
            }
            for (let i = 0; i < resolution; i++) {
                this.colors.push(colorFunc(i / (resolution - 1))
                    .toString());
            }
        }
    }
    static __getExamples() {
        return [
            {
                ctrl: new ColorScaleComponent_1({
                    colors: ['yellow', 'red', 'green'],
                    resolution: 100,
                    leftText: '12.3K',
                    rightText: '1.3M'
                })
            }
        ];
    }
    isSelectedColor(color) {
        return color === this.getSelectedColor();
    }
    isDiscreetColorScale() {
        return !!this.options.isDiscreetColorScale;
    }
};
ColorScaleComponent.DEFAULT_RESOLUTION = 100;
ColorScaleComponent = ColorScaleComponent_1 = __decorate([
    Component({
        name: 'bkColorScale',
        templateUrl: 'src/common/widgets/color-scale/color-scale.html'
    })
], ColorScaleComponent);
var ColorScaleComponent$1 = ColorScaleComponent;

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview A class to manage the logic around data labels placement.
 */
class GeoDataLabelManager {
    static chooseFeaturesForLabeling(options) {
        let width = options.width, height = options.height;
        let onScreenFeatures = {};
        options.features.forEach((feature) => {
            let coords = options.coordinateFunc(feature);
            if (coords[0] < 0 || coords[1] < 0 ||
                coords[0] > width || coords[1] > height) {
                return;
            }
            onScreenFeatures[feature.getId()] = coords;
        });
        let chosenFeatures = {};
        if (options.prioritize_existing) {
            // First prioritise to those which had labels in the last pass.
            if (options.existing_labeled_features === void 0) {
                throw new Error('existing labeled features must be provided if prioritize_existing' +
                    ' is passed true');
            }
            options.existing_labeled_features.forEach((featureId) => {
                if (_.has(onScreenFeatures, featureId)) {
                    chosenFeatures[featureId] = onScreenFeatures[featureId];
                }
            });
        }
        let labelWidths = new Map();
        options.labels.forEach((label, featureId) => {
            let lines = label.split('\n');
            let maxLineLength = Math.max(...lines.map((line) => line.length));
            labelWidths.set(featureId, maxLineLength * DATA_LABEL_AVG_CHAR_WIDTH);
        });
        for (let featureId in onScreenFeatures) {
            if (chosenFeatures[featureId]) {
                continue;
            }
            let clash = false;
            let coords = onScreenFeatures[featureId];
            let maxAllowedYDiff = 2 * DATA_LABEL_LINE_HEIGHT;
            for (let key in chosenFeatures) {
                let labeledPoint = chosenFeatures[key];
                let maxAllowedXDiff = (labelWidths.get(featureId) + labelWidths.get(key)) / 2;
                if (Math.abs(labeledPoint[0] - coords[0]) < maxAllowedXDiff &&
                    Math.abs(labeledPoint[1] - coords[1]) < maxAllowedYDiff) {
                    clash = true;
                    break;
                }
            }
            if (!clash) {
                chosenFeatures[featureId] = coords;
            }
        }
        return new Set(Object.keys(chosenFeatures));
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2015
 * Author: Utsav kapoor (utsav.kapoor@thoughtspot.com)
 *
 * @fileoverview Models to get geo-coordinates.
 *
 */
let GeoCoordinates = class GeoCoordinates {
    constructor(latitude, longitude, altitude = 0) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = isNaN(altitude) ? 0 : altitude;
    }
};
GeoCoordinates = __decorate([
    Provide('GeoCoordinates')
], GeoCoordinates);

/**
 * Copyright: ThoughtSpot Inc. 2012-2015
 * Author: Shashank Singh (sunny@thoughtspot.com)
 *
 * @fileoverview Models to represent geographical boundaries.
 *
 */
var GeoBounds_1;
let GeoBounds = GeoBounds_1 = class GeoBounds {
    /**
     *
     * @param {=GeoCoordinates} bottomLeft
     * @param {=GeoCoordinates} topRight
     * @constructor
     */
    constructor(bottomLeft = null, topRight = null) {
        this.topRight = topRight === void 0 ? null : topRight;
        this.bottomLeft = bottomLeft === void 0 ? null : bottomLeft;
        this.topLeft = null;
        this.bottomRight = null;
        this.updateDerivedCorners(this);
    }
    /**
     * Creates a new GeoBounds instance from the min/max lat/long pairs provided.
     * Note that this method does not support bounds that cross the date line.
     * It assumes that the bottomLeft of the viewport is the min lat/long and
     * the topRight is the max lat/long which is not always correct if the
     * bound includes the date line.
     *
     * @param {Number} minLat
     * @param {Number} minLon
     * @param {Number} maxLat
     * @param {Number} maxLon
     * @returns {GeoBounds}
     */
    fromBounds(minLat, minLon, maxLat, maxLon) {
        return new GeoBounds_1(new GeoCoordinates(minLat, minLon, 0), new GeoCoordinates(maxLat, maxLon, 0));
    }
    /**
     * @returns {boolean}
     */
    isEmpty() {
        return this.bottomLeft === null || this.topRight === null;
    }
    /**
     * @returns {boolean}
     */
    crossesDateLine() {
        return this.bottomLeft.longitude > this.topRight.longitude;
    }
    /**
     * Extends the bounds to include the provided coordinate. If _allowCrossingDateLine_ is set to
     * true and the bounds are not already crossing the date line the bounds will be cross the date
     * if needed to minimize the area added to include the new point.
     * If the bounds is already crossing the date line _allowCrossingDateLine_ is ignored.
     *
     * @param lat
     * @param lon
     * @param allowCrossingDateLine
     */
    extendToIncludePoint(lat, lon, allowCrossingDateLine) {
        if (this.isEmpty()) {
            this.bottomLeft = new GeoCoordinates(lat, lon);
            this.topRight = new GeoCoordinates(lat, lon);
            this.updateDerivedCorners(this);
            return;
        }
        let distanceFromLeft, distanceFromRight;
        if (this.crossesDateLine() || !allowCrossingDateLine) {
            distanceFromLeft = lon - this.bottomLeft.longitude;
            distanceFromRight = lon - this.topRight.longitude;
        }
        else {
            let longRange = (GeoUtils.constants.MAP_MAX_LONGITUDE -
                GeoUtils.constants.MAP_MIN_LONGITUDE);
            distanceFromLeft = (lon + longRange) % longRange -
                (this.bottomLeft.longitude + longRange) % longRange;
            distanceFromRight = (lon + longRange) % longRange -
                (this.topRight.longitude + longRange) % longRange;
        }
        if (distanceFromLeft < 0 || distanceFromRight > 0) {
            // we have a choice to extend either left or right, we choose
            // the one that will cause minimum increase in area
            if (Math.abs(distanceFromLeft) < Math.abs(distanceFromRight)) {
                this.bottomLeft.longitude = lon;
            }
            else {
                this.topRight.longitude = lon;
            }
        }
        if (lat < this.bottomLeft.latitude) {
            this.bottomLeft.latitude = lat;
        }
        else if (lat > this.topRight.latitude) {
            this.topRight.latitude = lat;
        }
        this.updateDerivedCorners(this);
    }
    expand(latitudeIncrement, longitudeIncrement, allowCrossingDateLine) {
        this.topRight.latitude = Math.min(GeoUtils.constants.MAP_MAX_LATITUDE, this.topRight.latitude + latitudeIncrement / 2);
        this.bottomLeft.latitude = Math.max(GeoUtils.constants.MAP_MIN_LATITUDE, this.bottomLeft.latitude - latitudeIncrement / 2);
        if (this.crossesDateLine()) {
            allowCrossingDateLine = true;
        }
        this.bottomLeft.longitude -= longitudeIncrement / 2;
        this.topRight.longitude += longitudeIncrement / 2;
        if (allowCrossingDateLine) {
            let longRange = (GeoUtils.constants.MAP_MAX_LONGITUDE -
                GeoUtils.constants.MAP_MIN_LONGITUDE);
            if (this.bottomLeft.longitude <= GeoUtils.constants.MAP_MIN_LONGITUDE) {
                this.bottomLeft.longitude = (this.bottomLeft.longitude + longRange) % longRange;
            }
            if (this.topRight.longitude > GeoUtils.constants.MAP_MAX_LONGITUDE) {
                this.topRight.longitude = (this.topRight.longitude - longRange) % longRange;
            }
        }
        else {
            this.bottomLeft.longitude = Math.max(GeoUtils.constants.MAP_MIN_LONGITUDE, this.bottomLeft.longitude);
            this.topRight.longitude = Math.min(GeoUtils.constants.MAP_MAX_LONGITUDE, this.topRight.longitude);
        }
        this.updateDerivedCorners(this);
    }
    /**
     * Returns the area of the bounds in earth radius units.
     * @returns {number}
     */
    getArea() {
        let latitudeRange = this.topRight.latitude - this.bottomLeft.latitude;
        // the range could cross the date line, we compute the range length thus:
        // Possible cases:
        // MIN --- L --- R --- MAX
        // L --- MAX --- R --- MIN
        // L --- MIN --- R --- MAX
        // with the last two cases being equivalent.
        // We compute the range as ((MAX - L) + (R - MIN))%(MIN - MAX) which covers all the cases
        let leftRectangleLonRange = GeoUtils.constants.MAP_MAX_LONGITUDE -
            this.bottomLeft.longitude;
        let rightRectangleLonRange = this.topRight.longitude -
            GeoUtils.constants.MAP_MIN_LONGITUDE;
        let earthLonRange = GeoUtils.constants.MAP_MAX_LONGITUDE -
            GeoUtils.constants.MAP_MIN_LONGITUDE;
        let longitudeRange = (leftRectangleLonRange + rightRectangleLonRange);
        if (longitudeRange > earthLonRange) {
            longitudeRange -= earthLonRange;
        }
        return (latitudeRange * longitudeRange);
    }
    updateDerivedCorners(bounds) {
        if (bounds.isEmpty()) {
            bounds.topLeft = bounds.bottomRight = null;
            return;
        }
        bounds.topLeft = new GeoCoordinates(bounds.topRight.latitude, bounds.bottomLeft.longitude);
        bounds.bottomRight = new GeoCoordinates(bounds.bottomLeft.latitude, bounds.topRight.longitude);
    }
};
GeoBounds = GeoBounds_1 = __decorate([
    Provide('GeoBounds')
], GeoBounds);

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview This file serves as a one stop shop for fetching and caching of topology
 * data for polygons and centroids for given country and given admin level. It ensures that
 * nothing is fetched or parsed twice.
 *
 * This class offers following 2 convenient functions for retrieving data.
 * 1. Async: GeoTopologyDataStore.getFeatures()
 * 2. Sync: GeoTopologyDataStore.getFeaturesFromCache()
 */
let $http = ngRequire('$http');
class GeoTopologyDataStore {
    /**
     * Async function to fetch geo features for a given configuration, takes care of caching so that
     * no file is fetched of parsed twice.
     * @param geometryType geometry flavor, either 'POLYGON' or 'POINT'.
     * @param level  Admin level.
     * @param country Country to fetch data for, no need to specify if level is admin level 0.
     * @param customFileGuid
     * @returns {IPromise<ol.Feature[]>}
     */
    static getFeatures(geometryType, level, country, customFileGuid) {
        GeoTopologyDataStore.assertValidParams(geometryType, level, country, customFileGuid);
        let cacheKey = GeoTopologyDataStore.getDataJsonKey(level, geometryType, country, customFileGuid);
        if (GeoTopologyDataStore.featuresCache[geometryType][cacheKey]) {
            return Promise.resolve(GeoTopologyDataStore.featuresCache[geometryType][cacheKey]);
        }
        // If polygons features are already present for the same configuration, we can get the
        // point features by getting the interior point of each feature.
        let polygonCacheKey = GeoTopologyDataStore.getDataJsonKey(level, 'POLYGON', country, customFileGuid);
        if (geometryType === 'POINT' &&
            !!GeoTopologyDataStore.featuresCache['POLYGON'][polygonCacheKey]) {
            let polygonFeatures = GeoTopologyDataStore.featuresCache['POLYGON'][polygonCacheKey];
            let pointsFeatures = polygonFeatures.map((feature) => {
                let props = $.extend({}, feature.getProperties());
                props.geometry = GeoUtils.getInteriorPoint(feature);
                let pointFeature = new ol.Feature(props);
                pointFeature.setId(props.GEOID);
                return pointFeature;
            });
            GeoTopologyDataStore.featuresCache[geometryType][cacheKey] = pointsFeatures;
            return Promise.resolve(pointsFeatures);
        }
        let pendingCallExists = _.has(GeoTopologyDataStore.pendingPromises[geometryType], cacheKey);
        if (pendingCallExists) {
            return GeoTopologyDataStore.pendingPromises[geometryType][cacheKey];
        }
        return new Promise((resolve, reject) => {
            let url = GeoTopologyDataStore.getDataJsonURL(level, geometryType, country, customFileGuid);
            $http.get(url).then((response) => GeoTopologyDataStore.httpSuccessCallback(response, geometryType, cacheKey, level, resolve), (response) => GeoTopologyDataStore.httpErrorCallback(response, reject));
        });
    }
    /**
     * Same as getFeatures() except that it only checks the cache. Won't make a network call, hence
     * synchronous.
     * @param geometryType
     * @param level
     * @param isoCode
     * @param customFileGuid
     * @returns {ol.Feature[]}
     */
    static getFeaturesFromCache(geometryType, level, isoCode, customFileGuid) {
        GeoTopologyDataStore.assertValidParams(geometryType, level, isoCode, customFileGuid);
        let cacheKey = GeoTopologyDataStore.getDataJsonKey(level, geometryType, isoCode, customFileGuid);
        if (!GeoTopologyDataStore.featuresCache[geometryType][cacheKey]) {
            throw new Error('Features not found in cache for: ' + geometryType + ', ' + level + ', ' + isoCode);
        }
        return GeoTopologyDataStore.featuresCache[geometryType][cacheKey];
    }
    static assertValidParams(geometryType, level, country, customFileGuid) {
        if (GeoTopologyDataStore.validLevels.indexOf(level) === -1) {
            throw new Error('Invalid level passed');
        }
        if (level === jsonConstants_1.geoConfigType.ZIP_CODE && geometryType !== 'POINT') {
            throw new Error('Only point geometry is supported for zip codes');
        }
        if (GeoTopologyDataStore.levelsWithParentCountry.indexOf(level) !== -1 && !country) {
            throw new Error('country code must be passed for ' + level);
        }
        if (level === jsonConstants_1.geoConfigType.CUSTOM_REGION && !customFileGuid) {
            throw new Error('region def key must be passed for custom region');
        }
    }
    static httpSuccessCallback(response, geometryType, cacheKey, level, promiseResolver) {
        let features;
        if (level === jsonConstants_1.geoConfigType.CUSTOM_REGION) {
            features =
                GeoTopologyDataStore.buildFeaturesForCustomRegion(geometryType, response.data);
        }
        else if (level === jsonConstants_1.geoConfigType.ZIP_CODE) {
            features = GeoTopologyDataStore.buildPointFeaturesForZipCode(response.data);
        }
        else {
            // Note: config object that defines 'featureProjection' is undocumented
            // (and missing in typings too) that's why we have to make it untyped first
            // before calling.
            features = GeoTopologyDataStore.DATA_FORMAT.readFeatures(response.data, { featureProjection: VIEW_PROJECTION });
        }
        features.forEach((feature) => {
            let id = feature.getProperties()[GeoPropField.GEOID.toString()];
            feature.setId(id);
        });
        GeoTopologyDataStore.featuresCache[geometryType][cacheKey] = features;
        promiseResolver(features);
    }
    static httpErrorCallback(response, promiseRejector) {
        promiseRejector(response.status);
    }
    static getDataJsonKey(level, geometryType, isoCode, customFileGuid) {
        switch (level) {
            case jsonConstants_1.geoConfigType.ADMIN_DIV_0:
                return `${level}-${geometryType}.topo.json`;
            case jsonConstants_1.geoConfigType.ZIP_CODE:
                return `${level}-${isoCode}.json`;
            case jsonConstants_1.geoConfigType.CUSTOM_REGION:
                return customFileGuid;
            default:
                return `${level}-${isoCode}-${geometryType}.topo.json`;
        }
    }
    static getDataJsonURL(level, geometryType, isoCode, customFileGuid) {
        let fileName = GeoTopologyDataStore.getDataJsonKey(level, geometryType, isoCode, customFileGuid);
        if (level === jsonConstants_1.geoConfigType.CUSTOM_REGION) {
            return `/callosum/v1/file/getfile/${fileName}`;
        }
        return `/resources/geo/topojson/${fileName}`;
    }
    static buildPointFeaturesForZipCode(zipCodeDataArray) {
        // Array of zip-code, lat, long
        return zipCodeDataArray.map((zipCodeData) => {
            let zipCode = zipCodeData[0], lat = zipCodeData[1], long = zipCodeData[2];
            // See note in GeoMapComponent class about projections.
            let coords = ol.proj.transform([long, lat], DATA_PROJECTION, VIEW_PROJECTION);
            let props = {
                GEOID: zipCode,
                geometry: new ol.geom.Point(coords)
            };
            return new ol.Feature(props);
        });
    }
    static buildFeaturesForCustomRegion(geometryType, customData) {
        let regionIDToCoords = {};
        customData.trim().split('\n').slice(1).forEach((line) => {
            let vals = line.trim().split(',').map(function (str) {
                return str.trim();
            });
            let regionID = vals[0];
            vals = vals.slice(1).map((val) => +val);
            regionIDToCoords[regionID] = regionIDToCoords[regionID] || [];
            regionIDToCoords[regionID].push(vals);
        });
        let features = [];
        for (let regionID in regionIDToCoords) {
            let coords = regionIDToCoords[regionID];
            // If order ID is also present in the file, then sort the points in the given order.
            if (coords.every((vals) => {
                return vals.length === 3;
            })) {
                coords.sort(function (vals1, vals2) {
                    return vals1[2] < vals2[2];
                });
            }
            coords = coords.map((coord) => {
                let lat = coord[0], long = coord[1];
                return ol.proj.transform([long, lat], DATA_PROJECTION, VIEW_PROJECTION);
            });
            let feature = new ol.Feature({
                GEOID: regionID,
                geometry: new ol.geom.Polygon([coords])
            });
            if (geometryType === 'POINT') {
                feature.setGeometry(GeoUtils.getInteriorPoint(feature));
            }
            features.push(feature);
        }
        return features;
    }
}
GeoTopologyDataStore.validLevels = [
    jsonConstants_1.geoConfigType.ADMIN_DIV_0,
    jsonConstants_1.geoConfigType.ADMIN_DIV_1,
    jsonConstants_1.geoConfigType.ADMIN_DIV_2,
    jsonConstants_1.geoConfigType.ZIP_CODE,
    jsonConstants_1.geoConfigType.CUSTOM_REGION
];
GeoTopologyDataStore.levelsWithParentCountry = [
    jsonConstants_1.geoConfigType.ADMIN_DIV_1,
    jsonConstants_1.geoConfigType.ADMIN_DIV_2,
    jsonConstants_1.geoConfigType.ZIP_CODE
];
GeoTopologyDataStore.DATA_FORMAT = new ol.format.TopoJSON();
GeoTopologyDataStore.pendingPromises = {
    POLYGON: {},
    POINT: {}
};
GeoTopologyDataStore.featuresCache = {
    POLYGON: {},
    POINT: {}
};

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * USA state FIPS code to state abbr and state name map.
 */
let USA_STATES = {
    '01': ['al', 'alabama'],
    '02': ['ak', 'alaska'],
    '04': ['az', 'arizona'],
    '05': ['ar', 'arkansas'],
    '06': ['ca', 'california'],
    '08': ['co', 'colorado'],
    '09': ['ct', 'connecticut'],
    '10': ['de', 'delaware'],
    '11': ['dc', 'district of columbia'],
    '12': ['fl', 'florida'],
    '13': ['ga', 'georgia'],
    '15': ['hi', 'hawaii'],
    '16': ['id', 'idaho'],
    '17': ['il', 'illinois'],
    '18': ['in', 'indiana'],
    '19': ['ia', 'iowa'],
    '20': ['ks', 'kansas'],
    '21': ['ky', 'kentucky'],
    '22': ['la', 'louisiana'],
    '23': ['me', 'maine'],
    '24': ['md', 'maryland'],
    '25': ['ma', 'massachusetts'],
    '26': ['mi', 'michigan'],
    '27': ['mn', 'minnesota'],
    '28': ['ms', 'mississippi'],
    '29': ['mo', 'missouri'],
    '30': ['mt', 'montana'],
    '31': ['ne', 'nebraska'],
    '32': ['nv', 'nevada'],
    '33': ['nh', 'new hampshire'],
    '34': ['nj', 'new jersey'],
    '35': ['nm', 'new mexico'],
    '36': ['ny', 'new york'],
    '37': ['nc', 'north carolina'],
    '38': ['nd', 'north dakota'],
    '39': ['oh', 'ohio'],
    '40': ['ok', 'oklahoma'],
    '41': ['or', 'oregon'],
    '42': ['pa', 'pennsylvania'],
    '44': ['ri', 'rhode island'],
    '45': ['sc', 'south carolina'],
    '46': ['sd', 'south dakota'],
    '47': ['tn', 'tennessee'],
    '48': ['tx', 'texas'],
    '49': ['ut', 'utah'],
    '50': ['vt', 'vermont'],
    '51': ['va', 'virginia'],
    '53': ['wa', 'washington'],
    '54': ['wv', 'west virginia'],
    '55': ['wi', 'wisconsin'],
    '56': ['wy', 'wyoming']
};

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 */
var GeoEntityMatchingService_1;
let GeoEntityMatchingService = GeoEntityMatchingService_1 = class GeoEntityMatchingService {
    static findMatchingFeatures(values, geometryType, level, country, customFileGuid) {
        GeoTopologyDataStore.assertValidParams(geometryType, level, country, customFileGuid);
        let cacheKey = GeoEntityMatchingService_1.getCacheKey(level, country, customFileGuid);
        if (!!GeoEntityMatchingService_1.geoIDToFeatureIndex[geometryType][cacheKey]) {
            let matchedFeatures = GeoEntityMatchingService_1.matchFeaturesFromCache(values, geometryType, level, country, customFileGuid);
            return Promise.resolve(matchedFeatures);
        }
        return GeoTopologyDataStore.getFeatures(geometryType, level, country, customFileGuid).then((features) => {
            if (!GeoEntityMatchingService_1.propValueToGeoIDIndex[cacheKey]) {
                GeoEntityMatchingService_1.propValueToGeoIDIndex[cacheKey] =
                    GeoEntityMatchingService_1.buildPropValueToGeoIDIndex(features, level, country);
            }
            GeoEntityMatchingService_1.geoIDToFeatureIndex[geometryType][cacheKey] =
                GeoEntityMatchingService_1.buildGeoIDToFeatureIndex(features);
            return GeoEntityMatchingService_1.matchFeaturesFromCache(values, geometryType, level, country, customFileGuid);
        });
    }
    static matchFeaturesFromCache(values, geometryType, level, country, customFileGuid) {
        // matcher function will match a given token to a set (mostly 1) of geoIDs.
        // Like it will match California to ['CA'].
        let matcher;
        let cacheKey = GeoEntityMatchingService_1.getCacheKey(level, country, customFileGuid);
        if (level === jsonConstants_1.geoConfigType.ADMIN_DIV_2 && country === 'US') {
            // Before 4.0 release we supported US County maps and since county names are not unique
            // so we supported a format that you can append state name separated by comma and it
            // will be mapped to the right state.
            // So for US counties we support this special format. Going forward we will allow
            // admin div 1 to come from a column to resolve the ambiguity.
            matcher = (value) => GeoEntityMatchingService_1.findMatchingUSCounties(value, GeoEntityMatchingService_1.propValueToGeoIDIndex[cacheKey]);
        }
        else {
            matcher = (value) => {
                let normalizer = DEFAULT_GEO_DATA_NORMALIZER;
                if (!!country) {
                    normalizer = GeoCountryConfig.get(country).getNormalizer(level);
                }
                return GeoEntityMatchingService_1.propValueToGeoIDIndex[cacheKey][normalizer(value)]
                    || [];
            };
        }
        let matchedGeoIDsArray = values.map(matcher);
        // Now that we have matched geoIDs for each geoColumnValue we can map each geoID to feature.
        return matchedGeoIDsArray.map((geoIDs) => {
            return geoIDs.map((geoID) => {
                return GeoEntityMatchingService_1.geoIDToFeatureIndex[geometryType][cacheKey][geoID];
            });
        });
    }
    static getCacheKey(level, country, customFileGuid) {
        switch (level) {
            case jsonConstants_1.geoConfigType.ADMIN_DIV_0:
                return level;
            case jsonConstants_1.geoConfigType.CUSTOM_REGION:
                return level + '-' + customFileGuid;
            default:
                if (!country) {
                    throw new Error('country iso code must be present for ' + level);
                }
                return level + '-' + country;
        }
    }
    // geoColumnValues may be comprised of multiple tokens (like county, state) concatenated by
    // comma to avoid the redundancy in names. Like for example pike county is in many states,
    // so we might have tokens like "pike county, ohio" and "pike county, georgia".
    // In these cases we first find the matching features based of the first token value, i.e.
    // "pike county" and then if there are multiple matches, we use the second token to resolve
    // the ambiguity i.e. "ohio" and "georgia".
    static findMatchingUSCounties(geoColumnValue, index) {
        let geoColumnValueParts = geoColumnValue.split(',').map(function (s) {
            return s.trim();
        }).filter(function (s) {
            return s !== '';
        });
        let firstPart = GeoCountryConfig.get('US').getDiv2Normalizer()(geoColumnValueParts[0] || ''), secondPart = GeoCountryConfig.get('US').getDiv1Normalizer()(geoColumnValueParts[1] || '');
        if (!firstPart || !index[firstPart]) {
            return [];
        }
        let countyIDs = index[firstPart];
        if (countyIDs.length === 1) {
            return countyIDs;
        }
        if (!secondPart) {
            // We don't have second token part to resolve ambiguity.
            return countyIDs;
        }
        let matchedCountyID = countyIDs.find((countyID) => {
            let stateFIPS = countyID.slice(0, 2);
            return secondPart === stateFIPS ||
                USA_STATES[stateFIPS].indexOf(secondPart) !== -1;
        });
        return (matchedCountyID && [matchedCountyID]) || [];
    }
    static buildPropValueToGeoIDIndex(features, level, country) {
        let index = {};
        let fields = GeoUtils.getPropKeysForMatching(level, country);
        features.forEach((feature) => {
            let props = feature.getProperties(), propValuesSet = {};
            fields.forEach((propField) => {
                let propValue = props[propField.toString()];
                if (!propValue) {
                    return;
                }
                propValue = (propValue + '').toLowerCase();
                if (!!propValuesSet[propValue]) {
                    // If subsequent paths produces the same propValue, we can ignore
                    // them.
                    return;
                }
                if (!index[propValue]) {
                    index[propValue] = [];
                }
                // We use array here because same prop value might be present in multiple geo
                // entities, for example, US county names are not unique.
                index[propValue].push(props[GeoPropField.GEOID.toString()]);
                propValuesSet[propValue] = 1;
            });
        });
        return index;
    }
    static buildGeoIDToFeatureIndex(features) {
        let ret = {};
        features.forEach((feature) => {
            let featureUniqueId = feature.getProperties()[GeoPropField.GEOID.toString()];
            ret[featureUniqueId] = feature;
        });
        return ret;
    }
};
GeoEntityMatchingService.propValueToGeoIDIndex = {};
GeoEntityMatchingService.geoIDToFeatureIndex = {
    POLYGON: {},
    POINT: {}
};
GeoEntityMatchingService = GeoEntityMatchingService_1 = __decorate([
    Provide('GeoEntityMatchingService')
], GeoEntityMatchingService);
var GeoEntityMatchingService$1 = GeoEntityMatchingService;

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview Class for geo viz data processing
 */
var GeoDataProcessor_1;
const $q = ngRequire('$q');
const util = ngRequire('util');
let logger;
let GeoDataProcessor = GeoDataProcessor_1 = class GeoDataProcessor {
    constructor(chartModel) {
        this.chartModel = chartModel;
        this.reset();
    }
    static getFeatureIdForDataValue(seriesIndexToDimensionValueToFeatureId, dataValue, seriesIndex, dataValueFormatter) {
        if (!_.has(seriesIndexToDimensionValueToFeatureId, seriesIndex)) {
            seriesIndexToDimensionValueToFeatureId[seriesIndex] = {};
        }
        let dimensionValueToFeatureId = seriesIndexToDimensionValueToFeatureId[seriesIndex];
        if (!_.has(dimensionValueToFeatureId, dataValue)) {
            let featureId = dataValueFormatter(dataValue, seriesIndex).value;
            featureId = (featureId + '').toLowerCase();
            dimensionValueToFeatureId[dataValue] = featureId;
        }
        return dimensionValueToFeatureId[dataValue];
    }
    static getGeoConfigTypeToBoundsExpansionAmount() {
        if (GeoDataProcessor_1.geoConfigTypeToBoundsExpansionAmount === void 0) {
            GeoDataProcessor_1.geoConfigTypeToBoundsExpansionAmount = util.mapArrayToHash([
                [jsonConstants_1.geoConfigType.POINT, 1],
                [jsonConstants_1.geoConfigType.ZIP_CODE, 2],
                [jsonConstants_1.geoConfigType.ADMIN_DIV_2, 4],
                [jsonConstants_1.geoConfigType.ADMIN_DIV_1, 6]
            ], (geoConfigTypeAndExpansionAmount) => {
                return geoConfigTypeAndExpansionAmount[0];
            }, (geoConfigTypeAndExpansionAmount) => {
                return geoConfigTypeAndExpansionAmount[1];
            });
        }
        return GeoDataProcessor_1.geoConfigTypeToBoundsExpansionAmount;
    }
    setData(data) {
        this.data = data;
        this.processData();
    }
    hasData() {
        return !!this.data;
    }
    getGeoConfig() {
        return this.data.geoConfig;
    }
    isGeoConfigOfType(geoConfigType) {
        return this.getGeoConfig().getType() === geoConfigType;
    }
    getBounds() {
        if (this.geoBounds !== void 0) {
            return $q.when(this.geoBounds);
        }
        if (this.data.geoConfig.getType() === jsonConstants_1.geoConfigType.ADMIN_DIV_1) {
            this.geoBounds = GeoBounds.prototype.fromBounds.apply(null, GeoUtils.constants.GEOBOUNDS.CONTINENTAL_US);
        }
        else if (!GeoDataProcessor_1.COMPUTABLE_BOUNDS_GEO_CONFIG_TYPES.includes(this.data.geoConfig.getType())) {
            this.geoBounds =
                GeoBounds.prototype.fromBounds.apply(null, GeoUtils.constants.GEOBOUNDS.WORLD);
        }
        if (!!this.geoBounds) {
            return $q.when(this.geoBounds);
        }
        let geoConfig = this.data.geoConfig;
        let centroidsPromise = GeoEntityMatchingService$1.findMatchingFeatures(this.allFeatureIdsOfSeries, 'POINT', geoConfig.getType(), geoConfig.getParent() && geoConfig.getParent().getFixedValue(), geoConfig.getCustomFileGuid()).then((featuresList) => {
            return featuresList.map((features) => {
                if (features.length === 1) {
                    return features[0];
                }
                return null;
            });
        });
        let allowCrossingDataLine = GeoUtils.isProjectionGlobe(this.chartModel.getChartType());
        return centroidsPromise.then((pointFeatures) => {
            this.geoBounds = new GeoBounds();
            pointFeatures.forEach((pointFeature) => {
                let centroid = pointFeature.getGeometry().getCoordinates();
                if (!centroid) {
                    return;
                }
                this.geoBounds.extendToIncludePoint(centroid[1], centroid[0], allowCrossingDataLine);
            });
            // For non-point geo types we only know the centroid and not the bounds of the entire
            // area. As a workaround for this we manually expand the bounds by a fixed amount based
            // on the geo type to make sure that we'll always cover the entire area for all the
            // points.
            let geoConfigTypeToBoundsExpansionAmount = GeoDataProcessor_1.getGeoConfigTypeToBoundsExpansionAmount();
            if (_.has(geoConfigTypeToBoundsExpansionAmount, geoConfig.getType())) {
                let expansionAmount = geoConfigTypeToBoundsExpansionAmount[geoConfig.getType()];
                this.geoBounds.expand(expansionAmount, expansionAmount, allowCrossingDataLine);
            }
            return this.geoBounds;
        }, (error) => {
            logger = logger || logger_3('geo-data-processor');
            logger.error('error in loading centroids for bounds computation');
            return error;
        });
    }
    getFormattedXValue(dataPoint) {
        return this.data.labelFormatters.x(dataPoint.x, dataPoint.seriesIndex);
    }
    getFormattedYValue(dataPoint) {
        return this.data.labelFormatters.y(dataPoint.y, dataPoint.seriesIndex);
    }
    getFormattedZValue(dataPoint) {
        return this.data.labelFormatters.z(dataPoint.z, dataPoint.seriesIndex);
    }
    getSeriesForDataPoint(dataPoint) {
        return this.data.series[dataPoint.seriesIndex];
    }
    getDataPointsForFeature(featureProps) {
        let uniqueId = featureProps[GeoPropField.GEOID.toString()];
        return this.uniqueFeatureIdToDataPoints[uniqueId] || [];
    }
    getGeoObjectsForFeature(featureId) {
        return this.featureIdToGeoObjects[featureId] || [];
    }
    getAllFeatureIdsOfSeries() {
        return this.allFeatureIdsOfSeries;
    }
    getAllFeatureIdsOfGeoObjects() {
        return this.allFeatureIdsOfGeoObjects;
    }
    getAllSeries() {
        return this.data && this.data.series;
    }
    addSeries(series) {
        this.data.series.push(series);
    }
    updateSeries(series, changes) {
        _.merge(series, changes);
        this.processData();
    }
    setSeriesVisibility(serie, visible) {
        serie.visible = !!visible;
        this.processData();
    }
    buildUniqueFeatureIdToDataPointsMap(matchedFeatures) {
        this.uniqueFeatureIdToDataPoints = {};
        matchedFeatures.forEach((feature, index) => {
            if (feature === null) {
                return;
            }
            let uniqueFeatureId = feature.getProperties()[GeoPropField.GEOID.toString()];
            this.uniqueFeatureIdToDataPoints[uniqueFeatureId] =
                this.featureIdToDataPoints[this.allFeatureIdsOfSeries[index]];
        });
        return this.uniqueFeatureIdToDataPoints;
    }
    reset() {
        this.seriesXValueToFeatureId = {};
        this.seriesYValueToFeatureId = {};
        this.featureIdToDataPoints = {};
        this.featureIdToGeoObjects = {};
        this.uniqueFeatureIdToDataPoints = null;
        this.allFeatureIdsOfSeries = [];
        this.allFeatureIdsOfGeoObjects = [];
    }
    processData() {
        this.reset();
        let series = this.data.series, geoObjects = this.data.geoObjects, isYGeo = this.chartModel.getChartType()
            === chartTypes.GEO_EARTH_GRAPH, measurePropKey = isYGeo ? 'z' : 'y', featureIdSetOfSeries = {}, featureIdSetOfGeoObjects = {};
        let addFeatureIdOfSeries = (featureId, dataPoint) => {
            if (typeof featureId === 'string') {
                featureId = featureId.trim();
            }
            if (!_.has(featureIdSetOfSeries, featureId)) {
                featureIdSetOfSeries[featureId] = true;
                this.allFeatureIdsOfSeries.push(featureId);
            }
            if (!_.has(this.featureIdToDataPoints, featureId)) {
                this.featureIdToDataPoints[featureId] = [];
            }
            this.featureIdToDataPoints[featureId].push(dataPoint);
        };
        let addFeatureIdOfGeoObject = (featureId, geoObject) => {
            if (!_.has(featureIdSetOfGeoObjects, featureId)) {
                featureIdSetOfGeoObjects[featureId] = true;
                this.allFeatureIdsOfGeoObjects.push(featureId);
            }
            if (!_.has(this.featureIdToGeoObjects, featureId)) {
                this.featureIdToGeoObjects[featureId] = [];
            }
            this.featureIdToGeoObjects[featureId].push(geoObject);
        };
        let geoObjectIndex = -1;
        geoObjects.forEach((geoObject) => {
            geoObjectIndex++;
            addFeatureIdOfGeoObject(geoObject.id + geoObjectIndex, geoObject);
        });
        let seriesDataFractions = [];
        series.forEach((serie) => {
            let maxMeasure = Number.NEGATIVE_INFINITY, minMeasure = Number.POSITIVE_INFINITY, maxDataPoint, minDataPoint, serieDataFractions = [];
            serie.data.forEach((dataPoint) => {
                if (dataPoint[measurePropKey] > maxMeasure) {
                    maxMeasure = dataPoint[measurePropKey];
                    maxDataPoint = dataPoint;
                }
                if (dataPoint[measurePropKey] < minMeasure) {
                    minMeasure = dataPoint[measurePropKey];
                    minDataPoint = dataPoint;
                }
            });
            let measureRange = maxMeasure - minMeasure, isRangeValid = isFinite(measureRange) && measureRange !== 0;
            if (isRangeValid) {
                serieDataFractions = serie.data.map(function (dataPoint) {
                    return (dataPoint[measurePropKey] - minMeasure) / measureRange;
                });
            }
            seriesDataFractions.push(serieDataFractions);
            serie.maxDataPoint = maxDataPoint;
            serie.minDataPoint = minDataPoint;
            serie.isRangeValid = isRangeValid;
        });
        GeoUtils.assignSeriesColors(this.chartModel, series);
        let dataPointIndex = -1;
        let isGeoArea = this.chartModel.getChartType()
            === chartTypes.GEO_AREA, isGeoEarthArea = this.chartModel.getChartType() ===
            chartTypes.GEO_EARTH_AREA;
        series.forEach((serie, serieIndex) => {
            let isRangeValid = serie.isRangeValid, serieDataFractions = seriesDataFractions[serieIndex];
            if (_.has(serie, 'visible') && !serie.visible) {
                return;
            }
            let scale = chroma.scale(serie.scale)
                .mode('lab')
                .correctLightness(false);
            let bestScalingFunc;
            if (isRangeValid) {
                bestScalingFunc = GeoUtils.computeBestColorScalingFunction(serieDataFractions);
            }
            serie.data.forEach((dataPoint, index) => {
                dataPointIndex++;
                dataPoint.seriesIndex = serieIndex;
                dataPoint.dataPointIndex = dataPointIndex;
                let xFeatureId = this.getFeatureIdForXValue(dataPoint.x, serieIndex);
                addFeatureIdOfSeries(xFeatureId, dataPoint);
                dataPoint.featureIds = {
                    x: xFeatureId
                };
                if (isYGeo) {
                    let yFeatureId = this.getFeatureIdForYValue(dataPoint.y, serieIndex);
                    if (yFeatureId !== xFeatureId) {
                        addFeatureIdOfSeries(yFeatureId, dataPoint);
                    }
                    dataPoint.featureIds.y = yFeatureId;
                }
                let fraction = isRangeValid ? bestScalingFunc(serieDataFractions[index]) : 0.5;
                dataPoint.measureRangeFraction = fraction;
                let pointHasColor = _.has(dataPoint, 'color');
                if (!pointHasColor) {
                    if (isGeoArea || isGeoEarthArea) {
                        dataPoint.mapColor =
                            scale(fraction).alpha(GEO_AREA_OPACITY).css();
                    }
                    else {
                        dataPoint.mapColor = serie.color;
                    }
                }
            });
        });
    }
    getFeatureIdForXValue(xValue, seriesIndex) {
        return GeoDataProcessor_1.getFeatureIdForDataValue(this.seriesXValueToFeatureId, xValue, seriesIndex, this.data.labelFormatters.x);
    }
    getFeatureIdForYValue(yValue, seriesIndex) {
        return GeoDataProcessor_1.getFeatureIdForDataValue(this.seriesYValueToFeatureId, yValue, seriesIndex, this.data.labelFormatters.y);
    }
};
GeoDataProcessor.COMPUTABLE_BOUNDS_GEO_CONFIG_TYPES = [
    jsonConstants_1.geoConfigType.POINT,
    jsonConstants_1.geoConfigType.ZIP_CODE,
    jsonConstants_1.geoConfigType.ADMIN_DIV_2
];
GeoDataProcessor = GeoDataProcessor_1 = __decorate([
    Provide('GeoDataProcessor')
], GeoDataProcessor);

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview A subclass of ol.source.Vector that encapsulates some common
 * operations around vector geo data loading and parsing.
 */
class BaseVectorSource extends ol.source.Vector {
    constructor(options = {}) {
        if (!options.features && !options.loader) {
            throw new Error('Must provide either features or loader');
        }
        let config = {
            wrapX: false
        };
        if (!!options.loader) {
            config.loader = options.loader.getLoader();
        }
        if (!!options.features) {
            config.features = options.features;
        }
        super(config);
        if (!!options.loader) {
            this.promise = options.loader.getPromise();
        }
        if (!!options.features) {
            this.promise = Promise.resolve(options.features);
        }
    }
    addFeatures(features) {
        ol.source.Vector.prototype.addFeatures.call(this, features);
        return features;
    }
    getPromise() {
        return this.promise;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview Base class for Image layers that draw vector data using ImageVector class.
 */
// Note: Earlier we were using VectorLayer with VectorSource to draw boundaries.
// But that was very slow for anything more granular than state level boundaries, because it
// re-renders the entire map during transitions.
// In the current approach of using ImageLayer with ImageVector source, the boundaries are not
// re-rendered again while view is transitioning, so it is faster.
// See http://openlayers.org/workshop/layers/imagevector.html for more details.
class BaseImageLayer extends ol.layer.Image {
    /**
     * Utility function which subclasses case use to add the data label style.
     * @param feature
     * @param label
     */
    static geTextLabelStyle(feature, label, shouldScale) {
        let labelText;
        const geoMapConfigForScreen = getGeoMapScreenConfig(shouldScale);
        if (typeof label === 'function') {
            labelText = label(feature);
        }
        else {
            labelText = label;
        }
        if (!!labelText) {
            return new ol.style.Style({
                text: new ol.style.Text({
                    font: geoMapConfigForScreen.fontSize,
                    text: labelText,
                    fill: new ol.style.Fill({
                        color: DATA_LABEL_FILL_COLOR
                    }),
                    stroke: new ol.style.Stroke({
                        color: DATA_LABEL_STROKE_COLOR,
                        width: geoMapConfigForScreen.strokeWidth
                    })
                }),
                geometry: GeoUtils.getInteriorPoint,
            });
        }
        return null;
    }
    constructor(options = {}) {
        let source = new ol.source.ImageVector({
            source: new BaseVectorSource({
                loader: options.loader,
                features: options.features
            }),
            projection: VIEW_PROJECTION,
            style: (feature, resolution) => this.getStylesForFeature(feature, resolution, false /* isHovered */, options.size, options.shouldScale),
        });
        // Note: Tyepscript compiler seems to get confused when an interface type has 'map' as the
        // key. So we are using 'any' as the type to suppress the error.
        let superOptions = {
            source: source
        };
        super(superOptions);
    }
    /**
     * Returns the source used to plot the political geo boundaries in this layer.
     * @returns {BaseVectorSource}
     */
    getVectorSource() {
        let imageVectorSource = this.getSource();
        return imageVectorSource.getSource();
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview Class for bubble layer in a bubble type geo map.
 * Responsible for showing bubble of correct size/color in the layer
 * based on the data provided.
 */
class BubbleLayer extends BaseImageLayer {
    constructor(options) {
        super({
            features: options.features,
            loader: options.loader,
            size: options.size
        });
        this.radius = options.radius;
        this.color = options.color;
        this.label = options.label;
    }
    getStylesForFeature(feature, resolution, isHovered, size, shouldScale) {
        if (this.maxAllowedRadius === void 0 || Math.abs(resolution - this.lastResolution) > 1) {
            let source, area, numFeatures, areaPerFeature, maxGeoRadius;
            source = this.getVectorSource();
            area = GeoUtils.getAreaOfExtent(source.getExtent());
            numFeatures = source.getFeatures().length;
            areaPerFeature = area / numFeatures;
            maxGeoRadius = Math.sqrt(areaPerFeature / Math.PI);
            this.maxAllowedRadius = maxGeoRadius / resolution;
            if (numFeatures === 1) {
                // If there is only 1 feature, then the extent will have 0 area, which will result
                // in maxAllowedRadius set to MIN_BUBBLE_RADIUS, and then the one and only bubble
                // on the screen will be very tiny.
                this.maxAllowedRadius = ADMIN_DIV_0_AND_1_MAX_BUBBLE_SIZE;
            }
            this.maxAllowedRadius = Math.max(MIN_BUBBLE_RADIUS, this.maxAllowedRadius);
            this.lastResolution = resolution;
        }
        let radius = DEFAULT_BUBBLE_RADIUS;
        if (typeof this.radius === 'function') {
            radius = this.radius(feature, this.maxAllowedRadius);
        }
        else {
            radius = this.radius;
        }
        if (!radius) {
            return [];
        }
        let color = DEFAULT_BUBBLE_COLOR;
        if (typeof this.color === 'function') {
            color = this.color(feature);
        }
        else {
            color = this.color;
        }
        if (!color) {
            return [];
        }
        // TODO (sunny): use AtlasManager to improve rendering performance when we start using
        // webgl renderer
        let colorArray = ol.color.asArray(color);
        // slice() is used to create a new color array. This is to avoid corrupting the
        // "color strings to color arrays" cache that the ol.color.asArray function maintains.
        colorArray = colorArray.slice();
        colorArray[3] = BUBBLE_OPACITY;
        let bubble = new ol.style.Circle({
            radius: radius,
            fill: new ol.style.Fill({
                color: colorArray
            }),
            stroke: new ol.style.Stroke({
                color: isHovered ? HOVERED_BOUNDARY_COLOR : colorArray,
                width: isHovered ? HOVERED_BOUNDARY_THICKNESS : BOUNDARY_THICKNESS
            })
        });
        let styles = [new ol.style.Style({
                image: bubble
            })];
        if (!!this.label) {
            let labelStyle = BaseImageLayer.geTextLabelStyle(feature, this.label, shouldScale);
            if (!!labelStyle) {
                styles.push(labelStyle);
            }
        }
        return styles;
    }
}

/**
 * Copyright: ThoughtSpot Inc.
 * Author: Marco Alban
 *
 * @fileoverview This class defines logic of a layer that draws general geoObjects in the geo map.
 * Responsible for showing the geo objects of correct size/color in the layer
 */
var GeoObjectLayer_1;
let Logger = ngRequire('Logger');
let GeoObjectLayer = GeoObjectLayer_1 = class GeoObjectLayer extends BaseImageLayer {
    /**
     * @featureIds - An array of feature ids identifying the features
     * to draw.
     * @featureGeoObjectGetter - function that accepts a feature id and
     * returns an array of GeoObjects mapping to that id.
     * @metersToMapUnit - a function that accepts a coordinate and a
     * scalar in meters and returns the desired scaling to open layer map units.
     * @projectionCode - a codified string denoting the current view projection.
     */
    constructor(featureIds, featureGeoObjectGetter, metersToMapUnit, projectionCode) {
        let logger = Logger.create('geofilter-layer');
        let features = GeoObjectLayer_1.createFeatures(featureIds, featureGeoObjectGetter, metersToMapUnit, projectionCode, logger);
        super({
            features: features
        });
        this.logger = logger;
    }
    static createFeatures(featureIds, featureGeoObjectGetter, metersToMapUnit, projectionCode, logger) {
        let features = [];
        featureIds.forEach(featureId => {
            let geoObjects = featureGeoObjectGetter(featureId);
            geoObjects.forEach(function (geoObject) {
                switch (geoObject.type) {
                    case 'CIRCLE':
                        let circleObject = geoObject;
                        let center = [circleObject.longitude,
                            circleObject.latitude];
                        center = ol.proj.transform(center, DATA_PROJECTION, projectionCode);
                        let radius = metersToMapUnit(center, circleObject.radius);
                        let circle = new ol.geom.Circle(center, radius);
                        let feature = new ol.Feature(circle);
                        feature.setId(featureId);
                        feature.setStyle(new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: GEO_NEARBY_OBJECTS_LAYER_BOUNDARY_COLOR,
                                width: BOUNDARY_THICKNESS
                            }),
                            fill: new ol.style.Fill({
                                color: 'transparent'
                            })
                        }));
                        features.push(feature);
                        break;
                    default:
                        logger.warn('Unrecognized type of geoObject, skipping.');
                }
            });
        });
        return features;
    }
    getStylesForFeature(feature, resolution) {
        return feature.getStyleFunction()(resolution);
    }
};
GeoObjectLayer = GeoObjectLayer_1 = __decorate([
    Provide('GeoObjectLayer')
], GeoObjectLayer);
var GeoObjectLayer$1 = GeoObjectLayer;

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview A subclass of ol.layer.Heatmap that works with feature
 * vectors represented by their centroids.
 */
class HeatMapLayer extends ol.layer.Heatmap {
    constructor(options) {
        let weight;
        if (typeof options.weight === 'function') {
            weight = options.weight;
        }
        else {
            weight = (feature) => {
                return options.weight;
            };
        }
        super({
            source: new BaseVectorSource({
                features: options.features,
                loader: options.loader
            }),
            gradient: HEATMAP_GRADIENT_COLORS,
            weight: weight
        });
    }
    /**
     * Returns the source used to plot the political geo boundaries in this layer.
     * @returns {BaseVectorSource}
     */
    getVectorSource() {
        return this.getSource();
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview Class for the geo map layer for the topology shown in the map.
 */
let Logger$1 = ngRequire('Logger');
class TopologyLayer extends BaseImageLayer {
    constructor(options) {
        super({
            features: options.features,
            loader: options.loader,
            size: options.size
        });
        this.boundaryColor = options.boundaryColor;
        this.fillColor = options.fillColor;
        this.isDottedStroke = options.isDottedStroke || false;
        this.label = options.label;
        this.logger = Logger$1.create('topology-layer');
    }
    getStylesForFeature(feature, resolution, isHovered, size, shouldScale) {
        let strokeColor;
        if (isHovered) {
            strokeColor = HOVERED_BOUNDARY_COLOR;
        }
        else {
            if (!!this.boundaryColor) {
                if (typeof this.boundaryColor === 'function') {
                    strokeColor = this.boundaryColor(feature);
                }
                else {
                    strokeColor = this.boundaryColor;
                }
            }
        }
        strokeColor = strokeColor || DEFAULT_BOUNDARY_COLOR;
        let fillColor;
        if (!!this.fillColor) {
            if (typeof this.fillColor === 'function') {
                fillColor = this.fillColor(feature);
            }
            else {
                fillColor = this.fillColor;
            }
        }
        fillColor = fillColor || DEFAULT_FILL_COLOR;
        let strokeWidth = isHovered ? HOVERED_BOUNDARY_THICKNESS : BOUNDARY_THICKNESS;
        let strokeProps = {
            color: strokeColor,
            width: strokeWidth
        };
        if (this.isDottedStroke) {
            strokeProps.lineDash = [12, 12];
        }
        let styles = [
            new ol.style.Style({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                stroke: new ol.style.Stroke(strokeProps),
            })
        ];
        if (!!this.label) {
            let labelStyle = BaseImageLayer.geTextLabelStyle(feature, this.label, shouldScale);
            if (!!labelStyle) {
                styles.push(labelStyle);
            }
        }
        return styles;
    }
}

class ObservableFeatureLoader {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolvePromise = resolve;
            this.rejectPromise = reject;
        });
        this.loader = this.createLoader();
    }
    onLoad(error, features) {
        if (!!error) {
            this.rejectPromise(error);
        }
        else {
            this.resolvePromise(features);
        }
    }
    getLoader() {
        return this.loader;
    }
    /**
     * Promise returned from this method will be resolved with the loaded features (or rejected
     * with the error).
     * @returns {*}
     */
    getPromise() {
        return this.promise;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview An PolygonFeatureLoader that loads boundary polygon features for a given admin
 * level and country. This currently supports only JSON based feature formats.
 */
class PolygonFeatureLoader extends ObservableFeatureLoader {
    constructor(options) {
        super();
        this.level = options.level;
        this.country = options.country;
        this.filter = options.filter;
        this.customFileGuid = options.customFileGuid;
    }
    createLoader() {
        let polygonLoader = this;
        // this is the function that will be called when the map needs to load features
        // for a particular bbox (or depending on config, the entire feature set)
        return function (extent, resolution, projection) {
            let source = this;
            GeoTopologyDataStore.getFeatures('POLYGON', polygonLoader.level, polygonLoader.country, polygonLoader.customFileGuid).then((features) => {
                if (!!polygonLoader.filter) {
                    features = features.filter(polygonLoader.filter);
                }
                source.addFeatures(features);
                polygonLoader.onLoad(null, features);
            });
        };
    }
}

/**
 * Copyright Thoughtspot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileOverview A class to draw map representation of geographical user data. Usage: create an
 * instance attached to a dom node as the place to draw onto. Call setType followed by setData as
 * the type or data to draw change.
 */
var GeoMapComponent_1;
let util$1 = ngRequire('util');
const defaultCenter = [0, 0];
const defaultZoom = 2;
const defaultMinZoom = 2;
// Currently in openlayers3 there is no way to restrict a map to an area. Precisely, there is no
// way to tell openlayers3 that do not allow viewer to pan which result in viewing anything
// outside of the given rectangle.
// See http://gis.stackexchange.com/questions/127834/openlayers-3-restrict-map-to-an-area/
// As of Sept 2016, the closest thing supported is that we can restrict the center of the map
// to a given rectangle by passing 'extent' to the ol.View, which is what we are doing here too.
// Problem with restricted center is that, if we keep the rectangle too small, then viewer
// won't be able to zoom into features which are far from center (because then that will cause
// center to move out of the given rectangle) an if we keep the rectangle big to allow viewer
// to zoom into anything, then it will allow most map to go out of view in lower zoom levels.
// which will result in ugly white/blank area to show up in the view.
//
// This extent is chosen such that it disallows too much map to move out from the
// view while still allowing any polygon to be able to come to the center at all
// zoom levels.
let ALLOWED_WORLD_EXTENT = [-180, -60, 180, 80];
let GeoMapComponent = GeoMapComponent_1 = class GeoMapComponent extends BaseChart {
    constructor(config) {
        super();
        this.tooltip = {};
        /**
         * Set of feature Ids that are currently showing data labels on top of them.
         * @type {Set<string>}
         */
        this.labeledFeatureIds = new Set();
        /**
         * Map of featureId to data label text for all the features that have data, not just those which
         * we are showing data labels on.
         * @type {Map<string, string>}
         */
        this.dataLabels = new Map();
        this.logger = logger_3('blink-geomap');
        this.config = config;
        this.chartModel = config.chartVizComponent.dataVizComponentConfig.vizModel;
        this.dataProcessor = new GeoDataProcessor(this.chartModel);
        this.layerGroup = new ol.layer.Group();
        // NOTE: There is only one measure in geomaps we check for the column
        // on Y-axis.
        const yAxisColumns = this.chartModel.getYAxisColumns();
        if (yAxisColumns.length !== 1) {
            this.logger.error('Only one y-axis expected for geo map');
        }
        this.dataLabelsEnabled = !!this.chartModel.getShowDataLabels(yAxisColumns[0].getGuid());
        this.disableTransformations =
            config.chartVizComponent.dataVizComponentConfig.disableTransformations;
    }
    static getLayerLoadPromise(layer) {
        // If a layer is not visible, then we don't need to wait for anything.
        if (!layer.getVisible()) {
            return Promise.resolve();
        }
        // If the layer is our custom layer then have an ability to track load state better
        // and we use that.
        if (GeoMapComponent_1.isIGeoVectorLayer(layer)) {
            return layer.getVectorSource().getPromise();
        }
        // Openlayers enum only work in dev mode.
        // (See https://github.com/openlayers/ol3/issues/3671). So we can't
        // use library defined ol.source.State enums.
        if (layer.getSource().getState() === GeoUtils.olSourceState.READY) {
            return Promise.resolve();
        }
        // Note (sunny): I don't know of a way in the API to check
        // whether a layer has already been composed but if we
        // know that source is not yet ready the layer is not yet
        // composed so we use this invariant to water for the more
        // desirable state in the life of layer
        return new Promise((resolve, reject) => {
            layer.once('postcompose', () => {
                resolve();
            });
        });
    }
    /**
     * User defined type guard
     * @see type guards https://www.typescriptlang.org/docs/handbook/advanced-types.html
     * @param layer
     * @returns {boolean}
     */
    static isIGeoVectorLayer(layer) {
        return !!layer && layer.getVectorSource !== void 0;
    }
    static shouldDrawFeatureBoundaries(geoConfig, chartType) {
        // For zip code and county level maps, do not show boundaries while showing bubbles or heat
        // map.
        if ((geoConfig.getType() === jsonConstants_1.geoConfigType.ZIP_CODE ||
            geoConfig.getType() === jsonConstants_1.geoConfigType.ADMIN_DIV_2 ||
            geoConfig.getType() === jsonConstants_1.geoConfigType.POINT) &&
            (chartType === chartTypes.GEO_BUBBLE ||
                chartType === chartTypes.GEO_HEATMAP)) {
            return false;
        }
        return true;
    }
    /**
     * Create a function to translate meters to map units.
     * @param viewResolution is the view resolution of the current view.
     * @param viewProjection is the projection of the current view.
     * @returns a function that accepts a @coordinate (a latitude and
     * longitude pair) and a distance in @meters and translates meters to
     * map units.
     */
    static metersToMapUnitFactory(viewResolution, viewProjection) {
        return function (coordinate, meters) {
            let pointResolution = viewProjection.getPointResolution(viewResolution, coordinate);
            return (meters / ol.proj.METERS_PER_UNIT['m']) *
                (viewResolution / pointResolution);
        };
    }
    static getMaxBubbleRadiusForGeoConfig(geoConfig) {
        switch (geoConfig.getType()) {
            case jsonConstants_1.geoConfigType.ADMIN_DIV_0:
            case jsonConstants_1.geoConfigType.ADMIN_DIV_1:
                return ADMIN_DIV_0_AND_1_MAX_BUBBLE_SIZE;
            default:
                return DEFAULT_MAX_BUBBLE_SIZE;
        }
    }
    postLink(element) {
        // EPSG 4326 is a Geographic coordinate system with the wgs84 datum, our datas
        // are stored in this particular coordinate system
        // EPSG 3857 is a projected coordinate system that is based on the wgs84 datum, we are
        // using this projection to map spherical coordinate to cartesian coordinate
        // A common confusion is to treat EPSG/4326 as plate carree, which is NOT true
        // Unit in plate carre are meter, but are degree in 4326. Of course, you can treat EPSG:4326
        // as a plate carre projection of [[-180, -90] [180, 90]], but libraries are doing
        // spherical calculations on those numbers, so it's not correct to treat this projection as
        // a cartesian coordinate reference system
        // Fortunately openlayer has native support for converting coordinates b/w these two
        // projections. ol.proj.transform(coordinates, fromProjection, toProjection)
        // Whenever we set coordinates data into an ol.Feature object, we must ensure to convert
        // into view projection, and whenever we read coordinates from ol.Feature object and try
        // to use in some business logic, we should convert from view projection to data projection
        let restrictCenterExtent = ol.proj.transformExtent(ALLOWED_WORLD_EXTENT, DATA_PROJECTION, VIEW_PROJECTION);
        let view = new ol.View({
            center: defaultCenter,
            zoom: defaultZoom,
            minZoom: defaultMinZoom,
            projection: VIEW_PROJECTION,
            extent: restrictCenterExtent
        });
        this.container = element.find('.bk-geomap-ol-container');
        this.map = new ol.Map({
            layers: [this.layerGroup],
            renderer: 'canvas',
            target: this.container[0],
            view: view,
            controls: [
                // collapsible:false is required by OSM
                new ol.control.Attribution({ collapsible: false }),
                new ol.control.Zoom({ duration: 500 })
            ],
            interactions: ol.interaction.defaults({
                mouseWheelZoom: true,
            })
        });
        this.setUpEventHandlers();
    }
    setData(data) {
        this.dataProcessor.setData(data);
        return this.redraw();
    }
    setSize() {
        if (!this.map || this.layerGroup.getLayers().getLength() === 0) {
            return;
        }
        this.map.updateSize();
        this.updateViewport();
    }
    supportsDownload() {
        return true;
    }
    getSeries() {
        return this.dataProcessor.getAllSeries();
    }
    getPlotSizeX() {
        return this.container.width();
    }
    getPlotSizeY() {
        return this.container.height();
    }
    destroy() {
        this.tooltip = {};
        if (this.map) {
            this.map.un('pointermove', this.onPointerMove);
            this.map.un('moveend', this.onMoveEnd);
            $(this.map.getTarget()).off('mouseleave.blink-geo-maps');
            $(this.map.getTarget()).off('contextmenu.blink-geo-maps');
            this.map.setTarget(null);
            this.labeledFeatureIds.clear();
            this.dataLabels.clear();
            this.features = void 0;
            this.map = null;
        }
    }
    addSeries(series, doRedraw) {
        this.dataProcessor.addSeries(series);
        if (doRedraw) {
            this.redraw();
        }
    }
    updateSerieColor(serieName, color) {
        const series = this.chartModel.getSerie(serieName);
        series.scale = GeoUtils.getScaleFromColor(color);
        series.color = color;
        this.dataProcessor.updateSeries(series, {});
        this.redraw();
    }
    updateSeries(serieName, changes) {
        let serie = this.chartModel.getSerie(serieName);
        this.dataProcessor.updateSeries(serie, changes);
        this.redraw();
    }
    setSeriesVisibility(serie, visible, doRedraw) {
        this.dataProcessor.setSeriesVisibility(serie, visible);
        if (doRedraw) {
            this.redraw();
        }
    }
    toBlob(options, callback) {
        if (!this.map) {
            callback(null);
            return;
        }
        this.map.once('postcompose', function (event) {
            let canvas = event.context.canvas;
            let newCanvas = document.createElement('canvas');
            newCanvas.width = canvas.width;
            newCanvas.height = canvas.height;
            let newContext = newCanvas.getContext('2d');
            newContext.fillStyle = (options.chart && options.chart.backgroundColor) || '#ffffff';
            newContext.rect(0, 0, canvas.width, canvas.height);
            newContext.fill();
            newContext.drawImage(canvas, 0, 0);
            newCanvas.toBlob((blob) => {
                callback(blob);
            });
        });
        this.map.renderSync();
    }
    isDataLabelsEnabled() {
        return this.dataLabelsEnabled;
    }
    setDataLabelVisibility(visible) {
        if (visible !== this.dataLabelsEnabled) {
            this.dataLabelsEnabled = visible;
            this.updateDataLabels(visible);
        }
    }
    supportsFullScreenMode() {
        return false;
    }
    redraw() {
        return this.getTopologyData()
            .then((features) => {
            this.dataLabels.clear();
            return this.redrawFeatures();
        }).then(() => {
            this.updateColorScale();
            this.forceRender();
        });
    }
    setUpEventHandlers() {
        this.onPointerMove = util$1.debounce((event) => {
            if (event.dragging) {
                return;
            }
            this.onMouseMove(event);
        }, 125);
        this.map.on('pointermove', this.onPointerMove);
        $(this.map.getTarget()).on('mouseleave.blink-geo-maps', util$1.debounce((event) => {
            this.tooltip.shown = false;
        }, 250));
        $(this.map.getTarget()).on('contextmenu.blink-geo-maps', (event) => {
            event.preventDefault();
            this.onMouseRightClick(event);
        });
        if (!this.config.chartVizComponent.dataVizComponentConfig.disableHighlightOnHover) {
            this.map.addInteraction(new ol.interaction.Select({
                condition: ol.events.condition.pointerMove,
                style: (feature, resolution) => {
                    // Note (sunny): the freq. of calls to this function are limited by
                    // how fast the user can select a point in the chart hence it is
                    // okay to look for the top most layer each time instead of saving
                    // a reference to it somewhere
                    let topLayer = this.getTopLayer();
                    return topLayer.getStylesForFeature(feature, resolution, true /* isHovered */, this.map.getSize(), this.config.chartVizComponent.scaledFonts());
                },
                wrapX: false,
                layers: (layer) => {
                    // SCAL-8898: we don't need to highlight heatmap points on hover. Given the
                    // clustering it's not useful.
                    if (layer instanceof HeatMapLayer) {
                        return false;
                    }
                    return this.isUnmanagedOrTopLayer(layer);
                }
            }));
        }
        this.previousZoom = this.map.getView().getZoom();
        // Saving the function reference in an instance variable so that we can remove the
        // listener in the destroy() function.
        this.onMoveEnd = () => {
            this.updateDataLabels(this.dataLabelsEnabled);
            this.updateZoomClientState();
        };
        this.map.on('moveend', this.onMoveEnd);
    }
    updateZoomClientState() {
        let zoomLevel = this.map.getView().getZoom();
        let center = this.map.getView().getCenter();
        // this is the default state, in that case, we do not update the client state
        // and we let the component decides which is the best viewport
        if (zoomLevel === defaultZoom
            && center[0] === defaultCenter[0]
            && center[1] === defaultCenter[1]) {
            return;
        }
        this.chartModel.setMapViewport({
            zoomLevel,
            center
        });
    }
    updateDataLabels(showDataLabels) {
        if (!this.features || this.features.length === 0) {
            // Features haven't been fetched yet.
            return;
        }
        let newLabeledFeatures = new Set();
        if (showDataLabels) {
            let is_zoom_event = false;
            if (this.previousZoom !== this.map.getView().getZoom()) {
                this.previousZoom = this.map.getView().getZoom();
                is_zoom_event = true;
            }
            if (this.dataLabels.size === 0) {
                this.buildDataLabelsMap(this.features);
            }
            let $target = $(this.map.getTarget());
            newLabeledFeatures = GeoDataLabelManager.chooseFeaturesForLabeling({
                features: this.features,
                width: $target.width(),
                height: $target.height(),
                coordinateFunc: feature => this.map.getPixelFromCoordinate(GeoUtils.getInteriorPoint(feature).getCoordinates()),
                labels: this.dataLabels,
                prioritize_existing: !is_zoom_event,
                existing_labeled_features: this.labeledFeatureIds,
            });
        }
        if (this.labeledFeatureIds.size > 0 || newLabeledFeatures.size > 0) {
            // Check for each feature whether we are changing the visibility of data label on it.
            // We need to re-render a feature only if we didn't show data label on it previously
            // but decided to show it in this pass, or vice versa.
            this.features.forEach((feature) => {
                let fid = feature.getId();
                if (this.labeledFeatureIds.has(fid) && !newLabeledFeatures.has(fid) ||
                    !this.labeledFeatureIds.has(fid) && newLabeledFeatures.has(fid)) {
                    feature.changed();
                }
            });
            this.labeledFeatureIds = newLabeledFeatures;
        }
    }
    getDataPointsForMouseEvent(event) {
        let features = this.getFeaturesForMouseEvent(event), 
        // TODO (sunny): handle multiple features
        selectedFeature = features[0];
        return this.getFeatureDataPoints(selectedFeature);
    }
    getFeaturesForMouseEvent(event) {
        if (!this.map) {
            return [];
        }
        let offset = util$1.getMouseEventOffset(event.originalEvent), mouseCoordinatesInMapPixels = [offset.x, offset.y];
        let features = [];
        // Note(mahesh): typings or forEachFeatureAtPixel function is incorrect, typings for this
        // function is according to how it is in 3.20 version of openlayers, even though we are
        // using typings of 3.18 version. That's why we need to untype this.map here before calling
        // forEachFeatureAtPixel function.
        // When we upgrade openlayers and typings again to the latest version then this problem will
        // disappear.
        let map = this.map;
        map.forEachFeatureAtPixel(mouseCoordinatesInMapPixels, (feature, layer) => {
            features.push(feature);
        }, null, (layer) => {
            return this.isUnmanagedOrTopLayer(layer);
        });
        return features;
    }
    getFeatureDataPoints(feature) {
        if (!feature || !this.dataProcessor || !this.dataProcessor.hasData()) {
            return [];
        }
        return this.dataProcessor.getDataPointsForFeature(feature.getProperties());
    }
    getFillColorForFeature(feature) {
        if (this.chartModel.getChartType() !== chartTypes.GEO_AREA) {
            return null;
        }
        let dataPointsForFeature = this.getFeatureDataPoints(feature);
        if (!dataPointsForFeature || !dataPointsForFeature.length) {
            this.logger.everyN('warn', 20, 'no data point found for feature', feature);
            return null;
        }
        let dataPoint = dataPointsForFeature[0];
        return chroma(dataPoint.mapColor).css();
    }
    getDataLabelForFeature(feature) {
        if (this.chartModel.getChartType() ===
            chartTypes.GEO_HEATMAP) {
            return null;
        }
        if (!this.labeledFeatureIds.has(feature.getId())) {
            return null;
        }
        let dataPoints = this.getFeatureDataPoints(feature);
        if (!dataPoints || dataPoints.length === 0) {
            return null;
        }
        return this.getLabelForDataPoint(dataPoints[0]);
    }
    getLabelForDataPoint(dataPoint) {
        let xNameValuePair = this.dataProcessor.getFormattedXValue(dataPoint), yNameValuePair = this.dataProcessor.getFormattedYValue(dataPoint);
        return xNameValuePair.value + '\n'
            + yNameValuePair.value;
    }
    getBubbleRadiusForFeature(feature, maxBubbleRadius) {
        let dataPoints = this.dataProcessor.getDataPointsForFeature(feature.getProperties());
        if (!dataPoints || dataPoints.length === 0) {
            return 0;
        }
        let dataPoint = dataPoints[0], measureRangeFraction = dataPoint.hasOwnProperty('measureRangeFraction')
            ? dataPoint.measureRangeFraction : 1.0;
        return MIN_BUBBLE_RADIUS +
            (maxBubbleRadius - MIN_BUBBLE_RADIUS) *
                Math.sqrt(measureRangeFraction);
    }
    getBubbleColorForFeature(feature) {
        let dataPoints = this.dataProcessor.getDataPointsForFeature(feature.getProperties());
        if (!dataPoints || dataPoints.length === 0) {
            return null;
        }
        return dataPoints[0].mapColor;
    }
    onMouseMove(event) {
        let featureDataPoints = this.getDataPointsForMouseEvent(event);
        if (featureDataPoints.length === 0) {
            this.tooltip.shown = false;
            this.forceRender();
            return;
        }
        // TODO (sunny): handle multiple data points for a feature
        let tooltipContent = {}, featureDataPoint = featureDataPoints[0], xNameValuePair = this.dataProcessor.getFormattedXValue(featureDataPoint), yNameValuePair = this.dataProcessor.getFormattedYValue(featureDataPoint);
        tooltipContent[xNameValuePair.name] = xNameValuePair.value;
        tooltipContent[yNameValuePair.name] = yNameValuePair.value;
        this.tooltip.content = tooltipContent;
        this.tooltip.shown = true;
        this.tooltip.left = event.originalEvent.clientX;
        this.tooltip.top = event.originalEvent.clientY;
        this.forceRender();
    }
    onMouseRightClick(event) {
        if (this.disableTransformations) {
            return;
        }
        let featureDataPoints = this.getDataPointsForMouseEvent(event);
        if (featureDataPoints.length === 0) {
            return;
        }
        if (this.config.onRightClick) {
            let offset = util$1.getMouseEventOffset(event.originalEvent), dataPoint = angular.copy(featureDataPoints[0]);
            dataPoint.series = this.dataProcessor.getSeriesForDataPoint(dataPoint);
            let clickData = {
                chartX: offset.x,
                chartY: offset.y,
                point: dataPoint
            };
            this.config.onRightClick(clickData, dataPoint.series.color, dataPoint.series.name);
        }
    }
    getTopLayer() {
        return this.getLayerAtIndex(-1);
    }
    getLayerAtIndex(index) {
        let layers = this.layerGroup.getLayers().getArray();
        if (index < 0) {
            index = layers.length + index;
        }
        return layers[index];
    }
    getExtentOfDataLayer() {
        let dataLayer = this.getTopLayer();
        if (GeoMapComponent_1.isIGeoVectorLayer(dataLayer)) {
            let dummySource = new BaseVectorSource({
                features: this.features
            });
            return dummySource.getExtent();
        }
        throw new Error('Invalid top layer');
    }
    fitMapToData() {
        if (this.features.length === 0) {
            return;
        }
        let extent = this.getExtentOfDataLayer();
        let geoConfigType = this.dataProcessor.getGeoConfig().getType();
        let maxZoom = MAX_DEFAULT_ZOOM_OTHERS;
        if (geoConfigType === jsonConstants_1.geoConfigType.POINT ||
            geoConfigType === jsonConstants_1.geoConfigType.ZIP_CODE) {
            maxZoom = MAX_DEFAULT_ZOOM_ZIP_AND_POINT;
        }
        this.map.getView().fit(extent, this.map.getSize());
        let newZoom = this.map.getView().getZoom();
        if (newZoom > maxZoom) {
            this.map.getView().setZoom(maxZoom);
        }
    }
    shouldDrawFeature(hasTileLayer, feature) {
        // For more granular geo levels, to improve performance and clarity we only draw
        // features that have data for, even when we don't have background tiles.
        let geoCofig = this.dataProcessor.getGeoConfig();
        if (hasTileLayer || GeoUtils.isGeoConfigWithPartialDrawing(geoCofig)) {
            return this.getFeatureDataPoints(feature).length > 0;
        }
        return true;
    }
    getAllLayersLoadedPromise() {
        let layers = this.layerGroup.getLayers().getArray();
        let layerLoadPromises = layers.map((layer) => {
            return GeoMapComponent_1.getLayerLoadPromise(layer);
        });
        return Promise.all(layerLoadPromises);
    }
    getTileLayer() {
        let geoTileSourceId = flags.getValue(flags.BLINK_FLAGS.geoTileSourceId.name);
        if (!geoTileSourceId && areMapTilesEnabled()) {
            geoTileSourceId = blinkConstants_1.geoTypeSourceIds.THOUGHTSPOT_LOCAL;
        }
        if (!geoTileSourceId) {
            return null;
        }
        let url = null;
        let crossOrigin = void 0;
        let maxZoom = 0;
        let attribution = null;
        switch (geoTileSourceId) {
            case blinkConstants_1.geoTypeSourceIds.THOUGHTSPOT_LOCAL:
                url = blinkConstants_1.geoTileUrls.THOUGHTSPOT_LOCAL;
                maxZoom = blinkConstants_1.geoTileMaxZoom.THOUGHTSPOT_LOCAL;
                attribution = ol.source.OSM.ATTRIBUTION;
                break;
            case blinkConstants_1.geoTypeSourceIds.MAPBOX:
                let tileType = flags.getValue(flags.BLINK_FLAGS.geoTileType.name);
                if (!tileType) {
                    tileType = blinkConstants_1.geoTileTypes.MAPBOX.LIGHT;
                }
                url = stringUtil_1(blinkConstants_1.geoTileUrls.MAPBOX, {
                    tileType: tileType
                });
                maxZoom = blinkConstants_1.geoTileMaxZoom.MAPBOX;
                crossOrigin = 'anonymous';
                break;
            default:
                this.logger.warn('Unhandled map tile source', geoTileSourceId);
        }
        if (!url) {
            return null;
        }
        let sourceConfig = {
            tileSize: [IMAGE_TILE_SIZE, IMAGE_TILE_SIZE],
            url: url,
            maxZoom: maxZoom
        };
        if (!!crossOrigin) {
            // We need to set the crossOrigin if tiles are being downloaded from some other
            // domain, otherwise download map functionality will not work.
            sourceConfig.crossOrigin = crossOrigin;
        }
        if (!!attribution) {
            sourceConfig.attributions = [attribution];
        }
        let tileOptions = {
            source: new ol.source.XYZ(sourceConfig)
        };
        return new ol.layer.Tile(tileOptions);
    }
    /**
     * Returns whether the given layer is the top layer or an unmanaged layer.
     * An unmanaged layer is something that openlayers' Select interaction maintains
     * internally and and is not added to the geoMap.layerGroup.getLayers().
     * Whenever a feature is selected, openlayer removes it from the main layer and add it to this
     * internal unmanaged layer.
     * While looking for a feature to highlight of select, we only need to consider the top layer
     * and this unmanaged layer, that's where this utility function comes in the picture.
     * @param layer
     * @returns {boolean}
     */
    isUnmanagedOrTopLayer(layer) {
        let layers = this.layerGroup.getLayers().getArray(), layerPosition = layers.indexOf(layer);
        return layerPosition === -1 || layerPosition === layers.length - 1;
    }
    getTopologyData() {
        let geoColumnValues = this.dataProcessor.getAllFeatureIdsOfSeries(), geoConfig = this.dataProcessor.getGeoConfig();
        if (geoConfig.getType() === jsonConstants_1.geoConfigType.POINT) {
            // For lat, long points we will simply build Point feature for each lat, long pair.
            // There will be no caching involved because number of possible set of points is
            // infinite.
            return this.getTopologyDataForPointsGeoType(geoColumnValues);
        }
        let geomType = 'POINT';
        if (this.chartModel.getChartType() === chartTypes.GEO_AREA) {
            geomType = 'POLYGON';
        }
        return GeoEntityMatchingService$1.findMatchingFeatures(geoColumnValues, geomType, geoConfig.getType(), geoConfig.getParent() && geoConfig.getParent().getFixedValue(), geoConfig.getCustomFileGuid()).then((matchedFeatures) => {
            let features = matchedFeatures.map((features, index) => {
                if (features.length === 1) {
                    return features[0];
                }
                this.logger.warn(`could not find unique matching entity for ${geoColumnValues[index]}
                         found ${features.length} matching entities`);
                return null;
            });
            this.dataProcessor.buildUniqueFeatureIdToDataPointsMap(features);
            return this.features = features.filter((feature) => !!feature);
        });
    }
    getTopologyDataForPointsGeoType(latLongPairs) {
        let features = latLongPairs.map((latLongPair) => {
            let props = {
                GEOID: latLongPair
            };
            let latLong = latLongPair.split(', ');
            let coords = [+latLong[1], +latLong[0]];
            if (isNaN(coords[0]) || isNaN(coords[1])) {
                this.logger.warn('Invalid geo coordinate', latLongPair);
                return null;
            }
            // Convert to view projection. See note at the top of GeoMapComponent class about
            // projections.
            coords = ol.proj.transform(coords, DATA_PROJECTION, VIEW_PROJECTION);
            props.geometry = new ol.geom.Point(coords);
            let feature = new ol.Feature(props);
            feature.setId(props.GEOID);
            return feature;
        });
        this.dataProcessor.buildUniqueFeatureIdToDataPointsMap(features);
        return Promise.resolve(this.features = features.filter((feature => !!feature)));
    }
    buildDataLabelsMap(features) {
        features.forEach((feature) => {
            let dataPoint = this.getFeatureDataPoints(feature)[0];
            if (!dataPoint) {
                throw new Error('data point must be present for feature');
            }
            this.dataLabels.set('' + feature.getId(), this.getLabelForDataPoint(dataPoint));
        });
        return features;
    }
    redrawFeatures() {
        if (!!this.layerGroup) {
            this.layerGroup.getLayers().clear();
        }
        let tileLayer = this.getTileLayer(), layers = [];
        if (!!tileLayer) {
            layers.push(tileLayer);
        }
        let backgroundWorldMapLayer = new TopologyLayer({
            loader: new PolygonFeatureLoader({
                level: jsonConstants_1.geoConfigType.ADMIN_DIV_0,
            }),
            boundaryColor: BACKGROUND_WORLD_MAP_BOUNDARY_COLOR,
            fillColor: BACKGROUND_WORLD_MAP_FILL_COLOR,
            size: this.map ? this.map.getSize() : []
        });
        layers.push(backgroundWorldMapLayer);
        // IDs of features that we have data for.
        let geoConfig = this.dataProcessor.getGeoConfig(), chartType = this.chartModel.getChartType();
        // As for zip and county level, we will only be drawing those boundaries which we have data
        // for, so we will add a layer to draw US state level boundaries so that the map still looks
        // complete and connected.
        let stateBoundariesLayer = null;
        if (GeoUtils.isGeoConfigWithPartialDrawing(geoConfig)) {
            stateBoundariesLayer = new TopologyLayer({
                loader: new PolygonFeatureLoader({
                    level: jsonConstants_1.geoConfigType.ADMIN_DIV_1,
                    country: geoConfig.getParent().getFixedValue(),
                }),
                boundaryColor: CHOROPLETH_DIV_1_BOUNDARY_COLOR,
                isDottedStroke: true,
                size: this.map ? this.map.getSize() : []
            });
            layers.push(stateBoundariesLayer);
        }
        // Background world boundaries and state boundaries should remain hidden if map tiles are
        // enabled, unless the loading of tiles fails, then they should show up.
        if (tileLayer) {
            backgroundWorldMapLayer.setVisible(false);
            if (!!stateBoundariesLayer) {
                stateBoundariesLayer.setVisible(false);
            }
            tileLayer.getSource().once('tileloaderror', (event) => {
                backgroundWorldMapLayer.setVisible(true);
                if (!!stateBoundariesLayer) {
                    stateBoundariesLayer.setVisible(true);
                }
            });
        }
        let featureIdsOfGeoObjects = this.dataProcessor.getAllFeatureIdsOfGeoObjects();
        if (featureIdsOfGeoObjects.length > 0) {
            let viewProjection = this.map.getView().getProjection();
            let viewResolution = this.map.getView().getResolution();
            let geoObjectLayer = new GeoObjectLayer$1(featureIdsOfGeoObjects, featureId => this.dataProcessor.getGeoObjectsForFeature(featureId), GeoMapComponent_1.metersToMapUnitFactory(viewResolution, viewProjection), viewProjection.getCode());
            layers.push(geoObjectLayer);
        }
        if (GeoMapComponent_1.shouldDrawFeatureBoundaries(geoConfig, chartType)) {
            let topologyLayer = new TopologyLayer({
                loader: new PolygonFeatureLoader({
                    level: geoConfig.getType(),
                    country: geoConfig.getParent() && geoConfig.getParent().getFixedValue(),
                    customFileGuid: geoConfig.getCustomFileGuid(),
                    filter: (feature) => this.shouldDrawFeature(!!tileLayer, feature),
                }),
                boundaryColor: CHOROPLETH_DIV_2_BOUNDARY_COLOR,
                fillColor: (feature) => this.getFillColorForFeature(feature),
                // For Geo bubble, we will show labels on BubbleLayer
                label: chartType === chartTypes.GEO_AREA
                    ? ((feature) => this.getDataLabelForFeature(feature)) : void 0,
                size: this.map ? this.map.getSize() : []
            });
            layers.push(topologyLayer);
        }
        if (chartType === chartTypes.GEO_BUBBLE) {
            let maxBubbleRadius = GeoMapComponent_1.getMaxBubbleRadiusForGeoConfig(geoConfig);
            let bubbleLayer = new BubbleLayer({
                features: this.features,
                radius: (feature, maxAllowedRadius) => this.getBubbleRadiusForFeature(feature, Math.min(maxBubbleRadius, maxAllowedRadius)),
                color: (feature) => this.getBubbleColorForFeature(feature),
                label: (feature) => this.getDataLabelForFeature(feature),
                size: this.map ? this.map.getSize() : []
            });
            layers.push(bubbleLayer);
        }
        else if (chartType === chartTypes.GEO_HEATMAP) {
            let heatMapLayer = new HeatMapLayer({
                features: this.features,
                weight: (feature) => {
                    let dataPoints = this.dataProcessor.getDataPointsForFeature(feature.getProperties());
                    if (!dataPoints || dataPoints.length === 0) {
                        return 0;
                    }
                    return HEATMAP_WEIGHT_BASE
                        + HEATMAP_WEIGHT_FRACTION * dataPoints[0].measureRangeFraction;
                }
            });
            layers.push(heatMapLayer);
        }
        this.layerGroup.getLayers().extend(layers);
        return this.getAllLayersLoadedPromise().then(() => {
            this.updateViewport();
        });
    }
    scaleMapBasedOnViewport() {
        if (this.map && this.map.getSize()[0] >= chartScreen.FHD_MIN) {
            this.fitMapToData();
        }
        const topLayer = this.getTopLayer();
        const source = topLayer.getSource();
        if (!source.setStyle)
            return;
        source.setStyle((feature, resolution) => topLayer.getStylesForFeature(feature, resolution, false /* isHovered */, this.map.getSize()));
    }
    updateViewport() {
        if (!this.hasNoViewPortDefined()) {
            this.centerOnDefinedViewPort();
        }
        else {
            this.fitMapToData();
        }
        this.scaleMapBasedOnViewport();
    }
    hasNoViewPortDefined() {
        return this.chartModel.getMapViewport() === void 0;
    }
    centerOnDefinedViewPort() {
        const mapView = this.chartModel.getMapViewport();
        const view = this.map.getView();
        const newCenter = view.constrainCenter(mapView.center);
        let zoomLevelToSet = mapView.zoomLevel;
        let centerToSet = mapView.center;
        //this is a fail-safe added to ensure that in case center saved is somehow an arbitary
        //number which does lie in the constrained view port defined, we reset the center to default
        if (mapView.center[0] !== newCenter[0] ||
            mapView.center[1] !== newCenter[1]) {
            zoomLevelToSet = defaultZoom;
            centerToSet = defaultCenter;
        }
        this.chartModel.setMapViewport({
            zoomLevel: zoomLevelToSet,
            center: centerToSet
        });
        view.setCenter(centerToSet);
        view.setZoom(zoomLevelToSet);
    }
    updateColorScale() {
        if (this.chartModel.getChartType() !== chartTypes.GEO_AREA) {
            this.colorScaleCtrl = null;
            return;
        }
        let series = this.dataProcessor.getAllSeries();
        let visibleSeries = series.filter((serie) => {
            return !_.has(serie, 'visible') || serie.visible === true;
        });
        this.colorScaleCtrl = null;
        if (visibleSeries.length === 1) {
            let serie = visibleSeries[0];
            if (!!serie.isRangeValid) {
                this.colorScaleCtrl = new ColorScaleComponent$1({
                    colors: chroma.scale(serie.scale),
                    leftText: this.dataProcessor.getFormattedYValue(serie.minDataPoint).value,
                    rightText: this.dataProcessor.getFormattedYValue(serie.maxDataPoint).value,
                });
            }
        }
    }
};
GeoMapComponent = GeoMapComponent_1 = __decorate([
    Component({
        name: 'bkGeoMap',
        templateUrl: 'src/modules/viz-layout/viz/chart/geomap/2d/blink-geo-map.html'
    })
], GeoMapComponent);

export { GeoMapComponent };
//# sourceMappingURL=blink-geo-map-5f853273.js.map
