import { _, a as __decorate } from './chunk-1bec01b6.js';
import { c as createCommonjsModule, a as commonjsGlobal, b as commonjsRequire } from './chunk-5732a1e2.js';
import { B as falcon, x as logger_3, P as Provide, n as ngRequire, j as jsonConstants_1, h as stringUtil_1, i as strings, f as flags, e as blinkConstants_1, E as blink, q as sage$1, K as logger_5, L as net } from './chunk-68eb1584.js';
import { s as sage, j as jsUtil_1, ap as navService, aq as getUserGuid, ar as updatePropertiesWithEventName, as as updateMixPanelProperty, at as PeopleSetPropertiesEnum, au as uploadEventBatch, av as getSessionProperties, aw as updateEventChangableSessionProperties, ax as Subject, ay as getCustomerAdminEmail, c as chartTypes, az as getStackedValuesColumn, aA as COMPOSITE_COLUMN_VALUES_JOIN_KEY, x as configOptions, E as formatCompositeColumnValue, aB as typed_2, aC as Subject_2, aD as getCurrentLocale, aE as getUserName, aF as getUserGroupMask } from './chunk-31e8efbd.js';

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Rahul Paliwal
 *
 * @fileoverview Utility to translate between Sage and Callosum constants
 */
var SageDataType = falcon.DataType.E;
let _logger = logger_3('sage-callosum-translator');
const CALLOSUM_AGGR_TYPE_TO_SAGE_AGGR_TYPE = new Map([
    ['SUM', 'SUM'],
    ['AVERAGE', 'AVERAGE'],
    ['MIN', 'MIN'],
    ['MAX', 'MAX'],
    ['COUNT', 'COUNT'],
    ['COUNT_DISTINCT', 'UNIQUE_COUNT'],
    ['STD_DEVIATION', 'STD_DEVIATION'],
    ['TABLE_AGGR', 'TABLE_AGGR'],
    ['VARIANCE', 'VARIANCE'],
    ['NONE', 'NONE']
]);
const SAGE_AGGR_TYPE_TO_CALLOSUM_AGGR_TYPE = new Map([
    [sage.AggregationType.SUM, 'SUM'],
    [sage.AggregationType.AVERAGE, 'AVERAGE'],
    [sage.AggregationType.MIN, 'MIN'],
    [sage.AggregationType.MAX, 'MAX'],
    [sage.AggregationType.COUNT, 'COUNT'],
    [sage.AggregationType.UNIQUE_COUNT, 'COUNT_DISTINCT'],
    [sage.AggregationType.STD_DEVIATION, 'STD_DEVIATION'],
    //[SCAL-38164]
    //[sage.AggregationType.TABLE_AGGR, 'TABLE_AGGR'],
    [sage.AggregationType.VARIANCE, 'VARIANCE'],
    [sage.AggregationType.NONE, 'NONE']
]);
const CALLOSUM_DATA_TYPE_TO_SAGE_DATA_TYPE = new Map([
    ['CHAR', 'CHAR'],
    ['VARCHAR', 'CHAR'],
    ['BOOL', 'BOOL'],
    ['INT32', 'INT32'],
    ['INT64', 'INT64'],
    ['FLOAT', 'FLOAT'],
    ['DOUBLE', 'DOUBLE'],
    ['DATE', 'DATE'],
    ['DATE_TIME', 'DATE_TIME'],
    ['TIME', 'TIME']
]);
const SAGE_DATA_TYPE_TO_CALLOSUM_DATA_TYPE = new Map([
    [SageDataType.CHAR, 'CHAR'],
    [SageDataType.BOOL, 'BOOL'],
    [SageDataType.INT32, 'INT32'],
    [SageDataType.INT64, 'INT64'],
    [SageDataType.FLOAT, 'FLOAT'],
    [SageDataType.DOUBLE, 'DOUBLE'],
    [SageDataType.DATE, 'DATE'],
    [SageDataType.DATE_TIME, 'DATE_TIME'],
    [SageDataType.TIME, 'TIME']
]);
const CALLOSUM_COLUMN_TYPE_TO_SAGE_COLUMN_TYPE = new Map([
    ['ATTRIBUTE', 'ATTRIBUTE'],
    ['MEASURE', 'MEASURE'],
    ['UNKNOWN', 'UNKNOWN']
]);
const SAGE_COLUMN_TYPE_TO_CALLOSUM_COLUMN_TYPE = new Map([
    [sage.ColumnType.ATTRIBUTE, 'ATTRIBUTE'],
    [sage.ColumnType.MEASURE, 'MEASURE'],
    [sage.ColumnType.UNKNOWN, 'UNKNOWN']
]);
/**
 * @param {sage.AggregationType} sageAggrType
 * @returns {string}
 */
const getCallosumAggrTypeForSageAggrType = (sageAggrType) => {
    if (!SAGE_AGGR_TYPE_TO_CALLOSUM_AGGR_TYPE.has(sageAggrType)) {
        _logger.warn('unknown sage aggr type', sageAggrType);
        return null;
    }
    return SAGE_AGGR_TYPE_TO_CALLOSUM_AGGR_TYPE.get(sageAggrType);
};
/**
 * @param {sage.DataType} sageDataType
 * @returns {string}
 */
const getCallosumDataTypeForSageDataType = (sageDataType) => {
    if (!SAGE_DATA_TYPE_TO_CALLOSUM_DATA_TYPE.has(sageDataType)) {
        _logger.warn('unknown sage data type', sageDataType);
        return null;
    }
    return SAGE_DATA_TYPE_TO_CALLOSUM_DATA_TYPE.get(sageDataType);
};
/**
 * Returns sage aggregation name for a give callosum aggregation name. In most cases these
 * names are the same but can be different in some cases.
 * (e.g callosum:COUNT_DISTINCT === sage:UNIQUE_COUNT)
 * @param {string} callosumAggrType
 * @returns {string}
 */
const getSageAggrTypeForCallosumAggrType = (callosumAggrType) => {
    if (!CALLOSUM_AGGR_TYPE_TO_SAGE_AGGR_TYPE.has(callosumAggrType)) {
        _logger.warn('unknown callosum aggr type', callosumAggrType);
        return null;
    }
    return CALLOSUM_AGGR_TYPE_TO_SAGE_AGGR_TYPE.get(callosumAggrType);
};
/**
 * @param {string} callosumColumnType
 * @returns {string}
 */
const getSageColumnTypeForCallosumColumnType = (callosumColumnType) => {
    if (!CALLOSUM_COLUMN_TYPE_TO_SAGE_COLUMN_TYPE.has(callosumColumnType)) {
        _logger.warn('unknown callosum column type', callosumColumnType);
        return null;
    }
    return CALLOSUM_COLUMN_TYPE_TO_SAGE_COLUMN_TYPE.get(callosumColumnType);
};
/**
 * @param {sage.ColumnType} sageColumnType
 * @returns {string}
 */
const getCallosumColumnTypeForSageColumnType = (sageColumnType) => {
    if (!SAGE_COLUMN_TYPE_TO_CALLOSUM_COLUMN_TYPE.has(sageColumnType)) {
        _logger.warn('unknown sage column type', sageColumnType);
        return null;
    }
    return SAGE_COLUMN_TYPE_TO_CALLOSUM_COLUMN_TYPE.get(sageColumnType);
};
/**
 * @param {string} callosumDataType
 * @returns {string}
 */
const getSageDataTypeForCallosumDataType = (callosumDataType) => {
    if (!CALLOSUM_DATA_TYPE_TO_SAGE_DATA_TYPE.has(callosumDataType)) {
        _logger.warn('unknown callosum data type', callosumDataType);
        return null;
    }
    return CALLOSUM_DATA_TYPE_TO_SAGE_DATA_TYPE.get(callosumDataType);
};
Provide('sageCallosumTranslator')({
    getSageAggrTypeForCallosumAggrType,
    getCallosumAggrTypeForSageAggrType,
    getSageDataTypeForCallosumDataType,
    getCallosumDataTypeForSageDataType,
    getSageColumnTypeForCallosumColumnType,
    getCallosumColumnTypeForSageColumnType
});

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Rahul Paliwal (rahul@thoughtspot.com)
 *
 * @fileoverview Service that holds a sage data sources.
 * Note that currently we keep a global sage data sources
 * array. Ideally we can have multiple sage data scopes.
 */
Provide('sageDataScopeService')({
    getSources,
    setSources,
    updateSourcesName,
    subscribeToSourcesChanged,
    isSourceSelected
});
let jsUtil = ngRequire('jsUtil');
// Map of current selection.
let sources = {};
let sourcesIdToSourcesName = {};
let listeners = {};
function getSources() {
    return Object.keys(sources);
}
function isSourceSelected(id) {
    return !!sources[id];
}
function setSources(dataScope) {
    dataScope = dataScope || [];
    sources = {};
    dataScope.forEach((id) => {
        sources[id] = true;
    });
    fireListeners(false);
}
function updateSourcesName(updatedSourcesIdsToSourcesName) {
    let sourceIds = Object.keys(updatedSourcesIdsToSourcesName);
    if (!sourceIds) {
        return;
    }
    sourceIds.forEach((sourceId) => {
        sourcesIdToSourcesName[sourceId] = updatedSourcesIdsToSourcesName[sourceId];
    });
    fireListeners(true);
}
function subscribeToSourcesChanged(fn) {
    let id = jsUtil.generateUUID();
    listeners[id] = fn;
    return () => {
        return deregister(id);
    };
}
function fireListeners(nameChanges) {
    let sourcesArray = Object.keys(sources);
    _.values(listeners).forEach((listener) => listener(sourcesArray, sourcesIdToSourcesName, nameChanges));
}
function deregister(id) {
    delete listeners[id];
}

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Utility to help build tsProto auto complete objects.
 */
var SageDataType$1 = falcon.DataType.E;
/**
 * @param dataScope {string[]}
 * @returns {sage.ACTableRequest}
 */
function getNewACTableRequest(dataScope = getSources()) {
    let request = new sage.ACTableRequest();
    request.setDataScopeLogicalTables(dataScope);
    request.setInputTokens([]);
    return request;
}
/**
 *
 * @returns {sage.ACContext}
 */
function getNewACContext() {
    let context = new sage.ACContext();
    context.setTables([]);
    context.setJoins([]);
    return context;
}
/**
 *
 * @returns {sage.ACContext}
 */
function getNewACContextWithTable() {
    let context = new sage.ACContext();
    let table = new sage.ACTable();
    table.setTokens([]);
    context.setTables([table]);
    context.setJoins([]);
    return context;
}
function getNewACTable() {
    return new sage.ACTable();
}
/**
 * @param formulaColumn
 * @returns {sage.ACFormula}
 */
function getNewACFormula(formulaColumn) {
    let formula = new sage.ACFormula();
    formula.setId(formulaColumn.getFormulaId());
    formula.setName(formulaColumn.getName());
    formula.setExpression(formulaColumn.getFormulaQuery());
    formula.setTokens(formulaColumn.getFormulaTokens());
    let sageAggregationType = getSageAggrTypeForCallosumAggrType(formulaColumn.getAggregateType());
    if (sage.AggregationType[sageAggregationType]) {
        formula.setAggregationType(sage.AggregationType[sageAggregationType]);
    }
    let sageDataType = getSageDataTypeForCallosumDataType(formulaColumn.getDataType());
    if (SageDataType$1[sageDataType]) {
        formula.setDataType(SageDataType$1[sageDataType]);
    }
    let sageColumnType = getSageColumnTypeForCallosumColumnType(formulaColumn.getType());
    if (sage.ColumnType[sageColumnType]) {
        formula.setColumnType(sage.ColumnType[sageColumnType]);
    }
    return formula;
}
/**
 * Creates an ACTable request from the array of recognized tokens.
 * @param recognizedTokens
 * @param recognizedTokens
 * @returns {Array<sage.ACTableRequest>}
 */
function createACTableRequestFromTokens(recognizedTokens, completions = 1) {
    let actableRequest = new sage.ACTableRequest();
    actableRequest.setInputTokens(recognizedTokens);
    actableRequest.setMaxCompletions(completions);
    let inputTokens = actableRequest.getInputTokens();
    actableRequest.setCurrentlyEditedToken(inputTokens.length - 1);
    actableRequest.setCursorOffsetInToken(inputTokens[inputTokens.length - 1].token.length);
    return actableRequest;
}
/**
 *
 * @param filterModel
 * @returns {sage.ACFormula}
 */
function getNewACFormulaFromFilter(filterModel) {
    let formula = new sage.ACFormula();
    formula.setId(filterModel.getId());
    formula.setName(filterModel.getName());
    formula.setExpression(filterModel.getExpression());
    formula.setTokens(filterModel.getTokens());
    return formula;
}
/**
 *
 * @param expressionEditorModel
 * @returns {sage.ACFormula}
 */
function getNewACFormulaFromExpression(expression, tokens) {
    let formula = new sage.ACFormula();
    let newId = jsUtil_1();
    formula.setId(newId);
    formula.setName(newId);
    formula.setExpression(expression);
    formula.setTokens(tokens);
    return formula;
}
Provide('autoCompleteObjectUtil')({
    createACTableRequestFromTokens,
    getNewACTableRequest,
    getNewACContext,
    getNewACContextWithTable,
    getNewACFormula,
    getNewACFormulaFromFilter,
    getNewACFormulaFromExpression,
    getNewACTable
});

/**
 * Created by piyush.goyal on 28/09/17.
 *
 * @fileoverview The UserAction class.
 *
 */
