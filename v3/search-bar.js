import { a as __decorate, _ } from './chunk-1bec01b6.js';
import { c as css, g as getCSSValue, a as customElement, L as LitElement, h as html, p as property } from './chunk-5329ead8.js';
import { c as createCommonjsModule } from './chunk-5732a1e2.js';

// language=CSS
const getStyles = () => css `
:host {
    display: flex;
    align-items: stretch;
    background: #fff;
}

.dropdown-item {
    padding: 5px 40px 5px 10px;
    font-family: Arial;
    font-size: 16px;
    cursor: pointer;
    color: ${getCSSValue('completionFontColor', '#333')};
}

.dropdown-item:hover {
    background-color: #d8d8d8;
}
`;

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
let TSDropdown = class TSDropdown extends LitElement {
    /**
     * Use the customElement decorator to define your class as
     * a custom element. Registers <my-element> as an HTML tag.
     */
    constructor() {
        super(...arguments);
        /**
         * Create an observed property. Triggers update on change.
         */
        this.list = [];
    }
    static get styles() {
        return getStyles();
    }
    firstUpdated(props) {
        this.shadowRoot.getElementById('container')
            .addEventListener('mousedown', (e) => {
            let idx = (e.target).id;
            this.selectItem(this.list[Number(idx)]);
        });
    }
    selectItem(item) {
        let evt = new CustomEvent('select-item', {
            detail: {
                item
            }
        });
        this.dispatchEvent(evt);
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
        return html `<div class="dropdown" id="container">
            ${this.list.map((item, idx) => html `
                <div class="dropdown-item" id="${idx}" @click="${() => this.selectItem(item)}">
                    ${item.getCompletionTokensQueryString()}
                </div>
            `)}
        </div>`;
    }
};
__decorate([
    property({ type: Array })
], TSDropdown.prototype, "list", void 0);
TSDropdown = __decorate([
    customElement('ts-dropdown')
], TSDropdown);

// language=CSS
const getStyles$1 = () => css `
:host {
    display: flex;
    align-items: stretch;
    position: relative;
}

.ts-search-bar {
    display: flex;
    flex: 1 1 0;
    align-items: center;
}

.search-input {
    flex: 1 1 0;
    height: 32px;
    font-size: 16px;
    padding-left: 10px;
    background-color: #fff;
    border: 1px solid #bbc0c4;
    border-radius: 3px;
    font-family: Arial;
    outline: none;
    color: ${getCSSValue('searchFontColor', '#333')};
}

.speech-icon {
    height: 20px;
    flex: 0 0 14px;
    margin-left: -24px;
    filter: opacity(50%);
    cursor: pointer;
}

.search-input:focus {
    background-color: #fff;
}

.completions {
    position: absolute;
    display: none;
    top: 32px;
    padding: 10px 0;
    border-radius: 3px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    background-color: ${getCSSValue('completionBackgroundColor', '#fff')};
    margin-top: 2px;
}
`;

