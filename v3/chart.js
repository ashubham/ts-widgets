import { _, a as __decorate } from './chunk-1bec01b6.js';
import { c as css, g as getCSSValue, L as LitElement, h as html, p as property, a as customElement } from './chunk-5329ead8.js';
import './chunk-5732a1e2.js';
import { P as Provide, n as ngRequire, x as logger_3, f as flags, j as jsonConstants_1, i as strings, e as blinkConstants_1, I as logger_1, F as numberUtil_14, q as sage$1, y as bach, J as logger_2, h as stringUtil_1 } from './chunk-68eb1584.js';
import { s as sage, i as isStackedChart, j as jsUtil_1, d as dateUtil_3, a as dateUtil_2, V as VisualizationColumnModel, c as chartTypes, b as computeBestChartAxisConfig, e as setChartAxisInClientState, f as setQueriesDefinition, g as getQueriesDefinitions, h as getUniqueIdForVizCol, k as getChartAxisFromClientState, C as ChartAxis, l as aggregateTypes, m as getColumnIdToDisambiguatedName, n as getChartProvider, o as chartProviders, p as ChartAxisConfig, v as validateAxisConfig, q as stackedVersionForChartType, r as addAttributeColumnToChart, t as tryAddingMeasureColumnToChart, u as hasNativeLegend, w as isGeoChartType, x as configOptions, y as getChartDataValidationError, z as useOrdinalXAxis, A as useMeasureOnXAxisAsOrdinal, B as useMeasureOnYAxisAsOrdinal, D as dateUtil_43, E as formatCompositeColumnValue, F as formatCompositeAxisValue, G as dateUtil_40, H as hasPersistentLegend, I as getYSEOPConfig, J as customColorSelectorConfig, K as getLegendLabels, L as chartTypesInDisplayOrder, M as areProvidersEqual, R as RequestTypes, N as isDimensionlessAggregationType, O as getAggregateLabel, Q as QuestionModel, P as PinboardVizModel, S as GeoConfig, T as Highcharts, U as typed_4, W as BaseChart, X as browserInfo, Y as getScrollEnabledMinMaxConfig, Z as onGridline, _ as offGridline, $ as ChartThemeService, a0 as convertToAlpha, a1 as getColors, a2 as isXAxisVertical, a3 as isCustomCalendar, a4 as getDateTickPositions, a5 as getFullLabelForXAxis, a6 as responsiveLayoutDisabledSpacingBottom, a7 as dateUtil_38, a8 as dateUtil_41, a9 as seriesOverride, aa as PARETO_ID, ab as genericTooltipData, ac as updateSeriesWithMarkerSettings, ad as getHighchartsType, ae as TooltipLabelType, af as getHyperlinkLabelHTML, ag as findSeriesColumnFromContext, ah as getDataLabelFromColumn, ai as getFullLabelForYAxis, aj as formatInfinityValue, ak as isChartBigEnoughToShowXAxisTicksLabels, al as isChartBigEnoughToShowYAxisTicksLabels, am as CustomStylingService, an as changeLocale, ao as initializeDateAndNumberUtils } from './chunk-31e8efbd.js';
import { g as getNewACTableRequest, a as getUserActionFailureAlertContent, l as logUserActionFailureEvent, C as ChartDataModel, H as HighchartDataModel, N as NetworkChartDataModel, s as sessionStore, b as getAllCombinationsOfSize, m as mapArrayToHash, c as areArraysSameSet, F as FilterModelV3, d as FILTER_MODEL_TYPES, e as events, f as getSageAggrTypeForCallosumAggrType, t as transformTable, h as collectEvent, i as mapArrayToBooleanHash, j as computeAxisInfinityPlaceholderValue } from './chunk-1770fb42.js';

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Rabi Shah (rabi.shah@thoughtspot.com)
 *
 * @fileoverview Constants specific to Embrace.
 *
 */
const CONNECTOR_IMG_SRC_MAP = {
    RDBMS_AZURE_SQL_DATAWAREHOUSE: '/resources/img/embrace/azure-sql-data-warehouse-ic@3x.png',
    RDBMS_GCP_BIGQUERY: '/resources/img/embrace/gcp-big-query-ic@3x.png',
    RDBMS_REDSHIFT: '/resources/img/embrace/aws-ic@3x.png',
    RDBMS_SALESFORCE: '/resources/img/embrace/salesforce-ic@3x.png',
    RDBMS_SNOWFLAKE: '/resources/img/embrace/snowflake-ic@3x.png',
    RDBMS_SERVICE_NOW: '/resources/img/embrace/service-now-ic@3x.png',
    RDBMS_SQLSERVER: '/resources/img/embrace/sql-server-ic@3x.png',
    RDBMS_MARKETO: '/resources/img/embrace/marketo-ic@3x.png',
    RDBMS_ORACLE: '/resources/img/embrace/oracle-ic@3x.png'
};
const CONNECTOR_DISPLAY_NAME = {
    RDBMS_AZURE_SQL_DATAWAREHOUSE: 'Azure Sql Data Warehouse',
    RDBMS_GCP_BIGQUERY: 'GCP BigQuery',
    RDBMS_REDSHIFT: 'Amazon Redshift',
    RDBMS_SALESFORCE: 'Salesforce',
    RDBMS_SNOWFLAKE: 'Snowflake',
    RDBMS_SERVICE_NOW: 'Service Now',
    RDBMS_SQLSERVER: 'SQL Server',
    RDBMS_MARKETO: 'Marketo',
    RDBMS_ORACLE: 'Oracle'
};
const QUERYABLE_SOURCES = {
    LOCAL: 'FALCON',
    LIVE: 'LIVE',
};
const EMBRACE_HISTORY = {
    HISTORY_POLLING_TIME: 30 * 1000
};
const EMBRACE_TABLE_LIST = {
    POLLING_TIME: 10 * 1000
};
const MAPPING = {
    DATA_MAPPING_FILE_NAME: 'connection.yaml'
};
const embraceConstants = {
    CONNECTOR_IMG_SRC_MAP,
    CONNECTOR_DISPLAY_NAME,
    QUERYABLE_SOURCES,
    EMBRACE_HISTORY,
    MAPPING,
    EMBRACE_TABLE_LIST
};
Provide('embraceConstants')({
    CONNECTOR_IMG_SRC_MAP,
    CONNECTOR_DISPLAY_NAME,
    QUERYABLE_SOURCES,
    EMBRACE_HISTORY,
    MAPPING,
    EMBRACE_TABLE_LIST
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2013
 * Author: Stephane Kiss (stephane@thoughtspot.com),
 * Shikhar Agarwal (shikhar@thoughtspot.com)
 *
 * @fileoverview utility functions for sage business logic
 */
let util = ngRequire('util');
let JoinDisambiguationHelper = ngRequire('JoinDisambiguationHelper');
let fontMetricService = ngRequire('fontMetricService');
let sageDataScopeService = ngRequire('sageDataScopeService');
let _logger = logger_3('sage-util');
let MAX_MORE_COMPLETIONS = 100;
/**
 * @param {Array.<string>} words
 * @return {Array.<sage.RecognizedToken>}
 */
function wordsToUnrecognizedTokens(words) {
    return words.map((word) => {
        return sage.RecognizedToken.createUnrecognizedToken(word);
    });
}
/**
 * Trim out empty unrecognized tokens from the right. Modifies tokens array.
 *
 * @param {Array.<sage.RecognizedToken>} tokens
 */
function removeTrailingUnrecognizedEmptyTokens(tokens) {
    while (tokens.length > 0) {
        let lastToken = tokens[tokens.length - 1];
        if (lastToken.isUnrecognized() && !lastToken.getTokenText()) {
            tokens.pop();
        }
        else {
            break;
        }
    }
    return tokens;
}
/**
 * Transform tokens by comparing the tokens with current input.
 * Suppose the tokens are [revenue, part name, container], all of them are recognized tokens.
 * Now imagine the user modified 'part name' to 'part ame'.
 * The resulting token array will look like
 * [revenue, _part_, _ame_, container] where _foo_ means an unrecognized token.
 *
 * @param {Array.<string>} untrimmedInputWords
 * @param {Array.<sage.RecognizedToken>} tokens
 * @return {Array.<sage.RecognizedToken>}
 */
function getTokensFromWords(untrimmedInputWords, tokens) {
    // Important: no trailing empty words or tokens
    // The logic of this function will break if either the input
    // word array has a trailing empty string, or
    // the tokens array has a trailing empty unrecognized token. Keep track of whether the input had
    // a trailing space, because then the final token list should
    // contain an empty unrecognized token.
    // Note(chab) we are going to ged rid of that in the new sage version
    let inputWords = util.arrayTrimRight(untrimmedInputWords), wasTrimmed = (inputWords.length < untrimmedInputWords.length), _tokens = removeTrailingUnrecognizedEmptyTokens(tokens);
    function getTokens(tokens) {
        // if we have no tokens, all words are considered as unrecognized tokens
        if (!tokens.length) {
            return wordsToUnrecognizedTokens(inputWords);
        }
        // we want to create unrecognized tokens from the input, there can be 2 situations
        // 1. User changed some tokens, so we need to find which tokens are now unrecognized
        // 2. User Input is after all already present tokens
        for (let i = 0; i < tokens.length; i++) {
            let rt = tokens[i];
            // switch to sge bar text
            let rtTokensArr = parseSageBarText(rt.getTokenTextLowerCase(), null);
            if (util.isPrefixArray(rtTokensArr, inputWords)) {
                while (rtTokensArr.length) {
                    rtTokensArr.shift();
                    inputWords.shift();
                }
            }
            else {
                // first token mismatch. see if rest of the tokens
                // are present in the rest of the array. if not, skip
                // the next token and retry for the tokens after
                // that. this way we can find which last set of tokens
                // are still present in the input, aligned to the end.
                let newUnrecognizedTokens;
                for (let j = i; j < tokens.length; j++) {
                    let lastFewTokens = tokens.slice(j), lastFewTokensAsWordsArray = tokensToWords(lastFewTokens);
                    if (util.isPostfixArray(lastFewTokensAsWordsArray, inputWords)) {
                        // seems like things changed between the i-th and j-th tokens.
                        // It could be one of the following:
                        //  1. just another char added/deleted to a token
                        //  2. space added in the middle of a word making it two words.
                        //  3. space removed between two words. This means two words joined.
                        //  4. A larger set of char added or deleted
                        //     through cut or  paste operations.
                        //
                        let end = lastFewTokensAsWordsArray.length;
                        let numUnmatchedWords = inputWords.length - end, unmatchedWords = inputWords.slice(0, numUnmatchedWords);
                        newUnrecognizedTokens = wordsToUnrecognizedTokens(unmatchedWords);
                        // tokens i..j-1 should be replaced by unrecognized tokens
                        // using the unmatched words
                        return tokens.
                            slice(0, i).
                            concat(newUnrecognizedTokens).
                            concat(lastFewTokens);
                    }
                }
                // tokens j..end did not match anywhere in rest of input.
                // so all the rest of input words will become
                // unrecognized tokens
                newUnrecognizedTokens = wordsToUnrecognizedTokens(inputWords);
                return tokens.slice(0, i).concat(newUnrecognizedTokens);
            }
        }
        // user typed after the tokens
        return tokens.concat(wordsToUnrecognizedTokens(inputWords));
    }
    tokens = getTokens(_tokens);
    if (wasTrimmed) {
        tokens.push(sage.RecognizedToken.createUnrecognizedToken());
    }
    return tokens;
}
function getPixelWidthOfSageInputString(txt) {
    let font = '14px Optimo-Plain,Helvetica Neue,Helvetica,Arial,sans-serif';
    return fontMetricService.getTextWidth(txt, font);
}
/**
 * Recognized tokens have many fields, but if the three fields
 * compared here match then for all intents they can be
 * considered equivalent.
 * @param {sage.RecognizedToken} token1
 * @param {sage.RecognizedToken} token2
 * @returns {boolean}
 */
function equalRecognizedTokens(token1, token2) {
    if (token1.isUnrecognized()) {
        if (token2.isUnrecognized()) {
            return token1.getTokenTextLowerCase() === token2.getTokenTextLowerCase();
        }
        else {
            return false;
        }
    }
    return token1.getTokenTextLowerCase() === token2.getTokenTextLowerCase() &&
        token1.getTypeEnum() === token2.getTypeEnum() && token1.guid === token2.guid;
}
/**
 * Given an input string, break it into words by looking for space('') or
 * operators (=, <, >, <=, >=, !=). If we find an operator anywhere
 * even if we don't have space separating them
 * we want them to become separate words. The return object gives us all the words.
 * If the caret is not overlapping with any token then,
 * we create an empty token at the caret so that server knows
 * that we are trying to generate a completion for that spot.
 * @param {string} inputString
 * @param {number=} caretPosition
 * @returns {Array}
 */
function parseSageBarText(inputString, caretPosition) {
    caretPosition = caretPosition === null ? inputString.length : caretPosition;
    let result = [], wordStart = 0;
    for (let i = 0, l = inputString.length; i < l; ++i) {
        if (inputString[i] === ' ' || inputString[i] === String.fromCharCode(160)) {
            if (wordStart < i
                || (wordStart === i && (i === caretPosition || i === caretPosition - 1))) {
                result.push(inputString.slice(wordStart, i));
            }
            wordStart = i + 1;
        }
    }
    if (wordStart < inputString.length) {
        result.push(inputString.slice(wordStart));
    }
    // If we have trailing space and cursor is at the end, or the string is empty,
    // we add a trailing empty word.
    if (result.length === 0 ||
        (inputString[inputString.length - 1] === ' '
            && caretPosition === inputString.length)) {
        result.push('');
    }
    return result;
}
/**
 * Find the contiguous suffix recognized tokens and its corresponding string.
 * The suffix is calculated till we reach
 * the caret position, an unrecognized token or extensible token which has
 * caret within it or at the boundary (See
 * assumptions).
 * Spaces in the input string are included only when they are between
 * 2 recognized tokens (NOT empty or unrecognized), both of which should be after the caret.
 * Here is the behaviour: 1. quantity__ab|c__revenue or qua|ntity__revenue.
 * This would return [revenue] and revenue
 * (and not __revenue).
 *
 * Assumption:
 * 1. Input tokens should not have any empty token
 * 2. For extensible tokens - Unlike while calculating prefix tokens,
 *    we do not have to see the character before the
 * the extensible token. For eg, revenue > 10 and we paste/type something
 * before 10, caret would always be at the end
 * of this new substring: revenue > abc|10. Because we don't include extensible
 * tokens even if caret is at the boundary,
 * we are fine.
 *
 * TODO (Shikhar) - make this function pvt and update the unit test
 * to use the public method partitionInput...
 *
 * Note: In future, if we want to bring notion of empty token again, you can check this:
 * http://mothership:8080/#/c/9238/2 (patch set 2)
 * It also has unit tests for the same.
 *
 * @param inputStrLwrCase - input string in lower case
 * @param tokens
 * @param caretPosition
 * @returns {{suffixTokens: Array, suffixLen: number}}
 */
function getSuffixRecognizedTokensInfo(inputStrLwrCase, tokens, caretPosition, isCaretBetweenTokens = false) {
    let currentEndPos = inputStrLwrCase.length - 1, suffixObj = {
        suffixTokens: [],
        suffixLen: 0,
        suffixStartIndex: inputStrLwrCase.length - 1
    };
    if (currentEndPos < 0 || !tokens.length || caretPosition >= inputStrLwrCase.length) {
        return suffixObj;
    }
    for (let i = tokens.length - 1; i >= 0; i--) {
        let token = tokens[i];
        if (token.isUnrecognized()) {
            if (token.isEmpty()) {
                _logger.warn('Empty token found while calculating suffix tokens');
                _logger.debug('Empty token found while calculating suffix tokens', inputStrLwrCase, tokens, caretPosition);
            }
            return suffixObj;
        }
        // Remove white spaces at the end of each token
        let k = currentEndPos;
        for (; k >= 0 && inputStrLwrCase[k] === ' '; k--) {
            if (k === caretPosition) {
                return suffixObj;
            }
        }
        currentEndPos = k;
        if (currentEndPos < 0) {
            return suffixObj;
        }
        // For this token move currentEndPos until we get a character
        // not matching the current token character.
        let tokenStr = token.getTokenTextLowerCase();
        for (let j = tokenStr.length - 1; j >= 0; j--, currentEndPos--) {
            if (inputStrLwrCase[currentEndPos] !== tokenStr[j]
                || currentEndPos - caretPosition < 0) {
                return suffixObj;
            }
        }
        // In case there is a character right at the start of suffix
        // For e.g rev|color . Here `color` is recognized and rev is added.
        // to the start of `color`. With the exception of tokens for which
        // has_space_after: false (like <,> etc)
        let previousTokenHasSpaceAfter = tokens[i - 1]
            && !tokens[i - 1].isUnrecognized()
            && tokens[i - 1].getHasSpaceAfter();
        if (currentEndPos >= 0
            && previousTokenHasSpaceAfter
            && inputStrLwrCase[currentEndPos] !== ' ') {
            return suffixObj;
        }
        // If caret is at the start of the token, it is not included.
        if (!isCaretBetweenTokens && currentEndPos + 1 === caretPosition) {
            return suffixObj;
        }
        suffixObj.suffixTokens.unshift(token);
        suffixObj.suffixLen = (previousTokenHasSpaceAfter)
            ? inputStrLwrCase.length - currentEndPos
            : inputStrLwrCase.length - currentEndPos - 1;
        suffixObj.suffixStartIndex = currentEndPos + 1;
    }
    return suffixObj;
}
/**
 * Dual of getSuffixRecognizedTokensInfo. Finds the contiguous prefix
 * recognized tokens and its corresponding string.
 * The prefix is calculated till we reach the caret position,
 * unrecognized token or extensible token if it has
 * non-space character immediately after it (See Note)
 * Spaces in the input string are included only when they are
 * between 2 recognized tokens (NOT empty or unrecognized),
 * both of which should be before the caret.
 * Here is the behaviour: 1. quantity__ab|c__revenue or quantity__re|venue.
 * This would return [quantity] and quantity
 * (and not quantity__).
 *
 * Assumption: Input tokens should not have any empty token
 *
 * Note: Special treatment of extensible token:
 * Suppose user types revenue > 1, 1 is recognized.
 * Now he adds 0: revenue > 10|. We detect 1 is extensible and see
 * the next char. If it is non-space, we don't include 1 in the prefix tokens.
 * We do not check caret for this case.
 * So 'revenue > 1| ' would include "1" as prefix as it has space after it.
 *
 * TODO (Shikhar) - make this function pvt and update the unit test to use
 * the public method partitionInput...
 *
 * @param inputStrLwrCase - input string in lower case
 * @param tokens
 * @param caretPosition
 * @param isCaretBetweenTokens
 * @returns {{prefixTokens: Array, prefixLen: number}}
 */
function getPrefixRecognizedTokensInfo(inputStrLwrCase, tokens, caretPosition, isCaretBetweenTokens = false) {
    let currentStartPos = 0, prefixObj = {
        prefixTokens: [],
        prefixLen: 0
    }, effectiveInputLength = inputStrLwrCase.length;
    if (effectiveInputLength <= 0 || !tokens.length || caretPosition <= 0) {
        return prefixObj;
    }
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token.isUnrecognized()) {
            if (token.isEmpty()) {
                _logger.warn('Empty token found while calculating prefix tokens');
                _logger.debug('Empty token found while calculating prefix tokens', inputStrLwrCase, tokens, caretPosition);
            }
            return prefixObj;
        }
        // remove spaces before each token in the input string
        let k = currentStartPos;
        for (; k < effectiveInputLength && inputStrLwrCase[k] === ' '; k++) {
            // >= coz this case: caretPos = 0
            if (k >= caretPosition - 1) {
                return prefixObj;
            }
        }
        currentStartPos = k;
        if (currentStartPos >= effectiveInputLength) {
            return prefixObj;
        }
        let tokenStr = token.getTokenTextLowerCase();
        for (let j = 0; j < tokenStr.length; j++, currentStartPos++) {
            if (inputStrLwrCase[currentStartPos] !== tokenStr[j]
                || currentStartPos >= caretPosition) {
                return prefixObj;
            }
        }
        if (currentStartPos > effectiveInputLength) {
            _logger.error('current start position great than length');
            return prefixObj;
        }
        // In case there is a non-space character right at the end of prefix
        // For e.g revenuecol| region . Here `revenue` is recognized and `col` is added.
        // to the end of `revenue`. `region` is recognized too.
        let isNextTokenRecognized = tokens[i + 1] && !tokens[i + 1].isUnrecognized();
        let areTokensTogether = isNextTokenRecognized && !token.getHasSpaceAfter();
        if (!_.isUndefined(inputStrLwrCase[currentStartPos])
            && !areTokensTogether
            && inputStrLwrCase[currentStartPos] !== ' ') {
            return prefixObj;
        }
        //Caret is at the start of a token, do not include that token.
        if (!isCaretBetweenTokens && (currentStartPos === caretPosition)) {
            return prefixObj;
        }
        prefixObj.prefixTokens.push(token);
        prefixObj.prefixLen = (token.getHasSpaceAfter())
            ? currentStartPos + 1
            : currentStartPos;
    }
    return prefixObj;
}
/**
 * For the given caret position, partitions the inout tokens and
 * strings into contiguous recognized tokens before
 * caret, after caret, mid-unresolved tokens and mid0unresolved string
 * @param inputStrLwrCase
 * @param tokens
 * @param caretPosition
 * @param isCaretInBetweenTokens
 * @returns {{tokensBeforeCaret: *, tokensAfterCaret: *,
 *      unresolvedTokens: (*|Array|string|Blob|UTILS.slice|slice),
     *  unresolvedStringStartIndex: number, unresolvedStringLength: number}}
 */
function partitionInputBasedOnCaret(inputStrLwrCase, tokens, caretPosition, isCaretInBetweenTokens) {
    let suffixObj = getSuffixRecognizedTokensInfo(inputStrLwrCase, tokens, caretPosition, isCaretInBetweenTokens);
    let prefixObj = getPrefixRecognizedTokensInfo(inputStrLwrCase, tokens, caretPosition, isCaretInBetweenTokens);
    let recognizedPrefixLen = prefixObj.prefixLen;
    let recognizedSuffixLen = suffixObj.suffixLen;
    return {
        tokensBeforeCaret: prefixObj.prefixTokens,
        tokensAfterCaret: suffixObj.suffixTokens,
        unresolvedTokens: tokens.slice(prefixObj.prefixTokens.length, tokens.length - suffixObj.suffixTokens.length),
        unresolvedStringStartIndex: recognizedPrefixLen,
        unresolvedStringLength: inputStrLwrCase.length - (recognizedSuffixLen + recognizedPrefixLen)
    };
}
/**
 * Traverses the input string character wise and gives starting position to each token.
 *
 * Note - this function is called for the tokens in response - not useful to call it
 * during the request.
 *
 * Assumption: Empty token can only come if it is the one being edited
 *
 * @param inputStr
 * @param tokens
 * @param caretPosition
 */
function setTokensPosition(inputStr, tokens, caretPosition) {
    if (!tokens.length) {
        return;
    }
    let origStrLength = inputStr.length, tokenIndex = 0;
    for (let i = 0; i < origStrLength && tokenIndex < tokens.length;) {
        if (tokens[tokenIndex].isEmpty()) {
            tokens[tokenIndex].startPosition = i;
            tokenIndex++;
        }
        // Note: Make sure to first check for emptyToken (tokens[tokenIndex].isEmpty())
        // and then empty char
        if (inputStr[i] === ' ') {
            i++;
            continue;
        }
        tokens[tokenIndex].startPosition = i;
        i += tokens[tokenIndex].getTokenTextLowerCase().length;
        tokenIndex++;
    }
    // It might happen that string has completed, but there is still token left.
    // This should only happen if the last
    // token is empty. Consider: "revenue" and [revenue, empty]
    if (tokenIndex < tokens.length) {
        if (!tokens[tokenIndex].isEmpty()) {
            _logger.debug('While calculating starting position, string finished but tokens left', inputStr, tokens, caretPosition);
            _logger.warn('While calculating starting position, string finished but tokens left', inputStr);
            return;
        }
        tokens[tokenIndex].startPosition = origStrLength;
    }
}
/**
 * Return a word array given a token array. One token can have multiple words.
 * @param {Array.<sage.RecognizedToken} tokens
 */
function tokensToWords(tokens) {
    return tokens.map(function (t) {
        return t.getTokenTextLowerCase().split(' ');
    })
        .reduce(function (p, c) {
        return p.concat(c);
    }, []);
}
/**
 *
 * @param {sage.ACTableResponse} tableResponse
 */
function preProcessQueryCompletions(tableResponse) {
    let queryCompletions = tableResponse.getQueryCompletions();
    if (!queryCompletions || !queryCompletions.length) {
        _logger.debug('No query completions found in the sage response', tableResponse);
        return;
    }
    if (queryCompletions.length <= flags.getValue(flags.BLINK_FLAGS.maxNumCompletionsInSage.name)) {
        _logger.info('All completions can fit, no folding is needed', queryCompletions.length);
        return;
    }
    // Per SCAL-6472, if there are any duplicate suggestions from sage that are not as a
    // result of an exact match
    // we should fold them into one suggestion with a "(4 matches)" help text.
    // However, when user selects one of those options, we will show all the matching suggestions.
    // Build a map of (unique suggestion string -> array of completions)
    let suggestionStringPresenceMap = {};
    let foundFoldCandidate = false;
    queryCompletions.forEach((completion) => {
        // Folding is supported for only single token suggestions
        // that are neither exact matches nor from history.
        if (completion.getCompletionTokens().length === 1 &&
            !completion.isSearchHistoryCompletion() &&
            !completion.isExactMatch()) {
            let suggestionString = completion.getCompletionTokensNormalizedQueryString()
                .toLowerCase();
            if (!suggestionStringPresenceMap.hasOwnProperty(suggestionString)) {
                suggestionStringPresenceMap[suggestionString] = [];
            }
            suggestionStringPresenceMap[suggestionString].push(completion);
            if (suggestionStringPresenceMap[suggestionString].length > 3) {
                foundFoldCandidate = true;
            }
        }
    });
    if (!foundFoldCandidate) {
        return;
    }
    // If all results have the same suggestion string, do not fold them into a single result
    if (_.size(suggestionStringPresenceMap) === 1
        && _.values(suggestionStringPresenceMap)[0].length
            === queryCompletions.length) {
        return;
    }
    // Iterate through each group of similar suggestions and fold if there are enough in the group
    _.values(suggestionStringPresenceMap).forEach((similarCompletions) => {
        let numDuplicates = similarCompletions.length;
        if (numDuplicates <= 3) {
            return;
        }
        let firstCompletion = similarCompletions.shift();
        let indexOfFirstCompletion = queryCompletions.indexOf(firstCompletion);
        // We do not want to modify the original object, so create a deep copy instead
        let firstCompletionCopy = _.cloneDeep(firstCompletion);
        // Create a folded completion with this group of similar completions
        let originalToken = firstCompletionCopy.getCompletionTokens()[0];
        let replacementToken = sage.RecognizedToken.createUnrecognizedToken(originalToken.token);
        firstCompletionCopy.getCompletionTokens()[0] = replacementToken;
        let foldedCompletion = new sage.FoldedQueryCompletion(firstCompletionCopy);
        foldedCompletion.setNumDuplicates(numDuplicates);
        // Replace the first in the group with our new folded completion, and remove the others
        // from the list of completions (this means the folded completion is placed at the index
        // of the first completion in the group of similar completions)
        _.pull(queryCompletions, ...similarCompletions);
        queryCompletions[indexOfFirstCompletion] = foldedCompletion;
    });
}
/**
 * Sets up the scope for join disambiguation.
 * Also returns the sage dropdown item config needed to show
 * the "mapping" button and label.
 *
 * @param {sage.ACTableResponse} tableResponse
 * @param {function} joinCompleteCallback
 */
function setupSageForJoinDisambiguation(tableResponse, joinCompleteCallback) {
    if (!doesSageNeedJoinDisambiguation(tableResponse)) {
        return;
    }
    let _joinDisambiguationHelper = new JoinDisambiguationHelper({
        joinPathCollections: tableResponse.getJoinPathAmbiguities(),
        tokens: tableResponse.getNewTokens()
    }, JoinDisambiguationHelper.modes.EMBEDDED_IN_SAGE, joinCompleteCallback);
    _joinDisambiguationHelper.init();
    return _joinDisambiguationHelper;
}
/**
 * @param {Array.<sage.RecognizedToken>} tokens
 * @return {String}
 */
function tokensToQuery(tokens) {
    return tokens.map(function (token) {
        return token.getTokenTextLowerCase();
    }).join(' ');
}
/**
 * @param {Array.<sage.RecognizedToken>} tokens
 * @returns {Array.<sage.RecognizedToken>} tokens
 */
function getPrefixRecognizedTokens(tokens) {
    let firstUnrecognizedTokenIndex = tokens.findIndex(function (token) {
        return token.isUnrecognized();
    });
    if (firstUnrecognizedTokenIndex === -1) {
        firstUnrecognizedTokenIndex = tokens.length;
    }
    return tokens.slice(0, firstUnrecognizedTokenIndex);
}
/**
 * Returns true if the sage response contains any join ambiguities.
 *
 * @param {sage.ACTableResponse} tableResponse
 * @returns {boolean}
 */
function doesSageNeedJoinDisambiguation(tableResponse) {
    return tableResponse.getJoinPathAmbiguities()
        && tableResponse.getJoinPathAmbiguities().length > 0;
}
/**
 * Gets the table hash key in context for table at given index.
 * @param sageContext {sage.ACContext}
 * @param index {number}
 * @returns {string}
 */
function getHashKey(sageContext, index) {
    if (!sageContext) {
        return null;
    }
    let tables = sageContext.getTables();
    let currentTable = tables[index];
    return currentTable.getHashKey();
}
/**
 * The sage model's accessible tables give us all tables that has join paths from
 * the current query in the worksheet/answer. There is another set of tables which
 * is the selected tables from the left panel. The effective data scope is the
 * intersection of the 2.
 *
 * @param sageModel
 */
function getEffectiveDataScope(sageModel) {
    let dataScope = sageDataScopeService.getSources().slice(0);
    if (!!sageModel && !!sageModel.getAccessibleTables()) {
        let accessibleTables = sageModel.getAccessibleTables();
        dataScope = dataScope.intersect(accessibleTables);
    }
    return dataScope;
}
function getViewMoreRequest(sageModel) {
    let tableRequest = getNewACTableRequest();
    tableRequest.setInputTokens(sageModel.tokens);
    // SCAL-18922 4.2.1 Sage auto-complete crash loop.
    //
    // When getting more completions blink was sending token under caret
    // as currently edited token which could be incorrect.
    // It is possible that the user is typing at end of text but with
    // some unrecognized tokens in the middle etc.
    // When getting more completions for any postions using the
    // completionStartPosition is an accurate value.
    // We can assume blink works with 2 operating indexes
    // 1. based on the user cursor(token under caret etc)
    // 2. based on where sage suggest user to fix things.(competionPosition)
    tableRequest.setCurrentlyEditedToken(sageModel.completionStartPosition);
    tableRequest.setCursorOffsetInToken(sageModel.caretPositionFromTokenStart);
    tableRequest.setExactMatchOnly(sageModel.showingExactMatches);
    tableRequest.setMaxCompletions(MAX_MORE_COMPLETIONS);
    tableRequest.previousRequestState = sageModel.getPrevRequestState();
    return tableRequest;
}
function getTableRequestForFoldingCompletion(tokens, sageModel, numDuplicates) {
    let tableRequest = getNewACTableRequest();
    tableRequest.setInputTokens(tokens);
    tableRequest.setCurrentlyEditedToken(sageModel.completionStartPosition);
    tableRequest.setExactMatchOnly(true);
    tableRequest.setMaxCompletions(numDuplicates);
    tableRequest.previousRequestState = sageModel.getPrevRequestState();
    return tableRequest;
}
/**
 * Is used to update the tokens of the sage model (using the tokens of the queryCompletion)
 *
 * @param queryCompletion
 */
function getTokensFromCompletion(queryCompletion) {
    return queryCompletion.getAllTokens();
}
/**
 * Processes tableResponse to give QueryCompletions
 *
 * @param {sage.ACTableResponse} tableResponse
 * @returns {Array.<sage.QueryCompletion>}
 */
function getQueryCompletions(tableResponse) {
    let completions = tableResponse.getQueryCompletions() || [];
    completions.forEach(comp => {
        let newTokens = tableResponse.getNewTokens();
        let allTokens = [
            ...newTokens.slice(0, comp.getNumPrefixTokens()),
            ...comp.getCompletionTokens(),
            ...newTokens.slice(newTokens.length - comp.getNumSuffixTokens())
        ];
        comp.setAllTokens(allTokens);
    });
    return completions;
}
Provide('sageUtil')({
    tokensToWords,
    wordsToUnrecognizedTokens,
    removeTrailingUnrecognizedEmptyTokens,
    getTokensFromWords,
    getPixelWidthOfSageInputString,
    equalRecognizedTokens,
    parseSageBarText,
    getSuffixRecognizedTokensInfo,
    getPrefixRecognizedTokensInfo,
    partitionInputBasedOnCaret,
    setTokensPosition,
    getQueryCompletions,
    preProcessQueryCompletions,
    setupSageForJoinDisambiguation,
    tokensToQuery,
    getPrefixRecognizedTokens,
    doesSageNeedJoinDisambiguation,
    getHashKey,
    getEffectiveDataScope,
    getViewMoreRequest,
    getTableRequestForFoldingCompletion,
    getTokensFromCompletion
});

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Lavish Mantri (lavish.mantri@thoughtspot.com)
 */
const CLIENT_STATE_VERSIONS = {
    V2: 'V2'
};
const AXIS_TYPES = {
    X: 'X',
    Y: 'Y'
};
const CLIENT_STATE_KEYS = {
    //old properties
    roundedNumbers: 'roundedNumbers',
    yAxisShared: 'yAxisShared',
    gridLineConfig: 'gridLineConfig',
    //upper level properties
    columnProperties: 'columnProperties',
    chartProperties: 'chartProperties',
    axisProperties: 'axisProperties',
    //column properties
    dataLabels: 'dataLabels',
    detailedLabels: 'detailedLabels',
    format: 'format',
    //axis properties
    linkedColumns: 'linkedColumns',
    yAxisRange: 'yAxisRange',
    axisType: 'axisType',
    name: 'name',
    //chart level properties
    pivotState: 'pivotState',
    hidePivotSummaries: 'hidePivotSummaries',
    summaryMode: 'summaryMode',
    useFlatLayout: 'useFlatLayout',
    isHeatmapOverlayed: 'isHeatmapOverlayed',
    showLinearRegressionLine: 'showLinearRegressionLine',
    markersEnabled: 'markersEnabled',
    visibleSeriesNames: 'visibleSeriesNames',
    axisExtremes: 'axisExtremes',
    gridLines: 'gridLines',
    isZoomed: 'isZoomed',
    mapviewport: 'mapviewport',
    isStackedAsPercent: 'isStackedAsPercent',
    responsiveLayoutDisabled: 'responsiveLayoutDisabled',
    chartSpecific: 'chartSpecific',
    version: 'version'
};
// NOTE: The goal of this function is to translate client state from older
// schema to new schema which is more amenable to the features we have now
// with chart config v2.
// The goal of this function is to not generate items based on heuristics etc
// this purely translates value that were user set. This is critical distinction
// we DONT want to generate system defined items here.
// We have put in system defined pallete colors in the client state, but we need
// to just decouple that from user defined as the impact on evaluation is different
// on call sites.
function upgradeClientStateToV2(chartModel) {
    let columnProperties = {};
    let axisProperties = {};
    let chartProperties = {};
    //set column properties
    let columns = chartModel.getColumns();
    columns.forEach(col => {
        // NOTE: We set this for all columns and not just measure columns
        // as there are cases like scatter chart where we have measure on
        // x and y and we show data labels with the category value. In such
        // case it makes sense to set this for all columns.
        // For columns where its not needed this property won't be read.
        let enableLabelsOnMeasure = isStackedChart(chartModel.getChartType())
            ? chartModel.getUserData(CLIENT_STATE_KEYS.detailedLabels)
            : chartModel.getUserData(CLIENT_STATE_KEYS.dataLabels);
        columnProperties[col.getId()] = {
            dataLabels: enableLabelsOnMeasure
        };
    });
    // Set axis properties
    // The axis configurator is not a system heuristic, this is expected
    // to be not change unless user makes explicit changes and all explicit
    // changes will be part of the model.
    // There are the following cases in case of axis changes.
    // 1. Edits in the query:
    // 1a. Chart is locked:
    // In this case the axis properties are retained as there is no change
    // to the chart
    // 1b. Chart is unlocked:
    // In this case we will explicitly clear the axisProperties as the old
    // properties are not expected to be reused.
    // Further there will be an axis configuration generated using heuristics
    // and at that point axisProperties need to be regenerated.
    // 2. Axis configuration changes
    // This is an incremental change so the callers will either add/remove axis
    // or add/remove columns on axis
    // Changes in properties like name, position, range etc are made on the axis.
    // 3. Chart type changes
    // 3a. Axis configuration is reused.
    // In this case we retain axis properties.
    // 3b. Axis configuration is generated.
    // This is similar to case 1b, we will clear the axisProperties and regenerate
    // the new ones.
    let yAxisColumns = chartModel.getYAxisColumns();
    let yAxisRange = chartModel.getUserData(CLIENT_STATE_KEYS.yAxisRange);
    // If Y axis are shared, we put all axis as one at put columns linked in the state
    if (chartModel.getUserData(CLIENT_STATE_KEYS.yAxisShared)) {
        axisProperties[jsUtil_1()] = {
            linkedColumns: yAxisColumns.map(col => col.getId()),
            axisType: AXIS_TYPES.Y,
            yAxisRange,
        };
        //if axis are unshared, we still put respective column Ids in state.
        // So as to know which column it belongs to and this info helps during
        // linking/unlinking.
    }
    else {
        yAxisColumns.forEach(col => {
            axisProperties[jsUtil_1()] = {
                linkedColumns: [col.getId()],
                axisType: AXIS_TYPES.Y,
                yAxisRange
            };
        });
    }
    let xAxisColumns = chartModel.getXAxisColumns();
    axisProperties[jsUtil_1()] = {
        linkedColumns: xAxisColumns.map(col => col.getId()),
        axisType: AXIS_TYPES.X
    };
    //set chart properties
    let visibleSeriesNames = chartModel.getUserData(CLIENT_STATE_KEYS.visibleSeriesNames);
    if (visibleSeriesNames) {
        chartProperties.visibleSeriesNames = visibleSeriesNames;
    }
    let axisExtremes = chartModel.getUserData(CLIENT_STATE_KEYS.axisExtremes);
    if (axisExtremes) {
        chartProperties.axisExtremes = axisExtremes;
    }
    let gridLineConfig = chartModel.getUserData(CLIENT_STATE_KEYS.gridLineConfig);
    if (gridLineConfig) {
        chartProperties.gridLines = gridLineConfig;
    }
    let isZoomed = chartModel.getUserData(CLIENT_STATE_KEYS.isZoomed);
    if (isZoomed) {
        chartProperties.isZoomed = isZoomed;
    }
    let mapviewport = chartModel.getUserData(CLIENT_STATE_KEYS.mapviewport);
    if (mapviewport) {
        chartProperties.mapviewport = mapviewport;
    }
    let isStackedAsPercent = chartModel.getUserData(CLIENT_STATE_KEYS.isStackedAsPercent);
    if (isStackedAsPercent) {
        chartProperties.isStackedAsPercent = isStackedAsPercent;
    }
    if (isStackedChart(chartModel.getChartType())
        && chartModel.getUserData(CLIENT_STATE_KEYS.dataLabels)) {
        chartProperties.showStackedLabels = true;
    }
    let responsiveLayoutDisabled = chartModel.getUserData(CLIENT_STATE_KEYS.responsiveLayoutDisabled);
    if (responsiveLayoutDisabled) {
        chartProperties.responsiveLayoutDisabled = responsiveLayoutDisabled;
    }
    let showLinearRegressionLine = chartModel
        .getUserData(CLIENT_STATE_KEYS.showLinearRegressionLine);
    if (showLinearRegressionLine) {
        chartProperties.showLinearRegressionLine = showLinearRegressionLine;
    }
    let chartSpecificProperties = {};
    let props = [
        CLIENT_STATE_KEYS.pivotState,
        CLIENT_STATE_KEYS.hidePivotSummaries,
        CLIENT_STATE_KEYS.summaryMode,
        CLIENT_STATE_KEYS.useFlatLayout,
        CLIENT_STATE_KEYS.isHeatmapOverlayed,
        CLIENT_STATE_KEYS.markersEnabled
    ];
    props.forEach(prop => {
        chartSpecificProperties[prop] = chartModel.getUserData(prop);
    });
    chartProperties.chartSpecific = chartSpecificProperties;
    //TODO:: Should clear these keys once all respective getters and setters
    //are removed. Should clear one by one, in case a getter setter is removed
    // let keysToClear = [
    //     'dataLabels',
    //     'detailedLabels',
    //     'roundedNumbers',
    //     'yAxisShared',
    //     'yAxisRange',
    //     'visibleSeriesNames',
    //     'axisExtremes',
    //     'gridLineConfig',
    //     'isZoomed',
    //     'mapviewport',
    //     'isStackedAsPercent',
    //     'responsiveLayoutDisabled',
    //     'pivotState',
    //     'hidePivotSummaries',
    //     'summaryMode',
    //     'useFlatLayout',
    //     'isHeatmapOverlayed',
    //     'showLinearRegressionLine',
    //     'markersEnabled'
    // ];
    //
    // keysToClear.forEach(key => {
    //     this.cleanClientStateForKey(key);
    // });
    return {
        columnProperties,
        axisProperties,
        chartProperties,
        [CLIENT_STATE_KEYS.version]: CLIENT_STATE_VERSIONS.V2
    };
}

/**
 * Copyright: ThoughtSpot Inc. 2014
 * Author: Shikhar Agarwal (shikhar@thoughtspot.com)
 * Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview An interface of a model associated with a document.
 *               This encapsulates the header json and also exposes methods that are expected
 *               from different types of models
 *               like answerModel, logicalTableModel by sage, sharable item, etc.
 *
 */
let messageService = ngRequire('messageService');
let metadataUtil = ngRequire('metadataUtil');
let DocumentModel = class DocumentModel {
    constructor(headerJson) {
        this._incompletionDetails = null;
        this._isCorrupted = false;
        this._shouldForceSave = false;
        this._isAutoUpgraded = false;
        this._recognizedTokens = [];
        this._hasUserTriggeredChanges = false;
        this._dataTraceIds = [];
        if (!headerJson || !headerJson[jsonConstants_1.ID_KEY]) {
            throw new Error('Invalid document model json: ' + JSON.stringify(headerJson));
        }
        this._header = headerJson;
        this._docPermission = null; //DocumentPermissionFactory.createPermissiveInstance(
        //jsonConstants.metadataType.LOGICAL_TABLE);
        // TODO(Jasmeet): Move non document scoped data like tokens out of this model.
        this._isCorrupted = false;
        this._isAutoUpgraded = false;
        this._incompletionDetails = null;
        /**
         * Whether on attempt to save this document on callosum, callosum should be forced to save
         * the model even if the model has broken columns.
         */
        this._shouldForceSave = false;
        this._logger = logger_3('document-model');
    }
    /**
     * Gets the header json
     * @returns {*}
     */
    getHeaderJson() {
        return this._header;
    }
    /**
     * Gets the Id from the header json
     * @returns {*}
     */
    getId() {
        return this._header[jsonConstants_1.ID_KEY];
    }
    /**
     *
     * @param id {string}
     */
    setId(id) {
        this._header[jsonConstants_1.ID_KEY] = id;
    }
    /**
     * Gets the name from the header json
     * @returns {*}
     */
    getName() {
        return this._header[jsonConstants_1.NAME_KEY];
    }
    /**
     * Gets the description from the header json
     * @returns {*}
     */
    getDescription() {
        return this._header[jsonConstants_1.DESCRIPTION_KEY];
    }
    /**
     * Gets the author Id from the header json
     * @returns {*}
     */
    getAuthorId() {
        return this._header[jsonConstants_1.AUTHOR_KEY];
    }
    /**
     * Gets the author name from the header json
     * @returns {*}
     */
    getAuthorName() {
        return this._header[jsonConstants_1.AUTHOR_NAME];
    }
    /**
     * Gets the author name from the header json
     * @returns {*}
     */
    getAuthorDisplayName() {
        return this._header[jsonConstants_1.AUTHOR_DISPLAY_NAME];
    }
    /**
     * Gets metadata trace id collected from callosum response
     * @returns {*}
     */
    getMetadataTraceId() {
        return this._metadataTraceId;
    }
    /**
     * Gets data trace ids collected from callosum response
     * @returns {*}
     */
    getDataTraceIds() {
        return this._dataTraceIds;
    }
    /**
     * Gets all trace ids collected from callosum response
     * @returns {*}
     */
    getTraceIds() {
        let traceIds = [];
        traceIds.push(this._metadataTraceId);
        traceIds.push.apply(traceIds, this._dataTraceIds);
        return traceIds;
    }
    /**
     * Returns if the document model is hidden.
     * @returns {*}
     */
    isHidden() {
        return !!this._header[jsonConstants_1.IS_HIDDEN_KEY];
    }
    /**
     * Sets the name of the document in the header json
     * @param name
     */
    setName(name) {
        if (!name || !name.length) {
            return;
        }
        this._header[jsonConstants_1.NAME_KEY] = name;
    }
    /**
     * Sets the description in the header json
     * @param description
     */
    setDescription(description) {
        this._header[jsonConstants_1.DESCRIPTION_KEY] = description;
    }
    /**
     * Sets the metadata traceId collected from callosum response
     * @param traceId
     */
    setMetadataTraceId(traceId) {
        this._metadataTraceId = traceId;
    }
    /**
     * Append the data traceId collected from callosum response to traceIds list
     * @param traceId
     */
    addDataTraceId(traceId) {
        this._dataTraceIds.push(traceId);
    }
    /**
     * Use the prototype to navigate the given json and find the document id from it.
     *
     * @param {Object} json
     * @return {string}
     */
    getDocumentIdFromJson(json) {
        return _.get(json, [jsonConstants_1.HEADER_KEY, jsonConstants_1.ID_KEY]);
    }
    // Section 2: Interfaces of methods common to different kinds of documents
    /**
     *
     * @param {DocumentPermission} docPermission
     */
    setPermission(docPermission) {
        this._docPermission = docPermission;
    }
    /**
     *
     * @return {DocumentPermission}
     */
    getPermission() {
        return this._docPermission;
    }
    /**
     * Return true if the document has been created on the backend datastore (postgres).
     * @return {boolean}
     */
    isCreatedOnServer() {
        return this._header && this._header[jsonConstants_1.GENERATION_NUM_KEY] >= 0;
    }
    setCreatedOnServer() {
        if (this._header && this._header[jsonConstants_1.GENERATION_NUM_KEY]) {
            if (!this._header[jsonConstants_1.GENERATION_NUM_KEY]
                || this._header[jsonConstants_1.GENERATION_NUM_KEY] < 0) {
                this._header[jsonConstants_1.GENERATION_NUM_KEY] = 1;
            }
        }
    }
    shouldForceSave() {
        return this._shouldForceSave;
    }
    setShouldForceSave(shouldForceSave) {
        this._shouldForceSave = !!shouldForceSave;
    }
    getCreatedTime() {
        return dateUtil_3(this._header[jsonConstants_1.CREATED_KEY], dateUtil_2.DATETIME_24_SHORT, true);
    }
    getCreatedEpoch() {
        return this._header[jsonConstants_1.CREATED_KEY];
    }
    getModifiedTime(options) {
        if (!this._header.hasOwnProperty('modified')) {
            return '';
        }
        return dateUtil_3(this._header['modified'], dateUtil_2.DATETIME_24_SHORT, true);
    }
    metadataEquals(model1, model2) {
        return angular.equals(model1, model2);
    }
    containsChangesFromStateStoredOnServer(referenceMetadataJson) {
        return this.hasBeenModified(referenceMetadataJson);
    }
    // TODO(Jasmeet): Migrate to a model where we only have two kinds of constructs
    // 1. Has model state changed for properties stored on server.
    // 2. Support diffing logic with params to ignore certain properties.
    hasBeenModified(referenceMetadataJson) {
        if (!referenceMetadataJson) {
            this._logger.error('invalid referenceMetadataJson', referenceMetadataJson);
            return false;
        }
        if (this.hasUserTriggeredChanges()) {
            return true;
        }
        return !this.metadataEquals(referenceMetadataJson, this.getMetadataJson());
    }
    setHasUserTriggeredChanges(hasUserTriggeredChanges) {
        this._hasUserTriggeredChanges = hasUserTriggeredChanges;
    }
    hasUserTriggeredChanges() {
        return this._hasUserTriggeredChanges;
    }
    /**
     *
     * @return {boolean}
     */
    hasAnyEditorialWarnings() {
        return false;
    }
    /**
     *
     * @return {string}
     */
    getEditorialWarnings() {
        return '';
    }
    /**
     *
     * @return {boolean}
     */
    isPermittedToSave() {
        return true;
    }
    /**
     * Returns if the Document model is corrupted in any way
     * @returns {boolean}
     */
    isCorrupted() {
        return this._isCorrupted;
    }
    /**
     * Returns the incompletionDetails
     * @returns {Object}
     */
    getCorruptionDetails() {
        return this._incompletionDetails;
    }
    getAlertContent(userAction, response, code) {
        let params = {
            substitutions: [this.getName()],
            customData: {
                incompleteDetails: this.getCorruptionDetails(),
                getDisplayNameForMetadataTypeName: metadataUtil.getDisplayNameForMetadataTypeName
            },
            customUrl: 'src/common/widgets/alert/templates/missing-document-alert-template.html',
            code: code || messageService.blinkGeneratedErrors.INCOMPLETE_DOCUMENT
        };
        let content = getUserActionFailureAlertContent(userAction, response, params);
        logUserActionFailureEvent(userAction, response, params);
        return content;
    }
    /**
     * Reads the sage tokens in the given document and returns the list of tables
     * that the tokens belong to.
     *
     * @return {Array.<string>=}
     */
    getSageDataScope() {
        let tableGuids = this.getTableGuidsFromContext(this.getQuestionInfo());
        // NOTE: In case of tokens like 'average' etc table guid is null.
        return tableGuids.filter(tableGuid => !!tableGuid);
    }
    /**
     * @returns {Array<string>} the table guid of the root table of the current query in
     * the document
     */
    getQueryRoots() {
        let recognizedTokens = this.getRecognizedTokens();
        if (!recognizedTokens || !recognizedTokens.length) {
            return null;
        }
        let queryRoots = [];
        recognizedTokens.forEach((recognizedToken) => {
            let joinPaths = recognizedToken.getJoinPaths();
            if (!joinPaths || !joinPaths.length) {
                this._logger.warn('join path missing from recognized token', recognizedTokens[0]);
                return null;
            }
            joinPaths.forEach((joinPath) => {
                let joinPathRoot = joinPath.getRootTableGuid();
                if (queryRoots.indexOf(joinPathRoot) < 0) {
                    queryRoots.push(joinPathRoot);
                }
            });
        });
        return queryRoots;
    }
    isAutoUpgraded() {
        return this._isAutoUpgraded;
    }
    setIsAutoUpgraded(isAutoUpgraded) {
        this._isAutoUpgraded = !!isAutoUpgraded;
    }
    getTimeToLive() {
        return -1;
    }
    getRecognizedTokens() {
        return this._recognizedTokens;
    }
    /**
     * Extracts key model properties to be passed for eventCollection, logging etc.. purposes
     */
    getEventProperties() {
        let eventProps = {
            objectId: this.getId(),
            objectAuthorId: this.getAuthorId(),
            objectCreatedAt: this._header[jsonConstants_1.CREATED_KEY],
            objectType: this.getMetadataType(),
            objectSubType: this.getMetadataSubType(),
            objectQueryTables: this.getQueryRoots(),
        };
        for (let prop in eventProps) {
            if (!eventProps[prop]) {
                eventProps[prop] = 'NA';
            }
        }
        return eventProps;
    }
    setRecognizedTokens(recognizedTokes) {
        this._recognizedTokens = recognizedTokes;
    }
    getGenerationNumber() {
        return this._header[jsonConstants_1.GENERATION_NUM_KEY];
    }
    inheritNonJsonProperties(baseDocument) {
        this.setPermission(baseDocument.getPermission());
        this.setIsAutoUpgraded(baseDocument.isAutoUpgraded());
        this._isCorrupted = baseDocument.isCorrupted();
        this._incompletionDetails = baseDocument.getCorruptionDetails();
        this.setShouldForceSave(baseDocument.shouldForceSave());
        this.setRecognizedTokens(baseDocument.getRecognizedTokens());
    }
    getTableGuidsFromTokens(tokens) {
        return tokens
            .filter(rt => rt.hasTableMetadata())
            .map(rt => rt.getTableGuid()) || [];
    }
    getTableGuidsFromContext(questionInfo) {
        let sageContext = questionInfo.getContext();
        let sageContextIndex = questionInfo.getContextIndex();
        let tokens = sageContext.getTables()[sageContextIndex].getTokens();
        let tableGuids = this.getTableGuidsFromTokens(tokens);
        sageContext.getFormulae().forEach((formula) => {
            tokens = formula.getTokens();
            tableGuids.concat(this.getTableGuidsFromTokens(tokens));
        });
        return _.uniq(tableGuids);
    }
};
DocumentModel = __decorate([
    Provide('DocumentModel')
], DocumentModel);

/**
 * Copyright: ThoughtSpot Inc. 2018
 * Author: Utsav Kapoor (utsav.kapoor@thoughtspot.com)
 *
 * @fileoverview Service used to access an answer
 */
const metadataService = ngRequire('metadataService');
function processResponseData(metadataType, response) {
    let data = response.data;
    let permissions = null;
    //if detailData is present, the format is wrapped by detailData and permission
    if (data.hasOwnProperty('detailData')) {
        data = response.data.detailData;
        permissions = response.data.permissions;
    }
    //the structure of the json reported is needs to have some extra fields added to make it similar
    //to the one returned when we fetch full model so that the parsing logic can stay the same
    let dataNode = {};
    data.reportContent.sheets.forEach(function (sheet) {
        dataNode[sheet.header.id] = {
            vizData: {}
        };
    });
    data = {
        completionRatio: 1,
        reportBookData: dataNode,
        reportBookMetadata: data
    };
    //TODO: update AnswerModel to accept data-less json in constructor
    response.data = new AnswerModel(data);
    let answerModel, answerSheet;
    // NOTE:
    // 1. In answer page redesign to remove redundant titles between answer and viz we end
    // up in the situation where users might have old pinned answer where the answer name was
    // never set instead user sets the viz title that was getting pinned.
    // To avoid the jarring experience to showing UNTITLED as the title we display the title
    // of the viz that was pinned.
    // 2. The migration is done while loading the page as for the app this is not a change in
    // answer model. If the name is changed upstream we run into issues when comparing answer
    // model snapshots.
    if (response.data.isHidden()) {
        answerModel = response.data;
        if (answerModel.getName() === strings.UNTITLED_OBJECT_NAME) {
            answerSheet = answerModel && answerModel.getCurrentAnswerSheet();
            let primaryViz = answerSheet && answerSheet.getPrimaryDisplayedViz();
            if (!!primaryViz) {
                answerModel.setName(primaryViz.getName());
                answerModel.setDescription(primaryViz.description);
            }
        }
    }
    // NOTE: User can have unlocked configuration but in case of saved answer
    // user expects the answer visualization he has saved. Hence, we are locking the config.
    answerModel = response.data;
    answerSheet = answerModel && answerModel.getCurrentAnswerSheet();
    let chartVisualizations = !!answerSheet ? answerSheet.getChartVisualizations() : [];
    chartVisualizations.forEach(function (chartViz) {
        chartViz.setIsConfigurationLocked(true);
    });
    if (permissions !== null) {
        response.permissions = permissions;
    }
    return response;
}
function getAnswerModelFromReportBook(reportBook) {
    //the structure of the json reported is needs to have some extra fields added to make it similar
    //to the one returned when we fetch full model so that the parsing logic can stay the same
    let dataNode = {};
    reportBook.reportContent.sheets.forEach((sheet) => {
        dataNode[sheet.header.id] = {
            vizData: {}
        };
    });
    let data = {
        completionRatio: 1,
        reportBookData: dataNode,
        reportBookMetadata: reportBook
    };
    return new AnswerModel(data);
}
function getInsightAnswerModelFromReportBook(reportBook) {
    //the structure of the json reported is needs to have some extra fields added to make it similar
    //to the one returned when we fetch full model so that the parsing logic can stay the same
    let dataNode = {};
    reportBook.reportContent.sheets.forEach((sheet) => {
        dataNode[sheet.header.id] = {
            vizData: {}
        };
    });
    return {};
}
function getModelMetadata(answerBookId, isIgnorable, metadataType) {
    let params = {
        showHidden: true,
        isIgnorable: !!isIgnorable
    };
    let responseProcessor = processResponseData.bind(undefined, metadataType);
    return metadataService.getMetadataObjectDetails(metadataType, answerBookId, params)
        .then(responseProcessor);
}
function getModelMetadataWithPermission(answerBookId, isIgnorable, metadataType, requestType) {
    let params = {
        showHidden: true,
        isIgnorable: !!isIgnorable,
        requestType: requestType
    };
    let responseProcessor = processResponseData.bind(undefined, metadataType);
    return metadataService.getMetadataObjectDetailWithPermission(metadataType, answerBookId, params)
        .then(responseProcessor);
}
Provide('answerMetadataUtil')({
    getAnswerModelFromReportBook,
    getInsightAnswerModelFromReportBook,
    getModelMetadata,
    getModelMetadataWithPermission
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2019
 * Author: Vibhor Nanavati (vibhor@thoughtspot.com),
 *         Shikhar Agarwal (shikhar@thoughtspot.com)
 *
 * @fileoverview Encapsulates the details of visualization.
 */
var VisualizationModel_1;
const util$1 = ngRequire('util');
let VisualizationModel = VisualizationModel_1 = class VisualizationModel {
    /**
     * @param {Object} params Contains following properties:
     *    - vizJson Json backing the visualization definition.
     *    - vizData The visualization data for this viz.
     *    - referencingVizModel Optional argument, when provided means this VisualizationModel
     *      object is actually a reference copy of visualization from another book.
     *      The referencingVizModel is the object in current book holding the
     *      reference. See PinboardVizModel::getReferencedVisualization() for
     *      more details.
     *
     * @constructor
     */
    constructor(params) {
        this.params = params;
        this._logger = logger_3('visualization-model');
        this._dataBatchSize = flags.getValue(flags.BLINK_FLAGS.dataBatchSize.name)
            || blinkConstants_1.DEFAULT_DATA_BATCH_SIZE;
        this._isRenderReady = false;
        this._isSecondaryRenderReady = false;
        // This is used in case of headline models to ignore rendering when query is sampled.
        // In such cases the viz is not rendered as we know that the result is going to be
        // inaccurate.
        this.ignoreRendering = false;
        this.isPBDDViz = false;
        let vizJson = params.vizJson, vizData = params.vizData, referencingVizModel = params.referencingVizModel;
        this._vizJson = vizJson;
        this._vizData = vizData || {};
        this._referencingVizModel = referencingVizModel || null;
        this._answerModel = params.answerModel || null;
        this._vizColumns = null;
        this._dataLoadFailed = false;
        if (vizData && _.has(vizData, 'currentOffset')) {
            this.setSavedDataOffset(this._vizData.currentOffset);
        }
        let header = vizJson[jsonConstants_1.HEADER_KEY] || null;
        if (!header) {
            throw new Error('Invalid visualization specification (no header found)', vizJson);
        }
    }
    static createEmptyVisualizationDefinition(answerSheet, vizType, vizGuid) {
        return {
            vizContent: {
                vizType: vizType
            },
            header: {
                id: vizGuid,
                name: 'User created visualization',
                owner: answerSheet.getId()
            }
        };
    }
    static areDefinitionsEqual(a, b) {
        return a.getId() === b.getId() &&
            JSON.stringify(a.getJson()) === JSON.stringify(b.getJson());
    }
    static areDataEqual(a, b) {
        return JSON.stringify(a.getVizData()) === JSON.stringify(b.getVizData());
    }
    /**
     * Whether two viz models are equal
     *
     * @param {Object}  a   First viz model
     * @param {Object}  b   Second viz model
     * @return {boolean}
     */
    static areModelsEqual(a, b) {
        return VisualizationModel_1.areDefinitionsEqual(a, b)
            && VisualizationModel_1.areDataEqual(a, b);
    }
    /**
     * @return {string} Id of the visualization this model represents.
     */
    getId() {
        return this._vizJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.ID_KEY];
    }
    isCorrupted() {
        return !this._vizJson[jsonConstants_1.VIZ_COMPLETE_KEY];
    }
    // TODO (Ashish/Rahul): We should ideally combine primary
    // and secondary render into a render state enum.
    isRenderReady() {
        return this._isRenderReady;
    }
    setRenderReady(state) {
        this._isRenderReady = state;
    }
    isSecondaryRenderReady() {
        return this._isSecondaryRenderReady;
    }
    setSecondaryRenderReady(state) {
        this._isSecondaryRenderReady = state;
    }
    /**
     * @return {string} Type of the visualization this model represents.
     */
    getVizType() {
        return _.get(this._vizJson, [jsonConstants_1.VIZ_CONTENT_KEY, jsonConstants_1.VIZ_TYPE_KEY]) || '';
    }
    /**
     * @return {string} Subtype of the visualization this model represents.
     */
    getVizSubtype() {
        return _.get(this._vizJson, [jsonConstants_1.VIZ_CONTENT_KEY, jsonConstants_1.VIZ_SUBTYPE_KEY]) || '';
    }
    /**
     * @return {string} The name of the viz
     */
    getName() {
        return this._vizJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.VIZ_NAME_KEY];
    }
    setName(name) {
        _.set(this._vizJson, [jsonConstants_1.VIZ_HEADER_KEY, jsonConstants_1.VIZ_NAME_KEY], name);
    }
    getDescription() {
        if (!this._vizJson) {
            return '';
        }
        return this._vizJson[jsonConstants_1.VIZ_HEADER_KEY][jsonConstants_1.DESCRIPTION_KEY] || '';
    }
    setDescription(description) {
        _.set(this._vizJson, [jsonConstants_1.VIZ_HEADER_KEY, jsonConstants_1.DESCRIPTION_KEY], description);
    }
    /**
     * Get the viz title
     * @return {string} The title of the viz
     */
    getTitle() {
        let vizContent = this._vizJson[jsonConstants_1.VIZ_CONTENT_KEY];
        if (!vizContent) {
            return '';
        }
        let vizTitleObj = vizContent[jsonConstants_1.VIZ_TITLE_KEY];
        if (!vizTitleObj) {
            return '';
        }
        return vizTitleObj[jsonConstants_1.VALUE_KEY][jsonConstants_1.TEXT_KEY];
    }
    getAutoTitle() {
        let columns = this.getVizColumns();
        let groupingColumnNames = '';
        let valueColumnNames = '';
        columns.forEach((column) => {
            if (column.isGroupingColumn()) {
                groupingColumnNames += ' ' + column.getName();
            }
            else {
                valueColumnNames += ' ' + column.getName();
            }
        });
        groupingColumnNames = groupingColumnNames.trim();
        valueColumnNames = valueColumnNames.trim();
        if (valueColumnNames && groupingColumnNames) {
            return valueColumnNames + ' ' + strings.BY + ' ' + groupingColumnNames;
        }
        else if (valueColumnNames) {
            return valueColumnNames;
        }
        else if (groupingColumnNames) {
            return groupingColumnNames;
        }
        else {
            return '';
        }
    }
    getDisplayedViz() {
        return this;
    }
    /**
     * Set the viz title
     * @param {string} title      The value we want to set as title
     */
    setTitle(title) {
        let titlePath = [
            jsonConstants_1.VIZ_CONTENT_KEY,
            jsonConstants_1.VIZ_TITLE_KEY,
            jsonConstants_1.VALUE_KEY,
            jsonConstants_1.TEXT_KEY
        ];
        _.set(this._vizJson, titlePath, title);
    }
    setAutoTitle(prefixString) {
        prefixString = prefixString.trim();
        if (!prefixString) {
            return;
        }
        let vizType = this.getVizType().toLowerCase();
        this.setTitle(prefixString + ' ' + vizType);
    }
    /**
     * Returns the visualization's content definition object.
     */
    getJson() {
        return this._vizJson[jsonConstants_1.VIZ_CONTENT_KEY];
    }
    /**
     * This visualization's data object.
     *
     * @return {Object}
     */
    getVizData() {
        return this._vizData;
    }
    /**
     * Size of the visualization's data
     *
     * @returns {number}
     */
    getVizDataSize() {
        let vizData = this._vizData && this._vizData[0];
        return (vizData)
            ? this._vizData.length * this._vizData[0].lengthAdjust
            : 0;
    }
    updateData(vizData) {
        this._vizData = vizData;
    }
    clearData() {
        delete this._vizData;
    }
    /**
     * This visualization's ref to answer model that contains it.
     *
     * @return {AnswerModel}
     */
    getContainingAnswerModel() {
        return this._answerModel;
    }
    /**
     * This visualization's ref to answer model that contains it.
     *
     * @return {AnswerModel}
     */
    setContainingAnswerModel(answerModel) {
        this._answerModel = answerModel;
    }
    /**
     * Returns the visualization's referencing viz
     *
     * @return {Object}
     */
    getReferencingViz() {
        return this._referencingVizModel;
    }
    /**
     * Returns the visualization's referencing viz
     *
     * @return {Object}
     */
    setReferencingViz(referencingVizModel) {
        this._referencingVizModel = referencingVizModel;
    }
    /**
     * Returns the refAnswerSheetQuestion node in the viz's metadata json.
     * @returns {Object}
     */
    getRefAnswerSheetInfo() {
        let vizJson = this.getJson();
        if (!vizJson || !_.has(vizJson, jsonConstants_1.REF_ANSWER_BOOK_KEY)) {
            return null;
        }
        let refAnswerSheetInfo = vizJson[jsonConstants_1.REF_ANSWER_BOOK_KEY][jsonConstants_1.SHEETS_KEY][0];
        return refAnswerSheetInfo;
    }
    /**
     * Returns the parent answer sheet's question text if this is a referenced viz.
     * Works by getting the referencing viz model, and calling the
     * getReferencedQuestionText method on it.
     *
     * @return {string}
     */
    getQuestionText() {
        return this.getQuestion().getText();
    }
    /**
     * Returns the underlying Question model
     * @return {null|any}
     */
    getQuestion() {
        let parentAnswerModel = this.getContainingAnswerModel();
        let parentAnswerSheet = parentAnswerModel.getCurrentAnswerSheet();
        return parentAnswerSheet.getQuestionInfo();
    }
    /**
     * Returns the id of the answer book that contains the referenced viz, meaning the id of the
     * copy of the answer book the user dragged the viz from when they added it to the pinboard
     * @return {string} The answer book id
     */
    getReferencedAnswerBookId() {
        let refAnswerSheetInfo = this.getRefAnswerSheetInfo();
        if (!refAnswerSheetInfo || !refAnswerSheetInfo[jsonConstants_1.OWNER_KEY]) {
            return '';
        }
        return refAnswerSheetInfo[jsonConstants_1.OWNER_KEY];
    }
    getTopCount() {
        let topCount = this.getJson().topCount;
        return topCount || null;
    }
    /**
     * @return {Array}
     *
     * Get the table columns
     */
    getColumns() {
        return this.getJson().columns;
    }
    /**
     * A hook to allow subclasses to use custom Viz Col subclasses.
     * Used by headline column model.
     * @returns {Array}
     */
    createVizColumns() {
        let vizModel = this;
        return this.getColumns().map(function (c, idx) {
            let colData = vizModel.getColumnData(idx);
            return new VisualizationColumnModel(c, idx, null, colData);
        });
    }
    /**
     * @return {Array.<VisualizationColumnModel>}
     */
    getVizColumns() {
        if (this._vizColumns === null) {
            this._vizColumns = this.createVizColumns();
        }
        return this._vizColumns;
    }
    getVisualizedColumns() {
        return this.getVizColumns();
    }
    getVisualizedMeasureColumns() {
        return this.getVisualizedColumns().filter((column) => {
            return column.isEffectivelyNumeric();
        });
    }
    getVisualizedAttributeColumns() {
        return this.getVisualizedColumns().filter((column) => {
            return column.isEffectivelyNonNumeric();
        });
    }
    /**
     * Returns the number of columns for which data is available
     *
     * @return {number}
     */
    getColumnCount() {
        let vizJson = this.getJson();
        if (vizJson.columns) {
            return vizJson.columns.length;
        }
        return 0;
    }
    /**
     * Returns the data for the column with the given dataRowIndex
     * @param {Number} columnDataRowIndex
     * @returns {Array.<*>}
     */
    getColumnData(columnDataRowIndex) {
        let vizData = this.getVizData().data;
        if (!vizData || !vizData.length) {
            return [];
        }
        if (vizData[0].length <= columnDataRowIndex) {
            this._logger.warn('no column data found for col at dataRowIndex', columnDataRowIndex);
            return [];
        }
        return vizData.map(function (row) {
            return row[columnDataRowIndex];
        });
    }
    /**
     * @return {boolean}
     */
    hasMoreData() {
        return !this.getVizData().isLastBatch;
    }
    /**
     * Returns true if this viz model is same as that.
     * The meaning of equals() is very strict.
     * Both the content definition and viz data have to match.
     *
     * @param {VisualizationModel} that
     */
    equals(that) {
        if (!that) {
            return false;
        }
        return VisualizationModel_1.areModelsEqual(this, that);
    }
    /**
     * Returns true if this viz is configured to load data lazily.
     *
     * @return {boolean}
     */
    isDataOnDemand() {
        return !!this.getJson().dataOnDemand;
    }
    /**
     * Reconfigure viz to load data synchronously.
     *
     * @param {boolean} dataOnDemand
     */
    setDataOnDemand(dataOnDemand) {
        this.getJson().dataOnDemand = dataOnDemand;
    }
    setUserData(key, value) {
        let clientState = this.getClientState();
        _.set(clientState, key, value);
    }
    getUserData(key) {
        let clientState = this.getClientState();
        return clientState && _.get(clientState, key);
    }
    clearUserData(key) {
        let clientState = this.getClientState();
        if (clientState) {
            util$1.deleteProp(clientState, key);
        }
    }
    hasUserData(key) {
        let clientState = this.getClientState();
        return clientState && _.has(clientState, key);
    }
    hasUserMadeConfigChanges() {
        return false;
    }
    getSavedDataOffset() {
        return this.getUserData('dataOffset') || 0;
    }
    setSavedDataOffset(offset) {
        return this.setUserData('dataOffset', offset);
    }
    isConfigurationLocked() {
        return !!this.getJson().locked;
    }
    setIsConfigurationLocked(locked) {
        this.getJson().locked = locked;
    }
    toggleConfigurationLock() {
        let json = this.getJson();
        json.locked = !json.locked;
    }
    isPendingDataLoad() {
        if (this._dataLoadFailed) {
            return false;
        }
        if (this.isCorrupted()) {
            return false;
        }
        if (this._vizData && this._vizData.length > 0) {
            return false;
        }
        let answerSheet = this._answerModel.getCurrentAnswerSheet(), vizId = this._referencingVizModel ? this._referencingVizModel.getId() : this.getId();
        return !answerSheet.hasDataForViz(vizId);
    }
    didDataLoadFail() {
        return this._dataLoadFailed;
    }
    setDataLoadFailed(dataLoadFailed) {
        this._dataLoadFailed = !!dataLoadFailed;
    }
    getPermission() {
        let permission = this.getContainingAnswerModel().getPermission();
        if (this.isPinboardViz()) {
            let pinboardAnswerModel = this.getReferencingViz().getContainingPinboard();
            let referencedAnswerBookId = this.getReferencingViz().getReferencedAnswerBookId();
            permission = pinboardAnswerModel.getPermission();
            // Get the permission object of the answer model corresponding to the current viz.
            permission = permission.getAnswerDocumentPermission(referencedAnswerBookId);
        }
        return permission;
    }
    isMissingUnderlyingDataAccess() {
        let permission = this.getPermission();
        return !permission || permission.isMissingUnderlyingAccess();
    }
    hasNoAccessToColumn() {
        if (!this.isPinboardViz()) {
            return;
        }
        let refVizId = this.getReferencingViz().getReferencedAnswerBookId();
        if (!refVizId) {
            return;
        }
        let pinboardAnswerModel = this.getReferencingViz().getContainingPinboard();
        let permission = pinboardAnswerModel.getPermission();
        let answerDocumentPermissions = permission.getAnswerDocumentPermission(refVizId);
        if (!answerDocumentPermissions) {
            this._logger.error('No answer document permission found');
            return false;
        }
        return answerDocumentPermissions.hasNoAccessPermission();
    }
    getMatchingFilterModel(column) {
        if (!this._answerModel || !column) {
            return null;
        }
        let answerSheet = this._answerModel.getCurrentAnswerSheet();
        return answerSheet.getFilterModelByColumn(column);
    }
    getModifiedTimestamp() {
        return this._vizJson && this._vizJson.header.modified;
    }
    isOlderComparedTo(otherVizModel) {
        if (!otherVizModel) {
            return false;
        }
        return this.getModifiedTimestamp() < otherVizModel.getModifiedTimestamp();
    }
    /**
     * Returns if the viz belongs to a pinboard.
     * @return {Boolean}
     */
    isPinboardViz() {
        return !!this._referencingVizModel;
    }
    getTotalRowCount() {
        if (!this._vizData) {
            return 0;
        }
        return this._vizData.totalRowCount;
    }
    hasNoData() {
        return this.getTotalRowCount() === 0;
    }
    getSamplingRatio() {
        if (!this._vizData) {
            return null;
        }
        return this._vizData.samplingRatio;
    }
    getCompletionRatio() {
        if (!this._vizData) {
            return null;
        }
        return this._vizData.completionRatio;
    }
    allowsFormulaAddition() {
        return false;
    }
    getMetricsForSampledData() {
        let totalRowsDisplayed = '1000', totalRowCount = '1000+', showSampledMesg = false;
        if (this.getTotalRowCount() > 1000) {
            showSampledMesg = true;
        }
        else {
            totalRowCount = totalRowsDisplayed = this.getTotalRowCount().toString();
        }
        if (this.getSamplingRatio() < 1 || this.getCompletionRatio() < 1) {
            totalRowCount = 'many';
            showSampledMesg = true;
        }
        if (showSampledMesg) {
            return {
                totalRowCount: totalRowCount,
                totalRowsDisplayed: totalRowsDisplayed
            };
        }
        else {
            return {};
        }
    }
    isGenericViz() {
        return false;
    }
    getBatchSize() {
        return this._dataBatchSize;
    }
    setBatchSize(value) {
        this._dataBatchSize = value;
    }
    getSchemaVersion() {
        let vizContent = this._vizJson[jsonConstants_1.VIZ_CONTENT_KEY];
        return !!vizContent ? vizContent[jsonConstants_1.SCHEMA_VERSION] : '0.0';
    }
    getRelatedLinksCount() {
        if (!this.isPinboardViz()) {
            return 0;
        }
        let ref = this.getReferencingViz();
        if (!ref) {
            return 0;
        }
        let relatedLinks = ref._vizJson[jsonConstants_1.relatedLink.RELATED_LINKS];
        return relatedLinks.length;
    }
    shouldIgnoreRendering() {
        return this.ignoreRendering;
    }
    setIgnoreRendering() {
        this.ignoreRendering = true;
    }
    getReferencedVizIds() {
        return [];
    }
    allowAnalysis() {
        return !!this.getQuestion();
    }
    isQuerySame(vizModel) {
        let currentContext = this.getQuestion().getContext();
        let currentContextIndex = this.getQuestion().getContextIndex();
        let currentHashKey = getHashKey(currentContext, currentContextIndex);
        let newContext = vizModel.getQuestion().getContext();
        let newContextIndex = vizModel.getQuestion().getContextIndex();
        let newHashKey = getHashKey(newContext, newContextIndex);
        return currentHashKey === newHashKey;
    }
    isClientStateSame(vizModel, ignoredKeys = []) {
        let ignoredKeyMap = ignoredKeys.reduce((obj, key) => {
            obj[key] = true;
            return obj;
        }, {});
        // Here we want to handle the ignoredKeys, when the key name matches
        // ignorable key then we just return true in the comparator.
        // In the case where we return undefined the recursive check will continue.
        return util$1.isEqualWith(this.getClientState(), vizModel.getClientState(), (val1, val2, key) => {
            return ignoredKeyMap[key];
        });
    }
    isColumnMetricsDefinitionSame(vizModel) {
        let newVizColumns = vizModel.getVizColumns();
        return this.getVizColumns().every((vizCol, idx) => {
            let oldMetrics = JSON.stringify(vizCol.getMetricsDefinition());
            let newMetrics = JSON.stringify(newVizColumns[idx].getMetricsDefinition());
            return oldMetrics === newMetrics;
        });
    }
    setIsPBDDViz(state) {
        this.isPBDDViz = state;
    }
    getIsPBDDViz() {
        return this.isPBDDViz;
    }
    getReferencedLogicalTables() {
        let question = this.getQuestion();
        let queryContext = question.getContext();
        let tables = queryContext.getTables() || [];
        let tablesUsedMap = tables.reduce(function (tablesUsedMap, table) {
            let tokens = table.getTokens() || [];
            tokens.forEach(function (token) {
                let tableGuid = _.get(token, 'tokenMetadata.table.guid');
                if (!!tableGuid) {
                    tablesUsedMap[tableGuid] = true;
                }
            });
            return tablesUsedMap;
        }, {});
        return tablesUsedMap;
    }
    getLinkedColumnsForColumn(columnId) { return []; }
    getClientState() {
        if (!this || !this._vizJson) {
            return null;
        }
        let clientState = this._vizJson.header.clientState;
        if (!clientState) {
            clientState = this._vizJson.header.clientState = {};
        }
        return clientState;
    }
    getVizContent() {
        if (!this._vizJson) {
            return null;
        }
        let vizContent = this._vizJson.header.vizContent;
        if (!vizContent) {
            vizContent = this._vizJson.header.vizContent = {};
        }
        return vizContent;
    }
};
VisualizationModel = VisualizationModel_1 = __decorate([
    Provide('VisualizationModel')
], VisualizationModel);

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Shashank Singh (sunny@thoughtspot.com)
 *
 * @fileoverview Model for encapsulating a corrupt visualization model
 */
class CorruptVizModel extends VisualizationModel {
    constructor(params) {
        if (!params.vizJson) {
            params.vizJson = {};
        }
        params.vizJson[jsonConstants_1.HEADER_KEY] = {};
        super(params);
    }
    isCorrupted() {
        return true;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2017
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview
 */
let genericVizModelFactory = ngRequire('genericVizModelFactory');
Provide('pinboardAnswerSheetUtil')({
    getVisualizationAnswerModels,
    resolveReferencedGenericVisualization,
    getPinboardLayout
});
function getVisualizationAnswerModels(objectResolver, answerModel) {
    if (!objectResolver) {
        return null;
    }
    let result = {};
    _.forIn(objectResolver, (resolvedVizContent, id) => {
        if (!resolvedVizContent) {
            result[id] = new CorruptVizModel({
                answerModel: answerModel
            });
            return;
        }
        result[id] = answerModel.isInsightPinboard && answerModel.isInsightPinboard() ?
            getInsightAnswerModelFromReportBook(resolvedVizContent) :
            getAnswerModelFromReportBook(resolvedVizContent);
    });
    return result;
}
function resolveReferencedGenericVisualization(subType, origJson, answerModel) {
    return genericVizModelFactory.createGenericVizModel(subType, {
        vizJson: origJson,
        answerModel: answerModel
    });
}
/**
 * Checks whether a certain viz is in the layout array
 * @param {Object} layout   The layout array
 * @param {string} vizId    The id of the viz
 * @return {boolean | undefined}
 */
function vizIsInLayout(layout, vizId) {
    if (!vizId) {
        return false;
    }
    let matchIndex = _.findIndex(layout, (tile) => {
        return tile[jsonConstants_1.ID_KEY] === vizId;
    });
    return matchIndex > -1;
}
function getPinboardLayout(originalLayout, visualizationMap, visualizationArray, flattenClusters, applyInsightsStyle, defaultTileSize) {
    // Create layout tiles of vizs that dont have layout tiles.
    visualizationArray.forEach((viz) => {
        let vizId = viz.getId();
        if (!vizIsInLayout(originalLayout, vizId)) {
            let layoutItem = {
                id: vizId
            };
            originalLayout.push(layoutItem);
        }
    });
    // Clean up the layout definition for stale definitions.
    // Filter the layout array to remove any viz that is not in the visualizations object
    let layout = originalLayout.filter(function (item) {
        let id = item[jsonConstants_1.ID_KEY];
        if (!id) {
            throw new Error('Invalid layout description in answersheet');
        }
        return visualizationMap.hasOwnProperty(id);
    });
    // Ids of pinboard vizs which are part on any cluster.
    let vizsInClusters = {};
    let filterVizs = {};
    // Ids of pinboard vizs which refer to cluster viz.
    let clusterVizIds = {};
    _.forIn(visualizationMap, (viz) => {
        let referencedViz = viz.getReferencedVisualization();
        if (referencedViz.getVizType() === jsonConstants_1.VIZ_TYPE_CLUSTER) {
            clusterVizIds[viz.getId()] = true;
            let refVizIds = referencedViz.getReferencedVizIds();
            refVizIds.forEach(function (id) {
                vizsInClusters[id] = true;
            });
        }
        if (referencedViz.getVizType() === jsonConstants_1.vizType.FILTER) {
            let id = viz.getId();
            filterVizs[id] = true;
        }
    });
    layout = layout.filter(function (item) {
        return !filterVizs[item.id];
    });
    // Handle the flattening of clusters.
    if (flattenClusters) {
        layout = layout.filter(function (item) {
            return !clusterVizIds[item.id];
        });
    }
    else {
        // NOTE: We operate under the assumption that a viz will have only
        // one manifestation.
        // Eg 1: Viz part of a cluster will not show as a individual viz on
        // pinboard.
        // Eg 2: Same viz will not be part of multiple clusters.
        layout = layout.filter(function (item) {
            return !vizsInClusters[item.id];
        });
    }
    // TODO(Jasmeet): This logic needs to be moved to backend.
    // The intent here is to make first 2 unclustered tiles as large tiles
    // and also mark all clustered vizs as large tile. All remaining tiles
    // take the medium size by default.
    if (applyInsightsStyle) {
        let tileIndexWithSavedSize = _.findIndex(layout, (tile) => {
            return !!tile.size || !_.isNil(tile.order);
        });
        let hasUserAppliedStyle = tileIndexWithSavedSize > -1;
        if (!hasUserAppliedStyle) {
            layout.forEach((item, idx) => {
                let id = item[jsonConstants_1.ID_KEY];
                let increaseSize = false;
                if (clusterVizIds[id]) {
                    increaseSize = true;
                }
                if (increaseSize) {
                    item.size = blinkConstants_1.tileSizes.EXTRA_LARGE;
                }
                item.order = idx;
            });
        }
    }
    function getDefaultTileSize(pinboardVizModel) {
        let vizModel = pinboardVizModel.getReferencedVisualization();
        let vizType = vizModel.getVizType();
        switch (vizType) {
            case jsonConstants_1.vizType.HEADLINE:
                return blinkConstants_1.tileSizes.EXTRA_SMALL;
            case jsonConstants_1.vizType.TABLE:
                return blinkConstants_1.tileSizes.LARGE;
            default:
                return blinkConstants_1.tileSizes.MEDIUM;
        }
    }
    layout.forEach((tile) => {
        if (_.isNil(tile.size)) {
            tile.size = !!defaultTileSize
                ? defaultTileSize
                : getDefaultTileSize(visualizationMap[tile.id]);
        }
    });
    return layout;
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview This is the base class for all search pages.
 */
var AnswerDisplayMode;
(function (AnswerDisplayMode) {
    AnswerDisplayMode["TABLE"] = "TABLE-MODE";
    AnswerDisplayMode["CHART"] = "CHART-MODE";
    AnswerDisplayMode["R_ANALYSIS"] = "R-ANALYSIS-MODE";
})(AnswerDisplayMode || (AnswerDisplayMode = {}));
Provide('BaseAnswer')({
    AnswerDisplayMode: AnswerDisplayMode
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Model for representing data result set.
 */
let QueryData = class QueryData {
    constructor(infoJson) {
        this.info = infoJson;
        this.data = this.info[jsonConstants_1.queryInfo.DATA];
    }
    getData() {
        return this.data;
    }
};
QueryData = __decorate([
    Provide('QueryData')
], QueryData);

/**
 * Copyright: ThoughtSpot Inc. 2015-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview This service exposes functionality to get best axis config map per chart type
 * for a given chart Model
 */
function computeChartTypesToBestAxisConfigMap(chartModel) {
    return Object.keys(chartTypes)
        .reduce((bestAxisColumnConfigForChartType, chartType) => {
        let bestConfig = computeBestChartAxisConfig(chartType, chartModel);
        if (!!bestConfig) {
            bestAxisColumnConfigForChartType[chartType] = bestConfig;
        }
        return bestAxisColumnConfigForChartType;
    }, {});
}
Provide('bestChartAxisConfigService')({
    computeChartTypesToBestAxisConfigMap
});

/**
 * Copyright: ThoughtSpot Inc. 2015-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Provides a service that maps callosum chart axis config to
 * UI axis config and vice versa.
 */
let logger;
Provide('chartAxisConfigMappingService')({
    setBackendConfiguration,
    getBackendConfiguration
});
function setBackendConfiguration(chartModel, axisConfig) {
    if (!logger) {
        logger = logger_3('chart-axis-config-mapping-service');
    }
    // clear axis state on all columns
    let allColumns = chartModel.getColumns();
    allColumns.forEach((column) => setChartAxisInClientState(column, ChartAxis.NONE));
    axisConfig.xAxisColumns.forEach((column) => setChartAxisInClientState(column, ChartAxis.X));
    axisConfig.yAxisColumns.forEach((column) => setChartAxisInClientState(column, ChartAxis.Y));
    axisConfig.legendColumns.forEach((column) => setChartAxisInClientState(column, ChartAxis.Z));
    if (axisConfig.radialColumn) {
        setChartAxisInClientState(axisConfig.radialColumn, ChartAxis.R);
    }
    // define base query
    setQueriesDefinition(axisConfig, chartModel);
}
function getBackendConfiguration(chartModel) {
    if (!logger) {
        logger = logger_3('chart-axis-config-mapping-service');
    }
    let chartJson = chartModel.getJson(), configurations = {
        [ChartAxis.X]: {},
        [ChartAxis.Y]: {},
        [ChartAxis.Z]: {},
        [ChartAxis.R]: null,
        columnsInChartDataNotOnAnyAxis: {},
        allColumns: {}
    }, queryDefinitions = getQueriesDefinitions(chartModel, chartJson.chartConfigurations ? chartJson.chartConfigurations : []);
    queryDefinitions.forEach((queryDefn) => {
        queryDefn.getColumnsInDataOrder().forEach((column) => {
            const uniqueIdForVizCol = getUniqueIdForVizCol(column);
            configurations.allColumns[uniqueIdForVizCol] = column;
            let axisClientState = getChartAxisFromClientState(column);
            switch (axisClientState) {
                case ChartAxis.X:
                case ChartAxis.Y:
                case ChartAxis.Z:
                    configurations[axisClientState][uniqueIdForVizCol] = column;
                    break;
                case ChartAxis.R: // that would be nice if we can have an array
                    configurations['r'] = column; // TS complain otherwise
                    break;
                // NOTE: This condition here allows default to go to hidden to
                // support backward compatibility.
                default:
                    configurations.columnsInChartDataNotOnAnyAxis[uniqueIdForVizCol] = column;
                    break;
            }
        });
    });
    let backendConfigurations = {
        allColumns: _.values(configurations.allColumns),
        xAxisColumns: _.values(configurations[ChartAxis.X]),
        yAxisColumns: _.values(configurations[ChartAxis.Y]),
        legendColumns: _.values(configurations[ChartAxis.Z]),
        radialColumn: configurations['r'],
        columnsInChartDataNotOnAnyAxis: _.values(configurations.columnsInChartDataNotOnAnyAxis),
        queryDefinitions
    };
    let hasNoXandYColumns = backendConfigurations.xAxisColumns.length === 0 &&
        backendConfigurations.yAxisColumns.length === 0;
    // This is a fail safe logic in cases where the axis config is not available on server.
    // We also check chartType here as whenever chart type is set in model the axis
    // configuration should be set. Otherwise in case of adhoc answer we dont want to set
    // the x and y with fail safe logic. We will defer this logic to chart viz.
    if (hasNoXandYColumns && !!chartModel.chartType) {
        backendConfigurations.chartModel = chartModel;
        backendConfigurations.chartModel.setIsMissingAxisConfigurationDetail(true);
    }
    return backendConfigurations;
}

/**
 * Copyright: ThoughtSpot Inc. 2015-2016
 * Author: Sagar Patni
 *
 * @fileoverview Library containing logic for commonly used data operations.
 */
class VarianceCalculator {
    constructor() {
        this.n = 0;
        this.mean = 0;
        this.m2 = 0;
    }
    add(val) {
        this.n++;
        let delta = val - this.mean;
        this.mean = this.mean + delta / this.n;
        this.m2 = this.m2 + delta * (val - this.mean);
    }
    getVariance() {
        return this.n <= 1 ? 0 : this.m2 / (this.n - 1);
    }
    getMean() {
        return this.mean;
    }
    // TODO(sunny): co-efficient of variation does not make sense as a measure of spread of data
    // if the data has negative values (http:// stats.stackexchange.com/q/56399)
    getCoefficientOfVariation() {
        let variance = this.getVariance();
        return variance === 0 ? 0 : Math.abs(variance / this.getMean());
    }
}

/**
 * Copyright Thoughtspot Inc. 2016
 * Author:  francois.chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview: The Data model for the Dx table component
 */
//Note(chab) we are not importing ChartModel as it will cause tests to fail
let util$2 = ngRequire('util');
class BaseTableDataModel extends ChartDataModel {
    constructor(chartModel) {
        super();
        this.chartModel = chartModel;
        this._columnIdToColumn = {};
        // _columnNameToColumn - Unique column name to Column object map needed in pivot component
        this._columnNameToColumn = {};
        // _colIdToUniqueName - Map Col GUID to Unique name using
        // chartUtilService.getColumnIdToDisambiguatedName
        this._colIdToUniqueName = {};
        this.logger = logger_3('dx-table-data-model');
        //Note(chab) hack for preventing unit test to fail
        BaseTableDataModel.blinkAggTypesToPivotAggTypes = {
            [aggregateTypes.SUM]: 'sum',
            // For local aggregations, count is like sum.
            [aggregateTypes.COUNT]: 'sum',
            [aggregateTypes.COUNT_DISTINCT]: 'sum',
            [aggregateTypes.AVERAGE]: 'avg',
            [aggregateTypes.MIN]: 'min',
            [aggregateTypes.MAX]: 'max'
        };
        this.parseDefinitions(chartModel);
        if (chartModel.getVisualizedColumns().length === 0) {
            this._data = [];
        }
        else {
            this.processData(chartModel);
        }
    }
    get hasNoData() {
        return this._count === 0;
    }
    get hasMoreData() {
        return this.chartModel.hasMoreData();
    }
    get count() {
        return this._count;
    }
    get data() {
        return this._data;
    }
    get columns() {
        return this._columns;
    }
    get columnIdToColumn() {
        return this._columnIdToColumn;
    }
    get columnNameToColumn() {
        return this._columnNameToColumn;
    }
    getColumnById(id) {
        let column = this._columnIdToColumn[id];
        if (!column && id) {
            this.logger.error('unknown column', id);
        }
        return column;
    }
    columnCanContainsLink(id) {
        let column = this.getColumnById(id);
        return (column && column.isAttribute() && column.isEffectivelyNonNumeric());
    }
    getEffectiveAggrType(col) {
        let aggType = col.getTrueEffectiveAggregateType();
        return BaseTableDataModel.blinkAggTypesToPivotAggTypes[aggType];
    }
    getDataRowAttribute(data) {
        let specialFormat = util$2.getSpecialFormatData(data);
        data = (!!specialFormat)
            ? specialFormat
            : data + '';
        return data;
    }
    parseDefinitions(chartModel) {
        this.buildColumnMaps(chartModel);
    }
    processData(chartModel) {
        let dataArray = chartModel.getDataArray();
        if (!dataArray) {
            return;
        }
        let data = dataArray[0].getData();
        if (!data) {
            return;
        }
        this._dataRowIndexToColumn = chartModel.getVisualizedColumns()
            .reduce((dataRowIndexToColumn, column) => {
            dataRowIndexToColumn[column.getDataRowIndex()] = column;
            return dataRowIndexToColumn;
        }, {});
        this._data = data.map((dataRow) => {
            return this.getDataRow(chartModel, dataRow);
        });
        this._count = this._data.length;
    }
    buildColumnMaps(chartModel) {
        this._colIdToUniqueName = getColumnIdToDisambiguatedName(chartModel.getVizColumns(), true);
        this._columnIdToColumn = chartModel.getVizColumns().reduce((map, col) => {
            let name = col.getId();
            map[name] = col;
            this._columnNameToColumn[this._colIdToUniqueName[name]] = col;
            return map;
        }, {});
    }
    getDataRow(chartModel, dataRow) {
        return dataRow.reduce((row, data, idx) => {
            let column = this._dataRowIndexToColumn[idx];
            let colId = column.getId();
            let isColAttr = chartModel.isColAttribute(column);
            if (this.getDataRowMeasureAndAttribute) {
                data = this.getDataRowMeasureAndAttribute(data, colId, this.getDataRowAttribute, isColAttr);
            }
            row[colId] = data;
            return row;
        }, {});
    }
}

/**
 * Copyright Thoughtspot Inc. 2016
 * Author:  ashish.shubam (ashish.shubham@thoughtspot.com)
 *
 * @fileoverview: Utility methods for dx widget
 */
const SUPPORTED_AGGREGATIONS = new Set(['SUM', 'MAX', 'MIN', 'AVERAGE']);
/**
 * Comparator method which is used to sort an array containing
 * both strings and numbers. The numbers come before strings.
 * @param prev {Object}
 * @param next {Object}
 * @returns {number}
 */
function sortMethod(prev, next) {
    let a = prev.value;
    let b = next.value;
    a = (isNaN(a)) ? a : Number.parseFloat(a);
    b = (isNaN(b)) ? b : Number.parseFloat(b);
    if (_.isNumber(a) && _.isNumber(b)) {
        return a - b;
    }
    if (_.isString(a) && _.isString(b)) {
        return a.localeCompare(b);
    }
    if (_.isNumber(a)) {
        return -1;
    }
    return 1;
}
function rowColFormatter(vizCol, params, isPercent = false, noShorten = true, agg, isDouble) {
    if (_.isUndefined(params.value)) {
        return '';
    }
    let formattedVal = vizCol.getDataFormatter()(params.value, {
        isPercent: isPercent || vizCol.isPercentColumn(),
        isDouble: isDouble || vizCol.isDoubleColumn(),
        noShorten,
    });
    if (!agg) {
        return String(formattedVal);
    }
    let trueAgg = vizCol.getTrueEffectiveAggregateType();
    if (SUPPORTED_AGGREGATIONS.has(trueAgg)) {
        return `${vizCol.getName(false)} : ${formattedVal}`;
    }
    return `${strings.aggregateTypes.SUM} ${vizCol.getName(true)} : ${formattedVal}`;
}
function dataFormatter(vizCol, summaryMode, params) {
    if (_.isUndefined(params.value)) {
        return '';
    }
    // When one of the entries is NaN or Infinity, Pivot tables concatenates these as string
    if (typeof params.value === 'string') {
        return strings.pivotTable.UNDEFINED_RESULT;
    }
    let isPercent = summaryMode() && summaryMode() !== 'None';
    //if summary mode is enabled, percent values are calculated by Blink which is double
    return rowColFormatter(vizCol, params, isPercent, true, undefined, isPercent);
}
function getSortOrder(vizCol) {
    if (!vizCol.isSorted()) {
        return;
    }
    return vizCol.isAscendingSort()
        ? blinkConstants_1.pivotTable.ascendingSort
        : blinkConstants_1.pivotTable.descendingSort;
}

/**
 * Copyright Thoughtspot Inc. 2016
 * Author:  Ashish shubham (ashish.shubham@thoughtspot.com)
 *
 * @fileoverview: The Data model for the Pivot Table component.
 */
let areaToAxisMap = {
    column: 'legendColumns',
    row: 'xAxisColumns',
    data: 'yAxisColumns'
};
let PivotDataModel = class PivotDataModel extends BaseTableDataModel {
    constructor(chartModel) {
        super(chartModel);
        this.getPivotSummaryMode = () => {
            return chartModel.getPivotSummaryMode();
        };
    }
    get rows() {
        return this._rows;
    }
    get measures() {
        return this._measures;
    }
    getPivotDataSource() {
        return {
            fields: this.getFields(),
            store: this._data
        };
    }
    min(di) {
        return this._min[di];
    }
    max(di) {
        return this._max[di];
    }
    unsetCustomizeText(dataSource) {
        this._measures.forEach(measureCol => {
            delete dataSource.field(measureCol.getId()).customizeText;
        });
    }
    setCustomizeText(dataSource) {
        let self = this;
        this._measures.forEach(measureCol => {
            let fOpts = dataSource.field(measureCol.getId());
            fOpts.customizeText = dataFormatter.bind(self, measureCol, self.getPivotSummaryMode);
            dataSource.field(measureCol.getId(), fOpts);
        });
    }
    getFields() {
        let sortField;
        let summarySortOrder;
        let self = this;
        this._measures.forEach((measureCol) => {
            if (measureCol.isSorted()) {
                sortField = measureCol.getId(true);
                summarySortOrder = getSortOrder(measureCol);
            }
        });
        let columns = this._columns.map(col => {
            return {
                dataField: col.getId(),
                area: blinkConstants_1.pivotTable.Areas.COLUMN,
                isMeasure: col.isEffectivelyNumeric(),
                // Using correct caption means no remapping needed after pivot table is displayed
                caption: col.getTitle() || self._colIdToUniqueName[col.getId()],
                customizeText: rowColFormatter.bind(self, col),
                sortBySummaryField: sortField,
                sortBy: 'value',
                sortingMethod: sortMethod,
                sortOrder: getSortOrder(col) || summarySortOrder
            };
        });
        let rows = this._rows.map(col => {
            return {
                dataField: col.getId(),
                area: blinkConstants_1.pivotTable.Areas.ROW,
                isMeasure: col.isEffectivelyNumeric(),
                // Using correct caption means no remapping needed after pivot table is displayed
                caption: col.getTitle() || self._colIdToUniqueName[col.getId()],
                customizeText: rowColFormatter.bind(self, col),
                sortBySummaryField: sortField,
                sortBy: 'value',
                sortingMethod: sortMethod,
                sortOrder: getSortOrder(col) || summarySortOrder
            };
        });
        let measures = this._measures.map(col => {
            return {
                dataField: col.getId(),
                area: blinkConstants_1.pivotTable.Areas.DATA,
                isMeasure: col.isEffectivelyNumeric(),
                // Using correct caption means no remapping needed after pivot table is displayed
                caption: col.getTitle() || self._colIdToUniqueName[col.getId()],
                summaryType: self.getEffectiveAggrType(col),
                summaryDisplayMode: self.getPivotSummaryMode(),
                dataType: 'number',
                customizeText: dataFormatter.bind(self, col, self.getPivotSummaryMode)
            };
        });
        return [].concat(columns).concat(rows).concat(measures);
    }
    parseAxisConfig(axisConfig) {
        this._min = {};
        this._max = {};
        this._rows = axisConfig[areaToAxisMap.row];
        this._columns = axisConfig[areaToAxisMap.column];
        this._measures = axisConfig[areaToAxisMap.data];
    }
    getDataRowMeasureAndAttribute(data, colId, getDataRowAttribute, isColAttr) {
        data = this.columnIdToColumn[colId].convertValueFromBackend(data);
        if (isColAttr) {
            data = getDataRowAttribute(data);
        }
        this.updateMinMax(data, colId);
        return data;
    }
    parseDefinitions(chartModel) {
        this.parseAxisConfig(chartModel.getAxisConfig());
        super.parseDefinitions(chartModel);
    }
    updateMinMax(data, colId) {
        this._min[colId] = (!this._min[colId] || data < this._min[colId]) ? data : this._min[colId];
        this._max[colId] = (!this._max[colId] || data > this._max[colId]) ? data : this._max[colId];
    }
};
PivotDataModel = __decorate([
    Provide('PivotDataModel')
], PivotDataModel);

/**
 * Copyright: ThoughtSpot Inc. 2015-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Service to process Data for the chart.
 */
function computeMetaDataInformation(chartModel) {
    logger_3('chart-data-processor');
    let colCardinality = {};
    let timeSeriesColumns = chartModel.getTimeSeriesColumns(), chartedAsAttributeColumns = _.difference(chartModel.getAttributeColumns(), timeSeriesColumns);
    chartedAsAttributeColumns.forEach(function (col) {
        let colId = col.getId();
        colCardinality[colId] = col.getUniqueCount() || -1;
    });
    if (chartModel.hasNoData()) {
        return {
            colCardinality: colCardinality
        };
    }
    let definition = chartModel.getJson(), measureColumns = [], attributeColumns = [], dataRowIndex = 0;
    [definition.series, definition.categories, definition.values]
        .forEach(function (bucket) {
        if (!bucket || !bucket.columns || !bucket.columns.length) {
            return;
        }
        bucket.columns.forEach(function (columnJson) {
            if (!columnJson || !Object.keys(columnJson).length) {
                return false;
            }
            let idx = dataRowIndex++;
            let column = new VisualizationColumnModel(columnJson, idx, null, chartModel.getColumnData(idx));
            if (column.isEffectivelyNumeric()) {
                measureColumns.push(column);
            }
            else {
                attributeColumns.push(column);
            }
        });
    });
    let columnIdToMin = {}, columnIdToMax = {}, columnIdToUniques = {}, dataRowIndexToAttributeColId = {}, dataRowIndexToMeasureColId = {}, measureColIdToVarianceCalculator = {};
    attributeColumns.forEach(function (col) {
        let colId = col.getId(), dataRowIndex = col.getDataRowIndex();
        dataRowIndexToAttributeColId[dataRowIndex] = colId;
        columnIdToUniques[colId] = {};
    });
    measureColumns.forEach(function (col) {
        let colId = col.getId(), dataRowIndex = col.getDataRowIndex();
        columnIdToUniques[colId] = {};
        columnIdToMin[colId] = Number.POSITIVE_INFINITY;
        columnIdToMax[colId] = Number.NEGATIVE_INFINITY;
        dataRowIndexToMeasureColId[dataRowIndex] = colId;
        measureColIdToVarianceCalculator[colId] = new VarianceCalculator();
    });
    let attributeDataRowIndices = Object.keys(dataRowIndexToAttributeColId), measureDataRowIndices = Object.keys(dataRowIndexToMeasureColId);
    let chartData = chartModel.getDataArray()[0].getData();
    let i = chartData.length;
    while (i--) {
        let dataRow = chartData[i], dataRowLength = dataRow.length;
        let value, colId, colUniques;
        let j = attributeDataRowIndices.length;
        while (j--) {
            dataRowIndex = Number(attributeDataRowIndices[j]);
            if (dataRowIndex < dataRowLength) {
                value = dataRow[dataRowIndex];
                colId = dataRowIndexToAttributeColId[dataRowIndex];
                colUniques = columnIdToUniques[colId];
                if (!colUniques.hasOwnProperty(value)) {
                    colUniques[value] = 1;
                }
            }
        }
        j = measureDataRowIndices.length;
        while (j--) {
            dataRowIndex = Number(measureDataRowIndices[j]);
            if (dataRowIndex < dataRowLength) {
                value = dataRow[dataRowIndex];
                if (!isNaN(value)) {
                    colId = dataRowIndexToMeasureColId[dataRowIndex];
                    // update min/max for the column
                    columnIdToMin[colId] = Math.min(value, columnIdToMin[colId]);
                    columnIdToMax[colId] = Math.max(value, columnIdToMax[colId]);
                    measureColIdToVarianceCalculator[colId].add(value);
                }
                // for measures we include NaN values in uniques as well since at this point we
                // don't have the information about whether a given measure column can allow nulls.
                // this is because whether a column allows nulls can depend on the axis it is on
                // (which is not decided yet). We err on the side of over counting cardinality.
                colUniques = columnIdToUniques[colId];
                if (colUniques && !colUniques.hasOwnProperty(value)) {
                    colUniques[value] = 1;
                }
            }
        }
    }
    return {
        columnIdToMin: columnIdToMin,
        columnIdToMax: columnIdToMax,
        columnIdToUniques: columnIdToUniques,
        colCardinality: colCardinality,
        dataRowIndexToAttributeColId: dataRowIndexToAttributeColId,
        dataRowIndexToMeasureColId: dataRowIndexToMeasureColId
    };
}
function getChartProviderToDataModel() {
    return {
        [chartProviders.HIGHCHART]: HighchartDataModel,
        [chartProviders.GEO_MAP]: HighchartDataModel,
        [chartProviders.GEO_EARTH]: HighchartDataModel,
        [chartProviders.PIVOT_TABLE]: PivotDataModel,
        [chartProviders.NETWORK]: NetworkChartDataModel
    };
}
function getDataModel(chartModel) {
    let chartType = chartModel.getChartType();
    let chartProvider = getChartProvider(chartType) || chartProviders.HIGHCHART;
    let chartProviderToDataModel = getChartProviderToDataModel();
    return new chartProviderToDataModel[chartProvider](chartModel);
}

/**
 * Copyright: ThoughtSpot Inc. 2015-2017
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 * Francois Chabbey(francois.chabbey@thoughtspot.com)
 *
 * @fileoverview Provides api abstraction for persistence of chart related information
 * in session store; this can be extended in future to allow persistence
 *
 * in local store on clients.
 */
let columnEffectiveIdGetter = column => column.getId();
function getConfig(key) {
    let config = sessionStore.getItem(key);
    return !config ? null : config;
}
function persistChartTypeAndAxisConfig(chartModel) {
    if (chartModel.isPinboardViz()) {
        return;
    }
    let key = chartModel.getId(), chartType = chartModel.getChartType(), xAxisColumnIds = chartModel.getXAxisColumns().map(columnEffectiveIdGetter), yAxisColumnIds = chartModel.getYAxisColumns().map(columnEffectiveIdGetter), legendColumnIds = chartModel.getLegendColumns().map(columnEffectiveIdGetter), allColumnIds = chartModel.getColumns().map(columnEffectiveIdGetter), radialColumn = chartModel.getRadialColumn();
    let radialColumnIds = (radialColumn)
        ? [columnEffectiveIdGetter(radialColumn)]
        : [];
    let visualizedColumnIdsAndAxis = getVisualizedColumnIdsAndAxis(xAxisColumnIds, yAxisColumnIds, legendColumnIds, radialColumnIds);
    let storeEntry = {
        xAxisColumnIds,
        yAxisColumnIds,
        legendColumnIds,
        radialColumnIds,
        chartType,
        allColumnIds,
        visualizedColumnIdsAndAxis
    };
    sessionStore.setItem(key, storeEntry);
}
function getVisualizedColumnIdsAndAxis(xAxisColumnIds, yAxisColumnIds, legendColumnIds, radialColumnIds) {
    let columnIdsByAxis = {
        xAxisColumnIds,
        yAxisColumnIds,
        legendColumnIds,
        radialColumnIds
    };
    return Object.keys(columnIdsByAxis)
        .reduce((visualizedColumnIdsAndAxis, axisName) => {
        columnIdsByAxis[axisName].forEach(c => visualizedColumnIdsAndAxis[c] = axisName);
        return visualizedColumnIdsAndAxis;
    }, {});
}
function generateMatchingConfig(axisIdsConfig, allColumnsMap) {
    let matchingXColumns = axisIdsConfig.xAxisColumnIds.map(id => allColumnsMap[id]);
    let matchingYColumns = axisIdsConfig.yAxisColumnIds.map(id => allColumnsMap[id]);
    let matchingLegendColumns = axisIdsConfig.legendColumnIds.map(id => allColumnsMap[id]);
    let matchingRadialColumns = axisIdsConfig.radialColumnIds.map(id => allColumnsMap[id]);
    return new ChartAxisConfig(_.compact(matchingXColumns), _.compact(matchingYColumns), _.compact(matchingLegendColumns), matchingRadialColumns[0]);
}
Provide('chartPersistedStore')({
    getConfig,
    persistChartTypeAndAxisConfig,
    generateMatchingConfig
});

let columnEffectiveIdGetter$1 = function (column) {
    return column.getId();
};
// This function checks if this is a modification to the chart visualization user was viewing
// and all columns in the chart are the exact same.
// In this case we would like to retain the config user was viewing before the transformation.
function checkIfAllColumnsChangedAndReturnConfig(chartModel) {
    // if the new answer has exactly same columns we retreive last viewed config.
    let previousConfig = getConfig(chartModel.getId());
    if (!previousConfig) {
        return null;
    }
    let allColumns = chartModel.getColumns();
    if (!allColumns || !allColumns.length) {
        return null;
    }
    if (previousConfig.allColumnIds.length !== allColumns.length) {
        return null;
    }
    let allColumnIds = allColumns.map(columnEffectiveIdGetter$1), allColumnsMap = chartModel.getColumnsMap();
    let allColumnsMatch = previousConfig.allColumnIds.every(function (columnId) {
        return allColumnsMap.hasOwnProperty(columnId);
    });
    if (allColumnsMatch) {
        let axisConfig = generateMatchingConfig(previousConfig, allColumnsMap);
        let chartType = previousConfig.chartType;
        let isConfigValid = validateAxisConfig(chartType, axisConfig);
        if (isConfigValid) {
            return {
                axisConfig: axisConfig,
                chartType: chartType
            };
        }
    }
    return null;
}
let getDefaultAxisConfigAndChartType = function (chartModel) {
    let chartTransformationConfig = checkIfAllColumnsChangedAndReturnConfig(chartModel);
    if (!!chartTransformationConfig) {
        return chartTransformationConfig;
    }
    let bestChartAxisConfigMap = computeChartTypesToBestAxisConfigMap(chartModel);
    let chartType = null;
    // Constants
    let BUBBLE_CHART_SINGLE_YAXIS_MIN_CARDINALITY_THRESHOLD = 10, VERY_HIGH_CARDINALITY_THRESHOLD = 30;
    // Input data read from chart model
    let measureColumns = chartModel.getMeasureColumns(), numMeasureColumns = measureColumns.length, timeSeriesColumns = chartModel.getTimeSeriesColumns(), numTimeSeriesColumns = timeSeriesColumns.length, chartedAsAttributeColumns = _.difference(chartModel.getAttributeColumns(), timeSeriesColumns), numChartedAsAttributeColumns = chartedAsAttributeColumns.length, columnCardinality = chartModel.getCardinalityData();
    // we don't support more than two attribute
    // columns in default configurations so we select the "best" two
    // attribute columns we would want to include
    let attrCol1, attrCol2, attrColId1, attrColId2, attrColCardinality1, attrColCardinality2;
    // lower cardinality is better than higher cardinality
    let bestAttributeColumns = chartedAsAttributeColumns
        .sort(function (col1, col2) {
        let colId1 = col1.getId(), colId2 = col2.getId(), colCardinality1 = columnCardinality[colId1], colCardinality2 = columnCardinality[colId2];
        return colCardinality1 - colCardinality2;
    });
    attrCol1 = bestAttributeColumns[0];
    attrCol2 = bestAttributeColumns[1];
    attrColId1 = attrCol1 && attrCol1.getId();
    attrColId2 = attrCol2 && attrCol2.getId();
    attrColCardinality1 = attrCol1 && columnCardinality[attrColId1];
    attrColCardinality2 = attrCol2 && columnCardinality[attrColId2];
    let topCount = chartModel.getTopCount();
    let BAR_COLUMN_CHART = (topCount)
        ? chartTypes.BAR
        : chartTypes.COLUMN;
    /*global flags*/
    if (flags.getValue(flags.BLINK_FLAGS.enableWebGLMaps.name)) {
        if (!!bestChartAxisConfigMap[chartTypes.GEO_EARTH_AREA]) {
            chartType = chartTypes.GEO_EARTH_AREA;
        }
        else if (!!bestChartAxisConfigMap[chartTypes.GEO_EARTH_BUBBLE]) {
            chartType = chartTypes.GEO_EARTH_BUBBLE;
        }
    }
    else {
        if (!!bestChartAxisConfigMap[chartTypes.GEO_AREA]) {
            chartType = chartTypes.GEO_AREA;
        }
        else if (!!bestChartAxisConfigMap[chartTypes.GEO_BUBBLE]) {
            chartType = chartTypes.GEO_BUBBLE;
        }
    }
    if (!chartType && numMeasureColumns === 1 && numChartedAsAttributeColumns === 0) {
        if (numTimeSeriesColumns >= 1) {
            chartType = chartTypes.LINE;
        }
    }
    if (!chartType && numMeasureColumns === 1 && numChartedAsAttributeColumns === 1) {
        if (numTimeSeriesColumns >= 1) {
            chartType = chartTypes.LINE;
        }
        else {
            chartType = BAR_COLUMN_CHART;
        }
    }
    if (!chartType && numMeasureColumns === 1 && numChartedAsAttributeColumns === 2) {
        if (numTimeSeriesColumns === 1) {
            chartType = chartTypes.LINE;
        }
        else {
            if (attrColCardinality1 <= 5 && attrColCardinality2 <= 10) {
                chartType = BAR_COLUMN_CHART;
            }
            else if (attrColCardinality1 > 30 && attrColCardinality2 > 30) {
                chartType = BAR_COLUMN_CHART;
            }
            else if (attrColCardinality1 < 30 && attrColCardinality2 > 30) {
                chartType = chartTypes.STACKED_COLUMN;
            }
            else {
                chartType = chartTypes.STACKED_COLUMN;
            }
        }
    }
    if (!chartType && numMeasureColumns === 2 && numChartedAsAttributeColumns === 0) {
        if (numTimeSeriesColumns >= 1) {
            chartType = chartTypes.LINE;
        }
    }
    if (!chartType && numMeasureColumns === 2 && numChartedAsAttributeColumns === 1) {
        if (numTimeSeriesColumns === 1) {
            chartType = chartTypes.LINE;
        }
        if (numTimeSeriesColumns === 0) {
            let effectiveCardinality = topCount || attrColCardinality1;
            if (effectiveCardinality > VERY_HIGH_CARDINALITY_THRESHOLD) {
                chartType = chartTypes.SCATTER;
            }
            else {
                chartType = BAR_COLUMN_CHART;
            }
        }
    }
    if (!chartType && numMeasureColumns === 2
        && numChartedAsAttributeColumns === 2 && numTimeSeriesColumns === 0) {
        let effectiveCardinality = topCount || attrColCardinality1 * attrColCardinality2;
        if (effectiveCardinality <= VERY_HIGH_CARDINALITY_THRESHOLD) {
            chartType = BAR_COLUMN_CHART;
        }
        else {
            chartType = chartTypes.SCATTER;
        }
    }
    if (!chartType && numMeasureColumns === 3 && numChartedAsAttributeColumns === 0) {
        if (numTimeSeriesColumns === 1) {
            chartType = chartTypes.LINE;
        }
    }
    if (!chartType && numMeasureColumns === 3 && numChartedAsAttributeColumns === 1) {
        if (numTimeSeriesColumns === 0) {
            let effectiveCardinality = topCount || attrColCardinality1;
            if (effectiveCardinality > BUBBLE_CHART_SINGLE_YAXIS_MIN_CARDINALITY_THRESHOLD) {
                chartType = chartTypes.BUBBLE;
            }
            else {
                chartType = BAR_COLUMN_CHART;
            }
        }
        if (numTimeSeriesColumns === 1) {
            chartType = chartTypes.LINE;
        }
    }
    if (!chartType && numMeasureColumns === 3 && numChartedAsAttributeColumns === 2) {
        chartType = chartTypes.BUBBLE;
    }
    if (!chartType && numMeasureColumns === 4
        && numChartedAsAttributeColumns === 0 && numTimeSeriesColumns === 1) {
        chartType = chartTypes.LINE;
    }
    if (!chartType && numMeasureColumns === 4 && numChartedAsAttributeColumns === 1) {
        if (attrColCardinality1 > BUBBLE_CHART_SINGLE_YAXIS_MIN_CARDINALITY_THRESHOLD) {
            chartType = chartTypes.BUBBLE;
        }
        else {
            chartType = BAR_COLUMN_CHART;
        }
    }
    return {
        axisConfig: bestChartAxisConfigMap[chartType] || {
            xAxisColumns: [],
            yAxisColumns: [],
            legendColumns: [],
            radialColumn: null
        },
        chartType: chartType
    };
};

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Ashish Shubham (ashish.shubham@thoughtspot.com)
 *
 * @fileoverview Axis config management in the presence
 * of mustVisualize columns
 */
let logger$1 = logger_3('must-visualize-columns-axis');
function checkIfReplacementAndReturnConfig(chartModel) {
    let previousConfig = getConfig(chartModel.getId());
    if (!previousConfig) {
        persistChartTypeAndAxisConfig(chartModel);
        previousConfig = getConfig(chartModel.getId());
    }
    let previousVisualizedColumnIds = Object.keys(previousConfig.visualizedColumnIdsAndAxis);
    let newMustVisualizeColumnIds = chartModel.getMustVisualizeColumns()
        .map(c => c.getId());
    let newColumns = _.difference(newMustVisualizeColumnIds, previousVisualizedColumnIds);
    // If there are more than one oldColumns its not a single column replacement, we just replace
    // the first column in that case.
    let oldColumn = _.difference(previousVisualizedColumnIds, newMustVisualizeColumnIds)[0];
    if (oldColumn && newColumns.length) {
        let oldColumnAxis = previousConfig.visualizedColumnIdsAndAxis[oldColumn];
        let oldColIdx = previousConfig[oldColumnAxis].findIndex(oldColumn);
        previousConfig[oldColumnAxis][oldColIdx] = newColumns.shift();
    }
    let allColumnsMap = chartModel.getColumnsMap();
    let axisConfig = generateMatchingConfig(previousConfig, allColumnsMap);
    let chartType = previousConfig.chartType;
    return {
        axisConfig: axisConfig,
        chartType: chartType,
        remainingMustVisualizeColumns: newColumns
    };
}
function validatedConfigOrNull(config) {
    if (validateAxisConfig(config.chartType, config.axisConfig)) {
        return config;
    }
    else {
        logger$1.warn('Axis config created with Must visualize columns was not valid');
        return null;
    }
}
function getAxisConfigWithMustVisualizeColumns(chartModel) {
    if (!chartModel.getMustVisualizeColumns().length) {
        return null;
    }
    let axisConfigAndChartType = checkIfReplacementAndReturnConfig(chartModel);
    if (!axisConfigAndChartType.remainingMustVisualizeColumns.length) {
        return validatedConfigOrNull(axisConfigAndChartType);
    }
    let remainingMustVisualizeCols = axisConfigAndChartType.remainingMustVisualizeColumns
        .map(c => chartModel.getColumn(c));
    let axisConfig = axisConfigAndChartType.axisConfig;
    let chartType = axisConfigAndChartType.chartType;
    remainingMustVisualizeCols.forEach(column => {
        if (column.isAttribute()) {
            axisConfigAndChartType = addAttributeColumn(chartModel, axisConfigAndChartType, column);
        }
        else if (column.isMeasure()) {
            axisConfigAndChartType = addMeasureColumn(chartModel, axisConfigAndChartType, column);
        }
    });
    return validatedConfigOrNull(axisConfigAndChartType);
}
function addAttributeColumn(chartModel, axisConfigAndChartType, column) {
    let { axisConfig, chartType } = axisConfigAndChartType;
    // If there are no legend Columns, we try to convert this chart to a stacked
    // version if possible.
    if (!axisConfig.legendColumns.length && stackedVersionForChartType[chartType]) {
        chartType = stackedVersionForChartType[chartType];
    }
    addAttributeColumnToChart(chartModel, axisConfig, chartType, column);
    return {
        axisConfig,
        chartType
    };
}
function addMeasureColumn(chartModel, axisConfigAndChartType, column) {
    let { axisConfig, chartType } = axisConfigAndChartType;
    let numYAxisColumns = axisConfig.yAxisColumns.length;
    // Try adding a measure column to the chart.
    let isColumnAdded = tryAddingMeasureColumnToChart(chartModel, axisConfig, chartType, column);
    // If the addition of measure columns was not possible to due to chartType
    // constraints. We convert this into a LINE_STACKED_COLUMN.
    if (!isColumnAdded) {
        chartType = chartTypes.LINE_STACKED_COLUMN;
    }
    tryAddingMeasureColumnToChart(chartModel, axisConfig, chartType, column);
    return {
        axisConfig,
        chartType
    };
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2013
 * Author: Vibhor Nanavati (vibhor@thoughtspot.com)
 *
 * @fileoverview Model for encapsulating chart details.
 */
var ChartModel_1;
// TODO(chab) unit test will fail if we use import
// TODO(chab) see above
// TODO(chab) see above
const unitToFormatMap = {
    millisecond: [
        dateUtil_2.DATETIME_24_SHORT_WITH_MILLIS,
        dateUtil_2.DATETIME_24_SHORT_WITH_MILLIS_WITHOUT_YEAR
    ],
    second: [
        dateUtil_2.DATETIME_SHORT_WITH_SECONDS,
        dateUtil_2.DATETIME_SHORT_WITH_SECONDS_WITHOUT_YEAR
    ],
    minute: [
        dateUtil_2.DATETIME_24_SHORT,
        dateUtil_2.DATETIME_24_SHORT_WITHOUT_YEAR
    ],
    hour: [
        dateUtil_2.DATE_SHORT_WITH_HOUR_24,
        dateUtil_2.DATE_SHORT_WITH_HOUR_24_WITHOUT_YEAR
    ],
    day: [
        dateUtil_2.DATE_SHORT_2_DIGIT_YEAR,
        dateUtil_2.DAY_WITH_MONTH_NUM
    ],
    week: [
        dateUtil_2.DATE_SHORT,
        dateUtil_2.DAY_WITH_MONTH_NUM
    ],
    month: [
        dateUtil_2.MONTH_WITH_2_DIGIT_YEAR,
        'MMM'
    ],
    quarter: [
        dateUtil_2.QUARTER_WITH_2_DIGIT_YEAR,
        dateUtil_2.QUARTER
    ],
    year: [
        'yyyy',
        'yyyy'
    ]
};
let ChartModel = ChartModel_1 = class ChartModel extends VisualizationModel {
    constructor(params) {
        super(params);
        this.params = params;
        this._logger = logger_3('chart-model');
        this._axisConfigDeferred = false;
        this.getFormattingForColumn = (colId) => {
            return _.get(this.getColumnProperties(), `${colId}.${CLIENT_STATE_KEYS.format}`, undefined);
        };
        this.getFormattingForAxis = (axisId) => {
            let axisProperties = this.getAxisProperties();
            return _.get(axisProperties, `${axisId}.${CLIENT_STATE_KEYS.format}`, undefined);
        };
        this.allowChartTypeChangeOnDataLoad = false;
        this._allColumnsMap = {};
        let allColumns = params.allColumns || [];
        allColumns.forEach((column) => {
            if (!!column) {
                this._allColumnsMap[column.getGuid()] = column;
            }
        });
        this._init();
        let data = params.vizData;
        if (!!data) {
            this.updateData(data);
        }
        if (this.getSchemaVersion() < ChartModel_1.EFFECTIVE_ID_DEFINITION_SCHEMA_CHANGE_VERSION) {
            if (this.getYAxisColumns().length > 1) {
                this.clearVisibleSeriesIds();
            }
        }
        this.upgradeClientState();
    }
    static getLabelForNumericColumn(value, column, allColumnValuesOnAxis, formattingOverrides) {
        let isDouble = column.isDoubleColumn(), nDecimal, noShorten = false;
        if (isDouble) {
            if (allColumnValuesOnAxis && allColumnValuesOnAxis.length > 1) {
                // here we don't use the precision of column but compute
                // it for the values Highcharts has decided to put on the labels.
                nDecimal = 2;
                if (column.isEffectivelyPercent()) {
                    nDecimal = Math.max(0, nDecimal - 2);
                }
            }
            else {
                nDecimal = blinkConstants_1.decimalPrecision.MIN;
            }
            noShorten = nDecimal > 0;
        }
        return column.getDataFormatter()(value, Object.assign({
            noShorten: noShorten,
            isDouble: isDouble,
            nDecimal: nDecimal
        }, formattingOverrides));
    }
    static areComparableRanges(min1, max1, min2, max2) {
        let mid1 = (min1 + max1) / 2, mid2 = (min2 + max2) / 2, range1 = Math.abs(max1 - min1), range2 = Math.abs(max2 - min2);
        // Note(sunny): this is a rather arbitrary measure of "comparable" ranges.
        // will need improvement
        return Math.abs(mid1 - mid2) <= Math.min(range1, range2) * 2;
    }
    static isPrimarySortOnXAxisColumns(xAxisColumns, yAxisColumns) {
        let maxXAxisColSortIndex = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < xAxisColumns.length; i++) {
            let xAxisColumn = xAxisColumns[i];
            if (!xAxisColumn.isSorted()) {
                // all x-axis columns must be sorted
                return false;
            }
            maxXAxisColSortIndex = Math.max(maxXAxisColSortIndex, xAxisColumn.getSortIndex());
        }
        // none of the y-axis columns should be sorted with a sort index
        // lower than any x-axis column
        return !yAxisColumns.some(function (yAxisColumn) {
            return yAxisColumn.isSorted() && yAxisColumn.getSortIndex() < maxXAxisColSortIndex;
        });
    }
    _getYAxisRowValuesAtCol(colIdx) {
        return this._dataModel.yValueToRawValues[colIdx];
    }
    isMissingAxisConfigurationDetail() {
        return this._axisConfigDeferred;
    }
    setIsMissingAxisConfigurationDetail(value) {
        this._axisConfigDeferred = value;
    }
    getQueryDefinitions() {
        return this._queryDefinitions;
    }
    setQueryDefinitions(queryDefinitions) {
        this._queryDefinitions = queryDefinitions;
    }
    getChartType() {
        return this.chartType;
    }
    getValidChartTypes() {
        return Object.keys(this._bestAxisColumnConfigForChartType);
    }
    hasVerticalLegend() {
        return this.getChartType() === chartTypes.SANKEY;
    }
    hasNativeLegend() {
        return hasNativeLegend(this.chartType);
    }
    upgradeClientState() {
        // TODO(Lavish): Add a check to compare current version and upgrade
        // conditionally.
        let clientState = upgradeClientStateToV2(this);
        _.forIn(clientState, (value, key) => {
            this.setUserData(key, value);
        });
        this.originalClientState = _.cloneDeep(clientState);
        delete this.originalClientState.version;
    }
    setChartType(chartType) {
        if (this.getChartType() === chartType) {
            return false;
        }
        let isCurrentChartGeo = isGeoChartType(this.chartType);
        let isNewChartGeo = isGeoChartType(chartType);
        let areChartCategoriesDifferent = isCurrentChartGeo !== isNewChartGeo;
        let isCurrentChartRainbow = !!this.chartType &&
            configOptions(this.chartType, void 0)
                .useRainbowColors;
        let isNewChartRainbow = configOptions(chartType, void 0).useRainbowColors;
        let isColorStrategyDifferent = isCurrentChartRainbow !== isNewChartRainbow;
        let isCurrentChartAlpha = !!this.chartType &&
            configOptions(this.chartType, void 0)
                .useAlphaColors;
        let isNewChartAlpha = configOptions(chartType, void 0).useAlphaColors;
        let isAlphaUseDifferent = isCurrentChartAlpha !== isNewChartAlpha;
        if (areChartCategoriesDifferent ||
            isColorStrategyDifferent ||
            isAlphaUseDifferent) {
            this.clearSystemDecidedColors();
        }
        let axisConfig = {
            xAxisColumns: this.getXAxisColumns(),
            yAxisColumns: this.getYAxisColumns(),
            legendColumns: this.getLegendColumns(),
            radialColumn: this.getRadialColumn()
        };
        let isChartTypeSupportedOnCurrentConfig = validateAxisConfig(chartType, axisConfig);
        if (isChartTypeSupportedOnCurrentConfig) {
            this.chartType = chartType;
            this.getJson().chartType = chartType;
            persistChartTypeAndAxisConfig(this);
            // SCAL-8917 : There are changes made to the series object like chart type etc
            // which causes issues in the case where a legend is hidden and re displayed.
            if (!this.hasNoData()) {
                this._dataModel = getDataModel(this);
            }
            this._unsupportedDataError = getChartDataValidationError(this);
            return false;
        }
        else if (!!this._bestAxisColumnConfigForChartType[chartType]) {
            this.setIsConfigurationLocked(false);
            let bestAxisConfig = this._bestAxisColumnConfigForChartType[chartType];
            this.chartType = chartType;
            this.getJson().chartType = chartType;
            let newChartAxisConfig = new ChartAxisConfig(bestAxisConfig.xAxisColumns, bestAxisConfig.yAxisColumns, bestAxisConfig.legendColumns, bestAxisConfig.radialColumn);
            this.updateAxisConfig(newChartAxisConfig);
            setBackendConfiguration(this, newChartAxisConfig);
            this.clearData();
            this.getContainingAnswerModel().getCurrentAnswerSheet().clearDataForViz(this.getId());
            persistChartTypeAndAxisConfig(this);
            this.setAxisProperties(this.generateAxisPropertiesFromAxisConfig());
            return true;
        }
        else if (isChartTypeSupportedOnCurrentConfig) {
            // In case where the user views the attribute by attribute, there are cases chart types
            // that dont suggest any best config as they are not suited to show that chart based on
            // metadata.
            // But the user here has capability to still select the chart in cases where they are
            // certain the data does not have issues like more than 1 y-value for x.
            // eg Query : "username age".
            this.chartType = chartType;
            this.getJson().chartType = chartType;
            persistChartTypeAndAxisConfig(this);
            // SCAL-8917 : There are changes made to the series object like chart type etc
            // which causes issues in the case where a legend is hidden and re displayed.
            if (!this.hasNoData()) {
                this._dataModel = getDataModel(this);
            }
            this._unsupportedDataError = getChartDataValidationError(this);
        }
        else {
            this._logger
                .error('tried to set chart type that is not possible with the current answer');
        }
    }
    hasMetrics() {
        return _.some(Object.keys(this._allColumnsMap), k => this._allColumnsMap[k].getMetricsDefinition() !== null);
    }
    updateAxisConfigAndSetBackendConfig(chartAxisConfig) {
        this.updateAxisConfig(chartAxisConfig);
        setBackendConfiguration(this, chartAxisConfig);
        persistChartTypeAndAxisConfig(this);
    }
    defaultConfigExistsForAnswer() {
        return !!this.chartType;
    }
    hasNoData() {
        return this._hasNoData;
    }
    getEffectiveIdToColumnMap() {
        return this._columnEffectiveIdToColumn;
    }
    getDataArray() {
        return this._dataArray;
    }
    updateData(newVizData) {
        super.updateData.call(this, (newVizData && newVizData[0]) || null);
        this._hasNoData = false;
        if (!newVizData || !Array.isArray(newVizData)) {
            this._hasNoData = true;
            return;
        }
        newVizData.forEach((dataset) => {
            if (!dataset.data) {
                this._hasError = true;
                this._hasNoData = true;
            }
            if (dataset.data && !dataset.data.length) {
                this._hasNoData = true;
            }
        });
        if (this._hasError || this._hasNoData) {
            return;
        }
        this._dataArray = newVizData.map((dataJson) => {
            return new QueryData(dataJson);
        });
        // TODO(Jasmeet): Try to get rid of reparsing in case of data update.
        this.parseDefinition(this);
        persistChartTypeAndAxisConfig(this);
        this._dataModel = getDataModel(this);
        // Metadata for data should be computed after data is processed.
        this._computedMetaInformation = computeMetaDataInformation(this);
        this._bestAxisColumnConfigForChartType = computeChartTypesToBestAxisConfigMap(this);
        let unsupportedDataError = getChartDataValidationError(this);
        if (!this.allowChartTypeChangeOnDataLoad) {
            this._unsupportedDataError = unsupportedDataError;
        }
        else if (!!unsupportedDataError) {
            let candidateChartType = this.getChartTypeWithNoDataErrors();
            if (!!candidateChartType) {
                this.chartType = candidateChartType;
                this.getJson().chartType = candidateChartType;
            }
            else {
                this._unsupportedDataError = unsupportedDataError;
            }
        }
        else {
            this._unsupportedDataError = unsupportedDataError;
        }
        // check if we can bypass that check and just assign
        if (this.getDataModel() && this.getDataModel().hasNoData) {
            this._hasNoData = true;
        }
    }
    getComparableMeasureColumns() {
        let measureColumns = this.getMeasureColumns();
        if (measureColumns.length <= 1) {
            return null;
        }
        let self = this, allPairs = getAllCombinationsOfSize(measureColumns, 2);
        return allPairs.find(function (pair) {
            let col1 = pair[0], col2 = pair[1];
            return self._measureColumnsHaveComparableRange(col1, col2);
        }) || null;
    }
    isXAxisMeasure() {
        return this._xAxisColumns.length === 1 && (this._xAxisColumns[0].isEffectivelyNumeric());
    }
    isYAxisMeasure() {
        return this._yAxisColumns.every(function (column) {
            return column.isEffectivelyNumeric();
        });
    }
    isSomeYAxisNumeric() {
        return _.castArray(this.getYAxisColumns())
            .some((column) => column.isEffectivelyNumeric());
    }
    isRadialColumnNumeric() {
        return this.getRadialColumn().isEffectivelyNumeric();
    }
    isYAxisDateOrTime() {
        return this._yAxisColumns.every(function (column) {
            return column.isDateColumn() || column.isTimeColumn();
        });
    }
    _isXAxisDate() {
        return this._xAxisColumns.length === 1 && this._xAxisColumns[0].isDateColumn();
    }
    getLegendCardinality() {
        let chartConfigOptions = configOptions(this.getChartType(), void 0);
        let displayYValuesWithLegendSeries = chartConfigOptions.displayYValuesWithLegendSeries;
        let yAxisColumns = this.getYAxisColumns();
        let uniqueLegendValues = _.get(this._dataModel, 'uniqueLegendValues') || [];
        if (yAxisColumns.length > 1) {
            if (displayYValuesWithLegendSeries) {
                let legendSeriesCount = uniqueLegendValues.length;
                return legendSeriesCount + yAxisColumns.length - 1;
            }
            else {
                return yAxisColumns.length;
            }
        }
        return uniqueLegendValues.length;
    }
    getXAxisCardinality() {
        return this._dataModel && this._dataModel.xValueToRawValues ?
            this._dataModel.xValueToRawValues.length
            : 0;
    }
    hasError() {
        return this._hasError;
    }
    getUnsupportedDataError() {
        return this._unsupportedDataError;
    }
    doesNotSupportData() {
        return !!this._unsupportedDataError;
    }
    /**
     * Returns true if there is any possible combination of the columns across the axes
     * which supports the chart type
     * __type__
     * @param type {chartTypeSpecificationService.chartTypes}
     * @returns {*|boolean}
     */
    isChartTypeSupported(type) {
        let axisConfig = {
            xAxisColumns: this.getXAxisColumns(),
            yAxisColumns: this.getYAxisColumns(),
            legendColumns: this.getLegendColumns(),
            radialColumn: this.getRadialColumn()
        };
        // In case where the user views the attribute by attribute, there are cases chart types
        // that dont suggest any best config as they are not suited to show that chart based on
        // metadata.
        // But the user here has capability to still select the chart in cases where they are
        // certain the data does not have issues like more than 1 y-value for x.
        // eg Query : "username age".
        return _.has(this._bestAxisColumnConfigForChartType, type)
            || validateAxisConfig(type, axisConfig);
    }
    yAxisColumnHasSorting() {
        return this.getYAxisColumns().some(function (column) {
            return column.isUserSorted();
        });
    }
    xAxisColumnHasSorting() {
        return this.getXAxisColumns().some(function (column) {
            return column.isUserSorted();
        });
    }
    getYAxisColumn(distinctNameIdentifier) {
        return this._yAxisColumns[this.distinctYAxisColumnNames.indexOf(distinctNameIdentifier)];
    }
    getYAxisColumnById(outputGuid) {
        return this._yAxisColumns.find((column) => {
            return column.getId() === outputGuid;
        });
    }
    // NOTE: The semantics of this function are:
    // Whether the column matching the guid would be grouped on legend columns or not.
    isYColumnGroupedByLegendColumns(columnId) {
        let yAxisColumns = this.getYAxisColumns();
        return yAxisColumns.length > 0 ? yAxisColumns[0].getId() === columnId : true;
    }
    getColumns() {
        return _.values(this._allColumnsMap);
    }
    getColumnsMap() {
        return this._allColumnsMap;
    }
    getColumn(columnGuid) {
        return this._allColumnsMap[columnGuid];
    }
    getVizColumns() {
        let allColumns = this.getColumns();
        if (!!allColumns.length) {
            return allColumns;
        }
        return this.getVisualizedColumns() || [];
    }
    getVisualizedColumns() {
        let allIncludedColumns = _.flatten([this._xAxisColumns,
            this._yAxisColumns,
            this._legendColumns,
            this._columnsInChartDataNotOnAnyAxis]);
        if (this._radialColumn) {
            allIncludedColumns.push(this._radialColumn);
        }
        return allIncludedColumns;
    }
    getMustVisualizeColumns() {
        return this.getColumns()
            .filter(c => c.isMustVisualize);
    }
    getNotVisualizedColumns() {
        return _.difference(this.getColumns(), this.getVisualizedColumns());
    }
    setColumnsInChartDataNotOnAnyAxis(columns) {
        this._columnsInChartDataNotOnAnyAxis = columns;
    }
    getXAxisColumns() {
        return this._xAxisColumns;
    }
    setXAxisColumns(columns) {
        this._xAxisColumns = columns;
    }
    getYAxisColumns() {
        return this._yAxisColumns;
    }
    setYAxisColumns(columns) {
        this._yAxisColumns = columns;
    }
    getYAxisColumnsForSheet(queryIndex = 0) {
        return this._yAxisColumns.filter(column => column.getQueryIndex() === queryIndex);
    }
    getLegendColumns() {
        return this._legendColumns;
    }
    setLegendColumns(columns) {
        this._legendColumns = columns;
    }
    getRadialColumn() {
        return this._radialColumn;
    }
    setRadialColumn(column) {
        this._radialColumn = column;
    }
    getAxisConfig() {
        return new ChartAxisConfig(this._xAxisColumns, this._yAxisColumns, this._legendColumns, this._radialColumn);
    }
    getCategoryColumnNotOnAxis() {
        // In the current model there is a possibility that there is not column
        // put on category in backend config.
        // In that case any unused attribute will be put into category,
        // this is a minimum requirement.
        // When the data comes back from the backend at that point the config
        // should reflect the state where there is a column in chart data
        // which is not on any axis config.
        // This is currently consumed to add tooltip information
        // Eg: Scatter plot with measures on x and y.
        return this._columnsInChartDataNotOnAnyAxis[0];
    }
    getMeasureColumn(idx) {
        let measureColumns = this.getMeasureColumns();
        if (idx < 0 || idx >= measureColumns.length) {
            return null;
        }
        return measureColumns[idx];
    }
    getMeasureColumns() {
        return this.getColumns().filter(function (column) {
            return column.isEffectivelyNumeric() && !column.isGroupingColumn();
        });
    }
    /**
     * List of columns which make a linear non-ending time series.
     * For eg. DAILY, MONTHLY etc.
     *
     * @returns {VisualizationColumnModel[]}
     */
    getTimeSeriesColumns() {
        return this.getColumns().filter(function (column) {
            return column.isDateColumn();
        });
    }
    /**
     * List of all time type columns.
     * This includes timeseries columns and bucket columns like
     * DAY OF WEEK, MONTH OF YEAR etc.
     *
     * @returns {VisualizationColumnModel[]}
     */
    getTimeFamilyColumns() {
        return this.getColumns().filter(function (column) {
            return column.isDateFamilyColumn();
        });
    }
    getAttributeColumns() {
        return this.getColumns().filter(function (column) {
            return column.isEffectivelyNonNumeric() || column.isGroupingColumn();
        });
    }
    isColAttribute(column) {
        return column.isEffectivelyNonNumeric() || column.isGroupingColumn();
    }
    getSortedAttributeColumns() {
        function compareAttributeCardinality(a, b, indexA, indexB) {
            if (!_.isNumber(a) || !_.isNumber(b)) {
                this._logger.error('Cardinality for column not defined');
            }
            if (a < 0 && b >= 0) {
                return 1;
            }
            if (b < 0 && a >= 0) {
                return -1;
            }
            if (a < 0 && b < 0 || a === b) {
                return indexA - indexB;
            }
            return a - b;
        }
        let timeFamilyColumns = this.getTimeFamilyColumns();
        let attributeColumns = _.without(this.getAttributeColumns(), ...timeFamilyColumns);
        let cardinalityData = this.getCardinalityData();
        let effectiveIdToOriginalIndex = mapArrayToHash(attributeColumns, function (column) {
            return column.getId();
        }, function (column, index) {
            return index;
        });
        let sortedAttributeColumns = attributeColumns.sort(function (col1, col2) {
            let colId1 = col1.getId(), colId2 = col2.getId(), colCardinality1 = cardinalityData[colId1], colCardinality2 = cardinalityData[colId2], index1 = effectiveIdToOriginalIndex[colId1], index2 = effectiveIdToOriginalIndex[colId2];
            return compareAttributeCardinality(colCardinality1, colCardinality2, index1, index2);
        });
        return sortedAttributeColumns;
    }
    hasAnySortedMeasure() {
        return this.getColumns().some(column => column.isMeasure() && column.isSorted());
    }
    hasAnySortedMeasureNotOnAxis() {
        return this._columnsInChartDataNotOnAnyAxis
            .some(column => column.isMeasure() && column.isSorted());
    }
    getCardinalityData() {
        return this._computedMetaInformation.colCardinality;
    }
    getSeries() {
        // NOTE: It is possible that the data model is not yet defined.
        return (this._dataModel && this._dataModel.series) || [];
    }
    /**
     * Currently we do not have the UI capability to support Geo Filters.
     * Until we decide to support it, we will return empty arrays.
     * @return {GeoFilterObject[]}
     */
    getGeoObjects() {
        return [];
    }
    getDataModel() {
        return this._dataModel;
    }
    /**
     * Updates the names of all the series visible in chart-ui.
     * The list is persisted if the parent answer is saved.
     * @param seriesNames {Array}
     */
    setVisibleSeriesIds(seriesNames) {
        this.setUserData('visibleSeriesNames', seriesNames);
    }
    /**
     * Clears the persistable list of visible series names
     */
    clearVisibleSeriesIds() {
        this.clearUserData('visibleSeriesNames');
    }
    /**
     * Returns the list of all the series visible in the chart-ui as previously set.
     * In case of saved answer this might be something that was set in another session.
     * null is returned if no previously set list of names was found
     * (e.g. when a fresh answer is being loaded)
     * @returns {Array}
     */
    getVisibleSeriesIds() {
        return this.getUserData('visibleSeriesNames');
    }
    /**
     * Returns custom set colors on the series in a chart. this Tist is persisted.
     * @returns {Object}
     */
    getSeriesColorsMap() {
        return _.assign({}, this.getUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_SERIES_COLORS), this.getUserData(jsonConstants_1.chartClientStateKeys.SERIES_COLORS));
    }
    getGridLinesConfig() {
        const chartConfigOptions = configOptions(this.chartType, this);
        const defaultGridLinesConfig = _.get(chartConfigOptions, 'allowedConfigurations.gridLineConfig', {});
        return _.assign(defaultGridLinesConfig, this.getUserData('gridLineConfig'));
    }
    setGridLinesConfig(gridLineConfig) {
        let lastConfig = this.getGridLinesConfig();
        _.assign(lastConfig, gridLineConfig);
        this.setUserData('gridLineConfig', lastConfig);
    }
    /**
     * Sets the color for a seriesId
     * @param seriesId
     * @param color
     */
    setSeriesColor(seriesId, color) {
        let seriesColors = this.getUserData(jsonConstants_1.chartClientStateKeys.SERIES_COLORS) || {};
        seriesColors[seriesId] = color;
        this.setUserData(jsonConstants_1.chartClientStateKeys.SERIES_COLORS, seriesColors);
        let serie = this.getSerie(seriesId);
        if (serie) {
            serie.color = color;
        }
    }
    setSystemSeriesColor(seriesId, color) {
        let systemSeriesColors = this.getUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_SERIES_COLORS) || {};
        systemSeriesColors[seriesId] = color;
        this.setUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_SERIES_COLORS, systemSeriesColors);
    }
    getLongestSerieName() {
        return this._dataModel._longestSerieName;
    }
    getMultiColorSeriesColors() {
        return _.assign({}, this.getUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_MULTI_COLOR_SERIES_COLORS), this.getUserData(jsonConstants_1.chartClientStateKeys.MULTI_COLOR_SERIES_COLORS));
    }
    clearMultiColorSeriesColors() {
        this.setUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_MULTI_COLOR_SERIES_COLORS, {});
        this.setUserData(jsonConstants_1.chartClientStateKeys.MULTI_COLOR_SERIES_COLORS, {});
    }
    clearSeriesColors() {
        this.setUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_SERIES_COLORS, {});
        this.setUserData(jsonConstants_1.chartClientStateKeys.SERIES_COLORS, {});
    }
    setMultiColorSeriesColors(seriesId, xAxisColumnHash, colors) {
        let multiColorSeriesColors = this.getMultiColorSeriesColors();
        if (!multiColorSeriesColors[seriesId]) {
            multiColorSeriesColors[seriesId] = {};
        }
        multiColorSeriesColors[seriesId][xAxisColumnHash] = colors;
        this.setUserData(jsonConstants_1.chartClientStateKeys.MULTI_COLOR_SERIES_COLORS, multiColorSeriesColors);
    }
    setSystemMultiColorSeriesColors(seriesId, xAxisColumnHash, colors) {
        let systemMultiColorSeriesColors = this.getUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_MULTI_COLOR_SERIES_COLORS) || {};
        if (!systemMultiColorSeriesColors[seriesId]) {
            systemMultiColorSeriesColors[seriesId] = {};
        }
        systemMultiColorSeriesColors[seriesId][xAxisColumnHash] = colors;
        this.setUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_MULTI_COLOR_SERIES_COLORS, systemMultiColorSeriesColors);
    }
    clearSystemDecidedColors() {
        this.clearUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_MULTI_COLOR_SERIES_COLORS);
        this.clearUserData(jsonConstants_1.chartClientStateKeys.SYSTEM_SERIES_COLORS);
    }
    /**
     * sets whether the y-axes of the chart (if more than one) are to share their scale
     * @param yAxisShared {boolean}
     */
    setIsYAxisShared(yAxisShared) {
        this.setUserData('yAxisShared', yAxisShared);
        let multiYAxis = this.getYAxisColumns().length > 1;
        if (multiYAxis) {
            this.getSeries().forEach(function (series, index) {
                series.yAxis = yAxisShared ? 0 : index;
            });
        }
    }
    /**
     * Returns whether the y-axes of the chart (if more than one) are to share their scale
     * @returns {boolean}
     */
    isYAxisShared() {
        return this.getUserData('yAxisShared');
    }
    /**
     * Gets the number of YAxis for the chart
     */
    getNumberOfYAxes() {
        return (this.isYAxisShared()) ? 1 : this.getYAxisColumns().length;
    }
    /**
     * Sets highcharts axes extremes/zoom state
     * @param xAxisExtremes {Array} each item of array is a map with keys [min, max]
     * @param yAxisExtremes {Array} each item of array is a map with keys [min, max]
     */
    setAxisExtremes(xAxisExtremes, yAxisExtremes) {
        this.setUserData('axisExtremes', {
            x: xAxisExtremes,
            y: yAxisExtremes
        });
    }
    setMapViewport(mapView) {
        this.setUserData('mapViewport', mapView);
    }
    clearMapViewport() {
        this.clearUserData('mapViewport');
    }
    getMapViewport() {
        return this.getUserData('mapViewport');
    }
    clearAxisExtremes() {
        this.clearUserData('axisExtremes');
    }
    _getAxisExtremes(axis) {
        let extremes = this.getUserData('axisExtremes');
        if (!extremes) {
            return null;
        }
        return extremes[axis];
    }
    /**
     * Returns the saved x-axes (note plural) extremes/zoom state
     * @returns {Array}
     */
    getXAxisExtremes() {
        return this._getAxisExtremes('x');
    }
    /**
     * Returns the saved y-axes (note plural) extremes/zoom state
     * @returns {*}
     */
    getYAxisExtremes() {
        return this._getAxisExtremes('y');
    }
    /**
     * Setter/Getter for Chart Zoomed boolean.
     * @param isZoomed
     * @returns {null}
     */
    isZoomedIn(isZoomed) {
        if (arguments.length > 0) {
            this.setUserData('isZoomed', !!isZoomed);
            return isZoomed;
        }
        else {
            return this.getUserData('isZoomed') || null;
        }
    }
    isRoundedNumbersEnabled() {
        return this.isRoundedNumbersEnabledSetByUser() ?
            this.getUserData('roundedNumbers') : true;
    }
    isRoundedNumbersEnabledSetByUser() {
        return !_.isUndefined(this.getUserData('roundedNumbers'));
    }
    setRoundedNumbersEnabled(enabled) {
        this.setUserData('roundedNumbers', !!enabled);
    }
    canShowRegressionLine() {
        return configOptions(this.chartType, void 0)
            .allowedConfigurations
            .regressionLine;
    }
    toggleShowLinearRegressionLine() {
        this.setShowRegressionLine(!this.getShowRegressionLine());
    }
    toggleResponsiveLayout() {
        this.setUserData(jsonConstants_1.RESPONSIVE_LAYOUT_DISABLED, !this.getUserData(jsonConstants_1.RESPONSIVE_LAYOUT_DISABLED));
    }
    isResponsiveLayoutEnabled() {
        return !this.getUserData(jsonConstants_1.RESPONSIVE_LAYOUT_DISABLED);
    }
    toggleMarkersEnabled() {
        this.setUserData(jsonConstants_1.MARKERS_ENABLED, !this.getUserData(jsonConstants_1.MARKERS_ENABLED));
    }
    markersEnabled() {
        return !!this.getUserData(jsonConstants_1.MARKERS_ENABLED);
    }
    get showPivotSummaries() {
        // NB: Inverted value since we want to show summaries by default
        return !this.getUserData(jsonConstants_1.pivotConfig.HIDE_PIVOT_SUMMARIES);
    }
    set showPivotSummaries(val) {
        if (!val) {
            this.setUserData(jsonConstants_1.pivotConfig.HIDE_PIVOT_SUMMARIES, true);
        }
        else {
            this.clearUserData(jsonConstants_1.pivotConfig.HIDE_PIVOT_SUMMARIES);
        }
    }
    get useTreeLayout() {
        // NB: Inverted value since we want to use tree layout as default
        return !this.getUserData(jsonConstants_1.pivotConfig.USE_FLAT_LAYOUT);
    }
    set useTreeLayout(val) {
        if (!val) {
            this.setUserData(jsonConstants_1.pivotConfig.USE_FLAT_LAYOUT, true);
        }
        else {
            this.clearUserData(jsonConstants_1.pivotConfig.USE_FLAT_LAYOUT);
        }
    }
    getPivotSummaryMode() {
        return this.getUserData(jsonConstants_1.pivotConfig.SUMMARY_MODE);
    }
    setPivotSummaryMode(val) {
        this.setUserData(jsonConstants_1.pivotConfig.SUMMARY_MODE, val);
    }
    columnsMakeTimeSeries(xAxisColumns, yAxisColumns) {
        return xAxisColumns.length === 1 && xAxisColumns[0].isDateColumn()
            && xAxisColumns[0].isCalendarGregorianOrFiscal()
            && ChartModel_1.isPrimarySortOnXAxisColumns(xAxisColumns, yAxisColumns);
    }
    /**
     * Returns true, if the chart has date column as x-axis.
     *
     * @return {boolean}
     */
    isTimeSeries() {
        return this.columnsMakeTimeSeries(this._xAxisColumns, this._yAxisColumns);
    }
    isXAxisOrdinalBased() {
        let chartType = this.getChartType();
        if (useOrdinalXAxis(chartType)) {
            return true;
        }
        let useMeasureAsOrdinal = useMeasureOnXAxisAsOrdinal(chartType);
        return !((this.isXAxisMeasure() && !useMeasureAsOrdinal) || this.isTimeSeries());
    }
    isYAxisSelectorDisabled() {
        return this.chartType === chartTypes.GRID_TABLE;
    }
    isYAxisOrdinalBased() {
        let chartType = this.getChartType();
        let useMeasureAsOrdinal = useMeasureOnYAxisAsOrdinal(chartType);
        return (!this.isYAxisMeasure() && !this.isYAxisDateOrTime()) || useMeasureAsOrdinal;
    }
    /**
     * Returns true if the chart data is primarily sorted on the x-axis column.
     *
     * @return {boolean}
     */
    isPrimarySortOnXAxisColumns() {
        return ChartModel_1.isPrimarySortOnXAxisColumns(this._xAxisColumns, this._yAxisColumns);
    }
    /**
     * Returns a list of values of all x-axis columns for a given index x.
     * Note that unlike legends we can't map between formatted composite value
     * and raw data because the formatted composite value can change over time
     * (even without chart reload), e.g., in a time series granularity decreased
     * with the decrease in the width available to the chart.
     * @param x {Number} the index in unique x values' list
     * @returns {Array}
     */
    getRawXAxisValues(x) {
        if (!this.isXAxisOrdinalBased()) {
            return [x];
        }
        let rawValues = this._dataModel.xValueToRawValues[x];
        if (!rawValues) {
            this._logger.warn('no raw values found for formatted x-axis value', x);
        }
        return rawValues.map(function (valueObjects) {
            return valueObjects.value;
        });
    }
    /**
     *  Returns a value for a given index y, and a given column from the y-axis underlying coluns
     *  Currently the mapping of y values is different from the mapping of x values, which
     *  brings a different implementation for this method
     *
     * @param y {Number} the index or value of the unique y values list
     * @param column {ColumnModel} column of the y axis
     * @returns value - Single value for the given axis and column
     */
    getRawYAxisValueForColumn(y, column) {
        // Note that there is no sense in returning the two values of the differents columns
        // of the y axis. These values are not grouped, like in x axis, you just have
        // 2 different y axises. This explains the added column parameter, which is
        // needed to discriminate between the different columns of the y-axis
        // if column is numeric, we already have the good value
        if (column.isEffectivelyNumeric()) {
            return y;
        }
        // if column is not numeric, we must fetch the value
        let rawValue = this._dataModel.yValueToRawValues[column.getDataRowIndex()][y].value;
        if (!rawValue) {
            this._logger.warn('no raw values found for formatted y-axis value', y);
        }
        return rawValue;
    }
    getRawLegendValues(compositeLegendValue) {
        let rawValues = this._dataModel.compositeLegendValueToRawValues[compositeLegendValue];
        if (!rawValues) {
            this._logger.warn('no raw values found for formatted legend value', compositeLegendValue);
        }
        return rawValues;
    }
    getLegendColumnValues() {
        return this._dataModel.uniqueLegendValues || [];
    }
    columnHasInfinityValues(column) {
        return this._dataModel.columnHasInfinityValues[column.getDataRowIndex()];
    }
    columnHasMinusInfinityValues(column) {
        return this._dataModel.columnHasMinusInfinityValues[column.getDataRowIndex()];
    }
    getInfinityPlaceholder(column) {
        return this._dataModel.columnInfinityPlaceholder[column.getDataRowIndex()];
    }
    getNegativeInfinityPlaceholder(column) {
        return this._dataModel.columnNegativeInfinityPlaceholder[column.getDataRowIndex()];
    }
    getContextOptions() {
        return this._contextOptions || {};
    }
    setContextOptions(newOptions) {
        if (!this._contextOptions) {
            this._contextOptions = {};
        }
        $.extend(true, this._contextOptions, newOptions);
    }
    _getXAxisValuesAt(x) {
        return this._dataModel.xValueToRawValues[x];
    }
    _getYAxisValuesAt(colIdx, y) {
        let columnValues = this._getYAxisRowValuesAtCol(colIdx);
        if (columnValues) {
            return columnValues[y];
        }
    }
    _hasXAxisValuesAt(x) {
        return this._dataModel.xValueToRawValues.hasOwnProperty(x);
    }
    hasCaptionValuesForXAxis() {
        let xValueToRawValues = this._dataModel.xValueToRawValues;
        if (xValueToRawValues) {
            return xValueToRawValues.some(ChartModel_1.extractCaptionTitleAndLink);
        }
        return false;
    }
    hasCaptionValuesForYAxis(colIdx) {
        let yValueToRawValues = this._dataModel.yValueToRawValues[colIdx];
        if (yValueToRawValues) {
            return yValueToRawValues.some(ChartModel_1.extractCaptionTitleAndLink);
        }
        return false;
    }
    captionValuesForXAxisAt(x) {
        let valueAtX = this._getXAxisValuesAt(x);
        if (valueAtX) {
            return ChartModel_1.extractCaptionTitleAndLink(valueAtX);
        }
    }
    captionValuesForYAxisAt(colIdx, y) {
        let valueAtY = this._getYAxisValuesAt(colIdx, y);
        if (valueAtY) {
            return ChartModel_1.extractCaptionTitleAndLink(valueAtY);
        }
    }
    getXAxisColumnLabelAt(x) {
        let firstXAxisColumn = this.getXAxisColumns()[0];
        let useMeasureAsOrdinal = useMeasureOnXAxisAsOrdinal(this.getChartType());
        if (this.isXAxisMeasure()) {
            let value = !useMeasureAsOrdinal ? x : this._getXAxisValuesAt(x)[0].value;
            return this.getLabelForNumericColumn(x, firstXAxisColumn.getId(), undefined, { noShorten: !this.isRoundedNumbersEnabled() });
        }
        if (!_.isInteger(x) && !this.isTimeSeries()) {
            return '';
        }
        if (this.isTimeSeries()) {
            let timestampValue, isXAxisOrdinalBased = this.isXAxisOrdinalBased();
            if (!isXAxisOrdinalBased) {
                timestampValue = x;
            }
            else {
                if (!this._hasXAxisValuesAt(x)) {
                    return '';
                }
                timestampValue = this._getXAxisValuesAt(x)[0].value;
            }
            if (flags.getValue(flags.BLINK_FLAGS.enableChartConfigV2.name)) {
                //todo: not reverting it at present might have to add back for SCAL-44771
                //todo: look at this after design changes as part of SCAL-44771
                let format = this.getFormattingForColumn(firstXAxisColumn.getId());
                if (format) {
                    let formattedValue = dateUtil_43(timestampValue, format);
                    return formattedValue;
                }
            }
            return firstXAxisColumn.getDataFormatter()(timestampValue);
        }
        let xValues = this._getXAxisValuesAt(x);
        if (_.isUndefined(xValues)) {
            this._logger.everyN(logger_1.WARN, 10, 'invalid x-axis value', x);
            return '';
        }
        return formatCompositeColumnValue(this, xValues);
    }
    // TODO (Ashish): Move this label naming/handling logic to its own service.
    getXAxisLabelAt(x, allXValuesOnLabels, options) {
        let xAxis = this.getXAxes()[0];
        let firstXAxisColumn = this.getXAxisColumns()[0];
        let useMeasureAsOrdinal = useMeasureOnXAxisAsOrdinal(this.getChartType());
        if (this.isXAxisMeasure()) {
            // for measure x-axis we pass on real x-values to highcharts
            // iff the column is sorted, we use index-in-array approach otherwise.
            // we want to, however, format the real value as number in both the cases
            if (!useMeasureAsOrdinal) {
                return this.getLabelForNumericAxis(x, xAxis.id, allXValuesOnLabels, { noShorten: !this.isRoundedNumbersEnabled() });
            }
            else {
                // highcharts can send an index value that is 1 more than
                // the number of values we have.
                // Note(sunny): this check is redundant after the fix for SCAL-4695
                if (!this._hasXAxisValuesAt(x)) {
                    return '';
                }
                // mapping all labels on the x-axis for each label makes this
                // a quadratic cost call but it is okay because the number of labels
                // on the x-axis is never too high.
                let self = this, realXValues = allXValuesOnLabels && _.compact(allXValuesOnLabels.map(function (index) {
                    if (!self._hasXAxisValuesAt(index)) {
                        return null;
                    }
                    return self._getXAxisValuesAt(index)[0].value;
                }));
                return this.getLabelForNumericAxis(this._getXAxisValuesAt(x)[0].value, xAxis.id, realXValues, { noShorten: !this.isRoundedNumbersEnabled() });
            }
        }
        // on zooming in too much highcharts can try to generate intermediate points
        // for everything but ascending timeseries we are going to look up this value
        // in our array of raw values and don't allow generated intermediate values
        if (!_.isInteger(x) && !this.isTimeSeries()) {
            return '';
        }
        // highcharts doesn't like x-axis in descending order so we can't use raw timestamp values
        // for timeseries (so we use index-in-data-array approach).
        // However we still want to use formatting for descending timeseries
        // so we handle that case specially in the same code branch
        if (this.isTimeSeries()) {
            // NOTE(vibhor): If the data is not primarily sorted on the date column,
            // then we can't really show a bucketed timeseries axis.
            // This is because 2 labels such as "Q2 1992" and "Q1 1993" gives an impression
            // that the data point between the 2 labels fit in that timeframe.
            // However, if the data is sorted on some other key, then this is not necessarily true.
            let timestampValue, isXAxisOrdinalBased = this.isXAxisOrdinalBased();
            if (!isXAxisOrdinalBased) {
                timestampValue = x;
            }
            else {
                if (!this._hasXAxisValuesAt(x)) {
                    return '';
                }
                timestampValue = this._getXAxisValuesAt(x)[0].value;
            }
            if (flags.getValue(flags.BLINK_FLAGS.enableChartConfigV2.name)) {
                let axis = this.getXAxes()[0];
                let format = this.getFormattingForAxis(axis.id);
                if (format) {
                    let formattedValue = dateUtil_43(timestampValue, format);
                    return formattedValue;
                }
            }
            return firstXAxisColumn.getDataFormatter()(timestampValue, options);
        }
        // TODO(vibhor): This function should look for any overlapping labels
        // and use a different format if possible.
        // Today, we simply use formattingConstants.MAX_LABEL_LENGTH to truncate.
        // The biggest date format should be under that limit.
        let xValues = this._getXAxisValuesAt(x);
        if (_.isUndefined(xValues)) {
            this._logger.everyN(logger_1.WARN, 10, 'invalid x-axis value', x);
            return '';
        }
        return formatCompositeAxisValue(this, xValues);
    }
    getYAxisLabelForAttribute(column, y) {
        if (column.isDateColumn() || column.isTimeColumn()) {
            if (this.isYAxisOrdinalBased()) {
                y = this._getYAxisValuesAt(column.getDataRowIndex(), y);
                // highchart can choose to add a tick that is outside the domain of y axis
                // in that case, we have no value for it
                if (!y || !y.value) {
                    return strings.NULL_VALUE_PLACEHOLDER_LABEL;
                }
                y = y.value;
            }
            return dateUtil_40(y, column.getFormatPattern());
        }
        let yValue = this._getYAxisValuesAt(column.getDataRowIndex(), y);
        // We need this check as sometimes highcharts calls formatter with value: -1
        if (!yValue) {
            return;
        }
        if (!yValue.value) {
            return (yValue.value === 0) ? 0 : strings.NULL_VALUE_PLACEHOLDER_LABEL;
        }
        return yValue.value;
    }
    /**
     * @param {Object} params
     * @param {VisualizationColumnModel} params.yAxisColumn
     * @param {number} params.y  the y value to return formatted label for
     * @param {Array.<number>=} params.allYValuesOnLabels all y values that will be shown
     * on the y-axis.
     * When this array is provided extra shortening is done on the label if it can be
     * determined (using allYValuesOnLabels) that the shortening won't cause information loss.
     * @param {Object=} params.formattingOverrides overrides to be passed to numericFormatter.
     * @returns {*}
     */
    getYAxisLabel(params) {
        let yAxisColumn = params.yAxisColumn, y = params.y, allYValuesOnLabels = params.allYValuesOnLabels || [], formattingOverrides = params.formattingOverrides || {};
        return ChartModel_1.getLabelForNumericColumn(y, yAxisColumn, allYValuesOnLabels, formattingOverrides);
    }
    getMaxXValue(xAxisColumn) {
        const queryIndex = xAxisColumn.getQueryIndex();
        const dataRowIndex = xAxisColumn.getDataRowIndex();
        if (!this.isXAxisMeasure() && !this._isXAxisDate()) {
            this._logger.error('max/min of x axis is supported only when x-axis is a measure/date');
            return Number.POSITIVE_INFINITY;
        }
        return _.get(this._dataModel.maxColumnValues, `${queryIndex}.${dataRowIndex}`);
    }
    getMinXValue(xAxisColumn) {
        const queryIndex = xAxisColumn.getQueryIndex();
        const dataRowIndex = xAxisColumn.getDataRowIndex();
        if (!this.isXAxisMeasure() && !this._isXAxisDate()) {
            this._logger.error('max/min of x axis is supported only when x-axis is a measure/date');
            return Number.NEGATIVE_INFINITY;
        }
        return _.get(this._dataModel.minColumnValues, `${queryIndex}.${dataRowIndex}`);
    }
    getMaxYValue(yAxisColumn) {
        const queryIndex = yAxisColumn.getQueryIndex();
        const dataRowIndex = yAxisColumn.getDataRowIndex();
        if (!!this._dataModel.maxColumnValues && dataRowIndex >= 0) {
            let maxValue = _.get(this._dataModel.maxColumnValues, `${queryIndex}.${dataRowIndex}`);
            return isNaN(maxValue) ? Number.POSITIVE_INFINITY : maxValue;
        }
        return Number.POSITIVE_INFINITY;
    }
    getMinYValue(yAxisColumn) {
        const queryIndex = yAxisColumn.getQueryIndex();
        const dataRowIndex = yAxisColumn.getDataRowIndex();
        if (!!this._dataModel.minColumnValues && dataRowIndex >= 0) {
            let minValue = _.get(this._dataModel.minColumnValues, `${queryIndex}.${dataRowIndex}`);
            return isNaN(minValue) ? Number.NEGATIVE_INFINITY : minValue;
        }
        return Number.NEGATIVE_INFINITY;
    }
    getMaxRadialValue() {
        return this.getMaxYValue(this.getRadialColumn());
    }
    getMinRadialValue() {
        return this.getMinYValue(this.getRadialColumn());
    }
    equals(that) {
        if (this === that) {
            return true;
        }
        // Hack(sunny): Models with Json marked as dirty are not equal to any other model
        // This is used to refresh the model/chart locally (e.g. in case of axes change)
        let thisJson = this.getJson();
        if (thisJson._backendConfigChanged) {
            delete thisJson._backendConfigChanged;
            return false;
        }
        let thatJson = that.getJson();
        if (thatJson._backendConfigChanged) {
            delete thatJson._backendConfigChanged;
            return false;
        }
        if (!VisualizationModel.areModelsEqual(this, that)) {
            return false;
        }
        return true;
    }
    // i am unsure of the semantic of this method ( do we consider highchart legend
    // as a legend ? )
    downloadedChartContainsLegend() {
        return this.hasLegend();
    }
    /**
     *
     * Whether this chart display a legend
     *
     * @returns {boolean}
     */
    hasLegend() {
        // TODO(chab) seems that we can simply by using directy getLegendCardinality
        // We can only show a legend control for chart which has either one or more
        // legend columns or multiple y-axes.
        let options = configOptions(this.chartType, this);
        if (options.doNotShowLegend) {
            return false;
        }
        else {
            if (hasPersistentLegend(this.chartType)) {
                return true;
            }
            else {
                return !(this.getLegendCardinality() <= 1);
            }
        }
    }
    getBatchSize() {
        return flags.getValue(flags.BLINK_FLAGS.dataBatchSize.name)
            || super.getBatchSize();
    }
    isDataSetComplete() {
        return this.getDefaultQueryData().length === this.getTotalRowCount()
            && this.getSamplingRatio() === 1;
    }
    isYAxisStackedAsPercent() {
        return !!this.getUserData(jsonConstants_1.IS_STACKED_AS_PERCENT);
    }
    toggleShowYAxisAsPercent() {
        if (this.isYAxisStackedAsPercent()) {
            this.clearUserData(jsonConstants_1.IS_STACKED_AS_PERCENT);
        }
        else {
            this.setUserData(jsonConstants_1.IS_STACKED_AS_PERCENT, true);
        }
    }
    isHeatmapOverlayed() {
        return !!this.getUserData(jsonConstants_1.IS_HEATMAP_OVERLAYED);
    }
    setIsHeatmapOverlayed(isOverlayed = false) {
        this.setUserData(jsonConstants_1.IS_HEATMAP_OVERLAYED, isOverlayed);
    }
    get pivotState() {
        return this.getUserData(jsonConstants_1.pivotConfig.PIVOT_STATE);
    }
    set pivotState(state) {
        this.setUserData(jsonConstants_1.pivotConfig.PIVOT_STATE, state);
    }
    getDefaultQueryData() {
        let dataArray = this.getDataArray();
        let defaultQueryData = dataArray && dataArray[0];
        return defaultQueryData && defaultQueryData.getData();
    }
    getAutoTitle() {
        let yAxisColumns = this.getYAxisColumns();
        let xAxisColumns = this.getXAxisColumns();
        let legendColumns = this.getLegendColumns();
        let radialColumn = this.getRadialColumn();
        let title = yAxisColumns.map((column) => {
            return column.getName();
        }).join(', ');
        if (radialColumn) {
            title += ' ';
            title += strings.AND;
            title += ' ';
            title += radialColumn.getName();
        }
        title += ' ';
        title += strings.BY;
        title += ' ';
        title += xAxisColumns.map((column) => {
            return column.getName();
        }).join(', ');
        if (legendColumns && legendColumns.length) {
            title += ' ';
            title += strings.AND;
            title += ' ';
            title += legendColumns.map((column) => {
                return column.getName();
            }).join(', ');
        }
        return title;
    }
    //region Chart Configuration
    // This section contains function related to changes to chart type and axis config.
    getCurrentAxisConfig() {
        return {
            xAxisColumns: this.getXAxisColumns(),
            yAxisColumns: this.getYAxisColumns(),
            legendColumns: this.getLegendColumns(),
            radialColumn: this.getRadialColumn()
        };
    }
    setAllowChartTypeChangeOnDataLoad(allowChartTypeChangeOnDataLoad) {
        this.allowChartTypeChangeOnDataLoad = allowChartTypeChangeOnDataLoad;
    }
    isHighchartsProvider() {
        return getChartProvider(this.chartType) === chartProviders.HIGHCHART;
    }
    getYSEOPConfig() {
        let yseopConfig = {
            extensionVersion: '2',
            charts: []
        };
        let chartConfig = getYSEOPConfig(this);
        yseopConfig.charts.push(chartConfig);
        return yseopConfig;
    }
    getXAxisColumnsHash() {
        return this.getXAxisColumns()
            .map((col) => {
            return col.getGuid();
        })
            .join(',');
    }
    isAxisConfigSame(chartModel) {
        let currentConfig = this.getAxisConfig();
        let newConfig = chartModel.getAxisConfig();
        return currentConfig.isAxisConfigEqual(newConfig);
    }
    isSerieVisible(serieName) {
        let serie = this.getSerie(serieName);
        return !serie ? false : serie.visible;
    }
    isOnlySelectedSeries(serieName) {
        return this.getSeries()
            .every((s) => s.name === serieName ?
            this.isSerieVisible(s.name) :
            !this.isSerieVisible(s.name));
    }
    getSerie(serieName) {
        return !!this._dataModel._seriesMap ? this._dataModel._seriesMap[serieName] : '';
    }
    updateLegendVisibilityState() {
        let series = this.getSeries();
        let visibleSeriesIds = series
            .filter((serie) => this.isSerieVisible(serie.name))
            .map(serie => serie.blinkSeriesId);
        this.setVisibleSeriesIds(visibleSeriesIds);
    }
    getSeriesColor(serieName) {
        let serie = this.getSerie(serieName);
        return (!serie || !serie.color) ? '' : serie.color;
    }
    //TODO: can set some sort of mapping for attributes to colors to make this smoother
    // further it can be saved system wide, so that it can be re-used let's say at pinboard level
    configureColors(colors, onColorSelect, chartRedraw) {
        const specConfigOptions = configOptions(this.chartType, void 0);
        const colorsConfig = [];
        if (specConfigOptions.allowedConfigurations.useCustomColorSelector) {
            let result = customColorSelectorConfig(this.chartType, this, colors, onColorSelect);
            _.reduce(result, (resultObject, colorDataObject, idx) => {
                let colorSelectOption = {
                    caption: colorDataObject.label,
                    selectedColor: colorDataObject.color,
                    closeCallback: (color) => {
                        colorDataObject.closeCallback(color);
                        onColorSelect(color, idx);
                    }
                };
                if (colorSelectOption.selectedColor) {
                    resultObject.push(colorSelectOption);
                }
                else {
                    this._logger.warn('Color not selected for the attribute ' + idx +
                        'in custom color selector');
                }
                return resultObject;
            }, colorsConfig);
        }
        else if (specConfigOptions.allowedConfigurations.configureColorForXAttrs) {
            _.reduce(this.getDataModel()._xValueToRawValues, (result, rawValue, idx) => {
                let label = this.getXAxisLabelAt(idx, void 0, void 0);
                let colorSelectOption = {
                    caption: label,
                    selectedColor: colors[idx],
                    closeCallback: (color) => {
                        this.setSeriesColor(label, color);
                        onColorSelect(color, idx);
                    }
                };
                if (colorSelectOption.selectedColor) {
                    result.push(colorSelectOption);
                }
                return result;
            }, colorsConfig);
        }
        else {
            _.reduce(this.getLegendLabels(), (result, legendLabel) => {
                let label = legendLabel.label;
                let colorSelectOption = {
                    caption: label,
                    selectedColor: this.getSeriesColor(label),
                    closeCallback: (color) => {
                        let serieId = this.getSerie(label).blinkSeriesId;
                        this.setSeriesColor(serieId, color);
                        chartRedraw();
                    }
                };
                if (colorSelectOption.selectedColor) {
                    result.push(colorSelectOption);
                }
                return result;
            }, colorsConfig);
        }
        return colorsConfig;
    }
    getLegendLabels() {
        return getLegendLabels(this);
    }
    updateAxisConfig(chartAxisConfig) {
        // reset legend if needed
        if (!areArraysSameSet(chartAxisConfig.legendColumns, this.getLegendColumns())) {
            this.clearVisibleSeriesIds();
        }
        let yAxisColumns = this.getYAxisColumns();
        let hasMultiYAxisLegend = !!yAxisColumns ? yAxisColumns.length > 1 : false;
        if (hasMultiYAxisLegend
            && !areArraysSameSet(chartAxisConfig.yAxisColumns, yAxisColumns)) {
            this.clearVisibleSeriesIds();
        }
        if (isGeoChartType(this.chartType)) {
            let xAxisColumns = this.getXAxisColumns();
            if (!areArraysSameSet(chartAxisConfig.xAxisColumns, xAxisColumns)) {
                this.clearMapViewport();
            }
        }
        this._xAxisColumns = chartAxisConfig.xAxisColumns;
        this._yAxisColumns = chartAxisConfig.yAxisColumns;
        this._legendColumns = chartAxisConfig.legendColumns;
        this._radialColumn = chartAxisConfig.radialColumn;
        this.upgradeClientState();
    }
    //Column properties in client state
    setShowDataLabels(enabled, columnId) {
        let columnProperties = this.getColumnProperties() || {};
        if (!columnProperties[columnId]) {
            columnProperties[columnId] = {};
        }
        columnProperties[columnId].dataLabels = enabled;
        this.setColumnProperties(columnProperties);
        // TODO(Jasmeet): Remove when we are done with chart config migration
        if (isStackedChart(this.getChartType())) {
            this.setUserData('detailedLabels', !!enabled);
        }
        else {
            this.setUserData('dataLabels', !!enabled);
        }
    }
    getShowDataLabels(columnId) {
        let columnProperties = this.getColumnProperties();
        return columnProperties
            && columnProperties[columnId]
            && columnProperties[columnId].dataLabels;
    }
    //This is to support backward compatibility with chart config v1
    isDataLabelsEnabledUndefined() {
        return _.isUndefined(this.getShowDataLabels(Object.keys(this.getColumnProperties())[0]));
    }
    getShowStackedLabels() {
        let chartProperties = this.getChartProperties();
        return chartProperties
            && chartProperties.showStackedLabels;
    }
    setShowStackedLabels(enabled) {
        if (enabled) {
            let chartProperties = this.getChartProperties();
            if (!chartProperties) {
                this.setChartProperties({});
            }
            this.getChartProperties().showStackedLabels = true;
        }
        else {
            let chartProperties = this.getChartProperties();
            if (chartProperties) {
                delete chartProperties.showStackedLabels;
            }
        }
        // TODO(Jasmeet): Remove when we are done with chart config migration
        this.setUserData('dataLabels', !!enabled);
    }
    getShowRegressionLine() {
        return !!this.getChartProperties() && !!this.getChartProperties().showLinearRegressionLine;
    }
    setShowRegressionLine(enabled) {
        if (enabled) {
            let chartProperties = this.getChartProperties();
            if (!chartProperties) {
                this.setChartProperties({});
            }
            this.getChartProperties().showLinearRegressionLine = true;
            // TODO(Jasmeet): Remove when are done with chart config migration
            this.setUserData(jsonConstants_1.SHOW_LINEAR_REGRESSION_LINE, true);
        }
        else {
            let chartProperties = this.getChartProperties();
            if (chartProperties) {
                delete chartProperties.showLinearRegressionLine;
            }
            // TODO(Jasmeet): Remove when are done with chart config migration
            this.clearUserData(jsonConstants_1.SHOW_LINEAR_REGRESSION_LINE);
        }
    }
    setFormattingForColumn(format, columnId) {
        let columnProperties = this.getColumnProperties();
        if (!columnProperties[columnId]) {
            columnProperties[columnId] = {};
        }
        columnProperties[columnId][CLIENT_STATE_KEYS.format] = format;
        this.setColumnProperties(columnProperties);
    }
    //Axis properties in client state
    setFormattingForAxis(format, axisId) {
        let axisProperties = this.getAxisProperties();
        if (!axisProperties[axisId]) {
            this._logger.error('To set formatting for axis, the axis must already exist');
        }
        axisProperties[axisId][CLIENT_STATE_KEYS.format] = format;
        this.setAxisProperties(axisProperties);
    }
    getGroupedColumnsForAxis(axisId) {
        return _.get(this.getAxisProperties(), `${axisId}.${CLIENT_STATE_KEYS.linkedColumns}`, []);
    }
    getAxisRange(axisId) {
        return _.get(this.getAxisProperties(), `${axisId}.${CLIENT_STATE_KEYS.yAxisRange}`, undefined);
    }
    setAxisRange(axisId, range) {
        let deleteRange = !range || (_.isUndefined(range.max) && _.isUndefined(range.min));
        let axisProperties = this.getAxisProperties()[axisId];
        if (!axisProperties) {
            this._logger.error('If range is being set axis should already exist');
        }
        if (deleteRange) {
            delete axisProperties.yAxisRange;
        }
        else {
            axisProperties.yAxisRange = range;
        }
        // TODO(Jasmeet): Remove when are done with chart config migration
        this.setUserData('yAxisRange', range);
    }
    groupAxis(fromAxisId, toAxisId) {
        let axisProperties = this.getAxisProperties();
        let fromLinkedColumns = axisProperties[fromAxisId][CLIENT_STATE_KEYS.linkedColumns];
        let toLinkedColumns = axisProperties[toAxisId][CLIENT_STATE_KEYS.linkedColumns];
        let newLinkedColumns = fromLinkedColumns.concat(toLinkedColumns);
        //TODO::Need to figure out what happens to YAxisRange or any other property that gets
        // affected
        delete axisProperties[toAxisId];
        axisProperties[fromAxisId][CLIENT_STATE_KEYS.linkedColumns] = newLinkedColumns;
    }
    ungroupAxis(axisId) {
        const axisProperties = this.getAxisProperties();
        if (!axisProperties[axisId]) {
            this._logger.error('Axis must be present to ungroup it');
        }
        const columnIds = axisProperties[axisId].linkedColumns;
        const axisPropertiesToInherit = _.omit(axisProperties[axisId], [
            CLIENT_STATE_KEYS.name, CLIENT_STATE_KEYS.axisType, CLIENT_STATE_KEYS.linkedColumns
        ]);
        const isOpposite = axisProperties[axisId].isOpposite;
        delete axisProperties[axisId];
        columnIds.forEach((colId) => this.addColumnToNewYAxis(colId, axisPropertiesToInherit));
    }
    getAxes() {
        return _.transform(this.getAxisProperties(), (axesByType, axis, axisId) => {
            axesByType.push({
                id: axisId,
                properties: axis
            });
        }, []);
    }
    getXAxes() {
        return this.getAxes().filter(axis => axis.properties.axisType === AXIS_TYPES.X);
    }
    getYAxes() {
        return this.getAxes().filter(axis => axis.properties.axisType === AXIS_TYPES.Y);
    }
    hasUserMadeConfigChanges() {
        let currentClientState = {};
        let keys = [
            CLIENT_STATE_KEYS.chartProperties,
            CLIENT_STATE_KEYS.columnProperties,
            CLIENT_STATE_KEYS.axisProperties
        ];
        keys.forEach((key) => {
            if (this.getUserData(key)) {
                currentClientState[key] = this.getUserData(key);
            }
        });
        return !_.isEqual(this.originalClientState, currentClientState);
    }
    getLinkedColumnsForColumn(columnId) {
        let axis = this.getYAxes()
            .find(axis => axis.properties.linkedColumns.some(col => col === columnId));
        if (!axis) {
            // column does not belong in any Y axis
            return [];
        }
        return axis.properties.linkedColumns;
    }
    addColumnToNewYAxis(columnId, properties) {
        let axisProperties = this.getAxisProperties();
        axisProperties[jsUtil_1()] = _.assign({
            linkedColumns: [columnId],
            axisType: AXIS_TYPES.Y
        }, properties);
        this.setAxisProperties(axisProperties);
    }
    removeColumnFromYAxis(columnId) {
        let axisProperties = this.getAxisProperties();
        let axisId = this.getAxisForColumn(columnId).id;
        _.remove(axisProperties[axisId].linkedColumns, col => col === columnId);
        if (!axisProperties[axisId].linkedColumns.length)
            delete axisProperties[axisId];
        this.setAxisProperties(axisProperties);
    }
    addColumnToXAxis(columnId) {
        let axisProperties = this.getAxisProperties();
        let axis = this.getXAxes()[0];
        axisProperties[axis.id].linkedColumns = axisProperties[axis.id]
            .linkedColumns
            .concat(columnId);
        this.setAxisProperties(axisProperties);
    }
    removeColumnFromXAxis(columnId) {
        let axisProperties = this.getAxisProperties();
        let axisId = this.getAxisForColumn(columnId).id;
        _.remove(axisProperties[axisId].linkedColumns, col => col === columnId);
        this.setAxisProperties(axisProperties);
    }
    getLabelForNumericAxis(value, axisId, allColumnValuesOnAxis, formattingOverrides) {
        let column = this.getColumn(this.getGroupedColumnsForAxis(axisId)[0]);
        if (flags.getValue(flags.BLINK_FLAGS.enableChartConfigV2.name)) {
            let format = this.getFormattingForAxis(axisId);
            if (format) {
                let formattedValue = numberUtil_14(value, format);
                return formattedValue;
            }
        }
        return ChartModel_1.getLabelForNumericColumn(value, column, allColumnValuesOnAxis, formattingOverrides);
    }
    getLabelForNumericColumn(value, column, allColumnValuesOnAxis, formattingOverrides) {
        let format = this.getFormattingForColumn(column.getId());
        if (format) {
            let formattedValue = numberUtil_14(value, format);
            return formattedValue;
        }
        return ChartModel_1.getLabelForNumericColumn(value, column, allColumnValuesOnAxis, formattingOverrides);
    }
    setAxisName(axisId, name) {
        let axisProperties = this.getAxisProperties();
        if (!axisProperties[axisId]) {
            this._logger.error('Axis must already exist to set name');
        }
        _.set(axisProperties, [axisId, 'name'], name);
        this.setAxisProperties(axisProperties);
    }
    getAxisName(axisId) {
        let axisProperties = this.getAxisProperties();
        let axis = axisProperties[axisId];
        return axis.name || axis
            .linkedColumns
            .map(colId => this
            .getColumn(colId)
            .getName())
            .join(strings.axisname.concatenator.symbol);
    }
    setAxisPosition(axisId, isOpposite) {
        const axisProperties = this.getAxisProperties();
        if (!axisProperties[axisId]) {
            this._logger.error('Axis must be present to set its position');
        }
        axisProperties[axisId].isOpposite = isOpposite;
        this.setAxisProperties(axisProperties);
    }
    getAxisDefaultName(axisId) {
        let axisProperties = this.getAxisProperties();
        if (axisProperties[axisId]) {
            return axisProperties[axisId].linkedColumns.map((col) => this.getColumn(col).getName())
                .join(_.get(strings, 'axisname.concatenator.symbol'));
        }
        return null;
    }
    getAxisForColumn(columnId) {
        return this.getAxes().find(axis => axis.properties.linkedColumns.some(col => col === columnId));
    }
    getUnvisualizedMustVisualizeColumns() {
        return _.differenceBy(this.getMustVisualizeColumns(), this.getVisualizedColumns(), c => c.getId());
    }
    setChartProperty(key, value) {
        let chartProperties = this.getChartProperties();
        chartProperties[key] = value;
        this.setChartProperties(chartProperties);
    }
    getChartProperty(key) {
        return this.getChartProperties()[key];
    }
    getChartSpecificProperty(key) {
        return this.getChartProperty(CLIENT_STATE_KEYS.chartSpecific)[key];
    }
    setChartSpecificProperty(key, value) {
        let chartSpecificProperties = this.getChartProperty(CLIENT_STATE_KEYS.chartSpecific);
        chartSpecificProperties[key] = value;
        this.setChartProperty(CLIENT_STATE_KEYS.chartSpecific, chartSpecificProperties);
    }
    setColumnProperties(columnProperties) {
        this.setUserData(CLIENT_STATE_KEYS.columnProperties, columnProperties);
    }
    getColumnProperties() {
        return this.getUserData(CLIENT_STATE_KEYS.columnProperties);
    }
    setAxisProperties(axisProperties) {
        this.setUserData(CLIENT_STATE_KEYS.axisProperties, axisProperties);
    }
    getAxisProperties() {
        return this.getUserData(CLIENT_STATE_KEYS.axisProperties);
    }
    setChartProperties(chartProperties) {
        this.setUserData(CLIENT_STATE_KEYS.chartProperties, chartProperties);
    }
    getChartProperties() {
        return this.getUserData(CLIENT_STATE_KEYS.chartProperties);
    }
    getChartTypeWithNoDataErrors() {
        let axisConfig = this.getCurrentAxisConfig();
        let self = this;
        let previousChartType = this.getChartType();
        //TODO(Jasmeet):
        // 1. More elaborated check for type ?
        // 2. Capability to initialize New datamodel from raw data without incurring a
        // network call.
        let chartType = chartTypesInDisplayOrder.find(function (chartType) {
            let isConfigValid = validateAxisConfig(chartType, axisConfig);
            if (!isConfigValid) {
                return false;
            }
            let dataError = getChartDataValidationError(self, chartType);
            let isNewProviderCompatible = areProvidersEqual(previousChartType, chartType);
            return !dataError && isNewProviderCompatible;
        });
        return chartType;
    }
    //endregion
    parseDefinition(chartModel) {
        let handleBackwardCompatibility = function () {
            let estimatedCardinality = chartModel._xAxisColumns[0].getUniqueCount();
            if (estimatedCardinality > -1 && estimatedCardinality < 12) {
                chartModel.chartType = chartTypes.COLUMN;
            }
            else {
                chartModel.chartType = chartTypes.LINE;
            }
            let axisConfig = new ChartAxisConfig(chartModel._xAxisColumns, chartModel._yAxisColumns, chartModel._legendColumns, chartModel._radialColumn);
            setBackendConfiguration(chartModel, axisConfig);
        };
        // cleanup existing configs.
        chartModel._xAxisColumns = [];
        chartModel._yAxisColumns = [];
        chartModel._legendColumns = [];
        chartModel._radialColumn = null;
        // This is possible in the cases like scatter plot with measures
        // on x and y and the attribute is plotted, but this is not exposed in the axis config.
        chartModel._columnsInChartDataNotOnAnyAxis = [];
        let chartJson = chartModel.getJson();
        if (!!chartJson.chartType) {
            chartModel.chartType = chartJson.chartType;
        }
        let allColumns = chartModel.getColumns();
        let backendConfigInfo = getBackendConfiguration(chartModel);
        if (backendConfigInfo === false) {
            chartModel._hasError = true;
            return;
        }
        chartModel._xAxisColumns = backendConfigInfo.xAxisColumns;
        chartModel._yAxisColumns = backendConfigInfo.yAxisColumns;
        chartModel._legendColumns = backendConfigInfo.legendColumns;
        chartModel._radialColumn = backendConfigInfo.radialColumn;
        chartModel._columnsInChartDataNotOnAnyAxis =
            backendConfigInfo.columnsInChartDataNotOnAnyAxis;
        chartModel._columnEffectiveIdToColumn = backendConfigInfo.allColumns
            .reduce((idToColumnMap, column) => {
            idToColumnMap[column.getId()] = column;
            let columnInMap = chartModel._allColumnsMap[column.getId()];
            column.isMustVisualize = !!columnInMap && columnInMap.isMustVisualize;
            return idToColumnMap;
        }, {});
        _.extend(chartModel._allColumnsMap, chartModel._columnEffectiveIdToColumn);
        chartModel._queryDefinitions = backendConfigInfo.queryDefinitions;
        // Update all columns provided by answer with the latest definitions.
        allColumns.forEach((potentialMatchingColumn, index) => {
            let matchingColumn = backendConfigInfo.allColumns.find(function (column) {
                return potentialMatchingColumn.getId() ===
                    column.getId();
            });
            if (!!matchingColumn) {
                allColumns[index] = matchingColumn;
            }
        });
        // NOTE:
        // - This is added to support cases if there is any backend which does not
        // have axis config client state.
        // - This works as this is set before data is fetched due to liposuction.
        // - If we need to support this for even without liposuction we need to come
        // up with new code which computes axis config using all
        // the provided columns given chart type.
        // - We also check that this is only done when chart type is set because
        // this is only needed in case of saved answer.
        if (!!backendConfigInfo.shouldUpdateBackendConfig && !!chartModel.chartType) {
            this._logger.warn('Backend Config found with no axis config info,' +
                ' hence defaulting to basic chart');
            handleBackwardCompatibility();
        }
    }
    _init() {
        this._hasError = false;
        this._unsupportedDataError = null;
        this.chartType = null;
        // axis config columns
        this._xAxisColumns = [];
        this._yAxisColumns = [];
        this._legendColumns = [];
        this._radialColumn = null;
        // This is possible in the cases like scatter plot with measures on x and y and
        // the attribute is plotted, but this is not exposed in the axis config.
        this._columnsInChartDataNotOnAnyAxis = [];
        this._computedMetaInformation = {};
        this._hasNoData = !this._vizData.data || this._vizData.data.length === 0;
        this.parseDefinition(this);
        this._computedMetaInformation = computeMetaDataInformation(this);
        if (this._computedMetaInformation === false) {
            this._hasError = true;
            return;
        }
        // If server doesnt report any chart type then compute defaults.
        if (!this.chartType || this.hasUnvisualizedMustVisualizeColumns()) {
            let axisConfigAndChartType = getAxisConfigWithMustVisualizeColumns(this);
            if (!axisConfigAndChartType) {
                axisConfigAndChartType = getDefaultAxisConfigAndChartType(this);
            }
            // also set this in definition
            if (!!axisConfigAndChartType.chartType) {
                this.chartType = axisConfigAndChartType.chartType;
                this.getJson().chartType = axisConfigAndChartType.chartType;
                this.allowChartTypeChangeOnDataLoad = true;
                let newChartAxisConfig = new ChartAxisConfig(axisConfigAndChartType.axisConfig.xAxisColumns, axisConfigAndChartType.axisConfig.yAxisColumns, axisConfigAndChartType.axisConfig.legendColumns, axisConfigAndChartType.axisConfig.radialColumn);
                this.updateAxisConfig(newChartAxisConfig);
                this.clearVisibleSeriesIds();
                // If blink needs to set the axis config then the data from the previous fetch
                // need not be valid anymore so it is cleared to keep state consistent.
                this._columnsInChartDataNotOnAnyAxis = [];
                this._vizData.data = [];
                this._hasNoData = true;
                setBackendConfiguration(this, axisConfigAndChartType.axisConfig);
                this.setAxisProperties(this.generateAxisPropertiesFromAxisConfig());
            }
        }
        this._bestAxisColumnConfigForChartType = computeChartTypesToBestAxisConfigMap(this);
        // this._xAxisColumns.length is checked for the cases where server sends data
        // and client decides the chart is not needed and doesnt set the axis config and chart type.
        if (!this.hasNoData() && this._xAxisColumns.length) {
            this._dataModel = getDataModel(this);
            this._unsupportedDataError = getChartDataValidationError(this);
        }
        persistChartTypeAndAxisConfig(this);
        this.upgradeClientState();
        this.cleanClientState();
    }
    hasUnvisualizedMustVisualizeColumns() {
        return this.getUnvisualizedMustVisualizeColumns().length > 0;
    }
    generateAxisPropertiesFromAxisConfig() {
        let axisProperties = {};
        let yAxisColumns = this.getYAxisColumns();
        // If Y axis are shared, we put all axis as one at put columns linked in the state
        yAxisColumns.forEach(col => {
            axisProperties[jsUtil_1()] = {
                linkedColumns: [col.getId()],
                axisType: AXIS_TYPES.Y,
                yAxisRange: this.getUserData(CLIENT_STATE_KEYS.yAxisRange)
            };
        });
        let xAxisColumns = this.getXAxisColumns();
        axisProperties[jsUtil_1()] = {
            linkedColumns: xAxisColumns.map(col => col.getId()),
            axisType: AXIS_TYPES.X,
        };
        return axisProperties;
    }
    _measureColumnsHaveComparableRange(col1, col2) {
        // This is populated after data is processed
        // so any call before that returns false by default.
        if (!this._computedMetaInformation || !this._computedMetaInformation.columnIdToMax) {
            return false;
        }
        let colId1 = col1.getId(), colId2 = col2.getId(), max1 = this._computedMetaInformation.columnIdToMax[colId1], min1 = this._computedMetaInformation.columnIdToMin[colId1], max2 = this._computedMetaInformation.columnIdToMax[colId2], min2 = this._computedMetaInformation.columnIdToMin[colId2];
        return ChartModel_1.areComparableRanges(min1, max1, min2, max2);
    }
    cleanClientState() {
        this.cleanClientStateForKey(jsonConstants_1.chartClientStateKeys.SERIES_COLORS);
        this.cleanClientStateForKey(jsonConstants_1.chartClientStateKeys.MULTI_COLOR_SERIES_COLORS);
        this.cleanClientStateForKey(jsonConstants_1.chartClientStateKeys.SYSTEM_SERIES_COLORS);
        this.cleanClientStateForKey(jsonConstants_1.chartClientStateKeys
            .SYSTEM_MULTI_COLOR_SERIES_COLORS);
    }
    cleanClientStateForKey(key) {
        let userData = this.getUserData(key);
        if (userData) {
            let acc = Object.keys(userData).reduce((acc, key) => {
                acc[key.toLowerCase()] = userData[key];
                return acc;
            }, {});
            this.setUserData(key, acc);
        }
    }
};
ChartModel.EFFECTIVE_ID_DEFINITION_SCHEMA_CHANGE_VERSION = '3.4';
ChartModel.extractCaptionTitleAndLink = (valueObjectOrArray) => {
    /*
      Possible types for valueObjectORArray are
       a). string
       b). object with key 'value'
       c). array with first object having key 'value'

      For all the possible types of incoming data following will handle the parsing of value
     */
    let value = valueObjectOrArray &&
        _.get(_.castArray(valueObjectOrArray), '0.value', valueObjectOrArray);
    let captionTitleAndLink = _.isString(value)
        && value.match(blinkConstants_1.URL_CAPTION_REGEX);
    if (captionTitleAndLink) {
        return {
            caption: captionTitleAndLink[1],
            link: value.replace(captionTitleAndLink[0], '')
        };
    }
};
ChartModel = ChartModel_1 = __decorate([
    Provide('ChartModel')
], ChartModel);

let util$3 = ngRequire('util');
class AttributeFilterModelV3 extends FilterModelV3 {
    constructor(column, conditions, isCorrupt, id, answerModel) {
        super(column, conditions, isCorrupt, id, answerModel);
        this.filterValueCache = {};
        this.allFilterValueCache = {};
        this.filterItems = {};
        this.allFilterItems = {};
    }
    getSelectedFilterItems() {
        if (this.selectedItems !== void 0) {
            return this.selectedItems;
        }
        let selectedFilterCondition = this.conditions
            .find((filterCondition) => {
            let operator = filterCondition.condition.op;
            return !filterCondition.condition.isNegate
                && (operator === sage$1.CompareTypeProto.E.EQ
                    || operator === sage$1.CompareTypeProto.E.IN);
        });
        let selectedValues = !!selectedFilterCondition
            ? selectedFilterCondition.condition.values
            : [];
        this.selectedItems = this.getValueMapFromFilterValues(selectedValues);
        return this.selectedItems;
    }
    getExcludedFilterItems() {
        if (this.excludedItems !== void 0) {
            return this.excludedItems;
        }
        let excludedFilterCondition = this.conditions
            .find((filterCondition) => {
            let operator = filterCondition.condition.op;
            return (operator === sage$1.CompareTypeProto.E.NE)
                || (filterCondition.condition.isNegate
                    && (operator === sage$1.CompareTypeProto.E.EQ
                        || operator === sage$1.CompareTypeProto.E.IN));
        });
        let excludedValues = !!excludedFilterCondition
            ? excludedFilterCondition.condition.values
            : [];
        this.excludedItems = this.getValueMapFromFilterValues(excludedValues);
        return this.excludedItems;
    }
    getFilterDataCache(showAllValues) {
        return showAllValues ? this.allFilterValueCache : this.filterValueCache;
    }
    putFilterDataCache(subString, knownMatches, showAllValues) {
        let cacheToUpdate = showAllValues ? this.allFilterValueCache : this.filterValueCache;
        cacheToUpdate[subString] = knownMatches;
    }
    getFilterDataCacheValue(subString, showAllValues) {
        let cacheToUse = showAllValues ? this.allFilterValueCache : this.filterValueCache;
        return cacheToUse[subString];
    }
    updateFilterValues(values, showAllValues) {
        if (showAllValues) {
            this.allFilterItems = {};
        }
        else {
            this.filterItems = {};
        }
        let itemsToUpdate = showAllValues ? this.allFilterItems : this.filterItems;
        values.forEach((val) => {
            let key = util$3.isSpecialValue(val)
                ? util$3.getSpecialFormatData(val)
                : val;
            let value = this.getSelectedFilterItems()[val] !== void 0
                ? this.getSelectedFilterItems()[val]
                : false;
            itemsToUpdate[key] = value;
        });
    }
    getFilterItems(showAllValues) {
        return showAllValues ? this.allFilterItems : this.filterItems;
    }
    isSupportedByUI() {
        if (!super.isSupportedByUI() || this.isFilterNonEditable()) {
            return false;
        }
        let hasContainsFilter = this.conditions.some((filterCondition) => {
            return filterCondition.condition.op === sage$1.CompareTypeProto.E.CONTAINS;
        });
        if (hasContainsFilter) {
            return false;
        }
        return true;
    }
    getFilterValueSummary() {
        let selectedItems = this.getSelectedFilterItems();
        let selectedValues = Object.keys(selectedItems);
        let excludedItems = this.getExcludedFilterItems();
        let excludedValues = Object.keys(excludedItems);
        if ((!selectedValues.length && !excludedValues.length)
            || (selectedItems.length && excludedValues.length)) {
            return '';
        }
        if (selectedValues.length) {
            return selectedValues.join(', ');
        }
        else {
            return strings.notin + ' ' + excludedValues.join(', ');
        }
    }
    getType() {
        return FILTER_MODEL_TYPES.ATTRIBUTE;
    }
    getValueMapFromFilterValues(values) {
        let returnVal = {};
        values.forEach((val) => {
            let strVal;
            if (val.isNull) {
                strVal = strings.NULL_VALUE_PLACEHOLDER_LABEL;
            }
            else {
                switch (val.type) {
                    case bach.Value.Type.CHAR:
                        strVal = val.stringValue.value;
                        break;
                    case bach.Value.Type.DOUBLE:
                        strVal = val.doubleValue.toString();
                        break;
                    case bach.Value.Type.DATE:
                        strVal = _.toNumber(val.intValue).toString();
                        break;
                    case bach.Value.Type.INT:
                        strVal = _.toNumber(val.intValue).toString();
                        break;
                    case bach.Value.Type.BOOL:
                        strVal = val.boolValue ? 'true' : 'false';
                        break;
                    default:
                        strVal = null;
                }
                if (strVal === '') {
                    strVal = strings.EMPTY_VALUE_PLACEHOLDER_LABEL;
                }
            }
            returnVal[strVal] = true;
        });
        return returnVal;
    }
}

function getValue(val) {
    switch (val.type) {
        case bach.Value.Type.CHAR:
            return val.stringValue.value;
        case bach.Value.Type.DOUBLE:
            return val.doubleValue;
        case bach.Value.Type.DATE:
            return _.toNumber(val.intValue);
        case bach.Value.Type.INT:
            return _.toNumber(val.intValue);
        case bach.Value.Type.BOOL:
            return val.boolValue;
        default:
            return null;
    }
}

let BETWEEN_OPS = [
    sage$1.CompareTypeProto.E.BW,
    sage$1.CompareTypeProto.E.BW_INC,
    sage$1.CompareTypeProto.E.BW_INC_MAX,
    sage$1.CompareTypeProto.E.BW_INC_MIN,
];
let BINARY_OPS_TO_UNARY_OPS = {
    [sage$1.CompareTypeProto.E.BW]: [
        sage$1.CompareTypeProto.E.GT,
        sage$1.CompareTypeProto.E.LT
    ],
    [sage$1.CompareTypeProto.E.BW_INC]: [
        sage$1.CompareTypeProto.E.GE,
        sage$1.CompareTypeProto.E.LE
    ],
    [sage$1.CompareTypeProto.E.BW_INC_MAX]: [
        sage$1.CompareTypeProto.E.GT,
        sage$1.CompareTypeProto.E.LE
    ],
    [sage$1.CompareTypeProto.E.BW_INC_MIN]: [
        sage$1.CompareTypeProto.E.GE,
        sage$1.CompareTypeProto.E.LT
    ],
};
function isBetweenOperator(op) {
    return BETWEEN_OPS.indexOf(op) > -1;
}
function getUnaryOpsFromBinaryOp(op) {
    return BINARY_OPS_TO_UNARY_OPS[op];
}
function getFilterConditionSummary(operator, value) {
    return getOperatorSymbol(operator) + ' ' + value;
}
function getOperatorSymbol(operator) {
    switch (operator) {
        case sage$1.CompareTypeProto.E.GT:
            return '>';
        case sage$1.CompareTypeProto.E.GE:
            return '>=';
        case sage$1.CompareTypeProto.E.LT:
            return '<';
        case sage$1.CompareTypeProto.E.LE:
            return '<=';
        case sage$1.CompareTypeProto.E.EQ:
            return '=';
        case sage$1.CompareTypeProto.E.NE:
            return '!=';
    }
}

function getFormattedDateFromEpochInSeconds(epoch) {
    if (!epoch) {
        return null;
    }
    let epochInMs = parseInt(epoch, 10) * 1000;
    // Note (sunny): We ignore custom calendar in formatting here
    // because date range filter is not able to handle it.
    return dateUtil_40(epochInMs, dateUtil_2.DATE_SHORT, true);
}
class DateFilterModelV3 extends FilterModelV3 {
    constructor(column, conditions, isCorrupt, id, answerModel) {
        super(column, conditions, isCorrupt, id, answerModel);
        this.needsDataFromServer = false;
    }
    getFilterValueSummary() {
        if (this.conditions.length === 0) {
            return '';
        }
        if (this.conditions.length > 1) {
            return strings.filtersMessages.valuePreview.CLICK_TO_SEE_FILTER;
        }
        let firstOperator = this.conditions[0].condition.op;
        let firstRowValues = this.conditions[0].condition.values.map((val) => {
            return getFormattedDateFromEpochInSeconds(getValue(val));
        });
        if (firstRowValues.length === 0) {
            return '';
        }
        let validFilters = [
            sage$1.CompareTypeProto.E.GT,
            sage$1.CompareTypeProto.E.GE,
            sage$1.CompareTypeProto.E.LT,
            sage$1.CompareTypeProto.E.LE,
            sage$1.CompareTypeProto.E.BW,
            sage$1.CompareTypeProto.E.BW_INC,
            sage$1.CompareTypeProto.E.BW_INC_MAX,
            sage$1.CompareTypeProto.E.BW_INC_MIN,
            sage$1.CompareTypeProto.E.EQ,
            sage$1.CompareTypeProto.E.NE
        ];
        if (validFilters.indexOf(firstOperator) === -1) {
            return strings.filtersMessages.valuePreview.CLICK_TO_SEE_FILTER;
        }
        let op1, op2, val1, val2;
        if (isBetweenOperator(firstOperator)) {
            op1 = getUnaryOpsFromBinaryOp(firstOperator)[0];
            op2 = getUnaryOpsFromBinaryOp(firstOperator)[1];
            val1 = firstRowValues[0];
            val2 = firstRowValues[1];
            if (this.conditions[0].condition.isNegate) {
                let temp = op2;
                op2 = op1;
                op1 = temp;
            }
        }
        else {
            op1 = firstOperator;
            val1 = firstRowValues[0];
        }
        if (this.conditions[0].condition.isNegate && op1 === sage$1.CompareTypeProto.E.EQ) {
            op1 = sage$1.CompareTypeProto.E.NE;
        }
        else if (this.conditions[0].condition.isNegate
            && op1 === sage$1.CompareTypeProto.E.NE) {
            op1 = sage$1.CompareTypeProto.E.EQ;
        }
        if (this.conditions[0].condition.isNegate && op2 === sage$1.CompareTypeProto.E.EQ) {
            op2 = sage$1.CompareTypeProto.E.NE;
        }
        else if (this.conditions[0].condition.isNegate
            && op2 === sage$1.CompareTypeProto.E.NE) {
            op2 = sage$1.CompareTypeProto.E.EQ;
        }
        let summary = getFilterConditionSummary(op1, val1);
        if (op2 !== void 0) {
            summary += ' ' + getFilterConditionSummary(op2, val2);
        }
        return summary;
    }
    getType() {
        return FILTER_MODEL_TYPES.DATE;
    }
    isSupportedByUI() {
        return this.conditions.length <= 1
            && super.isSupportedByUI() &&
            !this.isFilterNonEditable();
    }
}

class FilterCondition {
    constructor(condition, column) {
        this.logger = logger_3('filter-condition');
        this.condition = condition;
        this.column = column;
    }
}

class MeasureFilterModelV3 extends FilterModelV3 {
    constructor(column, conditions, isCorrupt, id, answerModel) {
        super(column, conditions, isCorrupt, id, answerModel);
        this.needsDataFromServer = false;
    }
    isSupportedByUI() {
        /*Currently inline filter are not supported for answers but that will be added in future
        * releases.
        */
        return !this.isFilterNonEditable();
    }
    getFilterValueSummary() {
        if (this.conditions.length === 0 || this.conditions[0].condition.values.length === 0) {
            return '';
        }
        if (this.conditions.length > 1) {
            return strings.filtersMessages.valuePreview.CLICK_TO_SEE_FILTER;
        }
        let isNegate = this.conditions[0].condition.isNegate;
        let firstOperator = this.conditions[0].condition.op;
        let firstRowValues = this.conditions[0].condition.values.map(function (val) {
            if (val.type === bach.Value.Type.INT) {
                let value = val.hasOwnProperty('intValue')
                    ? val.intValue.toString()
                    : strings.NULL_VALUE_PLACEHOLDER_LABEL;
                return value;
            }
            else if (val.type === bach.Value.Type.DOUBLE) {
                let value = val.hasOwnProperty('doubleValue')
                    ? val.doubleValue.toString()
                    : strings.NULL_VALUE_PLACEHOLDER_LABEL;
                return value;
            }
            else {
                this.logger.error('range value not int or double');
                return null;
            }
        });
        let validFilters = [
            sage$1.CompareTypeProto.E.GT,
            sage$1.CompareTypeProto.E.GE,
            sage$1.CompareTypeProto.E.LT,
            sage$1.CompareTypeProto.E.LE,
            sage$1.CompareTypeProto.E.BW,
            sage$1.CompareTypeProto.E.BW_INC,
            sage$1.CompareTypeProto.E.BW_INC_MAX,
            sage$1.CompareTypeProto.E.BW_INC_MIN,
            sage$1.CompareTypeProto.E.EQ,
            sage$1.CompareTypeProto.E.NE,
            sage$1.CompareTypeProto.E.IN
        ];
        if (validFilters.indexOf(firstOperator) === -1) {
            return strings.filtersMessages.valuePreview.CLICK_TO_SEE_FILTER;
        }
        let op1, op2, val1, val2;
        if (isBetweenOperator(firstOperator)) {
            op1 = getUnaryOpsFromBinaryOp(firstOperator)[0];
            op2 = getUnaryOpsFromBinaryOp(firstOperator)[1];
            val1 = firstRowValues[0];
            val2 = firstRowValues[1];
        }
        else {
            op1 = firstOperator;
            val1 = firstRowValues[0];
        }
        // We need special handling of != {null} case as callsoum sends isNegate = true & op = 0
        // (case '=') instead of sending op = 1 (case '!=' )
        if (firstOperator === sage$1.CompareTypeProto.E.EQ && isNegate) {
            op1 = sage$1.CompareTypeProto.E.NE;
        }
        if (firstOperator === sage$1.CompareTypeProto.E.IN) {
            op1 = isNegate
                ? sage$1.CompareTypeProto.E.NE
                : sage$1.CompareTypeProto.E.EQ;
            return getOperatorSymbol(op1) + ' ' + firstRowValues.join(', ');
        }
        let summary = getFilterConditionSummary(op1, val1);
        if (op2 !== void 0) {
            summary += ' ' + getFilterConditionSummary(op2, val2);
        }
        return summary;
    }
    getType() {
        return FILTER_MODEL_TYPES.MEASURE;
    }
}

let util$4 = ngRequire('util');

let util$5 = ngRequire('util');

function getSageCompareType(op) {
    switch (op) {
        case 'EQ':
            return sage$1.CompareTypeProto.E.EQ;
        case 'NE':
            return sage$1.CompareTypeProto.E.NE;
        case 'LT':
            return sage$1.CompareTypeProto.E.LT;
        case 'LE':
            return sage$1.CompareTypeProto.E.LE;
        case 'GT':
            return sage$1.CompareTypeProto.E.GT;
        case 'GE':
            return sage$1.CompareTypeProto.E.GE;
        case 'IN':
            return sage$1.CompareTypeProto.E.IN;
        case 'BW':
            return sage$1.CompareTypeProto.E.BW;
        case 'CONTAINS':
            return sage$1.CompareTypeProto.E.CONTAINS;
        case 'BEGINS_WITH':
            return sage$1.CompareTypeProto.E.BEGINS_WITH;
        case 'ENDS_WITH':
            return sage$1.CompareTypeProto.E.ENDS_WITH;
        case 'BW_INC':
            return sage$1.CompareTypeProto.E.BW_INC;
        case 'BW_INC_MIN':
            return sage$1.CompareTypeProto.E.BW_INC_MIN;
        case 'BW_INC_MAX':
            return sage$1.CompareTypeProto.E.BW_INC_MAX;
        case 'LIKE':
            return sage$1.CompareTypeProto.E.LIKE;
        default:
            return null;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Exports different common types for filters.
 */
let Logger = ngRequire('Logger');
var FilterTypes;
(function (FilterTypes) {
    // Filter type for filters with one row.
    FilterTypes[FilterTypes["SIMPLE"] = 0] = "SIMPLE";
    // Filter type for filters with more than one row
    FilterTypes[FilterTypes["COMPOUND"] = 1] = "COMPOUND";
})(FilterTypes || (FilterTypes = {}));
var FilterRowType;
(function (FilterRowType) {
    // Default filter row type.
    FilterRowType[FilterRowType["SIMPLE"] = 0] = "SIMPLE";
    // Filter type when filters like near, farther are added.
    FilterRowType[FilterRowType["GEO"] = 1] = "GEO";
})(FilterRowType || (FilterRowType = {}));
class FilterValue {
    constructor(filterValueJson) {
        this.logger = Logger.create('filter-value');
        if (!filterValueJson) {
            this.logger.error('Filter Value initialized without json');
            return;
        }
        if (!_.isBoolean(filterValueJson[jsonConstants_1.filter.filterValue.SELECTED])) {
            this.logger.error('Filter Value initialized with non boolean selection state');
        }
        this.key = filterValueJson[jsonConstants_1.filter.filterValue.KEY];
        this.selected = filterValueJson[jsonConstants_1.filter.filterValue.SELECTED];
        this.keyNull = filterValueJson[jsonConstants_1.filter.filterValue.KEYNULL];
    }
    getKey() {
        if (this.keyNull === true) {
            return null;
        }
        return this.key;
    }
    isSelected() {
        return this.selected;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Base class to represent Filter row.
 */
let Logger$1 = ngRequire('Logger');
class BaseFilterRow {
    constructor(columnJson, filterRowType) {
        this.logger = Logger$1.create('filter-row');
        this.visualizationColumnModel = new VisualizationColumnModel(columnJson);
        this.filterRowType = FilterRowType[filterRowType];
    }
    getColumn() {
        return this.visualizationColumnModel;
    }
    getType() {
        return this.filterRowType;
    }
    isEmpty() {
        this.logger.error('concrete types should implement this');
        return false;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Represents the single operator filter row.
 */
let SingleOperatorFilterRow = class SingleOperatorFilterRow extends BaseFilterRow {
    constructor(filterRowJson) {
        super(filterRowJson[jsonConstants_1.filter.COLUMN], filterRowJson[jsonConstants_1.TYPE_KEY]);
        let op = filterRowJson[jsonConstants_1.filter.SINGLE_OPERATOR_KEY];
        this.operator = getSageCompareType(op);
        this.values = filterRowJson[jsonConstants_1.VALUES_KEY]
            .map(filterValueJson => {
            return new FilterValue(filterValueJson);
        });
        this.negation = !!filterRowJson[jsonConstants_1.filter.NEGATION];
        this.isEditable = _.isUndefined(filterRowJson[jsonConstants_1.filter.IS_EDITABLE])
            ? true
            : filterRowJson[jsonConstants_1.filter.IS_EDITABLE];
    }
    getOperator() {
        return this.operator;
    }
    getValues() {
        return this.values;
    }
    isEmpty() {
        return this.values.length === 0;
    }
    isNegation() {
        return this.negation;
    }
    getFilterConditions() {
        let condition = new bach.Filter();
        condition.isNegate = !!this.negation;
        condition.op = this.operator;
        condition.isEditable = this.isEditable;
        condition.values = this.getValues().map((value) => {
            let val = new bach.Value();
            val.isNull = _.isNull(value.getKey());
            switch (this.getColumn().getEffectiveDataType()) {
                case 'BOOL':
                    val.type = bach.Value.Type.BOOL;
                    if (!val.isNull) {
                        val.boolValue = (value.getKey() === 'true');
                    }
                    break;
                case 'CHAR':
                    val.type = bach.Value.Type.CHAR;
                    if (!val.isNull) {
                        val.stringValue = new bach.Value.StringValue({
                            value: value.getKey()
                        });
                    }
                    break;
                case 'VARCHAR':
                    val.type = bach.Value.Type.CHAR;
                    if (!val.isNull) {
                        val.stringValue = new bach.Value.StringValue({
                            value: value.getKey()
                        });
                    }
                    break;
                case 'DATE':
                    val.type = bach.Value.Type.INT;
                    if (!val.isNull) {
                        val.intValue = !!value.getKey() ? _.toNumber(value.getKey()) : null;
                    }
                    break;
                case 'DATE_TIME':
                    val.type = bach.Value.Type.INT;
                    if (!val.isNull) {
                        val.intValue = !!value.getKey() ? _.toNumber(value.getKey()) : null;
                    }
                    break;
                case 'TIME':
                    val.type = bach.Value.Type.INT;
                    if (!val.isNull) {
                        val.intValue = !!value.getKey() ? _.toNumber(value.getKey()) : null;
                    }
                    break;
                case 'DATE_NUM':
                    val.type = bach.Value.Type.INT;
                    if (!val.isNull) {
                        val.intValue = !!value.getKey() ? _.toNumber(value.getKey()) : null;
                    }
                    break;
                case 'INT32':
                    val.type = bach.Value.Type.INT;
                    if (!val.isNull) {
                        val.intValue = !!value.getKey() ? _.toNumber(value.getKey()) : null;
                    }
                    break;
                case 'INT64':
                    val.type = bach.Value.Type.INT;
                    if (!val.isNull) {
                        val.intValue = !!value.getKey() ? _.toNumber(value.getKey()) : null;
                    }
                    break;
                case 'DOUBLE':
                    val.type = bach.Value.Type.DOUBLE;
                    if (!val.isNull) {
                        val.doubleValue = !!value.getKey() ? _.toNumber(value.getKey()) : null;
                    }
                    break;
                case 'FLOAT':
                    val.type = bach.Value.Type.DOUBLE;
                    if (!val.isNull) {
                        val.doubleValue = !!value.getKey() ? _.toNumber(value.getKey()) : null;
                    }
                    break;
                default:
                    this.logger.error('Unsupported column type');
            }
            return val;
        });
        let filterCondition = new FilterCondition(condition, this.getColumn());
        return [filterCondition];
    }
};
SingleOperatorFilterRow = __decorate([
    Provide('SingleOperatorFilterRow')
], SingleOperatorFilterRow);

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Class representing filter row with multiple operators.
 * This happens in cases like revenue 1992 1994, the row contains multiple
 * BW operators in this case.
 */
let Logger$2 = ngRequire('Logger');
let MultiOperatorFilterRow = class MultiOperatorFilterRow extends BaseFilterRow {
    constructor(filterRowJson = {}) {
        super(filterRowJson[jsonConstants_1.filter.COLUMN], filterRowJson[jsonConstants_1.TYPE_KEY]);
        this.singleOperatorFilterRows = [];
        this.operators = [];
        this.valueSets = [];
        this.logger = Logger$2.create('multi-operator-filter-row');
        if (!_.isArray(filterRowJson[jsonConstants_1.filter.MULTIPLE_OPERATORS_KEY])) {
            this.logger.error('Multi operator missing array of rows');
        }
        filterRowJson[jsonConstants_1.filter.MULTIPLE_OPERATORS_KEY]
            .forEach((operatorRow, idx) => {
            let operator = operatorRow[jsonConstants_1.filter.MULTIPLE_OPERATOR.OPERATOR];
            this.operators[idx] = getSageCompareType(operator);
            this.valueSets[idx] = operatorRow[jsonConstants_1.filter.MULTIPLE_OPERATOR.VALUES]
                .map(filterValueJson => new FilterValue(filterValueJson));
            let singleOperatorFilterRow = new SingleOperatorFilterRow({
                [jsonConstants_1.filter.COLUMN]: filterRowJson[jsonConstants_1.filter.COLUMN],
                [jsonConstants_1.TYPE_KEY]: filterRowJson[jsonConstants_1.TYPE_KEY],
                [jsonConstants_1.filter.SINGLE_OPERATOR_KEY]: operator,
                [jsonConstants_1.VALUES_KEY]: operatorRow[jsonConstants_1.filter.MULTIPLE_OPERATOR.VALUES],
                [jsonConstants_1.filter.NEGATION]: operatorRow[jsonConstants_1.filter.NEGATION]
            });
            this.singleOperatorFilterRows.push(singleOperatorFilterRow);
        });
    }
    isEmpty() {
        return this.valueSets.every((valueSet) => {
            return valueSet.length === 0;
        });
    }
    getFilterConditions() {
        return _.flatten(this.getSingleOperatorRows().map(row => row.getFilterConditions()));
    }
    getSingleOperatorRows() {
        return this.singleOperatorFilterRows;
    }
};
MultiOperatorFilterRow = __decorate([
    Provide('MultiOperatorFilterRow')
], MultiOperatorFilterRow);

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Class to represent filter content.
 * In the current model we have a Filter Object which contains all the filter conditions
 * with the filter model containing links to it.
 * All this information is contained inside of this filter content object.
 */
let Logger$3 = ngRequire('Logger');
class FilterContent {
    constructor(json) {
        this.logger = Logger$3.create('filter-content');
        if (!json) {
            this.logger.error('No json passed for construction');
            return;
        }
        if (!_.isArray(json[jsonConstants_1.filter.ROWS])) {
            this.logger.error('Filter rows is not an array');
            return;
        }
        this.rows = getFilterRows(json[jsonConstants_1.filter.ROWS]);
        this.filterType = json[jsonConstants_1.TYPE_KEY];
    }
    getRows() {
        return this.rows;
    }
    getRowAtIndex(index) {
        return this.rows[index];
    }
}
function getFilterRows(filterRowsJson = []) {
    return filterRowsJson.map((filterRowJson) => {
        let isMultiOp = filterRowJson.hasOwnProperty(jsonConstants_1.filter.MULTIPLE_OPERATORS_KEY);
        if (isMultiOp) {
            return new MultiOperatorFilterRow(filterRowJson);
        }
        else {
            return new SingleOperatorFilterRow(filterRowJson);
        }
    });
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Client side class representing the Filter Object returned from callosum
 * as part of the Answersheet. This is the container of all the filter contitions.
 */
let Logger$4 = ngRequire('Logger');
class Filter {
    constructor(json) {
        this.logger = Logger$4.create('filter');
        if (!json) {
            this.logger.error('Undefined Json in construction');
            return;
        }
        this.complete = json[jsonConstants_1.VIZ_COMPLETE_KEY];
        this.filterContent = new FilterContent(json[jsonConstants_1.filter.FILTER_CONTENT]);
        this.headers = json[jsonConstants_1.HEADER_KEY];
        this.incompleteDetail = json[jsonConstants_1.INCOMPLETE_DETAIL];
    }
    isComplete() {
        return this.complete;
    }
    getFilterContent() {
        return this.filterContent;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2015-16
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Provides a service to create filter expressions
 */
let jsUtil = ngRequire('jsUtil');
const filterOperators = {
    CONTAINS: 'OP_CONTAINS',
    IN: 'OP_IN',
    EQUALS: 'OP_EQUALS'
};
let _logger$1;
class SimpleFilterExpression {
    constructor(vizColumn, value, operator, columnType = jsonConstants_1.clientExpressionColumnType.VIZ_COLUMN) {
        this.columnInfoNodeIndex = 0; // can we remove it ?
        this.valueNodeIndex = 1;
        if (!_logger$1) {
            _logger$1 = logger_3('Filter-Expression');
        }
        if (!vizColumn) {
            _logger$1.error('Cannot create filter expression, missing visualization column');
            return;
        }
        if (!vizColumn.getId || !vizColumn.getId()) {
            _logger$1.error('Cannot create filter expression, visualization column missing id');
            return;
        }
        if (!value) {
            _logger$1.error('Cannot create filter expression, missing value');
            return;
        }
        if (!operator) {
            _logger$1.error('Cannot create filter expression, missing operator');
            return;
        }
        this.value = value;
        this.operator = operator;
        this.vizColumn = vizColumn;
        this.columnType = columnType;
    }
    getJsonString() {
        let jsonObjectMap = this.getJsonObject();
        return JSON.stringify(jsonObjectMap);
    }
    getJsonObject() {
        let jsonObjectMap = {
            id: jsUtil.generateUUID(),
            child: [
                {
                    id: this.vizColumn.getId(),
                    /* eslint camelcase: 1*/
                    column_type: this.columnType
                },
                {
                    id: jsUtil.generateUUID()
                }
            ],
            operator: this.operator
        };
        let valueArray = Array.isArray(this.value) ? this.value : [this.value];
        jsonObjectMap.child[this.valueNodeIndex].value = valueArray.map((value) => {
            return {
                string_val: value
            };
        });
        return jsonObjectMap;
    }
}
Provide('filterExpressionService')({
    filterOperators,
    SimpleFilterExpression
});

/**
 * Copyright: ThoughtSpot Inc. 2014
 * Author: Vibhor Nanavati (vibhor@thoughtspot.com)
 *
 * @fileoverview A common utility used by any component that wishes to show a filter ui.
 */
let $rootScope = ngRequire('$rootScope');
let $q = ngRequire('$q');
let alertService = ngRequire('alertService');
let answerService = ngRequire('answerService');
let cancelableQueryContextService = ngRequire('cancelableQueryContextService');
let dataService = ngRequire('dataService');
let rangeOperatorUtil = ngRequire('rangeOperatorUtil');
let UserAction = ngRequire('UserAction');
let util$6 = ngRequire('util');
let logger$2 = logger_3('filter-util');
let cancellationNamespace = 'filterQuery';
let filterTypeCssClasses = {
    RANGE_FILTER: 'bk-range-filter-container',
    DATE_FILTER: 'bk-date-filter-container',
    CHECKBOX_FILTER: 'bk-checkbox-filter-container',
    WAITING: 'bk-waiting-for-filter'
};
function triggerFilterCloseEvent() {
    $rootScope.$broadcast(events.CLEAR_AND_HIDE_POPUP_MENU);
}
function clearLoadingIndicator($container) {
    $container.removeClass(filterTypeCssClasses.WAITING);
}
function showNewFilterAsLoading($container) {
    $container.addClass(filterTypeCssClasses.WAITING);
}
function showErrorLoadingFilter($container) {
    $container.removeClass(filterTypeCssClasses.WAITING);
    $container.append('<div class="bk-unsupported-filter-placeholder">' +
        'Oops! There was an error loading this filter.</div>');
}
function getFilterTokensByTransform(existingTokens, logicalColumn, vizColumn, aggr, filterOperator, addWildcards) {
    let queryTransformation = [], transformationParams = {};
    if (!!logicalColumn) {
        transformationParams.columnGuid = logicalColumn.getGuid();
    }
    if (!!vizColumn) {
        transformationParams.tokenOutputGuid = vizColumn.getId();
    }
    if (addWildcards) {
        transformationParams.value1 = '{wildcard}';
        transformationParams.value2 = '{wildcard}';
    }
    if (aggr !== sage.AggregationType.NONE) {
        transformationParams.aggregation = aggr;
        queryTransformation.push(sage.QueryTransform.createAddHavingFilterTransformation(transformationParams));
    }
    else {
        if (!filterOperator) {
            transformationParams.op = sage.CompareType.EQ;
        }
        else {
            transformationParams.op = filterOperator;
        }
        queryTransformation.push(sage.QueryTransform.createAddPredicateFilterTransformation(transformationParams));
    }
    return queryTransformation;
}
/**
 * This method can only be used with a fully specified Visualization Column that has a
 * join path defined.
 * Given this assumption, this method will always return a promise of a filter model in
 * non-error cases.
 *
 * @param {VisualizationColumnModel} vizCol
 * @param {AnswerModel} answerModel
 * @param {AnswerSageClient} sageClient
 *
 * @returns {Promise | null}
 */
function fetchNewFilterModel(vizCol, answerModel, sageClient) {
    if (!vizCol) {
        return null;
    }
    let sageAggrType = getSageAggrTypeForCallosumAggrType(vizCol.getEffectiveAggregateType());
    let vizColumn = vizCol, aggr = sage.AggregationType[sageAggrType], existingTokens = answerModel.getRecognizedTokens();
    let filterOperator;
    if (vizCol.isDateColumn()) {
        filterOperator = sage.CompareType.GE;
    }
    let filterTransformations = getFilterTokensByTransform(existingTokens, null, vizColumn, aggr, filterOperator, false);
    let newFilterModelDeferred = $q.defer();
    transformTable(sageClient.getContext(), sageClient.getCurrentIndex(), filterTransformations)
        .then(function (sageResponse) {
        let answerResponse = sageResponse.answerResponse;
        let questionParams = {};
        questionParams[jsonConstants_1.SAGE_CONTEXT_PROTO_KEY] = answerResponse.getContext();
        questionParams[jsonConstants_1.SAGE_CONTEXT_INDEX_KEY] = sageClient.getCurrentIndex();
        let tables = questionParams[jsonConstants_1.SAGE_CONTEXT_PROTO_KEY].getTables();
        if (!tables[questionParams[jsonConstants_1.SAGE_CONTEXT_INDEX_KEY]].getQuery()) {
            logger$2.error('Add filter transformation returned empty program', JSON.stringify(questionParams), JSON.stringify(filterTransformations), JSON.stringify(answerResponse));
            newFilterModelDeferred.reject();
            return;
        }
        let optionalParams = {
            includeData: false,
            requestType: RequestTypes.ANSWER_ADD_NEW_FILTER
        };
        let userAction = new UserAction(UserAction.FETCH_ANSWER_FILTER);
        answerService.getAnswer(questionParams, optionalParams)
            .then(function (response) {
            let answerModel = response.data;
            let newFilterModel = answerModel.getCurrentAnswerSheet()
                .getFilterModelByColumn(vizCol);
            if (!newFilterModel) {
                newFilterModelDeferred.reject('Can not find a matching filter for this column');
                return;
            }
            let ignoreDataFetch = !!newFilterModel &&
                (!newFilterModel.needsDataFromServer || !newFilterModel.isSupportedByUI());
            if (ignoreDataFetch) {
                newFilterModelDeferred.resolve(newFilterModel);
                return;
            }
            updateFilterModelWithValues(newFilterModel, '', true).then(function () {
                newFilterModelDeferred.resolve(newFilterModel);
            }, function (error) {
                logger$2.error('filter data fetch failed', error);
                newFilterModelDeferred.reject(error);
            });
        }, function (response) {
            alertService.showUserActionFailureAlert(userAction, response);
            logger$2.error('Callosum query execution failed for temp filter generation query', response, sageClient.getContext());
            newFilterModelDeferred.reject(response.data);
        });
    }, function (error) {
        logger$2.error('Add filter transformation failed', JSON.stringify(sageClient.getContext()), JSON.stringify(sageClient.getCurrentIndex), JSON.stringify(filterTransformations));
        newFilterModelDeferred.reject(error);
    });
    return newFilterModelDeferred.promise;
}
// This function return data if it can be computed/returned without a network call
/**
 *
 * @param {FilterModel} filterModel
 * @param {String} valueSearchQuery
 * @returns {*}
 */
function getLocalDataForValueSearch(filterModel, valueSearchQuery, showRelevantValues) {
    // cache check
    let cacheResponse = filterModel.getFilterDataCacheValue(valueSearchQuery, !showRelevantValues);
    if (!!cacheResponse) {
        return cacheResponse;
    }
    let cache = filterModel.getFilterDataCache(!showRelevantValues);
    let matchingKey;
    util$6.iterateObject(cache, function (key) {
        if (!!matchingKey) {
            return;
        }
        if (valueSearchQuery.indexOf(key) > -1 &&
            cache[key].length < filterModel.getBatchSize()) {
            matchingKey = key;
        }
    });
    // If a substring resulted in less than batch size results then use it locally.
    if (!!matchingKey) {
        let data = cache[matchingKey];
        let newData = data.filter(function (value) {
            // we want to handle the case of nulls here if the search value is ''
            // then we want to include null values which show as {null} in UI.
            if (!value) {
                return valueSearchQuery === '';
            }
            return value.toString().toLowerCase().indexOf(valueSearchQuery.toLowerCase()) > -1;
        });
        return newData;
    }
    return null;
}
/**
 *
 * @param {FilterModel} filterModel
 * @param {String} valueSearchQuery
 * @param {Array.<*>} dataValues
 */
function processFilterDataResponse(filterModel, valueSearchQuery, dataValues, showRelevantValues) {
    filterModel.putFilterDataCache(valueSearchQuery, dataValues, !showRelevantValues);
    filterModel.updateFilterValues(dataValues, !showRelevantValues);
}
/**
 *
 * @param {FilterModel} filterModel
 * @param {String} valueSearchQuery
 * @param {String} previousSearchQuery
 * @returns {Promise}
 */
function updateFilterModelWithValues(filterModel, valueSearchQuery, showRelevantValues) {
    cancelableQueryContextService.cancelPendingQueriesInNamespace(cancellationNamespace);
    let localDataValues = getLocalDataForValueSearch(filterModel, valueSearchQuery, showRelevantValues);
    if (!!localDataValues) {
        processFilterDataResponse(filterModel, valueSearchQuery, localDataValues, showRelevantValues);
        return $q.when();
    }
    let containsFilterExpression;
    if (valueSearchQuery) {
        containsFilterExpression = new SimpleFilterExpression(filterModel.getColumn(), valueSearchQuery, filterOperators.CONTAINS);
    }
    return dataService.getDataForViz(filterModel.getContainingAnswerModel(), filterModel, {
        showAllValues: !showRelevantValues
    }, true, containsFilterExpression, cancellationNamespace)
        .then(function (response) {
        let data = response.data;
        if (!!data.data) {
            let scalarDataValues = data.data.map(function (dataValueRow) {
                if (dataValueRow.length !== 1) {
                    logger$2.error('Single data values expected per row');
                }
                return dataValueRow[0];
            });
            processFilterDataResponse(filterModel, valueSearchQuery, scalarDataValues, showRelevantValues);
        }
    });
}
/**
 * filters values that exist in system for the column used to filter.
 * @param {FilterModel} filterModel
 * @param {Array[*]} values
 * @returns {Array[*]}
 */
function filterValuesMatchingFilterColumnValues(filterModel, values) {
    if (!filterModel) {
        logger$2.error('filterValuesMatchingFilterColumnValues called with empty filter model');
        return;
    }
    if (!values) {
        logger$2.error('filterValuesMatchingFilterColumnValues called with empty values');
        return;
    }
    if (!values.length) {
        return $q.when([]);
    }
    let filterExpression = new SimpleFilterExpression(filterModel.getColumn(), values, filterOperators.IN);
    let userAction = new UserAction(UserAction.FETCH_FILTER_DATA);
    return dataService.getDataForViz(filterModel.getContainingAnswerModel(), filterModel, null, true, filterExpression).
        then(function (response) {
        let vizData = response.data;
        let dataArray = vizData.data.
            reduce(function (a, b) {
            return a.concat(b);
        }, []);
        let processedDataArray = dataArray.
            map(function (value) {
            return (typeof value === 'string') ? value.toLowerCase().trim() : value;
        });
        return processedDataArray;
    });
}
/**
 * Searches for a column value that exactly matches valueSearchQuery (ignoring case), and returns
 * that value if it is found (properly cased)
 *
 * @param {FilterModel} filterModel
 * @param {String} valueSearchQuery
 *
 * @returns {Promise} resolves to the exact value (properly cased), or null
 */
function filterColumnGetExactValue(filterModel, valueSearchQuery, showRelevantValues) {
    let equalsFilterExpression;
    // TODO(Jasmeet): SCAL-13458 Handling of empty filter values and nulls in UI
    // Update the implementation when we have resolution on the ticket.
    if (!valueSearchQuery) {
        return $q.when(null);
    }
    equalsFilterExpression = new SimpleFilterExpression(filterModel.getColumn(), valueSearchQuery, filterOperators.EQUALS);
    return dataService.getDataForViz(filterModel.getContainingAnswerModel(), filterModel, {
        showAllValues: !showRelevantValues
    }, true, equalsFilterExpression)
        .then((response) => {
        let data = response.data;
        if (data && data.data && data.data.length === 1) {
            return data.data[0][0];
        }
        else {
            return null;
        }
    });
}
/**
 * Checks if a column value exists that exactly matches valueSearchQuery (ignoring case)
 *
 * @param {FilterModel} filterModel
 * @param {String} valueSearchQuery
 *
 * @returns {Promise} resolves to a boolean indicating whether an exact match was found
 */
function filterColumnContainsValue(filterModel, valueSearchQuery, showRelevantValues) {
    return filterColumnGetExactValue(filterModel, valueSearchQuery, showRelevantValues)
        .then(value => {
        return (value !== null);
    });
}
/**
 *
 * @param {VisualizationColumnModel} columnModel
 * @param {VisualizationModel} vizModel
 * @param {AnswerSageClient} sageClient
 * @returns {Promise}
 */
function getMatchingFilterModel(columnModel, vizModel, sageClient) {
    let filterModel = vizModel.getMatchingFilterModel(columnModel);
    if (!filterModel) {
        logger$2.debug('No filter model in answer corresponding to column: ', columnModel.getId());
        // make async call and resolve the promise when done.
        return fetchNewFilterModel(columnModel, vizModel.getContainingAnswerModel(), sageClient);
    }
    else {
        return $q.when(filterModel);
    }
}
function getRangeDefinitionFromModel(filterModel) {
    let rangeDefinition = new rangeOperatorUtil.RangeDefinitionInLeafOperators();
    if (filterModel.getConditions().length !== 1) {
        logger$2.error('Only one filter row expected in case of range definition');
        return;
    }
    let filterRow = filterModel.getConditions()[0];
    let firstOperator = filterRow.condition.op, filterValues = filterRow.condition.values.map(function (filterValue) {
        return getValue(filterValue);
    });
    if (firstOperator === void 0) {
        logger$2.error('Insufficient information to show a filter', JSON.stringify(filterRow.condition));
        return;
    }
    let isBetweenOperator = rangeOperatorUtil.isBetweenOperator(firstOperator);
    if (isBetweenOperator && filterValues.length !== 2) {
        logger$2.error('Incorrect filter state passed, between op should have 2 operands');
        return;
    }
    if (isBetweenOperator) {
        rangeDefinition = rangeOperatorUtil.mapBetweenToLeafOperators(firstOperator, filterValues);
    }
    else {
        rangeDefinition.setFirstOperator(firstOperator);
        if (filterValues && filterValues.length > 0) {
            rangeDefinition.setFirstOperand(filterValues[0]);
        }
    }
    let filterColumn = filterModel.getColumn();
    if (filterColumn.isDateColumn()) {
        if (!!rangeDefinition.firstOperand) {
            rangeDefinition.firstOperand =
                getFormattedDateFromEpochInSeconds$1(rangeDefinition.firstOperand);
        }
        if (!!rangeDefinition.secondOperand) {
            rangeDefinition.secondOperand =
                getFormattedDateFromEpochInSeconds$1(rangeDefinition.secondOperand);
        }
    }
    return rangeDefinition;
}
function findMatchingFilterModel(logicalColumn, aggr, filterModels) {
    let columnId = logicalColumn.getGuid();
    let matchingFilterModel = filterModels.find(function (filterModel) {
        let formulaIdMatch = true;
        let filterColumn = filterModel.getColumn();
        let filterColumnGuid = filterColumn.getBaseLogicalColumnGuid();
        let filterColumnAggr = filterColumn.getEffectiveAggregateType();
        let filterSageAggr = sage.AggregationType[filterColumnAggr];
        if (filterColumn.isInAnswerFormula()) {
            if (!logicalColumn.isFormula()) {
                formulaIdMatch = false;
            }
            else {
                formulaIdMatch =
                    filterColumn.getBaseFormulaId() === logicalColumn.getFormulaId();
            }
        }
        return columnId === filterColumnGuid
            && filterSageAggr === aggr
            && formulaIdMatch;
    });
    return matchingFilterModel;
}
function getFormattedDateFromEpochInSeconds$1(epoch) {
    if (!epoch) {
        return null;
    }
    let epochInMs = parseInt(epoch, 10) * 1000;
    // Note (sunny): We ignore custom calendar in formatting here
    // because date range filter is not able to handle it.
    return dateUtil_40(epochInMs, dateUtil_2.DATE_SHORT, true);
}
function isCompoundFilter(filterContentJson) {
    return filterContentJson.hasOwnProperty(jsonConstants_1.COMPOUND_INDICES_KEY) &&
        filterContentJson[jsonConstants_1.COMPOUND_INDICES_KEY].length > 0;
}
Provide('filterUtil')({
    triggerFilterCloseEvent,
    clearLoadingIndicator,
    showNewFilterAsLoading,
    showErrorLoadingFilter,
    getFilterTokensByTransform,
    fetchNewFilterModel,
    updateFilterModelWithValues,
    filterValuesMatchingFilterColumnValues,
    filterColumnGetExactValue,
    filterColumnContainsValue,
    getMatchingFilterModel,
    getRangeDefinitionFromModel,
    findMatchingFilterModel,
    isCompoundFilter
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview
 */
function getFilterModelFromAnswerJson(vizJson, filterJson, answermodel) {
    let id = vizJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.ID_KEY];
    let vizContent = vizJson[jsonConstants_1.VIZ_CONTENT_KEY];
    let isCorrupt = vizJson[jsonConstants_1.VIZ_COMPLETE_KEY];
    let filter = new Filter(filterJson);
    let filterRowIndex = isCompoundFilter(vizContent)
        ? vizContent[jsonConstants_1.COMPOUND_INDICES_KEY][0]
        : vizContent[jsonConstants_1.filter.ROW_INDEX];
    let filterRow = filter.getFilterContent().getRowAtIndex(filterRowIndex);
    let filterRows;
    if (isCompoundFilter(vizContent)) {
        filterRows = vizContent[jsonConstants_1.COMPOUND_INDICES_KEY].map((idx) => {
            return filter.getFilterContent().getRowAtIndex(idx);
        });
    }
    else {
        filterRows = [filterRow];
    }
    let vizColumn = filterRow.getColumn();
    // let filterColumn = new AnswerFilterVisualizationColumn(vizColumn);
    let allConditions = filterRows.map(row => row.getFilterConditions());
    let filterConditions = _.flatten(allConditions);
    if (vizColumn.isDateColumn()) {
        return new DateFilterModelV3(vizColumn, filterConditions, isCorrupt, id, answermodel);
    }
    else if (vizColumn.isAttribute()) {
        return new AttributeFilterModelV3(vizColumn, filterConditions, isCorrupt, id, answermodel);
    }
    else {
        return new MeasureFilterModelV3(vizColumn, filterConditions, isCorrupt, id, answermodel);
    }
}
Provide('FilterModelFactory')({
    getFilterModelFromAnswerJson
});

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Manoj Ghosh(manoj.ghosh@thoughtspot.com)
 *
 * @fileoverview Component to display Image powered visualization.
 * customer will provide a R script with custom analysis of a visualization.
 * Sage will create a pinboard having a visualization of type ImageViz with the
 * R script as its content.
 *
 * When displaying the visualization, the data of the visualization will be analysed
 * using the R script and a dynamic PNG will be generated. The image will be sent to blink
 * as base64 encoded img data for display.
 *
 * Example: <img src='data:image/png;base64,iVBORw0KGgoAAA
 * ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
 * //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU
 * 5ErkJggg==' alt='Red dot' />
 *
 * data:[<mime type>][;charset=<charset>][;base64],<encoded data>
 */
let csvParserService = ngRequire('csvParserService');
let UserAction$1 = ngRequire('UserAction');
let VizRdataModel = class VizRdataModel extends VisualizationModel {
    constructor(params) {
        super(params);
        this.alternateText = strings.a3.rdataRenderingFailed;
        this.isReady = false;
        this.media = 'data';
        this.mimeType = 'image';
        this.mimeSubType = 'png';
        this.dataType = 'base64';
        this._vizData = params.vizData;
        if (!!this._vizData) {
            this.updateData(this._vizData);
        }
        this._init();
    }
    getAutoTitle() {
        let columns = this._visualizationColumns;
        let [groupingColumns, valueColumns] = _.partition(columns, (column) => {
            return column['aggrApplied'];
        });
        let getColumnName = (column) => { return column['baseColumnName']; };
        return _([
            groupingColumns.map(getColumnName).join(', '),
            valueColumns.map(getColumnName).join(', ')
        ]).compact().join(` ${strings.BY} `);
    }
    getQuestionText() {
        return '';
    }
    getVizColumns() {
        return [];
    }
    /**
     * This method is called after data of the visualization is fetched
     * from backend. On receiving the new data, we parse the data and update the
     * display models to show the image visualization in blink.
     * @param newVizData
     */
    updateData(newVizData) {
        super.updateData(newVizData);
        // update image display models like img data etc.
        this.updateDisplayModel();
    }
    getMimeSubtype() {
        if (!!this.mimeSubType) {
            return this.mimeSubType;
        }
        else {
            return '';
        }
    }
    getTableModel() {
        return this.tableModel;
    }
    getImageData() {
        return this.formattedImageData;
    }
    getAlternateText() {
        return this.alternateText;
    }
    getRScript() {
        return this._rScript;
    }
    getRTemplateJson() {
        return this._rTemplateJson;
    }
    getColumnBindings() {
        return this._columnBindings;
    }
    getStdErr() {
        return this.stdErr;
    }
    getStdOut() {
        return this.stdOut;
    }
    getException() {
        return this.exception;
    }
    postEventProperties() {
        let userAction = new UserAction$1(UserAction$1.OPEN_CUSTOM_R_VISUALIZATION);
        let eventProps = {};
        eventProps['failureSummaryMessage'] = this.stdErr;
        eventProps['failureMessage'] = this.exception;
        eventProps['objectSubType'] = this.mimeSubType;
        eventProps['objectId'] = this._rTemplateJson ? this._rTemplateJson.header.id : '';
        eventProps['rColBindingCount'] = this._columnBindings.length;
        let failed = !!this.stdErr || !!this.exception;
        eventProps['insightStatus'] = failed ? 'FAILED' : 'SUCCESS';
        collectEvent(userAction, eventProps);
    }
    _init() {
        this.setRenderReady(true);
        this.parseDefinition(this);
    }
    parseDefinition(vizRModel) {
        let vizRJson = vizRModel.getJson();
        if (!vizRJson) {
            return;
        }
        vizRModel._rScript = vizRJson.rScript;
        vizRModel._rTemplateJson = vizRJson.rTemplate;
        vizRModel._columnBindings = vizRJson.columnBindings;
        vizRModel._visualizationColumns = vizRJson.visualizationColumns;
        vizRModel.mimeSubType = vizRJson.outputType;
        if (!!this._vizData) {
            this._visualizationColumns = vizRJson.visualizationColumns.map((c, idx) => {
                // let colData = this.getColumnData(idx);
                return new VisualizationColumnModel(c, idx, null);
            });
        }
    }
    updateDisplayModel() {
        this.parseVizData();
    }
    parseVizData() {
        if (!!this._vizData && !!this._vizData) {
            let rdata = this._vizData;
            this.mimeSubType = rdata.dataType;
            this.dataContent = rdata.data;
            this.stdErr = rdata.stdErr;
            this.stdOut = rdata.stdOut;
            this.exception = rdata.exception;
        }
        if (this.mimeSubType === strings.a3.CSV) {
            let csv = csvParserService.parse(this.dataContent);
            let columns = [];
            let j = 0;
            if (!csv.data || !csv.data[0]) {
                this.tableModel = {
                    data: [],
                    columns: []
                };
                return;
            }
            csv.data[0].forEach(function (value) {
                columns.push({
                    name: value,
                    field: 'f' + j,
                    minWidth: 150,
                    id: 'f' + j
                });
                j++;
            });
            let data = [];
            for (let i = 1; i < csv.data.length; i++) {
                if (csv.data[i].length !== columns.length) {
                    continue;
                }
                let rowData = {};
                for (let k = 0; k < csv.data[i].length; k++) {
                    rowData['f' + k] = csv.data[i][k];
                }
                data.push(rowData);
            }
            this.tableModel = {
                data: data,
                columns: columns
            };
        }
        else if (this.mimeSubType === strings.a3.PNG) {
            // Build data:[<mime type>][;charset=<charset>][;base64],<encoded data>
            let uri = `${this.media}:${this.mimeType}/${this.mimeSubType}`;
            let data = `;${this.dataType},${this.dataContent}`;
            this.formattedImageData = `${uri}${data}`;
        }
        this.isReady = true;
        this.setSecondaryRenderReady(true);
    }
};
VizRdataModel = __decorate([
    Provide('VizRdataModel')
], VizRdataModel);

/**
 * Copyright: ThoughtSpot Inc. 2012-2013
 * Author: Vibhor Nanavati (vibhor@thoughtspot.com)
 * Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview Model for encapsulating table visualization details.
 */
let tableUtil = ngRequire('tableUtil');
let SimpleTableModel = class SimpleTableModel extends VisualizationModel {
    constructor(params) {
        super(params);
        this._vizColumnsMap = this.getVizColumns().reduce((acc, col) => {
            acc[col.getId()] = col;
            return acc;
        }, {});
        this.parseData();
    }
    updateData(vizContent) {
        super.updateData(vizContent);
        this.parseData();
    }
    allowsFormulaAddition() {
        return !this.isPinboardViz();
    }
    hasError() {
        return this._hasError;
    }
    /**
     * @param {string} effectiveColId
     * @return {VisualizationColumnModel}
     */
    getColumn(effectiveColId) {
        return this._vizColumnsMap[effectiveColId];
    }
    getData() {
        if (!this._vizData || !this._vizData.data) {
            return null;
        }
        return this._vizData.data;
    }
    hasNoData() {
        let data = this.getData();
        return !data || data.length === 0;
    }
    isColumnReorderingAllowed() {
        return !this.isPinboardViz() && !this.getIsPBDDViz();
    }
    getDataArray() {
        if (this._vizData) {
            let dataArray = new QueryData(Array.isArray(this._vizData)
                ? this._vizData[0] : this._vizData);
            return [dataArray];
        }
        return [];
    }
    get gridClientState() {
        return this.getUserData(jsonConstants_1.gridConfig.WIDGET_STATE);
    }
    set gridClientState(state) {
        this.setUserData(jsonConstants_1.gridConfig.WIDGET_STATE, state);
    }
    get gridColumnWidthState() {
        return this.getUserData(jsonConstants_1.gridConfig.WIDTH_STATE);
    }
    set gridColumnWidthState(state) {
        this.setUserData(jsonConstants_1.gridConfig.WIDTH_STATE, state);
    }
    get showGridSummaries() {
        return this.getUserData(jsonConstants_1.gridConfig.SHOW_GRID_SUMMARY);
    }
    set showGridSummaries(state) {
        this.setUserData(jsonConstants_1.gridConfig.SHOW_GRID_SUMMARY, state);
    }
    get wrapTableHeader() {
        return this.getUserData(jsonConstants_1.gridConfig.WRAP_TABLE_HEADER);
    }
    set wrapTableHeader(state) {
        this.setUserData(jsonConstants_1.gridConfig.WRAP_TABLE_HEADER, state);
    }
    get gridColumnOrder() {
        return this.getUserData(jsonConstants_1.ORDERED_COLUMN_IDS);
    }
    set gridColumnOrder(orderedColumnIds) {
        this.setUserData(jsonConstants_1.ORDERED_COLUMN_IDS, orderedColumnIds);
    }
    hasMetrics() {
        return this.getVizColumns().some(column => column.getMetricsDefinition() !== null);
    }
    getAutoTitle() {
        let columns = this.getVizColumns();
        let groupingColumns = [];
        let valueColumns = [];
        columns.forEach((column) => {
            if (column.isGroupingColumn()) {
                groupingColumns.push(column);
            }
            else {
                valueColumns.push(column);
            }
        });
        let valueColumnNames = valueColumns.map(function (column) { return column.getName(); })
            .join(', ');
        let groupingColumnNames = groupingColumns.map(function (column) { return column.getName(); })
            .join(', ');
        if (valueColumnNames && groupingColumnNames) {
            return valueColumnNames + ' ' + strings.BY + ' ' + groupingColumnNames;
        }
        else if (valueColumnNames) {
            return valueColumnNames;
        }
        else if (groupingColumnNames) {
            return groupingColumnNames;
        }
        else {
            return '';
        }
    }
    toSlickgridTableInfo() {
        return new SlickgridTableModel(this);
    }
    isColAttribute(column) {
        return column.isEffectivelyNonNumeric() || column.isGroupingColumn();
    }
    parseData() {
        let vizContent = this.getJson();
        let processingProfileMsg = `${logger_2.TABLE_VIZ_PROCESSING_PREAMBLE}\'${this.getName()}\'`;
        this._logger.time(processingProfileMsg);
        if (!this._vizData
            || !vizContent
            || !vizContent.columns) {
            this._hasError = true;
            return;
        }
        this._hasError = false;
        this.getVizColumns().forEach((vizCol) => {
            let dataRowIndex = vizCol.getDataRowIndex();
            let colData = this.getColumnData(dataRowIndex);
            vizCol.setData(colData);
        });
        this._logger.timeEnd(processingProfileMsg);
    }
};
SimpleTableModel = __decorate([
    Provide('SimpleTableModel')
], SimpleTableModel);
/**
 * Converts tableModel to basic slick grid model and configuration.
 * This is needed for leaf level data.
 * @param tableModel
 * @private
 * @constructor
 */
class SlickgridTableModel {
    constructor(parentTableModel) {
        this.parentTableModel = parentTableModel;
        this._logger = logger_3('SlickGridTableLogger');
        if (!parentTableModel) {
            this._logger.error('Constructing slickgrid table model without underlying model');
            return;
        }
        let parentColumns = parentTableModel.getVizColumns(), dataFormatter = angular.bind(this, this.dataFormatter), getTooltipForColumnHeader = angular.bind(this, this.getTooltipForColumnHeader), columns = parentColumns.map((vizCol, i) => {
            return {
                id: vizCol.getId(),
                name: vizCol.getName(),
                headerCssClass: vizCol.isNumeric() ? 'bk-numeric-column-header' : '',
                cssClass: vizCol.isNumeric() ? 'bk-numeric-column' : '',
                field: `f${i}`,
                formatter: dataFormatter,
                toolTip: '',
                getTooltipForColumnHeader: getTooltipForColumnHeader
            };
        });
        let data = parentTableModel.getData().map((row) => {
            let rowWithField = {};
            row.forEach((val, i) => {
                rowWithField[`f${i}`] = val;
            });
            return rowWithField;
        });
        this.model = {
            columns: columns,
            data: data
        };
        this.config = {};
    }
    dataFormatter(row, cell, value, columnDef) {
        let column = this.parentTableModel.getColumn(columnDef.id);
        if (!column) {
            return null;
        }
        return tableUtil.getFormattedValue(column, value);
    }
    getTooltipForColumnHeader(columnDef) {
        let column = this.parentTableModel.getColumn(columnDef.id);
        if (!column) {
            return '';
        }
        return column.getSourcesTooltip();
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2017
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Visualization model for the viz cluster.
 */
let VizClusterModel = class VizClusterModel extends VisualizationModel {
    constructor(params) {
        super(params);
        this.clusteredVisualizations = [];
        this.vizJson = params.vizJson;
    }
    resolveMembers(vizMap) {
        this.vizJson[jsonConstants_1.VIZ_CONTENT_KEY][jsonConstants_1.REF_VIZ_IDS_KEY].forEach((id) => {
            this.addVisualization(vizMap[id]);
        });
        this._isRenderReady = true;
        this._isSecondaryRenderReady = true;
    }
    getQuestionText() {
        return '';
    }
    getVizColumns() {
        return [];
    }
    getReferencedVizIds() {
        return this.clusteredVisualizations.map((viz) => {
            return viz.getId();
        });
    }
    addVisualization(visualizationModel) {
        this.clusteredVisualizations.push(visualizationModel);
    }
};
VizClusterModel = __decorate([
    Provide('VizClusterModel')
], VizClusterModel);

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Shashank Singh (sunny@thoughtspot.com)
 *
 * @fileoverview Data model for headline visualization column.
 */
let HeadlineColumnModel = class HeadlineColumnModel extends VisualizationColumnModel {
    constructor(columnDefinition, dataRowIndex, columnData, aggrs, possibleAggrs) {
        super(columnDefinition, dataRowIndex, columnData);
        this.aggrs = aggrs;
        this.possibleAggrs = possibleAggrs;
    }
    isEffectivelyPercent() {
        if (!VisualizationColumnModel.prototype.isEffectivelyPercent.call(this)) {
            return false;
        }
        const aggrType = this.aggrs[0];
        return !isDimensionlessAggregationType(aggrType);
    }
};
HeadlineColumnModel = __decorate([
    Provide('HeadlineColumnModel')
], HeadlineColumnModel);

/**
 * Copyright: ThoughtSpot Inc. 2012-2013
 * Author: Vibhor Nanavati (vibhor@thoughtspot.com)
 *
 * @fileoverview Model for encapsulating headline visualization details.
 */
const _logger$2 = logger_3('headline-model');
let HeadlineModel = class HeadlineModel extends VisualizationModel {
    constructor(params) {
        super(params);
        this.params = params;
        this._answerModel = params.answerModel || null;
        this._columns = this.getJson().columns.map((col) => {
            return col.column;
        });
        this.init();
    }
    static hasError() {
        return false;
    }
    getVisualizedColumns() {
        return [this.getVizColumns()[0]];
    }
    hasNoData() {
        return !this._vizData || !this._vizData.data || !this._vizData.data.length;
    }
    updateData(vizData) {
        super.updateData(vizData);
        this.init();
    }
    getColumns() {
        return this._columns;
    }
    getColumn() {
        return this._column;
    }
    getColumnName() {
        return this._column.getName();
    }
    getHeadlineTeslaTitle() {
        return this._column.getName(false);
    }
    getSupportedSummaryTypes() {
        return this._column.getSupportedAggregationTypes();
    }
    getAggregateSize() {
        let vizJson = this.getJson();
        if (!vizJson.columns.length) {
            return 0;
        }
        if (this._doesAggrExists) {
            return vizJson.columns[0].aggrs.length;
        }
        return 0;
    }
    getAggregateLabel(index) {
        let type = this.getAggregateType(index);
        if (_.isNull(type)) {
            return '';
        }
        return getAggregateLabel(type);
    }
    addAggregate(aggrType) {
        let vizJson = this.getJson();
        if (this._doesAggrExists) {
            vizJson.columns[0].aggrs.push(aggrType);
        }
    }
    getAggregateType(index = 0) {
        if (this.getAggregateSize() <= 0) {
            return null;
        }
        let vizJson = this.getJson();
        if (this._doesAggrExists && vizJson.columns[0].aggrs.length) {
            return vizJson.columns[0].aggrs[index];
        }
    }
    setAggregateType(index = 0, type, expandIfNeeded) {
        if (this.getAggregateSize() <= index) {
            if (!expandIfNeeded) {
                _logger$2.error('Can not set aggregate type for out of bound index', index);
                return;
            }
            this.addAggregate(type);
            return;
        }
        let vizJson = this.getJson();
        if (this._doesAggrExists && vizJson.columns[0].aggrs.length) {
            vizJson.columns[0].aggrs[index] = type;
        }
    }
    removeAggregate(index) {
        let vizJson = this.getJson();
        if (this._doesAggrExists && index >= 0 && index < vizJson.columns[0].aggrs.length) {
            vizJson.columns[0].aggrs.splice(index, 1);
        }
        let data = this._vizData.data;
        if (data && data.length && index >= 0 && index < data.length) {
            return data.splice(index, 1);
        }
    }
    getAggregates() {
        let vizJson = this.getJson();
        if (this._doesAggrExists) {
            return vizJson.columns[0].aggrs;
        }
        return [];
    }
    getPossibleAggregates(index) {
        let vizJson = this.getJson();
        return vizJson.columns && vizJson.columns[index] && vizJson.columns[index].possibleAggrs
            ? vizJson.columns[index].possibleAggrs
            : [];
    }
    createVizColumns() {
        let vizModel = this;
        let aggregates = this.getAggregates();
        return this.getColumns().map(function (c, idx) {
            let colData = vizModel.getColumnData(idx);
            let possibleAggrs = vizModel.getPossibleAggregates(idx);
            return new HeadlineColumnModel(c, idx, colData, aggregates, possibleAggrs);
        });
    }
    getDataValueUnformatted(dataValueIndex) {
        if (!this.getColumns()) {
            return null;
        }
        let data = this._vizData.data;
        dataValueIndex = dataValueIndex || 0;
        if (data && data.length && data[dataValueIndex] && data[dataValueIndex].length) {
            return data[dataValueIndex][this._column.getDataRowIndex()];
        }
        return null;
    }
    isTableSummary() {
        let vizJson = this.getJson();
        if (!vizJson.columns.length) {
            return false;
        }
        if (vizJson.columns && vizJson.columns.length) {
            return vizJson.columns[0].tableSummary;
        }
        return false;
    }
    shouldShowSummaryAggregates() {
        if (this.getColumn().isDateColumn() || this.getColumn().isTimeColumn()) {
            return false;
        }
        return !!this.getJson().showSummaryAggrs;
    }
    getTitle() {
        if (!this.isPinboardViz()) {
            let skipPrefix = !this.isTableSummary();
            return this.getColumn().getName(skipPrefix);
        }
        return super.getTitle();
    }
    isAggregationSame(headlineModel) {
        if (!headlineModel
            || this.getAggregateSize() !== headlineModel.getAggregateSize()) {
            return false;
        }
        for (let i = 0; i < this.getAggregateSize(); ++i) {
            if (this.getAggregateLabel(i) !== headlineModel.getAggregateLabel(i)) {
                return false;
            }
        }
    }
    isDataNodeEmpty() {
        // Callosum models headline such that multiple column aggregations
        // can be sent into a single headline. That is not the case currently however and
        // so we always look at the first summary.
        let totalSummaries = this.getAggregateSize();
        // Furthermore, for the same column,
        // callosum can send multiple summaries (one for each aggregation type).
        for (let i = 0; i < totalSummaries; ++i) {
            let value = this.getDataValueUnformatted(i);
            if (_.isUndefined(value) || _.isNull(value)) {
                return true;
            }
        }
        return false;
    }
    shouldBeSuppressedInUI() {
        if (!flags.getValue(flags.BLINK_FLAGS.suppressNaHeadlines.name)) {
            return false;
        }
        return this.isDataNodeEmpty();
    }
    getDataValueFormatted(dataValueIndex) {
        let dataValue = this.getColumn().convertValueFromBackend(this.getDataValueUnformatted(dataValueIndex), this.getAggregateType(dataValueIndex));
        if (_.isNull(dataValue)) {
            return null;
        }
        // we don't use the decimal precision of column for headline columns as it
        // does not make sense for 1 or 2 data points as in headline data
        return '' + this._column.getDataFormatter(this.getAggregateType(dataValueIndex))(dataValue);
    }
    init() {
        if (!this.getColumns() || !this.getColumns().length) {
            throw new Error('Column definition missing in headline viz');
        }
        this._column = this.getVizColumns()[0];
        this._column.setData(this._vizData && this._vizData.data ? this._vizData.data[0] : []);
        this._doesAggrExists = this.getJson().columns &&
            this.getJson().columns.length && this.getJson().columns[0].aggrs;
        if (this.getAggregateSize() > 0 && !this.hasNoData() &&
            (this._vizData.data.length !== this.getAggregateSize())) {
            throw new Error('Number of headline data values doesn\'t match number of aggregates');
        }
    }
};
HeadlineModel = __decorate([
    Provide('HeadlineModel')
], HeadlineModel);

/**
 * Copyright: ThoughtSpot Inc. 2012-2013
 * Author: Joy Dutta (joy@thoughtspot.com),
 * Stephane Kiss (stephane@thoughtspot.com),
 * Vibhor Nanavati (vibhor@thoughtspot.com)
 *
 * @fileoverview Data model for answer (report book)
 * AnswerSheetModel encapsulates the details of an answer sheet data returned
 * from Callosum and exposes model methods to
 * access Visualization models.
 */
let appClientStateService = ngRequire('appClientStateService');
let util$7 = ngRequire('util');
let _logger$3 = logger_3('answer-sheet-model');
const referencableVizTypes = [
    'CHART',
    'TABLE'
];
/**
 * @constructor
 * @param {Object} params See the comment for the VisualizationModel constructor.
 */
class AnswerSheetModel {
    constructor(params) {
        let sheetJson = params.sheetJson, sheetData = params.sheetData, objectResolver = params.objectResolver, answerModel = params.answerModel;
        if (!sheetJson) {
            throw new Error('Answer sheet Json expected in AnswerSheetModel constructor');
        }
        this.stabilizeReferencableVizIds(sheetJson, sheetData);
        /**
         * @type {Object}
         * @private
         */
        this._sheetJson = sheetJson;
        /**
         * @type {Object}
         * @private
         */
        this._sheetData = sheetData;
        /**
         * @type {Object}
         * @private
         */
        this._objectResolver = objectResolver;
        /**
         *
         * @type {AnswerModel}
         * @private
         */
        this._answerModel = answerModel;
        /**
         * @type {string}
         * @private
         */
        this._sheetGuid = this.getSheetGuid(sheetJson);
        this._errorPreamble = 'Answer sheet ' + this._sheetGuid;
        if (!sheetJson[jsonConstants_1.SHEETCONTENT_KEY]) {
            throw new Error(this._errorPreamble + ' is missing sheet content');
        }
        /**
         * An object hash storing vizContent+header json by their guids.
         * @type {Object}
         * @private
         */
        this._visualizationsMap = {};
        this._visualizationsArray = [];
        /**
         * A map from filter column effective id -> corresponding filter model.
         * Only to be used within context of a single answer and not cross the
         * callosum boundary i.e. do not use
         * a sage token id to lookup the filter.
         *
         * @type {Map.<string, Object>}
         * @private
         */
        this._colEffectiveIdToFilterModels = {};
        this._parseVisualizations();
    }
    /**
     * @return {string} GUID referring to this answer sheet.
     */
    getId() {
        return this._sheetGuid;
    }
    /**
     * @param GUID to be set. Note that this method is only used by test and should not
     * be used otherwise.
     */
    setId(id) {
        this._sheetGuid = id;
    }
    /**
     * @return {string}setD
     * Returns the type of answer sheet (one of QUESTION_ANSWER or PINBOARD).
     * On error it returns ''.
     */
    getSheetType() {
        if (!this._sheetJson || !this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY] ||
            !this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.SHEET_CONTENT_TYPE_KEY]) {
            return '';
        }
        return this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.SHEET_CONTENT_TYPE_KEY];
    }
    hasDataForViz(vizId) {
        return this._sheetData
            && this._sheetData[jsonConstants_1.VIZ_DATA_KEY]
            && this._sheetData[jsonConstants_1.VIZ_DATA_KEY].hasOwnProperty(vizId);
    }
    setDataForViz(vizId, vizType, vizData) {
        if (!this._sheetData) {
            this._sheetData = {};
        }
        if (!this._sheetData[jsonConstants_1.VIZ_DATA_KEY]) {
            this._sheetData[jsonConstants_1.VIZ_DATA_KEY] = {};
        }
        let vizDataNode = this._sheetData[jsonConstants_1.VIZ_DATA_KEY][vizId] = {};
        if (vizType.toLowerCase() === jsonConstants_1.VIZ_TYPE_CHART) {
            vizDataNode[jsonConstants_1.CHART_DATA_KEY] = vizData;
        }
        else {
            vizDataNode[jsonConstants_1.DATA_SETS_KEY] = {};
            vizDataNode[jsonConstants_1.DATA_SETS_KEY][vizType] = vizData;
        }
    }
    clearDataForViz(vizId) {
        if (!this._sheetData || !this._sheetData[jsonConstants_1.VIZ_DATA_KEY]) {
            return;
        }
        delete this._sheetData[jsonConstants_1.VIZ_DATA_KEY][vizId];
    }
    getSheetData() {
        return this._sheetData;
    }
    updateVizData(sheetData) {
        this._sheetData = this._sheetData || {};
        this._sheetData[jsonConstants_1.VIZ_DATA_KEY] = sheetData[jsonConstants_1.VIZ_DATA_KEY];
        this._parseVisualizations();
    }
    /**
     * Gets the question object from the json
     */
    getQuestionInfo() {
        let questionJson = this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.QUESTION_KEY];
        return new QuestionModel(questionJson);
    }
    /**
     * @return {string}
     * Returns the answer sheet name
     */
    getName() {
        return this._sheetJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.NAME_KEY];
    }
    _needsVizIdStabilization() {
        return this.getSheetType() === 'QUESTION';
    }
    _trackVizId(vizType, vizId) {
        return;
        if (!referencableVizTypes.includes(vizType) || !this._needsVizIdStabilization()) {
            return;
        }
        let clientState = appClientStateService.getClientState(this.getId()), trackedVizIds;
        if (!clientState.trackedVizIds) {
            clientState.trackedVizIds = {};
        }
        trackedVizIds = clientState.trackedVizIds;
        // If there are more than one viz of same type, we use the last one.
        // This is okay because we only do this in
        // answer and only for chart and table viz types.
        trackedVizIds[vizType] = vizId;
    }
    _addToColumnGuidToFilterModelMap(filterModel) {
        let filterColumn = filterModel.getColumn();
        let self = this;
        // Put the output guids with the same logcial key.
        filterColumn.getOutputIdsWithMatchingLogicalKey().forEach(function (id) {
            self._colEffectiveIdToFilterModels[id] = filterModel;
        });
        // Putting the outputGuid of the column itself to the map as well.
        self._colEffectiveIdToFilterModels[filterModel.getColumn().getId()] = filterModel;
    }
    _addVisualization(visualizationModel) {
        this._visualizationsMap[visualizationModel.getId()] = visualizationModel;
        this._visualizationsArray = _.values(this._visualizationsMap);
    }
    /**
     * Parses the visualizations list in the sheet json into VisualizationModel
     * object and populates the guid based hash
     * of visualization objects.
     * @private
     */
    _parseVisualizations() {
        // TODO(Jasmeet): Move the logic of object creation to a VisualizationModelFactory.
        let visualizations = this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.VISUALIZATIONS_KEY];
        if (!visualizations) {
            _logger$3.warn(this._errorPreamble + ' is missing visualizations spec');
            return;
        }
        if (!this._sheetData || !this._sheetData[jsonConstants_1.VIZ_DATA_KEY]) {
            _logger$3.warn(this._errorPreamble + ' is missing sheet vizData spec');
            return;
        }
        let answerModel = this._answerModel, vizs = visualizations.map(function (vizJson) {
            return new VisualizationModel({
                vizJson: vizJson,
                answerModel: answerModel
            });
        }), vizDataContainer = this._sheetData[jsonConstants_1.VIZ_DATA_KEY], vizDataSets = vizs.map(function (viz) {
            if (viz.isCorrupted()) {
                return null;
            }
            // If the viz is configured to load data lazily, allow the answer
            // sheet to build the visualization model
            // to include some partial info (like filter title).
            if (viz.isDataOnDemand()) {
                return null;
            }
            if (!vizDataContainer.hasOwnProperty(viz.getId())) {
                return null;
            }
            let vizType = viz.getVizType();
            if (vizType.toLowerCase() === jsonConstants_1.VIZ_TYPE_CHART) {
                return vizDataContainer[viz.getId()][jsonConstants_1.CHART_DATA_KEY] || null;
            }
            let dataSets = vizDataContainer[viz.getId()][jsonConstants_1.DATA_SETS_KEY] || null;
            if (!dataSets) {
                return null;
            }
            return dataSets[viz.getVizType()];
        });
        let mustVisualizeColumns;
        if ((this.getSageContext())) {
            mustVisualizeColumns = this.getSageContext()
                .getTables()[this.getSageContextIndex()]
                .getMustVisualizeColumnGuids();
        }
        // make one pass over all the visualization data, creating
        // Visualizations and collating columns information
        // from all the visualizations. we need to do this as at
        // this moment no single visualization has info about
        // all the columns. For example, table does not have the
        // filter columns but only table has cardinality information
        let allColumnsByEffectiveId = {}, vizTypesForColumnId = {};
        vizs.forEach((viz, vizIndex) => {
            if (viz.isCorrupted()) {
                return;
            }
            let cols = viz.getColumns();
            //viz does not have columns info
            if (!cols) {
                return;
            }
            let vizData = vizDataSets && vizDataSets[vizIndex], vizType = viz.getVizType();
            cols.forEach(function (colJson, colIndex) {
                if (!colJson) {
                    return;
                }
                //the structure of colJson is different for headline compared to table
                // We ignore columns from headlines as they are supposed to be copies
                // of table columns.
                if (vizType === 'HEADLINE') {
                    return;
                }
                let vizCol = new VisualizationColumnModel(colJson, -1), effectiveId = vizCol.getId();
                vizCol.isMustVisualize = mustVisualizeColumns
                    && mustVisualizeColumns.has(effectiveId);
                if (!_.has(vizTypesForColumnId, effectiveId)) {
                    vizTypesForColumnId[effectiveId] = [];
                }
                vizTypesForColumnId[effectiveId].push(vizType);
                if (!_.has(allColumnsByEffectiveId, effectiveId)) {
                    allColumnsByEffectiveId[effectiveId] = vizCol;
                }
            });
        });
        let allColumns = Object.values(allColumnsByEffectiveId);
        Object.keys(allColumnsByEffectiveId).forEach(function (colId) {
            let sourceVizTypes = vizTypesForColumnId[colId];
            //a column is a "filter column" iff its only source is a filter viz
            if (sourceVizTypes.length === 1 && sourceVizTypes[0] === 'FILTER') {
                let col = allColumnsByEffectiveId[colId];
                col.setIsFilterColumn(true);
            }
        });
        let resolvedObjects = getVisualizationAnswerModels(this._objectResolver, this._answerModel);
        let colorIndex = 0;
        let clusterVizs = [];
        for (let i = 0; i < vizs.length; ++i) {
            let viz = vizs[i], vizJson = visualizations[i];
            let data = vizDataSets && vizDataSets[i];
            switch (viz.getVizType()) {
                case jsonConstants_1.VIZ_TYPE_CHART.toUpperCase():
                    try {
                        let chartModel = new ChartModel({
                            vizJson: vizJson,
                            answerModel: this._answerModel,
                            allColumns: allColumns
                        });
                        chartModel.updateData(data);
                        this._addVisualization(chartModel);
                        this._trackVizId('CHART', viz.getId());
                    }
                    catch (e) {
                        _logger$3.error('error in creating a chart model', e);
                    }
                    break;
                case jsonConstants_1.VIZ_TYPE_TABLE.toUpperCase():
                    try {
                        let tableModel = new SimpleTableModel({
                            vizJson: vizJson,
                            vizData: data,
                            answerModel: this._answerModel
                        });
                        this._addVisualization(tableModel);
                        this._trackVizId('TABLE', viz.getId());
                    }
                    catch (e) {
                        _logger$3.error('error in creating a table model', e);
                    }
                    break;
                case jsonConstants_1.VIZ_TYPE_R_ANALYSIS.toUpperCase():
                    try {
                        let rdataModel = new VizRdataModel({
                            vizJson: vizJson,
                            vizData: data,
                            answerModel: this._answerModel
                        });
                        this._addVisualization(rdataModel);
                        this._trackVizId('R_ANALYSIS_VIZ', viz.getId());
                    }
                    catch (e) {
                        _logger$3.error('error in creating a image model', e);
                    }
                    break;
                case jsonConstants_1.VIZ_TYPE_HEADLINE.toUpperCase():
                    try {
                        let hModel = new HeadlineModel({
                            vizJson: vizJson,
                            vizData: data,
                            answerModel: this._answerModel
                        });
                        this._trackVizId('HEADLINE', viz.getId());
                        this._addVisualization(hModel);
                    }
                    catch (e) {
                        _logger$3.error('error in creating a headline model', e);
                    }
                    break;
                case jsonConstants_1.VIZ_TYPE_FILTER.toUpperCase():
                    try {
                        let filterModel = getFilterModelFromAnswerJson(vizJson, _.get(this._sheetJson, 'sheetContent.filter', null), this._answerModel);
                        this._addVisualization(filterModel);
                        this._addToColumnGuidToFilterModelMap(filterModel);
                    }
                    catch (e) {
                        _logger$3.error('error in creating a filter model', e);
                    }
                    break;
                case jsonConstants_1.VIZ_TYPE_PINBOARD.toUpperCase():
                    try {
                        let referencedAnswerModel = resolvedObjects[vizJson.vizContent.refVizId];
                        let pinboardViz = new PinboardVizModel({
                            vizJson: vizJson,
                            pinboardModel: this._answerModel,
                            referencedAnswerModel: referencedAnswerModel,
                            refVizId: vizJson.vizContent.refVizId
                        });
                        let referencedViz = pinboardViz.getReferencedVisualization();
                        if (!referencedViz) {
                            _logger$3.error('Referenced viz not found in pinboard viz', pinboardViz);
                            break;
                        }
                        if (referencedViz.getVizType() === 'CHART') {
                            referencedViz.setContextOptions({
                                colorIndex: colorIndex++
                            });
                        }
                        this._addVisualization(pinboardViz);
                    }
                    catch (e) {
                        _logger$3.error('error in creating a pinboard viz model', e);
                    }
                    break;
                case jsonConstants_1.VIZ_TYPE_GENERIC.toUpperCase():
                    try {
                        let referencedGenericViz = resolveReferencedGenericVisualization(viz.getVizSubtype(), vizJson, this._answerModel);
                        let pinboardVizGeneric = new PinboardVizModel({
                            vizJson: vizJson,
                            pinboardModel: this._answerModel,
                            referencedModel: referencedGenericViz
                        });
                        if (!!pinboardVizGeneric) {
                            let referencedVizGeneric = pinboardVizGeneric
                                .getReferencedVisualization();
                            if (!referencedVizGeneric) {
                                if (!viz.isCorrupted()) {
                                    _logger$3.error('A valid pinboard visualization found ' +
                                        'without a referenced visualization', vizJson);
                                    return;
                                }
                            }
                            this._addVisualization(pinboardVizGeneric);
                        }
                    }
                    catch (e) {
                        _logger$3.error('error in creating a pinboard viz model', e);
                    }
                    break;
                case jsonConstants_1.VIZ_TYPE_CLUSTER:
                    let clusterViz = new VizClusterModel({
                        vizJson: vizJson,
                        vizMap: this._visualizationsMap,
                        answerModel: this._answerModel
                    });
                    let pbViz = new PinboardVizModel({
                        vizJson: vizJson,
                        referencedAnswerModel: this._answerModel,
                        referencedModel: clusterViz
                    });
                    this._addVisualization(pbViz);
                    clusterVizs.push(clusterViz);
                default:
                    break;
            }
        }
        // As part of the viz model parsing, we may have combined 2
        // into one and marked the other to be removed.
        this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.VISUALIZATIONS_KEY] =
            visualizations.filter(function (v) {
                return v !== null;
            });
        // Allow cluster visualizations to resolve the referenced vizs.
        let vizMap = this._visualizationsMap;
        clusterVizs.forEach(function (clusterViz) {
            clusterViz.resolveMembers(vizMap);
        });
    }
    /**
     *
     * @param {Object} vizJson
     */
    addVisualization(vizJson) {
        this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.VISUALIZATIONS_KEY].push(vizJson);
    }
    removeVisualization(vizModel) {
        let vizIdToRemove = vizModel.getId();
        this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.VISUALIZATIONS_KEY] =
            this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.VISUALIZATIONS_KEY].filter(function (viz) {
                return viz.header.id !== vizIdToRemove;
            });
        delete this._visualizationsMap[vizIdToRemove];
        _.remove(this._visualizationsArray, function (vM) {
            return vM.getId() === vizIdToRemove;
        });
    }
    hasFilter() {
        return this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY] &&
            this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY].filter &&
            this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY].filter.header;
    }
    /**
     *
     * @param {Visualization.Column} column
     * @param {Object=} newFilterGuid
     * @return {number} Total number of filter rows after this addition. -1 in case of errors.
     *
     */
    addFilter(column, newFilterGuid) {
        let sheetContent = this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY];
        if (!sheetContent) {
            _logger$3.error('Can not add filter to empty answer sheet', this._sheetJson);
            return -1;
        }
        if (!sheetContent.filter) {
            if (newFilterGuid === null) {
                _logger$3.error('Can not add a new filter without a valid guid');
                return -1;
            }
            sheetContent.filter = {
                filterContent: {
                    type: 'SIMPLE',
                    rows: []
                },
                header: {
                    id: newFilterGuid,
                    name: 'User added filter',
                    owner: this.getId()
                }
            };
        }
        if (!sheetContent.filter.filterContent || !sheetContent.filter.filterContent.rows) {
            _logger$3.error('Invalid filter spec in the answer sheet', this._sheetJson);
            return -1;
        }
        let oper = 'IN';
        if (column.isMeasure() || column.isDateColumn()) {
            oper = 'GE';
        }
        sheetContent.filter.filterContent.rows.push({
            column: column.getJson(),
            oper: oper
        });
        return sheetContent.filter.filterContent.rows.length;
    }
    /**
     *
     * @param {number} filterRow
     * @return {Object} removed filter definition
     *
     */
    removeFilter(filterRow) {
        let sheetContent = this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY];
        if (!sheetContent || !sheetContent.filter || !sheetContent.filter.filterContent ||
            !sheetContent.filter.filterContent.rows ||
            sheetContent.filter.filterContent.rows.length <= filterRow) {
            _logger$3.error('Answer sheet is empty or does not contain the specified filter row', this._sheetJson, filterRow);
            return null;
        }
        let removedFilter = sheetContent.filter.filterContent.rows.splice(filterRow, 1);
        if (sheetContent.filter.filterContent.rows.length <= 0) {
            delete sheetContent.filter;
        }
        this._visualizationsArray.forEach(function (viz) {
            if (viz.getVizType() !== 'FILTER' || viz.getJson().rowIndex === filterRow) {
                return;
            }
            viz.updateRowIndexAfterRemoving(filterRow);
        });
        return removedFilter;
    }
    /**
     * @return {Object} An object containing the visualizations for the answer sheet
     * TODO(mahesh) Rename getVisualizations() to getVisualizationsMap() in next commit
     * for clarity and consistency also just use getVisualizationsArray() at places
     * where we are just using the first element using vizMap[Obejct.keys[0]].
     */
    getVisualizations() {
        return this._visualizationsMap;
    }
    getVisualizationsArray() {
        return this._visualizationsArray;
    }
    /**
     * @param {string} type - if null or empty, then return all visualizations
     * @returns {Array} An array containing the visualizations for
     * the given type for the answer sheet
     */
    getVisualizationsArrayOfType(type) {
        return this._visualizationsArray.filter(function (viz) {
            return viz.getVizType() === type;
        });
    }
    /**
     * @param {string} type - if null or empty, then return all visualizations
     * @returns {Array} An array containing the pinboard visualizations
     * for the given type for the answer sheet
     */
    getPinboardVisualizationsArrayOfType(type) {
        return this._visualizationsArray.filter(function (viz) {
            return viz.getReferencedVisualization().getVizType() === type;
        });
    }
    /**
     * @param {string} type - if null or empty, then return all visualizations
     * @returns {Object} An object containing the visualizations for the
     * given type for the answer sheet
     * TODO (mahesh) rename this function to getVisualizationsMapOfType in next commit for clarity.
     */
    getVisualizationsOfType(type) {
        let vizsOfType = this.getVisualizationsArrayOfType(type);
        let map = vizsOfType.reduce(function (map, viz) {
            map[viz.getId()] = viz;
            return map;
        }, {});
        return map;
    }
    /**
     * @returns {Array.<TableModel>}
     * TODO (mahesh) rename this to getTableVisualizationsArray() in next commit.
     */
    getTableVisualizations() {
        return this.getVisualizationsArrayOfType(jsonConstants_1.vizType.TABLE);
    }
    /**
     * @returns {Array.<VizRdataModel>}
     */
    getRAnalysisVisualizations() {
        return this.getVisualizationsArrayOfType(jsonConstants_1.vizType.R_ANALYSIS);
    }
    /**
     * @returns {Array.<FilterModel>}
     * TODO (mahesh) rename this to getFilterVisualizationsArray() in next commit.
     */
    getFilterVisualizations() {
        return this.getVisualizationsArrayOfType(jsonConstants_1.vizType.FILTER);
    }
    /**
     * @returns {Array.<ChartModel>}
     * TODO (mahesh) rename this to getChartVisualizationsArray() in next commit.
     */
    getChartVisualizations() {
        return this.getVisualizationsArrayOfType(jsonConstants_1.vizType.CHART);
    }
    getHeadlineVisualizations() {
        return this.getVisualizationsArrayOfType(jsonConstants_1.vizType.HEADLINE);
    }
    getReferencedVisualizationsArrayOfType(type) {
        return this._visualizationsArray.filter(function (viz) {
            let vizType = viz.getVizType();
            if (vizType === jsonConstants_1.vizType.PINBOARD_VIZ) {
                vizType = viz.getReferencedVisualization().getVizType();
            }
            return vizType === type;
        });
    }
    getReferencedTableVisualizationsArray() {
        return this.getReferencedVisualizationsArrayOfType(jsonConstants_1.vizType.TABLE);
    }
    getReferencedFilterVisualizationsArray() {
        return this.getReferencedVisualizationsArrayOfType(jsonConstants_1.vizType.FILTER);
    }
    /**
     * Returns whether the answer sheet is empty
     *
     * @return {boolean}  True if the answer sheet contains no visualizations
     */
    isEmpty() {
        return this._visualizationsArray.length === 0;
    }
    /**
     * @return {Array} An array of objects containing for each viz its id, and optionnaly
     * position and size information
     */
    getLayoutTiles(flattenClusters, applyInsightsStyle, defaultTileSize) {
        if (this._sheetJson.sheetContent && !this._sheetJson.sheetContent.layout) {
            this._sheetJson.sheetContent.layout = {};
        }
        if (!this._sheetJson.sheetContent.layout.tiles) {
            this._sheetJson.sheetContent.layout.tiles = [];
        }
        this._sheetJson.sheetContent.layout.tiles = getPinboardLayout(this._sheetJson.sheetContent.layout.tiles, this._visualizationsMap, this._visualizationsArray, flattenClusters, applyInsightsStyle, defaultTileSize);
        return _.sortBy(this._sheetJson.sheetContent.layout.tiles, 'order');
    }
    getLayoutTemplate() {
        if (this._sheetJson.sheetContent && this._sheetJson.sheetContent.layout &&
            this._sheetJson.sheetContent.layout.layoutTemplate) {
            return this._sheetJson.sheetContent.layout.layoutTemplate;
        }
        return '';
    }
    setLayoutTemplate(layoutTemplate) {
        if (!this._sheetJson.sheetContent.layout) {
            this._sheetJson.sheetContent.layout = {};
        }
        this._sheetJson.sheetContent.layout.layoutTemplate = layoutTemplate;
    }
    getLayoutMode() {
        if (this._sheetJson.sheetContent && this._sheetJson.sheetContent.layout &&
            this._sheetJson.sheetContent.layout.layoutMode) {
            return this._sheetJson.sheetContent.layout.layoutMode;
        }
        return '';
    }
    setLayoutMode(layoutMode) {
        if (!this._sheetJson.sheetContent.layout) {
            this._sheetJson.sheetContent.layout = {};
        }
        this._sheetJson.sheetContent.layout.layoutMode = layoutMode;
    }
    /**
     * @param {string} id The guid of the visualization for which model is requested.
     * @return {Object} The vizContent+header json for a given guid.
     */
    getVisualization(id) {
        return this._visualizationsMap[id] || null;
    }
    getJson() {
        return this._sheetJson;
    }
    /**
     * Returns the description of this answersheet.
     * @return {string}
     */
    getDescription() {
        return this._sheetJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.DESCRIPTION_KEY];
    }
    /**
     * Sets the name of this answersheet to name.
     * @param {string} name
     */
    setName(name) {
        this._sheetJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.NAME_KEY] = name;
    }
    /**
     * Sets the description of this answersheet to desc.
     * @param {string} desc
     */
    setDescription(desc) {
        this._sheetJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.DESCRIPTION_KEY] = desc;
    }
    /**
     * @returns {sage.ACContext}
     */
    getSageContext() {
        try {
            let questionInfo = this.getQuestionInfo();
            if (!questionInfo) {
                return null;
            }
            return questionInfo[jsonConstants_1.SAGE_CONTEXT_PROTO_KEY];
        }
        catch (error) {
            _logger$3.warn('error in deserializing context', error);
            return null;
        }
    }
    /**
     * @returns {int}
     */
    getSageContextIndex() {
        let questionInfo = this.getQuestionInfo();
        if (!questionInfo) {
            return null;
        }
        return questionInfo[jsonConstants_1.SAGE_CONTEXT_INDEX_KEY];
    }
    /**
     * @param {sage.ACContext} context
     * @param {index} index
     */
    setSageContext(context, index) {
        let questionJson = this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.QUESTION_KEY];
        questionJson[jsonConstants_1.SAGE_CONTEXT_PROTO_KEY] = sage.serialize(context);
        questionJson[jsonConstants_1.SAGE_CONTEXT_INDEX_KEY] = index;
    }
    /**
     * Parses the json string form of list of recognized tokens stored in the answer-sheet
     * and converts each json object into a first class RecognizedToken.
     *
     * @return {Array.<sage.RecognizedToken>}
     */
    getRecognizedTokens() {
        let sageContext = this.getSageContext();
        let index = this.getSageContextIndex();
        if (!sageContext) {
            _logger$3.error('Undefined sage context');
            return void 0;
        }
        if (index < 0) {
            // NOTE: The getters should have already addressed backward compatibility.
            _logger$3.error('Index cannot be less that 0', index);
            return void 0;
        }
        let table = sageContext.getTables()[index];
        return table.getTokens();
    }
    /**
     * Returns the mode chart, table that this answer model was saved in.
     * @return {string}
     */
    getVizSelectionAnswerMode() {
        let clientState = this._sheetJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.CLIENT_STATE_KEY];
        if (!clientState) {
            return null;
        }
        return clientState[jsonConstants_1.CLIENT_STATE_VIZ_SELECTION_ANSWER_MODE_KEY];
    }
    getPrimaryDisplayedViz() {
        let answerVizType = this.getVizSelectionAnswerMode();
        let vizModel;
        if (answerVizType === AnswerDisplayMode.TABLE) {
            vizModel = this.getTableVisualizations()[0];
        }
        else if (answerVizType === AnswerDisplayMode.R_ANALYSIS) {
            vizModel = this.getRAnalysisVisualizations()[0];
            if (!vizModel) {
                // default to table model if there is no existing R analysis viz.
                vizModel = this.getTableVisualizations()[0];
            }
        }
        else {
            vizModel = this.getChartVisualizations()[0];
        }
        return vizModel;
    }
    /**
     * Sets the mode chart, table that this answer model is in.
     * @param {string} mode
     */
    setVizSelectionAnswerMode(mode) {
        let clientState = this._sheetJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.CLIENT_STATE_KEY];
        if (!clientState) {
            // client state may not exist; create new
            clientState = {};
            this._sheetJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.CLIENT_STATE_KEY] = clientState;
        }
        clientState[jsonConstants_1.CLIENT_STATE_VIZ_SELECTION_ANSWER_MODE_KEY] = mode;
    }
    /**
     * Returns if leaf data is allowed on the answer.
     * @returns {boolean}
     */
    canGenerateLeafData() {
        return !!this._sheetJson.sheetContent.canGenerateLeafData;
    }
    /**
     *
     * @param {VisualizationColumnModel} column
     * @return {FilterModel|null}
     */
    getFilterModelByColumn(column) {
        return this._colEffectiveIdToFilterModels[column.getId()] || null;
    }
    hasFilterForColumn(column) {
        return !!this._colEffectiveIdToFilterModels[column.getId()];
    }
    getTableColumns() {
        let tableModels = this.getTableVisualizations();
        if (tableModels.length !== 1) {
            _logger$3
                .error('answer sheet model should be having one and onle one table visualization');
        }
        let tableModel = tableModels[0];
        return tableModel.getVizColumns();
    }
    getFilterAnswerIds() {
        let content = this._sheetJson && this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY];
        let ids = util$7.prop(content, 'pinboardFilterDetails.pinboardFiltersAnswerIds');
        return ids || [];
    }
    getFilterDataSources() {
        let content = this._sheetJson && this._sheetJson[jsonConstants_1.SHEETCONTENT_KEY];
        let ids = util$7.prop(content, 'pinboardFilterDetails.filterLogicalTableIds');
        return ids || [];
    }
    getVizIdToRemoveInObjectResolver(vizModel) {
        let vizIdToRemove = vizModel.getId();
        let refVizIdToDelete = this._visualizationsMap[vizIdToRemove][jsonConstants_1.REF_VIZ_ID_KEY];
        return refVizIdToDelete;
    }
    removeVizInObjectResolver(vizId) {
        delete this._objectResolver[vizId];
    }
    replaceVizInObjectResolver(oldVizId, newVizId, newModel) {
        delete this._objectResolver[oldVizId];
        this._objectResolver[newVizId] = newModel;
        this._parseVisualizations();
    }
    containsVisualization(vizId) {
        return this._visualizationsMap[vizId] !== void 0;
    }
    getA3Request() {
        let serializedA3Requst = _.get(this._sheetJson, [
            jsonConstants_1.SHEETCONTENT_KEY,
            jsonConstants_1.PINBOARD_A3_DETAILS_KEY,
            jsonConstants_1.A3_REQUEST_PROTO_KEY
        ]);
        return !!serializedA3Requst
            ? sage.deserialize(serializedA3Requst, sage$1.A3Request)
            : null;
    }
    getA3AnalysisFacts() {
        let serializedAnalysisFacts = _.get(this._sheetJson, [
            jsonConstants_1.SHEETCONTENT_KEY,
            jsonConstants_1.PINBOARD_A3_DETAILS_KEY,
            jsonConstants_1.A3_ANALYSIS_FACTS_PROTO_KEY
        ]);
        return !!serializedAnalysisFacts
            ? sage.deserialize(serializedAnalysisFacts, sage$1.AnalysisFacts)
            : null;
    }
    stabilizeReferencableVizIds(sheetJson, sheetData) {
        return;
        if (!sheetJson || !sheetJson.header || !sheetJson.header.id) {
            _logger$3
                .info('No viz id stabilization can be performed without answer sheet clientState');
            return;
        }
        let trackedVizIds = appClientStateService
            .getClientState(sheetJson.header.id).trackedVizIds;
        if (!trackedVizIds || _.keys(trackedVizIds).length <= 0) {
            return;
        }
        let stableIds = util$7.mapArrayToBooleanHash(Object.values(trackedVizIds));
        // Walk through the json and look for the vizs that are candidates for stabilization fix.
        let vizsToFix = [];
        let visualizations = sheetJson[jsonConstants_1.SHEETCONTENT_KEY][jsonConstants_1.VISUALIZATIONS_KEY];
        if (!visualizations) {
            return;
        }
        if (!sheetData || !sheetData[jsonConstants_1.VIZ_DATA_KEY]) {
            return;
        }
        for (let i = 0; i < visualizations.length; ++i) {
            let vizJson = visualizations[i];
            // If we already found a viz id that matches, do nothing and return.
            if (stableIds.hasOwnProperty(vizJson.header.id)) {
                continue;
            }
            else if (trackedVizIds.hasOwnProperty(vizJson.vizContent.vizType)) {
                vizsToFix.push(vizJson);
            }
        }
        if (!vizsToFix.length) {
            _logger$3.info('Found no candidate vizs to fix up.');
            return;
        }
        let vizDataContainer = sheetData[jsonConstants_1.VIZ_DATA_KEY];
        vizsToFix.forEach(function (vizToFix) {
            let candidateId = vizToFix.header.id;
            if (!vizDataContainer.hasOwnProperty(candidateId)) {
                _logger$3.debug('Found no data node for viz %s in sheet data %o', candidateId, vizDataContainer);
                return;
            }
            vizToFix.header.id = trackedVizIds[vizToFix.vizContent.vizType];
            vizDataContainer[vizToFix.header.id] = vizDataContainer[candidateId];
            delete vizDataContainer[candidateId];
        });
    }
    getSheetGuid(sheetJson) {
        let sheetHeader = sheetJson[jsonConstants_1.HEADER_KEY];
        if (!sheetHeader || !sheetHeader[jsonConstants_1.ID_KEY]) {
            throw new Error('Can not find guid for the answersheet');
        }
        return sheetHeader[jsonConstants_1.ID_KEY];
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2013
 * Author: Joy Dutta (joy@thoughtspot.com),
 * Stephane Kiss (stephane@thoughtspot.com),
 * Vibhor Nanavati (vibhor@thoughtspot.com)
 * Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview Data model for answers
 */
var AnswerModel_1;
/**
 * AnswerModel encapsulates the detail of an answer data returned by Callosum. An answer is usually
 * composed of one or more answer sheet(s) (AnswerSheetModel) which itself is composed of
 * one or more visualizations and their layout information.
 */
let AnswerModel = AnswerModel_1 = class AnswerModel extends DocumentModel {
    constructor(_answerJson) {
        super(_answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.HEADER_KEY]);
        this._answerJson = _answerJson;
        this._metadataType = jsonConstants_1.metadataType.QUESTION_ANSWER_BOOK;
        /**
         * A list of containing answer sheets in this answer book.
         * @type {Array.<AnswerSheetModel>}
         */
        this._answerSheets = [];
        // Flag that is set to true when callosum returns a NO_DATA error (i.e. when answer is empty)
        this._hasNoData = false;
        this._accessibleTables = null;
        this._hasUserDefinedName = false;
        this._hasUserDefinedDescription = false;
        this._isAggregatedWorksheet = false;
        // SCAL-11624: blink needs to ignore incomplete details if the complete flag is set to true
        let isComplete = !!_answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.COMPLETE];
        if (!isComplete) {
            this._isCorrupted = true;
            let incompletionDetails = _answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.INCOMPLETE_DETAIL];
            if (!!incompletionDetails && !!incompletionDetails.length) {
                this._incompletionDetails = incompletionDetails;
            }
        }
        this._logger.time(logger_2.ANSWER_MODEL_PARSING);
        this.parseAnswerSheets();
        this._logger.timeEnd(logger_2.ANSWER_MODEL_PARSING);
        if (!!this.getCurrentAnswerSheet()) {
            let type = this.getCurrentAnswerSheet().getSheetType() + '_ANSWER_BOOK';
            //this._docPermission = DocumentPermissionFactory.createPermissiveInstance(type);
        }
    }
    /**
     * Returns the raw json
     * @return {Object}     The AnswerBook json
     */
    getJson() {
        return this._answerJson;
    }
    /**
     * Returns the AnswerBook metadata
     * @return {Object}     The metadata object
     */
    getMetadata() {
        return this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY];
    }
    /**
     * Will return true if callosum has returned a JSON that doesn't have a data property
     * @return {boolean}     Whether the answer is empty
     */
    hasNoData() {
        return this._hasNoData;
    }
    /**
     * Returns the json corresponding to the report book meta data.
     * @return {Object}
     */
    getReportBookJson() {
        return this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY] || null;
    }
    /**
     * This clears the unwanted state is answer model before sent to callosum to get answers.
     */
    cleanStateForAnswerQuery() {
        let answerSheet = this.getCurrentAnswerSheet();
        if (!answerSheet) {
            return;
        }
        answerSheet.setVizSelectionAnswerMode(null);
        answerSheet.getChartVisualizations().forEach((chartModel) => {
            chartModel.clearSystemDecidedColors();
        });
    }
    /**
     * Returns an object containing the metadata and data for a visualization
     * @param {string} id
     * @param {number=} sheetIndex
     * @return {Object}
     */
    getVizById(id, sheetIndex) {
        sheetIndex = sheetIndex || 0;
        return this.getAnswerSheet(sheetIndex).getVisualization(id);
    }
    getChartVisualization() {
        let answerSheet = this.getCurrentAnswerSheet();
        let chartVizs = answerSheet.getChartVisualizations();
        return chartVizs[0];
    }
    /**
     * @param {number} sheetIndex Index in a list of answer sheet in an answer book.
     * @return {AnswerSheetModel} The answer sheet corresponding to sheetIndex
     */
    getAnswerSheet(sheetIndex) {
        if (sheetIndex >= this._answerSheets.length || sheetIndex < 0) {
            return null;
        }
        return this._answerSheets[sheetIndex];
    }
    /**
     * @return {AnswerSheetModel} The answer sheet that is being shown.
     */
    getCurrentAnswerSheet() {
        // Note that we currently only have one sheet per answer, so the first
        // sheet is the current sheet. This may change in future.
        return this.getAnswerSheet(0);
    }
    /**
     * Returns the name of this answerbook.
     * @return {string}
     * @override
     */
    getName() {
        return this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.HEADER_KEY][jsonConstants_1.NAME_KEY];
    }
    /**
     * Returns the description of this answerbook.
     * @return {string}
     * @override
     */
    getDescription(stripHTMLTags = true) {
        let description = this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.HEADER_KEY][jsonConstants_1.DESCRIPTION_KEY];
        if (stripHTMLTags && description) {
            description = description.stripTags();
        }
        return description;
    }
    /**
     * Sets the name of this answerbook (and current answer sheet's name) to name.
     * @param {string} name
     * @override
     */
    setName(name) {
        this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.HEADER_KEY][jsonConstants_1.NAME_KEY] = name;
        let answerSheet = this.getCurrentAnswerSheet();
        // TODO(vibhor/shikhar): Clean up the sheet name/description if not needed.
        answerSheet.setName(name);
        if (answerSheet.getSheetType() !== 'QUESTION') {
            return;
        }
        let vizs = _.assign({}, answerSheet.getVisualizationsOfType('TABLE'), answerSheet.getVisualizationsOfType('CHART'));
        _.values(vizs).forEach((viz) => {
            viz.setAutoTitle(name);
        });
    }
    hasUserDefinedName() {
        return this._hasUserDefinedName;
    }
    setHasUserDefinedName(hasUserDefinedName) {
        this._hasUserDefinedName = hasUserDefinedName;
    }
    /**
     * Sets the description of this answerbook (and current answer sheet's description) to desc.
     * @param {string} desc
     * @override
     */
    setDescription(desc) {
        this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.HEADER_KEY][jsonConstants_1.DESCRIPTION_KEY] = desc;
        this.getCurrentAnswerSheet().setDescription(desc);
    }
    hasUserDefinedDescription() {
        return this._hasUserDefinedDescription;
    }
    setHasUserDefinedDescription(hasUserDefinedDescription) {
        this._hasUserDefinedDescription = hasUserDefinedDescription;
    }
    /**
     * Gets the question object from the json of the current answer sheet
     * @return {Object}
     * @override
     */
    getQuestionInfo() {
        return this.getCurrentAnswerSheet().getQuestionInfo();
    }
    isChasmTrapQuery() {
        let questionModel = this.getQuestionInfo();
        return questionModel.getIsChasmTrapQuery();
    }
    /**
     * Gets the sage question text
     *
     * @return {string}
     */
    getQuestionText() {
        return this.getQuestionInfo().getText();
    }
    /**
     * See AnswerSheetModel.getRecognizedTokens.
     * @return {Array.<sage.RecognizedToken>}
     * @override
     */
    getRecognizedTokens() {
        return this.getCurrentAnswerSheet().getRecognizedTokens();
    }
    getQueryTextFromTokens() {
        let tokens = this.getRecognizedTokens();
        return tokensToQuery(tokens);
    }
    shouldSetScopeBasedOnTokens() {
        // In case of a single auto disambiguated token,
        // We do not set the scope because we want suggestions
        // from the universe.
        return this.hasOnlySingleAutoDisambiguatedToken();
    }
    /**
     * Return the natural query object for the answer
     *
     * @return {Object}  The natural query object
     */
    getNaturalQuery() {
        if (!this._answerJson.naturalQuery || !Object.keys(this._answerJson.naturalQuery).length) {
            return null;
        }
        let naturalQueryKeys = Object.keys(this._answerJson.naturalQuery);
        return this._answerJson.naturalQuery[naturalQueryKeys[0]];
    }
    /**
     *
     * @return {number}
     */
    getCompletionRatio() {
        return this._answerJson.completionRatio;
    }
    /**
     *
     * @param {number} completionRatio
     */
    setCompletionRatio(completionRatio) {
        this._answerJson.completionRatio = completionRatio;
    }
    /**
     *
     * @return {string}
     * @override
     */
    getMetadataType() {
        return this._metadataType;
    }
    /**
     *
     * @return {string}
     * @override
     */
    getMetadataSubType() {
        if (this.isAggregatedWorksheet()) {
            return jsonConstants_1.metadataType.subType.VIEW;
        }
        return void 0;
    }
    /**
     *
     * @return {Object}
     * @override
     */
    getMetadataJson() {
        return this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY];
    }
    /**
     * Returns if leaf data is allowed on the answer.
     * @returns {boolean}
     */
    canGenerateLeafData() {
        return this.getCurrentAnswerSheet().canGenerateLeafData();
    }
    /**
     *
     * @param {Object} json
     * @override
     */
    fromMetadataJson(json) {
        let answerJson = _.cloneDeep(this._answerJson);
        answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY] = json;
        let answerModel = new AnswerModel_1(answerJson);
        answerModel.inheritNonJsonProperties(this);
        return answerModel;
    }
    /**
     * @returns {sage.ACContext}
     */
    getSageContext() {
        let currentAnswerSheet = this.getCurrentAnswerSheet();
        if (!currentAnswerSheet) {
            return null;
        }
        return currentAnswerSheet.getSageContext();
    }
    /**
     * @returns {int}
     */
    getSageContextIndex() {
        return this.getCurrentAnswerSheet().getSageContextIndex();
    }
    getNLQuery() {
        let context = this.getSageContext();
        return context.getNLQuery(this.getSageContextIndex());
    }
    isSearchIQAnswer() {
        let context = this.getSageContext();
        return context.isNLSourced();
    }
    getNLQueryMappings() {
        let context = this.getSageContext();
        return context.getNLQueryMapping();
    }
    /**
     *
     * @returns {string}
     */
    getCurrentQueryHashKey() {
        let context = this.getSageContext();
        if (!context) {
            return null;
        }
        let index = this.getSageContextIndex() || 0;
        // NOTE: Callosum migrates legacy queries to wrap in a dummy context
        // where the index is set to -1
        index = index > -1 ? index : 0;
        let currentTable = context.getTables()[index];
        return currentTable.getHashKey();
    }
    /**
     * @param {sage.ACContext} context
     * @param {int} index
     */
    setSageContext(context, index) {
        this.getCurrentAnswerSheet().setSageContext(context, index);
    }
    containsChangesFromStateStoredOnServer(referenceMetadataJson) {
        let hasVisualizationsWithUserMadeChanges = false;
        this._answerSheets.forEach((answerSheet) => {
            let chartVizs = answerSheet.getVisualizationsArrayOfType(jsonConstants_1.vizType.CHART);
            let userModifiedChartViz = chartVizs.some((chartModel) => {
                return chartModel.hasUserMadeConfigChanges();
            });
            if (userModifiedChartViz) {
                hasVisualizationsWithUserMadeChanges = true;
            }
        });
        return hasVisualizationsWithUserMadeChanges
            || this.hasBeenModified(referenceMetadataJson)
            || this.hasVizSelectionChanged(referenceMetadataJson, this.getMetadataJson());
    }
    hasVizSelectionChanged(model1, model2) {
        let content1 = !!model1 ? model1.reportContent : null;
        let sheets1 = !!content1 ? content1.sheets : null;
        let content2 = !!model2 ? model2.reportContent : null;
        let sheets2 = !!content2 ? content2.sheets : null;
        let didVizSelectionChanged = false;
        sheets1.forEach((sheet, index) => {
            if (!sheets2[index]) {
                didVizSelectionChanged = true;
                return false;
            }
            let clientState1 = sheet.header.clientState;
            let clientState2 = sheets2[index].header.clientState;
            let vizSelection1 = !!clientState1 ?
                clientState1[jsonConstants_1.CLIENT_STATE_VIZ_SELECTION_ANSWER_MODE_KEY] : null;
            let vizSelection2 = !!clientState2 ?
                clientState2[jsonConstants_1.CLIENT_STATE_VIZ_SELECTION_ANSWER_MODE_KEY] : null;
            // In older version of json we didn't have a node for viz-selection.
            // When processed by a new version of our code we automatically add such a
            // node. If this is the only change, since it's automatic, we don't want
            // to prompt the user for saving this change.
            // SCAL-12388, SCAL-11306, SCAL-12607
            let hasVizSelectionBeenIntroduced = (!vizSelection1) && vizSelection2 !== null;
            if (!hasVizSelectionBeenIntroduced && vizSelection1 !== vizSelection2) {
                didVizSelectionChanged = true;
                return false;
            }
        });
        return didVizSelectionChanged;
    }
    metadataEquals(model1, model2) {
        // it's 5-10x faster to use native JSON.stringify to compare two models
        // than to copy them using angular.copy and then compare. since in most
        // cases the comparison will result in an early termination it saves
        // CPU to do this check early.
        if (JSON.stringify(model1) === JSON.stringify(model2)) {
            return true;
        }
        model1 = _.cloneDeep(model1);
        model2 = _.cloneDeep(model2);
        //remove the transient state in the json that does not affect comparison of JSONs
        [model1, model2].forEach((model) => {
            delete model.debugInfo;
            if (model.reportContent && model.reportContent.sheets) {
                model.reportContent.sheets.forEach((sheet) => {
                    let clientState = sheet.header.clientState;
                    // CHART answer mode is set as a default. in case of older answers this
                    // field is not set causing spurious warnings about change. Deleting
                    // only the default value ensures that if the value is set to anything
                    // other than the default value
                    // changes are still detected (non-default-valid-value != undefined)
                    if (!!clientState) {
                        delete clientState[jsonConstants_1.CLIENT_STATE_VIZ_SELECTION_ANSWER_MODE_KEY];
                        if (_.size(clientState) === 0) {
                            delete sheet.header.clientState;
                        }
                    }
                    if (sheet.sheetContent.layout) {
                        //tiles info is ignored in auto layout mode
                        if (sheet.sheetContent.layout.layoutMode === void 0
                            || sheet.sheetContent.layout.layoutMode === 'auto') {
                            delete sheet.sheetContent.layout;
                        }
                        else if (sheet.sheetContent.layout.tiles) {
                            //even in custom layout, a newly added viz can be auto positioned
                            //we don't want to worry about such tiles' positions
                            sheet.sheetContent.layout.tiles = [];
                        }
                    }
                    if (sheet.sheetContent.visualizations) {
                        //for chart viz, there is a default value for visibleSeriesNames
                        // in clientState that is automatically set and
                        // should be ignored while looking for user's changes
                        sheet.sheetContent.visualizations.forEach((viz) => {
                            delete viz.vizContent.title;
                            let vizType = viz.vizContent.vizType;
                            if (vizType === 'FILTER') {
                                delete viz.vizContent.dataOnDemand;
                            }
                            if (viz.header) {
                                delete viz.header.name;
                                delete viz.header.description;
                                this.trimModelClientStateForDiff(viz.header, false);
                            }
                        });
                    }
                });
            }
            //an old save viz once loaded will have an empty client state in tables
            // because of a recent change
            if (model.header && model.header.resolvedObjects) {
                Object.keys(model.header.resolvedObjects).forEach((refVizId) => {
                    let refViz = model.header.resolvedObjects[refVizId];
                    if (refViz && refViz.header && refViz.header.clientState) {
                        this.trimModelClientStateForDiff(refViz.header, true);
                    }
                });
            }
            if (model.header.resolvedObjects) {
                Object.keys(model.header.resolvedObjects).forEach((vizId) => {
                    delete model.header.resolvedObjects[vizId].vizContent.locked;
                });
            }
        });
        //Note(chab) we do not use _.eq, as it rely on === comparison
        return _.isEqualWith(model1, model2, (val1, val2) => {
            if ((_.isNil(val1) && !_.isNil(val2)) || (!_.isNil(val1) && _.isNil(val2))) {
                return false;
            }
            if (_.isNil(val1) && _.isNil(val2)) {
                return true;
            }
            if (Object.keys(val1).length !== Object.keys(val2).length) {
                if ((_.isArray(val1)) || (_.isArray(val2))) {
                    return false;
                }
                else {
                    return (_.isMatch(val1, val2) || _.isMatch(val2, val1));
                }
            }
            else {
                return void 0;
            }
        });
    }
    setUserData(key, value) {
        let clientState = this.getClientState();
        clientState[key] = value;
    }
    getUserData(key) {
        let clientState = this.getClientState();
        if (clientState) {
            return clientState[key];
        }
    }
    clearUserData(key) {
        let clientState = this.getClientState();
        if (clientState) {
            delete clientState[key];
        }
    }
    hasUserData(key) {
        let clientState = this.getClientState();
        return clientState && _.has(clientState, key);
    }
    clone() {
        return new AnswerModel_1(JSON.parse(JSON.stringify(this._answerJson)));
    }
    setIsAggregatedWorksheet(isAggregatedWorksheet) {
        this._isAggregatedWorksheet = !!isAggregatedWorksheet;
    }
    isAggregatedWorksheet() {
        return this._isAggregatedWorksheet;
    }
    getTableColumns() {
        return this.getCurrentAnswerSheet().getTableColumns();
    }
    setAccessibleTables(accessibleTables) {
        this._accessibleTables = accessibleTables;
    }
    getAccessibleTables() {
        return this._accessibleTables;
    }
    shouldAlwaysShowAxisLabels() {
        return false;
    }
    getDefaultQuerableSource() {
        const queryState = this.getUserData('queryState');
        if (queryState) {
            return queryState;
        }
        const answerSheet = this.getCurrentAnswerSheet();
        if (!answerSheet) {
            return null;
        }
        return answerSheet['_sheetJson'][jsonConstants_1.SHEETCONTENT_KEY].defaultQueryableSource;
    }
    getQuerableSources() {
        const answerSheet = this.getCurrentAnswerSheet();
        if (!answerSheet) {
            return null;
        }
        return answerSheet['_sheetJson'][jsonConstants_1.SHEETCONTENT_KEY].querableSources;
    }
    /**
     * Checks if the source is external, i.e. if source was either cached in Falcon
     * from external sources or is fetched from external sources. Snowflake, Redshift, etc
     * are external sources.
     *
     * @returns {boolean}
     */
    isExternalSource() {
        const querableSources = this.getQuerableSources();
        const defaultQuerableSources = this.getDefaultQuerableSource();
        if (querableSources.length > 1) {
            return true;
        }
        return querableSources[0] === embraceConstants.QUERYABLE_SOURCES.LIVE;
    }
    /**
     * TODO(define what is client state)
     *
     * @returns {any}
     */
    getClientState() {
        if (!this.getJson()) {
            return null;
        }
        let clientState = this.getHeaderJson().clientState;
        if (!clientState) {
            clientState = this.getHeaderJson().clientState = {};
        }
        return clientState;
    }
    /**
     * @param {Object} sheetJson
     * @private
     */
    getSheetData(sheetJson) {
        if (!sheetJson || !sheetJson[jsonConstants_1.HEADER_KEY]) {
            return null;
        }
        let sheetName = sheetJson[jsonConstants_1.HEADER_KEY][jsonConstants_1.ID_KEY] || null;
        if (!sheetName) {
            return null;
        }
        if (!this._answerJson[jsonConstants_1.REPORT_BOOK_DATA_KEY]) {
            return null;
        }
        let pageData = this._answerJson[jsonConstants_1.REPORT_BOOK_DATA_KEY][sheetName];
        return pageData || null;
    }
    /**
     * Parses the answer json sent by callosum and creates a model for each containing
     * answer sheets.
     */
    parseAnswerSheets() {
        if (!this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY] ||
            !this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.REPORT_BOOK_CONTENT_KEY] ||
            !this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.REPORT_BOOK_CONTENT_KEY][jsonConstants_1.SHEETS_KEY]) {
            throw new Error('No answer sheet json specified.');
        }
        // If the json doesn't have a data property, set the _hasNoData flag to true
        if (!this._answerJson[jsonConstants_1.REPORT_BOOK_DATA_KEY]) {
            this._hasNoData = true;
        }
        let sheets = this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.REPORT_BOOK_CONTENT_KEY][jsonConstants_1.SHEETS_KEY];
        sheets.forEach(sheet => this._answerSheets.push(new AnswerSheetModel({
            sheetJson: sheet,
            sheetData: this.getSheetData(sheet),
            objectResolver: this.getObjectResolver(),
            answerModel: this
        })));
    }
    getObjectResolver() {
        if (!this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY] ||
            !this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.HEADER_KEY]) {
            return null;
        }
        return this._answerJson[jsonConstants_1.REPORT_BOOK_METADATA_KEY][jsonConstants_1.HEADER_KEY][jsonConstants_1.REPORT_BOOK_RESOLVED_OBJECTS_KEY] || null;
    }
    trimModelClientStateForDiff(header, isPinboardRefViz) {
        if (!_.isPlainObject(header.clientState)) {
            return;
        }
        // we allow the user to play with the chart by changing
        // the legend selection and zooming in/out but since
        // the changes can't (currently) be directly persisted
        // via pinboards we ignore such changes when comparing
        if (isPinboardRefViz) {
            delete header.clientState.visibleSeriesNames;
            delete header.clientState.axisExtremes;
            delete header.clientState.multiColorSeriesColors;
            delete header.clientState.systemMultiColorSeriesColors;
            delete header.clientState.seriesColors;
            delete header.clientState.systemSeriesColors;
            delete header.clientState.mapViewport;
        }
        //we ignore any dataOffset changes. i.e navigating a chart's pages in pinboard is ignored
        delete header.clientState.dataOffset;
        if (header.clientState.axisExtremes) {
            Object.keys(header.clientState.axisExtremes).forEach((axisType) => {
                //userMin, userMax, dataMin, dataMax can be dynamically updated by highcharts
                //we have stopped saving these props (SCAL-4711) but we need to keep this logic
                //here for saved answers/pinboards from before the change
                header.clientState.axisExtremes[axisType].forEach(function (axisExtremes) {
                    delete axisExtremes.userMin;
                    delete axisExtremes.userMax;
                    delete axisExtremes.dataMin;
                    delete axisExtremes.dataMax;
                });
            });
        }
        // Since ordered column ids field can change due to changes in effective id computation,
        // we do not want to diff on it unless the user has explicitly changed the order.
        // Note that one side effect of change in effective id is that we can also not preserve
        // a previously saved column order but our current product philosophy is to
        // ignore such rare events.
        /* eslint camelcase: 1 */
        if (header.clientState.ordered_column_ids) {
            delete header.clientState.ordered_column_ids;
        }
        if (header.clientState.systemSeriesColors) {
            delete header.clientState.systemSeriesColors;
        }
        if (header.clientState.systemMultiColorSeriesColors) {
            delete header.clientState.systemMultiColorSeriesColors;
        }
        delete header.clientState[CLIENT_STATE_KEYS.columnProperties];
        delete header.clientState[CLIENT_STATE_KEYS.chartProperties];
        delete header.clientState[CLIENT_STATE_KEYS.axisProperties];
        if (header.clientState.widgetState) {
            delete header.clientState.widgetState.pageIndex;
        }
        if (_.size(header.clientState) === 0) {
            //an old save viz once loaded will have an empty client state in tables
            // because of a recent change
            delete header.clientState;
        }
    }
    hasOnlySingleAutoDisambiguatedToken() {
        let recognizdTokens = this.getRecognizedTokens();
        return recognizdTokens.length === 1
            && recognizdTokens[0].isAutoDisambiguated;
    }
};
AnswerModel = AnswerModel_1 = __decorate([
    Provide('AnswerModel')
], AnswerModel);

/**
 * Copyright: ThoughtSpot Inc. 2012-2017
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Utility to provide helpers specific to angular framework.
 */
/**
 * NOTE: $compile dependancy has to be retrieved only after the app is fully
 * built with all directives from the legacy system loaded. If not, $compile
 * will not be able to find and compile legacy directives used in templates
 * provided as arguments to functions on this file.
 * As of now, ngRequire seems to be the only way to get the dependancy. Getting
 * it through getDependancy from decorators does not seem to give us the desired
 * results.
 */
function getCompileDependancy() {
    return ngRequire('$compile');
}
function getCompiledElement(template, scope) {
    let $compile = getCompileDependancy();
    let $elem = $compile(template)(scope);
    scope.$on('$destroy', () => {
        $elem.remove();
        // NOTE: This is extra cautious check to ensure marking object of GC.
        $elem = null;
    });
    return $elem;
}
function getCompiledElementAsync($node, childScope) {
    let $compile = getCompileDependancy();
    $node.attr('blink-manual-compile', 'true');
    childScope.$on('$destroy', () => {
        $node.remove();
    });
    return new Promise((resolve) => {
        childScope.onLinked = resolve;
        $compile($node)(childScope);
    });
}
Provide('angularUtil')({
    getCompiledElement,
    getCompiledElementAsync
});

const AXIS_CONTAINER_CLASS = '.bk-axis-label-container', AXIS_ORIENTATION_CLASS = {
    VERTICAL: 'bk-vertical-axis',
    HORIZONTAL: 'bk-horizontal-axis'
};
function bindEvents(scope, element) {
    if (scope.dataVizComponentConfig.disableTransformations) {
        return;
    }
    $(element).find(AXIS_CONTAINER_CLASS)
        .on('click', '.bk-axis-label-control, .bk-sort-indicator', function (el) {
        let axisId = el.delegateTarget.id;
        scope.currentColumnController = scope.axisIdsToControllers[axisId];
        if (this.className === 'bk-axis-label-control') {
            scope.currentColumnController.setOnCloseCallback(() => {
                scope.currentColumnController.onClose();
            });
            scope.currentColumnController.closeColumnControl = () => {
                scope.currentColumnController.hide();
            };
            scope.currentColumnController.repositionMenu = () => {
                scope.currentColumnController.reposition();
            };
            scope.currentColumnController.hide();
            // trigger re-linking (as we are out of angular digestion)
            scope.forceRender();
            // defer rendering in next event loop, we are just doing DOM manipulation, so
            // we do not need to go into angular loop
            setTimeout(() => {
                scope.currentColumnController.show(this);
            }, 0);
        }
        else {
            scope.currentColumnController.onSortClick();
        }
    });
}
function getAxisTemplate(axisId, chartModel, columns, isVertical, disableTransformations) {
    let permission = chartModel.getContainingAnswerModel().getPermission();
    let hasPermsToEdit = !!permission ? !permission.isMissingUnderlyingAccess() : false;
    let canEdit = !disableTransformations && hasPermsToEdit;
    let answerSheet = chartModel.getContainingAnswerModel().getCurrentAnswerSheet();
    if (flags.getValue(flags.BLINK_FLAGS.enableChartConfigV2.name)) {
        const combinedAxisName = chartModel.getAxisName(axisId) ||
            chartModel.getAxisDefaultName(axisId);
        let directionClass;
        const sortColumn = columns.find((col) => col.isSortKey());
        if (sortColumn) {
            directionClass = getDirectionClass(sortColumn);
        }
        let showIconArrow = columns.some((col) => hasAvailableInteraction(col, canEdit, answerSheet)), showSortIndicator = showIconArrow && columns.some((col) => isSortedByColumn(col, canEdit)), tooltip = columns.map((col) => col.getTooltipInformationModel().getText()).join('\n\n');
        return getAxisHTML(combinedAxisName, axisId, showIconArrow, showSortIndicator, directionClass, isVertical, tooltip);
    }
    return columns.reduce((acc, column) => {
        let directionClass = getDirectionClass(column), showIconArrow = hasAvailableInteraction(column, canEdit, answerSheet), showSortIndicator = showIconArrow && isSortedByColumn(column, canEdit);
        return acc + getAxisHTML(column.getName(), column.getId(), showIconArrow, showSortIndicator, directionClass, isVertical, column.getTooltipInformationModel().getText());
    }, '');
}
function unbindAxisEvents(element) {
    $(element).find(AXIS_CONTAINER_CLASS).off('click.axis');
}
function getAxisHTML(columnName, id, showIcon = true, showSortDirection = true, directionClass, isVertical, tooltip) {
    let axisClass = isVertical ?
        AXIS_ORIENTATION_CLASS.VERTICAL : AXIS_ORIENTATION_CLASS.HORIZONTAL;
    let actionIcon = showIcon ? '<div class="bk-icon-arrow-down"></div>' : '';
    let sortIcon = showSortDirection ?
        `<div class="bk-sort-indicator ${directionClass}"></div> ` : '';
    let cursorClass = showIcon ? 'bk-cursor' : 'bk-no-cursor';
    return `<div id="${id}" title="${tooltip}" class="bk-axis-label-container">
                <div class="bk-axis-label ${cursorClass} ${axisClass}">
                    <div class="bk-axis-label-control">
                        <div class="bk-axis-label-title">
                            ${columnName}
                        </div>
                        ${actionIcon}
                    </div>
                    ${sortIcon}
                </div>
            </div>`;
}
function getDirectionClass(col) {
    if (col.isSortKey()) {
        if (col.isAscendingSort()) {
            return 'up';
        }
        else {
            return 'down';
        }
    }
}
function isSortedByColumn(vizColumn, isEditable) {
    return vizColumn.isSortKey() && isEditable;
}
function hasAvailableInteraction(vizColumn, isEditable, answerSheet) {
    return (vizColumn.isEffectivelyNumeric() && isEditable) ||
        (isEditable || answerSheet.hasFilterForColumn(vizColumn)) ||
        (vizColumn.supportsAggregationChange() && isEditable) ||
        (vizColumn.supportsDateBucketizationChange() && isEditable);
}
Provide('axisRenderer')({
    bindEvents,
    getAxisTemplate
});

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Francois Chabbey(francois.chabbey@thoughtspot.com)
 *
 * @fileoverview This file contains the different chart-renderers and shared functionnality
 *
 */
let util$8 = ngRequire('util');
let logger$3;
Provide('ChartUIUtils')({
    render: chartUIRender,
    removeCurrentChart: chartUIRemoveCurrentChart,
    closeContextMenu: closeContextMenu,
    handleSingularSelection: handleSingularSelection
});
async function chartUIRender(chartVizComponent, $chartContent, optSupportAnimation, maximized) {
    // We compile the chart elements on a child scope of the chart scope.
    // The motivation here is that we could have a single chart scope that
    // will be reused across different chart renderings on various interactions
    // like change chart type or config.
    // The downside of original design to directly compile in the chart scope
    // is that we depend on the container chart to be destroyed for all the
    // scope based cleanups to happen.
    // Now in the is model, every time this util is used to render a new chart it
    // destroy the scope of the previous rendered chart.
    chartVizComponent.createChartScope();
    logger$3 = logger$3 || logger_3('chart-ui-utils');
    if (!chartVizComponent.getChartModel()) {
        return;
    }
    optSupportAnimation = flags.getValue(flags.BLINK_FLAGS.chartAnimations.name)
        && (optSupportAnimation);
    let renderProfileMsg = logger_2.CHART_VIZ_RENDER_PREAMBLE + ' \'' +
        chartVizComponent.getChartModel().getName() + '\'';
    logger$3.time(renderProfileMsg);
    if (!chartVizComponent.isDataNotSupported() && !chartVizComponent.isChartHidden()) {
        chartVizComponent.prevWidth = void 0;
        chartVizComponent.prevHeight = void 0;
        let chartProvider = getChartProvider(chartVizComponent.getChartModel().getChartType());
        chartUIRemoveCurrentChart(chartVizComponent);
        let chartRenderer = getChartRendererForProvider(chartProvider);
        await chartRenderer(chartVizComponent, $chartContent, optSupportAnimation);
        if (maximized && chartVizComponent.chart &&
            chartVizComponent.chart.supportsFullScreenMode()) {
            util$8.launchIntoFullScreen($chartContent);
        }
    }
    logger$3.timeEnd(renderProfileMsg);
    onChartRendered(chartVizComponent, chartVizComponent.getChartModel());
}
function getChartRendererForProvider(chartProvider) {
    switch (chartProvider) {
        case chartProviders.HIGHCHART:
            return chartUIRenderHighchart;
        case chartProviders.GEO_MAP:
            return chartUIRenderGeoMap;
        case chartProviders.GRID_TABLE:
        case chartProviders.PIVOT_TABLE:
            return chartUIRenderDXComponent;
        case chartProviders.NETWORK:
            return chartUIRenderSankey;
    }
}
function onChartRendered(scope, chartModel) {
    // FIXME
    scope.onRenderCompleteCallback(chartModel, true);
    // TODO(Rifdhan): this additional call to chartUISecondaryRender causes two total calls to
    // onRenderComplete() during the initial rendering of the chart in the expanded pinboard card,
    // which in turn causes 2 network calls when it should really only be 1. However I can't remove
    // this call easily or else it breaks chart config in the answer page (related to data labels
    // and rounded numbers toggles). Ideally onRenderComplete() should only be called once per full
    // render of any given chart viz.
    //TODO(chab) we need to distinguish between case when the chart will update itself
    // and when we need to reload a whole new chart
    if (chartModel.isSecondaryRenderReady() &&
        (!scope.isDataNotSupported() && !scope.isChartHidden())) {
        scope.chartUISecondaryRender();
    }
}
function chartUIRenderDXComponent(chartVizComponent, $chartContent) {
    //renderDXComponent(chartVizComponent, $chartContent);
}
async function chartUIRenderSankey(chartVizComponent, $chartContent) {
    let { SankeyChartComponent } = await import('./sankey-component-2903d913.js');
    chartVizComponent.chartCompilationScope.ctrl =
        chartVizComponent.chart = new SankeyChartComponent(chartVizComponent, () => {
            chartVizComponent.dataVizComponentConfig
                .onRenderComplete(chartVizComponent.getChartModel());
        }, chartVizComponent.dataVizComponentConfig.sageClient, chartVizComponent.chartDimensions.width, chartVizComponent.chartDimensions.height);
    chartVizComponent.emitNewChart(chartVizComponent.chart);
    //TODO(Ashish): Add all renderer types as components and use ng-switch in tpl.
    let $sankey = getCompiledElement('<bk-sankey-chart ' +
        'class="bk-sankey-chart-container" ' +
        'bk-ctrl="ctrl">', chartVizComponent.chartCompilationScope);
    $chartContent.innerHTML = '';
    $chartContent.appendChild($sankey[0]);
}
async function chartUIRenderGeoMap(chartVizComponent, $chartContent) {
    let [{ GeoMapComponent }, { GeoUtils }] = await Promise.all([
        import('./blink-geo-map-5f853273.js'),
        import('./geo-utils-1fe842c4.js')
    ]);
    let chartModel = chartVizComponent.dataVizComponentConfig.vizModel;
    let geoMapConfig = {
        chartVizComponent: chartVizComponent,
        onRightClick: ($event) => onSeriesClick(chartVizComponent, $chartContent, $event)
    };
    chartVizComponent.chartCompilationScope.ctrl =
        chartVizComponent.chart = new GeoMapComponent(geoMapConfig);
    chartVizComponent.chart.setData(getGeoChartData(chartModel));
    let $geoMap = $('<bk-geo-map bk-ctrl="ctrl" class="bk-geo-map-container"></bk-geo-map>');
    $chartContent.innerHTML = '';
    $chartContent.appendChild($geoMap[0]);
    GeoUtils.updateRenderedGeoMapColorsInModel(chartModel, chartVizComponent.chartCompilationScope.ctrl);
    chartVizComponent.emitNewChart(chartVizComponent.chart);
    return getCompiledElementAsync($geoMap, chartVizComponent.chartCompilationScope)
        .then(() => {
        util$8.executeInNextEventLoop(() => {
            chartVizComponent.reflow();
            chartVizComponent.hideLoading();
        });
    });
}
function chartUIRemoveCurrentChart(scope) {
    if (!scope.chart) {
        return;
    }
    // SCAL-6200: Highcharts does not focus the chart when a click on a point
    // happens. This can lead to a situtation where sage still retains focus,
    // the user changes the query and the underlying chart goes away leaving
    // the context menu hanging. The ideal fix will be to make sure sage bar
    // loses focus when context menu is opened but that doesn't seem to work
    // This is a temp fix.
    closeContextMenu(scope);
    $(scope.chart).unbind('selection');
    unbindAxisEvents(scope.chart.renderTo);
    if (_.isFunction(scope.chart.destroy)) {
        scope.chart.destroy();
    }
    scope.chart = null;
    // SHOULD WE DO THAT, WE'RE GOING TO EMIT A LOT OF THOSE EVENTS
    scope.emitNewChart(scope.chart);
}
function getGeoChartData(chartModel) {
    let geoConfig, xAxisColumns = chartModel.getXAxisColumns();
    if (logger$3 === void 0) {
        logger$3 = logger_3('chart-ui-utils');
    }
    // TODO (sunny): get callosum to support composite POINT type
    // and remove this conditional logic
    switch (xAxisColumns.length) {
        case 1:
            geoConfig = xAxisColumns[0].getGeoConfig();
            break;
        case 2:
            geoConfig = new GeoConfig({
                type: jsonConstants_1.geoConfigType.POINT
            });
            break;
        default:
            logger$3.error('<=2 x-axis columns expected for geo charts');
            return;
    }
    let series = chartModel.getSeries();
    let yAxisColumns = chartModel.getYAxisColumns();
    let multipleYAxes = yAxisColumns.length > 1 && !chartModel.isYAxisShared();
    yAxisColumns.forEach((yAxisColumn, columnIndex) => {
        let metricDefinition = yAxisColumn.getMetricsDefinition();
        if (!metricDefinition) {
            return;
        }
        let serie = multipleYAxes ? series[columnIndex] : series[0];
        // TODO (sunny): handle shared y-axes with conflicting metrics
        serie.data.forEach((dataRow) => {
            let color = metricDefinition.getColorForValue(dataRow.y);
            if (color !== null) {
                dataRow.color = color;
            }
            else {
                delete dataRow.color;
            }
        });
    });
    let geoObjects = chartModel.getGeoObjects();
    return {
        geoConfig: geoConfig,
        series: series,
        geoObjects: geoObjects,
        labelFormatters: {
            x: (xValue, seriesIndex) => {
                return {
                    name: chartModel.getXAxisColumns().map(col => col.getName()).join(', '),
                    value: chartModel.getXAxisLabelAt(xValue, void 0, void 0)
                };
            },
            y: (yValue, seriesIndex) => {
                let yAxisColumns = chartModel.getYAxisColumns(), yAxisColumn;
                yAxisColumn = yAxisColumns[seriesIndex] || yAxisColumns[0];
                let formattedValue = null;
                if (yAxisColumn.isEffectivelyNumeric()) {
                    formattedValue = chartModel.getLabelForNumericColumn(yValue, yAxisColumn);
                }
                else {
                    formattedValue = chartModel.getYAxisLabelForAttribute(yAxisColumn, yValue);
                }
                return {
                    name: yAxisColumn.getName(),
                    value: formattedValue
                };
            },
            z: (zValue, seriesIndex) => {
                let radialColumn = chartModel.getRadialColumn();
                if (!radialColumn) {
                    return null;
                }
                return {
                    name: radialColumn.getName(),
                    value: radialColumn.getDataFormatter()(zValue)
                };
            }
        }
    };
}
function closeContextMenu(scope) {
    if (scope.contextMenuCtrl) {
        scope.contextMenuCtrl.hide();
    }
}
/**
 * The implementation of the series filtered click for context menu.
 * @param scope
 * @param $chartContainer
 * @param evt
 */
function onSeriesClick(scope, $chartContainer, evt) {
    // Point close is used here as some of the call below can modify the values
    // and break context menu down scenarios.
    let pointClone = cloneHighchartsPoint(evt.point);
    let selectedPoints = (!!scope.chart.getSelectedPoints ? scope.chart.getSelectedPoints() : [])
        .map(cloneHighchartsPoint);
    // let contextMenuInput = getInputForChartContextMenu(
    //     scope.chartModel,
    //     undefined,
    //     pointClone,
    //     selectedPoints,
    //     () => closeContextMenu(scope),
    //     (subMenuId: string) => showSubMenuItems(scope, subMenuId),
    //     () => resetContextMenu(scope)
    // );
    let rect = $chartContainer.getBoundingClientRect();
    let offset = {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    };
    let contextMenuConfig = {
        clickedPosition: {
            left: evt.chartX + offset.left,
            top: evt.chartY + offset.top
        },
    };
    selectChartPoint($(evt.target), pointClone, scope.getChartType());
    console.log(contextMenuConfig);
}
function selectChartPoint($svgPoint, point, chartType) {
    if (!point.select) {
        return;
    }
    let selectionColor = util$8.lightenDarkenColor(point.series.color || '#777', -30);
    switch (chartType) {
        case chartTypes.LINE:
        case chartTypes.AREA:
        case chartTypes.PARETO:
            point.select(true);
            break;
        case chartTypes.BUBBLE:
            let d = $svgPoint.attr('d');
            point.select(true);
            $svgPoint.attr('stroke-width', 0).attr('d', d).attr('fill', selectionColor);
            break;
        default:
            point.select(true);
            $svgPoint.attr('stroke-width', '1').attr('fill', selectionColor);
    }
}
function cloneHighchartsPoint(point) {
    let pointClone = {
        x: point.x,
        y: point.y,
        z: point.z,
        categoryName: point.categoryName,
        series: point.series
    };
    return pointClone;
}
function handleSingularSelection(chart, vizModel, serieName) {
    let series = vizModel.getSeries();
    if (!series) {
        logger$3.error('No series found when trying to toggle', serieName);
        return;
    }
    let shouldDoSingularSelection = !vizModel.isOnlySelectedSeries(serieName);
    if (getChartProvider(vizModel.getChartType()) === 'highchart') {
        chart.onSingularSerieSelection(serieName);
        chart.redraw(true); // see below
        // TODO(chab) not ideal,  we should do it the other way, but we cannot
        // because if highcharts starts
        // with only one serie, then we add another, at that point, this particular serie
        // has no min/max values populated, good way would be to leverage chartModel
        if (!vizModel.hasUserDefinedYAxisRange() && !vizModel.isZoomedIn()) {
            chart.correctYAxisRange();
        }
    }
    else {
        series.forEach((s, i) => {
            let visible = shouldDoSingularSelection ? s.name === serieName : true;
            let redraw = i === series.length - 1;
            // dont redraw until we render the last serie
            chart.setSeriesVisibility(s, visible, redraw);
        });
        chart.redraw();
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2015-2016
 * Author: Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview Service that check if stack column labels are overlapping
 * with other labels
 *
 */
let paddingBetweenLabels = 5;
function postProcessHighchartDataLabels(chart) {
    if (!chart.isDataLabelsEnabled()
        && !chart.isStackLabelsEnabled()) {
        return;
    }
    let visibleStackLabels = [];
    chart.yAxis.forEach((yAxis) => {
        let columns = yAxis.stacks.column || yAxis.stacks.area || {};
        _.forIn(columns, (point) => {
            if (!point.label || point.label.visibility === 'hidden') {
                return;
            }
            let overlap = false;
            visibleStackLabels.forEach((visibleStackLabel) => {
                if (isLabelOnLabel(point.label, visibleStackLabel, paddingBetweenLabels)) {
                    overlap = true;
                }
            });
            if (overlap) {
                point.label.hide();
            }
            else {
                point.label.element.style.opacity = 1;
                visibleStackLabels.push(point.label);
            }
        });
    });
    visibleStackLabels.forEach((visibleStackLabel) => {
        chart.series.forEach((series) => {
            if (series && series.points) {
                series.points.forEach((point) => {
                    if (!point.dataLabel) {
                        return;
                    }
                    if (isLabelOnLabel(visibleStackLabel, point.dataLabel, paddingBetweenLabels)) {
                        point.dataLabel.hide();
                    }
                });
            }
        });
    });
}
function isLabelOnLabel(label1, label2, padding = 0) {
    if (label1.visibility === 'hidden' || label2.visibility === 'hidden') {
        return false;
    }
    let a = computeBBoxForHighchartLabel(label1), b = computeBBoxForHighchartLabel(label2);
    return !(b.left > a.right + padding
        || b.right < a.left - padding
        || b.top > a.bottom + padding
        || b.bottom < a.top - padding);
}
function computeBBoxForHighchartLabel(label) {
    // we try to reuse what highchart has already computed
    let parentX = label.parentGroup.translateX;
    let parentY = label.parentGroup.translateY;
    let labelX = label.alignAttr.x + (label.xCorr ? label.xCorr : 0);
    let labelY = label.alignAttr.y + (label.yCorr ? label.yCorr : 0);
    let width = label.width ? label.width : label.element.scrollWidth;
    let height = label.height ? label.height : label.element.scrollHeight;
    return {
        top: parentY + labelY,
        left: parentX + labelX,
        right: parentX + labelX + width,
        bottom: parentY + labelY + height,
    };
}

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Shashank Singh (sunny@thoughtspot.com)
 *
 */
const ZOOM_TYPE = 'xy';
// TODO(chab) try to make type definition work, because now the thing is blindlessly open to
// overriding
class BlinkHighchart extends Highcharts.Chart {
    constructor(config) {
        super(config);
        this._blinkSerieGetter = config._blinkSerieGetter;
        typed_4(BlinkHighchart, BaseChart);
        this.cachedXAxisHtml = config.cachedXAxisHtml;
        this.cachedYAxisHtml = config.cachedYAxisHtml;
        this.dataLabelsEnabledByDefault = config.dataLabelsEnabledByDefault;
        this._init();
        // precedently, we were storing default min/max axis ranges, but it's useless
        // there is no good way to maintain a good max state when we return from zoom
        // because we might have add/remove a serie, so when we remove zoom, we need
        // to accomodate back, so we let highcharts manage that instead of trying to
        // mix behaviour
    }
    isDataLabelsEnabled() {
        return !!this.series.find(serie => !!_.get(serie, 'options.dataLabels.enabled'));
    }
    isStackLabelsEnabled() {
        return !!_.get(this, 'options.yAxis.0.stackLabels.enabled');
    }
    getSeries() {
        return this.series;
    }
    getXAxisExtremes() {
        return this.xAxis.map('getExtremes');
    }
    getYAxisExtremes() {
        return this.yAxis.map('getExtremes');
    }
    getAxisesExtremes() {
        //we want to preserve only min & max. Other props can change between
        //renders (SCAL-4711)
        function mappingFunction(axisExtremes) {
            return {
                min: axisExtremes.min,
                max: axisExtremes.max
            };
        }
        let xAxisExtremes = this.getXAxisExtremes().map(mappingFunction);
        let yAxisExtremes = this.getYAxisExtremes().map(mappingFunction);
        return {
            xAxisExtremes: xAxisExtremes,
            yAxisExtremes: yAxisExtremes
        };
    }
    getPlotSizeX() {
        return this.plotSizeX;
    }
    getPlotSizeY() {
        return this.plotSizeY;
    }
    getGroupPixelWidth() {
        return this.xAxis
            .map((axis) => axis.getGroupPixelWidth ? axis.getGroupPixelWidth() : 0)
            .min();
    }
    resetPointer() {
        this.pointer.reset();
        this.pointer.init(this, this.options);
    }
    switchToZoomMode() {
        this.options.chart.panning = false;
        this.options.chart.zoomType = ZOOM_TYPE;
    }
    switchToPanMode(resetPointer) {
        this.options.chart.panning = true;
        this.options.chart.zoomType = '';
        if (!resetPointer) {
            return;
        }
        this.resetPointer();
    }
    isInPanMode() {
        if (!this.options) {
            return false;
        }
        return this.options.chart.panning;
    }
    setDataLabelVisibility(dataLabelVisible, columnId) {
        this.series
            .filter(serie => serie.userOptions.valueColumnIdentifier === columnId)
            .forEach(serie => serie.update({
            dataLabels: {
                enabled: dataLabelVisible
            }
        }, false));
    }
    setStackLabelVisibility(stackLabelVisible) {
        if (!this.options) {
            return;
        }
        this._shouldShowDataLabels = stackLabelVisible;
        let options = this.options;
        this.yAxis.forEach((axis, index) => {
            options.yAxis[index].stackLabels.enabled = !!stackLabelVisible;
            axis.update({
                stackLabels: {
                    enabled: !!stackLabelVisible
                }
            }, false);
        });
    }
    supportsDownload() {
        return !!this.getSVG;
    }
    supportsFullScreenMode() {
        return false;
    }
    async toBlob(overriddenOptions, callback, scalingFactor) {
        overriddenOptions.exporting = {};
        overriddenOptions.exporting.sourceWidth = 1920;
        overriddenOptions.exporting.sourceHeight = 1080;
        let svg = this.getSVG(overriddenOptions), width = parseInt(svg.match(/width="([0-9]+)"/)[1], 10), height = parseInt(svg.match(/height="([0-9]+)"/)[1], 10), canvas = document.createElement('canvas');
        scalingFactor = scalingFactor || 5;
        let dWidth = scalingFactor, dHeight = scalingFactor;
        svg = svg.replace('<svg ', '<svg transform="scale(' + dWidth + ' ' + dHeight + ')" ');
        let scaledWidth = dWidth * width, scaledHeigth = dHeight * height;
        svg = svg.replace('width="' + width + '"', 'width="' + scaledWidth + '"');
        svg = svg.replace('height="' + height + '"', 'height="' + scaledHeigth + '"');
        svg = svg.replace('viewBox="0 0 ' + width + ' ' + height + '"', 'viewBox="0 0 ' + scaledWidth + ' ' + scaledHeigth + '"');
        canvas.setAttribute('width', width + '');
        canvas.setAttribute('height', height + '');
        //IE DOMParser has issues with svg xml
        //https://code.google.com/p/canvg/issues/detail?id=189
        if (browserInfo.isIE) {
            svg = svg.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/gi, '');
        }
        let canvg = await import('./canvg-63f80a17.js');
        canvg = canvg.default || canvg;
        canvg(canvas, svg);
        canvas.toBlob(function (blob) {
            $(canvas).remove();
            callback(blob);
        });
    }
    //We map dataLabel state differently depending on chart type.
    //Non-stack charts:
    //highcharts dataLabels are set with this._shouldShowDataLabels bool,
    //Stack charts:
    secondaryRender(scope) {
        // note that in the past we were doing things like series.update(...) which
        // will call .redraw N times under the hood ( for n series ),
        // we just need to call redraw once
        let chartModel = scope.getChartModel();
        if (chartModel.getShowStackedLabels()) {
            this.setStackLabelVisibility(true);
        }
        chartModel.getVisualizedColumns().forEach((col) => {
            let columnId = col.getGuid();
            let isDataLabelEnabled = _.isUndefined(chartModel.getShowDataLabels(columnId))
                ? !!this.dataLabelsEnabledByDefault
                : chartModel.getShowDataLabels(columnId);
            this.setDataLabelVisibility(isDataLabelEnabled, columnId);
        });
        this.redraw(); // redraw will be called anyway if do series redraw
        // we do not need to perform that in angular
        setTimeout(() => {
            bindEvents(scope, this.renderTo);
        }, 0);
    }
    // TODO(Jasmeet): Change this to be axisId based.
    setYAxisRange(axisIdx, range, alignTicks) {
        this.updateExtremes(this.yAxis[axisIdx], range);
        // In the case where the scale is set we avoid align ticks, otherwise
        // highcharts tries to scale y axis with that in mind.
        this.options.chart.alignTicks = alignTicks;
    }
    toggleXAxis(enabled) {
        this.xAxis.forEach((axis, idx) => this.toggleAxis(axis, enabled));
    }
    toggleYAxis(enabled) {
        this.yAxis.forEach((axis, idx) => this.toggleAxis(axis, enabled));
    }
    toggleColorAxis(enabled) {
        this.colorAxis[0].update({ visible: enabled }, false);
    }
    // TODO(chab) when we de-select/select we should zoom IFF there is an user-defined zoom
    // and this concept should be the same for geo-map, so we should have an uniform API for
    // that behaviour in the future
    setSeriesVisibility(serie, visible) {
        let highchartSerie = this.get(serie.name);
        if (!highchartSerie) {
            this.addSerieToHighChart(serie.name, visible);
        }
        else {
            highchartSerie.setVisible(!!visible, false);
        }
    }
    onLegendClick(event, chart) {
        let serie = event.target;
        serie.userOptions.visible = !serie.userOptions.visible;
        if (!chart.userOptions.isYAxisShared) {
            return;
        }
    }
    onSingularSerieSelection(serieName) {
        let serie = this.get(serieName);
        let isOnlySelectedSeries = this.series
            .all(s => s === serie ? !!s.visible : !s.visible);
        if (!isOnlySelectedSeries && !serie) {
            this.addSerieToHighChart(serieName, true);
        }
        this.series.forEach((s) => {
            // singular selection selects just the one clicked and de-selects others,
            // de-selection selects all
            let visible = isOnlySelectedSeries ? true : (s.name === serieName);
            this.setSeriesVisibility(s, visible);
        });
    }
    setExtremes(xAxisExtremes, yAxisExtremes) {
        let xAxes = this.xAxis, yAxes = this.yAxis;
        if (xAxisExtremes && xAxisExtremes.length === xAxes.length) {
            // If any x-axis extreme doesn't overlap with what is saved, then abort.
            xAxes.forEach((xAxis, index) => this.updateExtremes(xAxis, xAxisExtremes[index]));
        }
        if (yAxisExtremes) {
            if (yAxes.length === 1 && yAxisExtremes.length > 1) {
                //switched from multiple y-axes to single y-axis,
                // the common axis get the end points of the combined
                // extremes of all old axes
                let maxMax = yAxisExtremes.max('max').max, minMin = yAxisExtremes.min('min').min;
                let currentYExtreme = yAxes[0].getExtremes();
                if (currentYExtreme.max < minMin || currentYExtreme.min > maxMax) {
                    return;
                }
                this.updateExtremes(yAxes[0], { min: minMin, max: maxMax });
            }
            else if (yAxes.length > 1 && yAxisExtremes.length === 1) {
                //switched from singe y-axis to multiple y-axes,
                // all axes get the extremes of the common axis
                yAxes.forEach(yAxis => this.updateExtremes(yAxis, yAxisExtremes[0]));
            }
            else {
                yAxes.forEach((yAxis, index) => this.updateExtremes(yAxis, yAxisExtremes[index]));
            }
        }
    }
    updateLegendDisplay(isVertical, legendEnabled) {
        if (this.userOptions.chart.type === 'heatmap'
            || this.userOptions.chart.type === 'treemap') {
            // false stands for turing off colorAxis re-render as we will do the same
            // while legend update
            this.toggleColorAxis(legendEnabled);
            // false stands for turning off chart re-render, but it will re-render the legend.
            // highcharts derieve legend for heatmap and treemap from colorAxis only, so rerendering
            // legend is same as re-rendering colorAxis.
            this.legend.update({ enabled: legendEnabled }, false);
            return;
        }
        if (!legendEnabled) {
            this.legend.update({ enabled: false }, false);
            return;
        }
        if (!isVertical) {
            this.legend.update({
                enabled: legendEnabled,
                verticalAlign: 'bottom',
                layout: 'horizontal',
                align: 'center',
                y: blinkConstants_1.legendTopSpacing.HORIZONTAL
            }, false);
        }
        else {
            this.legend.update({
                enabled: legendEnabled,
                verticalAlign: 'middle',
                layout: 'vertical',
                align: 'right',
                y: blinkConstants_1.legendTopSpacing.VERTICAL
            }, false);
        }
    }
    // NOTE(chab) when we have a shared axis, we need to update manually the range if
    // we add/remove a serie
    correctYAxisRange() {
        // if y axis shared, we need to correct the  y axis
        if (this.userOptions.isYAxisShared && this.series.length > 0) {
            let visibleSeries = this.series.filter(s => !!s.visible);
            if (visibleSeries.length === 0) {
                // we do not need to update axis there, and this would actually messes our
                // display as it's some special case
                return;
            }
            let extent = visibleSeries.reduce((currentExtent, serie) => {
                if (serie.dataMax > currentExtent.max) {
                    currentExtent.max = serie.dataMax;
                }
                if (serie.dataMin < 0 && currentExtent.min) {
                    currentExtent.min = serie.dataMin;
                }
                return currentExtent;
            }, { max: 0, min: Number.MAX_VALUE });
            if (extent.min > 0) {
                extent.min = 0;
            }
            this.yAxis[0].setExtremes(extent.min, extent.max, true, true);
        }
    }
    enableXAxisGridLines(enabled) {
        this.xAxis.forEach(axis => this.updateAxisGridLine(axis, enabled), false);
    }
    enableYAxisGridLines(enabled) {
        this.yAxis.forEach(axis => this.updateAxisGridLine(axis, enabled), false);
    }
    redraw(animate = false) {
        super.redraw(animate);
        postProcessHighchartDataLabels(this);
    }
    // in case when we are not updating chart, but charts needs to be redrawn,
    // for eg, we have changes in chart model that are to be reflected in chart via callbacks.
    lightRedraw(animate = false) {
        this.update({});
        this.redraw(animate);
    }
    toggleAxises(shouldShowXAxisLabels, shouldShowYAxisLabels) {
        this.toggleYAxis(shouldShowYAxisLabels);
        // turning off the yAxis label on the heatmap crashes highchart
        // use http://jsfiddle.net/8kcLd7qz/19/ to investigate
        if (this.userOptions.chart.type !== 'heatmap'
            && this.userOptions.chart.type !== 'treemap') {
            this.toggleXAxis(shouldShowXAxisLabels);
        }
    }
    toggleAxisesTitle(enabled) {
        this.xAxis.forEach((axis, index) => {
            if (enabled) {
                axis.update({ title: { text: this.cachedXAxisHtml[index] } }, false);
            }
            else {
                axis.update({ title: { text: ' ' } }, false);
            }
        });
        this.yAxis.forEach((axis, index) => {
            if (enabled) {
                axis.update({ title: { text: this.cachedYAxisHtml[index] } }, false);
            }
            else {
                axis.update({ title: { text: ' ' } }, false);
            }
        });
    }
    updateSerieColor(serieName, color) {
        let serie = this.get(serieName);
        if (serie) {
            let colors = {
                color: color
            };
            // A Waterfall chart can have two different colors, one for positive
            // column bar and one for negative column bar.
            if (this.userOptions.chart.type === 'waterfall') {
                colors.color = color;
                colors.negativeColor = chroma(color).alpha(0.3).css();
            }
            this.updateSerie(serieName, colors);
        }
    }
    updateXaxisScrollConfig(series, chartType, width, height) {
        this.setExtremes([getScrollEnabledMinMaxConfig(series, chartType, width, height)], null);
    }
    updateSerie(serieName, changes) {
        let serie = this.get(serieName);
        if (serie) {
            //TODO(chab) try to avoid those check by marking fake series
            // in the legend upfront
            serie.update(changes);
        }
    }
    toggleAxis(axis, enabled) {
        axis.update({
            labels: {
                enabled
            }
        }, false);
    }
    updateExtremes(axis, extremes) {
        if (!extremes) {
            return;
        }
        axis.options.startOnTick = false;
        axis.options.endOnTick = false;
        axis.update({
            startOnTick: false,
            endOnTick: false
        }, false);
        // there are 3 call sites
        // ( via UI zoom + yAxis range, or for zooming just after rendering)
        // in every case, if we pass undefined, that means that we want the initial size
        // in y axis, this does not match highchart behaviour, so we store those values in a map
        // and reuse them there
        axis.setExtremes(extremes.min, extremes.max, false);
    }
    _init() {
        this.pointer.init(this, this.options);
    }
    addSerieToHighChart(serieName, isVisible) {
        //TODO(chab) pull that out
        let vizModelSerie = this._blinkSerieGetter(serieName);
        if (!vizModelSerie) {
            this.logger.warn('ThoughtSpot is not able to display the series ', serieName);
            return;
        }
        vizModelSerie.id = vizModelSerie.name;
        vizModelSerie.visible = isVisible;
        this.addSeries(vizModelSerie, true);
    }
    getGridLineConfig(enabled) {
        return enabled ? onGridline : offGridline;
    }
    updateAxisGridLine(axis, enabled) {
        axis.update(this.getGridLineConfig(enabled), false);
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Shashank Singh (sunny@thoughtspot.com),
 * Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 * Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * Class wrapping highcharts config.
 */
let _logger$4 = logger_3('blink-highchart-config');
let TOOLTIP_TEMPLATE = '<div class="chart-tooltip-block" style="z-index:9999;">' +
    '<span class="{1} chart-tooltip-key" style="{2}">{3}</span> ' +
    '<span class="{4} chart-tooltip-value" style="{5}">{6}</span></div>';
let incompleteZoneDashStyle = 'ShortDot';
let constants = {
    GROUPING_POINT_COUNT_THRESHOLD_HIGH: 1500,
    formatting: {
        MIN_AXIS_LABEL_GAP: 40,
        MAX_AXIS_LABEL_HEIGHT: 60,
        X_AXIS_TITLE_MIN_OFFSET: 40,
        MIN_X_AXIS_TITLE_OFFSET: 15,
        MIN_Y_AXIS_TITLE_OFFSET: 5,
        // Note(sunny): legend size related constants need to be in sync with the CSS
        RIGHT_MARGIN_FOR_LEGEND: 0,
        BOTTOM_MARGIN_FOR_LEGEND: 0,
        TICK_SIZE: 10,
        PLOT_LINE_WIDTH: 1,
        PLOT_LINE_Z_INDEX: 4,
        INVERT_AXIS_MARGIN: 70,
        LEGEND_WIDTH: 150
    }
};
const RADIAL_COLUMN_TITLE_CLASS = 'radialColumnTitle';
const RADIAL_VALUE_CLASS = 'radialValue';
function getDateTickPositioner(chartModel) {
    // when the function is called, this is setted to the axis
    return function () {
        let axisWidth = this.width;
        return getDateTickPositions(chartModel, axisWidth);
    };
}
function getClassByLabelType(labelType, dataObject) {
    switch (labelType) {
        case TooltipLabelType.X_LABEL: return {
            labelClass: 'xAxisTitle',
            valueClass: 'pointX'
        };
        case TooltipLabelType.Y_LABEL: return {
            labelClass: 'yAxisTitle',
            valueClass: 'pointY'
        };
        case TooltipLabelType.CATEGORY_LABEL: return {
            labelClass: 'categoryTitle',
            valueClass: 'categoryName'
        };
        case TooltipLabelType.RADIAL_LABEL: return {
            labelClass: RADIAL_COLUMN_TITLE_CLASS,
            valueClass: RADIAL_VALUE_CLASS
        };
        case TooltipLabelType.SERIES_LABEL: return {
            labelClass: 'seriesTitle',
            valueClass: 'seriesValue',
            valueStyle: !!dataObject.valueColor ? 'color:' + dataObject.valueColor : ''
        };
    }
    return {
        labelClass: '',
        valueClass: ''
    };
}
function tooltipComponent(tooltipData) {
    let label = (!!tooltipData.label) ? tooltipData.label + ':' : '', labelStyle = tooltipData.titleStyle || '', labelClass = tooltipData.labelClass, value = tooltipData.value, valueStyle = tooltipData.valueStyle || '', valueClass = tooltipData.valueClass;
    return stringUtil_1(TOOLTIP_TEMPLATE, labelClass, labelStyle, label, valueClass, valueStyle, value);
}
function getLabelWithHtml(label, { link }) {
    if (label && link) {
        return getHyperlinkLabelHTML(label, link);
    }
    if (!label) {
        return link;
    }
    return label;
}
//TODO(chab) type and clean the formatting part
function getDataLabel(chartModel, configOpts, context) {
    // context seems to be the point ?
    let labelColumn, value;
    labelColumn = chartModel.getCategoryColumnNotOnAxis();
    if (!!labelColumn) {
        return context.point.categoryName;
    }
    let dataLabelFormatter = configOpts.dataLabelFormatter;
    if (_.isFunction(dataLabelFormatter)) {
        return dataLabelFormatter.call(context);
    }
    labelColumn = findSeriesColumnFromContext(chartModel, context);
    value = context.y;
    return getDataLabelFromColumn(chartModel, labelColumn, value);
}
function formatYAxisLabel(value, axisId, tickPositions, tickInterval, yAxisColumn, chartModel, minValue, maxValue, showInfinity, showMinusInfinity, infinityPlaceholderValue) {
    let colId = yAxisColumn.getDataRowIndex();
    let captionAndLink = chartModel.captionValuesForYAxisAt(colId, value);
    let fullLabel = getFullLabelForYAxis(value, axisId, tickPositions, tickInterval, yAxisColumn, chartModel, minValue, maxValue, showInfinity, showMinusInfinity, infinityPlaceholderValue, captionAndLink);
    return getLabelWithHtml(fullLabel, { link: !!captionAndLink && captionAndLink.link });
}
class BlinkHighchartConfig {
    /**
     * A builder class abstracting the Highcharts specific detail
     * for configuring various charting options.
     * All setter methods must return 'this' (builder pattern).
     */
    constructor(chartModel, containerDimensions, shouldShowXAxisLabels, shouldShowYAxisLabels, disableTransformations) {
        this._chartModel = chartModel;
        this._containerDimensions = containerDimensions;
        this._shouldShowXAxisLabels = shouldShowXAxisLabels;
        this._shouldShowYAxisLabels = shouldShowYAxisLabels;
        this._configOptions = configOptions(chartModel.getChartType(), chartModel);
        this._highchartConfig = {
            chart: {
                type: getHighchartChartType(chartModel.getChartType())
            },
            legend: {},
            navigator: {},
            plotOptions: {},
            rangeSelector: {},
            scrollbar: {},
            series: {},
            title: false,
            tooltip: {},
            xAxis: {},
            yAxis: {},
            shouldShowXAxisLabels: shouldShowXAxisLabels,
            shouldShowYAxisLabels: shouldShowYAxisLabels,
            dataLabelsEnabledByDefault: !!this._configOptions.dataLabelsEnabledByDefault,
            shouldRenderInStackedLabelFormat: this.shouldRenderInStackedLabelFormat()
        };
        this._disableTransformations = disableTransformations;
    }
    //Detailed labels infer a stacked label format, which indicates how
    //shouldShowDataLabels is mapped in highcharts
    shouldRenderInStackedLabelFormat() {
        return !!this._configOptions.allowedConfigurations.showDetailedLabels;
    }
    shouldShowRegressionLine() {
        return this._chartModel.getShowRegressionLine()
            && this._chartModel.canShowRegressionLine()
            && this._chartModel.getSeries().length === 1;
    }
    setContainer($chartContainer) {
        // TODO(Jasmeet): Verify how this will work with highchart server
        // and can this be avoided in client
        this._highchartConfig.chart.renderTo = $chartContainer;
        return this;
    }
    setColors(useContextOptionRandomizationIdx) {
        let defaultQueryData = this._chartModel.getDefaultQueryData();
        let series = this._chartModel.getSeries();
        let defaultTheme = ChartThemeService.getDefaultTheme();
        let allColors = defaultTheme.allColors;
        if (this._configOptions.useAlphaColors) {
            allColors = convertToAlpha(allColors);
        }
        let legendSize = (!!this._configOptions.isMultiColorSeries)
            ? !!defaultQueryData && defaultQueryData.length
            : series.length;
        if (!!this._configOptions.isMultiColorSeries) {
            let legendColumns = this._chartModel.getLegendColumns();
            if (legendColumns.length !== 0) {
                _logger$4.error('Multi color series not supported in ' +
                    'chart with legend');
                this._highchartConfig.colors = allColors;
                return this;
            }
            let paletteMap = this._chartModel.getMultiColorSeriesColors();
            let knownPalettesForSeries = paletteMap[series[0].blinkSeriesId];
            let reusablePalette = !!knownPalettesForSeries
                ? knownPalettesForSeries[this._chartModel.getXAxisColumnsHash()]
                : null;
            if (!!reusablePalette) {
                //When colors are less than items to be displayed, we add colors in circular order
                //again. This is taken care of by highcharts but in order to change color of one
                // attribute(with same color), other one also changes. Hence, this is to be done
                // manually
                if (reusablePalette.length < defaultQueryData.length) {
                    const paletteLengthToFill = defaultQueryData.length - reusablePalette.length;
                    let idx = 0;
                    while (idx < paletteLengthToFill) {
                        reusablePalette.push(reusablePalette[idx % (reusablePalette.length - 1)]);
                        idx++;
                    }
                }
                this._highchartConfig.colors = reusablePalette;
                const specConfigOptions = configOptions(this._chartModel.chartType, void 0);
                if (specConfigOptions.allowedConfigurations.configureColorForXAttrs) {
                    this._chartModel.getDataModel()._xValueToRawValues
                        .forEach((rawValue, idx) => {
                        let label = this._chartModel.getXAxisLabelAt(idx, void 0, void 0);
                        if (!!this._chartModel.getSeriesColor(label)) {
                            this._highchartConfig.colors[idx]
                                = this._chartModel.getSeriesColor(label);
                        }
                    });
                }
                else {
                    this._chartModel.getLegendLabels()
                        .forEach((legendLabel, idx) => {
                        let label = legendLabel.label;
                        if (!!this._chartModel.getSeriesColor(label)) {
                            this._highchartConfig.colors[idx]
                                = this._chartModel.getSeriesColor(label);
                        }
                    });
                }
                return this;
            }
        }
        let seriesColorMap = this._chartModel.getSeriesColorsMap() || {};
        let usedColors = [];
        this._chartModel.getSeries().forEach((serie) => {
            usedColors.push(seriesColorMap[serie.blinkSeriesId]);
        });
        let randomizationIdx = useContextOptionRandomizationIdx
            ? this._chartModel.getContextOptions().colorIndex
            : null;
        let colors = getColors(allColors, legendSize, usedColors, randomizationIdx, this._configOptions.useRainbowColors);
        this._highchartConfig.colors = colors;
        return this;
    }
    disableZoom() {
        this._highchartConfig.chart.zoomType = '';
        this._highchartConfig.chart.panning = true;
        return this;
    }
    /**
     * Depending on the chart type, this will automatically configure the correct zoom type.
     * @return {ChartConfig}
     */
    setZoomType() {
        this._highchartConfig.chart.zoomType = 'xy';
        return this;
    }
    configureXAxis(gridLineEnabled) {
        let chartModel = this._chartModel;
        let isXAxisVertical$1 = isXAxisVertical(chartModel.chartType);
        let xAxis = this._highchartConfig.xAxis;
        xAxis.allowDecimals = true;
        const xAxisModel = chartModel.getXAxes()[0];
        this.configureGridline(xAxis, gridLineEnabled);
        if (gridLineEnabled) {
            xAxis.gridlineColor = onGridline.gridLineColor;
            xAxis.gridLineWidth = onGridline.gridLineWidth;
        }
        let omitYear;
        if (chartModel.isXAxisOrdinalBased()) {
            xAxis.min = 0;
            if (this._configOptions.cardinalityIndexStartsFromZero) {
                //e.g spider web type chart has cardinal index starts from 0
                xAxis.max = chartModel.getXAxisCardinality();
            }
            else {
                // highcharts can end up creating ticks at N, where N
                // is the cardinality of xAxis (SCAL-4695)
                xAxis.max = chartModel.getXAxisCardinality() - 1;
            }
            // NOTE: This is set here because the handling of highcharts
            // is different to determine tickOffsets when looking at values/category.
            xAxis.minTickInterval = 1;
            xAxis.minRange = 1;
            xAxis.type = 'category';
            //in non-measure cases the x-axis values are indices in the data-array.
            // on zooming enough the highcharts tries to generate intermediate
            // values between the given data points which doesn't make sense in this case
            xAxis.allowDecimals = false;
        }
        else if (chartModel.isTimeSeries()) {
            xAxis.type = 'datetime';
            if (isCustomCalendar()) {
                xAxis.tickPositioner = getDateTickPositioner(chartModel);
            }
        }
        let xAxisColumn = chartModel.getXAxisColumns()[0];
        if (chartModel.isXAxisMeasure()) {
            if (!xAxisColumn.isDoubleColumn()) {
                xAxis.allowDecimals = false;
            }
        }
        if (!xAxis.title) {
            xAxis.title = {};
        }
        const axisId = flags.getValue(flags.BLINK_FLAGS.enableChartConfigV2.name) ?
            chartModel.getXAxes()[0].id : null;
        xAxis.title.useHTML = true;
        xAxis.title.text = getAxisTemplate(axisId, chartModel, chartModel.getXAxisColumns(), isXAxisVertical$1, this._disableTransformations);
        if (!xAxis.labels) {
            xAxis.labels = {};
        }
        xAxis.title.alwaysShownText = '';
        if (chartModel.isTimeSeries() && !chartModel.isXAxisOrdinalBased()) {
            let max = chartModel.getMaxXValue(xAxisColumn);
            let min = chartModel.getMinXValue(xAxisColumn);
            let format = 'yyyy';
            //
            let minYear = dateUtil_40(min, format);
            let maxYear = dateUtil_40(max, format);
            omitYear = minYear === maxYear;
            if (omitYear) {
                xAxis.title.alwaysShownText = `<i>${strings.FOR} ${minYear}</i>`;
                xAxis.title.text += xAxis.title.alwaysShownText;
                xAxis.title.style = {
                    textAlign: 'center',
                };
            }
            if (xAxisColumn.isDescendingSort()) {
                xAxis.reversed = true;
            }
        }
        if (!this._shouldShowXAxisLabels) {
            xAxis.lineColor = 'transparent';
            xAxis.tickWidth = 0;
        }
        let showInfinity = false, showMinusInfinity = false, minXValue = Number.NEGATIVE_INFINITY, maxXValue = Number.POSITIVE_INFINITY, infinityPlaceholderValue = Number.POSITIVE_INFINITY;
        if (chartModel.isXAxisMeasure()) {
            if (xAxisColumn.isDescendingSort()) {
                xAxis.reversed = true;
            }
            showInfinity = chartModel.columnHasInfinityValues(xAxisColumn);
            showMinusInfinity = chartModel.columnHasMinusInfinityValues(xAxisColumn);
            if (showInfinity || showMinusInfinity) {
                minXValue = chartModel.getMinXValue(xAxisColumn);
                maxXValue = chartModel.getMaxXValue(xAxisColumn);
                infinityPlaceholderValue =
                    computeAxisInfinityPlaceholderValue(minXValue, maxXValue);
                xAxis.endOnTick = true;
                if (showInfinity) {
                    xAxis.max = infinityPlaceholderValue;
                }
                if (showMinusInfinity) {
                    xAxis.min = -1 * infinityPlaceholderValue;
                }
            }
        }
        xAxis.labels.enabled = this._shouldShowXAxisLabels;
        xAxis.id = axisId || xAxisColumn.getId();
        xAxis.labels.useHTML = chartModel.hasCaptionValuesForXAxis();
        xAxis.labels.formatter = function () {
            let captionAndLink = chartModel.captionValuesForXAxisAt(this.value);
            let fullLabel = getFullLabelForXAxis(this.value, axisId, this.axis.tickPositions, this.axis.tickInterval, chartModel, minXValue, maxXValue, showInfinity, showMinusInfinity, infinityPlaceholderValue, omitYear, captionAndLink);
            return getLabelWithHtml(fullLabel, { link: !!captionAndLink && captionAndLink.link });
        };
        if (this._configOptions.getMinTickIntervalForXAxis) {
            xAxis.minTickInterval =
                this._configOptions.getMinTickIntervalForXAxis(chartModel.getXAxisCardinality());
        }
        this._highchartConfig.cachedXAxisHtml = [xAxis.title.text];
        return this;
    }
    setAfterSetExtremesCallback(callback) {
        this._highchartConfig.xAxis.events = {
            afterSetExtremes: callback
        };
        this._highchartConfig.yAxis.forEach((axis) => {
            axis.events = {
                afterSetExtremes: callback
            };
        });
        return this;
    }
    configureColorAxis() {
        let chartModel = this._chartModel;
        let valueColumn = this._configOptions.colorAxisColumn;
        if (!valueColumn) {
            this._highchartConfig.colorAxis = this._highchartConfig.colorAxis || {};
            this._highchartConfig.colorAxis.showInLegend = false;
            return this;
        }
        else {
            if (this._highchartConfig.colorAxis) {
                delete this._highchartConfig.colorAxis.showInLegend;
            }
        }
        let maxColor = chroma(ChartThemeService.getDefaultTheme().primaryColors[1]).hex();
        let minColor = chroma(maxColor).brighten(2).css();
        //TODO(chab) try to be agnostic of the chart type
        if (this._chartModel.getChartType()
            === chartTypes.TREEMAP) {
            maxColor = chroma(ChartThemeService.getDefaultTheme().primaryColors[1]).hex();
            minColor = chroma(ChartThemeService.getDefaultTheme().primaryColors[0]).hex();
        }
        let showInfinity = chartModel.columnHasInfinityValues(valueColumn), showMinusInfinity = chartModel.columnHasMinusInfinityValues(valueColumn), minValue = chartModel.getMinYValue(valueColumn), maxValue = chartModel.getMaxYValue(valueColumn);
        let infinityPlaceholderValue = chartModel.getInfinityPlaceholder(valueColumn);
        let colorAxis = {
            stops: [
                [0, minColor],
                [1, maxColor]
            ],
            labels: {
                formatter: function () {
                    let value = this.value;
                    let infinityLabel = formatInfinityValue(value, this.axis.tickInterval, showInfinity, showMinusInfinity, minValue, maxValue, infinityPlaceholderValue, false, //TODO(chab) grab legend setting
                    true); // isOnColorAxis
                    return infinityLabel ? infinityLabel : chartModel.getLabelForNumericColumn(value, valueColumn, [], {
                        noShorten: false
                    });
                }
            }
        };
        if (showInfinity) {
            colorAxis.max = infinityPlaceholderValue;
        }
        else if (showMinusInfinity) {
            colorAxis.min = -1 * infinityPlaceholderValue;
        }
        this._highchartConfig.colorAxis = colorAxis;
        return this;
    }
    /**
     * @return {ChartConfig}
     */
    configureYAxis(gridlineEnabled) {
        let chartModel = this._chartModel;
        this._highchartConfig.yAxis = [];
        this._highchartConfig.cachedYAxisHtml = [];
        if (flags.getValue(flags.BLINK_FLAGS.enableChartConfigV2.name)) {
            const yAxes = chartModel.getYAxes();
            _.forEach(yAxes, (yAxis) => {
                const columnsInAxis = yAxis.properties.linkedColumns.map((colId) => chartModel.getColumn(colId));
                let yAxisConfig = this.prepareYAxisConfig(columnsInAxis, yAxis.id, gridlineEnabled, yAxis.properties.isOpposite);
                this._highchartConfig.yAxis.push(yAxisConfig);
            });
        }
        else {
            let showYAxisLinkingOption = this
                ._configOptions.allowedConfigurations.showYAxisLinkingOption;
            let isYAxisShared = showYAxisLinkingOption ? chartModel.isYAxisShared()
                : !showYAxisLinkingOption;
            if (!isYAxisShared) {
                chartModel.getYAxisColumns().forEach((column) => {
                    let yAxisConf = this.prepareYAxisConfig([column], chartModel.getAxisForColumn(column.getId()).id, gridlineEnabled);
                    this._highchartConfig.yAxis.push(yAxisConf);
                });
                this._highchartConfig.isYAxisShared = true;
            }
            else {
                let yAxisConf = this.prepareYAxisConfig(chartModel.getYAxisColumns(), chartModel.getAxisForColumn(chartModel.getYAxisColumns()[0].getId()).id, gridlineEnabled);
                this._highchartConfig.yAxis.push(yAxisConf);
                this._highchartConfig.isYAxisShared = false;
            }
        }
        return this;
    }
    /**
     * @return {ChartConfig}
     */
    configureAxisScroll() {
        if (!this._chartModel.isResponsiveLayoutEnabled() &&
            this._configOptions.allowedConfigurations.responsiveLayout) {
            _.assign(this._highchartConfig.xAxis, this.getScrollBarEnabledConfig());
            this._highchartConfig.chart.spacingBottom =
                responsiveLayoutDisabledSpacingBottom;
        }
        return this;
    }
    configurePlotLines() {
        let chartModel = this._chartModel;
        let chartConfig = this._highchartConfig;
        // assign color based on metric for each data point
        // TODO (sunny): avoid similar colors in default series colors
        let yAxisColumns = chartModel.getYAxisColumns();
        let showYAxisLinkingOption = this
            ._configOptions.allowedConfigurations.showYAxisLinkingOption;
        let multipleYAxes = showYAxisLinkingOption ?
            yAxisColumns.length > 1 && !chartModel.isYAxisShared() : false;
        // configure plot lines for each metric
        let yAxisConfigs = chartConfig.yAxis;
        yAxisColumns.forEach((yAxisColumn, columnIndex) => {
            let yAxisConfig = multipleYAxes ? yAxisConfigs[columnIndex] : yAxisConfigs[0];
            // In case of invisible series the config is not generated.
            if (!yAxisConfig) {
                return;
            }
            if (!yAxisConfig.plotLines) {
                yAxisConfig.plotLines = [];
                yAxisConfig.plotBands = [];
            }
            let metricDefinition = yAxisColumn.getMetricsDefinition();
            if (!metricDefinition) {
                return;
            }
            let metrics = metricDefinition.getMetrics();
            // make a copy before sorting
            metrics = metrics.slice(0);
            // sort metrics by in decreasing order of max values. in case of metrics that
            // meet at the ends (e.g. [0.1-0.2),[0.2, 0.3) we the plot line of the lower
            // range to hide the plot line of the higher range
            metrics.sort(function (metricA, metricB) {
                return metricB.getRange().max - metricA.getRange().max;
            });
            yAxisConfig.plotLines = metrics
                .filter(metric => !metric.getPlotAsBand())
                .flatMap(metric => {
                let range = metric.getRange();
                return [range.getMax(), range.getMin()]
                    .map(threshold => ({
                    color: metric.getColor(),
                    width: constants.formatting.PLOT_LINE_WIDTH,
                    value: threshold,
                    zIndex: constants.formatting.PLOT_LINE_Z_INDEX
                }));
            });
            yAxisConfig.plotBands = metrics
                .filter(metric => metric.getPlotAsBand())
                .map(function (metric) {
                let range = metric.getRange();
                return {
                    color: metric.getColor(),
                    from: range.getMin(),
                    to: range.getMax()
                };
            });
        });
        return this;
    }
    configureSeries(onSeriesClick, numEnabledSeriesOnLoad, onLegendClick, disableHighlightOnHover) {
        let chartModel = this._chartModel;
        this.setYAxisInfoInSeries();
        let series = chartModel.getSeries();
        if (!series) {
            return this;
        }
        let seriesPlotOptions = this._highchartConfig.plotOptions.series = {
            stickyTracking: false
        };
        let getDefaultIncompleteColor = function (series) {
            return Highcharts.Color(series.color).setOpacity(0.4).get();
        };
        let getDefaultIncompleteThreshold = dateUtil_38.bind(this, Date.now());
        //(SCAL-4504): By default highcharts calculates the pointRange as the max of pointRange
        // of each series in the data where the pointRange of one series is the distance between
        // the two closest data points in that series (in units of the value on the axis).
        // This means that if one of the series has missing data points in the middle,
        // it will cause the combined pointRange to be too high.
        // In case of timeseries this will mean that tick interval will have lower granularity than
        // is necessary
        if (chartModel.isTimeSeries() && !chartModel.isXAxisOrdinalBased()) {
            let dateTimeColumn = chartModel.getXAxisColumns()[0], timeBucket = dateTimeColumn.getTimeBucket(), minTickInterval = dateUtil_41(timeBucket);
            if (minTickInterval) {
                series.forEach((s) => {
                    s.pointRange = minTickInterval;
                    s.colsize = minTickInterval;
                });
            }
            // Configuring incomplete zones here
            // http://api.highcharts.com/highcharts#plotOptions.series.zones
            // We added a custom getColor in the zones as a plugin.
            this._configOptions.incompleteZone = this._configOptions.incompleteZone || {};
            if (!this._configOptions.incompleteZone.disabled) {
                let incompleteThreshold = (!!this._configOptions.incompleteZone.getIncompleteThreshold) ?
                    this._configOptions.incompleteZone.getIncompleteThreshold(timeBucket) :
                    getDefaultIncompleteThreshold(timeBucket);
                seriesPlotOptions.zones = [{
                        value: incompleteThreshold
                    }, {
                        dashStyle: incompleteZoneDashStyle,
                        getColor: this._configOptions.incompleteZone.getIncompleteColor
                            || getDefaultIncompleteColor
                    }];
                series.forEach((serie) => {
                    serie.data.forEach((serieDataPoint) => {
                        if (serieDataPoint.x > incompleteThreshold) {
                            serieDataPoint.ignoreInRegression = true;
                        }
                    });
                });
            }
        }
        else if (chartModel.isXAxisOrdinalBased()) {
            // (SCAL-7059) highcharts has a bug (http://jsfiddle.net/shashank_singh/jzwd0v0r/)
            // that causes it to space x-axis labels according to the max delta of point value
            // in any series. this causes unnecessarily missing ticks (and labels) when the series
            // data is sparse (that some series have points for few x-axis values).
            // in the case of x-axis with ordinal values we know that the range of x-axis values
            // is continuous integer with no gaps hence we can force pointRange to be 1
            series.forEach(s => s.pointRange = 1);
        }
        seriesOverride(chartModel.getChartType(), chartModel);
        let visibleSeriesIds = chartModel.getVisibleSeriesIds();
        // TODO(chab) pull that out of blink-highchart-config in the chartModel
        // mark series has visible
        if (visibleSeriesIds && visibleSeriesIds.length) {
            visibleSeriesIds = visibleSeriesIds.map(id => id.toLowerCase());
            let visibleSeriesIdMap = mapArrayToBooleanHash(visibleSeriesIds);
            let chartSeries = this._highchartConfig.series = chartModel.getSeries().slice();
            chartSeries.forEach((chartSerie) => {
                chartSerie.visible =
                    _.has(visibleSeriesIdMap, chartSerie.blinkSeriesId.toLowerCase());
            });
        }
        if (!this._highchartConfig.series || !this._highchartConfig.series.length) {
            this._highchartConfig.series = chartModel.getSeries().slice(0, numEnabledSeriesOnLoad);
            // we need to pass the communicate the colors to the vizModel,
            // so we can put them in the legend
            chartModel.getSeries().slice(numEnabledSeriesOnLoad, chartModel.getSeries().length)
                .forEach(function (s, idx) {
                s.color =
                    this._highchartConfig.colors[idx % this._highchartConfig.colors.length];
                s.visible = false;
            }, this);
            let displayYValuesWithLegendSeries = configOptions(chartModel.getChartType(), null).displayYValuesWithLegendSeries;
            if (displayYValuesWithLegendSeries) {
                let chartModelSeries = chartModel.getSeries();
                let totalSeries = chartModelSeries.length;
                if (totalSeries >= numEnabledSeriesOnLoad) {
                    let yAxisColumnsAsSeries = chartModel.getYAxisColumns().slice(1);
                    let totalYAxisAsSeries = yAxisColumnsAsSeries.length;
                    let legendSeries = chartModelSeries.slice(0, totalSeries - totalYAxisAsSeries);
                    let yAxisSeries = chartModelSeries.slice(totalSeries - totalYAxisAsSeries);
                    this._highchartConfig.series = legendSeries.slice(0, numEnabledSeriesOnLoad);
                    Array.prototype.push.apply(this._highchartConfig.series, yAxisSeries);
                }
            }
        }
        let seriesColors = chartModel.getSeriesColorsMap();
        let self = this;
        this._highchartConfig.series.forEach(function (serie, idx) {
            if (_.has(seriesColors, serie.blinkSeriesId)) {
                serie.color = seriesColors[serie.blinkSeriesId];
            }
            delete serie.regression;
            if (self.shouldShowRegressionLine()) {
                serie.regression = true;
                serie.regressionSettings = {
                    visible: (serie.visible === void 0) || serie.visible //try to remove that
                };
            }
            serie.id = serie.name;
        });
        seriesPlotOptions.dataLabels = {
            enabled: true,
            padding: 2,
            borderRadius: 2,
            style: {
                fontSize: '12px'
            },
            formatter: function () {
                return getDataLabel(chartModel, self._configOptions, this);
            }
        };
        let chartConfig = this._highchartConfig;
        // assign color based on metric for each data point
        // TODO (sunny): avoid similar colors in default series colors
        let yAxisColumns = chartModel.getYAxisColumns();
        let yAxisGuidToColumn = yAxisColumns.reduce(function (yAxisGuidToColumn, column) {
            yAxisGuidToColumn[column.getGuid()] = column;
            return yAxisGuidToColumn;
        }, {});
        chartConfig.series.forEach(function (serie, seriesIndex) {
            let yAxisColumn = null;
            // if there is only one y-axis column, series is because of the legend
            // each series' corresponding y-axis column is the first (and only)
            // y-axis column. if there are more than one y-axis columns, each
            // series corresponds to one y-axis column, in the order in which
            // the y-axis columns appear in the list of y-axis columns.
            if (yAxisColumns.length === 1) {
                yAxisColumn = yAxisColumns[0];
            }
            else {
                // TODO(Jasmeet): In highchart config we should add a notion of value column/s
                // to identify yAxis, instead from series.
                yAxisColumn = yAxisGuidToColumn[serie.blinkSeriesId] || yAxisColumns[0];
            }
            let metricDefinition = yAxisColumn.getMetricsDefinition();
            if (!metricDefinition) {
                return;
            }
            serie.data.forEach((dataRow) => {
                let color = metricDefinition.getColorForValue(dataRow.y);
                if (color !== null) {
                    dataRow.color = color;
                }
                else {
                    delete dataRow.color;
                }
            });
        });
        //SCAL-4216: When there is data grouping, hovering over a data point can be missing
        // columns not included in the chart (category, radial). We can't disable
        // data grouping because:
        //1. For line/column charts, looks very ugly (with columns overlapping each other e.g.)
        //2. If we ever end up with a very high chart data page size performance can
        //   degrade significantly
        //However for scatter and bubble there is a greater need to be able
        // to see all info about a point even if there is data grouping (think outliers).
        // Luckily scatter and bubble UI degrade relatively slower
        // without data grouping so we set higher thresholds for them
        if (!!this._configOptions.highThresholdGrouping) {
            let maxPointsInAnySeries = chartModel.getSeries().map(function (series) {
                return (series.data && series.data.length) || 0;
            }).max();
        }
        seriesPlotOptions.connectNulls = true;
        // TODO(vibhor): Figure out what this option really does. It seems to
        // limit the number of data points that
        // can be plotted using Chart API (not StockChart).
        seriesPlotOptions.turboThreshold = 1000000;
        seriesPlotOptions.events = {
            contextmenu: function (evt) {
                let clickSelf = this;
                onSeriesClick(evt, clickSelf.color, clickSelf.name);
            },
            // this comes from our addition in bootstrap
            legendItemClick: function (event) {
                let chart = this.chart;
                // update chart
                chart.onLegendClick(event, chart);
                // execute parent callback
            },
            // NOTE(chab) onLegendClick is called BEFORE the legend is updated,
            // show/hide are called AFTER the legend is updated
            show: function (event) {
                let chart = this.chart, serie = chart._blinkSerieGetter(event.target.name);
                onLegendClick(serie, true);
            },
            hide: function (event) {
                let chart = this.chart, serie = chart._blinkSerieGetter(event.target.name);
                onLegendClick(serie, false);
            }
        };
        let isWaterfallChart = chartModel.getChartType()
            === chartTypes.WATERFALL;
        if (isWaterfallChart) {
            // We want each waterfall to use one color picked from our current color sequences.
            // For negative column bar, the color is lighter version of used color to
            // connote a negative drop.
            chartConfig.series.forEach(function (serie, serieIdx) {
                let color = serie.color ?
                    serie.color :
                    chartConfig.colors[serieIdx >= chartConfig.colors.length ?
                        serieIdx - chartConfig.colors.length : serieIdx];
                serie.zoneAxis = 'y';
                serie.color = color;
                serie.negativeColor = chroma(color).alpha(0.3).css();
            });
        }
        // hack to ensure color stability for PARETO
        if (this._chartModel.chartType === chartTypes.PARETO) {
            this._configOptions.highcharts.paretoColor =
                this._chartModel.getSeriesColorsMap()[PARETO_ID];
        }
        if (disableHighlightOnHover) {
            _.merge(this._highchartConfig.plotOptions.series, {
                states: {
                    hover: {
                        enabled: false
                    }
                },
                cursor: 'default'
            });
        }
        return this;
    }
    configureDataLabels() {
        let self = this;
        self._chartModel.getSeries().forEach(serie => {
            serie.dataLabels = {
                enabled: this._chartModel.getChartType() !== 'LINE'
            };
        });
        return self;
    }
    configureSerieGetter(getter) {
        this._highchartConfig._blinkSerieGetter = getter;
        return this;
    }
    configureChartTitle() {
        let sampledMetrics = this._chartModel.getMetricsForSampledData();
        if (!!sampledMetrics.totalRowsDisplayed && !!sampledMetrics.totalRowCount) {
            let titleText = stringUtil_1(strings.data_point_exceeded_message, sampledMetrics.totalRowsDisplayed, sampledMetrics.totalRowCount);
            this._highchartConfig.title = {
                text: titleText,
                align: 'left',
                x: 10,
                y: -2,
                style: {
                    color: '#777E8B',
                    fontFamily: 'Optimo-Plain',
                    fontSize: '12px'
                }
            };
        }
        return this;
    }
    /**
     * Chart specific Override
     * @returns {ChartConfig}
     */
    configureOverrides() {
        _.merge(this._highchartConfig, this._configOptions.highcharts);
    }
    configureDefaults() {
        return this;
    }
    configureLegend() {
        let handler = _.noop;
        let legendColorHandler = _.noop;
        this._highchartConfig.legend = {
            enabled: true,
            /*verticalAlign: verticalAlign, // TODO(chab) re-enable once we use native legend
             layout: layout,
             align: align,
             margin: 0,
             itemWidth: constants.formatting.LEGEND_WIDTH,
             y: y,*/
            dblClick: function (item) {
                let serieName = item.name;
                handler(serieName);
            },
            symbolClick: function (item, anchor) {
                legendColorHandler(item, anchor);
            }
        };
        return this;
    }
    configureWindowing() {
        let navigator = this._highchartConfig.navigator;
        navigator.enabled = false;
        let scrollbar = this._highchartConfig.scrollbar;
        scrollbar.enabled = false;
        this._highchartConfig.rangeSelector = {
            enabled: false,
            inputEnabled: false
        };
        return this;
    }
    // NOTE: This component configures a tooltip html template.
    configureGenericTooltip() {
        let tooltip = this._highchartConfig.tooltip, self = this;
        tooltip.valueDecimals = 2;
        tooltip.shared = false;
        tooltip.useHTML = true;
        tooltip.crosshairs = false;
        tooltip.hideDelay = blinkConstants_1.CHART_TOOLTIP_DELAY;
        tooltip.backgroundColor = null;
        tooltip.borderWidth = 0;
        tooltip.snap = 10;
        tooltip.followPointer = true;
        tooltip.outside = false;
        tooltip.delayForDisplay = 300;
        tooltip.enable = !flags.getValue(flags.BLINK_FLAGS.disableChartTooltips.name);
        let chartModel = self._chartModel;
        tooltip.formatter = function () {
            if (!tooltip.enable) {
                return '<div style="display:none"></div>';
            }
            let tooltipData = genericTooltipData(chartModel, this);
            let finalLabel = _.reduce(tooltipData, (finalLabelString, dataObject) => {
                let styledDataObject = Object.assign(dataObject, getClassByLabelType(dataObject.labelType, dataObject));
                finalLabelString += tooltipComponent(styledDataObject);
                return finalLabelString;
            }, '');
            return '<div class="custom-tooltip" style="border:1px solid '
                + this.series.color + ';">'
                + finalLabel + '</div>';
        };
        return this;
    }
    configureLineOptions() {
        this._highchartConfig.plotOptions.line = {};
        // a line chart with only one point will be invisible unless we show point markers
        // (SCAL-3806)
        let series = this._chartModel.getSeries();
        if (!series) {
            return this;
        }
        updateSeriesWithMarkerSettings(series);
        return this;
    }
    configureExporting() {
        //disable the default button, keep the exporting API working
        this._highchartConfig.exporting = {
            enabled: false
        };
        return this;
    }
    configureAnimation() {
        if (!this._highchartConfig.plotOptions) {
            this._highchartConfig.plotOptions = {};
        }
        if (!this._highchartConfig.plotOptions.series) {
            this._highchartConfig.plotOptions.series = {};
        }
        this._highchartConfig.plotOptions.series.animation = {
            duration: 1500
        };
        return this;
    }
    /**
     * Returns the chart configuration options object built so far.
     * @return {Object}
     */
    build(showAxisTitle) {
        if (!showAxisTitle) {
            _.castArray(this._highchartConfig.xAxis)
                .forEach(axis => axis.title.text = ' ' + axis.title.alwaysShownText);
            _.castArray(this._highchartConfig.yAxis).forEach(axis => axis.title.text = ' ');
        }
        this._highchartConfig.chart.reflow = false;
        return this._highchartConfig;
    }
    setYAxisInfoInSeries() {
        const chartModel = this._chartModel;
        const yAxes = chartModel.getYAxes();
        chartModel.getSeries().forEach((serie) => {
            const columnId = serie.valueColumnIdentifier;
            const axisForColumn = chartModel.getAxisForColumn(columnId);
            if (axisForColumn) {
                const axisId = axisForColumn.id;
                const axisIndex = _.findIndex(yAxes, (axis) => axis.id === axisId);
                serie.yAxis = axisIndex;
            }
        });
    }
    prepareYAxisConfig(axisColumns, axisId, gridlineEnabled, isOpposite) {
        let chartModel = this._chartModel;
        let isYAxisVertical = !isXAxisVertical(chartModel.chartType);
        let shouldShowYAxisLabels = this._shouldShowYAxisLabels;
        // TODO(chab) see if we can hide the non-visible series without redrawing
        // the whole thing
        let maxY = _.max(axisColumns.map(col => chartModel.getMaxYValue(col))), minY = _.min(axisColumns.map(col => chartModel.getMinYValue(col)));
        let showInfinity = axisColumns.some((col) => {
            return chartModel.columnHasInfinityValues(col);
        }), showMinusInfinity = axisColumns.some((col) => {
            return chartModel.columnHasMinusInfinityValues(col);
        }), infinityPlaceholderValue = computeAxisInfinityPlaceholderValue(minY, maxY);
        let yAxisConfig = {
            id: axisId,
            title: {
                text: getAxisTemplate(axisId, chartModel, axisColumns, isYAxisVertical, this._disableTransformations),
                useHTML: true,
                style: {
                    textOverflow: 'ellipsis'
                }
            },
            labels: {
                enabled: shouldShowYAxisLabels,
                formatter: function () {
                    if (axisColumns.length > 1 || axisColumns[0].isEffectivelyNumeric()) {
                        return formatYAxisLabel(this.value, axisId, this.axis.tickPositions, this.axis.tickInterval, axisColumns[0], chartModel, minY, maxY, showInfinity, showMinusInfinity, infinityPlaceholderValue);
                    }
                    return chartModel.getYAxisLabelForAttribute(axisColumns[0], this.value);
                }
            },
            stackLabels: {
                enabled: false,
                allowOverlap: true,
                useHTML: true,
                style: {
                    textOverflow: 'ellipsis'
                },
                formatter: function () {
                    let xAxis = this.axis.chart.xAxis[0];
                    let currentX = this.x;
                    if (xAxis.min > currentX || xAxis.max < currentX) {
                        return '';
                    }
                    let formattedYAxisLabel = formatYAxisLabel(this.total, axisId, this.axis.tickPositions, this.axis.tickInterval, axisColumns[0], chartModel, minY, maxY, showInfinity, showMinusInfinity, infinityPlaceholderValue);
                    if (axisColumns.length > 1) {
                        return '<div style="padding:2px">' + formattedYAxisLabel + '</div>';
                    }
                    if (axisColumns[0].isEffectivelyNumeric()
                        && !chartModel.isYAxisOrdinalBased()) {
                        return formattedYAxisLabel;
                    }
                    return chartModel.getYAxisLabelForAttribute(axisColumns[0], this.value);
                }
            },
            opposite: !_.isUndefined(isOpposite) ? isOpposite
                : this._highchartConfig.yAxis.length,
            allowDecimals: axisColumns.some((col) => {
                return col.isDoubleColumn();
            }),
            name: chartModel.getAxisName(axisId) || chartModel.getAxisDefaultName(axisId)
        };
        if (showInfinity) {
            yAxisConfig.max = infinityPlaceholderValue;
        }
        if (showMinusInfinity) {
            yAxisConfig.min = -1 * infinityPlaceholderValue;
        }
        this.configureGridline(yAxisConfig, gridlineEnabled);
        if (chartModel.hasCaptionValuesForYAxis(axisColumns[0].getDataRowIndex())) {
            yAxisConfig.labels.useHTML = true;
        }
        this._highchartConfig.cachedYAxisHtml.push(yAxisConfig.title.text);
        if (axisColumns.length === 1) {
            this.setSingleColumnedYAxisProperties(yAxisConfig, axisColumns[0], chartModel, showMinusInfinity, minY);
        }
        return yAxisConfig;
    }
    setSingleColumnedYAxisProperties(axisConfig, column, chartModel, showMinusInfinity, minYValue) {
        //Set tick interval based on column type
        if ((column.isDateColumn()
            || column.isTimeColumn())
            && !chartModel.isYAxisOrdinalBased()) {
            let timeBucket = column.getTimeBucket();
            axisConfig.tickInterval = dateUtil_41(timeBucket);
        }
        else if (column.isEffectivelyNonNumeric()) {
            axisConfig.tickInterval = 1;
        }
        if (!showMinusInfinity && minYValue > 0) {
            if (column.isDateFamilyColumn()) {
                // let highcharts manage y axis if it's a date column
                axisConfig.min = undefined;
            }
            else {
                axisConfig.min = 0;
            }
        }
        axisConfig.stackLabels.style = {
            fontFamily: 'Optimo-Plain',
            fontSize: '12px',
            fontWeight: 'normal',
        };
    }
    configureGridline(axis, hasGridLine) {
        let gridlineConfig = hasGridLine ? onGridline : offGridline;
        axis.gridLineWidth = gridlineConfig.gridLineWidth;
        axis.gridLineColor = gridlineConfig.gridLineColor;
        axis.gridLineDashStyle = gridlineConfig.gridLineDashStyle;
    }
    getScrollBarEnabledConfig() {
        let chartModel = this._chartModel;
        let scrollbarConfig = {
            scrollbar: {
                enabled: true
            }
        };
        return _.assign(scrollbarConfig, getScrollEnabledMinMaxConfig(chartModel.getSeries(), chartModel.getChartType(), this._containerDimensions.width, this._containerDimensions.height));
    }
}
function getHighchartChartType(chartType) {
    let highchartsType = getHighchartsType(chartType);
    return highchartsType.toLowerCase();
}

/**
 * Copyright Thoughtspot Inc. 2016
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 * Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileOverview Those are utilities relative to highchart
 *
 *
 */
let logger$4 = logger_3('highchart-rendering');
function chartUIRenderHighchart(chartVizComponent, $chartContent, optSupportAnimation) {
    ChartThemeService.useDefaultTheme();
    let bbox = $chartContent.getBoundingClientRect();
    let containerDimensions = {
        height: bbox.height,
        width: bbox.width
    };
    let chartModel = chartVizComponent.chartModel;
    //TODO(chab) there are a bit of confusion between axis labels and ticks, we need to rename
    let shouldAlwaysShowAxisLabels = chartModel.params.answerModel.shouldAlwaysShowAxisLabels();
    let shouldShowXAxisTickLabels = isChartBigEnoughToShowXAxisTicksLabels(containerDimensions);
    let shouldShowYAxisTickLabels = isChartBigEnoughToShowYAxisTicksLabels(containerDimensions, chartModel);
    let canShowAxisTitle = true;
    let chartConfigOptions = configOptions(chartModel.getChartType(), chartModel);
    let shouldBringSelectedSeriesToFront = true;
    let useContextOptionRandomizationIdx = chartModel.isPinboardViz();
    let chartConfig = new BlinkHighchartConfig(chartModel, containerDimensions, shouldShowXAxisTickLabels, shouldShowYAxisTickLabels, false);
    let xGridlineEnabled, yGridlineEnabled;
    ({ xGridlineEnabled, yGridlineEnabled } = chartModel.getGridLinesConfig());
    chartConfig
        .configureDefaults()
        .setColors(useContextOptionRandomizationIdx)
        .setContainer($chartContent)
        .disableZoom()
        .configureXAxis(xGridlineEnabled)
        .configureYAxis(yGridlineEnabled)
        .configureColorAxis()
        .configureSeries(getHighchartOnSeriesClickHandler(shouldBringSelectedSeriesToFront, chartVizComponent, $chartContent), flags.getValue(flags.BLINK_FLAGS.maxChartLegendCardinality.name), _.noop, false)
        .configureDataLabels()
        .configurePlotLines()
        .configureChartTitle()
        .configureWindowing()
        .configureLineOptions()
        .configureGenericTooltip()
        .configureExporting()
        .configureLegend()
        .configureSerieGetter((serieName) => chartModel.getSerie(serieName))
        .configureAxisScroll();
    if (!!optSupportAnimation) {
        chartConfig.configureAnimation();
    }
    chartConfig.configureOverrides();
    logger$4.log('chart config', chartConfig);
    // Get configuration based on screen
    const chartAxisDetails = {
        x: chartConfig._highchartConfig.xAxis,
        y: chartConfig._highchartConfig.yAxis
    };
    try {
        chartVizComponent.chart = new BlinkHighchart(chartConfig.build(canShowAxisTitle));
        //configureColumnControls(chartVizComponent, chartConfig._highchartConfig.yAxis);
        // TODO(chab) for zoom and customized y-axis-range,
        // it will not work if we set directly min/max in config (try to explore more
        // so we can directly configure it)
        // let needRedraw = chartVizComponent.updateChartZoom(chartVizComponent.chart) ||
        //     chartVizComponent.updateChartYAxisRange(chartVizComponent.chart);
        // if (needRedraw) {
        //     chartVizComponent.chart.lightRedraw();
        // }
        // TODO(chab) explore if we can have a view state for the series, instead of
        // putting state directly in the chartModel
        // updateRenderedHighChartColorsInModel(
        //     chartModel,
        //     chartConfigOptions,
        //     chartVizComponent.chart);
    }
    catch (err) {
        console.log(err);
    }
    //chartVizComponent.emitNewChart(chartVizComponent.chart);
}
function getHighchartOnSeriesClickHandler(shouldBringSelectedSeriesToFront, scope, $container) {
    let func = ($event) => onSeriesClick(scope, $container, $event);
    return (evt, color, name) => {
        // If this is a click on point of a serie in a multi-series chart,
        // bring that serie to front. this can be immediatly executed as
        // it does not plays any role in angular
        if (shouldBringSelectedSeriesToFront) {
            bringSelectedSeriesToFront(evt.point);
        }
        func(evt);
    };
}
function bringSelectedSeriesToFront(point) {
    if (point && point.series && point.series.group) {
        point.series.group.toFront();
    }
}

// language=CSS
const getStyles = () => css `
:host {
    display: flex;
    align-items: stretch;
}

.chart-container {
    width: 100%;
    flex: 1 1 0;
    align-items: center;
    justify-content: center;
    display: flex;
}

.bk-chart {
    position: relative;
    width: 100%;
    height: 100%;
}

.highcharts-tooltip {
    font-size: 12px;
    font-size: 0.8571428571rem;
    line-height: 1.3333333333;
    font-weight: 600;
    pointer-events: none;
    z-index: 9999;
}

.highcharts-tooltip .chart-tooltip-block {
    padding-top: 8px;
    word-wrap: break-word;
}

.highcharts-tooltip .custom-tooltip {
    padding: 8px 12px 16px 12px;
    background-color: ${getCSSValue('tooltipBackgroundColor', '#323946')};
    opacity: 0.9;
    border-radius: 4px;
}

.highcharts-tooltip > span {
    box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.6);
}

.highcharts-tooltip span {
    min-width: 10.000em;
    max-width: 26.667em;
    overflow: auto;
    white-space: normal !important;
}

.highcharts-tooltip span > .chart-tooltip-block:last-of-type {
    margin-bottom: 0px;
}

.highcharts-tooltip .chart-tooltip-key {
    font-size: 0.917em;
    color: #ffffff;
    display: block;
}

.highcharts-tooltip .chart-tooltip-value {
    font-weight: 700;
    font-size: 1em;
    color: #ffffff;
    display: block;
}
`;

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
let TSChart = class TSChart extends LitElement {
    constructor(...args) {
        super();
        /**
         * Create an observed property. Triggers update on change.
         */
        this.chartType = '';
        CustomStylingService.initialize(true);
        window.thoughtspotSDK.onLoading(() => {
            this.$chartContainer.hidden = true;
            this.$loader.hidden = false;
        });
    }
    static get styles() {
        return getStyles();
    }
    attributeChangedCallback(name, oldval, newval) {
        console.log('attribute change: ', name, newval);
        super.attributeChangedCallback(name, oldval, newval);
        if (this.chartModel && name === 'chart-type') {
            this.renderChart();
        }
    }
    async firstUpdated(props) {
        this.$chartContainer = this.shadowRoot.getElementById('chart');
        this.$loader = this.shadowRoot.getElementById('loader');
        window.thoughtspotSDK.addCallbacks((answerJson) => {
            this.$chartContainer.hidden = false;
            this.$loader.hidden = true;
            let answerModel = new AnswerModel(answerJson);
            this.chartModel = answerModel.getChartVisualization();
            this.renderChart();
        });
        await changeLocale('en-US');
        await initializeDateAndNumberUtils();
    }
    renderChart() {
        if (this.chartType && this.chartType !== this.chartModel.getChartType()) {
            this.chartModel.setChartType(this.chartType);
        }
        let config = {
            chartModel: this.chartModel
        };
        chartUIRenderHighchart(config, this.$chartContainer, true);
    }
    /**
     * Implement `render` to define a template for your element.
     */
    render() {
        /**
         * Use JavaScript expressions to include property values in
         * the element template.
         */
        // language=HTML
        return html `<div class="chart-container">
            <div class="bk-chart" id="chart"></div>
            <img id="loader" src="https://cdn.jsdelivr.net/gh/ashubham/files/loader.gif" hidden>
            <context-menu></context-menu>
        </div>`;
    }
};
__decorate([
    property({ attribute: 'chart-type' })
], TSChart.prototype, "chartType", void 0);
TSChart = __decorate([
    customElement('ts-chart')
], TSChart);

export { TSChart };
//# sourceMappingURL=chart.js.map