let userActionTypes = {
    CLICK_AUTO_COMPLETE: { name: 'click-auto-complete', tags: ['search'] },
    ADD_VIZ_TO_PINBOARD: { name: 'add-viz-to-pinboard', tags: ['pinboard'] },
    DELETE_VIZ_FROM_PINBOARD: { name: 'delete-viz-from-pinboard', tags: ['pinboard'] },
    CREATE_PINBOARD: { name: 'create-pinboard', tags: ['pinboard'] },
    CREATE_LABEL: { name: 'create-label', tags: [] },
    DELETE_LABELS: { name: 'delete-labels', tags: [] },
    DELETE_METADATA_ITEMS: { name: 'delete-metadata-items', tags: [] },
    DELETE_PINBOARDS: { name: 'delete-pinboards', tags: ['pinboard'] },
    DELETE_PINBOARD: { name: 'delete-pinboard', tags: ['pinboard'] },
    DELETE_ANSWERS: { name: 'delete-answers', tags: ['answer'] },
    DELETE_ANSWER: { name: 'delete-answer', tags: ['answer'] },
    DELETE_TABLES: { name: 'delete-tables', tags: ['table'] },
    CREATE_RELATED_LINK: { name: 'create-related-link', tags: [] },
    UPDATE_RELATED_LINK: { name: 'update-related-link', tags: [] },
    DELETE_RELATED_LINK: { name: 'delete-related-link', tags: [] },
    CREATE_RELATIONSHIP: { name: 'create-relationship', tags: ['create', 'relationship'] },
    FETCH_RELATED_LINK_DETAILS: { name: 'fetch-related-link-details', tags: [] },
    FETCH_EXCEL_DATA: { name: 'fetch-excel-data', tags: ['table'] },
    UPDATE_RELATIONSHIP: { name: 'update-relationship', tags: [] },
    DELETE_RELATIONSHIP: { name: 'delete-relationship', tags: [] },
    FETCH_TABLE_DETAILS: { name: 'fetch-table-details', tags: ['table'] },
    FETCH_TABLES_DETAILS: { name: 'fetch-tables-details', tags: ['table'] },
    FETCH_DATA_SOURCES_DETAILS: { name: 'fetch-data-sources-details', tags: [] },
    FETCH_DATA_SOURCE_DETAILS: { name: 'fetch-data-source-details', tags: [] },
    FETCH_METADATA_DETAILS: { name: 'fetch-metadata-details', tags: [] },
    FETCH_ANSWER_DETAILS: { name: 'fetch-answer-details', tags: ['answer'] },
    FETCH_PINBOARD_DETAILS: { name: 'fetch-pinboard-details', tags: ['pinboard'] },
    FETCH_WORKSHEET_DETAILS: { name: 'fetch-worksheet-details', tags: ['worksheet'] },
    SAVE_TABLE_MODEL: { name: 'save-table-model', tags: ['table'] },
    SAVE_VIZ_CONTEXT: { name: 'save-viz-context', tags: [] },
    SAVE_ANSWER_MODEL: { name: 'save-answer-model', tags: ['save', 'answer'] },
    SAVE_PINBOARD_MODEL: { name: 'save-pinboard-model', tags: ['save', 'pinboard'] },
    SAVE_WORKSHEET_MODEL: { name: 'save-worksheet-model', tags: ['worksheet'] },
    SAVE_AS_ANSWER_MODEL: { name: 'save-as-answer-model', tags: ['answer'] },
    SAVE_AS_PINBOARD_MODEL: { name: 'save-as-pinboard-model', tags: ['pinboard'] },
    SAVE_AS_WORKSHEET_MODEL: { name: 'save-as-worksheet-model', tags: ['worksheet'] },
    SAVE_TAG: { name: 'save-tag', tags: [] },
    ASSIGN_TAG: { name: 'assign-tag', tags: [] },
    UNASSIGN_TAG: { name: 'unassign-tag', tags: [] },
    ADD_FAVORITE: { name: 'add-favorite', tags: [] },
    DELETE_FAVORITE: { name: 'delete-favorite', tags: [] },
    ADD_SUBSCRIPTION: { name: 'add-subscription', tags: [] },
    DELETE_SUBSCRIPTION: { name: 'delete-subscription', tags: [] },
    UPDATE_SUBSCRIPTION: { name: 'update-subscription', tags: [] },
    EXPORT_OBJECTS: { name: 'export-objects', tags: [] },
    IMPORT_OBJECTS: { name: 'import-objects', tags: [] },
    FETCH_METADATA_LIST: { name: 'fetch-metadata-list', tags: [] },
    FETCH_TABLE_LIST: { name: 'fetch-table-list', tags: ['table', 'list', 'fetch'] },
    FETCH_RELATIONSHIP_LIST: { name: 'fetch-relationship-list', tags: [] },
    FETCH_ANSWER_LIST: { name: 'fetch-answer-list', tags: ['answer'] },
    FETCH_PINBOARD_LIST: { name: 'fetch-pinboard-list', tags: ['pinboard'] },
    FETCH_WORKSHEET_LIST: { name: 'fetch-worksheet-list', tags: ['worksheet'] },
    FETCH_VIEW_LIST: { name: 'fetch-aggr-worksheet-list', tags: ['view'] },
    FETCH_IMPORTED_DATA_LIST: { name: 'fetch-imported-data-list', tags: [] },
    FETCH_SYSTEM_TABLE_LIST: { name: 'fetch-system-table-list', tags: ['table'] },
    FETCH_DB_VIEW_LIST: { name: 'fetch-db-view-list', tags: [] },
    FETCH_DATA_SOURCE_LIST: { name: 'fetch-data-source-list', tags: [] },
    FETCH_COLUMN_LIST: { name: 'fetch-column-list', tags: [] },
    FETCH_EMBRACE_CONNECTION_LIST: { name: 'fetch-embrace-connection-list', tags: [] },
    FETCH_TAG_LIST: { name: 'fetch-tag-list', tags: [] },
    FETCH_ANSWER: { name: 'fetch-answer', tags: ['fetch', 'answer', 'ad-hoc'] },
    FETCH_SAVED_ANSWER: { name: 'fetch-saved-answer', tags: ['fetch', 'answer', 'saved'] },
    FETCH_ANSWER_FILTER: { name: 'fetch-answer-filter', tags: ['fetch', 'answer', 'filter'] },
    FETCH_PINBOARD: { name: 'fetch-pinboard', tags: ['fetch', 'pinboard'] },
    FETCH_WORKSHEET: { name: 'fetch-worksheet', tags: ['fetch', 'worksheet'] },
    FETCH_LEAF_LEVEL_DATA: { name: 'fetch-leaf-level-data', tags: [] },
    FETCH_PINBOARD_AS_PDF: { name: 'fetch-pinboard-as-pdf', tags: ['pinboard'] },
    FETCH_VIZ_DATA: { name: 'fetch-viz-data', tags: [] },
    FETCH_VIZS_DATA: { name: 'fetch-vizs-data', tags: [] },
    FETCH_CHART_DATA: { name: 'fetch-chart-data', tags: [] },
    EDIT_CHART_CONFIG: { name: 'edit-chart-config', tags: [] },
    FETCH_TABLE_DATA: { name: 'fetch-table-data', tags: ['table'] },
    FETCH_WORKSHEET_DATA: { name: 'fetch-worksheet-data', tags: ['worksheet'] },
    FETCH_FILTER_DATA: { name: 'fetch-filter-data', tags: [] },
    UPDATE_HEADLINE_DATA: { name: 'update-headline-data', tags: [] },
    FETCH_NATURAL_QUERY: { name: 'fetch-natural-query', tags: [] },
    CREATE_WORKSHEET: { name: 'create-worksheet', tags: ['worksheet'] },
    UPDATE_WORKSHEET: { name: 'update-worksheet', tags: ['worksheet'] },
    CREATE_VIEW: { name: 'create-view', tags: ['view'] },
    UPDATE_VIEW: { name: 'update-view', tags: ['view'] },
    DEMATERIALIZE_VIEW: { name: 'dematerialize-view', tags: ['view'] },
    VIEW_MATERIALIZATION_STATUS: { name: 'view-materialization-status', tags: ['view'] },
    REFRESH_MATERIALIZED_VIEW: { name: 'refresh-materialized-view', tags: ['view'] },
    MATERIALIZE_VIEW: { name: 'materialize-view', tags: ['view'] },
    UPDATE_MATERIALIZE_VIEW: { name: 'update-materialize-view', tags: ['view'] },
    GET_MATERIALIZE_SCHEDULE: { name: 'get-materialize-status', tags: ['view'] },
    ADD_MATERIALIZE_SCHEDULE: { name: 'add-materialize-status', tags: ['view'] },
    DELETE_MATERIALIZE_SCHEDULE: { name: 'delete-materialize-status', tags: ['view'] },
    PAUSE_MATERIALIZE_SCHEDULE: { name: 'pause-materialize-status', tags: ['view'] },
    RESUME_MATERIALIZE_SCHEDULE: { name: 'resume-materialize-status', tags: ['view'] },
    UPDATE_MATERIALIZE_SCHEDULE: { name: 'update-materialize-status', tags: ['view'] },
    FETCH_ANSWER_VIEW: { name: 'fetch-answer-agg-worksheet', tags: ['fetch', 'view'] },
    FETCH_TABLE_DEPENDENTS: { name: 'fetch-table-dependents', tags: ['table'] },
    FETCH_COLUMN_DEPENDENTS: { name: 'fetch-column-dependents', tags: [] },
    FETCH_INCOMPLETE_LIST: { name: 'fetch-incomplete-list', tags: [] },
    CREATE_FORMULA: { name: 'create-formula', tags: ['create', 'formula'] },
    SAVE_TITLE_DESCRIPTION: { name: 'save-title-description', tags: [] },
    UPDATE_FORMULA: { name: 'update-formula', tags: [] },
    CLICK_SPOTIQ_TAB: { name: 'click-spotiq-tab', tags: ['spotiq'] },
    SAVE_SPOTIQ_INSIGHT_PINBOARD: { name: 'save-spotiq-insight-pinboard',
        tags: ['save', 'spotiq', 'insight', 'pinboard'] },
    DOWNLOAD_PINBOARD_VIZ: { name: 'download-pinboard-viz', tags: ['download', 'pinboard'] },
    DOWNLOAD_SPOTIQ_INSIGHT_PINBOARD: { name: 'download-spotiq-insight-pinboard',
        tags: ['download', 'spotiq', 'insight', 'pinboard'] },
    PRESENT_SPOTIQ_INSIGHT_PINBOARD: { name: 'present-spotiq-insight-pinboard',
        tags: ['present', 'spotiq', 'insight', 'pinboard'] },
    OPEN_SPOTIQ_INSIGHT_PINBOARD: { name: 'open-spotiq-insight-pinboard',
        tags: ['open', 'spotiq', 'insight', 'pinboard'] },
    OPEN_CUSTOM_R_VISUALIZATION: { name: 'open-custom-r-visualization', tags: ['open', 'custom-r'] },
    OPEN_SPOTIQ_JOB: { name: 'open-spotiq-job', tags: ['spotiq', 'job'] },
    OPEN_SPOTIQ_INFOCARD_PINBOARD: { name: 'open-spotiq-infocard-pinboard',
        tags: ['open', 'spotiq', 'infocard', 'pinboard'] },
    OPEN_SPOTIQ_INFOCARD_INSIGHT: { name: 'open-spotiq-infocard-insight',
        tags: ['open', 'spotiq', 'infocard', 'insight'] },
    OPEN_CUSTOM_R_INFOCARD: { name: 'open-custom-r-infocard',
        tags: ['open', 'custom-r', 'infocard'] },
    CREATE_SPOTIQ_INSTANT_INSIGHTS: { name: 'create-spotiq-instant-insights',
        tags: ['create', 'spotiq', 'instant', 'insights'] },
    CREATE_SPOTIQ_RELATED_QUERIES: { name: 'create-spotiq-related-queries',
        tags: ['create', 'spotiq', 'related-queries'] },
    CREATE_SPOTIQ_INSTANT_TABLE_INSIGHTS: { name: 'create-spotiq-instant-table-insights',
        tags: ['create', 'spotiq', 'instant', 'table', 'insights'] },
    CREATE_SPOTIQ_PINBOARD_EXECUTIVE_SUMMARY: { name: 'create-spotiq-pinboard-executive-summary',
        tags: ['create', 'spotiq', 'pinboard', 'executive', 'summary'] },
    CREATE_SPOTIQ_USER_HOMEPAGE_INSIGHTS: { name: 'create-spotiq-user-homepage-insights',
        tags: ['create', 'spotiq', 'homepage', 'instant', 'insights'] },
    CLICK_SPOTIQ_USER_PREFERENCE_EXCLUDE_NULL: { name: 'click-spotiq-user-preference-exclude-null',
        tags: ['click', 'spotiq', 'user-preference', 'exclude-null'] },
    CLICK_SPOTIQ_USER_PREFERENCE_EMAIL_ON_SUCCESS: {
        name: 'click-spotiq-user-preference-email-on-success',
        tags: ['click', 'spotiq', 'user-preference', 'email-on-success']
    },
    CLICK_SPOTIQ_USER_PREFERENCE_EMAIL_ON_FAILURE: {
        name: 'click-spotiq-user-preference-email-on-failure',
        tags: ['click', 'spotiq', 'user-preference', 'email-on-failure']
    },
    CLICK_SPOTIQ_USER_PREFERENCE_EMAIL_PDF: {
        name: 'click-spotiq-user-preference-email-pdf',
        tags: ['click', 'spotiq', 'user-preference', 'email-pdf']
    },
    CLICK_SPOTIQ_USER_PREFERENCE_EXCLUDE_ZERO_MEASURE: {
        name: 'click-spotiq-user-preference-exclude-zero-measure',
        tags: ['click', 'spotiq', 'user-preference', 'exclude-zero-measure']
    },
    CLICK_SPOTIQ_USER_PREFERENCE_AUTOTUNE_DATE_BOUNDARY: {
        name: 'click-spotiq-user-preference-autotune-date-boundary',
        tags: ['click', 'spotiq', 'user-preference', 'autotune-date-boundary']
    },
    SAVE_SPOTIQ_PREFERENCES: { name: 'save-spotiq-preferences', tags: ['spotiq', 'user-preference'] },
    SUBMIT_LIKE_FEEDBACK: { name: 'submit-like-feedback', tags: ['submit', 'like', 'feedback'] },
    SUBMIT_DISLIKE_FEEDBACK: { name: 'submit-dislike-feedback', tags: ['submit', 'dislike', 'feedback'] },
    CLICK_DISLIKE_FEEDBACK: { name: 'click-dislike-feedback', tags: ['dislike', 'feedback'] },
    CREATE_SPOTIQ_ANALYSIS: { name: 'create-spotiq-analysis', tags: ['spotiq'] },
    CREATE_SPOTIQ_ANALYSIS_FROM_DISLIKE: {
        name: 'create-spotiq-analysis-from-dislike',
        tags: ['spotiq']
    },
    SCHEDULE_SPOTIQ_ANALYSIS: { name: 'schedule-spotiq-analysis', tags: ['schedule', 'spotiq'] },
    OPEN_SPOTIQ_INSTANT_INSIGHT: { name: 'open-spotiq-instant-insight',
        tags: ['open', 'spotiq', 'instant-insight'] },
    OPEN_SPOTIQ_RELATED_QUERY: { name: 'open-spotiq-related-query',
        tags: ['open', 'spotiq', 'related-queries'] },
    WATCH_MGMT_WATCH_CLICKED: { name: 'watch-mgmt-watch-clicked', tags: ['spotiq', 'watch'] },
    WATCH_DETAIL_SNAPSHOT_DATA_FETCH_FAILED: { name: 'watch_detail_snapshot_data_fetch_failed' },
    CREATE_SPOTIQ_WATCH: { name: 'create-spotiq-watch', tags: ['spotiq', 'watch'] },
    OPEN_SPOTIQ_WATCH: { name: 'create-spotiq-watch', tags: ['spotiq', 'watch'] },
    CLICK_SPOTIQ_WATCH_ANALYSIS: { name: 'click-spotiq-watch-analysis', tags: ['spotiq', 'watch'] },
    STOP_SPOTIQ_WATCH: { name: 'stop-spotiq-watch', tags: ['spotiq', 'watch'] },
    PINBOARD_CLUSTER_VIZ_VIEWED: { name: 'pinboard_cluster_viz_viewed' },
    EDIT_PINBOARD_VIZ: { name: 'edit_pinboard_viz' },
    FETCH_MEM_CACHE_STATS: { name: 'fetch-mem-cache-stats', tags: [] },
    CLEAR_MEM_CACHE: { name: 'clear-mem-cache', tags: [] },
    SEARCH_MEM_CACHE: { name: 'search-mem-cache', tags: [] },
    FETCH_LOGGERS: { name: 'fetch-loggers', tags: [] },
    SET_LOG_LEVEL: { name: 'set-log-level', tags: [] },
    GET_DEBUG_INFO: { name: 'get-debug-info', tags: [] },
    FETCH_R_TEMPLATE_LIST: { name: 'fetch-r-template-list',
        tags: ['fetch', 'r-template', 'list'] },
    FETCH_TABLE_PERMISSIONS: { name: 'fetch-table-permissions', tags: ['table'] },
    FETCH_ANSWER_PERMISSIONS: { name: 'fetch-answer-permissions', tags: ['answer'] },
    FETCH_PINBOARD_PERMISSIONS: { name: 'fetch-pinboard-permissions', tags: ['pinboard'] },
    FETCH_METADATA_PERMISSIONS: { name: 'fetch-metadata-permissions', tags: [] },
    CACHE_DATA: { name: 'cache-data', tags: [] },
    READ_COLUMNS: { name: 'read-columns', tags: [] },
    READ_KEYS: { name: 'read-keys', tags: [] },
    READ_RELATIONSHIPS: { name: 'read-relationships', tags: [] },
    LOAD_DATA: { name: 'load-data', tags: [] },
    CREATE_TABLE: { name: 'create-table', tags: ['table'] },
    FETCH_DATA_ROWS: { name: 'fetch-data-rows', tags: [] },
    DELETE_FILES: { name: 'delete-files', tags: [] },
    ABORT_CREATE_TABLE: { name: 'abort-create-table', tags: ['table'] },
    FETCH_SCHEMA: { name: 'fetch-schema', tags: [] },
    FETCH_TABLE_MODELS: { name: 'fetch-table-models', tags: ['table'] },
    FETCH_SAMPLE_VALUES: { name: 'fetch-sample-values', tags: [] },
    PARSE_SQL: { name: 'parse-sql', tags: [] },
    EXECUTE_SQL: { name: 'execute-sql', tags: [] },
    FETCH_USERS_LIST: { name: 'fetch-users-list', tags: [] },
    FETCH_GROUPS_LIST: { name: 'fetch-groups-list', tags: [] },
    FETCH_JOB_LIST: { name: 'fetch-jobs-list', tags: [] },
    FETCH_ROLES_LIST: { name: 'fetch-roles-list', tags: [] },
    FETCH_USERS_AND_GROUPS_LIST: { name: 'fetch-users-and-groups-list', tags: [] },
    CREATE_USER: { name: 'create-user', tags: [] },
    CREATE_JOB: { name: 'create-job', tags: [] },
    CREATE_GROUP: { name: 'create-group', tags: [] },
    CREATE_ROLE: { name: 'create-role', tags: [] },
    UPDATE_USER: { name: 'update-user', tags: [] },
    UPDATE_JOB: { name: 'update-job', tags: [] },
    UPDATE_USERS: { name: 'update-users', tags: [] },
    UPDATE_GROUP: { name: 'update-group', tags: [] },
    UPDATE_PASSWORD: { name: 'update-password', tags: [] },
    UPDATE_ROLE: { name: 'update-role', tags: [] },
    DELETE_USERS: { name: 'delete-users', tags: [] },
    DELETE_GROUPS: { name: 'delete-groups', tags: [] },
    DELETE_ROLE: { name: 'delete-role', tags: [] },
    DELETE_JOB: { name: 'delete-job', tags: [] },
    PAUSE_JOB: { name: 'pause-job', tags: [] },
    RESUME_JOB: { name: 'resume-job', tags: [] },
    ASSIGN_USERS_TO_GROUPS: { name: 'assign-users-to-groups', tags: [] },
    ASSIGN_PRINCIPALS_TO_ROLES: { name: 'assign-principals-to-roles', tags: [] },
    ASSIGN_GROUPS_TO_GROUP: { name: 'assign-groups-to-group', tags: [] },
    GET_SESSION_INFO: { name: 'get-session-info', tags: [] },
    LOGIN: { name: 'login', tags: [] },
    LOGOUT: { name: 'logout', tags: [] },
    SAVE_CLIENT_STATE: { name: 'save-client-state', tags: [] },
    FETCH_DATA_SOURCE_TYPES: { name: 'fetch-data-source-types', tags: [] },
    FETCH_DATA_SOURCE_SAMPLE_VALUES: { name: 'fetch-data-source-sample-values', tags: [] },
    FETCH_QV_SPEC: { name: 'fetch-qv-spec', tags: [] },
    FETCH_COLUMN_STATISTICS: { name: 'fetch-column-statistics', tags: [] },
    ADD_SEARCH_DATA_SOURCE: { name: 'add-search-data-source', tags: [] },
    DELETE_DATA_SOURCE: { name: 'delete-data-source', tags: [] },
    DATA_SOURCE_EXECUTE_DDL: { name: 'data-source-execute-ddl', tags: [] },
    DATA_SOURCE_UPDATE_SCHEDULE: { name: 'data-source-update-schedule', tags: [] },
    DATA_SOURCE_DELETE_SCHEDULE: { name: 'data-source-delete-schedule', tags: [] },
    DATA_SOURCE_RELOAD_TASKS: { name: 'data-source-reload-tasks', tags: [] },
    DATA_SOURCE_STOP_TASKS: { name: 'data-source-stop-tasks', tags: [] },
    DATA_SOURCE_GET_CREATE_DDL: { name: 'data-source-get-created-ddl', tags: [] },
    DATA_SOURCE_SCHEDULE_VALIDATION: { name: 'data-source-schedule-validation', tags: [] },
    LOAD_FROM_DATA_SOURCE: { name: 'load-from-data-source', tags: [] },
    EXPRESSION_VALIDATION: { name: 'expression-validation', tags: [] },
    DATA_SOURCE_CREATE_CONNECTION: { name: 'data-source-create-connection', tags: [] },
    DATA_SOURCE_DELETE_CONNECTION: { name: 'data-source-delete-connection', tags: [] },
    DATA_SOURCE_EDIT_CONNECTION: { name: 'data-source-edit-connection', tags: [] },
    CREATE_DATA_SOURCE: { name: 'create-data-source', tags: [] },
    CONNECT_TO_DATA_SOURCE: { name: 'connect-to-data-source', tags: [] },
    GET_DATA_SOURCE_CONN_FIELD_LIST: { name: 'get-data-source-conn-field-list', tags: [] },
    GET_DATA_SOURCE_CONNECTION_LIST: { name: 'get-data-source-connection-list', tags: [] },
    GET_DATA_SOURCE_CONNECTION_ATTRIBUTES: { name: 'get-data-source-connection-attributes', tags: [] },
    GET_DATA_SOURCE_CONNECTIONS: { name: 'get-data-source-connections', tags: [] },
    GET_DATA_SOURCE_CONFIG: { name: 'get-data-source-config', tags: [] },
    FETCH_LOGIN_CONFIG: { name: 'fetch-login-config', tags: [] },
    FETCH_SLACK_CONFIG: { name: 'fetch-slack-config', tags: [] },
    HEALTH_CHECK: { name: 'health-check', tags: [] },
    HELP_PORTAL_TOKEN: { name: 'help-portal-token', tags: [] },
    HELP_PORTAL_RELEASE_NAME: { name: 'help-portal-release-name', tags: [] },
    FETCH_PROFILE_PIC: { name: 'fetch-profile-pic', tags: [] },
    UPLOAD_PROFILE_PIC: { name: 'upload-profile-pic', tags: [] },
    UPLOAD_FILE: { name: 'upload-file', tags: [] },
    UPLOAD_USER_DATA: { name: 'upload-user-data', tags: [] },
    EXPORT_TSML: { name: 'export-tsml', tags: ['tsml', 'table', 'worksheet', 'view'] },
    CREATE_FROM_TSML: { name: 'create-from-tsml', tags: ['tsml', 'table', 'worksheet', 'view'] },
    UPDATE_FROM_TSML: { name: 'update-from-tsml', tags: ['tsml', 'table', 'worksheet', 'view'] },
    UPGRADE_ANSWER: { name: 'upgrade-answer', tags: ['answer'] },
    SEND_LOGS_TO_SERVER: { name: 'send-logs-to-server', tags: [] },
    SIGN_IN: { name: 'sign-in-clicked', tags: [] },
    SIGN_UP: { name: 'sign-up-clicked', tags: [] },
    FETCH_RELATIONSHIP_DEPENDENTS: { name: 'fetch-relationship-dependents', tags: [] },
    UPDATE_RLS_RULE: { name: 'update-rls-rule', tags: [] },
    DELETE_RLS_RULE: { name: 'delete-rls-rule', tags: [] },
    REPORT_PROBLEM: { name: 'report-problem', tags: [] },
    SHARE_OBJECT: { name: 'share-object', tags: [] },
    SUBMIT_SAGE_FEEDBACK: { name: 'submit-sage-feedback', tags: [] },
    REFRESH_CONTEXT_GUIDS: { name: 'refresh-context-guids', tags: [] },
    SAGE_SEARCH: { name: 'sage-search', tags: ['search'] },
    FAILURE_ALERT: { name: 'failure-alert', tags: ['failure', 'alert'] },
    REPLAY_ANSWER: { name: 'replay-answer', tags: ['answer'] },
    VIEW_LEARN_PINBOARD: { name: 'view-learn-pinboard', tags: [] },
    CREATE_SPOTIQ_AUTO_ANALYZE: { name: 'create-spotiq-auto-analyze',
        tags: ['create', 'spotiq', 'auto-analyze'] },
    CREATE_SPOTIQ_ANOMALY_EXPLANATION_ANALYZE: { name: 'create-spotiq-anomaly-explanation-analyze',
        tags: ['create', 'spotiq', 'anomaly-explanation-analyze'] },
    CREATE_SPOTIQ_CUSTOM_ANALYZE: { name: 'create-spotiq-custom-analyze',
        tags: ['create', 'spotiq', 'custom-analyze'] },
    CREATE_CUSTOM_R_SPOTIQ_ANALYZE: { name: 'create-custom-r-spotiq-analyze',
        tags: ['create', 'custom-r', 'spotiq'] },
    CREATE_CUSTOM_R_SEARCH_PAGE: { name: 'create-custom-r-search-page',
        tags: ['create', 'custom-r', 'search-page'] },
    CREATE_R_TEMPLATE: { name: 'create-r-template', tags: ['create', 'r-template'] },
    LOAD_R_TEMPLATE: { name: 'load-r-template', tags: ['load', 'r-template'] },
    UPDATE_R_TEMPLATE: { name: 'update-r-template', tags: ['update', 'r-template'] },
    DELETE_R_TEMPLATE: { name: 'delete-r-template', tags: ['delete', 'r-template'] },
    INDEX_PAGE_KPI: { name: 'index-page-kpi', tags: [] },
    CLICK: { name: 'user-click', tags: [] },
    RIGHT_CLICK: { name: 'user-right-click', tags: [] },
    DOUBLE_CLICK: { name: 'user-double-click', tags: [] },
    ENLITE_RESULT_IMPRESSION: { name: 'enlite-result-impression', tags: [] },
    ENLITE_RESULT_FEEDBACK: { name: 'enlite-result-feedback', tags: [] },
    ENLITE_REFINEMENT: { name: 'enlite-refinement', tags: [] },
    ENLITE_TEACH: { name: 'enlite-teach', tags: [] },
    AUTOCOMPLETE_PROCESS_COMPLETIONS: { name: 'autocomplete-process-completions', tags: [] },
    AUTOCOMPLETE_SELECT_COMPLETION: { name: 'autocomplete-select-completion', tags: [] },
    EXPLORE_OPEN: { name: 'explore-open', tags: [] },
    EXPLORE_CLOSE: { name: 'explore-close', tags: [] },
    EXPLORE_FOLLOWUP_IMPRESSION: { name: 'explore-followup-impression', tags: [] },
    //Embrace actions
    LOAD_DATA_FROM_EXTERNAL_TABLE: { name: 'load-data-from-external-table', tags: [] },
    GET_LOGICAL_TABLE_SCHEDULE: { name: 'get-logical-table-status', tags: ['view'] },
    ADD_LOGICAL_TABLE_SCHEDULE: { name: 'add-logical-table-status', tags: ['view'] },
    // Embrace table sync and schedule actions
    EMBRACE_TABLE_SYNC_DETAILS: { name: 'embrace-table-sync-details', tags: [] },
    SYNC_TABLE: { name: 'sync-table', tags: [] },
    EMBRACE_BULK_SYNC_TABLE: { name: 'embrace-embrace-bulk-sync-table', tags: [] },
    EMBRACE_UNSYNC_TABLE: { name: 'embrace-unsync-table', tags: [] },
    EMBRACE_SCHEDULE_TABLE: { name: 'embrace-schedule-table', tags: [] },
    EMBRACE_REMOVE_TABLE_SCHEDULE: { name: 'embrace-remove-table-schedule', tags: [] },
    EMBRACE_OPEN_SYNC_NOW_DIALOG: { name: 'embrace-open-sync-now-dialog', tags: [] },
    EMBRACE_OPEN_SCHEDULE_DIALOG: { name: 'embrace-open-schedule-dialog', tags: [] },
    EMBRACE_OPEN_UNSYNC_DIALOG: { name: 'embrace-open-unsync-dialog', tags: [] },
    // Embrace connection actions
    EMBRACE_ADD_NEW_CONNECTION: { name: 'embrace-add-new-connection', tags: [] },
    EMBRACE_ADD_NEW_CONNECTION_CTA: { name: 'embrace-add-new-connection-cta', tags: [] },
    EMBRACE_EDIT_CONNECTION: { name: 'embrace-edit-connection', tags: [] },
    EMBRACE_EDIT_CONNECTION_CTA: { name: 'embrace-edit-connection-cta', tags: [] },
    EMBRACE_DELETE_CONNECTION: { name: 'embrace-delete-connection', tags: [] },
    EMBRACE_OPEN_CONNECTION_TYPE_PAGE: { name: 'embrace-open-connection-type-page', tags: [] },
    EMBRACE_OPEN_CONNECTION_CREDENTIALS_PAGE: { name: 'embrace-open-connection-credentials-page', tags: [] },
    EMBRACE_OPEN_CONNECTION_METADATA_PAGE: { name: 'embrace-open-connection-metadata-page', tags: [] },
    // Embrace other actions
    DELETE_EMBRACE_TABLES: { name: 'delete-embrace-tables', tags: [] },
    EMBRACE_TOGGLE_LIVE_LOCAL: { name: 'embrace-toggle-live-local', tags: [] },
    // Cluster status service
    SEARCH_SUMMARY: { name: 'search-summary', tags: [] },
    SEARCH_DETAIL_TABLE: { name: 'search-detail-table', tags: ['table'] },
    SEARCH_DETAIL_NODE: { name: 'search-detail-node', tags: ['table'] },
    DATABASE_SUMMARY: { name: 'database-summary', tags: [] },
    DATABASE_DETAIL: { name: 'database-detail', tags: [] },
    CLUSTER_SUMMARY: { name: 'cluster-stats-summary', tags: [] },
    CLUSTER_DETAIL_INFO: { name: 'cluster-detail-info', tags: [] },
    CLUSTER_DETAIL_LOG: { name: 'cluster-detail-log', tags: [] },
    CLUSTER_DETAIL_SNAPSHOT: { name: 'cluster-detail-snapshot', tags: [] },
    ALERT_SUMMARY: { name: 'alert-summary', tags: [] },
    EVENT_SUMMARY: { name: 'event-summary', tags: [] },
    ALERTS_DETAILS_ALERTS: { name: 'alerts-details-alerts', tags: [] },
    ALERTS_DETAILS_EVENTS: { name: 'alerts-details-events', tags: [] },
    VALIDATE_TRANSFORMATION_EXPRESSION: { name: 'validate-transformation-expression', tags: [] },
    DATASOURCE_CONN_OBJS_MISMATCH: { name: 'datasource-conn-objs-mismatch', tags: [] },
    UPDATE_EXPOSED_PREFERENCES: { name: 'update-exposed-preferences', tags: [] },
    UPDATE_CUSTOM_STYLE_CONFIG: { name: 'update-custom-style-config', tags: [] },
    CREATE_ENLITE_MAPPING: { name: 'create-enlite-mapping', tags: [] },
    // Ask an expert actions
    CREATE_ASK_EXPERT_REQUEST: { name: 'create-ask-expert-request', tags: [] },
    RESOLVE_ASK_EXPERT_REQUEST: { name: 'resolve-ask-expert-request', tags: [] },
    OPEN_REQUESTED_ANSWER_BY_EMAIL: { name: 'open-requested-answer-by-email', tags: [] },
    OPEN_RESOLVED_ANSWER_BY_EMAIL: { name: 'open-resolved-answer-by-email', tags: [] },
    //Send Email Action
    EMAIL_SENT_SUCCESSFULLY: { name: 'send-email-success', tags: [] },
    EMAIL_SENT_FAILURE: { name: 'send-email-failure', tags: [] },
    //Add Email
    ADD_EMAIL: { name: 'add-email', tags: [] },
    UPDATE_EMAIL: { name: 'update-email', tags: [] },
    //Enable SearchIQ columns
    ENABLE_SEARCHIQ_COLUMNS: { name: 'enable-searchiq-columns', tags: [] },
    //Onboarding actions
    ONBOARDING_FAILED: { name: 'onboarding-error', tags: [] },
    ONBOARDING_HOME: { name: 'onboarding-home', tags: [] },
    ONBOARDING_DATASOURCE: { name: 'onboarding-datasource', tags: [] },
    ONBOARDING_PINBOARDS_LIST: { name: 'onboarding-pinboards-list', tags: [] },
    ONBOARDING_EXPLORE_PINBOARD: { name: 'onboarding-explore-pinboard', tags: [] },
    ONBOARDING_EXITED: { name: 'onboarding-EXITED', tags: [] }
};
/**
 * @param {userActionTypeEnum}  userActionType
 * @param {Object}              params
 * @param {Array.<String>}      params.messageParams
 */
class UserAction {
    constructor(userActionType, params) {
        this.name = userActionTypes[userActionType].name;
        this.tags = userActionTypes[userActionType].tags;
        this.type = userActionType;
        if (!!params) {
            this.messageParams = params.messageParams;
            this.tags = _.union([this.tags, params.messageParams]);
        }
    }
}
let userActionTypeEnum = {};
//TODO(Rahul): These properties can be moved to type field in UserAction
Object.keys(userActionTypes).forEach(function (key) {
    UserAction[key] = key;
    userActionTypeEnum[key] = key;
});
Provide('UserAction')(UserAction);

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Ashish Shubham (ashish.shubham@thoughtspot.com)
 *
 * @fileoverview Service to deal with action handling
 *
 **/