var textareaCaret = createCommonjsModule(function (module) {
/* jshint browser: true */

(function () {

// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
var properties = [
  'direction',  // RTL support
  'boxSizing',
  'width',  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
  'height',
  'overflowX',
  'overflowY',  // copy the scrollbar for IE

  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',

  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'fontStretch',
  'fontSize',
  'fontSizeAdjust',
  'lineHeight',
  'fontFamily',

  'textAlign',
  'textTransform',
  'textIndent',
  'textDecoration',  // might not make a difference, but better be safe

  'letterSpacing',
  'wordSpacing',

  'tabSize',
  'MozTabSize'

];

var isBrowser = (typeof window !== 'undefined');
var isFirefox = (isBrowser && window.mozInnerScreenX != null);

function getCaretCoordinates(element, position, options) {
  if (!isBrowser) {
    throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
  }

  var debug = options && options.debug || false;
  if (debug) {
    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
    if (el) el.parentNode.removeChild(el);
  }

  // The mirror div will replicate the textarea's style
  var div = document.createElement('div');
  div.id = 'input-textarea-caret-position-mirror-div';
  document.body.appendChild(div);

  var style = div.style;
  var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle;  // currentStyle for IE < 9
  var isInput = element.nodeName === 'INPUT';

  // Default textarea styles
  style.whiteSpace = 'pre-wrap';
  if (!isInput)
    style.wordWrap = 'break-word';  // only for textarea-s

  // Position off-screen
  style.position = 'absolute';  // required to return coordinates properly
  if (!debug)
    style.visibility = 'hidden';  // not 'display: none' because we want rendering

  // Transfer the element's properties to the div
  properties.forEach(function (prop) {
    if (isInput && prop === 'lineHeight') {
      // Special case for <input>s because text is rendered centered and line height may be != height
      style.lineHeight = computed.height;
    } else {
      style[prop] = computed[prop];
    }
  });

  if (isFirefox) {
    // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
    if (element.scrollHeight > parseInt(computed.height))
      style.overflowY = 'scroll';
  } else {
    style.overflow = 'hidden';  // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
  }

  div.textContent = element.value.substring(0, position);
  // The second special handling for input type="text" vs textarea:
  // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
  if (isInput)
    div.textContent = div.textContent.replace(/\s/g, '\u00a0');

  var span = document.createElement('span');
  // Wrapping must be replicated *exactly*, including when a long word gets
  // onto the next line, with whitespace at the end of the line before (#7).
  // The  *only* reliable way to do that is to copy the *entire* rest of the
  // textarea's content into the <span> created at the caret position.
  // For inputs, just '.' would be enough, but no need to bother.
  span.textContent = element.value.substring(position) || '.';  // || because a completely empty faux span doesn't render at all
  div.appendChild(span);

  var coordinates = {
    top: span.offsetTop + parseInt(computed['borderTopWidth']),
    left: span.offsetLeft + parseInt(computed['borderLeftWidth']),
    height: parseInt(computed['lineHeight'])
  };

  if (debug) {
    span.style.backgroundColor = '#aaa';
  } else {
    document.body.removeChild(div);
  }

  return coordinates;
}

{
  module.exports = getCaretCoordinates;
}

}());
});

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
let TSSearchBar = class TSSearchBar extends LitElement {
    /**
     * Use the customElement decorator to define your class as
     * a custom element. Registers <my-element> as an HTML tag.
     */
    constructor() {
        super(...arguments);
        this.suggestionsList = [];
        /**
         * Create an observed property. Triggers update on change.
         */
        this.foo = 'foo';
    }
    static get styles() {
        return getStyles$1();
    }
    firstUpdated(props) {
        this.$completions = this.shadowRoot.getElementById('completions');
        this.$input = this.shadowRoot.getElementById('input');
        this.$input.addEventListener('blur', (e) => {
            this.$completions.style.display = 'none';
        });
    }
    async updateCompletions(searchText = this.$input.value, caretPosition = this.$input.selectionStart) {
        this.suggestionsList = await getCompletions(searchText, caretPosition);
        if (!this.suggestionsList.length) {
            this.$completions.style.display = 'none';
        }
        console.log(searchText, caretPosition);
        this.requestUpdate();
    }
    onKeyDown(e) {
        let input = e.target;
        if (e.key === 'Enter') {
            console.log('Query Entered', input.value);
            input.blur();
            this.updateResult(input.value);
            return;
        }
        let caretPosition = input.selectionStart;
        this.$completions.style.display = 'block';
        this.updateCompletions(input.value, caretPosition);
        this.positionDropdown(caretPosition);
    }
    onFocus(e) {
        requestAnimationFrame(() => {
            this.$completions.style.display = 'block';
            this.updateCompletions();
            this.positionDropdown();
        });
    }
    async updateResult(query) {
        console.log('Run the query', query);
        window.thoughtspotSDK.showLoading && window.thoughtspotSDK.showLoading();
        let answerJson = await window.thoughtspotSDK.getAnswerModel(query);
        console.log(answerJson);
    }
    selectCompletion(e) {
        console.log(e.detail.item);
        let completion = e.detail.item;
        //let sageModel = window.thoughtspotSDK.answerSageClient.getSageModel();
        let nlQueryTokens = this.$input.value.split(' ');
        let prefixTokens = _.take(nlQueryTokens, completion.numPrefixTokens || 0);
        let suffixTokens = _.takeRight(nlQueryTokens, completion.numSuffixTokens || 0);
        let head = [
            ...prefixTokens,
            completion.getCompletionTokensQueryString()
        ].join(' ');
        let caretPosition = head.length;
        this.$input.value = [
            head,
            ...suffixTokens
        ].join(' ');
        setTimeout(() => {
            this.$input.focus();
            setTimeout(() => {
                this.$input.setSelectionRange(caretPosition, caretPosition);
            });
        });
    }
    positionDropdown(caretPosition) {
        caretPosition = caretPosition || this.$input.selectionStart;
        let caretInfo = getTokenPositionFromIndex(this.$input.value, caretPosition, ' ');
        let caretCoords = textareaCaret(this.$input, caretInfo.completionPosition);
        move(this.$completions, caretCoords.left - 10, 0, 300);
    }
    startDictation() {
        let recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.start();
        this.$input.value = 'listening....';
        recognition.onresult = (e) => {
            try {
                this.$input.value = e.results[0][0].transcript;
                this.updateResult(this.$input.value);
            }
            catch (err) {
                console.error(err);
            }
            finally {
                recognition.stop();
            }
        };
        recognition.onerror = function (e) {
            recognition.stop();
            this.$input.value = '';
        };
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
        return html `<div class="ts-search-bar">
            <input class="search-input" id="input"
                placeholder="Ask me anything!"
                autocomplete="off"
                @keyup="${this.onKeyDown}" @focus="${this.onFocus}">
            <img class="speech-icon"
              @click="${this.startDictation}"
              src="http://cdn.onlinewebfonts.com/svg/img_497369.png"/>
            <ts-dropdown class="completions" id="completions"
                .list=${this.suggestionsList} @select-item="${this.selectCompletion}">
            </ts-dropdown>
        </div>`;
    }
};
__decorate([
    property()
], TSSearchBar.prototype, "foo", void 0);
TSSearchBar = __decorate([
    customElement('ts-search-bar')
], TSSearchBar);
let lastX, lastY;
function move($el, x, y, delay) {
    if (x === lastX && y === lastY)
        return;
    lastX = lastX || 0;
    lastY = lastY || 0;
    $el.animate([{
            transform: `translate3d(${lastX}px, ${lastY}px, 0)`
        }, {
            transform: `translate3d(${x}px, ${y}px, 0)`
        }], {
        duration: delay,
        easing: 'ease',
        fill: 'forwards'
    });
    lastX = x;
    lastY = y;
}
function getTokenPositionFromIndex(text, position, separator = ' ') {
    let currentPos = text.indexOf(separator);
    let currentLength = 0;
    let tokenIdx = 0;
    while (currentPos < position && currentPos >= 0) {
        currentLength = currentPos;
        tokenIdx++;
        currentPos = text.indexOf(separator, currentPos + 1);
    }
    return {
        tokenIdx: tokenIdx,
        tokenOffset: position - currentLength,
        completionPosition: text.split(separator).slice(0, tokenIdx).join(' ').length + 1
    };
}
// Temp utils to be moved to SDK
async function getCompletions(text, caretPostion) {
    return window.thoughtspotSDK.getCompletions(text, caretPostion);
}
let loadingCbs = [];
window.thoughtspotSDK.onLoading = (cb) => {
    loadingCbs.push(cb);
};
window.thoughtspotSDK.showLoading = () => {
    loadingCbs.forEach(cb => cb());
};

export { TSSearchBar };
//# sourceMappingURL=search-bar.js.map
