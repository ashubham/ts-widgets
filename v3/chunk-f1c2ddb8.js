import { _ } from './chunk-1bec01b6.js';
import { P as Provide } from './chunk-68eb1584.js';
import { b6 as isAppInIFrame } from './chunk-31e8efbd.js';

/**
 * Copyright: ThoughtSpot Inc. 2012-2018
 * Author: Brian Nguyen (brian.nguyen@thoughtspot.com)
 *
 * @fileoverview Service used for to scale the page based on breakpoints. This method is used
 * instead of css media queries to compensate for browser zoom.
 * If css media queries is used, when the user does browser zoom, the breakpoint will change
 * and provide an unexpected behavior
 */
const hdScalingClassName = 'rd-scaling-hd';
const fhdScalingClassName = 'rd-scaling-fhd';
const qhdScalingClassName = 'rd-scaling-qhd';
const uhdScalingClassName = 'rd-scaling-uhd';
const DEBOUNCING_RESIZE_TIME = 60;
const ResponsiveBreakpoints = [
    {
        name: 'HD',
        screenSizeClass: 0 /* HD */,
        minWidth: 0,
        maxWidth: 1600,
        className: hdScalingClassName
    }, {
        name: 'FHD',
        screenSizeClass: 1 /* FHD */,
        minWidth: 1600,
        maxWidth: 1920,
        className: fhdScalingClassName
    }, {
        name: 'QHD',
        screenSizeClass: 2 /* QHD */,
        minWidth: 1920,
        maxWidth: 2560,
        className: qhdScalingClassName
    }, {
        name: 'UHD',
        screenSizeClass: 3 /* UHD */,
        minWidth: 2560,
        maxWidth: Infinity,
        className: uhdScalingClassName
    },
];
let currentResponsiveClassName = '';
let scalingDisabled = false;
function getResponsiveBreakpoint() {
    let screenWidth = isAppInIFrame() ? window.innerWidth : window.outerWidth;
    let currentBreakpoint = ResponsiveBreakpoints.find((breakpoint) => {
        return screenWidth >= breakpoint.minWidth && screenWidth <= breakpoint.maxWidth;
    });
    return currentBreakpoint;
}
function updateBreakpointClass() {
    let oldResponsiveClassName = currentResponsiveClassName;
    let currentBreakpoint = getResponsiveBreakpoint();
    currentResponsiveClassName = currentBreakpoint.className;
    $('html').removeClass(oldResponsiveClassName);
    $('html').addClass(currentResponsiveClassName);
}
let debouncedResizeHandler = _.debounce(() => {
    // If the application is embed, innerWidth needs to be used instead of outerWidth
    updateBreakpointClass();
}, DEBOUNCING_RESIZE_TIME);
function initializeScaling() {
    scalingDisabled = false;
    updateBreakpointClass();
    window.addEventListener('resize', debouncedResizeHandler);
}
function terminateScaling(disableScaling = false) {
    scalingDisabled = disableScaling;
    $('html').removeClass(currentResponsiveClassName);
    currentResponsiveClassName = '';
    debouncedResizeHandler.cancel();
    window.removeEventListener('resize', debouncedResizeHandler);
}
function resumeScalingIfNeeded() {
    if (scalingDisabled) {
        initializeScaling();
    }
}
function disableScalingIfNeeded() {
    if (!!currentResponsiveClassName) {
        terminateScaling(true);
    }
}
Provide('scalingService')({
    resumeScalingIfNeeded,
    disableScalingIfNeeded,
    terminateScaling,
    initializeScaling,
    getResponsiveBreakpoint
});

///<reference path="highchart-theme-screen-util.d.ts" />

function getSankeyChartScreenConfig(shouldScale) {
    let screenSizeClass = 0 /* HD */;
    if (shouldScale) {
        let currentBreakpoint = getResponsiveBreakpoint();
        screenSizeClass = currentBreakpoint.screenSizeClass;
    }
    if (screenSizeClass === 0 /* HD */) {
        return {
            fontSize: '12px',
        };
    }
    else if (screenSizeClass === 1 /* FHD */) {
        return {
            fontSize: '16px',
        };
    }
    else if (screenSizeClass === 2 /* QHD */) {
        return {
            fontSize: '24px',
        };
    }
    else if (screenSizeClass === 3 /* UHD */) {
        return {
            fontSize: '48px',
        };
    }
}
function getGeoMapScreenConfig(shouldScale) {
    let screenSizeClass = 0 /* HD */;
    if (shouldScale) {
        let currentBreakpoint = getResponsiveBreakpoint();
        screenSizeClass = currentBreakpoint.screenSizeClass;
    }
    if (screenSizeClass === 0 /* HD */) {
        return {
            fontSize: '12px Verdana',
            strokeWidth: 1
        };
    }
    else if (screenSizeClass === 1 /* FHD */) {
        return {
            fontSize: '16px Verdana',
            strokeWidth: 2
        };
    }
    else if (screenSizeClass === 2 /* QHD */) {
        return {
            fontSize: '24px Verdana',
            strokeWidth: 4
        };
    }
    else if (screenSizeClass === 3 /* UHD */) {
        return {
            fontSize: '48px Verdana',
            strokeWidth: 6
        };
    }
}

export { getGeoMapScreenConfig as a, disableScalingIfNeeded as d, getSankeyChartScreenConfig as g, resumeScalingIfNeeded as r };
//# sourceMappingURL=chunk-f1c2ddb8.js.map