let userActionsToActionsMap = {};
userActionsToActionsMap[userActionTypeEnum.FETCH_WORKSHEET_DATA] = {
    10005: function (name, id, type) {
        let handlers = {};
        handlers[jsonConstants_1.metadataType.subType.WORKSHEET] = navService.goToWorksheet;
        handlers[jsonConstants_1.metadataType.subType.VIEW] = navService.goToView;
        handlers[jsonConstants_1.metadataType.subType.SYSTEM_TABLE] = navService.goToRLS;
        return {
            message: stringUtil_1(strings.alert.recoveryMessages.RECOVER_OBJECT, name),
            handler: function () {
                handlers[type](id);
            }
        };
    }
};
userActionsToActionsMap[userActionTypeEnum.ADD_VIZ_TO_PINBOARD] = {
    SUCCESS: function (name, id) {
        return {
            message: name,
            link: navService.getPathToPinboard(id),
            handler: function () {
                navService.goToPinboard(id);
            }
        };
    }
};
function getFailureAction(userActionType, errorCode) {
    errorCode = errorCode || 'FAILURE';
    if (!!userActionsToActionsMap[userActionType] &&
        userActionsToActionsMap[userActionType][errorCode]) {
        return userActionsToActionsMap[userActionType][errorCode];
    }
}
function getSuccessAction(userActionType) {
    if (!!userActionsToActionsMap[userActionType] &&
        userActionsToActionsMap[userActionType].SUCCESS) {
        return userActionsToActionsMap[userActionType].SUCCESS;
    }
}
Provide('actionService')({
    getFailureAction,
    getSuccessAction
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2018
 * Author: Joy Dutta (joy@thoughtspot.com)
 * Author: Ajay Guleria (ajay@thoughtspot.com)
 *
 * @fileoverview Alert enums
 *      - messages moved to strings.po
 */
const alertConstants = {
    messageType: {
        COUNTDOWN: 'countdown'
    },
    type: {
        INFO: 'info',
        PROBLEM: 'problem',
        ERROR: 'error',
        SUCCESS: 'success'
    },
    documentType: {
        ANSWER: 'answer',
        WORKSHEET: 'worksheet',
        PINBOARD: 'pinboard'
    },
    httpStatus: {
        PROXY_ERROR: 300,
        BAD_CLIENT_REQUEST: 400,
        NOT_LOGGED_IN: 401,
        NOT_AUTHORIZED: 403,
        NOT_FOUND: 404,
        SERVER_ERROR: 500,
        LAST_ERROR: 600
    },
    errorCause: {
        NONE: 0,
        // Both http and non-http
        NOT_AUTHORIZED: 1,
        // HTTP Errors
        BAD_CLIENT_REQUEST: 2,
        NOT_FOUND: 3,
        TIMED_OUT: 4,
        SERVER_ERROR: 5,
        NO_DATA: 6,
        NETWORK_ERROR: 7,
        RESOURCE_EXCEEDED: 8,
        REQUEST_CANCELLED: 9,
        PROXY_ERROR: 10,
        // Non-HTTP Errors i.e. failed after or before an http call
        INCOMPLETE_DATA: 11,
        INVALID_FORMAT: 12,
        TOOK_TOO_LONG: 13,
        INVALID_VIZ_TYPE: 14,
        UNSUPPORTED_DATA: 15,
        UKNOWN: 16 // No cause triaged
    }
};
alertConstants.messageCodeToType = {
    0: alertConstants.type.SUCCESS,
    1: alertConstants.type.PROBLEM,
    2: alertConstants.type.ERROR,
    3: alertConstants.type.INFO
};
alertConstants.errorCauseKey = function (cause) {
    return Object.keys(alertConstants.errorCause)[cause];
};
Provide('alertConstants')(alertConstants);

var localforage = createCommonjsModule(function (module, exports) {
/*!
    localForage -- Offline Storage, Improved
    Version 1.7.3
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
},{}],2:[function(_dereq_,module,exports){
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
},{"2":2}],4:[function(_dereq_,module,exports){

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support (#5572)
        // since Safari 10.1 shipped with fetch, we can use that to detect it
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback retuns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});
});

/*
 * Resolves a store created in versionchange transaction
 * @param {localforage} localforageInstance
 * @param {callback function} action - action to perform on store
 * HACK: callback is used instead of Promise because Firefox & Safari destroy
 *       transactions that are passed through promise
 * @param {callback function} finished - called after action is preformed
 * @return {Promise} {
 *  store - store's indexes can be modified
 *  request - version update connection
 *  dbInfo - container with indexedDb config
 *  newVersion - current version of indexedDb
 *  oldVersion - previous version of indexedDb
 * }
*/
function _upgradeStore(localforageInstance, action, finished) {
    return localforageInstance.ready().then(function () {
        var dbInfo = localforageInstance._dbInfo;
        if (!(dbInfo.db instanceof IDBDatabase)) {
            return finished(new Error('Driver ' + localforageInstance.driver() + ' does not support indexing'));
        }

        dbInfo.db.close();
        var request = getIDB().open(dbInfo.name, dbInfo.db.version + 1);

        request.onupgradeneeded = function (_ref) {
            var newVersion = _ref.newVersion,
                oldVersion = _ref.oldVersion;

            dbInfo.db = request.result;
            var store = request.transaction.objectStore(dbInfo.storeName);

            action({ store: store, dbInfo: dbInfo, newVersion: newVersion, oldVersion: oldVersion });
        };

        request.onerror = function (e) {
            e.preventDefault();
            finished(request.error);
        };

        request.onsuccess = function () {
            return finished();
        };
    });
}

function _getIndex(localforageInstance, indexName) {
    var dbInfo = localforageInstance._dbInfo;
    var storeName = dbInfo.storeName;
    return dbInfo.db.transaction(storeName, 'readonly').objectStore(storeName).index(indexName);
}

function _executePromiseOrCallback(promise, callback) {
    if (typeof callback === 'function') {
        var resolve = function resolve(result) {
            return callback(null, result);
        };
        var reject = function reject(error) {
            return callback(error);
        };

        return promise(resolve, reject);
    }

    return new Promise(promise);
}

function _resolveParams(options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = undefined;
    }

    return { options: options, callback: callback };
}

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
        throw new Error("indexedDb not supported by browser");
    } catch (e) {
        throw e;
    }
}

function handleMethodCall(localforageInstance, methodName, args) {
    return localforageInstance.ready().then(function () {
        var promise = localforageInstance._baseMethods[methodName].apply(localforageInstance, args);
        return promise;
    });
}

// wraps the localForage methods of the WrappedLibraryMethods array and
// allows you to execute code before & after their invocation
function wireUpMethods(localforageInstance) {
    var WrappedLibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'];

    function wireUpMethod(localforageInstance, methodName) {
        localforageInstance._baseMethods = localforageInstance._baseMethods || {};
        localforageInstance._baseMethods[methodName] = localforageInstance[methodName];
        localforageInstance[methodName] = function () {
            return handleMethodCall(this, methodName, arguments);
        };
    }

    for (var i = 0, len = WrappedLibraryMethods.length; i < len; i++) {
        var methodName = WrappedLibraryMethods[i];
        wireUpMethod(localforageInstance, methodName);
    }
}

// place your plugin initialization logic here
// useful in case that you need to preserve a state
function setup(localforageInstance) {
    if (!localforageInstance._pluginPrivateVariables) {
        localforageInstance._pluginPrivateVariables = {
            listOfImportantThings: [],
            callCount: 0
        };

        // in case you need to observe the invocation of some methods
        wireUpMethods(localforageInstance);
    }
}

/*
 * Creates index
 * @param {String} indexName
 * @param {String} keyPath, indexDb key path, keys separated with dot
 * @param {Object} options, indexDb index creation options
 * @param {Function<err | index>} callback
 * @return {Promise<index>} resolves with new index, rejects if index is present
*/
function createIndex(indexName, keyPath, options, callback) {
    var _resolveParams2 = _resolveParams(options, callback);

    options = _resolveParams2.options;
    callback = _resolveParams2.callback;

    var localforageInstance = this;
    setup(localforageInstance);

    return _executePromiseOrCallback(function (resolve, reject) {
        _upgradeStore(localforageInstance, function (_ref) {
            var store = _ref.store,
                dbInfo = _ref.dbInfo,
                newVersion = _ref.newVersion,
                oldVersion = _ref.oldVersion;

            if (store.indexNames.contains(indexName)) {
                return reject(new Error('The database "' + dbInfo.name + '" has been upgraded from version ' + oldVersion + ' to version ' + newVersion + ', but the index "' + indexName + '" in the storage "' + dbInfo.storeName + '" already exists.'));
            }

            store.createIndex(indexName, keyPath, options || {});
        }, function (err) {
            if (err) return reject(err);

            resolve(_getIndex(localforageInstance, indexName));
        }).catch(function (err) {
            reject(err);
        });
    }, callback);
}

/*
 * Gets index
 * @param {String} indexName
 * @param {Function<err | index>} callback
 * @return {Promise<index>} resolves with an index, rejects if index is not found
*/
function getIndex(indexName, callback) {
    var localforageInstance = this;
    setup(localforageInstance);

    return _executePromiseOrCallback(function (resolve, reject) {
        localforageInstance.ready().then(function () {
            return resolve(_getIndex(localforageInstance, indexName));
        }).catch(reject);
    }, callback);
}

/*
 * Deletes then recreates index
 * Use to change index keyPath or options
 * @param {String} indexName
 * @param {String} keyPath, indexDb key path, keys separated with dot
 * @param {Object} options, indexDb index creation options
 * @param {Function<err | index>} callback
 * @return {Promise<index>} resolves with updated index, rejects if index is present
*/
function updateIndex(indexName, keyPath, options, callback) {
    var _resolveParams3 = _resolveParams(options, callback);

    options = _resolveParams3.options;
    callback = _resolveParams3.callback;

    var localforageInstance = this;
    setup(localforageInstance);

    return _executePromiseOrCallback(function (resolve, reject) {
        _upgradeStore(localforageInstance, function (_ref2) {
            var store = _ref2.store,
                dbInfo = _ref2.dbInfo,
                newVersion = _ref2.newVersion,
                oldVersion = _ref2.oldVersion;

            if (!store.indexNames.contains(indexName)) {
                return reject(new Error('The database "' + dbInfo.name + '" has been upgraded from version ' + oldVersion + ' to version ' + newVersion + ', but the index "' + indexName + '" in the storage "' + dbInfo.storeName + '" does not exists.'));
            }

            store.deleteIndex(indexName);
            store.createIndex(indexName, keyPath, options);
        }, function (err) {
            if (err) return reject(err);

            resolve(_getIndex(localforageInstance, indexName));
        }).catch(function (err) {
            reject(err);
        });
    }, callback);
}

/*
 * Deletes index
 * @param {String} indexName
 * @param {Function<err>} callback
 * @return {Promise} resolves when index is delted, rejects if index isn't present
*/
function deleteIndex(indexName, callback) {
    var localforageInstance = this;
    setup(localforageInstance);

    return _executePromiseOrCallback(function (resolve, reject) {
        _upgradeStore(localforageInstance, function (_ref3) {
            var store = _ref3.store,
                dbInfo = _ref3.dbInfo,
                newVersion = _ref3.newVersion,
                oldVersion = _ref3.oldVersion;

            if (!store.indexNames.contains(indexName)) {
                return reject(new Error('The database "' + dbInfo.name + '" has been upgraded from version ' + oldVersion + ' to version ' + newVersion + ', but the index "' + indexName + '" in the storage "' + dbInfo.storeName + '" does not exists.'));
            }

            store.deleteIndex(indexName);
        }, function (err) {
            if (err) return reject(err);

            resolve();
        }).catch(function (err) {
            reject(err);
        });
    }, callback);
}

// add your plugin method to every localForage instance
function extendPrototype(localforage) {
    var localforagePrototype = Object.getPrototypeOf(localforage);
    if (localforagePrototype) {
        localforagePrototype.createIndex = createIndex;
        localforagePrototype.getIndex = getIndex;
        localforagePrototype.updateIndex = updateIndex;
        localforagePrototype.deleteIndex = deleteIndex;
    }
    return localforage;
}

var extendPrototypeResult = extendPrototype(localforage);

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
    return promise;
}

function removeItemsGeneric(keys, callback) {
    var localforageInstance = this;

    var itemPromises = [];
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        itemPromises.push(localforageInstance.removeItem(key));
    }

    var promise = Promise.all(itemPromises);

    executeCallback(promise, callback);
    return promise;
}

function removeItemsIndexedDB(keys, callback) {
    var localforageInstance = this;
    var promise = localforageInstance.ready().then(function () {
        return new Promise(function (resolve, reject) {
            var dbInfo = localforageInstance._dbInfo;
            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');
            var store = transaction.objectStore(dbInfo.storeName);
            var firstError;

            transaction.oncomplete = function () {
                resolve();
            };

            transaction.onabort = transaction.onerror = function () {
                if (!firstError) {
                    reject(transaction.error || 'Unknown error');
                }
            };

            function requestOnError(evt) {
                var request = evt.target || this;
                if (!firstError) {
                    firstError = request.error || request.transaction.error;
                    reject(firstError);
                }
            }

            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                if (typeof key !== 'string') {
                    console.warn(key + ' used as a key, but it is not a string.');
                    key = String(key);
                }
                var request = store.delete(key);
                request.onerror = requestOnError;
            }
        });
    });
    executeCallback(promise, callback);
    return promise;
}

function executeSqlAsync(transaction, sql, parameters) {
    return new Promise(function (resolve, reject) {
        transaction.executeSql(sql, parameters, function () {
            resolve();
        }, function (t, error) {
            reject(error);
        });
    });
}

function removeItemsWebsql(keys, callback) {
    var localforageInstance = this;
    var promise = localforageInstance.ready().then(function () {
        return new Promise(function (resolve, reject) {
            var dbInfo = localforageInstance._dbInfo;
            dbInfo.db.transaction(function (t) {
                var storeName = dbInfo.storeName;

                var itemPromises = [];
                for (var i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    if (typeof key !== 'string') {
                        console.warn(key + ' used as a key, but it is not a string.');
                        key = String(key);
                    }
                    itemPromises.push(executeSqlAsync(t, 'DELETE FROM ' + storeName + ' WHERE key = ?', [key]));
                }

                Promise.all(itemPromises).then(resolve, reject);
            }, function (sqlError) {
                reject(sqlError);
            });
        });
    });
    executeCallback(promise, callback);
    return promise;
}

function localforageRemoveItems() /*keys, callback*/{
    var localforageInstance = this;
    var currentDriver = localforageInstance.driver();

    if (currentDriver === localforageInstance.INDEXEDDB) {
        return removeItemsIndexedDB.apply(localforageInstance, arguments);
    } else if (currentDriver === localforageInstance.WEBSQL) {
        return removeItemsWebsql.apply(localforageInstance, arguments);
    } else {
        return removeItemsGeneric.apply(localforageInstance, arguments);
    }
}

function extendPrototype$1(localforage$$1) {
    var localforagePrototype = Object.getPrototypeOf(localforage$$1);
    if (localforagePrototype) {
        localforagePrototype.removeItems = localforageRemoveItems;
        localforagePrototype.removeItems.indexedDB = function () {
            return removeItemsIndexedDB.apply(this, arguments);
        };
        localforagePrototype.removeItems.websql = function () {
            return removeItemsWebsql.apply(this, arguments);
        };
        localforagePrototype.removeItems.generic = function () {
            return removeItemsGeneric.apply(this, arguments);
        };
    }
}

var extendPrototypeResult$1 = extendPrototype$1(localforage);

var _baseMethods = {};

var localforageMethods = ['_initStorage', 'clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'];

/**
 * Adds base methods that were not overrided
 * Puts overrided base methods to _baseMethods container
 * @param {LocalForage} lfInstance - instance to add methods to
 * @param {Object} driver - new driver object
 * @param {Object} baseDriver - driver to draw base methods from
 */
function _wireUpMethods(lfInstance, driver, baseDriver) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = localforageMethods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var method = _step.value;

            if (!driver.hasOwnProperty(method) || driver[method].prototype.dummy) {
                lfInstance[method] = baseDriver[method];
            } else {
                _baseMethods[method] = baseDriver[method];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

/**
 * Returns a base method. Can only be called after _wireUpMethods is complete
 * @param {String} method - method name
 * @return {Function} method
 */
function _getBaseMethod(method) {
    return _baseMethods[method];
}

/**
 * HACK: fills driver with empty functions
 * so that driver creation can be a sync process
 *
 * The problem is that LocalForage.prototype.getDriver is async
 * and base driver cannot be acquired in synchronous code
 * @param {Object} driver
 */
function _wireUpDummyMethods(driver) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = localforageMethods[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var method = _step2.value;

            if (!driver.hasOwnProperty(method)) {
                driver[method] = dummy;
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

/**
 * Returns length of an index
 * @param {IDBIndex} index
 * @param {function(err, result)} callback
 */
function _getIndexLength(index, callback) {
    var request = index.count();

    request.onsuccess = function () {
        return callback(null, request.result);
    };
    request.onerror = callback;
}

function dummy() {}
dummy.prototype.dummy = true;

var lruDriver = {
    _driver: 'lruStorage',
    _initStorage: function _initStorage(options) {
        var _this = this;

        this._lruIndex = options.lruIndex || 'lruIndex';
        this._cacheSize = options.cacheSize || 1000;
        this._lruKey = options.lruKey || 'ACCESS_TIME';

        return this.getDriver(this.INDEXEDDB).then(function (baseDriver) {
            return _wireUpMethods(_this, lruDriver, baseDriver);
        }).then(function () {
            return _getBaseMethod('_initStorage').call(_this, options);
        });
    },
    setItem: function setItem(key, value, callback) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
            var indexCb = function indexCb(err, index) {
                if (err) return reject(err);

                _limitCacheSize.call(_this2, index).then(function () {
                    return _updateEntry.call(_this2, key, value, callback);
                }).then(resolve).catch(reject);
            };

            _this2.getIndex(_this2._lruIndex, function (err, index) {
                return _ensureIndex.call(_this2, err, index, indexCb);
            });
        });
    },
    getItem: function getItem(key, callback) {
        var _this3 = this;

        return _getBaseMethod('getItem').call(this, key).then(function (value) {
            return value === null ? null : _updateEntry.call(_this3, key, value.data, callback);
        });
    }
};

/**
 * Removes least recently accessed items that exceed cache size
 * @param {IDBIndex} index - access time index
 * @return {Promise}
 */
function _limitCacheSize(index) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
        return _getIndexLength(index, function (err, length) {
            if (err) return reject(err);

            if (length < _this4._cacheSize) return resolve();
            var request = index.getAllKeys();

            request.onerror = reject;
            request.onsuccess = function () {
                var keys = request.result;

                localforageRemoveItems.call(_this4, keys.slice(0, keys.length - _this4._cacheSize + 1)).then(function () {
                    return resolve();
                }, reject);
            };
        });
    });
}

/**
 * Creates index if it doesn't exist, updates index if it has wrong keypath
 * @param {Error} err - truthy if index was not found
 * @param {IDBIndex} index
 * @param {function(err, index)} callback
 */
function _ensureIndex(err, index, callback) {
    // HACK: index presence should be checked inside _initStorage function
    // but indexes can only be used after _initStorage

    // index does not exist
    if (err) return this.createIndex(this._lruIndex, this._lruKey, callback);

    // index has correct key
    if (index.keyPath === this._lruKey) return callback(null, index);

    // index has wrong key
    this.updateIndex(this._lruIndex, this._lruKey, callback);
}

/**
 * Updates entry's access time and data
 * @param {string} key - keypath of entry
 * @param {any} data - entry's new data
 * @param {function(err, data)} callback gets called with entry's data
 * @return {Promise<data>} resolves with entry's data
 */
function _updateEntry(key, data, callback) {
    var _callback;
    var updatedValue = { data: data };
    updatedValue[this._lruKey] = Date.now();

    if (typeof callback === 'function') {
        _callback = function _callback(err, entry) {
            return callback(err, entry.data);
        };
    }

    return _getBaseMethod('setItem').call(this, key, updatedValue, _callback).then(function (entry) {
        return entry.data;
    });
}

_wireUpDummyMethods(lruDriver);

var pFinally = (promise, onFinally) => {
	onFinally = onFinally || (() => {});

	return promise.then(
		val => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => val),
		err => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => {
			throw err;
		})
	);
};

class TimeoutError extends Error {
	constructor(message) {
		super(message);
		this.name = 'TimeoutError';
	}
}

const pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
	if (typeof milliseconds !== 'number' || milliseconds < 0) {
		throw new TypeError('Expected `milliseconds` to be a positive number');
	}

	const timer = setTimeout(() => {
		if (typeof fallback === 'function') {
			try {
				resolve(fallback());
			} catch (error) {
				reject(error);
			}

			return;
		}

		const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
		const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);

		if (typeof promise.cancel === 'function') {
			promise.cancel();
		}

		reject(timeoutError);
	}, milliseconds);

	// TODO: Use native `finally` keyword when targeting Node.js 10
	pFinally(
		// eslint-disable-next-line promise/prefer-await-to-then
		promise.then(resolve, reject),
		() => {
			clearTimeout(timer);
		}
	);
});

var pTimeout_1 = pTimeout;
// TODO: Remove this for the next major release
var default_1 = pTimeout;

var TimeoutError_1 = TimeoutError;
pTimeout_1.default = default_1;
pTimeout_1.TimeoutError = TimeoutError_1;

/**
 * Copyright: ThoughtSpot Inc. 2012-2018
 * Author: Rabi Shah (rabi.shah@thoughtspot.com)
 *         Utsav Kapoor (utsav.kapoor@thoughtspot.com)
 *
 * @fileoverview A utility for web storage.
 */
let $q = ngRequire('$q');
let logger = logger_3('web-storage');
const serializer = {
    /**
     * Return a JSON-serialized string representation of item
     * @param {number | boolean | string | object} item The encoded model data
     * @returns {string} A JSON-encoded string
     */
    serialize(item) {
        return JSON.stringify(item);
    },
    /**
     * Return JSON-parsed object representation of string
     * @param {number | boolean| string} data JSON-encoded string
     * @returns {object} The object result of parsing data
     */
    deserialize(data) {
        if (typeof data === 'number' || typeof data === 'boolean') {
            data = JSON.stringify(data);
        }
        if (!data) {
            return null;
        }
        try {
            return JSON.parse(data);
        }
        catch (error) {
            throw new Error('Unable to parse. ' + error);
        }
    }
};
class WebStorage {
    constructor(storageType) {
        this.storageType = storageType;
        this.supported = this.isStorageSupported(window, storageType);
        this.storage = this.supported && window[storageType];
    }
    getItem(key) {
        if (this.throwIfUnsupported(this.supported)) {
            if (!key) {
                return null;
            }
            return serializer.deserialize(this.storage.getItem(key));
        }
    }
    setItem(key, value) {
        if (this.throwIfUnsupported(this.supported)) {
            if (!key) {
                return;
            }
            this.storage.setItem(key, serializer.serialize(value));
        }
    }
    removeItem(key) {
        if (this.throwIfUnsupported(this.supported)) {
            if (!key) {
                return;
            }
            this.storage.removeItem(key);
        }
    }
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/
    isStorageSupported(window, storageType) {
        let _storage;
        const test = 'test';
        try {
            _storage = window[storageType];
            _storage.setItem(test, test);
            _storage.removeItem(test);
            return true;
        }
        catch (error) {
            logger.log('Webstorage of type ' + storageType + ' is not supported.', error);
            return false;
        }
    }
    throwIfUnsupported(supported) {
        if (!supported) {
            throw Error('Unable to remove item from ' + this.storageType);
        }
        return true;
    }
}
class IDBStorage {
    constructor(name, cacheSize = 10) {
        this.name = name;
        this.cacheSize = cacheSize;
        this.init(name, cacheSize);
    }
    setItem(key, value) {
        if (!this.localForage) {
            logger.error('Local Forage is not initialized');
            return;
        }
        if (!key) {
            return;
        }
        return this.localForage.setItem(key, serializer.serialize(value));
    }
    async getItem(key) {
        if (!this.localForage) {
            logger.error('Local Forage is not initialized');
            return Promise.reject();
        }
        if (!key) {
            return Promise.resolve();
        }
        let value = await pTimeout_1(this.localForage.getItem(key), IDBStorage.GET_ITEM_TIMEOUT_MS);
        return serializer.deserialize(value);
    }
    async reset() {
        await extendPrototypeResult.dropInstance();
        return this.init(this.name, this.cacheSize);
    }
    async init(name, cacheSize) {
        await extendPrototypeResult.defineDriver(lruDriver);
        this.localForage = extendPrototypeResult.createInstance({
            driver: 'lruStorage',
            cacheSize: cacheSize,
            name: name
        });
        this.localForage.ready();
    }
}
IDBStorage.GET_ITEM_TIMEOUT_MS = 2000;
const userGuid = getUserGuid();
const idbStorage = new IDBStorage(userGuid);
const sessionStore = new WebStorage('sessionStorage');
const localStore = new WebStorage('localStorage');
Provide('webStorage')({
    sessionStore,
    localStore,
    idbStorage
});

/**
 * Copyright: ThoughtSpot Inc. 2017.
 * Author: Piyush Goyal (piyush.goyal@thoughtspot.com)
 *
 * @fileoverview Util to maintain session info for events
 *
 * Notes:
 * Event sessions are defined to cut-off at a continuous 30 minute in-activity (industry standard).
 * For a running app, we refresh our timestamp every 5 minutes to track this 30 minute in-activity.
 * StartTimestamp is maintained to study study session length distributions.
 * Initialization is being done by calling getEventSessionId() in event-collector.ts :: init().
 *
 * Caveat:
 * Currently, If the app is running, but user generated no interactions, it is considered active.
 * Instead, to reflect activity by real interactions, we should call keepSessionAlive explicitly.
 */
//For 100 seconds fetch Session GUID from local cache (to avoid race among tabs)
let SESSION_FORCE_FETCH_DURATION = 10 * 1000;
//For 30 minutes keep current session alive
let SESSION_EXPIRE_DURATION = 30 * 60 * 1000;
//Update session life every 5 minutes since Update
let SESSION_UPDATE_DURATION = 5 * 60 * 1000;
// Tab GUID for current instance.
let tabGUID = jsUtil_1();
// Singleton session object for current browser instance.
let sessionProps = null;
// startTimestamp : Timestamp when a session is created.
// sessionGUID : Randomly assigned GUID for each session.
// lastAccessedTimestamp : Last time this session was accessed
// lastUpdateTimestamp : Last time this session was updated (to keep it alive)
function createSession(currentTimestamp) {
    sessionProps = {
        startTimestamp: currentTimestamp,
        sessionGUID: jsUtil_1(),
        lastAccessedTimestamp: currentTimestamp,
        lastUpdateTimestamp: currentTimestamp,
    };
    localStore.setItem('sessionProps', sessionProps);
}
// Logic ::
// If session object not present OR
// currentTimestamp <= (sessionProps.startTimestamp + SESSION_FORCE_FETCH_DURATION)
// --> fetch from store
// If no session in store or session existed but expired --> create
// Throttling: If currentTimestamp >= lastUpdateTimestamp + SESSION_UPDATE_DURATION --> update
function maintainSession() {
    let currentTimestamp = Date.now();
    // If sessionProps not present or sessionProps present and
    // startTimestamp of session is within force fetch period then
    // fetch the session from local store.
    if (!sessionProps || (sessionProps.startTimestamp &&
        (currentTimestamp <= (sessionProps.startTimestamp + SESSION_FORCE_FETCH_DURATION)))) {
        sessionProps = localStore.getItem('sessionProps');
    }
    // If session is still not present or session needs to be recreated due to
    // either expiry or missing attributes then create session object.
    if (!sessionProps || shouldRecreateSession(currentTimestamp)) {
        createSession(currentTimestamp);
    }
    // At this point the sessionProps and all its attributes cannot be null.
    sessionProps.lastAccessedTimestamp = currentTimestamp;
    // Throttling of session updates to store.
    if (currentTimestamp >= (sessionProps.lastUpdateTimestamp + SESSION_UPDATE_DURATION)) {
        sessionProps.lastUpdateTimestamp = currentTimestamp;
        localStore.setItem('sessionProps', sessionProps);
    }
}
// Session should be recreate due to expired OR unavailable properties.
function shouldRecreateSession(currentTimestamp) {
    return !sessionProps.sessionGUID || !sessionProps.startTimestamp ||
        !sessionProps.lastUpdateTimestamp || !sessionProps.lastAccessedTimestamp ||
        (currentTimestamp >= (sessionProps.lastAccessedTimestamp + SESSION_EXPIRE_DURATION));
}
// Exported function to get current session object.
function getEventSession() {
    maintainSession();
    return Object.assign({}, sessionProps, { tabGUID: tabGUID });
}

/**
 * Copyright: ThoughtSpot Inc. 2017.
 * Author: Piyush Goyal (piyush.goyal@thoughtspot.com)
 *
 * @fileoverview Util to push events for product usage metrics.
 */
// For e2e tests
window.eventList = [];
window.sessionProps = {};
/**
 * Flag to tell us if the service has been init so far.
 * @type {boolean}
 * @private
 */
let _isEventCollectorOn = false;
/**
 * Set of events that are queued up to be batch pushed onto the event service.
 * @type {Array}
 * @private
 */
let _eventBatch = [];
/**
 * Throttle Limits per Time per event type.
 */
let DEFAULT_THROTTLE_LIMIT = 600;
let THROTTLE_TIME = 60 * 60 * 1000;
let _throttleLimits = { 'default': DEFAULT_THROTTLE_LIMIT };
/**
 * Maintains internal info to provide limit counters for throttling.
 */
let _throttleInfoObj = {};
// leave 55 for Mixpanel default properties
const mixpanelNumPropsLimit = 200;
const mixpanelPropSizeLimit = 255;
/**
 * Update the throttling info object with moving time window as per token bucket algorithm.
 * @param {string} eventType
 */
function updateThrottling(eventType) {
    let curr_time = Date.now();
    let prev_incr_time = _throttleInfoObj[eventType].timestamp;
    let event_limit = _throttleLimits[eventType];
    let incremented_count = Math.min(((curr_time - prev_incr_time) * event_limit) / THROTTLE_TIME, event_limit);
    if (incremented_count > 0) {
        _throttleInfoObj[eventType].timestamp = curr_time;
        _throttleInfoObj[eventType].tokenCount += incremented_count;
    }
}
/**
 * Push a throttledCount for the given event.
 */
function sendThrottleEvent(throttledCount, eventType) {
    _eventBatch.push({ id: 'throttleEvent', props: {
            'id': eventType,
            'throttledCount': throttledCount
        } });
}
/**
 *
 * @param {string} eventType
 * @returns {boolean}
 */
function checkThrottle(eventType) {
    if (!(eventType in Object.keys(_throttleLimits))) {
        eventType = 'default';
    }
    updateThrottling(eventType);
    let curr_limit = _throttleInfoObj[eventType].tokenCount;
    if (curr_limit) {
        let throttleCount = _throttleInfoObj[eventType].throttleCount;
        if (throttleCount) {
            sendThrottleEvent(throttleCount, eventType);
            _throttleInfoObj[eventType].throttleCount = 0;
        }
        _throttleInfoObj[eventType].tokenCount--;
        return true;
    }
    else {
        _throttleInfoObj[eventType].throttleCount++;
        return false;
    }
}
// Check for Mixpanel property limit violations
// https://help.mixpanel.com/hc/en-us/articles/115004616466-Property-Limits
function checkPropertyLimits(name, eventProps = {}) {
    // Rule1: Number of props <= mixpanelNumPropsLimit
    if (Object.keys(eventProps).length > mixpanelNumPropsLimit) {
        throw new Error(stringUtil_1(strings.MIXPANEL_PROPS_LIMIT_ERROR_MESSAGE, {
            mixpanelNumPropsLimit: mixpanelNumPropsLimit,
            name: name
        }));
    }
    Object.keys(eventProps).forEach((key) => {
        let value = eventProps[key];
        // Rule2: Size of each prop < mixpanelPropSizeLimit
        if (_.isString(value) && (_.size(value) > mixpanelPropSizeLimit)) {
            throw new Error(stringUtil_1(strings.MIXPANEL_STRING_PROP_SIZE_LIMIT_ERROR_MESSAGE, {
                mixpanelPropSizeLimit: mixpanelPropSizeLimit,
                name: name,
                key: key
            }));
        }
        // Rule3: For array props, size of each value < mixpanelPropSizeLimit
        if (_.isArray(value)) {
            for (let index in value) {
                let arrVal = value[index];
                if (_.isString(arrVal) && (_.size(arrVal) > mixpanelPropSizeLimit)) {
                    throw new Error(stringUtil_1(strings.MIXPANEL_ARRAY_PROP_SIZE_LIMIT_ERROR_MESSAGE, {
                        mixpanelPropSizeLimit: mixpanelPropSizeLimit,
                        name: name,
                        key: key,
                        index: index
                    }));
                }
            }
        }
    });
}
// Stringify nested JSON as Mixpanel does not support json properties
function stringifyJsonProps(eventProps = {}) {
    for (let prop in eventProps) {
        let value = eventProps[prop];
        if (_.isObject(value) && (!Array.isArray(value))) {
            eventProps[prop] = JSON.stringify(value);
        }
    }
    return eventProps;
}
/**
 * Push the event to actual collector
 */
function pushEvent(name, props) {
    props = stringifyJsonProps(props);
    // Assign session props explicitly to avoid posting stale session props
    let sessionGUIDprops = getEventSession();
    Object.assign(props, sessionGUIDprops, getSessionProperties(), updateEventChangableSessionProperties());
    if (flags.getValue(flags.BLINK_FLAGS.e2eTest.name) === true || isEventCollectorEnabled()) {
        // Check Property Limits
        checkPropertyLimits(name, props);
        // Push to window queue if e2eTest or manualTest
        window.eventList.push({ userAction: name, eventProps: props });
    }
    // Push to real service
    if (_isEventCollectorOn) {
        if (checkThrottle(name)) {
            _eventBatch.push({ id: name, props: props });
        }
        if (Object.keys(_eventBatch).length
            >= blinkConstants_1.eventCollector.EVENT_BATCH_THRESHOLD) {
            uploadEventBatch(_eventBatch);
            _eventBatch.length = 0;
        }
    }
}
/**
 * collects the event (with key-value property map) to periodically push to the event service.
 * @param eventId
 * @param eventProps
 * @param flushFlow
 */
function collectEvent(userAction, eventProps = {}) {
    let eventProperties = updatePropertiesWithEventName(eventProps, userAction.name);
    if (isEventCollectorEnabled()) {
        updateMixPanelProperty(PeopleSetPropertiesEnum.lastPageVisited, navService.getPath());
    }
    pushEvent(String(eventProps.name), eventProperties);
}
/**
 * Collects the event for a workflow along with the properties logged by its pushProperty()
 * @param {PropertyMap} workflowProps
 */
function collectWorkflowEvent(workflowProps) {
    let eventProperties = updatePropertiesWithEventName(workflowProps, workflowProps.name);
    pushEvent(String(workflowProps.name), eventProperties);
}
/**
 * Flushes any remaining events out to the backend.
 */
function flushEvents() {
    if (_eventBatch.length && _isEventCollectorOn) {
        uploadEventBatch(_eventBatch);
        _eventBatch.length = 0;
    }
}
function isEventCollectorEnabled() {
    return _isEventCollectorOn;
}
Provide('eventCollector')({
    collectEvent,
    flushEvents
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview This class represents trace object wrapping a single network
 * call made by blink.
 */
let jsUtil$1 = ngRequire('jsUtil');

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Exports public types from blink defined in Proto
 */
let UserWorkflowActionTypes = blink.workflow.UserWorkflowActionType.E;
let UserWorkflowActionNames = _.invert(blink.workflow.UserWorkflowActionType.E);
Provide('blinkTypes')({
    UserWorkflowActionTypes
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview This class represents the top level user worfklow trace.
 */

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Service to communicate to trace vault.
 *
 */
let $http = ngRequire('$http');
let $q$1 = ngRequire('$q');

/**
 * Copyright: ThoughtSpot Inc. 2012-2017
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview This class represents trace object for client tasks.
 * Eg: Visualization primary render cycle, secondary render cycle.
 * In the LOAD_PINBOARD trace it would be helpful to view in more
 * detail what client CPU cycles are being spent on in the workflow.
 * Creating such traces will allow us to see how long client took to do
 * a particular task.
 * This will be extended to be analysed on real customer data to identify
 * 3 things.
 * - For perf debugging we get data on where the time went.
 * - Aggregate stats can be monitored and used for release quality.
 * - Aggregate stats can also be used to decide where to focus efforts
 * NOTE: In current design blink builds a single workflow level BlinkTrace
 * which has one level of hierarchy eg children for network traces,
 * similarly instances of this class will be children to the singleton workflow.
 * The implication of this is we wont be able to view traces in hierarchical form
 * such as stace trace. But this still allows us to achieve our goals.
 */
let jsUtil$2 = ngRequire('jsUtil');

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview This class provides end user workflow management in the app.
 *
 * The goal here to to capture active user workflow and track all the activity
 * in the app for the workflow.
 */
let jsUtil$3 = ngRequire('jsUtil');
let Logger = ngRequire('Logger');
var UserWorkflowStates;
(function (UserWorkflowStates) {
    UserWorkflowStates[UserWorkflowStates["IDLE"] = 0] = "IDLE";
    UserWorkflowStates[UserWorkflowStates["ACTIVE"] = 1] = "ACTIVE";
})(UserWorkflowStates || (UserWorkflowStates = {}));

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Service that stores completed workflows, and takes care of pushing
 * out traces to server periodically.
 */
// Tracks all the traces that are complete and ready to be pushed
// out to TraceVault.
let completedTraces = [];
let completedWorkflowProps = [];
function addWorkflow(workflow) {
    let { workflowTrace, workflowProps } = workflow;
    Object.assign(workflowProps, workflowTrace.getProperties());
    completedTraces.push(workflowTrace);
    completedWorkflowProps.push(workflowProps);
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2019
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Service exposing workflow management APIs.
 */
let _logger$1 = logger_3('workflow-management-service');
let inProgressWorkflowMap = new Map();
let workflowManager = null;
let noFlush = false;
const onWorkflowComplete = new Subject.Subject();
const addTraceIfValid = (workflow) => {
    if (!!workflow) {
        addWorkflow(workflow);
        onWorkflowComplete.next(workflow.workflowTrace);
    }
};
function getNewNetworkTrace() {
    return workflowManager.getNewNetworkTrace();
}
function getNewClientTrace(name) {
    return workflowManager.getNewClientTrace(name);
}
function startWorkflow(action, params) {
    setWorkflowProps({ terminationType: _.get(params, 'terminationType', '') });
    noFlush = _.get(params, 'noFlush', false);
    workflowManager.startSyncWorkflow(action);
    setWorkflowProps(_.get(params, 'payload', {}));
    inProgressWorkflowMap.set(action, true);
}
function startMissingWorkflow(action) {
    if (!getCurrentWorkflowId()) {
        startWorkflow(action);
        setWorkflowProps({ 'missingWorkflow': 1 });
        inProgressWorkflowMap.set(action, true);
    }
}
function endWorkflow(action, params) {
    // If this is not the target workflow, don't do anything
    if (workflowManager.getInProgressWorkflowUserAction() !== action) {
        return;
    }
    setWorkflowProps({ terminationType: params && params.terminationType || '' });
    setWorkflowProps(_.get(params, 'payload', {}));
    noFlush = _.get(params, 'noFlush', noFlush);
    // Must handle noFlush in manager instead of service, so as to chain lastWorkflowProperties.
    addTraceIfValid(workflowManager.endSyncWorkflow(action, noFlush));
    inProgressWorkflowMap.delete(action);
}
function terminateWorkflow() {
    addTraceIfValid(workflowManager.terminateWorkflow());
}
function discardWorkflow(action) {
    addTraceIfValid(workflowManager.discardWorkflow(action));
}
function getCurrentWorkflowId() {
    return workflowManager.getWorkflowId();
}
function flushCurrentTraceToServer() {
    return workflowManager.flushWorkflow();
}
function setWorkflowProps(props) {
    workflowManager.setProperties(props);
}
function catchMissingWorkflow(props) {
    if (!getCurrentWorkflowId()) {
        _logger$1.warn('missing-workflow  ::  ', props);
        props.name = 'missing-workflow';
        collectWorkflowEvent(props);
    }
}
function isWorkFlowInProgress(action) {
    return inProgressWorkflowMap.has(action);
}
function wrapCbWithStartWorkflow(cb, workflowAction, params) {
    return (...args) => {
        startWorkflow(workflowAction, params);
        return cb(...args);
    };
}
function wrapCbWithEndWorkflow(cb, workflowAction, params) {
    return (...args) => {
        endWorkflow(workflowAction, params);
        return cb(...args);
    };
}
function wrapCbWithEvent(cb, userAction, eventProps) {
    return (...args) => {
        collectEvent(userAction, eventProps);
        return cb(...args);
    };
}
Provide('workflowManagementService')({
    getNewNetworkTrace,
    getNewClientTrace,
    startWorkflow,
    startMissingWorkflow,
    endWorkflow,
    getCurrentWorkflowId,
    terminateWorkflow,
    flushCurrentTraceToServer,
    discardWorkflow,
    setWorkflowProps,
    catchMissingWorkflow,
    isWorkFlowInProgress,
    wrapCbWithStartWorkflow,
    wrapCbWithEndWorkflow,
    wrapCbWithEvent
});

/**
 * Copyright: ThoughtSpot Inc. 2018
 * Author: Ajay Guleria (ajay@thoughtspot.com)
 *
 * This utility provides helper functions to log workflow events
 *
 */
let $q$2 = ngRequire('$q');
let actionService = ngRequire('actionService');
let messageService = ngRequire('messageService');
let UserAction$1 = ngRequire('UserAction');
let _logger$2 = logger_3('event-log-helper');
function getWorkflowParams() {
    let currentWorkflowId = getCurrentWorkflowId();
    let flushClientDebugTracePromise = !!currentWorkflowId
        ? flushCurrentTraceToServer()
        : $q$2.when();
    return {
        currentWorkflowId: currentWorkflowId,
        flushClientDebugTracePromise: flushClientDebugTracePromise
    };
}
function logUserActionFailureEvent(userAction, response, params) {
    let failureEventProps = getFailureEventProps(userAction, response, params);
    let failureEvent = new UserAction$1(UserAction$1.FAILURE_ALERT);
    collectEvent(failureEvent, failureEventProps);
    setWorkflowProps(failureEventProps);
    terminateWorkflow();
}
Provide('eventLogHelperUtil')({
    getWorkflowParams,
    logUserActionFailureEvent,
});

/**
 * Copyright: ThoughtSpot Inc. 2018
 * Author: Ajay Guleria (ajay@thoughtspot.com)
 *
 * This utility provides alert message formatting helper functions
 *
 * Given UserAction, response and params, it provides alert message that is suitable
 * to pass to an alert component (local or global). It also provides functions for
 * cases where UserAction is not available.
 */
let messageService$1 = ngRequire('messageService');
let _logger$3 = logger_3('alert-message-util');
let responseGetterMap = {};
responseGetterMap[alertConstants.errorCause.NOT_AUTHORIZED]
    = 'alert.errorCause.NOT_AUTHORIZED';
responseGetterMap[alertConstants.errorCause.BAD_CLIENT_REQUEST]
    = 'alert.errorCause.BAD_CLIENT_REQUEST';
responseGetterMap[alertConstants.errorCause.NOT_FOUND]
    = 'alert.errorCause.NOT_FOUND';
responseGetterMap[alertConstants.errorCause.TIMED_OUT]
    = 'alert.errorCause.TIMED_OUT';
responseGetterMap[alertConstants.errorCause.SERVER_ERROR]
    = 'alert.errorCause.SERVER_ERROR';
responseGetterMap[alertConstants.errorCause.NO_DATA]
    = 'alert.callosumErrorMessages.NO_DATA';
responseGetterMap[alertConstants.errorCause.NETWORK_ERROR]
    = 'alert.errorCause.NETWORK_ERROR';
responseGetterMap[alertConstants.errorCause.RESOURCE_EXCEEDED]
    = 'alert.callosumErrorMessages.RESOURCE_EXCEEDED';
responseGetterMap[alertConstants.errorCause.REQUEST_CANCELLED]
    = 'alert.errorCause.REQUEST_CANCELLED';
responseGetterMap[alertConstants.errorCause.PROXY_ERROR]
    = 'alert.errorCause.PROXY_ERROR';
responseGetterMap[alertConstants.errorCause.INCOMPLETE_DATA]
    = 'alert.errorCause.INCOMPLETE_DATA';
responseGetterMap[alertConstants.errorCause.INVALID_FORMAT]
    = 'alert.errorCause.INVALID_FORMAT';
responseGetterMap[alertConstants.errorCause.TOOK_TOO_LONG]
    = 'It_took_too_long';
responseGetterMap[alertConstants.errorCause.INVALID_VIZ_TYPE]
    = 'alert.INVALID_VIZ_TYPE';
responseGetterMap[alertConstants.errorCause.UNKNOWN]
    = 'alert.errorCause.UNKNOWN';
function errorCauseToMessage(cause) {
    return _.get(strings, responseGetterMap[cause]);
}
function getMessageStringForErrorCode(code) {
    let messageObj = strings.msg_code[code];
    return (messageObj) ? messageObj.summary : '';
}
function getActionForAlert(params, action) {
    if (!!action) {
        return params.action || action.apply(null, params.actionParams);
    }
    return params.action;
}
function substituteVariables(message, params) {
    if (!message) {
        return;
    }
    if (params && params.substitutions) {
        message = stringUtil_1(message, params.substitutions);
    }
    let emailAddress = getCustomerAdminEmail() || blinkConstants_1.defaultAdminEmail;
    let productName = blinkConstants_1.defaultProductName;
    return stringUtil_1(message, {
        adminEmail: emailAddress,
        productName: productName
    });
}
function _getFailureAttributes(protoMessage, response, params) {
    response = response || {};
    params = params || {};
    let type = response.type || alertConstants.messageCodeToType[protoMessage.severity];
    let blinkCodeNumber = protoMessage.code;
    let blinkErrorCode = `TS-{util.zeroFill(blinkCodeNumber, 5)}`;
    let actionString = strings.msg_code[blinkCodeNumber].action;
    // serverCause is the original server response. At this point, params still correspond
    // to this message. And this may be different than blinkCodeNumber
    let serverCause;
    if (response.data && response.data.code) {
        let errCode = response.data.code;
        if (!strings.msg_code[errCode]) {
            _logger$3.warn('No message string for failure code ', errCode);
        }
        else {
            // Blink generated error codes are not server codes
            if (_.values(messageService$1.blinkGeneratedErrors).indexOf(errCode) === -1) {
                serverCause = strings.msg_code[errCode].summary;
            }
            actionString = strings.msg_code[errCode].action;
        }
    }
    let summaryMessage = strings.msg_code[blinkCodeNumber].summary;
    let detailMessage = strings.msg_code[blinkCodeNumber].detail;
    summaryMessage = substituteVariables(summaryMessage, params);
    detailMessage = substituteVariables(detailMessage, params);
    serverCause = substituteVariables(serverCause, params);
    let errorCauseKey = 'NONE';
    let errorCauseMsg;
    if (protoMessage.appendFailureCause) {
        // We will use the serverCause if it can be published
        errorCauseMsg = serverCause;
        if (response.errorCause) {
            errorCauseKey = alertConstants.errorCauseKey(response.errorCause);
            if (!errorCauseMsg) {
                errorCauseMsg = errorCauseToMessage(response.errorCause);
            }
        }
    }
    let detailMessageObj = {
        what: summaryMessage,
        why: errorCauseMsg,
        action: actionString
    };
    summaryMessage = summaryMessage || '';
    errorCauseMsg = errorCauseMsg || '';
    actionString = actionString || '';
    summaryMessage = `${summaryMessage} ${errorCauseMsg} ${actionString}`;
    return {
        blinkCodeNumber: blinkCodeNumber,
        blinkErrorCode: blinkErrorCode,
        summaryMessage: summaryMessage,
        detailMessage: detailMessage,
        detailMessageObj: detailMessageObj,
        traceId: response.traceId,
        incidentId: response.incidentId,
        errorCauseKey: errorCauseKey,
        serverCause: serverCause,
        type: type
    };
}
/**
 *
 * @param userAction
 * @param response
 * @param params
 * @returns {{message, type, customData, customUrl, allowClose, action}|*}
 */
function getDetailedAlertContent(protoMessage, response, params) {
    let attribs = _getFailureAttributes(protoMessage, response, params);
    let customUrl = params && params.customUrl;
    let customData = (params && params.customData) || {};
    if (!!attribs.detailMessage) {
        customData.detailMessage = attribs.detailMessage;
    }
    let nameValuePairs = [];
    nameValuePairs.push({
        name: strings.apiErrorMessage.errorCode,
        value: attribs.blinkErrorCode
    });
    if (!!attribs.incidentId) {
        nameValuePairs.push({
            name: strings.apiErrorMessage.incidentId,
            value: attribs.incidentId
        });
    }
    customData.leftColumnPairs = [];
    customData.rightColumnPairs = [];
    for (let i = 0; i < nameValuePairs.length; i++) {
        if (i % 2) {
            customData.rightColumnPairs.push(nameValuePairs[i]);
        }
        else {
            customData.leftColumnPairs.push(nameValuePairs[i]);
        }
    }
    customData.traceId = attribs.traceId;
    if (!!attribs.traceId && !params.hideReportProblemLink) {
        let wfParams = getWorkflowParams();
        customData.flushClientDebugTracePromise = wfParams.flushClientDebugTracePromise;
        customData.workFlowId = wfParams.currentWorkflowId || attribs.traceId;
    }
    return {
        message: attribs.summaryMessage,
        type: attribs.type,
        errorCause: response.errorCause,
        action: params && params.action,
        allowClose: true,
        hideReportButton: params && params.hideReportProblemLink,
        details: {
            details: attribs.detailMessageObj,
            customData: customData,
            customUrl: customUrl,
            serverCause: attribs.serverCause
        }
    };
}
function getDataNotSupportedError(message) {
    return {
        message: message,
        type: alertConstants.type.ERROR,
        errorCause: alertConstants.errorCause.UNSUPPORTED_DATA,
        allowClose: true,
        hideReportButton: true,
        details: {
            details: message
        }
    };
}
/**
 *
 * @param userAction
 * @param response
 * @param params
 * @returns {{message, type, customData, customUrl, allowClose, action}|*}
 */
function getUserActionFailureAlertContent(userAction, response, params) {
    if (response.isIgnored) {
        return;
    }
    params = params || {};
    // If reporting problem itself fails, don't show link to report that.
    if (userAction.type === userActionTypeEnum['REPORT_PROBLEM']) {
        params.hideReportProblemLink = true;
    }
    let backendCode = params.code || (response.data && response.data.code);
    let protoMessage = messageService$1.getFailureMessage(userAction.type, backendCode, response.errorCause);
    let action = getFailureAction(userAction.type, protoMessage.code);
    if (!action && backendCode) {
        action = getFailureAction(userAction.type, backendCode);
    }
    params.action = action && getActionForAlert(params, action);
    return getDetailedAlertContent(protoMessage, response, params);
}
/**
 * @param userAction    The userAction for which the alert is to be shown
 * @param response      The callosum response object
 * @param params
 */
function getUserActionSuccessAlertContent(userAction, response, params) {
    params = params || {};
    let protoMessage = messageService$1.getSuccessMessage(userAction.type);
    let message = strings.msg_code[protoMessage.code].summary;
    message = substituteVariables(message, params);
    let action = getSuccessAction(userAction.type);
    params.action = getActionForAlert(params, action);
    return {
        message: message,
        type: alertConstants.type.SUCCESS,
        allowClose: true,
        action: params.action
    };
}
/**
 * Function that returns the contents when there are no permissions
 *
 * @return AlertMessageIntrf
 */
function getNoPermissionAlertContent() {
    return {
        message: strings.alert.errorCause.NOT_AUTHORIZED,
        type: alertConstants.type.ERROR,
        errorCause: alertConstants.errorCause.NOT_AUTHORIZED,
        allowClose: true,
        hideReportButton: false,
        details: {
            details: strings.alert.errorCause.NOT_AUTHORIZED
        }
    };
}
/**
 * Function that returns the contents when there are no permissions
 *
 * @return AlertMessageIntrf
 */
function getNoDataAlertContent() {
    return {
        message: strings.alert.callosumErrorMessages.NO_DATA,
        type: alertConstants.type.ERROR,
        errorCause: alertConstants.errorCause.NO_DATA,
        allowClose: true,
        hideReportButton: true,
        details: {
            details: strings.alert.callosumErrorMessages.NO_DATA
        }
    };
}
/**
 * Function that returns the contents when there are no permissions
 *
 * @return AlertMessageIntrf
 */
function getNoMatchAlertContent() {
    return {
        message: strings.NO_MATCH_MSG,
        type: alertConstants.type.ERROR,
        errorCause: alertConstants.errorCause.NO_DATA,
        allowClose: true,
        details: {
            details: strings.NO_MATCH_MSG
        }
    };
}
/**
 * This is a utility function to log this failure event.
 *
 * @param userAction    The userAction for which the alert is to be shown
 * @param response      The callosum response object
 * @param params        Optional Params. These contain override values for
 *                      for various values.
 */
function getFailureEventProps(userAction, response, params) {
    let backendCode = params && params.code || (response.data && response.data.code);
    let protoMessage = messageService$1.getFailureMessage(userAction.type, backendCode, response.errorCause);
    let protoCode = protoMessage.code;
    // If no protoCode, it also implies backendCode
    if (!protoCode) {
        _logger$3.error('Attempt to log failure event without proto code.');
        return;
    }
    let attribs = _getFailureAttributes(protoMessage, response, params);
    let failureEventProps = {
        failureUserAction: userAction.name,
        failureTimestamp: new Date().getTime(),
    };
    if (attribs) {
        failureEventProps = Object.assign(failureEventProps, {
            failureMessage: attribs.summaryMessage,
            failureCodeNumber: backendCode || protoCode,
            failureBackendCode: backendCode,
            failureProtoCode: protoCode,
            failureCause: attribs.errorCauseKey,
            failureTraceId: attribs.traceId,
            failureIncidentId: attribs.incidentId
        });
    }
    return failureEventProps;
}
Provide('alertMessageUtil')({
    getDetailedAlertContent,
    getDataNotSupportedError,
    getMessageStringForErrorCode,
    getNoDataAlertContent,
    getNoMatchAlertContent,
    getNoPermissionAlertContent,
    getUserActionFailureAlertContent,
    getUserActionSuccessAlertContent,
    getFailureEventProps
});

let getAllCombinationsOfSize = function (array, tupleSize) {
    let cache = {};
    let recursive = function (array, tupleSize, startIndex) {
        let cacheKey = tupleSize + ',' + startIndex;
        if (!cache.hasOwnProperty(cacheKey)) {
            let rv;
            if (tupleSize === 0) {
                rv = [[]];
            }
            else if (startIndex >= array.length) {
                rv = [];
            }
            else {
                let oneSizeLess = recursive(array, tupleSize - 1, startIndex + 1), sameSize = recursive(array, tupleSize, startIndex + 1);
                for (let j = 0; j < oneSizeLess.length; j++) {
                    oneSizeLess[j].unshift(array[startIndex]);
                }
                rv = oneSizeLess.concat(sameSize);
            }
            cache[cacheKey] = copyArrayOfArrays(rv);
        }
        return cache[cacheKey];
    };
    return recursive(array, tupleSize, 0);
};
function copyArrayOfArrays(arrOArr) {
    if (arrOArr.length === 0) {
        return [];
    }
    let maxDepthReached = arrOArr[0].length === undefined;
    if (maxDepthReached) {
        return arrOArr.slice();
    }
    let rv = [];
    for (let i = 0; i < arrOArr.length; i++) {
        rv.push(copyArrayOfArrays(arrOArr[i]));
    }
    return rv;
}
let mapArrayToHash = function (array, mappingFunction, defaultValue) {
    let hash = {}, defaultValueIsFunction = _.isFunction(defaultValue);
    array.forEach(function (element, index) {
        let key = mappingFunction(element, index), value = element;
        if (!!defaultValue) {
            if (defaultValueIsFunction) {
                value = defaultValue(element, index);
            }
            else {
                value = defaultValue;
            }
        }
        hash[key] = value;
    });
    return hash;
};
let areArraysSameSet = function (array1, array2) {
    array1 = array1 || [];
    array2 = array2 || [];
    array1 = _.uniq(array1);
    array2 = _.uniq(array2);
    return array1.length === array2.length
        && _.intersection(array1, array2).length === array1.length;
};
let computeAxisInfinityPlaceholderValue = function (min, max) {
    // the only case in which either of the ends can be +/- Inf is when
    // there are no non-special points in the data (i.e. all valid points
    // are +/- inf). In such cases any value can be used as a placeholder
    if ((min === Number.NEGATIVE_INFINITY || min === Number.POSITIVE_INFINITY)) {
        return 1;
    }
    // this can happen if all finite y-value points have the
    // same y-value
    if (min === max) {
        return (max + 1) * 10;
    }
    return Math.max(Math.abs(max), Math.abs(min)) + Math.abs(max - min);
};
let mapArrayToBooleanHash = function (array, valueToKeyFunction) {
    if (!array) {
        return null;
    }
    if (!valueToKeyFunction) {
        valueToKeyFunction = _.identity;
    }
    var hash = {};
    array.forEach(function (item) {
        var key = valueToKeyFunction(item);
        hash[key] = true;
    });
    return hash;
};

/**
 *
 * Copyright: ThoughtSpot Inc. 2013
 *
 * Copyright Thoughtspot Inc. 2016
 * Author:  Jasmeet Singh Jaggi (jasmeet@thoughtspot.com),
 *          Francois Chabbey (francois.chabbey@thoughtspot.com),
 *          Ashish shubham (ashish.shubham@thoughtspot.com)
 *
 *
 *
 * Data model for highcharts chart type
 *
 */
let _logger$4;
let util = ngRequire('util');
let axisColumnValuesComparatorAscending = axisColumnValuesComparator.bind(null, false);
let axisColumnValuesComparatorDescending = axisColumnValuesComparator.bind(null, true);
let yAxisColumnValuesComparatorAscending = yAxisColumnValuesComparator.bind(null, false);
class ChartDataModel {
}
function getDisplayValue(value) {
    if (value === null) {
        return strings.NULL_VALUE_PLACEHOLDER_LABEL;
    }
    if (value === '') {
        return strings.EMPTY_VALUE_PLACEHOLDER_LABEL;
    }
    return value;
}
const baseQueryIndex = 0;
let HighchartDataModel = class HighchartDataModel extends ChartDataModel {
    constructor(chartModel) {
        super();
        this.chartModel = chartModel;
        this._maxColumnValues = {};
        this._minColumnValues = {};
        _logger$4 = logger_3('highchart-data-model');
        this.init(chartModel);
        this.processData(chartModel);
    }
    getChartPointFromDataPoint(xVal, yVal, dataRow, isXAxisOrdinalBased, isYAxisOrdinalBased, categoryColumn, radialColumn, xValueRange, yValuesRange, infinityValuePointsX, infinityValuePointsY) {
        if (xVal === undefined || yVal === undefined) {
            return null;
        }
        if (util.isSpecialNaNValue(xVal)) {
            xVal = null;
        }
        if (util.isSpecialNaNValue(yVal)) {
            yVal = null;
        }
        // NaN values are not allowed on x-axis
        if (xVal === null) {
            if (yVal === null) {
                this._hasError = true;
            }
            return null;
        }
        else {
            this._xAxisHasNonNullValue = true;
        }
        let point = {
            x: xVal,
            y: yVal
        };
        let validPoint;
        if (!isXAxisOrdinalBased) {
            if (!xValueRange) {
                _logger$4.error('xValueRange must be provided when x axis is a measure');
                return null;
            }
            if (!infinityValuePointsX) {
                _logger$4.error('infinityValuePointsX must be provided when x axis is a measure');
                return null;
            }
            validPoint = updateValueRange(xVal, point, xValueRange, infinityValuePointsX);
            if (!validPoint) {
                return null;
            }
        }
        if (!isYAxisOrdinalBased) {
            validPoint = updateValueRange(yVal, point, yValuesRange, infinityValuePointsY);
            if (!validPoint) {
                return null;
            }
        }
        if (categoryColumn) {
            point.categoryName = dataRow[categoryColumn.getDataRowIndex()];
        }
        if (radialColumn) {
            let radialDataRowIndex = radialColumn.getDataRowIndex();
            let minMaxValuePath = `${baseQueryIndex}.${radialDataRowIndex}`;
            let zVal = dataRow[radialDataRowIndex];
            point.z = zVal;
            let calculatedMinRadialValue = _.get(this._minColumnValues, minMaxValuePath);
            let calculatedMaxRadialValue = _.get(this._maxColumnValues, minMaxValuePath);
            let minRadialValue = _.isUndefined(calculatedMinRadialValue)
                ? Number.POSITIVE_INFINITY
                : calculatedMinRadialValue;
            let maxRadialValue = _.isUndefined(calculatedMaxRadialValue)
                ? Number.NEGATIVE_INFINITY
                : calculatedMaxRadialValue;
            if (util.isSpecialInfinityValue(point.z)) {
                // mark this column has having some infinity value
                this._columnHasInfinityValues[radialDataRowIndex] = true;
                this._radialInfinityPoints.push(point);
            }
            else if (util.isSpecialMinusInfinityValue(zVal)) {
                this._columnHasMinusInfinityValues[radialDataRowIndex] = true;
                this._radialInfinityPoints.push(point);
            }
            else if (!isNaN(zVal)) {
                _.set(this._minColumnValues, minMaxValuePath, Math.min(zVal, minRadialValue));
                _.set(this._maxColumnValues, minMaxValuePath, Math.max(zVal, maxRadialValue));
            }
        }
        return point;
    }
    init(chartModel) {
        this._shouldPlotEachYAsSeries = this.shouldPlotEachYAsSeries(chartModel);
        this._shouldNormalizeSeriesNames = this.shouldNormalizeSeriesNames(chartModel);
        this._columnNegativeInfinityPlaceholder = [];
        this._columnInfinityPlaceholder = [];
    }
    shouldPlotEachYAsSeries(chartModel) {
        return chartModel.getYAxisColumnsForSheet(0).length > 1;
    }
    shouldNormalizeSeriesNames(chartModel) {
        // Hack (sunny): Hack around SCAL-7149. We remember the selected series in a chart by
        // saving the *names* of the selected series. Due to formatting changes the names
        // of the series can change for a saved answer thus causing a mismatch between
        // the remembered series names and the new series name. To get around that
        // we "normalize" series names before we compare them.
        // Note tat this hack will cause incorrect series selection if there is a
        // date column paired with a legend column that has two values with only
        // difference between them being a comma. We are going with this hack for
        // now as our estiamte of the probability of that happening is quite low.
        let seriesNamesNeedNormalization = !this._shouldPlotEachYAsSeries
            && chartModel.getLegendColumns().length > 0;
        if (seriesNamesNeedNormalization) {
            let noLegendColumnIsDate = chartModel.getLegendColumns().every(function (col) {
                return col.getEffectiveDataType() !== 'DATE';
            });
            seriesNamesNeedNormalization = !noLegendColumnIsDate;
        }
        return seriesNamesNeedNormalization;
    }
    getNormalizedSeriesName(seriesName) {
        if (!this._shouldNormalizeSeriesNames) {
            return seriesName;
        }
        if (!seriesName) {
            return seriesName;
        }
        let normalizedName = '', commaCount = 0;
        seriesName.forEach(function (ch) {
            if (ch === ',') {
                commaCount++;
                if (commaCount % 2 === 1) {
                    // skip 1, 3, 5... comma
                    // we can't skip every comma as comma is
                    // also the join key in case of multiple legend
                    // columns
                    return;
                }
            }
            normalizedName += ch;
        });
        return normalizedName;
    }
    isSeriesVisible(chartModel, seriesName) {
        let visibleSeriesIds = chartModel.getVisibleSeriesIds();
        if (visibleSeriesIds === void 0) {
            return true;
        }
        let normalizedSeriesName = this.getNormalizedSeriesName(seriesName);
        return visibleSeriesIds.indexOf(normalizedSeriesName) >= 0;
    }
    /**
     * Parses the data json corresponding to this chart into per series data points.
     * Also calculates the array of unique values on x-axis and legend (if applicable).
     * The series data is of the form
     * [{
    *     name: <series name> (empty string in case of only 1 series)
    *     data: [{
    *         x: <x value> (epoch value for time series, index in unique x values array otherwise),
    *         y: <y value>
    *         categoryName: <category name> (if applicable)
    *         z: <radial value> (if applicable)
    *     }, ...]
    * }, ...]
     *
     * Examples:
     * 1. Input data for 'revenue color'
     *    data: [[almond, 100], [blue, 200], [red, 300], ...]
     *
     *    uniques: { '0': [almond, blue, red, ...] }
     *
     *   Output (1 unnamed series):
     *   { data: [{x: 0, y:100}, {x: 1, y: 200}, {x: 2, y: 300} ....] }
     *   where the first coordinate of each point corresponds to the index of the color in the
     *   uniques array.
     *
     * 2. Input data for 'revenue customer region color'
     *    data:
     *    [[AFRICA, almond, 100], [AFRICA, blue, 200],... [ASIA, almond, 150], [ASIA, blue, 250]...]
     *
     *
     *    uniques: { '0': [AFRICA, ASIA ...], '1': [almond, blue ...] }
     *
     *    Output:
     *    [
     *        { name: 'AFRICA', data: [{x: 0, y: 100}, {x: 1, y: 200} ...] },
     *        { name: 'ASIA', data: [{x: 0, y: 150], {x: 1, y: 250} ...] }
     *        ...
     *    ]
     *
     * 2. Input data for 'revenue region order date'
     *    data: [[AFRICA, <epoch1>, 100], [AFRICA, <epoch2>, 200] ...]
     *    uniques: { ... }
     *
     *    Output:
     *    [
     *        { name: 'AFRICA', data: {x: <epoch1>, 100}, {x: <epoch2>, y: 200} ...] },
     *        ...
     *    ]
     *    Note that there is no translation of x value in the time series case.
     *
     * 3. Input data for 'revenue tax region color'
     *    data: [[AFRICA, almond, 100, 1.5], [AFRICA, blue, 200, 2.5] ...]
     *
     *    Output:
     *   [
     *       {
     *           name: 'AFRICA',
     *           data: [
     *               {x: 100, y: 1.5, categoryName: 'almond' },
     *               {x: 200, y: 2.5, categoryName: 'blue'} ]
     *       }
     *   ]
     *
     * 4. Input data for 'revenue tax discount region color'
     *    data: [[AFRICA, almond, 100, 1.5, 0.5]....]
     *
     *    Output:
     *    [
     *       { name: 'AFRICA', data: [{x: 100, y: 1.5, categoryName: 'almond', z: 0.5 } ] }
     *    ]
     *
     * @return {boolean}
     * @private
     *
     * TODO (sunny): This function is too big. Split it into multiple subunits.
     */
    processData(chartModel) {
        //TODO(Jasmeet): In the chart data refactoring remove the setting of data
        // properties in model.
        this._columnHasInfinityValues = [];
        this._columnHasMinusInfinityValues = [];
        this._radialInfinityPoints = [];
        this._maxColumnValues = {};
        this._minColumnValues = {};
        let self = this;
        let baseQueryDefinition = chartModel.getQueryDefinitions()[baseQueryIndex];
        let legendColumnDataRowIndexToColumns = getDataRowIndexToColumnMap(baseQueryDefinition.legendColumns);
        let xAxisColumnDataRowIndexToColumns = getDataRowIndexToColumnMap(baseQueryDefinition.xAxisColumns);
        let yAxisColumnDataRowIndexToColumns = getDataRowIndexToColumnMap(baseQueryDefinition.yAxisColumns);
        this.removeNulls(chartModel);
        let dataArray = chartModel.getDataArray();
        let baseQueryData = dataArray[baseQueryIndex];
        let data = baseQueryData.getData();
        this.normalizeBackendData(chartModel);
        let isLineStackedChart = chartModel.getChartType() === chartTypes.LINE_STACKED_COLUMN;
        let isParetoChart = chartModel.getChartType() === chartTypes.PARETO;
        let series = {}, categoryColumn = chartModel.getCategoryColumnNotOnAxis(), radialColumn = !isLineStackedChart && chartModel.getRadialColumn(), uniqueXAxisValues = [], uniqueXAxisValuesHash = {}, uniqueYAxisValues = [], uniqueYAxisValuesHash = {}, uniqueLegendValues = [], uniqueLegendValuesHash = {}, columnValueRanges = {}, infinityValuePointForColumn = {}, 
        // this is used to check if every x-axis value belongs to
        // exactly one series (SCAL-4758)
        // the hash looks like
        // {xalueHash1: {seriesNameWithXValue1: true, seriesNameWithXValue2: true ...}}
        seriesNameToId = {};
        // in case of multiple y-axes, each axis corresponds to a series
        let xAxisColumns = chartModel.getXAxisColumns(), yAxisColumns = chartModel.getYAxisColumnsForSheet(0), plotEachYAsSeries = yAxisColumns.length > 1;
        chartModel.distinctYAxisColumnNames =
            getDistinctNamesForColumns(chartModel.getYAxisColumns()) || [];
        if (plotEachYAsSeries) {
            if (chartModel.getLegendColumns().length > 0) {
                _logger$4.error('multiple y-axes and legends can\'t be supported at the same time');
                return false;
            }
            yAxisColumns.forEach(function (column, index) {
                let seriesName = chartModel.distinctYAxisColumnNames[index];
                series[seriesName] = [];
            });
        }
        [xAxisColumns, yAxisColumns].forEach(function (columns) {
            columns.forEach(function (column) {
                let dataRowIndex = column.getDataRowIndex();
                infinityValuePointForColumn[dataRowIndex] = [];
                columnValueRanges[dataRowIndex] = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
            });
        });
        let orderedXHashesForLegendHash = {};
        let stackedValueColumn = getStackedValuesColumn(chartModel);
        let hasStackedDataInChart = stackedValueColumn !== void 0;
        let xValueToStackValue = {};
        let xValueToYValue = {};
        // first pass to calculate composite uniques
        data.forEach(function (dataRow) {
            let legendValues = [], xAxisValues = [], yAxisValues = [];
            dataRow.forEach(function (dataValue, dataRowIndex) {
                let bucket = null;
                let columnEffectiveId = null;
                if (legendColumnDataRowIndexToColumns.hasOwnProperty(dataRowIndex)) {
                    bucket = legendValues;
                    columnEffectiveId =
                        legendColumnDataRowIndexToColumns[dataRowIndex].getId();
                }
                else if (xAxisColumnDataRowIndexToColumns.hasOwnProperty(dataRowIndex)) {
                    bucket = xAxisValues;
                    columnEffectiveId =
                        xAxisColumnDataRowIndexToColumns[dataRowIndex].getId();
                }
                else if (yAxisColumnDataRowIndexToColumns.hasOwnProperty(dataRowIndex)) {
                    bucket = yAxisValues;
                    columnEffectiveId =
                        yAxisColumnDataRowIndexToColumns[dataRowIndex].getId();
                }
                if (bucket) {
                    bucket.push({
                        dataRowIndex: dataRowIndex,
                        columnEffectiveId: columnEffectiveId,
                        value: dataValue
                    });
                }
            });
            // 1. the unique coming from callosum are not helpful as they are per column uniques
            // we have to calculate composite uniques (note that we simply we can't take a cross
            // product of the uniques of each column to get the composite uniques as not all
            // combinations will be present in the data)
            // 2. for multi-column x-axis & legend we want to preserve all the x-axis values
            // (rather than concatenating them at this point). The final formatting stage will
            // decide how to format (possibly) composite column label
            // 3. There is a 1-1 mapping between the hash keys and the hash values, we need the
            // hash key to be able to uniquify the values (because values are objects, they can't
            // be used as hash keys)
            let xAxisValueHashKey = xAxisValues.map(function (valueObject) {
                return valueObject.value;
            }).join(COMPOSITE_COLUMN_VALUES_JOIN_KEY);
            if (!uniqueXAxisValuesHash.hasOwnProperty(xAxisValueHashKey)) {
                uniqueXAxisValuesHash[xAxisValueHashKey] = uniqueXAxisValues.length;
                uniqueXAxisValues.push(xAxisValues);
            }
            let legendValueHashKey = legendValues.map(function (valueObject) {
                return valueObject.value;
            }).join(COMPOSITE_COLUMN_VALUES_JOIN_KEY);
            if (!uniqueLegendValuesHash.hasOwnProperty(legendValueHashKey)) {
                uniqueLegendValuesHash[legendValueHashKey] = uniqueLegendValues.length;
                uniqueLegendValues.push(legendValues);
            }
            if (!orderedXHashesForLegendHash.hasOwnProperty(legendValueHashKey)) {
                orderedXHashesForLegendHash[legendValueHashKey] = [];
            }
            orderedXHashesForLegendHash[legendValueHashKey].push(xAxisValueHashKey);
            yAxisValues.forEach(function (valueObject) {
                let idx = valueObject.dataRowIndex;
                if (!uniqueYAxisValuesHash[idx]) {
                    uniqueYAxisValuesHash[idx] = {};
                    uniqueYAxisValues[idx] = [];
                }
                if (!uniqueYAxisValuesHash[idx].hasOwnProperty(valueObject.value)) {
                    uniqueYAxisValuesHash[idx][valueObject.value] = uniqueYAxisValues[idx].length;
                    uniqueYAxisValues[idx].push(valueObject);
                }
                if (hasStackedDataInChart
                    && valueObject.columnEffectiveId === stackedValueColumn.getGuid()
                    && self.isSeriesVisible(chartModel, legendValueHashKey)) {
                    xValueToStackValue[xAxisValueHashKey] =
                        xValueToStackValue[xAxisValueHashKey] || 0;
                    xValueToStackValue[xAxisValueHashKey] += valueObject.value;
                }
                // in case of pareto chart, we have at most one shared x-axis
                // that we want to sort with the corresponding y-axis values
                // at that time, we only have only ONE y axis
                // the second axis is an ad-hoc axis created in pareto.js
                if (isParetoChart) {
                    xValueToYValue[xAxisValueHashKey] = valueObject.value;
                }
            });
        });
        // if there are any sorted measures in query which may not be appearing in chart,
        // we don't want to sort legends as we wanna show data as it is coming from backend
        // Since we are relying on data coming from backend to be sorted,
        // for the case where x1 => a->b and x2 => c->a->b, we can do a sort.
        // if we don't sort it will show order as a->b->c since this will be
        // the order in which series will be received
        if (!this.chartModel.hasAnySortedMeasureNotOnAxis()) {
            sortUniqueValues(uniqueLegendValues, uniqueLegendValuesHash, axisColumnValuesComparatorAscending);
        }
        let xAxisColumnsHaveAttributes = xAxisColumns.some((column) => {
            return column.isAttribute();
        });
        let yAxisColumnsAreAttributes = yAxisColumns.every((column) => {
            return column.isAttribute();
        });
        if (yAxisColumnsAreAttributes && xAxisColumnsHaveAttributes) {
            if (!chartModel.yAxisColumnHasSorting()) {
                yAxisColumns.forEach((column) => {
                    let idx = column.getDataRowIndex();
                    sortUniqueValues(uniqueYAxisValues[idx], uniqueYAxisValuesHash[idx], yAxisColumnValuesComparatorAscending);
                });
            }
        }
        // If there is no sorting on Y then  we ensure the data on x axis is naturally sorted.
        //If there is a column(Measure) removed from chart configuration but still has sort applied
        //on sage bar. We assume data is sorted by that column and we don't have to sort
        if (!chartModel.hasAnySortedMeasure() &&
            (!chartModel.yAxisColumnHasSorting() || (yAxisColumnsAreAttributes
                && xAxisColumnsHaveAttributes && !chartModel.xAxisColumnHasSorting()))) {
            // Note (sunny): only one column can be sorted explicitly at this point
            // so descending sort can be applied to only one column (ascending sort
            // is the default)
            let xValueComparator;
            if (isParetoChart) {
                // for pareto chart, we sort x axis by the y values, in descending order
                xValueComparator = ((uniqueValuesMap, x1, x2, key1, key2) => {
                    return uniqueValuesMap[key2] - uniqueValuesMap[key1];
                }).bind(void 0, xValueToYValue);
            }
            else {
                let xAxisDescendingSorted = chartModel.getXAxisColumns().some(function (col) {
                    return col.isSorted() && !col.isAscendingSort();
                });
                xValueComparator = xAxisDescendingSorted ? axisColumnValuesComparatorDescending
                    : axisColumnValuesComparatorAscending;
            }
            sortUniqueValues(uniqueXAxisValues, uniqueXAxisValuesHash, xValueComparator);
        }
        if (hasStackedDataInChart && stackedValueColumn.isUserSorted()) {
            let comparator = (kvMap, isAscending, x1, x2, key1, key2) => {
                return isAscending ? kvMap[key1] - kvMap[key2] : kvMap[key2] - kvMap[key1];
            };
            let sortUniqueComparator = comparator.bind(void 0, xValueToStackValue, stackedValueColumn.isAscendingSort());
            sortUniqueValues(uniqueXAxisValues, uniqueXAxisValuesHash, sortUniqueComparator);
        }
        // second pass to create series data
        let isXAxisOrdinalBased = chartModel.isXAxisOrdinalBased(), isYAxisOrdinalBased = chartModel.isYAxisOrdinalBased();
        data.forEach(function (dataRow, dataIndex) {
            let legendValues = [], xAxisValues = [], yAxisValues = [];
            // TODO(sunny): can we avoid re-bucketing data values into x,y and legend
            // we might already be doing the same thing in the first pass
            dataRow.forEach(function (dataValue, dataRowIndex) {
                if (legendColumnDataRowIndexToColumns.hasOwnProperty(dataRowIndex)) {
                    legendValues.push(dataValue);
                }
                else if (xAxisColumnDataRowIndexToColumns.hasOwnProperty(dataRowIndex)) {
                    xAxisValues.push(dataValue);
                }
                else if (yAxisColumnDataRowIndexToColumns.hasOwnProperty(dataRowIndex)) {
                    yAxisValues.push(dataValue);
                }
            });
            // xValue is the actual data value if x-axis is effectively a measure or a timeseries,
            // otherwise it's the index in uniques. we don't do ordinal for time series and measures
            // to allow highcharts to generate labels at intermediate points for labels
            // (even if there are no real data points in those places).
            let xValue = null, xValueHash = null, xValueRange = null, infinityValuePointsX = null;
            if (!isXAxisOrdinalBased) {
                xValue = xValueHash = xAxisValues[0];
                let xAxisColumnDataRowIndex = xAxisColumns[0].getDataRowIndex();
                xValueRange = columnValueRanges[xAxisColumnDataRowIndex];
                infinityValuePointsX = infinityValuePointForColumn[xAxisColumnDataRowIndex];
            }
            else {
                xValueHash = xAxisValues.join(COMPOSITE_COLUMN_VALUES_JOIN_KEY);
                if (!uniqueXAxisValuesHash.hasOwnProperty(xValueHash)) {
                    _logger$4.error('no x value for xAxisValueHashKey', xValueHash);
                }
                xValue = uniqueXAxisValuesHash[xValueHash];
            }
            // yValue is the actual data value if y-axis is effectively a measure or a timeseries,
            // otherwise it's the index in uniques. we don't do ordinal for time series and measures
            // to allow highcharts to generate labels at intermediate points for labels
            // (even if there are no real data points in those places).
            let yValue = null, yValueHash = null, yValueRange = null, infinityValuePointsY = null;
            let yAxisColumnDataRowIndex = yAxisColumns[0].getDataRowIndex();
            if (!isYAxisOrdinalBased) {
                yValue = yValueHash = yAxisValues[0];
                yValueRange = columnValueRanges[yAxisColumnDataRowIndex];
                infinityValuePointsY = infinityValuePointForColumn[yAxisColumnDataRowIndex];
            }
            else {
                yValueHash = yAxisValues[0];
                if (!uniqueYAxisValuesHash[yAxisColumnDataRowIndex].hasOwnProperty(yValueHash)) {
                    _logger$4.error('no y value for yAxisValueHashKey', yValueHash);
                }
                yValue = uniqueYAxisValuesHash[yAxisColumnDataRowIndex][yValueHash];
            }
            let seriesName = null;
            // TODO(sunny): Object notation for points will not work once turbo
            // threshold has been breached
            // TODO(sunny): if there is no valid data point for a series we currently
            // end up skipping that series completely. We can, in the future,
            // show an info banner informing the user about this.
            if (plotEachYAsSeries) {
                yAxisColumns.forEach(function (column, yAxisColumnIndex) {
                    let yVal = yAxisValues[yAxisColumnIndex], dataRowIndex = column.getDataRowIndex();
                    if (column.isEffectivelyNonNumeric()) {
                        let uniques = uniqueYAxisValuesHash[yAxisColumnDataRowIndex];
                        if (!uniques.hasOwnProperty(yVal)) {
                            _logger$4.error('no y value for yAxisValueHashKey', yVal);
                        }
                        yVal = uniques[yVal];
                    }
                    let infinityValuePointsY = infinityValuePointForColumn[dataRowIndex], yValuesRange = columnValueRanges[dataRowIndex];
                    let point = self.getChartPointFromDataPoint(xValue, yVal, dataRow, isXAxisOrdinalBased, column.isEffectivelyNonNumeric(), categoryColumn, radialColumn, xValueRange, yValuesRange, infinityValuePointsX, infinityValuePointsY);
                    if (point === null) {
                        return;
                    }
                    seriesName = chartModel.distinctYAxisColumnNames[yAxisColumnIndex];
                    series[seriesName].push(point);
                });
            }
            else {
                let legendValue = legendValues
                    .map(getDisplayValue)
                    .join(COMPOSITE_COLUMN_VALUES_JOIN_KEY);
                seriesName = legendValue;
                if (!series.hasOwnProperty(legendValue)) {
                    series[legendValue] = [];
                }
                let point = self.getChartPointFromDataPoint(xValue, yValue, dataRow, isXAxisOrdinalBased, isYAxisOrdinalBased, categoryColumn, radialColumn, xValueRange, yValueRange, infinityValuePointsX, infinityValuePointsY);
                if (point === null) {
                    return;
                }
                series[legendValue].push(point);
            }
        });
        // if the y axis is shared, infinity value will be the biggest placeholder
        let maxRange = Number.NEGATIVE_INFINITY, minRange = Number.POSITIVE_INFINITY, showYAxisLinkingOption = configOptions(chartModel.getChartType(), chartModel)
            .allowedConfigurations.showYAxisLinkingOption, isYAxisShared = showYAxisLinkingOption ?
            this.chartModel.isYAxisShared() : !showYAxisLinkingOption, sharedInfinityPlaceHolder;
        if (isYAxisShared) {
            Object.keys(columnValueRanges).forEach((dataRowIndex) => {
                let colValRange = columnValueRanges[dataRowIndex];
                if (colValRange.min < minRange) {
                    minRange = colValRange.min;
                }
                if (colValRange.max > maxRange) {
                    maxRange = colValRange.max;
                }
            });
            sharedInfinityPlaceHolder =
                util.computeAxisInfinityPlaceholderValue(minRange, maxRange);
        }
        // now that we have the full range of data on axis columns
        // we can decided what the infinity placeholder values should
        // be
        Object.keys(columnValueRanges).forEach(function (dataRowIndex) {
            let colValRange = columnValueRanges[dataRowIndex], infinityValuePoints = infinityValuePointForColumn[dataRowIndex], infinityPlaceholderValue = util.computeAxisInfinityPlaceholderValue(colValRange.min, colValRange.max), columnHasPositiveInfiniteValues = false, columnHasNegativeInfiniteValues = false;
            if (isYAxisShared) {
                infinityPlaceholderValue = sharedInfinityPlaceHolder;
            }
            infinityValuePoints.forEach(function (point) {
                ['x', 'y'].forEach(function (prop) {
                    let val = point[prop];
                    if (util.isSpecialInfinityValue(val)) {
                        columnHasPositiveInfiniteValues = true;
                        point[prop] = infinityPlaceholderValue;
                    }
                    else if (util.isSpecialMinusInfinityValue(val)) {
                        columnHasNegativeInfiniteValues = true;
                        point[prop] = -infinityPlaceholderValue;
                    }
                });
            });
            self._columnHasInfinityValues[dataRowIndex] = columnHasPositiveInfiniteValues;
            self._columnHasMinusInfinityValues[dataRowIndex] = columnHasNegativeInfiniteValues;
            if (columnHasPositiveInfiniteValues) {
                self._columnInfinityPlaceholder[dataRowIndex] = infinityPlaceholderValue;
            }
            if (columnHasNegativeInfiniteValues) {
                self._columnNegativeInfinityPlaceholder[dataRowIndex] = -infinityPlaceholderValue;
            }
            _.set(self._maxColumnValues, `${baseQueryIndex}.${dataRowIndex}`, colValRange.max);
            _.set(self._minColumnValues, `${baseQueryIndex}.${dataRowIndex}`, colValRange.min);
            if (radialColumn) {
                // compute infinity placeholder for radial
                let radialDataIndex = radialColumn.getDataRowIndex();
                let minValue = self._maxColumnValues[baseQueryIndex][radialDataIndex];
                let maxValue = self._maxColumnValues[baseQueryIndex][radialDataIndex];
                let infinityPlaceholderValue = util.computeAxisInfinityPlaceholderValue(minValue, maxValue);
                if (self.columnHasMinusInfinityValues[radialDataIndex] ||
                    self.columnHasInfinityValues[radialDataIndex]) {
                    self._radialInfinityPoints.forEach((p) => {
                        if (util.isSpecialInfinityValue(p.z)) {
                            p.z = infinityPlaceholderValue;
                            self._columnInfinityPlaceholder[radialDataIndex] =
                                infinityPlaceholderValue;
                        }
                        else if (util.isSpecialMinusInfinityValue(p.z)) {
                            p.z = -infinityPlaceholderValue;
                            self._columnNegativeInfinityPlaceholder[radialDataIndex] =
                                infinityPlaceholderValue;
                        }
                    });
                }
            }
        });
        // sort all points by x value. note that x value is always a number, in case of ascending
        // measure/timeseries it is the real x value, in all other cases it is the index in
        // uniques array which has already been sorted note that in case of sorting on
        // legend column x-axis value are non guaranteed to be sorted and hence this sorting
        // here is necessary.
        _.values(series).forEach(function (points) {
            points.sort(function (point1, point2) {
                return point1.x - point2.x;
            });
        });
        // legend UI needs to be able to look up series by formatted legend name.
        // Since calculating formatted legend name can be costly (because of a formatter
        // call for each data point) we first use the faster hash key calculation
        // (not requiring formatter calls) to de-duplicate legend value and
        // then replace unformatted legend names with formatted ones.
        let orderedSeriesNames = [], 
        // the series are sorted in the alphabetical order
        // of their names which can make them out of sync
        // with the y-axis columns in case of a multi-measure
        // y-axis. we use this map to send this information
        // over to the chart (SCAL-6957)
        seriesNameToYAxisIndex = {};
        if (!plotEachYAsSeries) {
            let prevUniqueLegendValues = uniqueLegendValues, prevSeries = series;
            uniqueLegendValues = [];
            series = {};
            prevUniqueLegendValues.forEach(function (valueObjects) {
                let unformattedSeriesName = valueObjects.map(valueObject => getDisplayValue(valueObject.value)).join(COMPOSITE_COLUMN_VALUES_JOIN_KEY), formattedSeriesName = formatCompositeColumnValue(chartModel, valueObjects);
                uniqueLegendValues.push(valueObjects);
                // TODO(sunny): this will break if multiple un-formatted series names map to the
                // same formatted series name
                // we will end up losing points from all but one of such series
                series[formattedSeriesName] = prevSeries[unformattedSeriesName];
                seriesNameToId[formattedSeriesName] = formattedSeriesName;
                orderedSeriesNames.push(formattedSeriesName);
                seriesNameToYAxisIndex[formattedSeriesName] = 0;
            });
        }
        else {
            orderedSeriesNames = Object.keys(series);
            orderedSeriesNames.forEach(function (seriesName, yAxisColumnIndex) {
                seriesNameToYAxisIndex[seriesName] = yAxisColumnIndex;
                seriesNameToId[seriesName] = yAxisColumns[yAxisColumnIndex].getId();
            });
            orderedSeriesNames.sort();
        }
        let normalizedSeriesNameGetter = this.getNormalizedSeriesName.bind(this);
        let DEFAULT_SERIES_NAME = 'Series 1', visibleSeriesIds = chartModel.getVisibleSeriesIds(), visibleSeriesNameHash = visibleSeriesIds
            ? util.mapArrayToBooleanHash(visibleSeriesIds, normalizedSeriesNameGetter) :
            null, seriesColors = chartModel.getSeriesColorsMap();
        if (isLineStackedChart) {
            let queryIndex = 1;
            let lineStackAugmentQuery = chartModel.getQueryDefinitions()[queryIndex];
            let augmentQueryData = chartModel.getDataArray()[queryIndex];
            let augmentSeries = {};
            let yAxisColumnsPlottedAsSeries = lineStackAugmentQuery.yAxisColumns;
            // NOTE: X-Axis should be same as the base query. perhaps add assertions somewhere.
            let xAxisColumnsInAugmentQuery = lineStackAugmentQuery.xAxisColumns;
            yAxisColumnsPlottedAsSeries.forEach((col, index) => {
                let seriesName = col.getName(false);
                augmentSeries[seriesName] = [];
                seriesNameToId[seriesName] = seriesName;
                orderedSeriesNames.push(seriesName);
                seriesNameToYAxisIndex[seriesName] = index + 1;
            });
            let xAxisColumnsDataRowIndices = new Set(xAxisColumnsInAugmentQuery.map((column) => {
                return column.getDataRowIndex();
            }));
            let isTimeSeries = chartModel.isTimeSeries();
            augmentQueryData.getData().forEach((dataRow) => {
                let xValues = dataRow.filter((value, index) => {
                    return xAxisColumnsDataRowIndices.has(index);
                });
                // if we have time series, then xAxis will have only one column
                let xValueHash = isTimeSeries ? xValues[0] :
                    xValues.join(COMPOSITE_COLUMN_VALUES_JOIN_KEY);
                yAxisColumnsPlottedAsSeries.forEach((yAsLineColumn) => {
                    let dataRowIndex = yAsLineColumn.getDataRowIndex();
                    let yValue = dataRow[dataRowIndex];
                    let xValue = isXAxisOrdinalBased ?
                        uniqueXAxisValuesHash[xValueHash] : xValueHash;
                    let seriesName = yAsLineColumn.getName(false);
                    let point = {
                        x: xValue,
                        y: yValue
                    };
                    let minMaxValuesPath = `${queryIndex}.${dataRowIndex}`;
                    let maxValue = Math.max(_.get(self._maxColumnValues, minMaxValuesPath, Number.NEGATIVE_INFINITY), yValue);
                    let minValue = Math.min(_.get(self._minColumnValues, minMaxValuesPath, Number.POSITIVE_INFINITY), yValue);
                    _.set(self._maxColumnValues, minMaxValuesPath, maxValue);
                    _.set(self._minColumnValues, minMaxValuesPath, minValue);
                    if (uniqueXAxisValuesHash[xValueHash] !== void 0) {
                        augmentSeries[seriesName].push(point);
                    }
                });
            });
            yAxisColumnsPlottedAsSeries.forEach(function (yAsLineColumn) {
                let seriesName = yAsLineColumn.getName(false);
                // Order the series such that its in the order of x-axis.
                augmentSeries[seriesName].sort((p1, p2) => {
                    if (isXAxisOrdinalBased) {
                        return p1.x - p2.x;
                    }
                    else {
                        return uniqueXAxisValuesHash[p1.x] - uniqueXAxisValuesHash[p2.x];
                    }
                });
            });
            // TODO(Jasmeet): Handle the case where the series name from legend and y-axis column
            // overlap.
            _.assign(series, augmentSeries);
        }
        this._seriesMap = {};
        let longestName = '';
        let allYAxisColumns = this.chartModel.getYAxisColumns();
        this._series = orderedSeriesNames.map(function (seriesName, seriesIndex) {
            let dataPoints = series[seriesName], seriesConfig = {
                data: dataPoints
            };
            if (seriesName) {
                seriesConfig.name = seriesName;
                seriesConfig.blinkSeriesId = seriesNameToId[seriesName].toLowerCase();
                let yAxisIndex = seriesNameToYAxisIndex[seriesName];
                seriesConfig.valueColumnIdentifier =
                    !!radialColumn ? radialColumn.getGuid() : allYAxisColumns[yAxisIndex].getId();
            }
            else {
                seriesConfig.name = allYAxisColumns[seriesIndex].getName();
                seriesConfig.blinkSeriesId = allYAxisColumns[seriesIndex]
                    .getId().toLowerCase();
                seriesConfig.valueColumnIdentifier =
                    !!radialColumn ? radialColumn.getGuid() : allYAxisColumns[seriesIndex].getId();
            }
            let name = seriesConfig.name;
            if (name && (name.length > longestName.length)) {
                longestName = name;
            }
            if (plotEachYAsSeries) {
                seriesConfig.yAxis =
                    isYAxisShared ? 0 : seriesNameToYAxisIndex[seriesName];
            }
            if (isLineStackedChart) {
                seriesConfig.yAxis = isYAxisShared
                    ? 0
                    : seriesNameToYAxisIndex[seriesName];
            }
            if (visibleSeriesNameHash) {
                let normalizedSeriesName = normalizedSeriesNameGetter(seriesName), isSeriesVisible = false;
                if (!normalizedSeriesName
                    && visibleSeriesNameHash.hasOwnProperty(DEFAULT_SERIES_NAME)) {
                    isSeriesVisible = true;
                }
                else if (visibleSeriesNameHash.hasOwnProperty(normalizedSeriesName)) {
                    isSeriesVisible = true;
                }
                else if (visibleSeriesNameHash.hasOwnProperty(seriesNameToId[seriesName])) {
                    isSeriesVisible = true;
                }
                seriesConfig.visible = isSeriesVisible;
            }
            else {
                seriesConfig.visible = true;
            }
            if (seriesColors && seriesColors.hasOwnProperty(seriesConfig.blinkSeriesId)) {
                seriesConfig.color = seriesColors[seriesConfig.blinkSeriesId];
            }
            this._seriesMap[seriesConfig.name] = seriesConfig;
            return seriesConfig;
        }, this);
        if (plotEachYAsSeries) {
            this._series = this._series.reduce((acc, serie) => {
                let newIdx = seriesNameToYAxisIndex[serie.name];
                acc[newIdx] = serie;
                return acc;
            }, []);
        }
        this._longestSerieName = longestName;
        // TODO(sunny): we should not calculate all formatted legend values upfront,
        // the user might never scroll to them
        this._compositeLegendValueToRawValues = {};
        this._uniqueLegendValues = [];
        // legendValues are accessed quite frequently and we also do not need to re-evaluate their
        // formatting unlike x-axis label, so we pre-format the label in the legend
        uniqueLegendValues.forEach(function (valueObjects) {
            let formattedValue = formatCompositeColumnValue(chartModel, valueObjects);
            this._compositeLegendValueToRawValues[formattedValue.toLowerCase()] =
                valueObjects.map(function (valueObject) {
                    return valueObject.value;
                });
            this._uniqueLegendValues.push(formattedValue);
        }, this);
        this._xValueToRawValues = uniqueXAxisValues;
        this._yValueToRawValues = uniqueYAxisValues;
        _.remove(this._series, serie => {
            return serie.data && serie.data.length === 0;
        });
        this._hasNoData = !this._series.some(serie => {
            return serie.data && serie.data.length > 0;
        });
        return true;
    }
    /**
     * Utility method to process yValues for a given data point in chart data
     * @param xVal
     * @param yVal
     * @param dataRow
     * @param isXAxisPrimarySortMeasure
     * @param categoryColumn
     * @param radialColumn
     * @param yValuesRange
     * @param infinityValuePoints
     * @param infinityValuePointsX
     * @param infinityValuePointsY
     * @returns {{x: *, y: *}}
     * @private
     */
    // TODO(vibhor): Once we can piggyback backend data normalization on extraction pass,
    // we can get rid of this.
    shouldNormalizeBackendData(chartModel) {
        // SCAL-5114: we re-use already normalized data in certain cases
        // (e.g. when a viz is delete from a pinboard)
        if (!!chartModel.getVizData().isNormalized) {
            return false;
        }
        return true;
    }
    /**
     * Normalizes the data coming from backend for consumption by the chart rendering library.
     * TODO(vibhor): Figure out a "clean" way to combine this with data pass done during extraction
     * and so not have to do this extra pass for normalization. As it is, this is a performance hit.
     * @private
     */
    normalizeBackendData(chartModel) {
        if (!this.shouldNormalizeBackendData(chartModel)) {
            return;
        }
        let dataArray = chartModel.getDataArray();
        let queryDefinitions = chartModel.getQueryDefinitions();
        queryDefinitions.forEach((queryDefinition, index) => {
            let queryData = dataArray[index];
            let data = queryData.getData();
            let totalRows = data.length;
            let column, i, j;
            let columns = queryDefinition.getColumnsInDataOrder();
            let numericColumns = [], nonNumericColumns = [];
            columns.forEach((column) => {
                column.isEffectivelyNumeric()
                    ? numericColumns.push(column)
                    : nonNumericColumns.push(column);
            });
            // for each row, normalize each cell value using the corresponding normalizer for
            // that column.
            for (i = 0; i < totalRows; ++i) {
                let currentRow = data[i];
                if (currentRow && currentRow.length > 0) {
                    // First normalize measure columns.
                    for (j = 0; j < numericColumns.length; ++j) {
                        column = numericColumns[j];
                        currentRow[column.getDataRowIndex()] = column.convertValueFromBackend(currentRow[column.getDataRowIndex()]);
                    }
                    // Next normalize attribute columns.
                    for (j = 0; j < nonNumericColumns.length; ++j) {
                        column = nonNumericColumns[j];
                        currentRow[column.getDataRowIndex()] = column.convertValueFromBackend(currentRow[column.getDataRowIndex()]);
                    }
                }
            }
        });
        chartModel.getVizData().isNormalized = true;
    }
    removeNulls(chartModel) {
        let allIncludedColumns = chartModel.getVisualizedColumns();
        let allIncludedDataRowIndices = allIncludedColumns.map(dataRowIndexGetter), sortedOnX = chartModel.isPrimarySortOnXAxisColumns(), dataRowColumnsAllowingNulls = allIncludedColumns.filter(function (column) {
            if (column.isEffectivelyNumeric()) {
                if (chartModel.getYAxisColumns().indexOf(column) >= 0) {
                    return true;
                }
                if (chartModel.getXAxisColumns().indexOf(column) >= 0) {
                    // measure on x-axis but not sorted on it means non-scaled x-axis
                    return !sortedOnX;
                }
                return false;
            }
            if (column.isDateColumn()) {
                return !sortedOnX;
            }
            return true;
        }), dataRowIndicesAllowingNulls = mapArrayToHash(dataRowColumnsAllowingNulls, dataRowIndexGetter, true);
        let dataArray = chartModel.getDataArray();
        let baseQueryData = dataArray[baseQueryIndex];
        let data = baseQueryData.getData();
        _.remove(data, (dataRow) => {
            return allIncludedDataRowIndices.some((dataRowIndex) => {
                let badValue = false;
                if (dataRowIndex < dataRow.length) {
                    let value = dataRow[dataRowIndex];
                    // attributes may not have nulls
                    if (value === null &&
                        !dataRowIndicesAllowingNulls.hasOwnProperty(dataRowIndex)) {
                        badValue = true;
                    }
                }
                return badValue;
            });
        });
    }
    get columnHasInfinityValues() {
        return this._columnHasInfinityValues;
    }
    get columnHasMinusInfinityValues() {
        return this._columnHasMinusInfinityValues;
    }
    get maxColumnValues() {
        return this._maxColumnValues;
    }
    get minColumnValues() {
        return this._minColumnValues;
    }
    get xAxisHasNonNullValue() {
        return this._xAxisHasNonNullValue;
    }
    get hasError() {
        return this._hasError;
    }
    get series() {
        return this._series;
    }
    get columnInfinityPlaceholder() {
        return this._columnInfinityPlaceholder;
    }
    get columnNegativeInfinityPlaceholder() {
        return this._columnNegativeInfinityPlaceholder;
    }
    get compositeLegendValueToRawValues() {
        return this._compositeLegendValueToRawValues;
    }
    get uniqueLegendValues() {
        return this._uniqueLegendValues;
    }
    get xValueToRawValues() {
        return this._xValueToRawValues;
    }
    get yValueToRawValues() {
        return this._yValueToRawValues;
    }
    get hasNoData() {
        return this._hasNoData;
    }
};
HighchartDataModel = __decorate([
    Provide('HighchartDataModel')
], HighchartDataModel);
function updateValueRange(val, point, valueRange, infinityValuePoints) {
    if (util.isSpecialValue(val)) {
        if (util.isSpecialInfinityValue(val) || util.isSpecialMinusInfinityValue(val)) {
            infinityValuePoints.push(point);
        }
        else {
            // NaN or any other special value have no representation
            // in a measure, we silently drop such points
            return false;
        }
    }
    else {
        valueRange.min = Math.min(valueRange.min, val);
        valueRange.max = Math.max(valueRange.max, val);
    }
    return true;
}
function dataRowIndexGetter(column) {
    return column.getDataRowIndex();
}
function getDataRowIndexToColumnMap(columns) {
    return columns.reduce((dataRowIndexToColumnMap, column) => {
        dataRowIndexToColumnMap[column.getDataRowIndex()] = column;
        return dataRowIndexToColumnMap;
    }, {});
}
function axisColumnValuesComparator(descending, valuesA, valuesB, hashKeyA, hashKeyB) {
    if (!valuesA && !valuesB) {
        return 0;
    }
    if (!valuesA) {
        return 1;
    }
    if (!valuesB) {
        return -1;
    }
    if (valuesA.length !== valuesB.length) {
        _logger$4.warn('mismatch in values array length', valuesA.length, valuesB.length, valuesA, valuesB);
        return 0;
    }
    for (let i = 0; i < valuesA.length; i++) {
        let valueA = valuesA[i].value, valueB = valuesB[i].value;
        let aIsInfinity = util.isSpecialInfinityValue(valueA);
        let bIsInfinity = util.isSpecialInfinityValue(valueB);
        if (aIsInfinity && bIsInfinity) {
            continue;
        }
        if (aIsInfinity && !bIsInfinity) {
            return !!descending ? -1 : 1;
        }
        if (!aIsInfinity && bIsInfinity) {
            return !!descending ? 1 : -1;
        }
        if (valueA === null || valueB === null) {
            if (valueA === null && valueB === null) {
                continue;
            }
            if (valueA === null) {
                return !!descending ? 1 : -1;
            }
            return !!descending ? -1 : 1;
        }
        if (valueA > valueB) {
            return !!descending ? -1 : 1;
        }
        if (valueA < valueB) {
            return !!descending ? 1 : -1;
        }
    }
    return 0;
}
function yAxisColumnValuesComparator(descending, valuesA, valuesB, hashKeyA, hashKeyB) {
    if (!valuesA && !valuesB) {
        return 0;
    }
    if (!valuesA) {
        return 1;
    }
    if (!valuesB) {
        return -1;
    }
    if (valuesA.length !== valuesB.length) {
        _logger$4.warn('mismatch in values array length', valuesA.length, valuesB.length, valuesA, valuesB);
        return 0;
    }
    let valueA = valuesA.value, valueB = valuesB.value;
    let aIsInfinity = util.isSpecialInfinityValue(valueA);
    let bIsInfinity = util.isSpecialInfinityValue(valueB);
    if (aIsInfinity && bIsInfinity) {
        return 0;
    }
    if (aIsInfinity && !bIsInfinity) {
        return !!descending ? -1 : 1;
    }
    if (!aIsInfinity && bIsInfinity) {
        return !!descending ? 1 : -1;
    }
    if (valueA === null || valueB === null) {
        if (valueA === null && valueB === null) {
            return 0;
        }
        if (valueA === null) {
            return !!descending ? 1 : -1;
        }
        return !!descending ? -1 : 1;
    }
    if (valueA > valueB) {
        return !!descending ? -1 : 1;
    }
    if (valueA < valueB) {
        return !!descending ? 1 : -1;
    }
    return 0;
}
/**
 * Sorts the uniques related data for an axis.
 * Sorting is done in by comparing corresponding column values for
 * the axis in the "natural" order. The data is sorted in place.
 * Example:
 *
 * input:
 * uniqueValues: [[{"dataRowIndex":1,"value":"red"}],[{"dataRowIndex":1,"value":"blue"}]]
 * uniqueValuesHash: {"red":0,"blue":1}
 *
 * updated:
 * uniqueValues: [[{"dataRowIndex":1,"value":"blue"}],[{"dataRowIndex":1,"value":"red"}]]
 * uniqueValuesHash: {"blue":0,"red":1}
 *
 * @param uniqueValues
 * @param uniqueValuesHash
 */
function sortUniqueValues(uniqueValues, uniqueValuesHash, comparator) {
    let hashKeys = Object.keys(uniqueValuesHash);
    hashKeys.sort(function (hashKeyA, hashKeyB) {
        let valuesIndexA = uniqueValuesHash[hashKeyA], valuesIndexB = uniqueValuesHash[hashKeyB], valuesA = uniqueValues[valuesIndexA], valuesB = uniqueValues[valuesIndexB];
        return comparator(valuesA, valuesB, hashKeyA, hashKeyB);
    });
    let oldUniqueValues = _.cloneDeep(uniqueValues), oldUniqueValuesHash = _.cloneDeep(uniqueValuesHash);
    // clear the original array and hash
    uniqueValues.length = 0;
    util.clearObject(uniqueValuesHash);
    hashKeys.forEach(function (hashKey, hashKeyIndex) {
        uniqueValuesHash[hashKey] = hashKeyIndex;
        let oldHashKeyIndex = oldUniqueValuesHash[hashKey];
        uniqueValues[hashKeyIndex] = oldUniqueValues[oldHashKeyIndex];
    });
}
/**
 * Maps a set of columns to a distinct name for each one of them.
 * If a column is the only one with its name in the set,
 * it is mapped to its original name (=column.getName()).
 * If there are multiple columns with the same name they are all mapped to
 * <columnName> (<tableName>), where tableName is the name of the table
 * to which the column belongs.
 * @param columns {Array}
 * @returns {Array}
 */
function getDistinctNamesForColumns(columns) {
    let columnNameToColumnCount = {};
    columns.forEach(function (column) {
        let columnName = column.getName();
        if (!columnNameToColumnCount.hasOwnProperty(columnName)) {
            columnNameToColumnCount[columnName] = 0;
        }
        columnNameToColumnCount[columnName]++;
    });
    return columns.map(function (column) {
        let columnName = column.getName(), columnCountWithSameName = columnNameToColumnCount[columnName];
        if (columnCountWithSameName === 1) {
            return columnName;
        }
        let sourceName = column.getSourceName(/* includeColumnName */ true);
        if (!sourceName) {
            return columnName;
        }
        return sourceName;
    });
}

/**
 * Copyright Thoughtspot Inc. 2016
 * Author:  Chabbey Francois (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview This class takes datas from callosum and return
 * an array of node and links
 *
 * We are assuming series of the form
 *
 *   [ [ <Node1>, <Node2>, <linkValue> ] , [...] ]
 *
 *
 */
let tableUtil = ngRequire('tableUtil');
class ChartNode {
    constructor(key, name, baseColumnIndex, value) {
        this.key = key;
        this.name = name;
        this.baseColumnIndex = baseColumnIndex;
        this.value = value;
    }
}
class ChartLink {
    constructor(key, value, formattedValue, source, target) {
        this.key = key;
        this.value = value;
        this.formattedValue = formattedValue;
        this.source = source;
        this.target = target;
    }
}
//TS will cast automatically for us when using this function
function isChartLink(chartElement) {
    return chartElement.source !== undefined;
}
class NetworkChartDataModel extends ChartDataModel {
    constructor(chartModel) {
        super();
        this.chartModel = chartModel;
        this._links = [];
        this._nodesMapById = new typed_2();
        this._nodeByColumn = [];
        this.init(chartModel);
        this.processData(chartModel);
    }
    get links() {
        return this._links;
    }
    get nodes() {
        return this._nodesMapById.getArray();
    }
    get nodeByColumn() {
        return this._nodeByColumn;
    }
    get hasNoData() {
        return !this._links || this._links.length === 0;
    }
    getNodeByKey(id) {
        return this._nodesMapById.getElementByKey(id);
    }
    init(chartModel) {
        // TODO(chab) remove if not used
    }
    addNodeToDictionaryIfNeeded(key, name, baseColumnIndex) {
        let node = this.getNodeByKey(key);
        if (!node) {
            node = new ChartNode(key, name, baseColumnIndex);
            this._nodesMapById.addElement(key, node);
            if (!this._nodeByColumn[baseColumnIndex]) {
                this._nodeByColumn[baseColumnIndex] = [];
            }
            this._nodeByColumn[baseColumnIndex].push(node);
        }
        return node;
    }
    processData(chartModel) {
        // Note(chab) determine what we want to do with Null Values (here or downstream?)
        let dataArray = chartModel.getDataArray();
        let queryDefinitions = chartModel.getQueryDefinitions();
        this._links = dataArray.reduce((links, linksArray, idx) => links.concat(this.processLinksArray(linksArray.getData(), queryDefinitions[idx].xAxisColumns[0], queryDefinitions[idx].xAxisColumns[1], queryDefinitions[idx].yAxisColumns[0])), []);
        this.maxNodesInColumns = _.values(this._nodeByColumn).reduce((acc, value) => {
            if (value.length > acc) {
                return value.length;
            }
            return acc;
        }, 0);
    }
    processLinksArray(links, sourceColumn, targetColumn, valueColumn) {
        let sourceColumnId = sourceColumn.getId(), sourceColumnDataIndex = sourceColumn.getDataRowIndex(), targetColumnId = targetColumn.getId(), targetColumnDataIndex = targetColumn.getDataRowIndex(), valueColumnDataIndex = valueColumn.getDataRowIndex(), sourceColumnIndex = this.chartModel.getXAxisColumns()
            .findIndex(c => c.getId() === sourceColumnId), targetColumnIndex = this.chartModel.getXAxisColumns()
            .findIndex(c => c.getId() === targetColumnId);
        this.formatter = (value) => {
            return valueColumn.getFormattedValue(value);
        };
        // we compute a key for each links, keys is based on <nodeSourceKey-nodeTargetKey>
        // we compute a key for each node, keys is <column-nodeValue>
        return links.map((link) => {
            let sourceValue = link[sourceColumnDataIndex], targetValue = link[targetColumnDataIndex], sourceName = this.getNodeName(sourceValue, sourceColumn), targetName = this.getNodeName(targetValue, targetColumn), value = link[valueColumnDataIndex], sourceNodeKey = `${sourceColumnId}-${sourceValue}`, targetNodeKey = `${targetColumnId}-${targetValue}`, source = this.addNodeToDictionaryIfNeeded(sourceNodeKey, sourceName, sourceColumnIndex), target = this.addNodeToDictionaryIfNeeded(targetNodeKey, targetName, targetColumnIndex);
            return new ChartLink(`${sourceNodeKey}-${targetNodeKey}`, value, this.getNodeName(value, valueColumn), source, target);
        });
    }
    getNodeName(value, column) {
        return column.getFormattedValue(value);
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 * Editor: Utsav Kapoor (utsav.kapoor@thoughtspot.com)
 *
 * @fileoverview Represents the single operator filter row.
 */
var FILTER_MODEL_TYPES;
(function (FILTER_MODEL_TYPES) {
    FILTER_MODEL_TYPES[FILTER_MODEL_TYPES["ATTRIBUTE"] = 0] = "ATTRIBUTE";
    FILTER_MODEL_TYPES[FILTER_MODEL_TYPES["MEASURE"] = 1] = "MEASURE";
    FILTER_MODEL_TYPES[FILTER_MODEL_TYPES["DATE"] = 2] = "DATE";
})(FILTER_MODEL_TYPES || (FILTER_MODEL_TYPES = {}));
// TODO(Jasmet): After answer is migrated to bach we should remove implements IAnswerVisualization
class FilterModelV3 {
    constructor(column, conditions, isCorrupt, id, answerModel) {
        this.isCorrupt = isCorrupt;
        this.needsDataFromServer = true;
        this.logger = logger_3('filter-model');
        this.column = column || null;
        this.conditions = conditions || [];
        this.id = id;
        this.answerModel = answerModel;
    }
    isSupportedByUI() {
        return this.column.isFilteringSupportedByUI();
    }
    getId() {
        return this.id;
    }
    getVizType() {
        return jsonConstants_1.vizType.FILTER;
    }
    getColumn() {
        return this.column;
    }
    getConditions() {
        return this.conditions;
    }
    getContainingAnswerModel() {
        return this.answerModel;
    }
    getBatchSize() {
        return flags.getValue(flags.BLINK_FLAGS.dataBatchSize.name)
            || blinkConstants_1.DEFAULT_DATA_BATCH_SIZE;
    }
    updateData() {
        this.logger.info('Update data for filter model called');
    }
    setReferencingViz() {
        this.logger.info('This is deprecated');
    }
    isGenericViz() {
        return false;
    }
    isCorrupted() {
        return this.isCorrupt;
    }
    isEmpty() {
        return this.conditions.every((condition) => {
            return !condition.condition.values || condition.condition.values.length === 0;
        });
    }
    isFilterNonEditable() {
        return this.conditions.some((condition) => {
            return !_.isUndefined(condition.condition.isEditable) &&
                !condition.condition.isEditable;
        });
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2013
 * Author: Stephane Kiss (stephane@thoughtspot.com)
 *
 * @fileoverview Service used to list all the event names, ensuring there
 * are no collisions or typos.
 */
const events = {
    // events for central alerting mechanism
    SHOW_ALERT_D: 'show-alert-d',
    HIDE_ALERT_D: 'hide-alert-d',
    USER_AUTHENTICATED_D: 'user-authenticated-d',
    SHOW_HIDE_LOADING_OVERLAY_D: 'show-hide-loading-overlay-d',
    // Sage
    SAGE_LOADED_U: 'sage-loaded-u',
    HOME_SAGE_ANIMATION_DONE_D: 'home-sage-animation-done-d',
    SAGE_BAR_STATE_VALID_U: 'sage-bar-state-valid-u',
    SAGE_BAR_STATE_VALID_D: 'sage-bar-state-valid-d',
    SAGE_BAR_STATE_INVALID_U: 'sage-bar-state-invalid-u',
    SAGE_BAR_STATE_INVALID_D: 'sage-bar-state-invalid-d',
    CLOSE_SAGE_BAR_DROPDOWN_D: 'close-sage-bar-dropdown-d',
    CLEAR_SAGE_QUERY_D: 'clear-sage-query-d',
    CLEAR_AND_HIDE_POPUP_MENU: 'clear-and-hide-popup-menu',
    REFRESH_SAGE_DATA_SOURCES_D: 'refresh-sage-data-sources-d',
    TOGGLE_CURTAIN: 'toggle-curtain',
    SHOW_SAGE_BUBBLE_D: 'show-sage-bubble-d',
    HIDE_SAGE_BUBBLE_U: 'hide-sage-bubble-u',
    HIDE_SAGE_BUBBLE_D: 'hide-sage-bubble-d',
    SHOW_EXPRESSION_EDITOR_TOOLTIP: 'show-formula-editor-tooltip',
    HIDE_EXPRESSION_EDITOR_TOOLTIP: 'hide-formula-editor-tooltip',
    UPDATE_TOOLTIP: 'update-tooltip',
    PINBOARD_RENDERED: 'pinboard-rendered',
    RELOAD_PINBOARD_D: 'reload-pinboard-d',
    RELOAD_PINBOARD_DATA: 'reload-pinboard-data',
    RERENDER_PINBOARD_U: 'rerender_pinboard_u',
    LOAD_GENERIC_VIZ: 'load-generic-viz',
    CANCEL_RENDERING: 'cancel-rendering',
    PINBOARD_VISUALIZATION_QUERY_CHANGED_D: 'pinboard-visualization-query-changed-d',
    PINBOARD_UPDATE_VIEWPORT: 'pinboard-update-viewport',
    DOWNLOAD_TABLE: 'download-table',
    DOWNLOAD_EXCEL_FILE_U: 'download-excel-file-u',
    DOWNLOAD_CHART: 'download-chart',
    DOCUMENT_SAVED: 'document-saved',
    PINBOARD_SUBSCRIBED: 'pinboard-subscribed',
    PINBOARD_UNSUBSCRIBED: 'pinboard-unsubscribed',
    SHOW_SUBSCRIBE_PRIMARY: 'show-subscribe-primary',
    SHOW_SUBSCRIBE_SECONDARY: 'show-subscribe-secondary',
    FILTER_DISPLAY_STATE_CHANGED_U: 'filter-display-state-changed-u',
    CHART_RENDER_REQUIRED_U: 'chart-render-required-u',
    TABLE_RENDER_REQURIED_U: 'table-render-required-u',
    FORCE_ANSWER_REPAINT_U: 'force-repaint-answer-u',
    TABLE_COLUMN_SELECTED_U: 'table-column-selected-u',
    DRILL_OPTION_CLICK_U: 'drill-option-click-u',
    ADD_FORMULA_COLUMN_U: 'add-formula-u',
    ADD_FORMULA_COLUMN_D: 'add-formula-d',
    CHART_TYPE_CHANGED_U: 'chart-type-changed-u',
    CHART_NEEDS_REDRAW_U: 'chart-needs-redraw-u',
    HIDE_CHART_TOOLBAR_U: 'hide-chart-toolbar-u',
    CHART_CREATED: 'chart-created',
    CHART_CONFIG_CHANGE: 'chart-config-change',
    ANSWER_VIEWPORT_CHANGED_U: 'answer-viewport-changed-u',
    LOAD_VIZ_DATA: 'load-viz-data-d',
    LIST_RENDERED_U: 'list-rendered-u',
    LEFT_PANEL_RENDERED_U: 'left-panel-rendered-u',
    LEFT_PANEL_COMPONENT_RENDERED_U: 'left-panel-component-rendered-u',
    HOME_PAGE_LOADED_U: 'home-page-loaded-u',
    TILE_REMOVE_BTN_CLICKED_U: 'tile-remove-btn-clicked-u',
    TILE_REMOVE_USER_CONFIRMED_U: 'tile-remove-user-confirmed-u',
    SHOW_VIZ_CONTEXT_U: 'show-viz-context-u',
    SHOW_VIZ_CONTEXT_USER_CONFIRMED_U: 'show-viz-context-user-confirmed-u',
    VIZ_MENU_TOGGLE: 'viz-menu-toggle',
    ANSWER_UI_RENDERED_U: 'answer-ui-rendered-u',
    UNSAVED_CHANGES_RESOLVED_U: 'unsaved-changes-resolved-u',
    ANSWER_DISPLAY_MODE_CHANGE: 'answer-display-mode-change',
    SAVE_BUTTON_CLICKED_D: 'save-button-clicked-d',
    SAVEAS_BUTTON_CLICKED_D: 'saveas-button-clicked-d',
    MAKECOPY_BUTTON_CLICKED_D: 'makecopy-button-clicked-d',
    SHARE_BUTTON_CLICKED_D: 'share-button-clicked-d',
    SCHEDULE_BUTTON_CLICKED_D: 'schedule-button-clicked-d',
    VIEW_SCHEDULE_BUTTON_CLICKED_D: 'view-schedules-button-clicked-d',
    COPY_LINK_BUTTON_CLICKED_D: 'copy-link-button-clicked-d',
    ADD_FILTER: 'add-filter',
    PINBOARD_INFO_BUTTON_CLICKED_D: 'pinboard-info-button-clicked-d',
    PINBOARD_REMOVE_BUTTON_CLICKED_D: 'pinboard-remove-button-clicked-d',
    LAYOUT_REFLOW_REQUIRED_U: 'layout-reflow-required-u',
    AXIS_RANGE_SET: 'axis-range-set',
    WIDGET_SLIDER_HANDLE_MOVED_U: 'widget-slider-handle-moved-u',
    TOUR_INTRO_D: 'tour-intro-d',
    USERDATA_IMPORT_BTN_CLICKED_D: 'userdata-import-btn-clicked-d',
    DATA_IMPORT_CANCELED_U: 'data-import-canceled-u',
    CLEAR_USER_AUTOCOMPLETE: 'clear-user-autocomplete',
    OPEN_FILTER_PANEL: 'open-filter-panel',
    SHOW_OVERLAY_ON_DOCUMENT: 'show-overlay-on-document',
    HIDE_DOCUMENT_OVERLAY: 'hide-document-overlay',
    REMOVE_ALL_WORKSHEET_COLUMNS_D: 'remove-all-worksheet-columns',
    SHOW_FORMULA_EDITOR_D: 'show-formula-editor',
    FILTER_METADATA_BY_LABEL_D: 'filter-metadata-by-label-d',
    RESET_LABEL_SELECTION_D: 'label-selection-reset-d',
    dataManagement: {
        SELECTION_CHANGED: 'data-management-selection-changed',
        LINK_COLUMN: 'data-management-link-column',
        NEW_SOURCE_ADDED: 'data-management-new-source-added',
        SOURCE_DELETED: 'data-management-source-deleted',
        TABLE_DATA_REFRESHED: 'table-data-refreshed'
    },
    TIPS_HELP_WIDGET: 'tips-help-widget',
    RELATIONSHIP_ADD_SUCCESSFUL: 'relationship-add-successful',
    RELATIONSHIP_DELETE_SUCCESSFUL: 'relationship-delete-successful',
    RELATIONSHIP_UPDATE_SUCCESSFUL: 'relationship-update-successful',
    SWITCH_RELATIONSHIP_EDIT_MODE: 'switch-relationship-edit-mode',
    EMBRACE_CREATE_CONNECTION_SUCCESSFUL: 'embrace-create-connection-successful',
    EMBRACE_UPDATE_CONNECTION_SUCCESSFUL: 'embrace-update-connection-successful',
    EMBRACE_SYNC_REFRESH: 'EMBRACE_SYNC_REFRESH',
    API_ALERT_D: 'api-alert-d',
    VIZ_ADDED_TO_PINBOARD_U: 'viz-added-to-pinboard-u',
    REPINING_FROM_VIZ_TILE: 'repining-from-viz-tile',
    api: {
        EXPORT_VIZ_DATA_TO_PARENT: 'exportVizDataToParent',
        ALERT: 'alert',
        EXPORT_VIZ_DATA_TO_CHILD: 'exportVizDataToChild',
        GET_DATA: 'getData'
    }
};
Provide('events')(events);

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Ashish Shubham (ashish.shubham@thoughtspot.com)
 *
 * Wrapper on top of a promise to suppress
 * the resolve/reject call if the caller cancels the promise
 */
var CancelablePromise_1;
let $q$3 = ngRequire('$q');
let CancelablePromise = CancelablePromise_1 = class CancelablePromise {
    /**
     * @param {Promise} promise
     * @returns {Promise}
     */
    constructor(promise, onCancel = _.noop) {
        this.promise = promise;
        this.onCancel = onCancel;
    }
    cancel() {
        this.cancelResolutions = true;
        this.onCancel();
    }
    then(resolveFn, rejectFn) {
        let self = this;
        let newPromise = new CancelablePromise_1(self.promise.then(function () {
            if (self.cancelResolutions) {
                return;
            }
            if (!!resolveFn) {
                return resolveFn.apply(self, arguments);
            }
        }, function (response) {
            if (self.cancelResolutions) {
                return;
            }
            if (!!rejectFn) {
                return rejectFn.apply(self, arguments);
            }
            return $q$3.reject(response);
        }));
        // Prototype set to propagate properties down the chain.
        // if a parent is cancelled, the children are cancelled too.
        // but not vice-versa.
        Object.setPrototypeOf(newPromise, this);
        return newPromise;
    }
    catch(rejectFn) {
        return this.then(null, rejectFn);
    }
    finally(finallyFn) {
        return this
            .then(finallyFn, (err) => {
            finallyFn(err);
            throw err;
        });
    }
};
CancelablePromise = CancelablePromise_1 = __decorate([
    Provide('CancelablePromise')
], CancelablePromise);

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview The goal of this service is to provide route replated APIs to the app.
 */
let $rootScope = ngRequire('$rootScope');
let $route = ngRequire('$routeWrapper');
let currentWatches = {};
let globalWatch = _.noop;
let onRouteChange = new Subject_2();
let onBeforeRouteChange = new Subject_2();
Provide('routeService')({
    onRouteChange,
    onBeforeRouteChange,
    getRouteParameters: getRouteParameters,
    getRouteParameter: getRouteParameter,
    getCurrentCanvasState,
    getCurrentPage: getCurrentPage,
    setupRouteParameterChangeWatch: setupRouteParameterChangeWatch
});
function getRouteParameters() {
    return $route.getCurrentRoute();
}
function getRouteParameter(propertyName) {
    let params = _.get($route.getCurrentRoute(), 'params', {});
    return params[propertyName];
}
function getCurrentPage() {
    let route = $route.getCurrentRoute();
    return route.page;
}
function getCurrentCanvasState() {
    return getRouteParameters().canvasState;
}
function setupRouteParameterChangeWatch(propertyName, onRouteChange, canvasState) {
    const id = jsUtil_1();
    currentWatches = currentWatches || {};
    currentWatches[propertyName] = currentWatches[propertyName] || {};
    let watchesOnProperty = currentWatches[propertyName];
    watchesOnProperty[id] = function (currentCanvasState, value) {
        let triggerRouteChangeCallback = !!canvasState ? currentCanvasState === canvasState : true;
        if (triggerRouteChangeCallback) {
            onRouteChange(value);
        }
    };
    return function () {
        delete watchesOnProperty[id];
    };
}

/**
 * Copyright: ThoughtSpot Inc. 2016-2019
 * Author: Archit Bansal (archit.bansal@thoughtspot.com),
 *         Rifdhan Nazeer (rifdhan.nazeer@thoughtspot.com)
 */
let SageResponse = class SageResponse {
    constructor(answerResponse, debugCallback) {
        this.answerResponse = answerResponse;
        this.debugCallback = debugCallback;
        this.answerResponse = answerResponse || {};
        this.debugCallback = debugCallback || _.noop;
    }
};
SageResponse = __decorate([
    Provide('SageResponse')
], SageResponse);

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Rahul Paliwal (rahul@thoughtspot.com),
 * Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Service to interact with AutoComplete server (Sage Server)
 */
var FeatureFlag = sage$1.auto_complete.v2.FeatureFlag.E;
let $q$4 = ngRequire('$q');
let alertService = ngRequire('alertService');
let debugInfoCollector = ngRequire('debugInfoCollector');
let messageService$2 = ngRequire('messageService');
let serviceNames = ngRequire('serviceNames');
let _logger$5 = logger_3('auto-complete-service');
let _transport = new Thrift.Transport(flags.getValue(flags.BLINK_FLAGS.sageBasePathV2.name));
let _protocol = new Thrift.Protocol(_transport);
let _timeout = flags.getValue(flags.BLINK_FLAGS.sageTimeout.name);
let _autoCompleteClient = new thrift.Sage.AutoComplete.AutoCompleteV2Client(_protocol);
let REQUEST_ID = 0;
let enliteRequestCount = 0;
/**
 * @param str
 * @returns {number} length of @str if available, 0 otherwise.
 */
function lengthOrZero(str) {
    return str && str.length ? str.length : 0;
}
/**
 * Gets a new ACRequestInfo object.
 * @returns {sage.ACRequestInfo}
 */
function getRequestInfoObject(requestFeatures = new Set()) {
    let requestInfo = new sage.ACRequestInfo();
    requestInfo.setRequestCallId(++REQUEST_ID);
    let totalSageCallTimeBudget = flags.getValue(flags.BLINK_FLAGS.sageTimeout.name);
    let sageNetworkBudget = flags.getValue(flags.BLINK_FLAGS.sageNetworkBudget.name);
    let sageProcessingBudget = totalSageCallTimeBudget - sageNetworkBudget;
    if (isNaN(sageProcessingBudget) || sageProcessingBudget <= 0) {
        // something wrong with the params, let the time budget be the default
        _logger$5.warn('sageProcessingBudget is not a positive number', sageProcessingBudget, flags.getValue(flags.BLINK_FLAGS.sageTimeout.name), flags.getValue(flags.BLINK_FLAGS.sageNetworkBudget.name));
    }
    else {
        requestInfo.setTimeBudget(sageProcessingBudget);
    }
    requestInfo.setLocale(getCurrentLocale());
    // set user guid and group mask obtained from /session/info
    let authToken = new sage.AuthToken();
    authToken.setUser(getUserGuid(), getUserName());
    authToken.setGroupMask(getUserGroupMask());
    requestInfo.setAuthToken(authToken);
    // NOTE: Currently if the app is not building worksheet using sage, it is building answer.
    if (!navService.isCurrentWorksheetPath()) {
        requestInfo.setIsAnswerPage();
    }
    else {
        let worksheetId = getRouteParameter('worksheetId') || null;
        requestInfo.setWorksheetId(worksheetId);
    }
    let clientTimestamp = (new Date()).getTime();
    requestInfo.setClientTimestamp(clientTimestamp);
    if (!!flags.getValue(flags.BLINK_FLAGS.sageSnapshotRequest.name)) {
        requestFeatures.add(FeatureFlag.WRITE_REQUEST_SNAPSHOT);
    }
    if (!!flags.getValue(flags.BLINK_FLAGS.enableSearchHistory.name)) {
        requestFeatures.add(FeatureFlag.WRITE_REQUEST_SNAPSHOT);
    }
    requestInfo.addRequestFeatures(requestFeatures);
    return requestInfo;
}
function beforeAutoCompleteCall(requestInfo, apiName) {
    let blinkNetworkTrace = getNewNetworkTrace();
    blinkNetworkTrace.setUrl(apiName);
    return blinkNetworkTrace;
}
function afterAutoCompleteCall(blinkNetworkTrace) {
    blinkNetworkTrace.end();
}
/**
 * Creates a default callback handler for sage calls.
 * @param deferred
 * @param responseClass
 * @param debugInfo
 * @param debugCallback
 * @returns {{success: Function, error: Function,
 *           timeout: (_defaultEnv.sageTimeout|*|me.sageTimeout|t.sageTimeout)}}
 */
function getDefaultCallback(blinkNetworkTrace, deferred, responseClass, debugInfo, debugCallback) {
    blinkNetworkTrace.start();
    return {
        success: function (thriftResponse) {
            afterAutoCompleteCall(blinkNetworkTrace);
            let status = sage.deserialize(thriftResponse.status, sage.common.StatusProto);
            let statusCode = (typeof status.getCode === 'function') && status.getCode();
            if (statusCode !== sage.common.ErrorCode.OK) {
                _logger$5.error(`###RESPONSE, ${debugInfo.requestId}, ${debugInfo.url}, 'FAILURE',
                    ${JSON.stringify({
                    response: thriftResponse,
                    status: status
                })}`);
                deferred.reject(status);
            }
            else {
                let decodedResponse = sage.deserialize(thriftResponse.response, responseClass);
                if (decodedResponse && _.isFunction(decodedResponse.getInfo)) {
                    debugInfo.incidentId = decodedResponse.getInfo()
                        && _.isFunction(decodedResponse.getInfo().getIncidentId)
                        && decodedResponse.getInfo().getIncidentId();
                }
                // This particular logging involves a deserialization, which should only
                // be done if logging will happen as this deserialization can be expensive
                // for large payloads.
                // This re-deserialization is done because, currently client makes changes
                // to sage responses, which are reflected in the logged object as well,
                // while we want to log objects as they came from the server.
                if (logger_5()) {
                    _logger$5.debug('###RESPONSE', debugInfo.requestId, debugInfo.url, 'SUCCESS', 'response', sage.deserialize(thriftResponse.response, responseClass), 'status', status);
                }
                deferred.resolve(new SageResponse(decodedResponse, debugCallback));
            }
            debugInfo.responseSize
                = lengthOrZero(thriftResponse.status)
                    + lengthOrZero(thriftResponse.response)
                    + lengthOrZero(thriftResponse.rpc_info);
            let rpcInfo = sage.deserialize(thriftResponse.rpc_info, net.rpc.RpcResponseInfo);
            if (rpcInfo && rpcInfo.getTrace() && rpcInfo.getTrace().getTraceId()) {
                debugInfo.traceId = rpcInfo.getTrace().getTraceId();
            }
            debugInfo.status = statusCode;
            debugInfoCollector.collect(serviceNames.SAGE, debugInfo);
        },
        error: function (jqueryXhr, textStatus, errorThrown) {
            let errorCode;
            if (errorThrown === 'abort') {
                return;
            }
            else if (errorThrown === 'timeout') {
                errorCode = messageService$2.blinkGeneratedErrors.SAGE_API_TIMEOUT;
            }
            else if (jqueryXhr.status === 404) {
                errorCode = messageService$2.blinkGeneratedErrors.SAGE_UNAVAILABLE;
            }
            else {
                errorCode = messageService$2.blinkGeneratedErrors.SAGE_UNKNOWN_ERROR;
            }
            alertService.showFailureAlert(errorCode);
            debugInfo.status = errorCode;
            debugInfoCollector.collect(serviceNames.SAGE, debugInfo);
            afterAutoCompleteCall(blinkNetworkTrace);
            _logger$5.error(`###RESPONSE', ${debugInfo.requestId}, ${debugInfo.url}, 'FAILURE',
                ${JSON.stringify({
                jqueryXhr: jqueryXhr,
                textStatus: textStatus
            })}`);
            deferred.reject(errorThrown);
        },
        timeout: _timeout
    };
}
/**
 * Returns debug info for thriftRequest.
 */
function createDebugInfo(thriftRequest, url, requestId) {
    /* eslint camelcase: 1 */
    let size = lengthOrZero(thriftRequest.request) + lengthOrZero(thriftRequest.rpc_info);
    return {
        method: 'POST',
        requestSize: size,
        timestamp: new Date().getTime(),
        url: url,
        requestId: requestId
    };
}
/**
 * Returns a new instance of thrift request that should be used to make
 * Sage queries.
 */
function newThriftRequest(traceId) {
    let request = new thrift.common.ThriftRequest();
    let rpcInfo = new net.rpc.RpcRequestInfo();
    // Instruct the server to not send entire trace payload back to client.
    rpcInfo.noFullTrace = true;
    rpcInfo.traceId = traceId;
    /* eslint camelcase: 1 */
    request.rpc_info = sage.serialize(rpcInfo);
    return request;
}
/**
 * Validates the queryContext for errors returning errors found.
 *
 * @param {sage.ACContext} queryContext
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.ACContextError
 */
function validateContext(queryContext) {
    let apiName = 'validateContext';
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let validateContextRequest = new sage.ValidateContextRequest({
        info: requestInfo,
        context: queryContext
    });
    thriftRequest.request = sage.serialize(validateContextRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, validateContextRequest);
    _autoCompleteClient.ValidateContext(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.ValidateContextResponse, debugInfo));
    return defer.promise;
}
function getRequestId() {
    return REQUEST_ID;
}
function getEnliteRequestCount() {
    return enliteRequestCount;
}
/**
 * Adds a table to the given context.
 *
 * @param {sage.ACContext} queryContext
 * @param {sage.ACTableRequest} tableRequest
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.AnswerResponse
 */
function addTable(queryContext, tableRequest) {
    let apiName = 'addTable';
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let addTableRequest = new sage.AddTableRequest({
        info: requestInfo,
        context: queryContext,
        table: tableRequest
    });
    thriftRequest.request = sage.serialize(addTableRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, addTableRequest);
    _autoCompleteClient.AddTable(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.AnswerResponse, debugInfo));
    return defer.promise;
}
/**
 * Updates the TableRequest at the given index in the given context.
 *
 * @param {sage.ACContext} queryContext
 * @param {int} index
 * @param {sage.ACTableRequest} tableRequest
 * @param {boolean} createDebugCallback [optional]
 * @param {object} userFeedback [optional]
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.AnswerResponse
 */
function editTable(queryContext, index, tableRequest, requestFeatures = new Set([FeatureFlag.ENABLE_OUT_OF_SCOPE_MATCHES]), createDebugCallback, userFeedback, queryStreamId) {
    let apiName = 'editTable';
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject(requestFeatures);
    if (queryStreamId) {
        requestInfo.setQueryStreamId(queryStreamId);
    }
    if (!!userFeedback) {
        // this is a replay request
        requestInfo.setUserFeedback(userFeedback);
    }
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let editTableRequest = new sage.EditTableRequest({
        info: requestInfo,
        context: queryContext,
        idx: index,
        table: tableRequest
    });
    thriftRequest.request = sage.serialize(editTableRequest);
    let debugCallback = void (0);
    if (createDebugCallback) {
        debugCallback = editTable.bind(void (0), queryContext, index, tableRequest, false);
    }
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, editTableRequest);
    let request = _autoCompleteClient.EditTable(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.AnswerResponse, debugInfo, debugCallback));
    return new CancelablePromise(defer.promise, () => request.abort());
}
/**
 * Updates a filter formula on a table
 *
 * @param {sage.ACFormula} filter
 * @param {sage.RecognizedToken} token
 * @param {string} tableGuid
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.TableFilterResponse
 */
function updateTableFilter(filter, token, tableGuid) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'updateTableFilter';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let updateTableFilterRequest = new sage.UpdateTableFilterRequest({
        info: requestInfo,
        filterDefn: filter,
        tableFilter: token,
        tableGuid
    });
    thriftRequest.request = sage.serialize(updateTableFilterRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, updateTableFilterRequest);
    _autoCompleteClient.UpdateTableFilter(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.TableFilterResponse, updateTableFilterRequest, debugInfo));
    return defer.promise;
}
/**
 * Applies given transforms to the table at given index.
 *
 * @param {Object[]}                    requests
 * @param {sage.ACContext}              requests[].queryContext
 * @param {int}                         requests[].index
 * @param {Array<sage.QueryTransform>}  requests[].transformations
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.BatchResponse
 */
function batchTransform(requests) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'batch';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let transformRequests = requests.map(function (request) {
        let queryContext = request.queryContext;
        let index = request.index;
        let transformations = request.transformations;
        let transformRequest = new sage.TransformTableRequest({
            info: requestInfo,
            context: queryContext,
            idx: index,
            transform: transformations
        });
        return sage.Request.createTransformRequest(transformRequest);
    });
    let batchRequest = sage.BatchRequest.create({ request: transformRequests });
    thriftRequest.request = sage.serialize(batchRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, batchRequest);
    _autoCompleteClient.Batch(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.BatchResponse, debugInfo));
    return defer.promise;
}
function createGetAccessibleTableRequest(requestInfo, context, index) {
    let getAccessibleTablesRequest = new sage.GetAccessibleTablesRequest({
        info: requestInfo,
        context,
        idx: index
    });
    return getAccessibleTablesRequest;
}
/**
 * Gets list of accessible tables.
 *
 * @param {sage.ACContext} queryContext
 * @param {int} index
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.AnswerResponse
 */
function getAccessibleTables(queryContext, index) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let getAccessibleTablesRequest = createGetAccessibleTableRequest(requestInfo, queryContext, index);
    let apiName = 'getAccessibleTables';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    thriftRequest.request = sage.serialize(getAccessibleTablesRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, getAccessibleTablesRequest);
    _autoCompleteClient.GetAccessibleTables(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.GetAccessibleTablesResponse, debugInfo));
    return defer.promise;
}
function batchGetAccessibleTables(requests) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'batch';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let getAccessibleTablesRequests = requests.map(function (request) {
        let queryContext = request.queryContext;
        let index = request.index;
        let sageRequest = createGetAccessibleTableRequest(requestInfo, queryContext, index);
        return sage.Request.createGetAccessibleTablesRequest(sageRequest);
    });
    let batchRequest = sage.BatchRequest.create(getAccessibleTablesRequests);
    thriftRequest.request = sage.serialize(batchRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, batchRequest);
    _autoCompleteClient.Batch(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.BatchResponse, debugInfo));
    return defer.promise;
}
/**
 * Deletes the table at index from the given context.
 *
 * @param {sage.ACContext} queryContext
 * @param {int} index
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.AnswerResponse
 */
function deleteTable(queryContext, index) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'deleteTable';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let deleteTableRequest = new sage.DeleteTableRequest({
        info: requestInfo,
        context: queryContext,
        idx: index
    });
    thriftRequest.request = sage.serialize(deleteTableRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, deleteTableRequest);
    _autoCompleteClient.DeleteTable(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.AnswerResponse, debugInfo));
    return defer.promise;
}
/**
 * Adds a join to the given context.
 *
 * @param {sage.ACContext} queryContext
 * @param {sage.ACJoinRequest} joinRequest
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.JoinResponse
 */
function addJoin(queryContext, joinRequest) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'addJoin';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let addJoinRequest = new sage.AddJoinRequest({
        info: requestInfo,
        context: queryContext,
        join: joinRequest
    });
    thriftRequest.request = sage.serialize(addJoinRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, addJoinRequest);
    _autoCompleteClient.AddJoin(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.JoinResponse, debugInfo));
    return defer.promise;
}
/**
 * Updates the JoinRequest at the given index in the given context.
 *
 * @param {sage.ACContext} queryContext
 * @param {int} index
 * @param {sage.ACJoinRequest} joinRequest
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.JoinResponse
 */
function editJoin(queryContext, index, joinRequest) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'addJoin';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let editJoinRequest = new sage.EditJoinRequest({
        info: requestInfo,
        context: queryContext,
        idx: index,
        join: joinRequest
    });
    thriftRequest.request = sage.serialize(editJoinRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, editJoinRequest);
    _autoCompleteClient.EditJoin(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.JoinResponse, debugInfo));
    return defer.promise;
}
/**
 * Deletes the join at index from the given context.
 *
 * @param {sage.ACContext} queryContext
 * @param {int} index
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.JoinResponse
 */
function deleteJoin(queryContext, index) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'deleteJoin';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let deleteJoinRequest = new sage.DeleteJoinRequest({
        info: requestInfo,
        context: queryContext,
        idx: index
    });
    thriftRequest.request = sage.serialize(deleteJoinRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, deleteJoinRequest);
    _autoCompleteClient.DeleteJoin(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.JoinResponse, debugInfo));
    return defer.promise;
}
/**
 * Deletes the join at index from the given context.
 *
 * @param {sage.ACContext} context
 * @param {sage.ACTableRequest} worksheetRequest
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.WorksheetResponse
 */
function updateWorksheet(context, worksheetRequest) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'updateWorksheet';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let updateWorksheetRequest = new sage.UpdateWorksheetRequest({
        info: requestInfo,
        context: context,
        worksheet: worksheetRequest
    });
    thriftRequest.request = sage.serialize(updateWorksheetRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, updateWorksheetRequest);
    _autoCompleteClient.UpdateWorksheet(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.WorksheetResponse, debugInfo));
    return defer.promise;
}
/**
 * Transforms the worksheet
 * @param {sage.ACContext} context
 * @param {Array<sage.QueryTransform>} transformations
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.WorksheetResponse
 */
function transformWorksheet(context, transformations) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'transformWorksheet';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let transformWorksheetRequest = new sage.TransformWorksheetRequest({
        info: requestInfo,
        context,
        transform: transformations
    });
    thriftRequest.request = sage.serialize(transformWorksheetRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, transformWorksheetRequest);
    _autoCompleteClient.TransformWorksheet(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.WorksheetResponse, debugInfo));
    return defer.promise;
}
/**
 * Removes all `unknown` tokens from the sage query of the worksheet. This handles cases
 * where the underlying column is broken/hidden or otherwise unavailable.
 * @param {sage.ACContext} context
 * @returns {*}
 */
function removeAllBrokenColumnsFromWorksheet(context) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    requestInfo.setDeleteInvalidPhrases(true);
    let apiName = 'transformWorksheet';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let transformWorksheetRequest = new sage.TransformWorksheetRequest({
        info: requestInfo,
        context,
        transform: []
    });
    thriftRequest.request = sage.serialize(transformWorksheetRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, transformWorksheetRequest);
    _autoCompleteClient.TransformWorksheet(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.WorksheetResponse, debugInfo));
    return defer.promise;
}
/**
 * Updates the formula.
 * @param expressionRequest {sage.ACTableRequest}
 * @param formulaContext {sage.ACContext}
 * @param formulaId {string} - GUID of the formula being edited,
 *                             will be empty if GUID is not yet assigned.
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.FormulaResponse
 */
function updateExpression(expressionRequest, formulaContext, formulaId) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'updateFormula';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let updateFormulaRequest = new sage.UpdateFormulaRequest({
        info: requestInfo,
        context: formulaContext,
        table: expressionRequest,
        formulaId
    });
    thriftRequest.request = sage.serialize(updateFormulaRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, updateFormulaRequest);
    _autoCompleteClient.UpdateFormula(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.FormulaResponse, debugInfo));
    return defer.promise;
}
/**
 * Batch Updates the formula.
 *
 * @param {Object[]}                    requests
 * @param {sage.ACTableRequest}         requests[].expressionRequest
 * @param {sage.ACContext}              requests[].context
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.BatchResponse
 */
function batchUpdateExpression(requests) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'batchUpdateFormula';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let updateExpressionRequests = requests.map(function (request) {
        let context = request.context;
        let tableRequest = request.expressionRequest;
        let formulaId = request.formulaId;
        let transformRequest = new sage.UpdateFormulaRequest({
            info: requestInfo,
            context,
            table: tableRequest,
            formulaId
        });
        return sage.Request.createUpdateFormulaRequest(transformRequest);
    });
    let batchRequest = sage.BatchRequest.create(updateExpressionRequests);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, batchRequest);
    _autoCompleteClient.Batch(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.BatchResponse, debugInfo));
    return defer.promise;
}
/**
 * Makes a Ping request to Sage to check connectivity.
 *
 * @returns {Promise<void>}
 */
function ping() {
    let defer = $q$4.defer();
    let apiName = 'ping';
    let blinkNetworkTrace = beforeAutoCompleteCall(void 0, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let pingRequest = new sage.PingRequest();
    thriftRequest.request = sage.serialize(pingRequest);
    let debugInfo = createDebugInfo(thriftRequest, 'ping', ++REQUEST_ID);
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, pingRequest);
    _autoCompleteClient.Ping(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.PingResponse, debugInfo));
    return defer.promise;
}
/**
 * Refreshes all the column ids in the context
 *
 * @param {sage.ACContext} queryContext
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.RefreshGuidsResponse
 */
function refreshGuids(queryContext) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'refreshGuids';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let refreshGuidsRequest = new sage.RefreshGuidsRequest({
        info: requestInfo,
        context: queryContext
    });
    thriftRequest.request = sage.serialize(refreshGuidsRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, refreshGuidsRequest);
    _autoCompleteClient.RefreshGuids(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.RefreshGuidsResponse, debugInfo));
    return defer.promise;
}
/**
 * Saves the formula in the context
 *
 * @param {sage.ACContext} queryContext
 * @param {sage.ACFormula} formula
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.AnswerResponse
 */
function saveFormula(queryContext, formula, queryStreamId) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    if (queryStreamId) {
        requestInfo.setQueryStreamId(queryStreamId);
    }
    let apiName = 'saveFormula';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let saveFormulaRequest = new sage.SaveFormulaRequest({
        info: requestInfo,
        context: queryContext,
        formula
    });
    thriftRequest.request = sage.serialize(saveFormulaRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, saveFormulaRequest);
    let request = _autoCompleteClient.SaveFormula(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.AnswerResponse, debugInfo));
    return new CancelablePromise(defer.promise, () => request.abort());
}
/**
 * Removes the formula in the context
 *
 * @param {sage.ACContext} queryContext
 * @param {sage.ACFormula} formula
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.AnswerResponse
 */
function removeFormula(queryContext, formula, queryStreamId) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    if (queryStreamId) {
        requestInfo.setQueryStreamId(queryStreamId);
    }
    let apiName = 'removeFormula';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let removeFormulaRequest = new sage.RemoveFormulaRequest({
        info: requestInfo,
        context: queryContext,
        formula
    });
    thriftRequest.request = sage.serialize(removeFormulaRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, removeFormulaRequest);
    let request = _autoCompleteClient.RemoveFormula(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.AnswerResponse, debugInfo));
    return new CancelablePromise(defer.promise, () => request.abort());
}
/**
 * Adds a filter formula to a table guid
 *
 * @param {sage.ACFormula} filter
 * @param {string} tableGuid
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.TableFilterResponse
 */
function addTableFilter(filter, tableGuid) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let apiName = 'addTableFilter';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let addTableFilterRequest = new sage.AddTableFilterRequest({
        info: requestInfo,
        filterDefn: filter,
        tableGuid
    });
    thriftRequest.request = sage.serialize(addTableFilterRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, addTableFilterRequest);
    _autoCompleteClient.AddTableFilter(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.TableFilterResponse, debugInfo));
    return defer.promise;
}
/**
 * Applies given transforms to the table at given index.
 *
 * @param {sage.ACContext} queryContext
 * @param {int} index
 * @param {Array<sage.QueryTransform>} transformations
 *
 * @returns {Promise<SageResponse>}
 * SageResponse.answerResponse: sage.AnswerResponse
 */
function transformTable(queryContext, index, transformations, queryStreamId) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    if (queryStreamId) {
        requestInfo.setQueryStreamId(queryStreamId);
    }
    let apiName = 'transformTable';
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, apiName);
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let transformTableRequest = new sage.TransformTableRequest({
        info: requestInfo,
        context: queryContext,
        idx: index,
        transform: transformations
    });
    thriftRequest.request = sage.serialize(transformTableRequest);
    let debugInfo = createDebugInfo(thriftRequest, apiName, requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, transformTableRequest);
    let request = _autoCompleteClient.TransformTable(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.AnswerResponse, debugInfo));
    return new CancelablePromise(defer.promise, () => request.abort());
}
function getInterpretations(context, selectedDisambiguations) {
    enliteRequestCount++;
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, 'processNLRequest');
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    if (!!flags.getValue(flags.BLINK_FLAGS.disableUBR.name)) {
        requestInfo.disableUBRFeedback();
    }
    let processNLRequest = new sage.ProcessNLRequest({
        info: requestInfo,
        context
    });
    processNLRequest.setDataScopeLogicalTables(getSources());
    processNLRequest.queryRewriteChoice = selectedDisambiguations;
    thriftRequest.request = sage.serialize(processNLRequest);
    let debugInfo = createDebugInfo(thriftRequest, 'processNLRequest', requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, processNLRequest);
    _autoCompleteClient.ProcessNL(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.ProcessNLResponse, processNLRequest, debugInfo));
    return defer.promise;
}
function getNLCompletions(context, currentlyEditedToken, cursorOffset) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, 'completeNLRequest');
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let completeNLRequest = new sage.CompleteNLRequest({
        info: requestInfo,
        context
    });
    completeNLRequest.setDataScopeLogicalTables(getSources());
    let nlTableRequest = new sage.NLTableRequest();
    nlTableRequest.currentlyEditedToken = currentlyEditedToken;
    nlTableRequest.cursorOffsetInToken = cursorOffset;
    nlTableRequest.inputToken = [];
    completeNLRequest.table = nlTableRequest;
    thriftRequest.request = sage.serialize(completeNLRequest);
    let debugInfo = createDebugInfo(thriftRequest, 'completeNLRequest', requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, completeNLRequest);
    let request = _autoCompleteClient.CompleteNL(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.CompleteNLResponse, completeNLRequest, debugInfo));
    return new CancelablePromise(defer.promise, () => request.abort());
}
function recordNLFeedback(context, mappingInfo, feedback) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, 'recordNLFeedbackRequest');
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let recordNLFeedbackRequest = sage.RecordNLFeedbackRequest.create({
        info: requestInfo,
        queryMappingInfo: mappingInfo,
        context
    });
    recordNLFeedbackRequest.setDataScopeLogicalTables(getSources());
    recordNLFeedbackRequest.feedbackType = feedback;
    thriftRequest.request = sage.serialize(recordNLFeedbackRequest);
    let debugInfo = createDebugInfo(thriftRequest, 'recordNLFeedbackRequest', requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, recordNLFeedbackRequest);
    _autoCompleteClient.RecordNLFeedback(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.RecordNLFeedbackResponse, recordNLFeedbackRequest, debugInfo));
    return defer.promise;
}
function getFollowUpSuggestions(context, tableIdx, vizDetails, requestedSuggestions, selectedSuggestions) {
    let defer = $q$4.defer();
    let requestInfo = getRequestInfoObject();
    let blinkNetworkTrace = beforeAutoCompleteCall(requestInfo, 'followUpSuggestionRequest');
    let thriftRequest = newThriftRequest(blinkNetworkTrace.getTraceId());
    let followUpSuggestionRequest = new sage.FollowUpSuggestionRequest({
        info: requestInfo,
        context,
        tableIdx,
        vizDetail: vizDetails,
        suggestionInfo: requestedSuggestions,
        suggestion: selectedSuggestions
    });
    thriftRequest.request = sage.serialize(followUpSuggestionRequest);
    let debugInfo = createDebugInfo(thriftRequest, 'followUpSuggestionRequest', requestInfo.getRequestCallId());
    _logger$5.debug('###REQUEST', debugInfo.requestId, debugInfo.url, followUpSuggestionRequest);
    let request = _autoCompleteClient.FollowUpSuggestion(thriftRequest, getDefaultCallback(blinkNetworkTrace, defer, sage.FollowUpSuggestionResponse, debugInfo));
    return new CancelablePromise(defer.promise, () => request.abort());
}
Provide('autoCompleteService')({
    validateContext,
    addTable,
    editTable,
    transformTable,
    batchTransform,
    deleteTable,
    addJoin,
    editJoin,
    deleteJoin,
    updateWorksheet,
    transformWorksheet,
    removeAllBrokenColumnsFromWorksheet,
    updateExpression,
    batchUpdateExpression,
    refreshGuids,
    saveFormula,
    removeFormula,
    addTableFilter,
    updateTableFilter,
    ping,
    batchGetAccessibleTables,
    getAccessibleTables,
    getRequestId,
    getEnliteRequestCount,
    getInterpretations,
    getNLCompletions,
    recordNLFeedback,
    getFollowUpSuggestions,
    getRequestInfoObject
});

export { ChartDataModel as C, FilterModelV3 as F, HighchartDataModel as H, NetworkChartDataModel as N, SageResponse as S, UserWorkflowActionTypes as U, getUserActionFailureAlertContent as a, getAllCombinationsOfSize as b, areArraysSameSet as c, FILTER_MODEL_TYPES as d, events as e, getSageAggrTypeForCallosumAggrType as f, getNewACTableRequest as g, collectEvent as h, mapArrayToBooleanHash as i, computeAxisInfinityPlaceholderValue as j, alertConstants as k, logUserActionFailureEvent as l, mapArrayToHash as m, getUserActionSuccessAlertContent as n, getRequestInfoObject as o, editTable as p, startWorkflow as q, getNoMatchAlertContent as r, sessionStore as s, transformTable as t, isChartLink as u };
//# sourceMappingURL=chunk-1770fb42.js.map
