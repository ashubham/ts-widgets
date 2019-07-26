import { a as __decorate$3, _ as _$1 } from './chunk-1bec01b6.js';
import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal } from './chunk-5732a1e2.js';
import { n as ngRequire, P as Provide, M as Component, f as flags, x as logger_3, i as strings, h as stringUtil_1, j as jsonConstants_1, B as falcon, d as callosum, q as sage$1, e as blinkConstants_1, H as CustomizableChartFeature } from './chunk-68eb1584.js';
import { aG as UIComponent$1, aH as Component$1, aI as BaseComponent, aJ as ScopedComponent$1, aK as pushDialogContextState, aL as popDialogContextState, aM as BaseComponent$1, aN as reportTraceEvent, aO as isPinboardMenuEnabledForFullEmbed, aP as isAppEmbedded, s as sage, aQ as dateUtil_4, aR as getTip, aS as setTip, aq as getUserGuid, aT as loadingIndicator, aU as provideLegacyDirective, aV as jsUtil_5, aW as getUserPreferenceProto, aX as decode64, aY as isA3Enabled, aZ as hasRAnalysisPrivilege, a_ as isSeasonalityDetectionEnabled, a$ as isAnomalyExplanationEnabled, aD as getCurrentLocale, ap as navService, b0 as GlobalContextStates, R as RequestTypes, b1 as dateUtil_8, b2 as dateUtil_12, b3 as dateUtil_11, am as CustomStylingService, b4 as browserUtil_2, W as BaseChart, X as browserInfo, $ as ChartThemeService, b5 as truncateTextToWidth } from './chunk-31e8efbd.js';
import { k as alertConstants, n as getUserActionSuccessAlertContent, a as getUserActionFailureAlertContent, e as events, s as sessionStore, h as collectEvent, o as getRequestInfoObject, S as SageResponse, t as transformTable, g as getNewACTableRequest, p as editTable, q as startWorkflow, U as UserWorkflowActionTypes, r as getNoMatchAlertContent, f as getSageAggrTypeForCallosumAggrType, d as FILTER_MODEL_TYPES, u as isChartLink } from './chunk-1770fb42.js';
import { d as disableScalingIfNeeded, r as resumeScalingIfNeeded, g as getSankeyChartScreenConfig } from './chunk-f1c2ddb8.js';

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;

function extent(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
}

function sequence(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function max(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
}

function min(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
}

function sum(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
}

var slice = Array.prototype.slice;

function identity(x) {
  return x;
}

var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = slice.call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
}

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

function none() {}

function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function empty() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

function selection_selectAll(select) {
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function sparse(update) {
  return new Array(update.length);
}

function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

function constant(x) {
  return function() {
    return x;
  };
}

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

function selection_data(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

function selection_merge(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort(compare) {
  if (!compare) compare = ascending$1;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
}

function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
}

function selection_empty() {
  return !this.node();
}

function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}

function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}

function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

var filterEvents = {};

var event$1 = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event$1; // Events can be reentrant (e.g., focus).
    event$1 = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event$1 = event0;
    }
  };
}

function parseTypenames$1(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, capture) {
  var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

function select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

define(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

function basis$1(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function constant$1(x) {
  return function() {
    return x;
  };
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$1(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
}

var interpolateRgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(basis$1);

function array(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
}

function interpolateNumber(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolateValue(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolateValue(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$1(b)
      : (t === "number" ? interpolateNumber
      : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
      : b instanceof color ? interpolateRgb
      : b instanceof Date ? date
      : Array.isArray(b) ? array
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : interpolateNumber)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
}

var degrees = 180 / Math.PI;

var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return identity$1;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return identity$1;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var rho = Math.SQRT2;

function cubehelix$1(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix$1(start, end) {
      var h = hue((start = cubehelix(start)).h, (end = cubehelix(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix$1.gamma = cubehelixGamma;

    return cubehelix$1;
  })(1);
}

cubehelix$1(hue);
var cubehelixLong = cubehelix$1(nogamma);

var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout$1(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set$1(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get$1(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return timeout$1(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout$1(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

function interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get$1(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set$1(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get$1(node, id).value[name];
  };
}

function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber
      : b instanceof color ? interpolateRgb
      : (c = color(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
}

function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS$1(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction$1(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS$1(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
}

function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i(t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i(t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get$1(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function() {
    set$1(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set$1(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get$1(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set$1(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get$1(this.node(), id).ease;
}

function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set$1;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get$1(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection$1 = selection.prototype.constructor;

function transition_selection() {
  return new Selection$1(this._groups, this._parents);
}

function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction$1(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set$1(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove$1(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove$1(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction$1(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant$1(name, i, value), priority)
      .on("end.style." + name, null);
}

function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i(t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction$1(tweenValue(this, "text", value))
      : textConstant$1(value == null ? "" : value + ""));
}

function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get$1(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

function transition_end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set$1(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
}

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  end: transition_end
};

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var pi = Math.PI;

var tau = 2 * Math.PI;

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = now(), defaultTiming;
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

var pi$1 = Math.PI;

var pi$2 = Math.PI,
    tau$1 = 2 * pi$2,
    epsilon$1 = 1e-6,
    tauEpsilon = tau$1 - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi$2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau$1 + tau$1;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi$2)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

var prefix = "$";

function Map$1() {}

Map$1.prototype = map.prototype = {
  constructor: Map$1,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map$1;

  // Copy constructor.
  if (object instanceof Map$1) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

function Set$1() {}

var proto = map.prototype;

Set$1.prototype = set$2.prototype = {
  constructor: Set$1,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set$2(object, f) {
  var set = new Set$1;

  // Copy constructor.
  if (object instanceof Set$1) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

// TODO Optimize edge cases.

var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear()) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

function dsvFormat(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows
  };
}

var csv = dsvFormat(",");

var tsv = dsvFormat("\t");

function tree_add(d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
}

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

function tree_cover(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
    var z = x1 - x0,
        node = this._root,
        parent,
        i;

    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
      i = (y < y0) << 1 | (x < x0);
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0: x1 = x0 + z, y1 = y0 + z; break;
        case 1: x0 = x1 - z, y1 = y0 + z; break;
        case 2: x1 = x0 + z, y0 = y1 - z; break;
        case 3: x0 = x1 - z, y0 = y1 - z; break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

function tree_data() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
}

function tree_extent(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
}

function Quad(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

function tree_find(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new Quad(node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new Quad(node[3], xm, ym, x2, y2),
        new Quad(node[2], x1, ym, xm, y2),
        new Quad(node[1], xm, y1, x2, ym),
        new Quad(node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
}

function tree_remove(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
}

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

function tree_root() {
  return this._root;
}

function tree_size() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
}

function tree_visit(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
    }
  }
  return this;
}

function tree_visitAfter(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

function defaultX(d) {
  return d[0];
}

function tree_x(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

function defaultY(d) {
  return d[1];
}

function tree_y(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = tree_add;
treeProto.addAll = addAll;
treeProto.cover = tree_cover;
treeProto.data = tree_data;
treeProto.extent = tree_extent;
treeProto.find = tree_find;
treeProto.remove = tree_remove;
treeProto.removeAll = removeAll;
treeProto.root = tree_root;
treeProto.size = tree_size;
treeProto.visit = tree_visit;
treeProto.visitAfter = tree_visitAfter;
treeProto.x = tree_x;
treeProto.y = tree_y;

var initialAngle = Math.PI * (3 - Math.sqrt(5));

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function formatDecimal(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};

function identity$2(x) {
  return x;
}

var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$2,
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? formatNumerals(locale.numerals) : identity$2,
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

function adder() {
  return new Adder;
}

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add$1(temp, y, this.t);
    add$1(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add$1(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}

var pi$3 = Math.PI;

var areaRingSum = adder();

var areaSum = adder();

var deltaSum = adder();

var sum$1 = adder();

var lengthSum = adder();

var areaSum$1 = adder(),
    areaRingSum$1 = adder();

var lengthSum$1 = adder();

// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of

function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

var array$1 = Array.prototype;

var map$1 = array$1.map;
var slice$1 = array$1.slice;

var implicit = {name: "implicit"};

function ordinal() {
  var index = map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = map();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$1.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

function constant$2(x) {
  return function() {
    return x;
  };
}

function number$1(x) {
  return +x;
}

var unit = [0, 1];

function identity$3(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant$2(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0], b = domain[domain.length - 1], t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = interpolateValue,
      transform,
      untransform,
      unknown,
      clamp = identity$3,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = map$1.call(_, number$1), clamp === identity$3 || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$1.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = slice$1.call(_), interpolate = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity$3, scale) : clamp !== identity$3;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous(transform, untransform) {
  return transformer()(transform, untransform);
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear$1() {
  var scale = continuous(identity$3, identity$3);

  scale.copy = function() {
    return copy(scale, linear$1());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

var t0$1 = new Date,
    t1$1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0$1.setTime(+start), t1$1.setTime(+end);
      floori(t0$1), floori(t1$1);
      return Math.floor(count(t0$1, t1$1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

var second = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});

var minute = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});

var hour = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});

var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date) {
  return date.getDate() - 1;
});

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});

var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getUTCHours();
});

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale$1(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear$1,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day$1;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day$1 = week.getUTCDay();
          week = day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day$1 = week.getDay();
          week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
          week = day.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$1 + 5) % 7 : d.w + d.U * 7 - (day$1 + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad$1(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad$1(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad$1(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad$1(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad$1(1 + day.count(year(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad$1(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad$1(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad$1(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad$1(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad$1(sunday.count(year(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
  return pad$1(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad$1(monday.count(year(d), d), p, 2);
}

function formatYear$1(d, p) {
  return pad$1(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad$1(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad$1(z / 60 | 0, "0", 2)
      + pad$1(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad$1(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad$1(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad$1(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad$1(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad$1(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad$1(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad$1(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad$1(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad$1(utcSunday.count(utcYear(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad$1(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad$1(utcMonday.count(utcYear(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad$1(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad$1(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale$1;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale$1({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  timeFormat = locale$1.format;
  timeParse = locale$1.parse;
  utcFormat = locale$1.utcFormat;
  utcParse = locale$1.utcParse;
  return locale$1;
}

var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : utcFormat(isoSpecifier);

function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : utcParse(isoSpecifier);

function colors(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

var schemeCategory10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

function ramp(scheme) {
  return rgbBasis(scheme[scheme.length - 1]);
}

var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors);

ramp(scheme);

var scheme$1 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors);

ramp(scheme$1);

var scheme$2 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors);

ramp(scheme$2);

var scheme$3 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors);

ramp(scheme$3);

var scheme$4 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors);

ramp(scheme$4);

var scheme$5 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors);

ramp(scheme$5);

var scheme$6 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors);

ramp(scheme$6);

var scheme$7 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors);

ramp(scheme$7);

var scheme$8 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors);

ramp(scheme$8);

var scheme$9 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors);

ramp(scheme$9);

var scheme$a = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors);

ramp(scheme$a);

var scheme$b = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors);

ramp(scheme$b);

var scheme$c = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors);

ramp(scheme$c);

var scheme$d = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors);

ramp(scheme$d);

var scheme$e = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors);

ramp(scheme$e);

var scheme$f = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors);

ramp(scheme$f);

var scheme$g = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors);

ramp(scheme$g);

var scheme$h = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors);

ramp(scheme$h);

var scheme$i = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors);

ramp(scheme$i);

var scheme$j = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors);

ramp(scheme$j);

var scheme$k = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors);

ramp(scheme$k);

var scheme$l = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors);

ramp(scheme$l);

var scheme$m = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors);

ramp(scheme$m);

var scheme$n = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors);

ramp(scheme$n);

var scheme$o = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors);

ramp(scheme$o);

var scheme$p = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors);

ramp(scheme$p);

var scheme$q = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors);

ramp(scheme$q);

cubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));

var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

var c = cubehelix();

var c$1 = rgb(),
    pi_1_3 = Math.PI / 3,
    pi_2_3 = Math.PI * 2 / 3;

function ramp$1(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

ramp$1(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

var magma = ramp$1(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp$1(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp$1(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

function constant$3(x) {
  return function constant() {
    return x;
  };
}

var pi$4 = Math.PI;

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

var slice$2 = Array.prototype.slice;

function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x$1 = x,
      y$1 = y,
      context = null;

  function link() {
    var buffer, argv = slice$2.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = path();
    curve(context, +x$1.apply(this, (argv[0] = s, argv)), +y$1.apply(this, argv), +x$1.apply(this, (argv[0] = t, argv)), +y$1.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$3(+_), link) : x$1;
  };

  link.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$3(+_), link) : y$1;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$1(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point$1(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point$1(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point$1(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function justify(node, n) {
  return node.sourceLinks.length ? node.depth : n - 1;
}

function constant$4(x) {
  return function() {
    return x;
  };
}

function ascendingSourceBreadth(a, b) {
  return ascendingBreadth(a.source, b.source) || a.index - b.index;
}

function ascendingTargetBreadth(a, b) {
  return ascendingBreadth(a.target, b.target) || a.index - b.index;
}

function ascendingBreadth(a, b) {
  return a.y0 - b.y0;
}

function value(d) {
  return d.value;
}

function defaultId(d) {
  return d.index;
}

function defaultNodes(graph) {
  return graph.nodes;
}

function defaultLinks(graph) {
  return graph.links;
}

function find(nodeById, id) {
  const node = nodeById.get(id);
  if (!node) throw new Error("missing: " + id);
  return node;
}

function computeLinkBreadths({nodes}) {
  for (const node of nodes) {
    let y0 = node.y0;
    let y1 = y0;
    for (const link of node.sourceLinks) {
      link.y0 = y0 + link.width / 2;
      y0 += link.width;
    }
    for (const link of node.targetLinks) {
      link.y1 = y1 + link.width / 2;
      y1 += link.width;
    }
  }
}

function Sankey() {
  let x0 = 0, y0 = 0, x1 = 1, y1 = 1; // extent
  let dx = 24; // nodeWidth
  let py = 8; // nodePadding
  let id = defaultId;
  let align = justify;
  let sort;
  let linkSort;
  let nodes = defaultNodes;
  let links = defaultLinks;
  let iterations = 6;

  function sankey() {
    const graph = {nodes: nodes.apply(null, arguments), links: links.apply(null, arguments)};
    computeNodeLinks(graph);
    computeNodeValues(graph);
    computeNodeDepths(graph);
    computeNodeHeights(graph);
    computeNodeBreadths(graph);
    computeLinkBreadths(graph);
    return graph;
  }

  sankey.update = function(graph) {
    computeLinkBreadths(graph);
    return graph;
  };

  sankey.nodeId = function(_) {
    return arguments.length ? (id = typeof _ === "function" ? _ : constant$4(_), sankey) : id;
  };

  sankey.nodeAlign = function(_) {
    return arguments.length ? (align = typeof _ === "function" ? _ : constant$4(_), sankey) : align;
  };

  sankey.nodeSort = function(_) {
    return arguments.length ? (sort = _, sankey) : sort;
  };

  sankey.nodeWidth = function(_) {
    return arguments.length ? (dx = +_, sankey) : dx;
  };

  sankey.nodePadding = function(_) {
    return arguments.length ? (py = +_, sankey) : py;
  };

  sankey.nodes = function(_) {
    return arguments.length ? (nodes = typeof _ === "function" ? _ : constant$4(_), sankey) : nodes;
  };

  sankey.links = function(_) {
    return arguments.length ? (links = typeof _ === "function" ? _ : constant$4(_), sankey) : links;
  };

  sankey.linkSort = function(_) {
    return arguments.length ? (linkSort = _, sankey) : linkSort;
  };

  sankey.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];
  };

  sankey.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];
  };

  sankey.iterations = function(_) {
    return arguments.length ? (iterations = +_, sankey) : iterations;
  };

  function computeNodeLinks({nodes, links}) {
    for (const [i, node] of nodes.entries()) {
      node.index = i;
      node.sourceLinks = [];
      node.targetLinks = [];
    }
    const nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));
    for (const [i, link] of links.entries()) {
      link.index = i;
      let {source, target} = link;
      if (typeof source !== "object") source = link.source = find(nodeById, source);
      if (typeof target !== "object") target = link.target = find(nodeById, target);
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    }
  }

  function computeNodeValues({nodes}) {
    for (const node of nodes) {
      node.value = Math.max(
        sum(node.sourceLinks, value),
        sum(node.targetLinks, value)
      );
    }
  }

  function computeNodeDepths({nodes}) {
    const n = nodes.length;
    let current = new Set(nodes);
    let next = new Set;
    let x = 0;
    while (current.size) {
      for (const node of current) {
        node.depth = x;
        for (const {target} of node.sourceLinks) {
          next.add(target);
        }
      }
      if (++x > n) throw new Error("circular link");
      current = next;
      next = new Set;
    }
  }

  function computeNodeHeights({nodes}) {
    const n = nodes.length;
    let current = new Set(nodes);
    let next = new Set;
    let x = 0;
    while (current.size) {
      for (const node of current) {
        node.height = x;
        for (const {source} of node.targetLinks) {
          next.add(source);
        }
      }
      if (++x > n) throw new Error("circular link");
      current = next;
      next = new Set;
    }
  }

  function computeNodeLayers({nodes}) {
    const x = max(nodes, d => d.depth) + 1;
    const kx = (x1 - x0 - dx) / (x - 1);
    const columns = new Array(x);
    for (const node of nodes) {
      const i = Math.max(0, Math.min(x - 1, Math.floor(align.call(null, node, x))));
      node.layer = i;
      node.x0 = x0 + i * kx;
      node.x1 = node.x0 + dx;
      if (columns[i]) columns[i].push(node);
      else columns[i] = [node];
    }
    if (sort) for (const column of columns) {
      column.sort(sort);
    }
    return columns;
  }

  function initializeNodeBreadths(columns) {
    const ky = min(columns, c => (y1 - y0 - (c.length - 1) * py) / sum(c, value));
    for (const nodes of columns) {
      let y = y0;
      for (const node of nodes) {
        node.y0 = y;
        node.y1 = y + node.value * ky;
        y = node.y1 + py;
        for (const link of node.sourceLinks) {
          link.width = link.value * ky;
        }
      }
      y = (y1 - y + py) / (nodes.length + 1);
      for (let i = 0; i < nodes.length; ++i) {
        const node = nodes[i];
        node.y0 += y * (i + 1);
        node.y1 += y * (i + 1);
      }
      reorderLinks(nodes);
    }
  }

  function computeNodeBreadths(graph) {
    const columns = computeNodeLayers(graph);
    initializeNodeBreadths(columns);
    for (let i = 0; i < iterations; ++i) {
      const alpha = Math.pow(0.99, i);
      const beta = Math.max(1 - alpha, (i + 1) / iterations);
      relaxRightToLeft(columns, alpha, beta);
      relaxLeftToRight(columns, alpha, beta);
    }
  }

  // Reposition each node based on its incoming (target) links.
  function relaxLeftToRight(columns, alpha, beta) {
    for (let i = 1, n = columns.length; i < n; ++i) {
      const column = columns[i];
      for (const target of column) {
        let y = 0;
        let w = 0;
        for (const {source, value} of target.targetLinks) {
          let v = value * (target.layer - source.layer);
          y += targetTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        let dy = (y / w - target.y0) * alpha;
        target.y0 += dy;
        target.y1 += dy;
        reorderNodeLinks(target);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }

  // Reposition each node based on its outgoing (source) links.
  function relaxRightToLeft(columns, alpha, beta) {
    for (let n = columns.length, i = n - 2; i >= 0; --i) {
      const column = columns[i];
      for (const source of column) {
        let y = 0;
        let w = 0;
        for (const {target, value} of source.sourceLinks) {
          let v = value * (target.layer - source.layer);
          y += sourceTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue;
        let dy = (y / w - source.y0) * alpha;
        source.y0 += dy;
        source.y1 += dy;
        reorderNodeLinks(source);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }

  function resolveCollisions(nodes, alpha) {
    const i = nodes.length >> 1;
    const subject = nodes[i];
    resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha);
    resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha);
    resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha);
    resolveCollisionsTopToBottom(nodes, y0, 0, alpha);
  }

  // Push any overlapping nodes down.
  function resolveCollisionsTopToBottom(nodes, y, i, alpha) {
    for (; i < nodes.length; ++i) {
      const node = nodes[i];
      const dy = (y - node.y0) * alpha;
      if (dy > 1e-6) node.y0 += dy, node.y1 += dy;
      y = node.y1 + py;
    }
  }

  // Push any overlapping nodes up.
  function resolveCollisionsBottomToTop(nodes, y, i, alpha) {
    for (; i >= 0; --i) {
      const node = nodes[i];
      const dy = (node.y1 - y) * alpha;
      if (dy > 1e-6) node.y0 -= dy, node.y1 -= dy;
      y = node.y0 - py;
    }
  }

  function reorderNodeLinks({sourceLinks, targetLinks}) {
    if (linkSort === undefined) {
      for (const {source: {sourceLinks}} of targetLinks) {
        sourceLinks.sort(ascendingTargetBreadth);
      }
      for (const {target: {targetLinks}} of sourceLinks) {
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  function reorderLinks(nodes) {
    if (linkSort === undefined) {
      for (const {sourceLinks, targetLinks} of nodes) {
        sourceLinks.sort(ascendingTargetBreadth);
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  // Returns the target.y0 that would produce an ideal link from source to target.
  function targetTop(source, target) {
    let y = source.y0 - (source.sourceLinks.length - 1) * py / 2;
    for (const {target: node, width} of source.sourceLinks) {
      if (node === target) break;
      y += width + py;
    }
    for (const {source: node, width} of target.targetLinks) {
      if (node === source) break;
      y -= width;
    }
    return y;
  }

  // Returns the source.y0 that would produce an ideal link from source to target.
  function sourceTop(source, target) {
    let y = target.y0 - (target.targetLinks.length - 1) * py / 2;
    for (const {source: node, width} of target.targetLinks) {
      if (node === source) break;
      y += width + py;
    }
    for (const {target: node, width} of source.sourceLinks) {
      if (node === target) break;
      y -= width;
    }
    return y;
  }

  return sankey;
}

function horizontalSource(d) {
  return [d.source.x1, d.y0];
}

function horizontalTarget(d) {
  return [d.target.x0, d.y1];
}

function sankeyLinkHorizontal() {
  return linkHorizontal()
      .source(horizontalSource)
      .target(horizontalTarget);
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview SVG constants
 */
const SVG = {
    rect: 'rect',
    clipPath: 'clipPath',
    clipPathAttr: 'clip-path',
    color: 'color',
    d: 'd',
    div: 'div',
    id: 'id',
    contexmenu: 'contextmenu',
    defs: 'defs',
    fill: 'fill',
    fontSize: 'font-size',
    fontFamily: 'font-family',
    linearGradient: 'linearGradient',
    svg: 'svg',
    transform: 'transform',
    path: 'path',
    gradient: 'gradient',
    x: 'x',
    y: 'y',
    dx: 'dx',
    dy: 'dy',
    x1: 'x1',
    x2: 'x2',
    y1: 'y1',
    klass: 'class',
    style: 'style',
    stroke: 'stroke',
    strokeWidth: 'stroke-width',
    text: 'text',
    textAnchor: 'text-anchor',
    title: 'title',
    width: 'width',
    height: 'height',
    stop: 'stop',
    stopColor: 'stop-color',
    offset: 'offset',
    gradientUnits: 'gradientUnits',
    userSpaceOnUse: 'userSpaceOnUse',
    g: 'g',
    translate: function (x, y) {
        return `translate(${x}, ${y})`;
    },
    url: function (selector) {
        return `url(#${selector})`;
    }
};

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var Key;
(function (Key) {
    Key["Backspace"] = "Backspace";
    Key["Tab"] = "Tab";
    Key["Enter"] = "Enter";
    Key["Shift"] = "Shift";
    Key["Control"] = "Control";
    Key["Alt"] = "Alt";
    Key["CapsLock"] = "CapsLock";
    Key["Escape"] = "Escape";
    Key["Space"] = " ";
    Key["PageUp"] = "PageUp";
    Key["PageDown"] = "PageDown";
    Key["End"] = "End";
    Key["Home"] = "Home";
    Key["ArrowLeft"] = "ArrowLeft";
    Key["ArrowUp"] = "ArrowUp";
    Key["ArrowRight"] = "ArrowRight";
    Key["ArrowDown"] = "ArrowDown";
    Key["Left"] = "Left";
    Key["Up"] = "Up";
    Key["Right"] = "Right";
    Key["Down"] = "Down";
    Key["Insert"] = "Insert";
    Key["Delete"] = "Delete";
    Key["Zero"] = "0";
    Key["ClosedParen"] = ")";
    Key["One"] = "1";
    Key["ExclamationMark"] = "!";
    Key["Two"] = "2";
    Key["AtSign"] = "@";
    Key["Three"] = "3";
    Key["PoundSign"] = "#";
    Key["Hash"] = "#";
    Key["Four"] = "4";
    Key["DollarSign"] = "$";
    Key["Five"] = "5";
    Key["PercentSign"] = "%";
    Key["Six"] = "6";
    Key["Caret"] = "^";
    Key["Hat"] = "^";
    Key["Seven"] = "7";
    Key["Ampersand"] = "&";
    Key["Eight"] = "8";
    Key["Star"] = "*";
    Key["Asterik"] = "*";
    Key["Nine"] = "9";
    Key["OpenParen"] = "(";
    Key["a"] = "a";
    Key["b"] = "b";
    Key["c"] = "c";
    Key["d"] = "d";
    Key["e"] = "e";
    Key["f"] = "f";
    Key["g"] = "g";
    Key["h"] = "h";
    Key["i"] = "i";
    Key["j"] = "j";
    Key["k"] = "k";
    Key["l"] = "l";
    Key["m"] = "m";
    Key["n"] = "n";
    Key["o"] = "o";
    Key["p"] = "p";
    Key["q"] = "q";
    Key["r"] = "r";
    Key["s"] = "s";
    Key["t"] = "t";
    Key["u"] = "u";
    Key["v"] = "v";
    Key["w"] = "w";
    Key["x"] = "x";
    Key["y"] = "y";
    Key["z"] = "z";
    Key["A"] = "A";
    Key["B"] = "B";
    Key["C"] = "C";
    Key["D"] = "D";
    Key["E"] = "E";
    Key["F"] = "F";
    Key["G"] = "G";
    Key["H"] = "H";
    Key["I"] = "I";
    Key["J"] = "J";
    Key["K"] = "K";
    Key["L"] = "L";
    Key["M"] = "M";
    Key["N"] = "N";
    Key["O"] = "O";
    Key["P"] = "P";
    Key["Q"] = "Q";
    Key["R"] = "R";
    Key["S"] = "S";
    Key["T"] = "T";
    Key["U"] = "U";
    Key["V"] = "V";
    Key["W"] = "W";
    Key["X"] = "X";
    Key["Y"] = "Y";
    Key["Z"] = "Z";
    Key["Meta"] = "Meta";
    Key["LeftWindowKey"] = "Meta";
    Key["RightWindowKey"] = "Meta";
    Key["Numpad0"] = "0";
    Key["Numpad1"] = "1";
    Key["Numpad2"] = "2";
    Key["Numpad3"] = "3";
    Key["Numpad4"] = "4";
    Key["Numpad5"] = "5";
    Key["Numpad6"] = "6";
    Key["Numpad7"] = "7";
    Key["Numpad8"] = "8";
    Key["Numpad9"] = "9";
    Key["Multiply"] = "*";
    Key["Add"] = "+";
    Key["Subtract"] = "-";
    Key["DecimalPoint"] = ".";
    Key["Divide"] = "/";
    Key["F1"] = "F1";
    Key["F2"] = "F2";
    Key["F3"] = "F3";
    Key["F4"] = "F4";
    Key["F5"] = "F5";
    Key["F6"] = "F6";
    Key["F7"] = "F7";
    Key["F8"] = "F8";
    Key["F9"] = "F9";
    Key["F10"] = "F10";
    Key["F11"] = "F11";
    Key["F12"] = "F12";
    Key["NumLock"] = "NumLock";
    Key["ScrollLock"] = "ScrollLock";
    Key["SemiColon"] = ";";
    Key["Equals"] = "=";
    Key["Comma"] = ",";
    Key["Dash"] = "-";
    Key["Period"] = ".";
    Key["UnderScore"] = "_";
    Key["PlusSign"] = "+";
    Key["ForwardSlash"] = "/";
    Key["Tilde"] = "~";
    Key["GraveAccent"] = "`";
    Key["OpenBracket"] = "[";
    Key["ClosedBracket"] = "]";
    Key["Quote"] = "'";
})(Key = exports.Key || (exports.Key = {}));
});

unwrapExports(dist);
var dist_1 = dist.Key;

/**
 * Copyright: ThoughtSpot Inc. 2014-2015
 * Author: Shikhar Agarwal (shikhar@thoughtspot.com)
 *
 * @fileoverview A generic context menu
 */
var ContextMenu_1;
let jsUtil = ngRequire('jsUtil');
let ContextMenu = ContextMenu_1 = class ContextMenu extends UIComponent$1 {
    constructor(onClose) {
        super();
        this.isEnabled = true;
        this._isActive = false;
        this.activeSubMenuId = null;
        this.onCloseCallback = onClose;
        this._keyDownHandlerId = jsUtil.generateUUID();
        // ID is required as there are two contextMenus initialized, one in table-viz-v2,
        // and another here.
        this.addWindowListener('keydown.contextMenu' + this._keyDownHandlerId, (event) => {
            this.onKeyDown(event);
        });
    }
    testHookGetListenerId() {
        return this._keyDownHandlerId;
    }
    showSubMenuItems(subMenuId, expandUp) {
        if (!!subMenuId) {
            this.activeSubMenuId = subMenuId;
        }
        this.expandMenu(expandUp);
    }
    reset() {
        this.activeSubMenuId = '';
        this.positionMenuAtInitialState();
    }
    postLink(element) {
        this.element = element.find('.bk-context-menu');
        this.element.appendTo('body');
    }
    setIsEnabled(isEnabled) {
        this.isEnabled = isEnabled;
    }
    show(contextMenuConfig) {
        if (!this.isEnabled) {
            return;
        }
        this.contextMenuConfig = contextMenuConfig;
        this.keepWithinViewPort();
        // Need this for changes to take effect
        this._isActive = true;
        this.forceRender();
    }
    hide() {
        this._isActive = false;
        this.contextMenuConfig = null;
        this.activeSubMenuId = '';
        // Need this for changes to take effect
        this.forceRender();
    }
    isActive() {
        return this._isActive;
    }
    positionMenuAtInitialState() {
        this.element.css({
            top: this.initialLaunchPosition.top + 'px',
            left: this.initialLaunchPosition.left + 'px'
        });
    }
    expandMenu(expandUp) {
        // If expansion down, unset bottom so that submenus can expand downwards.
        // We anchor the top here.
        if (!expandUp) {
            this.element.css({
                top: this.initialLaunchPosition.top + 'px',
                bottom: ''
            });
        }
        else {
            this.element.css({
                top: '',
                bottom: this.initialLaunchPosition.bottom + 'px'
            });
        }
    }
    onKeyDown(event) {
        if (!this.isActive()) {
            return;
        }
        // Future: Navigate on arrow keys, needs functions to go through menu items
        // Now: Close menu on escape, do nothing on nav keys and ignore otherwise since we
        //      can have a sub-menu that needs inputs
        if (event.key === dist_1.Escape) {
            //this.onCloseCallback(); // <= this is an indirect call to hide()
            this.hide();
            // We stop event propagation further so nothing other than closing the menu happens
            event.stopPropagation();
            event.preventDefault();
        }
        else if ([dist_1.Up, dist_1.ArrowUp, dist_1.PageUp, dist_1.Down, dist_1.ArrowDown, dist_1.PageDown,
            dist_1.Left, dist_1.ArrowLeft, dist_1.Right, dist_1.ArrowRight, dist_1.Home, dist_1.End]
            .indexOf(event.key) !== -1) {
            // We stop event propagation further so nothing other than closing the menu happens
            if (!this.activeSubMenuId) {
                event.stopPropagation();
                event.preventDefault();
            }
        }
    }
    canShowSubMenu(subMenuId) {
        return !this.activeSubMenuId || this.activeSubMenuId === subMenuId;
    }
    onDestroy(el) {
        super.onDestroy(el);
        if (this.element) {
            this.element.remove();
        }
    }
    keepWithinViewPort() {
        let config = this.contextMenuConfig;
        let clickedPosition = config.clickedPosition;
        let menuHeight = ContextMenu_1.HEIGHT_PER_SUBMENU * config.subMenuItems.length;
        let menuWidth = ContextMenu_1.WIDTH;
        let containerBoundary = document.documentElement.getBoundingClientRect();
        let newTop = clickedPosition.top;
        let newLeft = clickedPosition.left;
        // Open the menu where there is more space
        if (newTop - containerBoundary.top > containerBoundary.bottom - newTop) {
            newTop = newTop - menuHeight;
        }
        if (newLeft - containerBoundary.left > containerBoundary.right - newLeft) {
            newLeft = newLeft - menuWidth;
        }
        let newBottom = containerBoundary.bottom - newTop - menuHeight;
        this.initialLaunchPosition = {
            top: newTop,
            left: newLeft,
            bottom: newBottom
        };
        this.positionMenuAtInitialState();
    }
};
ContextMenu.WIDTH = 202;
ContextMenu.HEIGHT_PER_SUBMENU = 33;
ContextMenu = ContextMenu_1 = __decorate$3([
    Provide('ContextMenu'),
    Component({
        name: 'bkContextMenu',
        templateUrl: 'src/common/widgets/context-menu/context-menu.html'
    })
], ContextMenu);

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Samuel Paul Chandrasegaran(samuelpaulc@thoughtspot.com)
 *
 * @fileoverview Constants for SpotIQ
 */
var SpotIqAnalysisType;
(function (SpotIqAnalysisType) {
    SpotIqAnalysisType["CONTEXT_MENU"] = "context-menu";
    SpotIqAnalysisType["DEFAULT"] = "default-analyze";
    SpotIqAnalysisType["PINBOARD_VIZ"] = "pinboard-viz";
    SpotIqAnalysisType["FEEDBACK_LIKE"] = "feedback-like";
    SpotIqAnalysisType["FEEDBACK_DISLIKE"] = "feedback-dislike";
    SpotIqAnalysisType["ANOMALY_EXPLANATION"] = "anomaly-explanation";
})(SpotIqAnalysisType || (SpotIqAnalysisType = {}));
const SpotIqAnalysisTypeEventProperty = 'spotiqAnalysisType';

var template = "<svg class=\"bk-loading-spinner\"\n     viewBox=\"0 0 50 50\">\n    <circle class=\"bk-loading-spinner-path {{$ctrl.spinnerColor}}\"\n            cx=\"24\"\n            cy=\"24\"\n            r=\"20\"\n            fill=\"none\"\n            stroke-width=\"{{$ctrl.strokeWidth}}\"></circle>\n</svg>";

/**
 * Copyright: ThoughtSpot Inc. 2018
 *
 * Loading Spinner Component for components that need inline loading indicator
 *
 * Author: Brian Nguyen (brian.nguyen@thoughtpsot.com)
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const SpinnerColorsClass = {
    blue: 'blue',
    gray: 'gray',
    white: 'white'
};
let LoadingSpinnerComponent = class LoadingSpinnerComponent extends BaseComponent {
    constructor(spinnerColor = SpinnerColorsClass.blue, strokeWidth = 8) {
        super();
        this.spinnerColor = spinnerColor;
        this.strokeWidth = strokeWidth;
    }
};
LoadingSpinnerComponent = __decorate([
    Component$1({
        name: 'bkLoadingSpinner',
        template: template
    })
], LoadingSpinnerComponent);

var template$1 = "<div class=\"rd-button-wrapper\" ng-click=\"$ctrl.checkButtonDisabled($event)\">\n    <button class=\"rd-button rd-button-{{$ctrl.buttonType}}\"\n            ng-class=\"{'rd-button-icon-text': !$ctrl.isIconButton() && $ctrl.icon,\n            'rd-button-icon-{{$ctrl.iconButtonSize}}': $ctrl.iconButtonSize,\n            'rd-button-inverse': $ctrl.hasInverseStyle,\n            'rd-button-selected': $ctrl.isButtonSelected(),\n            'rd-button-compact': !$ctrl.isIconButton() && $ctrl.isCompactButton,\n            'rd-colored-background': $ctrl.hasColoredBackground}\"\n            button-tooltip=\"{{ tooltip }}\"\n            button-tooltip-placement=\"{{ tooltipPlacement }}\"\n            ng-disabled=\"$ctrl.isDisabled()\"\n            ng-click=\"$ctrl.buttonOnClick();\"\n            reverse-text-icon=\"reverseTextIcon\">\n        <bk-svg-icon ng-if=\"$ctrl.icon\" size=\"{{$ctrl.isIconButton() && $ctrl.iconSize || 'm'}}\"\n            icon=\"{{ $ctrl.icon }}\" type=\"{{$ctrl.isIconButton() && $ctrl.iconType || 'info'}}\">\n        </bk-svg-icon>\n        <span ng-if=\"!$ctrl.isIconButton() && $ctrl.text\"\n            class=\"rd-button-text\"\n            ng-class=\"{'rd-button-hide-text': $ctrl.isSaveInProgress()}\">{{$ctrl.text}}</span>\n        <span ng-if=\"$ctrl.isSaveButton\">\n            <bk-loading-spinner\n                ng-show=\"$ctrl.isSaveInProgress()\"\n                bk-ctrl=\"$ctrl.loadingSpinner\">\n            </bk-loading-spinner>\n        </span>\n    </button>\n</div>";

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Samrat Ambadekar (samrat.ambadekar@thoughtspot.com)
 *
 * @fileoverview Controller for button component.
 */
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ButtonType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    GHOST: 'ghost',
    GHOST_PRIMARY: 'ghost primary',
    ICON: 'icon'
};
const IconButtonSize = {
    SMALL: 's',
    MEDIUM: 'm',
    LARGE: 'l',
};
const buttonTypeStylingProperties = {
    [ButtonType.PRIMARY]: {
        spinnerColor: 'white'
    },
    [ButtonType.SECONDARY]: {
        spinnerColor: 'gray'
    },
    [ButtonType.GHOST]: {
        spinnerColor: 'blue'
    },
    [ButtonType.GHOST_PRIMARY]: {
        spinnerColor: 'blue'
    },
    [ButtonType.ICON]: {
        spinnerColor: 'blue'
    },
};
let ButtonComponent = class ButtonComponent extends BaseComponent {
    constructor(config) {
        super();
        this.hideTooltip = false;
        this.hasInverseStyle = false;
        this.isCompactButton = false;
        this.hasColoredBackground = false;
        this.isSaveButton = false;
        this.text = config.text;
        this.isDisabled = config.isDisabled || (() => false);
        this.buttonOnClick = config.buttonOnClick;
        this.hideTooltip = config.hideTooltip;
        this.buttonType = config.buttonType;
        this.id = config.id;
        this.icon = config.icon;
        this.iconSize = config.iconSize;
        this.iconType = config.iconType;
        this.iconButtonSize = config.iconButtonSize;
        this.hasInverseStyle = config.hasInverseStyle;
        this.isSaveButton = config.isSaveButton;
        this.isSaveInProgress = config.isSaveInProgress;
        this.isButtonSelected = config.isButtonSelected;
        this.loadingSpinner = new LoadingSpinnerComponent(buttonTypeStylingProperties[this.buttonType].spinnerColor, 4);
        this.isCompactButton = config.isCompactButton;
        this.hasColoredBackground = config.hasColoredBackground;
    }
    checkButtonDisabled($event) {
        let timeoutDuration = 400; // animation runs for 0.4s
        if (this.isDisabled()) {
            $event.target.classList.add('disable-animation');
            setTimeout(() => {
                $event.target.classList.remove('disable-animation');
            }, timeoutDuration);
            return;
        }
    }
    isIconButton() {
        return this.buttonType === ButtonType.ICON;
    }
};
ButtonComponent = __decorate$1([
    Component$1({
        name: 'rdButton',
        template: template$1
    })
], ButtonComponent);

/**
 * Copyright: ThoughtSpot Inc. 2012-2018
 * Author: Joy Dutta (joy@thoughtspot.com)
 * Author: Ajay Guleria (ajay@thoughtspot.com)
 *
 * @fileoverview Base class for both global and local alerts
 */
let $timeout = ngRequire('$timeout');
// Component to handle application wide critical alerts
class AlertComponentBase extends ScopedComponent$1 {
    // Much of initialization happens on showAlert
    constructor(destroyCB) {
        super();
        this.isAlertVisible = false;
        this.message = '';
        //! type of alert - success, warning or error (required)
        this._type = '';
        //! action for the alert (only shows up on global alerts)
        this._action = {};
        //! Some messages like to control whether the user can hide them
        this._allowClose = false;
        //! Some messages may not have a report button
        this._showReportButton = true;
        //! _timer is used to auto hide alerts when needed
        this._timer = null;
        this._destroyCallback = destroyCB;
    }
    registerDestroyCallback(destroyCB) {
        if (this._destroyCallback) {
            this._destroyCallback();
        }
        this._destroyCallback = destroyCB;
    }
    isSuccessMessage() {
        return this._type === alertConstants.type.SUCCESS;
    }
    isWarningMessage() {
        return this._type === alertConstants.type.PROBLEM;
    }
    isErrorMessage() {
        return this._type === alertConstants.type.ERROR;
    }
    // We will get here via broadcast message
    showAlert(data, successHidingDelay) {
        // if no message passed then nothing more to do
        if (!data || !data.message) {
            return;
        }
        this.message = data.message;
        this._type = data.type || '';
        this._errorCause = data.errorCause || alertConstants.errorCause.NONE;
        this._action = data.action || {};
        this._allowClose = data.allowClose || false;
        if (data.hideReportButton === undefined) {
            this._showReportButton = (this._type === alertConstants.type.ERROR);
        }
        else {
            this._showReportButton = !data.hideReportButton;
        }
        data.details = data.details || {};
        // This goes into the report dialog
        if (!data.details.details) {
            data.details.details = data.message;
        }
        this._details = data.details;
        this.isAlertVisible = true;
        // auto-hide a success message
        if (this._type === alertConstants.type.SUCCESS
            && !flags.getValue(flags.BLINK_FLAGS.disableSuccessNotificationAutoHide.name)) {
            this._timer = $timeout(() => {
                this.isAlertVisible = false;
            }, successHidingDelay || flags.getValue(flags.BLINK_FLAGS.successAlertHidingDelay.name));
        }
    }
    clearAlert() {
        if (!this.isSuccessMessage()) {
            this.isAlertVisible = false;
        }
    }
    closeAlert() {
        if (this._timer) {
            $timeout.cancel(this._timer);
        }
        this.isAlertVisible = false;
    }
    onDestroy() {
        this.clearAlert();
        if (!!this._destroyCallback) {
            this._destroyCallback();
        }
    }
    showReportAlert() {
        return this._showReportButton;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2015-2019
 * Author: Rahul Paliwal (rahul@thoughtspot.com) Sagar Patni
 *
 * @fileoverview Utility to download content using Form Submissions, this has an
 * advantage that the downloaded requests are handled by browser instead of javascript
 * which fetches file data into memory and then downloads it and since certain cases
 * file size might be too large to bring it into memory, delegating this to browser is efficient.
 */
let FormDownloader = class FormDownloader {
    downloadForm(url, inputKeyValueMap, textAreaKeyValueMap, sendAsMultiPart) {
        let xhr = new XMLHttpRequest();
        let fd = new FormData();
        let fdArr = new URLSearchParams();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        if (!sendAsMultiPart) {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.responseType = 'arraybuffer';
        return new Promise((resolve, reject) => {
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let filename = '';
                    let disposition = xhr.getResponseHeader('Content-Disposition');
                    if (disposition && disposition.indexOf('attachment') !== -1) {
                        let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        let matches = filenameRegex.exec(disposition);
                        if (matches !== null && matches[1]) {
                            filename = matches[1].replace(/['"]/g, '');
                        }
                    }
                    filename = filename.trim().replace('UTF-8', '');
                    let type = xhr.getResponseHeader('Content-Type');
                    let blob = _$1.isFunction(File)
                        ? new File([xhr.response], filename, { type: type })
                        : new Blob([xhr.response], { type: type });
                    if (!_$1.isUndefined(window.navigator.msSaveBlob)) {
                        window.navigator.msSaveBlob(blob, filename);
                    }
                    else {
                        let URL = window.URL || window.webkitURL;
                        let downloadUrl = URL.createObjectURL(blob);
                        if (filename) {
                            // use HTML5 a[download] attribute to specify filename
                            let a = document.createElement('a');
                            // safari doesn't support this yet
                            if (_$1.isUndefined(a.download)) {
                                window.location = downloadUrl;
                            }
                            else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);
                                a.click();
                            }
                        }
                        else {
                            window.location = downloadUrl;
                        }
                        setTimeout(() => {
                            URL.revokeObjectURL(downloadUrl);
                        }, 100); // cleanup
                    }
                    resolve(xhr);
                }
                else {
                    reject(xhr);
                }
            };
            let payload = Object.assign({}, inputKeyValueMap, textAreaKeyValueMap);
            for (let key in payload) {
                if (payload.hasOwnProperty(key)) {
                    !!sendAsMultiPart ? fd.append(key, payload[key])
                        : fdArr.append(key, payload[key]);
                }
            }
            !!sendAsMultiPart ? xhr.send(fd) : xhr.send(fdArr.toString());
        });
    }
};
FormDownloader = __decorate$3([
    Provide('FormDownloader')
], FormDownloader);

/**
 * Copyright: ThoughtSpot Inc. 2012-2018
 * Author: Joy Dutta (joy@thoughtspot.com)
 * Author: Ajay Guleria (ajay@thoughtspot.com)
 *
 * @fileoverview Component for showing local alerts.
 * To provide local alerts:
 *      You need to insert a bk-alert directive in your html where you want to show the alert. E.g.
 *      <bk-alert bk-ctrl="$ctrl.alertComponent" ng-if="$ctrl.alertComponent"></bk-alert>
 *      You need to hook up $ctrl.alertComponent to appropriate instance of AlertComponent.
 *      Then create an instance of AlertComponent in your controller or component with appropriate
 *      payload when you have an error to show.
 */
var AlertComponent_1;
// Component to handle localized alerts in components
let AlertComponent = AlertComponent_1 = class AlertComponent extends AlertComponentBase {
    // Much of initialization happens on showAlert. Set alertType to unmuted if your alert
    // must grab user's attention
    constructor(data, destroyCB, classTag, successHidingDelay) {
        super(destroyCB);
        this._logger = logger_3('alert-component');
        //! Local error alerts are typically styled to be muted but sometimes we want
        //! these alerts to stand out (i.e. have a red background etc)
        this._classTag = AlertComponent_1.CLASS_TAG.MUTED;
        this._classTag = classTag || this._classTag;
        // by default close button is not shown for local-alerts, but can be enabled by allowClose
        if (data) {
            data.allowClose = !!data.allowClose;
        }
        else {
            // When does this happen?
            this._logger.error('Undefined data in AlertComponent constructor');
        }
        this.showAlert(data, successHidingDelay);
    }
    alertIcon() {
        if (!this._type) {
            return;
        }
        if (!this._errorCause) {
            return `/resources/img/svg-icons/${this._type}.svg`;
        }
        if (this._errorCause === alertConstants.errorCause.NOT_AUTHORIZED) {
            return '/resources/img/svg-icons/no-permissions.svg';
        }
        else if (this._errorCause === alertConstants.errorCause.NOT_FOUND) {
            // TODO: Change it when icon becomes available
            return '/resources/img/svg-icons/x-lg-hover.svg';
        }
        else if (this._errorCause === alertConstants.errorCause.TIMED_OUT) {
            return '/resources/img/svg-icons/timed-out.svg';
        }
        else if (this._errorCause === alertConstants.errorCause.NO_DATA) {
            return '/resources/img/svg-icons/no-data.svg';
        }
        return '/resources/img/svg-icons/data-load-failed.svg';
    }
    alertClasses() {
        // Local error alerts will be muted i.e they will be gray and not standout like global
        // error messages. For critical local errors, we will still use the regular style
        return `bk-alert-${this._type} ${this._classTag}`;
    }
    onReportAlert() {
        this._alertDialog = new ReportProblemDialog(this._details);
        this._alertDialog.show();
    }
    canClose() {
        return this._allowClose;
    }
};
AlertComponent.CLASS_TAG = {
    MUTED: 'bk-muted-alert',
    UNMUTED: 'bk-unmuted-alert',
    MUTED_SMALL: 'bk-muted-small-alert' // For muted alerts in small size viz e.g. headlines
};
AlertComponent = AlertComponent_1 = __decorate$3([
    Component({
        name: 'bkAlert',
        templateUrl: 'src/common/widgets/alert/alert.html',
    })
], AlertComponent);

/**
 * Copyright: ThoughtSpot Inc. 2018
 * Author: Ashish Shubham (ashish@thoughtspot.com)
 *
 * @fileoverview
 */
var DialogCloseState;
(function (DialogCloseState) {
    DialogCloseState[DialogCloseState["NONE"] = 0] = "NONE";
    DialogCloseState[DialogCloseState["DISMISS"] = 1] = "DISMISS";
    DialogCloseState[DialogCloseState["CONFIRM"] = 2] = "CONFIRM";
    DialogCloseState[DialogCloseState["CANCEL"] = 3] = "CANCEL";
})(DialogCloseState || (DialogCloseState = {}));
var DialogSize;
(function (DialogSize) {
    DialogSize["SMALL"] = "small";
    DialogSize["MEDIUM"] = "medium";
    DialogSize["LARGE"] = "large";
    DialogSize["FULLSCREEN"] = "fullscreen";
    DialogSize["XLARGE"] = "xlarge";
})(DialogSize || (DialogSize = {}));

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Ashish Shubham (ashish@thoughtspot.com)
 *
 * @fileoverview
 */
class DialogController extends UIComponent$1 {
    constructor() {
        super();
        this.processingAsyncConfirm = false;
        this.processingAsyncResolve = false;
        this.asyncConfirmError = null;
        this._logger = logger_3('bulk-filter-component');
        disableScalingIfNeeded();
    }
    uIPostLink($el) {
        super.uIPostLink($el);
        this.data = this.ngDialogData;
        this.loadContent();
        if (this.processingAsyncResolve) {
            this.showLoading();
        }
        this.modalCancelButtonCtrl = new ButtonComponent({
            text: this.data.cancelBtnLabel || this.strings.CANCEL,
            isDisabled: () => !!this.data.disableCancelBtn,
            buttonType: ButtonType.SECONDARY,
            buttonOnClick: () => this.cancelBtnClick()
        });
        this.modalSkipCancelButtonCtrl = new ButtonComponent({
            text: this.data.confirmBtnLabel || this.strings.CONFIRM,
            isDisabled: () => this.processingAsyncConfirm,
            buttonType: ButtonType.GHOST,
            buttonOnClick: () => this.confirmSync()
        });
        this.modalConfirmAsyncButtonCtrl = new ButtonComponent({
            text: this.data.confirmAsyncBtnLabel,
            isDisabled: () => this.processingAsyncConfirm || this.isConfirmDisabled(),
            buttonType: ButtonType.PRIMARY,
            buttonOnClick: () => this.confirmAsync(),
            isSaveButton: true,
            isSaveInProgress: () => this.processingAsyncConfirm
        });
        this.modalConfirmAsyncFalseButtonCtrl = new ButtonComponent({
            text: this.data.confirmBtnLabel || this.strings.CONFIRM,
            isDisabled: () => this.processingAsyncConfirm || this.isConfirmDisabled(),
            buttonType: ButtonType.PRIMARY,
            buttonOnClick: () => this.confirmSync()
        });
        this.modalBackButtonCtrl = new ButtonComponent({
            buttonType: ButtonType.ICON,
            buttonOnClick: () => this.data.onBack(),
            icon: 'rd-icon-chevron-left-xl',
            iconType: 'action',
            iconSize: 'l',
            iconButtonSize: IconButtonSize.LARGE
        });
        this.modalCloseButtonCtrl = new ButtonComponent({
            text: this.strings.CLOSE,
            buttonType: ButtonType.SECONDARY,
            buttonOnClick: () => this.dismiss()
        });
        this.modalHeaderInfoIconButtonCtrl = new ButtonComponent({
            buttonType: ButtonType.ICON,
            buttonOnClick: () => this.data.onHeaderInfoIconClicked(),
            icon: 'rd-icon-information-l',
            iconType: 'action',
            iconSize: 'm',
            iconButtonSize: IconButtonSize.SMALL
        });
    }
    showCloseButton() {
        return (!!this.data.skipConfirmBtn && !!this.data.skipCancelBtn &&
            !this.data.onConfirmAsync) || this.data.showCloseButton;
    }
    closeDialog(noCancelCallback) {
        if (!noCancelCallback) {
            this.data.closeState = DialogCloseState.CANCEL;
        }
        else {
            this.data.closeState = DialogCloseState.CONFIRM;
        }
        resumeScalingIfNeeded();
        this.closeThisDialog(this.data);
    }
    dismiss() {
        this.data.closeState = DialogCloseState.DISMISS;
        resumeScalingIfNeeded();
        this.closeThisDialog(this.data);
    }
    cancelBtnClick() {
        if (!this.data.disableCancelBtn) {
            this.closeDialog(false);
        }
    }
    confirmSync() {
        if (this.processingAsyncConfirm) {
            return;
        }
        try {
            this.alertComponent = null;
            let isConfirmed = confirm(this.data);
            if (isConfirmed) {
                this.closeDialog(true);
            }
        }
        catch (errorResponse) {
            if (typeof errorResponse === 'object') {
                this.alertComponent = new AlertComponent(errorResponse, void 0, AlertComponent.CLASS_TAG.UNMUTED);
            }
            else {
                this._logger.error(errorResponse);
            }
        }
    }
    isConfirmDisabled() {
        return confirmDisabled(this.data);
    }
    confirmAsync() {
        if (this.processingAsyncConfirm) {
            return;
        }
        this.processingAsyncConfirm = true;
        this.asyncConfirmError = null;
        this.alertComponent = null;
        this.showLoading();
        return this.data.onConfirmAsync(this.data.customData)
            .then(() => {
            if (!this.data.noClearOnConfirm) {
                this.closeDialog(true);
            }
        }, (errorResponse) => {
            if (typeof errorResponse === 'object') {
                this.alertComponent = new AlertComponent(errorResponse, void 0, AlertComponent.CLASS_TAG.UNMUTED);
            }
            else {
                this.asyncConfirmError = errorResponse;
            }
            this.forceRender();
        })
            .finally(() => {
            this.processingAsyncConfirm = false;
            this.hideLoading();
        });
    }
    getDialogSize() {
        return this.data.dialogSize;
    }
    async loadContent() {
        if (typeof this.data.loadingResolve !== 'function') {
            return false;
        }
        this.processingAsyncResolve = true;
        await this.data.loadingResolve();
        this.processingAsyncResolve = false;
        this.hideLoading();
        this.forceRender();
    }
}
function confirm(data) {
    // onConfirm callback needs to return true to clear the dialog window.
    return !data.onConfirm || !!data.onConfirm(data.customData || {});
}
function confirmDisabled(data) {
    if (_$1.isFunction(data.isConfirmBtnDisabled)) {
        return data.isConfirmBtnDisabled(data.customData || {});
    }
    return !!data.isConfirmBtnDisabled;
}

/**
 * Copyright: ThoughtSpot Inc. 2016-2018
 * Author: Ashish Shubham (ashish@thoughtspot.com)
 *
 * @fileoverview
 */
let logger = logger_3('ngDialog');
let ngDialog = ngRequire('ngDialog');
function show(config) {
    config.closeState = DialogCloseState.NONE;
    config.customData = config.customData || {};
    let dlg = ngDialog.open({
        closeByNavigation: !config.doNotCloseOnNavigation,
        className: 'bk-dialog-container',
        appendClassName: config.customCssClass,
        template: 'src/common/widgets/dialog/dialog.html',
        data: config,
        controller: DialogController,
        showClose: false,
        closeByEscape: !config.doNotCloseByEscape,
        closeByDocument: !config.doNotCloseByDocument,
        bindToController: true,
        controllerAs: '$ctrl',
        onOpenCallback: function () {
            // We find the element with class 'bk-dialog' as ngDialog is attached to
            // the body and has wrappings of its own. In dialog.html, div with class 'bk-dialog'
            // is the first HTMLElement.
            const $elm = $(this).find('.bk-dialog');
            try {
                // NOTE: We don't have control over the lifecycle hooks with ngDialog.
                // Therefore, we need to explicitly get the controller and call
                // controller's uIPostLink API onOpenCallback.
                let scope = $($elm).scope();
                let $ctrl = scope.$ctrl;
                $ctrl.setScope(scope);
                $ctrl.uIPostLink($elm);
            }
            catch (e) {
                logger.error('Error in getting controller from HTMLDivElement of dialog.');
            }
            if (config.onOpen) {
                config.onOpen();
            }
        },
        preCloseCallback: dismiss.bind(null, config)
    });
    dlg.closePromise.then((data) => {
        let isCancelled = config.closeState === DialogCloseState.CANCEL;
        if (!config.donotRunCancelOnOutsideClick) {
            isCancelled = isCancelled || config.closeState === DialogCloseState.NONE;
        }
        if (isCancelled && _$1.isFunction(config.onCancel)) {
            config.onCancel(data.customData);
        }
    });
    if (config.dialogSize === DialogSize.FULLSCREEN) {
        pushDialogContextState(config.contextState);
    }
    return {
        ...dlg,
        update: Object.assign.bind(Object, config)
    };
}
function dismiss(config, data) {
    if (config.closeState === DialogCloseState.CONFIRM
        || config.closeState === DialogCloseState.CANCEL) {
        return true;
    }
    // onDismiss callback needs to return true to clear the dialog window.
    let canDismiss = !config.onDismiss || !!config.onDismiss(config.customData || {});
    if (config.cancelCbOnClose) {
        config.closeState = DialogCloseState.CANCEL;
    }
    if (config.dialogSize === DialogSize.FULLSCREEN) {
        popDialogContextState();
    }
    return canDismiss;
}
const dialog = {
    show,
    size: DialogSize
};
Provide('dialog')(dialog);

/**
 * Copyright: ThoughtSpot Inc. 2018
 * Author: Ajay Guleria (ajay.guleria@thoughtspot.com),
 *
 * @fileoverview A popup component to display report dialog to capture and send error traces
 *
 */
let globalAlertService = ngRequire('globalAlertService');
let UserAction = ngRequire('UserAction');
/**
 * Popup component to show problem reports and send email to Admin
 */
let ReportProblemDialog = class ReportProblemDialog extends BaseComponent$1 {
    constructor(data) {
        super();
        this.setData(data);
    }
    // Used for testing purposes
    setData(data) {
        this._customData = data.customData || {};
        this._customUrl = data.customUrl;
        this._serverCause = data.serverCause;
        this._details = data.details;
        this._userContext = '';
    }
    hasDetails() {
        return !!this._customUrl || !!this._details;
    }
    downloadTrace() {
        if (this._customData.traceId) {
            this._customData.flushClientDebugTracePromise.then(() => {
                new FormDownloader().downloadForm('callosum/v1/admin/debug/gettraceevent', { id: this._customData.traceId }, undefined, false);
            });
        }
    }
    sendReport() {
        let userAction = new UserAction(UserAction.REPORT_PROBLEM);
        return this._customData.flushClientDebugTracePromise.then(() => {
            return reportTraceEvent({
                id: this._customData.traceId,
                userMsg: this._userContext,
                data: JSON.stringify(this._customData),
                errorUrl: this._customUrl,
                details: this._details
            }).then((response) => {
                let payload = getUserActionSuccessAlertContent(userAction);
                globalAlertService.showAlert(payload);
            }, (response) => {
                let payload = getUserActionFailureAlertContent(userAction, response);
                globalAlertService.showAlert(payload);
            });
        });
    }
    show() {
        return show({
            dialogSize: DialogSize.SMALL,
            cancelBtnLabel: strings.Cancel,
            title: strings.apiErrorMessage.reportProblem,
            skipConfirmBtn: !this._customData.traceId,
            headerIcon: 'rd-icon-send-m',
            confirmAsyncBtnLabel: strings.alertService.REPORT,
            confirmBtnLabel: strings.alertService.DOWNLOAD_TRACE,
            customCssClass: 'bk-report-problem',
            onConfirmAsync: () => {
                return this.sendReport();
            },
            onConfirm: () => {
                this.downloadTrace();
                // We do not close the dialog here
                return false;
            },
            onCancel: () => {
                return false;
            },
            onDismiss: () => {
                return true;
            },
            customData: this,
            customBodyUrl: 'src/common/widgets/alert/report-problem.html'
        });
    }
};
ReportProblemDialog = __decorate$3([
    Component({
        name: 'bkReportProblemPopup',
        templateUrl: 'src/common/widgets/alert/report-problem.html'
    })
], ReportProblemDialog);

/**
 * Copyright: ThoughtSpot Inc. 2012-2018
 * Author: Joy Dutta (joy@thoughtspot.com)
 * Author: Ajay Guleria (ajay@thoughtspot.com)
 *
 * @fileoverview Component for showing critical alerts at top level
 */
// Component to handle application wide critical alerts
let GlobalAlertComponent = class GlobalAlertComponent extends AlertComponentBase {
    constructor() {
        super();
        this._logger = logger_3('global-alert-component');
        this.createReportButton();
        this.createAlertCloseButton();
    }
    alertClasses() {
        let classTags = `bk-alert-${this._type}`;
        if (this._timer && this._type === 'success') {
            classTags = `${classTags} animate-slide-up`;
        }
        return classTags;
    }
    canClose() {
        return this._type === alertConstants.type.ERROR ||
            this._type === alertConstants.type.SUCCESS ||
            this._allowClose;
    }
    shouldShowActionMessageLink() {
        return !!this._action.message && !!this._action.link;
    }
    shouldShowActionMessage() {
        return !!this._action.message && !this._action.link;
    }
    // handle a custom action if there is any to act on
    handleAction() {
        if (!this._action || !this._action.handler) {
            return;
        }
        this._action.handler();
    }
    onReportAlert() {
        this._alertDialog = new ReportProblemDialog(this._details);
        this._alertDialog.show();
    }
    createReportButton() {
        this.alertReportButtonCtrl = new ButtonComponent({
            text: strings.alertService.REPORT,
            buttonType: ButtonType.SECONDARY,
            isCompactButton: true,
            hasColoredBackground: true,
            buttonOnClick: () => this.onReportAlert()
        });
    }
    createAlertCloseButton() {
        this.alertCloseButtonCtrl = new ButtonComponent({
            buttonType: ButtonType.ICON,
            buttonOnClick: () => this.closeAlert(),
            hasColoredBackground: true,
            icon: 'rd-icon-remove-m',
            iconType: 'info',
            iconSize: 's',
            iconButtonSize: IconButtonSize.SMALL
        });
    }
};
GlobalAlertComponent = __decorate$3([
    Component({
        name: 'bkGlobalAlert',
        templateUrl: 'src/common/widgets/alert/global-alert.html',
    })
], GlobalAlertComponent);
Provide('GlobalAlertComponent')(GlobalAlertComponent);

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Priyanshi Deshwal (priyanshi@thoughtspot.com)
 *
 * @fileoverview Exports a config class for Full embed app.
 */
let sessionService = ngRequire('sessionService');
Provide('FullEmbedConfig')({
    isPrimaryNavHidden,
    isAlertBarHidden,
    isEmbeddedPinboardMenuEnabled,
    isPoweredFooterHidden,
    isVizDataExportEnabled
});
function isPrimaryNavHidden() {
    return sessionService.isPrimaryNavEnabledForFullEmbed();
}
function isAlertBarHidden() {
    return sessionService.isAlertBarHiddenForFullEmbed();
}
function isEmbeddedPinboardMenuEnabled() {
    return isPinboardMenuEnabledForFullEmbed();
}
function isPoweredFooterHidden() {
    return sessionService.isPoweredFooterHiddenForFullEmbed();
}
function isVizDataExportEnabled() {
    return sessionService.isVizDataExportForFullEmbedEnabled();
}

/**
 * Copyright: ThoughtSpot Inc. 2018
 * Author: Ajay Guleria (ajay@thoughtspot.com)
 *
 * This utility provides helper functions to determine when application is embedded
 * and to parse alerts for the embedded application
 *
 */
let _logger = logger_3('alert-message-util');
function isAlertBarHidden$1() {
    return isAppEmbedded() && isAlertBarHidden();
}
function parseAlertsForFullEmbed(params) {
    let alertParams = {
        messages: params.message,
        type: params.type
    };
    if (params.customData) {
        alertParams.traceId = params.customData.traceId;
        alertParams.code = params.customData.leftColumnPairs[0].value;
        alertParams.incidentId = params.customData.rightColumnPairs[0].value;
    }
    return alertParams;
}
Provide('embeddedAlertUtil')({
    isAlertBarHidden: isAlertBarHidden$1,
    parseAlertsForFullEmbed
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2018
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 * Author: Ajay Guleria (ajay@thoughtspot.com)
 *
 * This provides global alert service for the app
 */
let _logger$1 = logger_3('global-alert-service');
/**
 * Instead of using events to communicate, we will create the globalAlertComponent here
 * and call its functions directly. Assumption is that there is only one instance of
 * this component.
 *
 * @return {GlobalAlertComponent}
 */
class InstanceContainer {
    constructor() {
        this.popupAlertInUse = false;
        this.globalAlertInstance = new GlobalAlertComponent();
        this.popupAlertInstance = new GlobalAlertComponent();
        this.popupAlertInUse = false;
    }
    static getInstance() {
        if (!InstanceContainer.instance) {
            InstanceContainer.instance = new InstanceContainer();
        }
        return InstanceContainer.instance;
    }
    getGlobalAlertComponent() {
        return this.globalAlertInstance;
    }
    getCurrentAlertComponent() {
        if (this.popupAlertInUse) {
            return this.popupAlertInstance;
        }
        return this.globalAlertInstance;
    }
    capturePopupAlertComponent() {
        this.popupAlertInUse = true;
        return this.popupAlertInstance;
    }
    releasePopupAlertComponent() {
        this.popupAlertInUse = false;
    }
}
function getGlobalAlertComponent() {
    return InstanceContainer.getInstance().getGlobalAlertComponent();
}
function getPopupAlertComponent() {
    return InstanceContainer.getInstance().capturePopupAlertComponent();
}
function getCurrentComponent() {
    return InstanceContainer.getInstance().getCurrentAlertComponent();
}
function releasePopupAlertComponent() {
    InstanceContainer.getInstance().releasePopupAlertComponent();
}
function showAlert(params) {
    if (isAlertBarHidden$1()) {
        let alertMessage = parseAlertsForFullEmbed(params);
        if (window.parent) {
            let alert = Object.assign({}, alertMessage, {
                // This denotes the type of the postMessage event sent to the parent
                // Window from within the Iframe.
                __type: events.api.ALERT
            });
            window.parent.postMessage(alert, '*');
        }
        return;
    }
    getCurrentComponent().showAlert(params);
}
function hideAlert() {
    if (isAlertBarHidden$1()) {
        return;
    }
    getCurrentComponent().clearAlert();
}
Provide('globalAlertService')({
    getGlobalAlertComponent,
    getPopupAlertComponent,
    releasePopupAlertComponent,
    hideAlert,
    showAlert,
    alertConstants
});

/**
* Copyright: ThoughtSpot Inc. 2012-2016
* Author: Shashank Singh (sunny@thoughtspot.com)
*
* @fileoverview  A generic component popup service that can show
* the provided component as a modal popup.
*/
let popupService = ngRequire('popupService');
class ComponentPopupService {
    static show(componentName, component) {
        if (!!ComponentPopupService.popup) {
            return;
        }
        let html = stringUtil_1(ComponentPopupService.COMPONENT_HTML_TEMPLATE, {
            componentName: componentName,
        });
        let alertComponent = getPopupAlertComponent();
        ComponentPopupService.popup = popupService.show(html, {
            bkCtrl: component,
            criticalAlert: alertComponent
        });
    }
    static hide() {
        if (!ComponentPopupService.popup) {
            return;
        }
        releasePopupAlertComponent();
        ComponentPopupService.popup.hide();
        ComponentPopupService.popup = null;
    }
}
ComponentPopupService.COMPONENT_HTML_TEMPLATE = '<div class="bk-component-popup">' +
    '<bk-global-alert bk-ctrl="criticalAlert"></bk-global-alert>' +
    '<{componentName} bk-ctrl="bkCtrl"></{componentName}></div>';

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Bhanu Jupally (bhanu.jupally@thoughtspot.com),
 *
 * @fileoverview Splash Screen Component
 *
 */
let SplashScreenComponent = class SplashScreenComponent extends BaseComponent$1 {
    constructor(config) {
        super();
        this.data = config;
        this.confirmText = config.confirmBtnText || this.strings.CONFIRM;
    }
};
SplashScreenComponent = __decorate$3([
    Component({
        name: 'bkSplashScreen',
        templateUrl: 'src/common/widgets/splash-screen/splash-screen.html'
    })
], SplashScreenComponent);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Bhanu Jupally (bhanu.jupally@thoughtspot.com),
 *
 * @fileoverview A popup component to display Splash Screen Component
 */
let SplashScreenPopupComponent = class SplashScreenPopupComponent extends BaseComponent$1 {
    constructor(config) {
        super();
        this.config = config;
        this.init(config);
    }
    show() {
        this.dialog = show({
            onDismiss: this.config.onDismiss,
            dialogSize: DialogSize.SMALL,
            skipConfirmBtn: true,
            skipCancelBtn: true,
            skipHeader: true,
            customCssClass: 'bk-splash-screen-dialog',
            customData: {
                splashScreenComponent: this.splashScreenComponent,
            },
            customBodyUrl: 'src/common/widgets/splash-screen/splash-screen-popup.html'
        });
    }
    hide() {
        if (this.dialog) {
            this.dialog.close('');
        }
    }
    init(config) {
        this.splashScreenComponent = new SplashScreenComponent(config);
    }
};
SplashScreenPopupComponent = __decorate$3([
    Component({
        name: 'bkSplashScreenPopup',
        templateUrl: 'src/common/widgets/splash-screen/splash-screen-popup.html'
    })
], SplashScreenPopupComponent);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview Controller for checkbox component.
 */
var CheckboxComponent_1;
var CheckboxState;
(function (CheckboxState) {
    CheckboxState[CheckboxState["UNCHECKED"] = 0] = "UNCHECKED";
    CheckboxState[CheckboxState["PARTIAL"] = 1] = "PARTIAL";
    CheckboxState[CheckboxState["CHECKED"] = 2] = "CHECKED";
})(CheckboxState || (CheckboxState = {}));
Provide('checkbox')({
    CheckboxState
});
let CheckboxComponent = CheckboxComponent_1 = class CheckboxComponent extends BaseComponent$1 {
    constructor(config) {
        super();
        this.isImmutable = false;
        this.label = config.label;
        this.stateGetter = config.stateGetter;
        this.isReadOnly = config.isReadOnly || false;
        this.onClickCallback = config.onClick;
        this.hideTooltip = config.hideTooltip || false;
        this.isTriStateMode = config.isTriStateMode || false;
        this.shouldTruncate = config.shouldTruncate || false;
        this.isImmutable = config.isImmutable || false;
        this.id = config.id;
    }
    static __getExamples() {
        let enabled1 = true, enabled2 = false, triState = CheckboxState.PARTIAL;
        return [
            {
                ctrl: new CheckboxComponent_1({
                    label: 'Enabled and Checked',
                    stateGetter: () => enabled1,
                    onClick: ($event) => enabled1 = !enabled1,
                }),
            },
            {
                ctrl: new CheckboxComponent_1({
                    label: 'Enabled and Unchecked',
                    stateGetter: () => enabled2,
                    onClick: ($event) => enabled2 = !enabled2,
                }),
            },
            {
                ctrl: new CheckboxComponent_1({
                    label: 'Disabled and Checked',
                    stateGetter: () => true,
                    isReadOnly: true,
                }),
            },
            {
                ctrl: new CheckboxComponent_1({
                    label: 'Disabled and Unchecked',
                    stateGetter: () => false,
                    isReadOnly: true,
                }),
            },
            {
                ctrl: new CheckboxComponent_1({
                    label: 'Tri State Checkbox',
                    stateGetter: () => triState,
                    onClick: ($event) => {
                        triState = (triState + 1) % 3;
                    },
                    isTriStateMode: true,
                }),
            },
            {
                ctrl: new CheckboxComponent_1({
                    label: 'Tri State Disabled',
                    stateGetter: () => CheckboxState.PARTIAL,
                    isReadOnly: true,
                    isTriStateMode: true,
                }),
            }
        ];
    }
    setOnClick(onClick) {
        this.onClickCallback = onClick;
        return this;
    }
    setLabel(label) {
        this.label = label;
        return this;
    }
    setReadOnly(isReadOnly) {
        this.isReadOnly = isReadOnly;
        return this;
    }
    setID(id) {
        this.id = id;
        return this;
    }
    setTriStateMode(isTriState) {
        this.isTriStateMode = isTriState;
        return this;
    }
    setShouldTruncate(shouldTruncate) {
        this.shouldTruncate = shouldTruncate;
        return this;
    }
    getLabel() {
        return this.label;
    }
    getID() {
        return this.id;
    }
    /**
     * Meant to be called from template file only.
     */
    onClick($event) {
        if (this.isReadOnly) {
            return;
        }
        if (this.onClickCallback !== void 0) {
            this.onClickCallback($event, this.id, $event.target.classList.contains('bk-checkbox-title'));
        }
    }
    /**
     * Meant to be called from template file only.
     */
    isPartialState() {
        return this.isTriStateMode && this.stateGetter() === CheckboxState.PARTIAL;
    }
};
CheckboxComponent = CheckboxComponent_1 = __decorate$3([
    Component({
        name: 'bkCheckbox',
        templateUrl: 'src/common/widgets/checkbox/checkbox.html'
    })
], CheckboxComponent);
var CheckboxComponent$1 = CheckboxComponent;

/**
 * Copyright: ThoughtSpot Inc. 2018
 * Author: Simranjyot Singh (simranjyot.gill@thoughtspot.com)
 *
 * @fileoverview list item component where items are checkboxes and can be rearranged.
 */
let logger$1 = logger_3('rearrangeable-list');
let RearrangeableListComponent = class RearrangeableListComponent extends BaseComponent$1 {
    constructor(selectedColumns, unselectedColumns, getLabel, singleSelection = false) {
        super();
        this.getLabel = getLabel;
        this.singleSelection = singleSelection;
        this.selectedColumns = [];
        this.unselectedColumns = [];
        if (singleSelection && selectedColumns.length !== 1) {
            logger$1.warn('Single selection mode should have just 1 selected item');
        }
        this.init(selectedColumns, unselectedColumns);
    }
    reorderColumnBinding(columnItem, directionUp) {
        let index = this.selectedColumns.indexOf(columnItem);
        let maxIndex = this.selectedColumns.length - 1;
        let minIndex = 0;
        if (directionUp && index !== minIndex) {
            this.selectedColumns[index] =
                this.selectedColumns[index - 1];
            this.selectedColumns[index - 1] = columnItem;
        }
        else if (!directionUp && index !== maxIndex) {
            this.selectedColumns[index] =
                this.selectedColumns[index + 1];
            this.selectedColumns[index + 1] = columnItem;
        }
    }
    init(selectedColumns, unselectedColumns) {
        let isSelected = true;
        let mapFunction = (columnItem) => {
            let result = {
                header: columnItem,
                isSelected: isSelected
            };
            let checkboxComponent = new CheckboxComponent$1({
                label: this.getLabel(columnItem),
                stateGetter: function () {
                    return result.isSelected;
                },
                onClick: () => {
                    result.isSelected = !result.isSelected;
                    this.reorderSelectedColumns(result);
                }
            });
            return _$1.assign(result, {
                checkboxCtrl: checkboxComponent
            });
        };
        if (selectedColumns) {
            this.selectedColumns = selectedColumns.map(mapFunction);
        }
        isSelected = false;
        if (unselectedColumns) {
            this.unselectedColumns = unselectedColumns.map(mapFunction);
        }
    }
    getSelectedColumns() {
        return this.selectedColumns.map((columnItem) => {
            return columnItem.header;
        });
    }
    getUnselectedColumns() {
        return this.unselectedColumns.map((columnItem) => {
            return columnItem.header;
        });
    }
    // function is called to reorder the columns when some column
    // is selected or unselected
    reorderSelectedColumns(columnItem) {
        if (this.singleSelection) {
            const prevSelectedColumn = this.selectedColumns[0];
            if (prevSelectedColumn === columnItem) {
                columnItem.isSelected = true;
            }
            else {
                prevSelectedColumn.isSelected = false;
                this.unselectedColumns.unshift(prevSelectedColumn);
                _$1.pull(this.unselectedColumns, columnItem);
                this.selectedColumns = [columnItem];
            }
            return;
        }
        // if column item was just selected then move it up
        if (columnItem.isSelected) {
            _$1.pull(this.unselectedColumns, columnItem);
            this.selectedColumns.push(columnItem);
        }
        else { // if column item was just unselected then move it down
            _$1.pull(this.selectedColumns, columnItem);
            this.unselectedColumns.unshift(columnItem);
        }
    }
};
RearrangeableListComponent = __decorate$3([
    Component({
        name: 'bkRearrangeableList',
        templateUrl: 'src/common/rearrangeable-list/rearrangeable-list.html'
    })
], RearrangeableListComponent);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview A3 utils.
 */
let util = ngRequire('util');
var A3AnalysisType;
(function (A3AnalysisType) {
    A3AnalysisType[A3AnalysisType["UNKNOWN"] = 1] = "UNKNOWN";
    A3AnalysisType[A3AnalysisType["VISUALIZATION"] = 2] = "VISUALIZATION";
    A3AnalysisType[A3AnalysisType["DATA"] = 3] = "DATA";
    A3AnalysisType[A3AnalysisType["TABLE"] = 4] = "TABLE";
    A3AnalysisType[A3AnalysisType["ANOMALY_EXPLANATION"] = 5] = "ANOMALY_EXPLANATION";
})(A3AnalysisType || (A3AnalysisType = {}));
function isCustomRAnalysis(a3Request /* sage.A3Request */) {
    let analysisParam = getAnalysisParams(a3Request);
    if (analysisParam === null) {
        return false;
    }
    let analysisDesc = analysisParam.getAnalysisDescriptor()[0];
    return analysisDesc && analysisDesc.getAnalysisClass()
        === sage.AnalysisDescriptor.AnalysisClass.CUSTOM_R_ANALYSIS;
}
function getExistingA3Request(vizModel) {
    let answerModel = vizModel.getContainingAnswerModel();
    if (!!answerModel.getA3Request && !!answerModel.getA3Request()) {
        return answerModel.getA3Request();
    }
    return null;
}
function getVisualizationQuery(a3Request /* sage.A3Request */) {
    let visualizationQuery;
    switch (a3Request.getType()) {
        case sage.A3AnalysisType.E.ANOMALY_EXPLANATION: {
            let anomalyExplanationAnalysis = a3Request.getAnomalyExplanationAnalysis();
            visualizationQuery = anomalyExplanationAnalysis.getVisualizationQuery();
            break;
        }
        case sage.A3AnalysisType.E.VISUALIZATION: {
            let visualizationAnalysis = a3Request.getVisualizationAnalysis();
            visualizationQuery = visualizationAnalysis.getVisualizationQuery();
            break;
        }
        case sage.A3AnalysisType.E.DATA: {
            let dataAnalysis = a3Request.getDataAnalysis();
            visualizationQuery = dataAnalysis.getVisualizationQuery();
            break;
        }
        case sage.A3AnalysisType.E.TABLE: {
            visualizationQuery = null;
        }
    }
    return visualizationQuery;
}
function getAnalysisParams(a3Request /* sage.A3Request */) {
    let analysisParams;
    switch (a3Request.getType()) {
        case sage.A3AnalysisType.E.VISUALIZATION: {
            let visualizationAnalysis = a3Request.getVisualizationAnalysis();
            analysisParams = visualizationAnalysis.getParam();
            break;
        }
        case sage.A3AnalysisType.E.ANOMALY_EXPLANATION: {
            let anomalyExplanationAnalysis = a3Request.getAnomalyExplanationAnalysis();
            analysisParams = anomalyExplanationAnalysis.getParam();
            break;
        }
        case sage.A3AnalysisType.E.DATA: {
            let dataAnalysis = a3Request.getDataAnalysis();
            analysisParams = dataAnalysis.getParam();
            break;
        }
        case sage.A3AnalysisType.E.TABLE: {
            let tableAnalysis = a3Request.getTableAnalysis();
            analysisParams = tableAnalysis.getParam();
        }
    }
    return analysisParams;
}
function getACContext(a3Request /* sage.A3Request */) {
    let visualizationQuery = getVisualizationQuery(a3Request);
    if (!!visualizationQuery) {
        return visualizationQuery.getContext();
    }
    return null;
}
function getColumnsFromA3Request(a3Request /* sage.A3Request */) {
    if (!a3Request) {
        return [];
    }
    let visualizationQuery = getVisualizationQuery(a3Request);
    if (!visualizationQuery) {
        return [];
    }
    return getColumnsFromVizQuery(visualizationQuery);
}
function getColumnsFromVizQuery(visualizationQuery /* callosum.VisualizationQueryProto */) {
    if (!visualizationQuery) {
        return [];
    }
    let sageContext = visualizationQuery.getContext();
    let sageContextIndex = visualizationQuery.getTableIndex();
    let columns = getColumnsFromACContext(sageContext, sageContextIndex);
    if (!verifyColumnsHaveProperHeaders(columns)) {
        columns = getColumnsFromSageProgram(visualizationQuery.getSageProgram());
    }
    return columns;
}
function getColumnsFromSageProgram(sageProgram /* sage.auto_complete.v2.SageProgram */) {
    let displaySageQuery = sageProgram.getDisplaySageQuery();
    return displaySageQuery.getColumns();
}
function verifyColumnsHaveProperHeaders(columns /* sage.Column[] */) {
    if (columns.length === 0) {
        return true;
    }
    let header = columns[0].getHeader();
    return !!(header.getGuid() && header.getName());
}
function generateHeaderFromVizColumn(vizColumn /* callosum.VisualizationColumnProto */) {
    let header = new sage.EntityHeader();
    header.guid = vizColumn.getGuid();
    header.name = vizColumn.getBaseColumnName();
    return header;
}
function generateSortableItemFromHeader(header /* sage.EntityHeader */) {
    return {
        id: header.getGuid(),
        caption: `<span class="bk-drag-handle">☰</span>${header.getName()}`
    };
}
function buildColumnBindingFromJson(customBinding) {
    let outputGuid = customBinding[jsonConstants_1.systemR.SAGE_OUTPUT_COLUMN_ID];
    let variableName = customBinding[jsonConstants_1.systemR.VARIABLE_NAME];
    let columnName = customBinding[jsonConstants_1.systemR.COLUMN_NAME];
    return getRanalysisColumnBinding(outputGuid, variableName, columnName);
}
function getPartitionedHeadersFromCustomBinding(customBindings /* sage.AnalysisDescriptor.CustomRAnalysis.CustomBinding */, allHeaders /* sage.EntityHeader[] */, selectedHeaders /* sage.EntityHeader[] */, unselectedHeaders /* sage.EntityHeader[] */) {
    let headerMap = {};
    allHeaders.forEach(header => {
        headerMap[header.getGuid()] = header;
    });
    customBindings.forEach(columnBinding => {
        selectedHeaders.push(headerMap[columnBinding.getSageOutputColumnId()]);
    });
    let unselected = _$1.differenceWith(allHeaders, selectedHeaders, _$1.isEqual);
    unselected.forEach(header => {
        unselectedHeaders.push(header);
    });
}
function getColumnsFromACContext(acContext /* sage.v2.ACContext */, tableIndex) {
    let tables = acContext.getTables();
    let table = tables[tableIndex];
    let displaySageQuery = table.getQuery().getDisplaySageQuery();
    return displaySageQuery.getColumns();
}
function getHeaderFromColumn(column /* sage.SageQuery.Column */) {
    let header = column.getHeader();
    if (!header.getName()) {
        let newHeader = new sage.EntityHeader();
        newHeader.guid = header.getGuid();
        newHeader.name = column.getColumn().getColumn().getId().getName();
        header = newHeader;
    }
    return header;
}
function getRanalysisColumnBinding(columnGuid, variableName, columnName) {
    let columnBinding = new sage.AnalysisDescriptor.CustomRAnalysis.ColumnBinding();
    columnBinding.sageOutputColumnId = columnGuid;
    columnBinding.variableName = variableName;
    columnBinding.columnName = columnName;
    return columnBinding;
}
function getCustomRAnalysis(rScript, columnBindings /* sage.AnalysisDescriptor.CustomRAnalysis.CustomBinding[] */, unselectedColumns) {
    let customRAnalysis = new sage.AnalysisDescriptor.CustomRAnalysis();
    Array.prototype.push.apply(customRAnalysis.columnBinding, columnBindings);
    customRAnalysis.rScript = rScript;
    Array.prototype.push.apply(customRAnalysis.unselectedSageOutputColumnId, unselectedColumns);
    return customRAnalysis;
}
function getKMeansColumnBindings(selectedHeaders /* sage.EntityHeader[] */, allHeaders /* sage.EntityHeader[] */) {
    // Columns selected by the user will always be the first two column bindings
    let columnBindings = selectedHeaders.map((columnHeader, index) => {
        let columnBinding = getRanalysisColumnBinding(columnHeader.getGuid(), `.param${index}`, columnHeader.getName());
        return columnBinding;
    });
    // Add the rest of the columns in the query afterwards
    let remainingColumns = _$1.differenceBy(allHeaders, selectedHeaders, 'guid');
    remainingColumns.map((columnHeader, index) => {
        // Because we restrict the user to selecting two columns in K-Means, we offset index
        // by 2 for the remaining columns
        let newIndex = index + 2;
        columnBindings.push(getRanalysisColumnBinding(columnHeader.getGuid(), `.param${newIndex}`, columnHeader.getName()));
    });
    return columnBindings;
}
function getAnomalyExplanationColumnBindings(selectedHeaders, allHeaders /* sage.EntityHeader[] */) {
    let columnBindings = selectedHeaders.map((columnHeader, index) => {
        let columnBinding = getRanalysisColumnBinding(columnHeader.getGuid(), `.param${index}`, columnHeader.getName());
        return columnBinding;
    });
    return columnBindings;
}
function getHeadersFromA3Request(a3AnalysisRequest /* : sage.a3.a3AnalysisRequest */, onlyNumericColumns) {
    let columns = getColumnsFromA3Request(a3AnalysisRequest);
    let headers = columns.reduce((validHeaders, column) => {
        if (!onlyNumericColumns || isColumnNumeric(column)) {
            validHeaders.push(getHeaderFromColumn(column));
        }
        return validHeaders;
    }, []);
    return headers;
}
function isColumnNumeric(column /* sage.SageQuery.Column */) {
    let numericTypes = new Set([
        falcon.DataType.E.DATE,
        falcon.DataType.E.INT32,
        falcon.DataType.E.INT64,
        falcon.DataType.E.FLOAT,
        falcon.DataType.E.DOUBLE,
        falcon.DataType.E.DATE_TIME,
        falcon.DataType.E.TIME
    ]);
    return numericTypes.has(column.getColumn().getDataType());
}
function getCustomRAnalysisDescriptor(customRAnalysis /* sage.AnalysisDescriptor.CustomRAnalysis */) {
    let analysisDescriptor = new sage.AnalysisDescriptor();
    analysisDescriptor.analysisClass =
        sage.AnalysisDescriptor.AnalysisClass.CUSTOM_R_ANALYSIS;
    analysisDescriptor.customRAnalysis = customRAnalysis;
    return analysisDescriptor;
}
function getSelectedTokens(a3Request /* : sage.A3Request */) {
    let selectedTokens = [];
    switch (a3Request.getType()) {
        case sage.A3AnalysisType.E.ANOMALY_EXPLANATION:
            {
                let anomalyExplanationAnalysis = a3Request.getAnomalyExplanationAnalysis();
                selectedTokens = anomalyExplanationAnalysis.getSelectedToken();
                break;
            }
        case sage.A3AnalysisType.E.VISUALIZATION:
            {
                let visualizationAnalysis = a3Request.getVisualizationAnalysis();
                selectedTokens = visualizationAnalysis.getSelectedToken();
                break;
            }
        case sage.A3AnalysisType.E.DATA:
            {
                let dataAnalysis = a3Request.getDataAnalysis();
                selectedTokens = dataAnalysis.getSelectedToken();
                break;
            }
        case sage.A3AnalysisType.E.TABLE:
            {
                let tableAnalysis = a3Request.getTableAnalysis();
                selectedTokens = tableAnalysis.getSelectedColumn();
                break;
            }
    }
    return selectedTokens;
}
function getExcludedTokens(a3Request /* sage.A3Request */) {
    let excludedTokens = [];
    switch (a3Request.getType()) {
        case sage.A3AnalysisType.E.ANOMALY_EXPLANATION:
            {
                let anomalyExplanationAnalysis = a3Request.getAnomalyExplanationAnalysis();
                excludedTokens = anomalyExplanationAnalysis.getExcludedToken();
                break;
            }
        case sage.A3AnalysisType.E.VISUALIZATION:
            {
                let visualizationAnalysis = a3Request.getVisualizationAnalysis();
                excludedTokens = visualizationAnalysis.getExcludedToken();
                break;
            }
        case sage.A3AnalysisType.E.DATA:
            {
                let dataAnalysis = a3Request.getDataAnalysis();
                excludedTokens = dataAnalysis.getExcludedToken();
                break;
            }
        case sage.A3AnalysisType.E.TABLE:
            {
                let tableAnalysis = a3Request.getTableAnalysis();
                excludedTokens = tableAnalysis.getExcludedColumn();
                break;
            }
    }
    return excludedTokens;
}
function isSingleRowDataAnalysis(a3Request /* sage.A3Request */) {
    if (a3Request.getType() === sage.A3AnalysisType.E.DATA) {
        let dataAnalysis = a3Request.getDataAnalysis();
        let dataRows = dataAnalysis.getDataRow();
        if (dataRows.length === 1) {
            return true;
        }
    }
    return false;
}
function getAnalysisType(a3Request /* sage.A3Request */) {
    if (a3Request.getType() === sage.A3AnalysisType.E.ANOMALY_EXPLANATION) {
        return A3AnalysisType.ANOMALY_EXPLANATION;
    }
    else if (a3Request.getType() === sage.A3AnalysisType.E.VISUALIZATION ||
        isSingleRowDataAnalysis(a3Request)) {
        return A3AnalysisType.VISUALIZATION;
    }
    else if (a3Request.getType() === sage.A3AnalysisType.E.DATA) {
        return A3AnalysisType.DATA;
    }
    else if (a3Request.getType() === sage.A3AnalysisType.E.TABLE) {
        return A3AnalysisType.TABLE;
    }
    return A3AnalysisType.UNKNOWN;
}
function getAnalysisTypeString(a3Request /* sage.A3Request */) {
    let typeEnum = getAnalysisType(a3Request);
    if (typeEnum === A3AnalysisType.ANOMALY_EXPLANATION) {
        return 'anomaly-explain';
    }
    else if (typeEnum === A3AnalysisType.VISUALIZATION) {
        return 'viz';
    }
    else if (typeEnum === A3AnalysisType.DATA) {
        return 'data';
    }
    else if (typeEnum === A3AnalysisType.TABLE) {
        return 'table';
    }
    return 'unknown';
}
function isDiffAnalysis(a3Request /* sage.A3Request */) {
    return A3AnalysisType.DATA === getAnalysisType(a3Request);
}
function isVizAnalysis(a3Request /* sage.A3Request */) {
    return A3AnalysisType.VISUALIZATION === getAnalysisType(a3Request);
}
function isTableAnalysis(a3Request /* sage.A3Request */) {
    return A3AnalysisType.TABLE === getAnalysisType(a3Request);
}
function isAnomalyExplanationAnalysis(a3Request) {
    return A3AnalysisType.ANOMALY_EXPLANATION === getAnalysisType(a3Request);
}
function getA3RequestTitle(a3Request /* sage.A3Request */) {
    let title = '';
    switch (a3Request.getType()) {
        case sage.A3AnalysisType.E.ANOMALY_EXPLANATION: {
            let anomalyExplanationAnalysis = a3Request.getAnomalyExplanationAnalysis();
            let visualizationQuery = anomalyExplanationAnalysis.getVisualizationQuery();
            let visualization = visualizationQuery.getVisualization();
            let vizTitle = visualization.getTitle();
            if (!vizTitle || vizTitle.length === 0) {
                vizTitle = strings.a3.visualizationAnalysisType;
            }
            title = stringUtil_1(strings.a3.visualizationAnalysisTitle, vizTitle);
            break;
        }
        case sage.A3AnalysisType.E.VISUALIZATION: {
            let visualizationAnalysis = a3Request.getVisualizationAnalysis();
            let visualizationQuery = visualizationAnalysis.getVisualizationQuery();
            let visualization = visualizationQuery.getVisualization();
            let vizTitle = visualization.getTitle();
            if (!vizTitle || vizTitle.length === 0) {
                vizTitle = strings.a3.visualizationAnalysisType;
            }
            title = stringUtil_1(strings.a3.visualizationAnalysisTitle, vizTitle);
            break;
        }
        case sage.A3AnalysisType.E.DATA: {
            let dataAnalysis = a3Request.getDataAnalysis();
            let visualizationQuery = dataAnalysis.getVisualizationQuery();
            let visualization = visualizationQuery.getVisualization();
            let dataRows = dataAnalysis.getDataRow();
            let dataRowStrings = dataRows.map((dataRow) => {
                let dataValues = dataRow.getDataValue();
                return dataValues
                    .map((dataValue) => {
                    return util.queryConstantValue(dataValue);
                })
                    .join(', ');
            });
            let dataString = dataRowStrings.join(` ${strings.and} `);
            let vizTitle = visualization.getTitle();
            if (!vizTitle || vizTitle.length === 0) {
                vizTitle = strings.a3.dataAnalysisType;
            }
            title = stringUtil_1(strings.a3.dataAnalysisTitle, vizTitle, dataString);
            break;
        }
        case sage.A3AnalysisType.E.TABLE: {
            let tableAnalysis = a3Request.getTableAnalysis();
            let tableName = tableAnalysis.getTableName();
            let tableType = tableAnalysis.getIsWorksheet() ?
                strings.metadataExplorer.types.WORKSHEET : strings.Table;
            if (!tableName) {
                tableName = strings.a3.tableAnalysisType;
            }
            title = stringUtil_1(strings.a3.tableAnalysisTitle, tableType, tableName);
            break;
        }
    }
    return title;
}
function getTokenName(token) {
    let tokenText = token.tokenText, immediateLineage = token.lineage;
    return `${tokenText} - ${immediateLineage}`;
}
function getHumanTime(durationInMs) {
    let duration = dateUtil_4(durationInMs);
    let humanReadable;
    if (duration.days > 0) {
        humanReadable = duration.as('days').toFixed(2);
        return stringUtil_1(strings.DAYS_COUNT, humanReadable);
    }
    else if (duration.hours > 0) {
        humanReadable = duration.as('hours').toFixed(2);
        return stringUtil_1(strings.HOURS_COUNT, { 'numHours': humanReadable });
    }
    else if (duration.minutes > 0) {
        humanReadable = duration.as('minutes').toFixed(2);
        return stringUtil_1(strings.MINUTES_COUNT, { 'numMinutes': humanReadable });
    }
    else {
        humanReadable = duration.as('seconds').toFixed(2);
        return stringUtil_1(strings.SECONDS_COUNT, { 'numSeconds': humanReadable });
    }
}
Provide('a3Utils')({
    isCustomRAnalysis,
    getExistingA3Request,
    getVisualizationQuery,
    getAnalysisParams,
    getACContext,
    getColumnsFromA3Request,
    getColumnsFromVizQuery,
    getColumnsFromSageProgram,
    generateHeaderFromVizColumn,
    generateSortableItemFromHeader,
    buildColumnBindingFromJson,
    getPartitionedHeadersFromCustomBinding,
    getColumnsFromACContext,
    getHeaderFromColumn,
    getRanalysisColumnBinding,
    getCustomRAnalysis,
    getKMeansColumnBindings,
    getAnomalyExplanationColumnBindings,
    getHeadersFromA3Request,
    getCustomRAnalysisDescriptor,
    getSelectedTokens,
    getExcludedTokens,
    isSingleRowDataAnalysis,
    getAnalysisType,
    getAnalysisTypeString,
    isDiffAnalysis,
    isVizAnalysis,
    isTableAnalysis,
    isAnomalyExplanationAnalysis,
    getA3RequestTitle,
    getTokenName,
    getHumanTime
});

/**
 * Copyright: ThoughtSpot Inc. 2018
 * Author: Antony Chen (antony.chen@thoughtspot.com)
 *
 * @fileoverview Component to select column bindings.
 */
let dialog$1 = ngRequire('dialog');
let CustomRBindingsComponent = class CustomRBindingsComponent extends BaseComponent$1 {
    constructor(selectedColumns = null /* sage.EntityHeader[] */, unselectedColumns = null /* sage.EntityHeader[] */, title = null, enableShowBindings = false, singleSelection = false) {
        super();
        this.title = title;
        this.enableShowBindings = enableShowBindings;
        this.customRBindingsList = new RearrangeableListComponent(selectedColumns, unselectedColumns, (columnItem) => columnItem.getName(), singleSelection);
    }
    getSelectedColumns() {
        return this.customRBindingsList.getSelectedColumns();
    }
    getUnselectedColumns() {
        return this.customRBindingsList.getUnselectedColumns()
            .map((columnItem) => {
            return columnItem.getGuid();
        });
    }
    getColumnBindings() {
        return this.getCustomColumnBindings()
            .map((customBinding) => {
            return getRanalysisColumnBinding(customBinding.guid, customBinding.param, customBinding.columnName);
        });
    }
    reset(unselectedColumns /* sage.EntityHeader[] */, selectedColumns /* sage.EntityHeader[] */) {
        this.customRBindingsList.init(selectedColumns, unselectedColumns);
    }
    showBindings() {
        dialog$1.show({
            dialogSize: dialog$1.size.SMALL,
            title: strings.customR.showBindings,
            customBodyUrl: 'src/modules/a3/custom-r-edit-bindings-dialog.html',
            skipCancelBtn: true,
            onConfirm: () => {
                // do nothing and close the dialog
                return true;
            },
            confirmBtnLabel: strings.OK,
            customData: {
                bindings: this.getCustomColumnBindings()
            }
        });
    }
    getCustomColumnBindings() {
        return this.customRBindingsList
            .getSelectedColumns()
            .map((columnItem, index) => {
            let guid = columnItem.getGuid();
            let param = `.param${index}`;
            let columnName = columnItem.getName();
            return {
                guid: guid,
                param: param,
                columnName: columnName
            };
        });
    }
};
CustomRBindingsComponent = __decorate$3([
    Component({
        name: 'bkCustomRBindings',
        templateUrl: 'src/modules/custom-r/bindings/custom-r-bindings.html'
    })
], CustomRBindingsComponent);

var InfoCardIconComponent_1;
let InfoCardIconComponent = InfoCardIconComponent_1 = class InfoCardIconComponent extends BaseComponent$1 {
    constructor(baseInfoCardComponent, customPopoverCSSClass = '') {
        super();
        this.customPopoverCSSClass = customPopoverCSSClass;
        this.isCardActive = false;
        this.hasTipBeenAccepted = getTip(jsonConstants_1.INFO_CARD_TIP);
        this.baseInfoCardComponent = baseInfoCardComponent;
        this.tooltipText = baseInfoCardComponent.getToolTipText();
        this.popoverTemplateUrl = InfoCardIconComponent_1.POPOVER_TEMPLATE_URL;
        this.baseInfoCardComponent = baseInfoCardComponent;
        this.modelDisabled = baseInfoCardComponent.isModelDisabled();
    }
    isInfoCardOpen() {
        return this.baseInfoCardComponent.isInfoCardOpen;
    }
    updateModel() {
        this.modelDisabled = this.baseInfoCardComponent.isModelDisabled();
    }
    toggleCardActive() {
        this.isCardActive = !this.isCardActive;
        this.onClick();
    }
    onClick() {
        if (this.modelDisabled) {
            return;
        }
        this.hasTipBeenAccepted = true;
        setTip(jsonConstants_1.INFO_CARD_TIP, true);
    }
};
InfoCardIconComponent.POPOVER_TEMPLATE_URL = 'base-info-card.html';
InfoCardIconComponent = InfoCardIconComponent_1 = __decorate$3([
    Component({
        name: 'bkInfoCardIcon',
        templateUrl: 'src/modules/natural-query/info-card-icon/info-card-icon.html'
    })
], InfoCardIconComponent);

/**
 * Copyright: ThoughtSpot Inc. 2012-2017
 * Author: Pradeep Dorairaj (pradeep.dorairaj@thoughtspot.com)
 *
 * @fileoverview Base component to switch between info component items.
 */
let BaseInfoCardComponent = class BaseInfoCardComponent extends BaseComponent$1 {
    constructor(type) {
        super();
        this.isInfoCardOpen = false;
        this.type = type;
    }
    isModelDisabled() {
        return true;
    }
    getToolTipText() {
        return '';
    }
};
BaseInfoCardComponent.TYPES = {
    ANSWER: 'answer',
    A3ANALYSIS: 'a3analysis',
    RANALYSIS: 'ranalysis',
    A3INSIGHT: 'a3insight'
};
BaseInfoCardComponent = __decorate$3([
    Component({
        name: 'bkBaseInfoCard',
        templateUrl: 'src/modules/natural-query/base-info-card/base-info-card.html'
    })
], BaseInfoCardComponent);

let RanalysisInfoCardComponent = class RanalysisInfoCardComponent extends BaseInfoCardComponent {
    constructor() {
        super(BaseInfoCardComponent.TYPES.RANALYSIS);
    }
    shouldShowTitle() {
        return true;
    }
    isModelDisabled() {
        return false;
    }
    getToolTipText() {
        return this.strings.a3.R_Analysis_Infocard.Title_Text;
    }
};
RanalysisInfoCardComponent = __decorate$3([
    Component({
        name: 'bkRanalysisInfoCard',
        templateUrl: 'src/modules/natural-query/ranalysis-info-card/ranalysis-info-card.html'
    })
], RanalysisInfoCardComponent);

let InfoBoxComponent = class InfoBoxComponent extends BaseComponent$1 {
    constructor(title, info, isOpened = true, onClose) {
        super();
        this.title = title;
        this.info = info;
        this.isOpened = isOpened;
        this.onClose = onClose;
    }
    show() {
        this.isOpened = true;
    }
    hide() {
        this.isOpened = false;
        if (this.onClose) {
            this.onClose();
        }
    }
};
InfoBoxComponent = __decorate$3([
    Component({
        name: 'bkInfoBox',
        templateUrl: 'src/common/widgets/info-box/info-box.html',
        transclude: true
    })
], InfoBoxComponent);

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Francois Chabbey (rahul@thoughtspot.com)
 *
 * @fileoverview Service that notify client for scroll events.
 *
 * We are listening to all scroll events ( not only on window )
 * by using capturing
 *
 *
 */
let jsUtil$1 = ngRequire('jsUtil');
let SCROLL_DEBOUNCE_TIME = 50;
// Map of current listeners
let listeners;
function init$1() {
    window.addEventListener('scroll', function (event) {
        throttledFireListeners(event);
    }, true);
    listeners = {};
}
function subscribeToScrollEvent(fn) {
    let id = jsUtil$1.generateUUID();
    listeners[id] = fn;
    return () => {
        deregister(id);
    };
}
function fireListeners(event) {
    _$1.values(listeners).forEach(listener => listener(event));
}
let throttledFireListeners = _$1.throttle(fireListeners, SCROLL_DEBOUNCE_TIME);
function deregister(id) {
    delete listeners[id];
}
init$1();

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Francois Chabbey(francois.chabbey@thoughtspot.com)
 *
 * A JQuery/Angular agnostic mixin
 *
 * It extracts the element and wrap it in a popover
 * This mixin will augment your component with the methods needed to
 * configure the behaviour and show/hide the popover
 *
 * The popover will close if your resize the window or click outside
 *
 * This mixin tries to avoid angular-specific constructs, and rely on DOM
 * manipulations. The advantage is that we have less watches, more CSS freedom
 * and a more programmatic approach. It can help when you want to have one
 * shared between popover between a list ( see blink-legend), which can yields
 * some significant gain in rendering (up to 600 ms), and reduce the number of
 * watch from N to 1
 *
 * It's always faster than boostrap-popover (between 30-150 ms)
 *
 * Future Improvements
 * - CSS Arrow for diagonal positions
 * - Better repositioning logic
 * - Let user plug width/height calculations instead of resorting to DOM method
 *  ( e.g : context-menu, we can anticipate the size of the element, so we can let client code
 *    pass its own logic to determine width/height )
 *
 *
 * Usage:
 *
 * const PositionedCtrl = AbsolutePositionable(<Your Component>);
 * type PositionedCtrl = AbsolutePositionable & <Your Component>;
 *
 * let positionedCtrl: PositionedCtrl = new PositionedCtrl();
 *
 * // set the anchor. Anchor is used to positioned the popover once it's shown
 * positionedCtrl.setAnchor(<HTMLElement>)
 * // set how the popover will be displayed
 * positionedCtrl.setDefaultPositioning(orientation: Orientation, alignement: Align)
 * // you can set a callback that will be called once the popover is closed
 * positionedCtrl.setOnCloseCallback(closeCallback)
 * ...
 * // show
 * positionedCtrl.show();
 * // hide
 * positionedCtrl.hide();
 *
 */
let util$1 = ngRequire('util');
const ARROW_HEIGHT = 12;
const BASE_CLASS = 'bk-positionable';
const ARROW_CLASS = 'arrow';
const INNER_CLASS = `${BASE_CLASS}-inner`;
const CONTENT_CLASS = `${BASE_CLASS}-content`;
const VISIBLE_CLASS = 'in';
let IDX = 0;
const EVENT_ID = 'positionablePopover';
class Position {
    constructor(left, top) {
        this.left = left;
        this.top = top;
    }
    toCSS() {
        return {
            top: this.top + 'px',
            left: this.left + 'px'
        };
    }
}
var Orientation;
(function (Orientation) {
    Orientation["Top"] = "top";
    Orientation["Bottom"] = "bottom";
    Orientation["Left"] = "left";
    Orientation["Right"] = "right";
})(Orientation || (Orientation = {}));
var Align;
(function (Align) {
    Align["LeftUpSide"] = "left";
    Align["RightDownSide"] = "right";
    Align["Center"] = "center";
})(Align || (Align = {}));
function AbsolutePositionable(Base) {
    return class extends Base {
        constructor(...params) {
            super(...params);
            this.__positionMatrix = {};
            this.__showing = false;
            this.__onCloseCallback = _$1.noop;
            this.__handlerDefined = false;
            this.__defaultAlignment = Align.Center;
            this.__defaultOrientation = Orientation.Left;
            this.__showArrow = true;
            // position matrix
            this.__positionMatrix[Align.Center] = {};
            this.__positionMatrix[Align.LeftUpSide] = {};
            this.__positionMatrix[Align.RightDownSide] = {};
            this.__positionMatrix[Align.Center][Orientation.Top] = (rect) => {
                return new Position(this.centerHorizontally(rect), this.orientTop(rect));
            };
            this.__positionMatrix[Align.Center][Orientation.Bottom] = (rect) => {
                return new Position(this.centerHorizontally(rect), this.orientBottom(rect));
            };
            this.__positionMatrix[Align.Center][Orientation.Left] = (rect) => {
                return new Position(this.orientLeft(rect), this.centerVertically(rect));
            };
            this.__positionMatrix[Align.Center][Orientation.Right] = (rect) => {
                return new Position(this.orientRight(rect), this.centerVertically(rect));
            };
            // those orientation have no arrow for CSS
            this.__positionMatrix[Align.LeftUpSide][Orientation.Right] = (rect) => {
                return new Position(this.orientRight(rect), this.orientTop(rect));
            };
            this.__positionMatrix[Align.LeftUpSide][Orientation.Left] = (rect) => {
                return new Position(this.orientLeft(rect), this.orientTop(rect));
            };
            this.__positionMatrix[Align.RightDownSide][Orientation.Right] = (rect) => {
                return new Position(this.orientRight(rect), this.orientBottom(rect));
            };
            this.__positionMatrix[Align.RightDownSide][Orientation.Left] = (rect) => {
                return new Position(this.orientLeft(rect), this.orientBottom(rect));
            };
            this.id = IDX;
            IDX++;
            // TODO(chab) set redundant settings
        }
        shouldShowArrow(showArrow) {
            this.__showArrow = showArrow;
        }
        setClassName(className) {
            this.__className = className;
            this.setClassNameToElement();
        }
        setDefaultPositioning(orientation, alignement) {
            this.__defaultOrientation = orientation;
            if (!!alignement) {
                this.__defaultAlignment = alignement;
            }
        }
        setOnCloseCallback(callback) {
            this.__onCloseCallback = callback;
        }
        postLink(element) {
            if (!element) {
                throw (new Error('No content passed'));
            }
            this.__baseComponentElement = element.get(0);
            this.wrapContentIntoPopover(element.children().get(0));
        }
        hasBeenAlreadyLinked(element) {
            this.__baseComponentElement = element.get(0);
            this.wrapContentIntoPopover(element.children().get(0));
        }
        onDestroy(el) {
            this.__baseComponentElement.appendChild(this.__componentContent);
            super.onDestroy(el);
            if (this.__scrollDeregister) {
                this.__scrollDeregister();
            }
            this.__element.remove();
            this.__handlerDefined = false;
        }
        show(anchor) {
            if (!this.__element) {
                throw (new Error('No element defined'));
            }
            else if (!this.__anchor && !anchor) {
                throw (new Error('No anchor defined'));
            }
            if (this.__anchor !== anchor) {
                this.setAnchor(anchor);
                if (this.__showing) {
                    // should we call the onCloseCallback (?)
                    this.positionPopover(this.__defaultOrientation, this.__defaultAlignment);
                    return;
                }
            }
            else if (this.__showing) {
                return;
            }
            this.__element.classList.add(VISIBLE_CLASS);
            this.positionPopover(this.__defaultOrientation, this.__defaultAlignment);
            this.__showing = true;
            if (!this.__handlerDefined) {
                this.setupEventListeners();
            }
            this.__componentContent.focus();
        }
        hide() {
            if (!this.__showing) {
                return;
            }
            this.__showing = false;
            this.__element.classList.remove(VISIBLE_CLASS);
            this.removeEventListeners();
        }
        reposition() {
            this.positionPopover(this.__defaultOrientation, this.__defaultAlignment);
        }
        setClassNameToElement() {
            if (this.__className &&
                this.__element &&
                !this.__element.classList.contains(this.__className)) {
                this.__element.classList.add(this.__className);
            }
        }
        /**
         *
         * Setup event listener that will stay when the popover is hidden
         *
         */
        setupEventListeners() {
            // NOTE(chab) one issue is that we will call .hide and then .show if we click on another
            // anchor. This can be avoided by stopping the event, but i choose to keep things simple
            // as this does not imply a high performance penality
            let mouseEventName = `mousedown.${EVENT_ID}${this.id}`;
            let resizeEventName = `resize.${EVENT_ID}${this.id}`;
            this.addWindowListener(mouseEventName, (event) => {
                if (this.__showing && util$1.isClickOutside($(this.__element), event)) {
                    this.__onCloseCallback();
                    this.hide();
                }
            });
            this.addWindowListener(resizeEventName, () => {
                this.hide();
            });
            this.__scrollDeregister = subscribeToScrollEvent(() => {
                if (!this.__showing) {
                    return;
                }
                this.positionPopover(this.__defaultOrientation, this.__defaultAlignment);
            });
            this.__handlerDefined = true;
        }
        /**
         *
         * Remove event listener after the popover is hidden?
         *
         */
        removeEventListeners() {
            let mouseEventName = `mousedown.${EVENT_ID}${this.id}`;
            let resizeEventName = `resize.${EVENT_ID}${this.id}`;
            this.removeWindowListener(mouseEventName);
            this.removeWindowListener(resizeEventName);
            if (this.__scrollDeregister) {
                this.__scrollDeregister();
            }
            this.__handlerDefined = false;
        }
        setAnchor(anchor) {
            this.__anchor = anchor;
        }
        wrapContentIntoPopover(baseElement) {
            this.__componentContent = baseElement;
            const wrapperDiv = document.createElement(SVG.div);
            wrapperDiv.setAttribute(SVG.klass, `${BASE_CLASS}`); // VISIBLE_CLASS goes here
            const innerWrapper = document.createElement(SVG.div);
            innerWrapper.setAttribute(SVG.klass, INNER_CLASS);
            const contentWrapper = document.createElement(SVG.div);
            contentWrapper.setAttribute(SVG.klass, CONTENT_CLASS);
            contentWrapper.appendChild(baseElement);
            innerWrapper.appendChild(contentWrapper);
            if (this.__showArrow) {
                const arrowDiv = document.createElement(SVG.div);
                arrowDiv.setAttribute(SVG.klass, ARROW_CLASS);
                wrapperDiv.appendChild(arrowDiv);
            }
            wrapperDiv.appendChild(innerWrapper);
            this.__element = wrapperDiv;
            this.setClassNameToElement();
            window.document.body.appendChild(this.__element);
        }
        orientBottom(rect) {
            return rect.bottom + ARROW_HEIGHT;
        }
        orientTop(rect) {
            return rect.top - this.__element.offsetHeight - ARROW_HEIGHT;
        }
        orientLeft(rect) {
            return rect.left - ARROW_HEIGHT - this.__element.offsetWidth;
        }
        orientRight(rect) {
            return rect.left + rect.width + ARROW_HEIGHT;
        }
        centerHorizontally(rect) {
            return rect.left + rect.width / 2 - (this.__element.offsetWidth / 2);
        }
        centerVertically(rect) {
            return rect.top + rect.height / 2 - (this.__element.offsetHeight / 2);
        }
        positionPopover(orientation, alignement) {
            let rect = this.__anchor.getBoundingClientRect();
            let position = this.__positionMatrix[alignement][orientation](rect);
            let y = position.top;
            let x = position.left;
            // handle overflowing
            let containerBoundary = document.documentElement.getBoundingClientRect();
            if (y < containerBoundary.top) {
                position = this.__positionMatrix[Align.Center][Orientation.Bottom](rect);
                orientation = Orientation.Bottom;
            }
            else if (y + this.__element.offsetHeight > containerBoundary.bottom) {
                position = this.__positionMatrix[Align.Center][Orientation.Top](rect);
                orientation = Orientation.Top;
            }
            else if (x < containerBoundary.left) {
                position = this.__positionMatrix[Align.Center][Orientation.Right](rect);
                orientation = Orientation.Right;
            }
            else if (x + this.__element.offsetWidth > containerBoundary.right) {
                position = this.__positionMatrix[Align.Center][Orientation.Left](rect);
                orientation = Orientation.Left;
            }
            // assign arrow if needed
            if (this.__showArrow) {
                this.assignArrowClasses(alignement, orientation);
            }
            // update current orientation and alignment once everything is done, and update the view
            this.__currentAlignment = alignement;
            this.__currentOrientation = orientation;
            this.__position = position;
            this.positionComponent();
        }
        assignArrowClasses(newAlignment, newOrientation) {
            if (this.__currentAlignment === Align.Center) {
                if (!!this.__currentOrientation) {
                    this.__element.classList.remove(this.__currentOrientation);
                }
            }
            if (newAlignment === Align.Center) {
                this.__element.classList.add(newOrientation);
            }
        }
        positionComponent() {
            _$1.forIn(this.__position.toCSS(), (styleValue, styleKey) => {
                this.__element.style[styleKey] =
                    styleValue;
            });
        }
    };
}

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Utsav Kapoor(utsav.kapoor@thoughtspot.com)
 *
 * @fileoverview Dialog Tooltip with an info button
 */
let InfoButtonTooltipDialog = class InfoButtonTooltipDialog extends UIComponent$1 {
    constructor() {
        super(...arguments);
        this.content = '';
    }
};
InfoButtonTooltipDialog = __decorate$3([
    Component({
        name: 'bkInfoButtonTooltipDialog',
        templateUrl: 'src/common/widgets/info-button-tooltip/info-button-tooltip-dialog.html'
    })
], InfoButtonTooltipDialog);
const Ctrl = AbsolutePositionable(InfoButtonTooltipDialog);
let InfoButtonTooltip = class InfoButtonTooltip extends BaseComponent$1 {
    constructor(tooltipText) {
        super();
        this.tooltipText = tooltipText;
        this.isCardActive = false;
        this.className = 'bk-info-button-tooltip-component';
        this.dialogCtrl = new Ctrl();
        this.dialogCtrl.content = tooltipText;
        this.dialogCtrl.setDefaultPositioning(Orientation.Top, Align.Center);
        this.dialogCtrl.setClassName(this.className);
        this.dialogCtrl.setOnCloseCallback(() => this.isCardActive = false);
    }
    toggleCardActive() {
        this.isCardActive = !this.isCardActive;
        if (this.isCardActive) {
            this.dialogCtrl.show($(event.target)[0]);
        }
        else {
            this.dialogCtrl.hide();
        }
    }
};
InfoButtonTooltip = __decorate$3([
    Component({
        name: 'bkInfoButtonTooltip',
        templateUrl: 'src/common/widgets/info-button-tooltip/info-button-tooltip.html'
    })
], InfoButtonTooltip);

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Samuel Paul C (samuelpaulc@thoughtspot.com)
 *
 * @fileoverview This file provides a store to put a3 local data
 * We currently use this to store info for which we do not have an api to persist these values
 * in the backend
 */
const SHOULD_HIDE_SPLASH_SCREEN_KEY = 'SHOULD_HIDE_SPLASH_SCREEN_KEY';
const SHOULD_HIDE_COLUMNS_TAB_INFO_KEY = 'SHOULD_HIDE_COLUMNS_TAB_INFO_KEY';
const SHOULD_HIDE_ADVANCED_TAB_INFO_KEY = 'SHOULD_HIDE_ADVANCED_TAB_INFO_KEY';
function getStorageKey(id) {
    return `A3-${getUserGuid()}-${id}`;
}
function getShouldHideSplashScreen() {
    return sessionStore.getItem(getStorageKey(SHOULD_HIDE_SPLASH_SCREEN_KEY));
}
function setShouldHideSplashScreen(value) {
    return sessionStore.setItem(getStorageKey(SHOULD_HIDE_SPLASH_SCREEN_KEY), value);
}
function getShouldHideColumnsTabInfo() {
    return sessionStore.getItem(getStorageKey(SHOULD_HIDE_COLUMNS_TAB_INFO_KEY));
}
function setShouldHideColumnsTabInfo(value) {
    return sessionStore.setItem(getStorageKey(SHOULD_HIDE_COLUMNS_TAB_INFO_KEY), value);
}
function getShouldHideAdvancedTabInfo() {
    return sessionStore.getItem(getStorageKey(SHOULD_HIDE_ADVANCED_TAB_INFO_KEY));
}
function setShouldHideAdvancedTabInfo(value) {
    return sessionStore.setItem(getStorageKey(SHOULD_HIDE_ADVANCED_TAB_INFO_KEY), value);
}

var asyncUtil = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function doAsyncMicrotask(task) {
    return Promise.resolve().then(task);
}
exports.doAsyncMicrotask = doAsyncMicrotask;
function doAsyncMacrotask(task) {
    return new Promise(function (resolve) {
        setTimeout(resolve);
    }).then(task);
}
exports.doAsyncMacrotask = doAsyncMacrotask;
function asyncNoop() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2];
        });
    });
}
exports.asyncNoop = asyncNoop;
function executeInNextEventLoop(func) {
    if (!func) {
        return;
    }
    setTimeout(func, 0);
}
exports.executeInNextEventLoop = executeInNextEventLoop;

});

unwrapExports(asyncUtil);
var asyncUtil_1 = asyncUtil.doAsyncMicrotask;
var asyncUtil_2 = asyncUtil.doAsyncMacrotask;
var asyncUtil_3 = asyncUtil.asyncNoop;
var asyncUtil_4 = asyncUtil.executeInNextEventLoop;

/**
 * A generator for cycling an array in both directions
 */
const Cycle = function* (items) {
    const len = items.length;
    let i = 0;
    while (true) {
        i = (len + i + (yield items[i])) % len;
    }
};

class Circulator {
    /**
     * Wrap an iterable and allow cycling its elements infinitely
     */
    constructor(iterable) {
        const items = Array.isArray(iterable) ? iterable : Array.from(iterable);
        this.size = items.length;
        this.cycle = Cycle(items);
        // Init newborn generator
        this.cycle.next();
    }
    *[Symbol.iterator]() {
        yield* Array.from(Array(this.size), (_, i) => this.step(+!!i));
        // Reset to start
        this.next();
    }
    /**
     * Step through the cycle
     */
    step(n) {
        return this.cycle.next(n).value;
    }
    current() {
        return this.step(0);
    }
    prev() {
        return this.step(-1);
    }
    next() {
        return this.step(1);
    }
}

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

class ScopedComponent extends BaseComponent {
    constructor() {
        super();
        this._isScopeSet = false;
        this.eventDeregisterers = [];
        this._events = new Map();
    }
    setScope(value) {
        if (this._scope === value) {
            return;
        }
        this._scope = value;
        // if the component is reused in the template, this wil be
        // called twice, and all events will be fired twice, we
        // want to avid that
        if (!this._isScopeSet) {
            this._events.forEach((callback, event) => {
                this.eventDeregisterers.push(this._scope.$on(event, callback));
            });
        }
        this._isScopeSet = true;
    }
    removeAllEventListeners() {
        this.eventDeregisterers.forEach(fn => fn());
    }
    /**
     * Method to force the current scope to run dirty checks on all watched items and
     * refresh view if necessary.
     */
    forceRender() {
        this._scope.$evalAsync(_.noop);
    }
    /**
     * Creates a child scope on the current scope
     *
     * @returns {IScope}
     */
    createChildScope(isolated = false) {
        return this._scope.$new(isolated);
    }
}

class UIComponent extends ScopedComponent {
    constructor() {
        super(...arguments);
        this.$postLink = _$1.noop;
        /**
         * @type {boolean} If the component is already linked or not.
         */
        this._isLinked = false;
        this._windowListeners = [];
        this.afterRenderTasks = [];
    }
    set isLinked(linked) {
        this._isLinked = linked;
    }
    get isLinked() {
        return this._isLinked;
    }
    /**
     * Since dom manipulations are not allowed before linking in
     * complete. This lifecycle method servers as the point when dom
     * manipulations can start taking place.
     * @param element: JQuery
     */
    postLink(element) {
        //
    }
    uIPostLink(element) {
        this.$el = element;
        this.postLink(element);
        this.executeAfterRenderTasks();
    }
    showLoading(text) {
        this.hideLoadingIndicator = loadingIndicator.showAnchoredLoadingIndicator(this.$el, text);
    }
    hideLoading() {
        if (this.hideLoadingIndicator) {
            this.hideLoadingIndicator();
            this.hideLoadingIndicator = null;
        }
    }
    addWindowListener(eventName, callback) {
        if (this._windowListeners.indexOf(eventName) >= 0) {
            throw Error('Only one window event listener can be added for a given event name.');
        }
        this._windowListeners.push(eventName);
        $(window).on(eventName, callback);
    }
    removeWindowListener(eventName) {
        _$1.pull(this._windowListeners, eventName);
        $(window).off(eventName);
    }
    onDestroy(el) {
        this._windowListeners.forEach((eventName) => {
            $(window).off(eventName);
        });
        // if we have one shared component that switches its underlying controller, we should
        // empty the windowListeners, so the controller can be properly reused
        this._windowListeners = [];
    }
    testhookGetWindowListeners() {
        return this._windowListeners;
    }
    doAfterRender(task) {
        if (!this.$el) {
            this.afterRenderTasks.push(task);
            return;
        }
        task();
    }
    executeAfterRenderTasks() {
        this.afterRenderTasks.forEach(task => task());
        this.afterRenderTasks = [];
    }
}

var template$2 = "<div\n    class=\"svg-icon-block svg-icon-{{::type}}-block svg-icon-block-{{::size}} {{icon}}\"\n    ng-bind-html=\"getSvgIconHTML()\">\n</div>";

/**
 * Copyright: ThoughtSpot Inc. 2016
 * Author: Sachin Neravath (sachin.neravath@thoughtspot.com)
 *
 * @desc
 * List of icons can be found here -
 * http://0.0.0.0:8000/resources/img/svg-icons-sprite/svg-icons-demo.html
 *
 * @example
 * <bk-svg-icon size="m" type="info" icon="rd-icon-add-m"></bk-svg-icon>
 *
 * @todo Sachin - Convert to ts
 */
provideLegacyDirective('bkSvgIcon', bkSvgIcon, ['$sce']);
function bkSvgIcon($sce) {
    const logger = logger_3('svg-icons');
    return {
        restrict: 'E',
        replace: true,
        scope: {
            icon: '@',
            type: '@',
            size: '@' // {'s' || 'm' || 'l' || 'xl' }
        },
        link: function (scope, elem, attr) {
            const type = ['info', 'action', 'action-dark', 'status'];
            const size = ['s', 'm', 'l', 'xl'];
            let getSvgIconPath = function (icon) {
                // Do not change the syntax as the grunt
                // cache bust replace the icon name only within the '';
                let base_path = 'node_modules/@thoughtspot/radiant/widgets/resources/img/' +
                    'svg-icons-sprite/svg-icons.svg';
                icon = icon ? '#' + icon : '';
                return base_path + icon;
            };
            scope.getSvgIconHTML = function () {
                let svgIconHTML = '<svg class="svg-icon svg-icon-' + scope.type + '">' +
                    '<use xlink:href="' + getSvgIconPath(scope.icon) + '"></use></svg>';
                return $sce.trustAsHtml(svgIconHTML);
            };
            if (attr.type && type.indexOf(attr.type) < 0) {
                logger.error('Icon type must be a valid value', attr.type);
            }
            if (size.indexOf(attr.size) < 0) {
                logger.error('Icon size must be a valid value', attr.size);
            }
        },
        template: template$2
    };
}

var template$3 = "<div class=\"bk-input-container bk-input-{{$ctrl.style}}\">\n  <div class=\"bk-input\"\n      ng-form name=\"{{::$ctrl.formName}}\"\n      ng-class=\"{'is-editing': $ctrl.isEditing, 'bk-disabled': $ctrl.isDisabled,\n      'bk-input-invalid': $eval($ctrl.formName + '.' + $ctrl.name + '.$error.pattern'),\n      'has-error': $ctrl.hasError(), 'isCompactField': $ctrl.isCompactField,\n      'hasGrayBackground': $ctrl.hasGrayBackground}\">\n      <label ng-if=\"::$ctrl.label\" class=\"bk-input-label\" for=\"{{::$ctrl.name}}\">\n        {{::$ctrl.label}}\n      </label>\n      <div class=\"bk-input-container-inner\">\n        <bk-svg-icon\n          ng-if=\"::$ctrl.icon\"\n          class=\"bk-input-icon\"\n          size=\"{{::$ctrl.iconSize}}\"\n          icon=\"{{::$ctrl.icon}}\"\n          type=\"info\"></bk-svg-icon>\n        <input id=\"{{::$ctrl.name}}\"\n              ng-focus=\"$ctrl.onInputFocus()\"\n              ng-blur=\"$ctrl.onInputBlur()\"\n              ng-click=\"$ctrl.onInputClick()\"\n              ng-keydown=\"$ctrl.onInputKeyDown($event)\"\n              class=\"bk-input-field\"\n              name=\"{{::$ctrl.name}}\"\n              ng-disabled=\"::$ctrl.isDisabled\"\n              ng-model=\"$ctrl.value\"\n              ng-pattern=\"::$ctrl.pattern\"\n              ng-required=\"::$ctrl.required\"\n              ng-style=\"::$ctrl.getStyle()\"\n              type=\"{{::$ctrl.type}}\"\n              blink-auto-focus=\"::$ctrl.autofocus\"\n              placeholder=\"{{$ctrl.placeholder}}\">\n        <bk-svg-icon\n          ng-if=\"$ctrl.hasError()\"\n          class=\"bk-input-error-icon\"\n          size=\"m\"\n          icon=\"rd-icon-error-m-status\"\n          type=\"info\"></bk-svg-icon>\n\n        <div class=\"animated-placeholder\" ng-if=\"$ctrl.placeholderList.length\"></div>\n        <img ng-if=\"::$ctrl.enableSpeechRecognition\"\n              class=\"bk-speech-icon\"\n              ng-click=\"$ctrl.startDictation()\"\n              src=\"node_modules/@thoughtspot/radiant/widgets/resources/img/speech.gif\"/>\n        <div class=\"bk-clear\" ng-if=\"$ctrl.showClear && $ctrl.value\" ng-mousedown=\"$ctrl.clear()\">\n        </div>\n      </div>\n    <span ng-if=\"$ctrl.errorMessage\" class=\"bk-input-helper-text bk-input-error-message\">\n      {{$ctrl.getErrorMessage()}}\n    </span>\n    <span ng-if=\"$ctrl.helperText\" class=\"bk-input-helper-text\">\n      {{$ctrl.getHelperText()}}\n    </span>\n  </div>\n  <div class=\"bk-search-icon\"  ng-if=\"$ctrl.enterToSearch\"\n       ng-class=\"$ctrl.hasFocus() ? 'bk-active' : 'bk-inactive'\"\n       ng-mousedown=\"$ctrl.hasFocus() ? $ctrl.onEnter() : $ctrl.focus();\">\n    <img src=\"node_modules/@thoughtspot/radiant/widgets/resources/img/search_16_white.svg\">\n  </div>\n</div>\n";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InputComponent_1;
let InputComponent = InputComponent_1 = class InputComponent extends UIComponent {
    constructor(config = {}) {
        super();
        this.config = config;
        this.placeholderList = [];
        this.isEditing = false;
        this.showClear = false;
        this.enterToSearch = false;
        this.errorMessage = null;
        this.helperText = null;
        this.isCompactField = false;
        this.hasGrayBackground = false;
        this.logger = logger_3('input-component');
        this._value = config.initialValue || '';
        this.icon = config.icon || null;
        this.iconSize = config.iconSize || 'm';
        this.isDisabled = config.isDisabled || false;
        this.autofocus = config.autofocus || false;
        this.onChange = config.onChange;
        this.onFocus = config.onFocus;
        this.onBlur = config.onBlur || _$1.noop;
        this.onClick = config.onClick || _$1.noop;
        this.name = config.name || 'input_' + jsUtil_5(8);
        this.formName = 'form_' + jsUtil_5(8);
        this.required = config.required;
        this.type = config.type || 'text';
        this.onEnter = config.onEnter || _$1.noop;
        this.onEscape = config.onEscape || _$1.noop;
        this.onDictationEnd = config.onDictationEnd || _$1.noop;
        this.onKeyDown = config.onKeyDown || _$1.noop;
        this.enableSpeechRecognition = config.enableSpeechRecognition;
        let patternFunc = config.pattern || ((val) => true);
        this.enterToSearch = config.enterToSearch || false;
        this.showClear = config.showClear || false;
        this.pattern = {
            test: patternFunc
        };
        this.style = config.style || 'legacy';
        this.hasError = config.hasError;
        this.label = config.label || null;
        this.isCompactField = config.isCompactField;
        this.hasGrayBackground = config.hasGrayBackground;
        this.initPlaceholder();
    }
    static __getExamples() {
        return [
            {
                ctrl: new InputComponent_1({
                    placeholder: 'Type something...',
                })
            },
            {
                ctrl: new InputComponent_1({
                    placeholder: 'Search...',
                    icon: 'rd-icon-search-m'
                })
            },
            {
                ctrl: new InputComponent_1({
                    initialValue: 'disabled input',
                    isDisabled: true
                })
            },
            {
                ctrl: new InputComponent_1({
                    pattern: (val) => {
                        return !!val.match(/^\d+$/);
                    }
                })
            }
        ];
    }
    // When input validation fails, this will be set to undefined.
    get value() {
        return this._value;
    }
    set value(value) {
        if (value !== this._value) {
            this._value = value;
            if (this.onChange !== void 0) {
                this.onChange(this._value);
            }
        }
    }
    setIsDisabled(isDisabled) {
        this.isDisabled = isDisabled;
        return this;
    }
    getIsDisabled() {
        return this.isDisabled;
    }
    onInputFocus() {
        if (this.isDisabled) {
            return;
        }
        this.isEditing = true;
        if (!!this.onFocus) {
            this.onFocus();
        }
    }
    onInputBlur() {
        this.isEditing = false;
        this.onBlur();
    }
    onInputClick() {
        this.onClick();
    }
    setErrorMessage(msg) {
        this.errorMessage = msg;
    }
    getErrorMessage() {
        return this.errorMessage;
    }
    setHelperText(msg) {
        this.helperText = msg;
    }
    getHelperText() {
        return this.helperText;
    }
    onInputKeyDown(evt) {
        if (evt.key === dist_1.Enter) {
            this.onEnter(this.value);
        }
        if (evt.key === dist_1.Escape) {
            this.onEscape(evt);
        }
        this.onKeyDown(evt);
    }
    startDictation() {
        if (window.hasOwnProperty('webkitSpeechRecognition')) {
            let recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';
            recognition.start();
            this._value = 'listening....';
            recognition.onresult = (e) => {
                try {
                    this._value = e.results[0][0].transcript;
                    if (!!this.onChange) {
                        this.onChange(this._value);
                    }
                    if (this.onDictationEnd) {
                        this.onDictationEnd(this._value);
                    }
                }
                catch (err) {
                    this.logger.error(err);
                }
                finally {
                    recognition.stop();
                }
            };
            recognition.onerror = function (e) {
                recognition.stop();
                this._value = '';
            };
        }
    }
    focus() {
        this.doAfterRender(() => this.$inputField.focus());
    }
    blur() {
        this.doAfterRender(() => this.$inputField.blur());
    }
    hasFocus() {
        return !!this.$inputField
            && this.$inputField.contains(document.activeElement);
    }
    getCaretIndex() {
        if (!this.$inputField) {
            return null;
        }
        return this.$inputField.selectionStart;
    }
    getCharIndexPosition(charIndex = this.getCaretIndex()) {
        if (!this.$inputField) {
            return null;
        }
        return textareaCaret(this.$inputField, charIndex);
    }
    setCaretPosition(position) {
        this.doAfterRender(() => this.$inputField.setSelectionRange(position, position));
    }
    updatePlaceholderList(placeholderList) {
        this.config.placeholderList = placeholderList;
        this.initPlaceholder();
        this.setNextPlaceholder();
    }
    postLink($el) {
        this.$inputField = $el.find('.bk-input-field')[0];
        this.setupPlaceholderAnimation($el);
    }
    setPlaceholder(placeholder) {
        this.placeholder = placeholder;
    }
    clear() {
        this._value = '';
        if (this.onChange !== void 0) {
            this.onChange(this._value);
        }
    }
    getStyle() {
        if (this.config.fontSize >= 0) {
            let fontSize = this.config.fontSize;
            return {
                'font-size': `${fontSize}px`,
                'height': `${fontSize + 6}px`,
                'line-height': `${fontSize + 6}px`
            };
        }
        return {};
    }
    initPlaceholder() {
        if (!this.config.placeholderList || !this.config.placeholderList.length) {
            this.placeholder = this.config.placeholder || '';
            return;
        }
        this.placeholder = ' ';
        this.placeholderList = this.config.placeholderList;
        this.placeholderIterator = new Circulator(this.placeholderList);
    }
    setupPlaceholderAnimation($el) {
        asyncUtil_4(() => {
            this.$animatedPlaceholder = $el.find('.animated-placeholder')[0];
            if (this.$animatedPlaceholder) {
                this.setNextPlaceholder();
                this.$animatedPlaceholder.addEventListener('animationiteration', () => this.setNextPlaceholder());
            }
        });
    }
    setNextPlaceholder() {
        if (!this.$animatedPlaceholder) {
            return;
        }
        let placeholderText = stringUtil_1(this.strings.enliteSearchPlacholder, {
            query: this.placeholderIterator.next()
        });
        this.$animatedPlaceholder.setAttribute('data-content', placeholderText);
    }
};
InputComponent = InputComponent_1 = __decorate$2([
    Component$1({
        name: 'bkInput',
        template: template$3
    })
], InputComponent);

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Bhanu Jupally (bhanu.jupally@thoughtspot.com)
 *
 * @fileoverview A3 Preferences Input
 */
let A3PreferencesInput = class A3PreferencesInput extends BaseComponent$1 {
    constructor(options) {
        super();
        this.show = options.show || (() => true);
        this.label = options.label;
        this.tooltip = options.tooltip;
        this.input = new InputComponent({
            initialValue: options.initialValue,
            name: options.name,
            onChange: options.onChange,
            type: 'number'
        });
    }
};
A3PreferencesInput = __decorate$3([
    Component({
        name: 'bkA3PreferencesInput',
        templateUrl: 'src/modules/a3/a3-preferences-viewer/a3-preferences/' +
            'a3-preferences-input/a3-preferences-input.html'
    })
], A3PreferencesInput);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Manoj Ghosh (manoj.ghosh@thoughtspot.com)
 *
 * @fileoverview A3 R script Template Utils.
 */
function getKMeansClusterScript(numberOfClusters, columnBindings /* sage.a3.AnalysisDescriptor.CustomRAnalysis.ColumnBinding[] */, columnHeaders /* sage.EntityHeader[] */) {
    if (!columnBindings) {
        return null;
    }
    if (!columnHeaders) {
        return null;
    }
    let firstVariable = columnBindings[0].getVariableName();
    let secondVariable = columnBindings[1].getVariableName();
    let firstColumnName = columnHeaders[0].getName();
    let secondColumnName = columnHeaders[1].getName();
    let rScript = `library(ggplot2);
set.seed(20);
df <- data.frame(${firstVariable},${secondVariable});
cluster <- kmeans(df[1:2], ${numberOfClusters}, nstart = 20);
cluster$cluster <- as.factor(cluster$cluster);
png(file=#output_file#, width=400, height=350, res=72);
p <- ggplot(df, aes(${firstVariable}, ${secondVariable}, color = cluster$cluster)) + geom_point();
print(p + labs(x='${firstColumnName}',y='${secondColumnName}',colour='Clusters'));`;
    return rScript;
}
function getKMeansCsvScript(numberOfClusters, columnBindings /* sage.a3.AnalysisDescriptor.CustomRAnalysis.ColumnBinding[] */, columnHeaders /* sage.EntityHeader[] */) {
    if (!columnBindings) {
        return null;
    }
    if (!columnHeaders) {
        return null;
    }
    let firstVariable = columnBindings[0].getVariableName();
    let secondVariable = columnBindings[1].getVariableName();
    let firstColumnName = columnHeaders[0].getName();
    let secondColumnName = columnHeaders[1].getName();
    let rScript = `set.seed(20);
df <- data.frame(${firstVariable},${secondVariable});
cluster <- kmeans(df[1:2], ${numberOfClusters}, nstart = 20);
df$Cluster <- as.factor(cluster$cluster);
colnames(df)[1] <- '${firstColumnName}';
colnames(df)[2] <- '${secondColumnName}';
write.csv(df, file=#output_file#, row.names=FALSE);`;
    return rScript;
}

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Manoj Ghosh (manoj.ghosh@thoughtspot.com)
 *
 * @fileoverview This component allows one to persist a3 user preference settings.
 */
let userAdminService = ngRequire('userAdminService');
let A3UserPreference = class A3UserPreference {
    constructor() {
        this.backingProto = null;
        this.init();
    }
    setFeedbackTokens(feedbackTokens, excludeColumns) {
        if (!feedbackTokens && feedbackTokens.length === 0) {
            return;
        }
        let existingFeedbackTokens = this.getFeedbackTokens();
        let unionTokens = existingFeedbackTokens.concat(feedbackTokens);
        let unionTokensMap = new Map();
        unionTokens.forEach(feedbackToken => {
            unionTokensMap.set(feedbackToken.getToken().getGuid(), feedbackToken);
        });
        if (!!excludeColumns) {
            excludeColumns.forEach(exclude => {
                if (unionTokensMap.has(exclude)) {
                    unionTokensMap.delete(exclude);
                }
            });
        }
        // TODO : remove exclude columns until sage change is made
        this.backingProto.a3.setExcludeColumns(Array.from(unionTokensMap.keys()));
        this.backingProto.a3.setFeedbackToken(Array.from(unionTokensMap.values()));
    }
    getFeedbackTokens() {
        if (!!this.backingProto && !!this.backingProto.a3) {
            return this.backingProto.a3.getFeedbackToken();
        }
        return [];
    }
    getExcludeNull() {
        if (!!this.backingProto
            && !!this.backingProto.a3) {
            return this.backingProto.a3.getExcludeNull();
        }
        return false;
    }
    setExcludeNull(excludeNull) {
        this.backingProto.a3.setExcludeNull(excludeNull);
    }
    getExcludeZeroMeasure() {
        if (!!this.backingProto
            && !!this.backingProto.a3) {
            return this.backingProto.a3.getExcludeZeroMeasure();
        }
        return false;
    }
    setExcludeZeroMeasure(excludeZeroMeasure) {
        this.backingProto.a3.setExcludeZeroMeasure(excludeZeroMeasure);
    }
    getAutotuneDateBoundary() {
        if (!!this.backingProto
            && !!this.backingProto.a3) {
            return this.backingProto.a3.getAutotuneDateBoundary();
        }
        return false;
    }
    setAutotuneDateBoundary(autotuneDateBoundary) {
        this.backingProto.a3.setAutotuneDateBoundary(autotuneDateBoundary);
    }
    getPValueThreshold() {
        if (this.backingProto && this.backingProto.a3) {
            return this.backingProto.a3.getPValueThreshold();
        }
        return null;
    }
    setPValueThreshold(pValueThreshold) {
        if (this.backingProto && this.backingProto.a3) {
            this.backingProto.a3.setPValueThreshold(pValueThreshold);
        }
    }
    getMinCorrCoeff() {
        if (this.backingProto && this.backingProto.a3) {
            return this.backingProto.a3.getMinCorrCoeff();
        }
        return null;
    }
    setMinCorrCoeff(minCorrCoeff) {
        if (this.backingProto && this.backingProto.a3) {
            this.backingProto.a3.setMinCorrCoeff(minCorrCoeff);
        }
    }
    getMaxCorrCoeff() {
        if (this.backingProto && this.backingProto.a3) {
            return this.backingProto.a3.getMaxCorrCoeff();
        }
        return null;
    }
    setMaxCorrCoeff(maxCorrCoeff) {
        if (this.backingProto && this.backingProto.a3) {
            this.backingProto.a3.setMaxCorrCoeff(maxCorrCoeff);
        }
    }
    getMaxLag() {
        if (this.backingProto && this.backingProto.a3) {
            return this.backingProto.a3.getMaxLag();
        }
        return null;
    }
    setMaxLag(maxLag) {
        if (this.backingProto && this.backingProto.a3) {
            this.backingProto.a3.setMaxLag(maxLag);
        }
    }
    getMinRelativeDiff() {
        if (this.backingProto && this.backingProto.a3) {
            return this.backingProto.a3.getMinRelativeDiff();
        }
        return null;
    }
    setMinRelativeDiff(minRelativeDiff) {
        if (this.backingProto && this.backingProto.a3) {
            this.backingProto.a3.setMinRelativeDiff(minRelativeDiff);
        }
    }
    getExcludeColumnsSet() {
        return new Set(this.getExcludeColumns());
    }
    getExcludeColumns() {
        if (!!this.backingProto) {
            return this.backingProto.a3.getExcludeColumns();
        }
        return [];
    }
    /**
     * This is called from Table analysis code where there is no easy way to get tokens
     * @param {Array<string>} table columns that were selected for bookeeping.
     * @param {Array<string>} removeColumns
     */
    setExcludeColumns(selectedColumns, removeColumns) {
        let feedbackTokens = [];
        if (!!selectedColumns && selectedColumns.length > 0) {
            feedbackTokens = selectedColumns.map(id => {
                let feedbackToken = new callosum.FeedbackToken();
                let recognizedToken = new sage.RecognizedToken();
                recognizedToken.guid = id;
                feedbackToken.token = recognizedToken;
                return feedbackToken;
            });
        }
        this.setFeedbackTokens(feedbackTokens, removeColumns);
    }
    setExcludeTokens(recognizedTokens, removeColumns) {
        let feedbackTokens = [];
        if (!!recognizedTokens && recognizedTokens.length > 0) {
            feedbackTokens = recognizedTokens.map(token => {
                let feedbackToken = new callosum.FeedbackToken();
                feedbackToken.token = token;
                return feedbackToken;
            });
        }
        this.setFeedbackTokens(feedbackTokens, removeColumns);
    }
    saveUserPreferenceProto() {
        return userAdminService.updateUserPreferenceProto(this.backingProto);
    }
    getNotification() {
        return this.backingProto.a3.getEmailNotification();
    }
    updateEmailNotification(emailOnSuccess, emailOnFailure, attachPinboard) {
        let notification = this.getNotification();
        if (emailOnSuccess || emailOnFailure) {
            notification.setNotifiy(true);
        }
        else {
            this.backingProto.a3.getEmailNotification().setNotifiy(false);
        }
        notification.setOnSuccess(emailOnSuccess);
        notification.setOnFailure(emailOnFailure);
        notification.setAttachContent(attachPinboard);
    }
    init() {
        if (!this.backingProto) {
            this.backingProto = new callosum.PreferenceProto();
        }
        let preference = getUserPreferenceProto();
        if (!!preference) {
            this.backingProto = decode64(preference, callosum.PreferenceProto);
        }
        else {
            this.backingProto = new callosum.PreferenceProto();
            this.backingProto.a3 = new callosum.PreferenceProto.A3PreferenceProto();
            this.backingProto.a3.emailNotification
                = new callosum.PreferenceProto.NotificationProto();
            this.updateEmailNotification(true /* emailOnSuccess */, true /* emailOnFailure */, true /* attachPinboard */);
            this.backingProto.a3.setExcludeNull(false);
            this.backingProto.a3.setExcludeZeroMeasure(false);
            this.backingProto.a3.setAutotuneDateBoundary(true);
        }
    }
};
A3UserPreference = __decorate$3([
    Provide('A3UserPreference')
], A3UserPreference);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Gunjan Jha (gunjan.jha@thoughtspot.com)
 *
 * @fileoverview This component customizes the algorithm for
 * a3 analysis.
 *
 */
let UserAction$1 = ngRequire('UserAction');
/**
 * Algorithm customizer component
 */
let A3AlgorithmBaseCustomizerComponent = class A3AlgorithmBaseCustomizerComponent extends BaseComponent$1 {
    /**
     * Algorithm customizer component
     */
    constructor() {
        super(...arguments);
        this.excludeNullCheckbox = null;
        this.excludeZeroMeasureCheckbox = null;
        this.autotuneDateBoundaryCheckbox = null;
        this.currentDataOnlyCheckbox = null;
        this.stdevMeanCheckbox = null;
        this.madMedianCheckbox = null;
        this.shesdCheckbox = null;
        this.linearRegressionCheckbox = null;
        this.trendAnalysisCheckbox = null;
        this.crossCorrelationCheckbox = null;
        this.customRCheckbox = null;
        this.kMeansCheckbox = null;
        this.changeAnalysisCheckbox = null;
        this.classificationCheckbox = null;
        this.pngOutputCheckbox = null;
        this.csvOutputCheckbox = null;
        this.excludeNull = false;
        this.excludeZeroMeasure = false;
        this.autotuneDateBoundary = true;
        this.currentDataOnly = false;
        this.stdevMeanOn = false;
        this.madMedianOn = false;
        this.shesdOn = false;
        this.linearRegressionOn = false;
        this.trendAnalysisOn = false;
        this.crossCorrelationOn = false;
        this.customROn = false;
        this.kMeansOn = false;
        this.changeAnalysisOn = false;
        this.classificationOn = false;
        this.insightSettingsOn = false;
        this.a3Preference = null;
        this.visualizationAnalysis = null;
        this.anomalyExplanationAnalysis = null;
        this.refineParameters = [
            {
                label: strings.a3.Min_Rows,
                name: 'min_rows',
                prop: 'minRows',
                tooltip: strings.a3.Min_Rows_Tooltip,
                onChange: () => this.verifyMinRows(),
                shouldShow: () => {
                    return !!this.stdevMeanOn || !!this.madMedianOn
                        || !!this.shesdOn || !!this.linearRegressionOn
                        || !!this.trendAnalysisOn || !!this.crossCorrelationOn;
                }
            },
            {
                label: strings.a3.Multiplier,
                name: 'multiplier',
                prop: 'multiplier',
                tooltip: strings.a3.Multiplier_Tooltip,
                onChange: () => this.verifyMultiplier(),
                shouldShow: () => {
                    return !!this.stdevMeanOn || !!this.madMedianOn
                        || !!this.shesdOn || !!this.linearRegressionOn;
                }
            },
            {
                label: strings.a3.P_Value_Threshold,
                name: 'p_value_threshold',
                prop: 'pValueThreshold',
                tooltip: strings.a3.P_Value_Threshold_Tooltip,
                onChange: () => this.verifyPValueThreshold(),
                shouldShow: () => {
                    return !!this.linearRegressionOn || !!this.trendAnalysisOn;
                }
            },
            {
                label: strings.a3.Correlation_Coefficient,
                name: 'min_correlation_coefficient',
                prop: 'minCorrelationCoefficient',
                tooltip: strings.a3.Correlation_Coefficient_Tooltip,
                onChange: () => this.verifyCorrelationCoefficient(),
                shouldShow: () => this.crossCorrelationOn
            },
            {
                label: strings.a3.Max_Correlation_Coefficient,
                name: 'max_correlation_coefficient',
                prop: 'maxCorrelationCoefficient',
                tooltip: strings.a3.Max_Correlation_Coefficient_Tooltip,
                onChange: () => this.verifyCorrelationCoefficient(),
                shouldShow: () => this.crossCorrelationOn
            },
            {
                label: strings.a3.Max_Lag,
                name: 'max_lag',
                prop: 'maxLag',
                tooltip: strings.a3.Max_Lag_Tooltip,
                onChange: () => this.verifyMaxLag(),
                shouldShow: () => this.crossCorrelationOn
            },
            {
                label: strings.a3.Min_Relative_Difference,
                name: 'min_relative_difference',
                prop: 'minRelativeDifference',
                tooltip: strings.a3.Min_Relative_Difference_Tooltip,
                onChange: () => this.verifyMaxLag(),
                shouldShow: () => this.trendAnalysisOn
            },
            {
                label: strings.a3.Num_Clusters,
                name: 'num_cluster',
                prop: 'numClusters',
                tooltip: strings.a3.Num_Clusters_Tooltip,
                onChange: () => this.verifyNumClusters(),
                shouldShow: () => this.kMeansOn
            },
        ];
        this.comparitiveAnalysisParams = [
            {
                label: strings.a3.Max_Diff_Elements,
                prop: 'maxDiffElements',
                tooltip: strings.a3.Max_Diff_Elements_Tooltip,
                onChange: () => this.verifyMaxDiffElements(),
                shouldShow: () => true
            },
            {
                label: strings.a3.Max_Fraction,
                prop: 'maxFraction',
                tooltip: strings.a3.Max_Fraction_Tooltip,
                onChange: () => this.verifyMaxFraction(),
                shouldShow: () => true
            },
            {
                label: strings.a3.Min_Abs_Change_Ratio,
                prop: 'minAbsChangeRatio',
                tooltip: strings.a3.Min_Abs_Change_Ratio_Tooltip,
                onChange: () => this.verifyMinAbsChangeRatio(),
                shouldShow: () => true
            },
            {
                label: strings.a3.Min_Change_Ratio,
                prop: 'minChangeRatio',
                tooltip: strings.a3.Min_Change_Ratio_Tooltip,
                onChange: () => this.verifyMinChangeRatio(),
                shouldShow: () => true
            }
        ];
        this.createInputControl = (config) => {
            return new A3PreferencesInput({
                label: config.label,
                name: config.name || config.prop,
                show: () => config.shouldShow(),
                tooltip: !!config.tooltip ? config.tooltip : null,
                initialValue: this[config.prop],
                onChange: (val) => {
                    this[config.prop] = val;
                    config.onChange();
                }
            });
        };
    }
    showInfoBox() {
        if (!this.infoBox) {
            this.infoBox = new InfoBoxComponent(this.strings.a3.selectAlgorithms.title, this.strings.a3.selectAlgorithms.info, !getShouldHideAdvancedTabInfo());
        }
        setShouldHideAdvancedTabInfo(true);
    }
    getStdevMeanOn() {
        return this.stdevMeanOn;
    }
    getMadMedianOn() {
        return this.madMedianOn;
    }
    getShesdOn() {
        return this.shesdOn;
    }
    getLinearRegressionOn() {
        return this.linearRegressionOn;
    }
    getTrendAnalysisOn() {
        return this.trendAnalysisOn;
    }
    getCrossCorrelationOn() {
        return this.crossCorrelationOn;
    }
    shouldShowVizOptions() {
        return this.isA3Viz;
    }
    shouldShowDiffOptions() {
        return this.isA3Diff;
    }
    shouldShowTableOptions() {
        return this.isA3Table;
    }
    getInvalidInputMessageString() {
        return this.invalidInputMessageString;
    }
    trigger() {
        this.a3AnalysisCustomizerComponent.trigger();
    }
    updateA3Request() {
        let success = false;
        let analysisParam;
        if (!!this.isA3Viz) {
            success = this.updateVisualizationAnalysis();
            let analysis = this.a3AnalysisRequest.getVisualizationAnalysis() ||
                this.a3AnalysisRequest.getDataAnalysis() ||
                this.a3AnalysisRequest.getTableAnalysis();
            if (analysis) {
                analysisParam = analysis.getParam();
            }
        }
        else if (!!this.isA3AnomalyExplanation) {
            success = this.updateAnomalyExplanationAnalysis();
            analysisParam = this.a3AnalysisRequest.getAnomalyExplanationAnalysis().getParam();
        }
        else if (!!this.isA3Diff) {
            success = this.updateDataAnalysis();
            analysisParam = this.a3AnalysisRequest.getDataAnalysis().getParam();
        }
        if (success && analysisParam) {
            success = this.maxInsightOpts.populateAnalysisParam(analysisParam);
        }
        return success;
    }
    verifyNumber(name, value) {
        if (typeof value === 'undefined' || value === null || isNaN(value)
            || value < 0) {
            this.invalidInputMessageString = stringUtil_1(strings.a3.Invalid_Number_Input, name);
            this.isInputInvalid = true;
        }
        else {
            this.invalidInputMessageString = '';
            this.isInputInvalid = false;
        }
        return false === this.isInputInvalid;
    }
    initialize() {
        this.initializeDefaults();
        if (isA3Enabled()) {
            this.a3Preference = new A3UserPreference();
            this.initExcludeNullFromPreference();
            this.initExcludeZeroMeasureFromPreference();
            this.initAutotuneDateBoundaryFromPreference();
            this.initA3Thresholds();
        }
        this.populateValuesFromA3Request();
        this.initExcludeNullCheckBox();
        this.initExcludeZeroMeasureCheckBox();
        this.initAutotuneDateBoundaryCheckBox();
        this.initStdevMeanCheckBox();
        this.initMadMedianCheckBox();
        this.initSHESDCheckBox();
        this.initLinearRegressionCheckBox();
        this.initTrendAnalysisCheckBox();
        this.initCrossCorrelationCheckBox();
        this.initCustomRCheckBox();
        this.initKMeansCheckBox();
        this.initChangeAnalysisCheckBox();
        this.initClassificationCheckBox();
        this.initPngOutputCheckbox();
        this.initCsvOutputCheckbox();
        this.initTooltips();
        this.refineParametersControls = this.refineParameters.map(this.createInputControl);
        this.comparitiveAnalysisParamsControls = this.comparitiveAnalysisParams.map(this.createInputControl);
        this.enabledCustomRAnalysis = hasRAnalysisPrivilege();
        this.isInputInvalid = false;
        this.invalidInputMessageString = '';
    }
    populateValuesFromA3Request() {
        /* To be implemented in child classes */
    }
    populateVisualizationValues(analysisParam /* sage.AnalysisParam */) {
        if (analysisParam === null) {
            this.stdevMeanOn = true;
            this.trendAnalysisOn = true;
            this.crossCorrelationOn = true;
            return;
        }
        // use value from previous request.
        this.excludeNull = analysisParam.getExcludeNull();
        this.excludeZeroMeasure = analysisParam.getExcludeZeroMeasure();
        this.autotuneDateBoundary = analysisParam.getAutotuneDateBoundary();
        analysisParam.analysisDescriptor
            .forEach((analysisDescriptor) => {
            if (!!analysisDescriptor.getCustomRAnalysis()) {
                if (!!this.enabledCustomRAnalysis) {
                    this.customROn = true;
                }
                else {
                    this.kMeansOn = true;
                }
                let script = analysisDescriptor.getCustomRAnalysis().getRScript();
                this.rScript = script;
                let outputFiletype = analysisDescriptor.getCustomRAnalysis().getROutputType();
                if (outputFiletype ===
                    sage$1.AnalysisDescriptor.CustomRAnalysis.ROutputType.PNG) {
                    this.pngOutput = true;
                    this.csvOutput = false;
                }
                else if (outputFiletype ===
                    sage$1.AnalysisDescriptor.CustomRAnalysis.ROutputType.CSV) {
                    this.pngOutput = false;
                    this.csvOutput = true;
                }
                let headers = getHeadersFromA3Request(this.a3AnalysisRequest, false /* onlyNumericColumns */);
                let selectedColumns = [];
                let unselectedColumns = [];
                getPartitionedHeadersFromCustomBinding(analysisDescriptor.getCustomRAnalysis().getColumnBinding(), headers, selectedColumns, unselectedColumns);
                this.customRBindingsComponent.reset(unselectedColumns, selectedColumns);
            }
            if (analysisDescriptor.getAnomalyExplanation()) {
                this.classificationOn = true;
                let analysisAlgorithm = analysisDescriptor.getAnomalyExplanation()
                    .getAlgorithm();
                let anomalyExplanation = analysisAlgorithm.getAnomalyExplanation();
                this.minRows = Math.floor(anomalyExplanation.getMinRows());
                this.maxExplanationColumns =
                    Math.floor(anomalyExplanation.getMaxExplanationColumns());
                let headers = getHeadersFromA3Request(this.a3AnalysisRequest, false /* onlyNumericColumns */);
                let selectedColumns = [];
                let unselectedColumns = [];
                getPartitionedHeadersFromCustomBinding(analysisDescriptor.getAnomalyExplanation().getColumnBinding(), headers, selectedColumns, unselectedColumns);
                this.classificationBindingComponent.reset(unselectedColumns, selectedColumns);
            }
            if (!!analysisDescriptor.getTrendAnalysis()) {
                this.trendAnalysisOn = true;
                let analysisAlgorithm = analysisDescriptor.getTrendAnalysis().getAlgorithm();
                let trendAlgorithm = analysisAlgorithm.getTrendAnalysis();
                this.minRows = Math.floor(trendAlgorithm.getMinRows());
                this.minRelativeDifference = trendAlgorithm.getMinRelativeDifference();
                let linearRegression = trendAlgorithm.getLinearRegression();
                this.pValueThreshold = linearRegression.getPValueThreshold();
            }
            if (!!analysisDescriptor.getCrossCorrelation()) {
                this.crossCorrelationOn = true;
                let analysisAlgorithm = analysisDescriptor.getCrossCorrelation().getAlgorithm();
                let crossCorrelation = analysisAlgorithm.getCrossCorrelation();
                this.minRows = Math.floor(crossCorrelation.getMinRows());
                this.maxLag = Math.floor(crossCorrelation.getMaxLag());
                this.minCorrelationCoefficient = crossCorrelation.getCorrCoeff();
                this.maxCorrelationCoefficient = crossCorrelation.getMaxCorrCoeff();
            }
            if (analysisDescriptor.getOutlierDetection() === null) {
                return;
            }
            let outlierDetection = analysisDescriptor.getOutlierDetection();
            let analysisAlgorithm = outlierDetection.getAlgorithm();
            if (analysisAlgorithm.getType() ===
                sage$1.AnalysisAlgorithm.Type.STDEV_MEAN) {
                this.stdevMeanOn = true;
                let stdevMean = analysisAlgorithm.getStdevMean();
                this.minRows = Math.floor(stdevMean.getMinRows());
                let theMultiplier = stdevMean.getMultiplier();
                if (theMultiplier < 0) {
                    this.multiplier = '';
                }
                else {
                    this.multiplier = theMultiplier.toLocaleString();
                }
            }
            if (analysisAlgorithm.getType() ===
                sage$1.AnalysisAlgorithm.Type.MAD_MEDIAN) {
                this.madMedianOn = true;
                let madMedian = analysisAlgorithm.getMadMedian();
                this.minRows = Math.floor(madMedian.getMinRows());
                let theMultiplier = madMedian.getMultiplier();
                if (theMultiplier < 0) {
                    this.multiplier = '';
                }
                else {
                    this.multiplier = theMultiplier.toLocaleString();
                }
            }
            if (analysisAlgorithm.getType() ===
                sage$1.AnalysisAlgorithm.Type.SHESD) {
                this.shesdOn = true;
                let shesd = analysisAlgorithm.getShesd();
                this.minRows = Math.floor(shesd.getMinRows());
                let theMultiplier = shesd.getMultiplier();
                if (theMultiplier < 0) {
                    this.multiplier = '';
                }
                else {
                    this.multiplier = theMultiplier.toLocaleString();
                }
            }
            if (analysisAlgorithm.getType() ===
                sage$1.AnalysisAlgorithm.Type.LINEAR_REGRESSION) {
                this.linearRegressionOn = true;
                let linearRegression = analysisAlgorithm.getLinearRegression();
                this.minRows = Math.floor(linearRegression.getMinRows());
                let theMultiplier = linearRegression.getMultiplier();
                if (theMultiplier < 0) {
                    this.multiplier = '';
                }
                else {
                    this.multiplier = theMultiplier.toLocaleString();
                }
            }
        });
        this.maxInsightOpts.populateValuesFromA3Request(analysisParam);
    }
    populateDiffValues(analysisParam /* sage.AnalysisParam */) {
        if (analysisParam === null) {
            this.changeAnalysisOn = true;
            return;
        }
        // use value from previous request.
        this.excludeNull = analysisParam.getExcludeNull();
        this.excludeZeroMeasure = analysisParam.getExcludeZeroMeasure();
        this.autotuneDateBoundary = analysisParam.getAutotuneDateBoundary();
        analysisParam.analysisDescriptor
            .forEach((analysisDescriptor) => {
            let diffExplanation = analysisDescriptor.getDiffExplanation();
            let analysisAlgorithm = diffExplanation.getAlgorithm();
            let absDiffMajority = analysisAlgorithm.getAbsDiffMajority();
            if (absDiffMajority === null ||
                analysisAlgorithm.getType() !==
                    sage$1.AnalysisAlgorithm.Type.ABS_DIFF_MAJORITY ||
                analysisDescriptor.getAnalysisClass() !==
                    sage$1.AnalysisDescriptor.AnalysisClass.DIFF_EXPLANATION) {
                return;
            }
            this.changeAnalysisOn = true;
            this.maxDiffElements = Math.floor(absDiffMajority.getMaxDiffElements());
            this.maxFraction = absDiffMajority.getMaxFraction();
            this.minAbsChangeRatio = absDiffMajority.getMinAbsChangeRatio();
            this.minChangeRatio = absDiffMajority.getMinChangeRatio();
        });
    }
    isSeasonalityDetectionEnabled() {
        return isSeasonalityDetectionEnabled();
    }
    isAnomalyExplanationEnabled() {
        return isAnomalyExplanationEnabled();
    }
    updateVisualizationAnalysis() {
        if (!this.verifyMinRows()) {
            return false;
        }
        let analysisParam = new sage$1.AnalysisParam();
        analysisParam.excludeNull = this.excludeNull;
        analysisParam.excludeZeroMeasure = this.excludeZeroMeasure;
        analysisParam.autotuneDateBoundary = this.autotuneDateBoundary;
        if (!!this.customROn || !!this.kMeansOn) {
            if (!this.populateRScript(analysisParam)) {
                return false;
            }
        }
        if (!!this.trendAnalysisOn) {
            let analysisDescriptor = new sage$1.AnalysisDescriptor();
            let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
            analysisDescriptor.analysisClass =
                sage$1.AnalysisDescriptor.AnalysisClass.TREND_ANALYSIS;
            let trendAnalysisDescriptor = new sage$1.AnalysisDescriptor.TrendAnalysis();
            if (!this.verifyPValueThreshold()) {
                return false;
            }
            if (!this.verifyMinRelativeDifference()) {
                return false;
            }
            analysisAlgorithm.type = sage$1.AnalysisAlgorithm.Type.TREND_ANALYSIS;
            let trendAnalysis = new sage$1.AnalysisAlgorithm.TrendAnalysis();
            let linearRegression = new sage$1.AnalysisAlgorithm.LinearRegression();
            linearRegression.pValueThreshold = this.pValueThreshold;
            trendAnalysis.linearRegression = linearRegression;
            trendAnalysis.minRows = Math.floor(this.minRows);
            trendAnalysis.minRelativeDifference = this.minRelativeDifference;
            analysisAlgorithm.trendAnalysis = trendAnalysis;
            trendAnalysisDescriptor.algorithm = analysisAlgorithm;
            analysisDescriptor.trendAnalysis = trendAnalysisDescriptor;
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        if (!!this.crossCorrelationOn) {
            let analysisDescriptor = new sage$1.AnalysisDescriptor();
            let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
            analysisDescriptor.analysisClass =
                sage$1.AnalysisDescriptor.AnalysisClass.CROSS_CORRELATION;
            if (!this.verifyCorrelationCoefficient()) {
                return false;
            }
            if (!this.verifyMaxLag()) {
                return false;
            }
            let crossCorrelationDescriptor = new sage$1.AnalysisDescriptor.CrossCorrelation();
            analysisAlgorithm.type = sage$1.AnalysisAlgorithm.Type.CROSS_CORRELATION;
            let crossCorrelation = new sage$1.AnalysisAlgorithm.CrossCorrelation();
            crossCorrelation.minRows = Math.floor(this.minRows);
            crossCorrelation.corrCoeff = this.minCorrelationCoefficient;
            crossCorrelation.maxCorrCoeff = this.maxCorrelationCoefficient;
            crossCorrelation.maxLag = Math.floor(this.maxLag);
            analysisAlgorithm.crossCorrelation = crossCorrelation;
            crossCorrelationDescriptor.algorithm = analysisAlgorithm;
            analysisDescriptor.crossCorrelation = crossCorrelationDescriptor;
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        if (!!this.stdevMeanOn) {
            if (!this.verifyMultiplier()) {
                return false;
            }
            let analysisDescriptor = new sage$1.AnalysisDescriptor();
            let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
            let analysisClass = sage$1.AnalysisDescriptor.AnalysisClass.OUTLIER_DETECTION;
            analysisDescriptor.analysisClass = analysisClass;
            let outlierDetection = new sage$1.AnalysisDescriptor.OutlierDetection();
            let theMultiplier = this.getMultiplier();
            analysisAlgorithm.type = sage$1.AnalysisAlgorithm.Type.STDEV_MEAN;
            let stdevMean = new sage$1.AnalysisAlgorithm.StdevMean();
            stdevMean.minRows = Math.floor(this.minRows);
            stdevMean.multiplier = theMultiplier;
            analysisAlgorithm.stdevMean = stdevMean;
            outlierDetection.algorithm = analysisAlgorithm;
            analysisDescriptor.outlierDetection = outlierDetection;
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        if (!!this.madMedianOn) {
            if (!this.verifyMultiplier()) {
                return false;
            }
            let analysisDescriptor = new sage$1.AnalysisDescriptor();
            let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
            let analysisClass = sage$1.AnalysisDescriptor.AnalysisClass.OUTLIER_DETECTION;
            analysisDescriptor.analysisClass = analysisClass;
            let outlierDetection = new sage$1.AnalysisDescriptor.OutlierDetection();
            let theMultiplier = this.getMultiplier();
            analysisAlgorithm.type = sage$1.AnalysisAlgorithm.Type.MAD_MEDIAN;
            let madMedian = new sage$1.AnalysisAlgorithm.MadMedian();
            madMedian.minRows = Math.floor(this.minRows);
            madMedian.multiplier = theMultiplier;
            analysisAlgorithm.madMedian = madMedian;
            outlierDetection.algorithm = analysisAlgorithm;
            analysisDescriptor.outlierDetection = outlierDetection;
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        if (!!this.shesdOn) {
            if (!this.verifyMultiplier()) {
                return false;
            }
            let analysisDescriptor = new sage$1.AnalysisDescriptor();
            let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
            let analysisClass = sage$1.AnalysisDescriptor.AnalysisClass.OUTLIER_DETECTION;
            analysisDescriptor.analysisClass = analysisClass;
            let outlierDetection = new sage$1.AnalysisDescriptor.OutlierDetection();
            let theMultiplier = this.getMultiplier();
            analysisAlgorithm.type = sage$1.AnalysisAlgorithm.Type.SHESD;
            let shesd = new sage$1.AnalysisAlgorithm.SeasonalHybridESD();
            shesd.minRows = Math.floor(this.minRows);
            analysisAlgorithm.shesd = shesd;
            outlierDetection.algorithm = analysisAlgorithm;
            analysisDescriptor.outlierDetection = outlierDetection;
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        if (!!this.classificationOn) {
            let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
            analysisAlgorithm.type =
                sage$1.AnalysisAlgorithm.Type.ANOMALY_EXPLANATION;
            let descAnomalyExplanation = new sage$1.AnalysisDescriptor.AnomalyExplanation();
            descAnomalyExplanation.algorithm = analysisAlgorithm;
            let algoAnomalyExplanation = new sage$1.AnalysisAlgorithm.AnomalyExplanation();
            algoAnomalyExplanation.minRows = Math.floor(this.minRows);
            analysisAlgorithm.anomalyExplanation = algoAnomalyExplanation;
            let selectedColumns = this.classificationBindingComponent.getSelectedColumns();
            if (!this.verifyClassificationSelectedColumns(selectedColumns)) {
                return false;
            }
            let headers = getHeadersFromA3Request(this.a3AnalysisRequest, false /* onlyNumericColumns */);
            let columnBindings = getAnomalyExplanationColumnBindings(selectedColumns);
            if (!columnBindings) {
                return false;
            }
            Array.prototype.push.apply(descAnomalyExplanation.columnBinding, columnBindings);
            let analysisDescriptor = new sage$1.AnalysisDescriptor();
            let analysisClass = sage$1.AnalysisDescriptor.AnalysisClass.ANOMALY_EXPLANATION;
            analysisDescriptor.analysisClass = analysisClass;
            analysisDescriptor.anomalyExplanation = descAnomalyExplanation;
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        if (!!this.linearRegressionOn) {
            if (!this.verifyMultiplier()) {
                return false;
            }
            if (!this.verifyPValueThreshold()) {
                return false;
            }
            let analysisDescriptor = new sage$1.AnalysisDescriptor();
            let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
            let analysisClass = sage$1.AnalysisDescriptor.AnalysisClass.OUTLIER_DETECTION;
            analysisDescriptor.analysisClass = analysisClass;
            let outlierDetection = new sage$1.AnalysisDescriptor.OutlierDetection();
            let theMultiplier = this.getMultiplier();
            analysisAlgorithm.type = sage$1.AnalysisAlgorithm.Type.LINEAR_REGRESSION;
            let linearRegression = new sage$1.AnalysisAlgorithm.LinearRegression();
            linearRegression.minRows = Math.floor(this.minRows);
            linearRegression.multiplier = theMultiplier;
            linearRegression.pValueThreshold = this.pValueThreshold;
            analysisAlgorithm.linearRegression = linearRegression;
            outlierDetection.algorithm = analysisAlgorithm;
            analysisDescriptor.outlierDetection = outlierDetection;
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        if (!!this.insightSettingsOn) {
            this.maxInsightOpts.populateAnalysisParam(analysisParam);
        }
        return this.setAnalysisRequest(analysisParam);
    }
    setAnalysisRequest(analysisParam /* sage.AnalysisParam */) {
        /* To be implemented in child classes */
        return false;
    }
    updateDataAnalysis() {
        let analysisParam = new sage$1.AnalysisParam();
        let analysisDescriptor = new sage$1.AnalysisDescriptor();
        let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
        analysisParam.excludeNull = this.excludeNull;
        analysisParam.excludeZeroMeasure = this.excludeZeroMeasure;
        analysisParam.autotuneDateBoundary = this.autotuneDateBoundary;
        if (!this.verifyMaxDiffElements() ||
            !this.verifyMaxFraction() ||
            !this.verifyMinAbsChangeRatio() ||
            !this.verifyMinChangeRatio()) {
            return false;
        }
        if (this.changeAnalysisOn) {
            let diffExplanation = new sage$1.AnalysisDescriptor.DiffExplanation();
            let absDiffMajority = new sage$1.AnalysisAlgorithm.AbsDiffMajority();
            absDiffMajority.maxDiffElements = Math.floor(this.maxDiffElements);
            absDiffMajority.maxFraction = this.maxFraction;
            absDiffMajority.minAbsChangeRatio = this.minAbsChangeRatio;
            absDiffMajority.minChangeRatio = this.minChangeRatio;
            analysisAlgorithm.absDiffMajority = absDiffMajority;
            analysisAlgorithm.type = sage$1.AnalysisAlgorithm.Type.ABS_DIFF_MAJORITY;
            diffExplanation.algorithm = analysisAlgorithm;
            analysisDescriptor.diffExplanation = diffExplanation;
            analysisDescriptor.analysisClass =
                sage$1.AnalysisDescriptor.AnalysisClass.DIFF_EXPLANATION;
        }
        if (this.classificationOn) {
            analysisAlgorithm.type =
                sage$1.AnalysisAlgorithm.Type.ANOMALY_EXPLANATION;
            let descAnomalyExplanation = new sage$1.AnalysisDescriptor.AnomalyExplanation();
            descAnomalyExplanation.algorithm = analysisAlgorithm;
            let algoAnomalyExplanation = new sage$1.AnalysisAlgorithm.AnomalyExplanation();
            algoAnomalyExplanation.minRows = Math.floor(this.minRows);
            analysisAlgorithm.anomalyExplanation = algoAnomalyExplanation;
            analysisDescriptor.anomalyExplanation = descAnomalyExplanation;
            analysisDescriptor.analysisClass =
                sage$1.AnalysisDescriptor.AnalysisClass.ANOMALY_EXPLANATION;
        }
        analysisParam.analysisDescriptor.push(analysisDescriptor);
        let dataAnalysis = this.a3AnalysisRequest.getDataAnalysis();
        dataAnalysis.setParam(analysisParam);
        this.a3AnalysisRequest.setDataAnalysis(dataAnalysis);
        return true;
    }
    updateAnomalyExplanationAnalysis() {
        if (!this.verifyMinRows()) {
            return false;
        }
        let analysisParam = new sage$1.AnalysisParam();
        let analysisDescriptor = new sage$1.AnalysisDescriptor();
        let analysisAlgorithm = new sage$1.AnalysisAlgorithm();
        let anomalyExplanationAlgorithm = new sage$1.AnalysisAlgorithm.AnomalyExplanation();
        let anomalyExplanation = new sage$1.AnalysisDescriptor.AnomalyExplanation();
        let analysisClass = sage$1.AnalysisDescriptor.AnalysisClass.ANOMALY_EXPLANATION;
        analysisParam.excludeNull = this.excludeNull;
        analysisParam.excludeZeroMeasure = this.excludeZeroMeasure;
        analysisParam.autotuneDateBoundary = this.autotuneDateBoundary;
        analysisAlgorithm.type = sage$1.AnalysisAlgorithm.Type.ANOMALY_EXPLANATION;
        analysisDescriptor.analysisClass = analysisClass;
        anomalyExplanationAlgorithm.minRows = Math.floor(this.minRows);
        analysisAlgorithm.anomalyExplanation = anomalyExplanationAlgorithm;
        anomalyExplanation.algorithm = analysisAlgorithm;
        let selectedColumns = this.anomalyExplanationBindingComponent.getSelectedColumns();
        let headers = getHeadersFromA3Request(this.a3AnalysisRequest, false /* onlyNumericColumns */);
        let columnBindings = getAnomalyExplanationColumnBindings(selectedColumns);
        if (!columnBindings) {
            return false;
        }
        Array.prototype.push.apply(anomalyExplanation.columnBinding, columnBindings);
        analysisDescriptor.anomalyExplanation = anomalyExplanation;
        analysisParam.analysisDescriptor.push(analysisDescriptor);
        return this.setAnalysisRequest(analysisParam);
    }
    verifyMaxDiffElements() {
        return this.verifyNumber(strings.a3.Max_Diff_Elements, this.maxDiffElements);
    }
    verifyMaxFraction() {
        return this.verifyNumber(strings.a3.Max_Fraction, this.maxFraction);
    }
    verifyMinRows() {
        return this.verifyNumber(strings.a3.Min_Rows, this.minRows);
    }
    verifyMinAbsChangeRatio() {
        return this.verifyNumber(strings.a3.Min_Abs_Change_Ratio, this.minAbsChangeRatio);
    }
    verifyMultiplier() {
        let theNumber = this.getMultiplier();
        if (theNumber === -1) {
            return true;
        }
        return this.verifyNumber(strings.a3.Multiplier, theNumber);
    }
    getMultiplier() {
        if (this.multiplier === '' || this.multiplier === 'undefined') {
            return -1;
        }
        return parseFloat(this.multiplier);
    }
    verifyMinChangeRatio() {
        return this.verifyNumber(strings.a3.Min_Change_Ratio, this.minChangeRatio);
    }
    verifyPValueThreshold() {
        return this.verifyNumber(strings.a3.P_Value_Threshold, this.pValueThreshold);
    }
    verifyCorrelationCoefficient() {
        return this.verifyNumber(strings.a3.Correlation_Coefficient, this.minCorrelationCoefficient);
    }
    verifyMinRelativeDifference() {
        return this.verifyNumber(strings.a3.Min_Relative_Difference, this.minRelativeDifference);
    }
    verifyMaxLag() {
        return this.verifyNumber(strings.a3.Max_Lag, this.maxLag);
    }
    verifyNumClusters() {
        return this.verifyNumber(strings.a3.Num_Clusters, this.numClusters);
    }
    verifyRScript(rScript) {
        if (!rScript || rScript === '') {
            this.isInputInvalid = true;
            this.invalidInputMessageString = this.strings.a3.customAnalysis.rScriptCannotBeEmpty;
            return false;
        }
        let outputFile = '#output_file#';
        if (!this.verifyScriptHasBoundary(rScript, outputFile)) {
            this.isInputInvalid = true;
            return false;
        }
        return true;
    }
    verifycolumnBindings(columnBindings) {
        if (!columnBindings || columnBindings.length === 0) {
            this.isInputInvalid = true;
            this.invalidInputMessageString =
                this.strings.a3.customAnalysis.provideMissingColumnName;
            return false;
        }
        return true;
    }
    verifyScriptHasBoundary(rScript, boundary) {
        if (!rScript.includes(boundary)) {
            this.isInputInvalid = true;
            this.invalidInputMessageString = stringUtil_1(this.strings.a3.customAnalysis.rScriptInvalidFormat, boundary);
            return false;
        }
        return true;
    }
    verifyKmeansSelectedColumns(selectedColumns) {
        if (!selectedColumns || selectedColumns.length !== 2) {
            this.isInputInvalid = true;
            this.invalidInputMessageString = this.strings.a3.K_Means_Insufficient_Columns;
            return false;
        }
        return true;
    }
    verifyClassificationSelectedColumns(selectedColumns) {
        if (!selectedColumns || selectedColumns.length !== 1) {
            this.isInputInvalid = true;
            this.invalidInputMessageString = this.strings.a3.Classification_Invalid_Column_Count;
            return false;
        }
        return true;
    }
    toggleInsightCountSettings() {
        this.insightSettingsOn = !this.insightSettingsOn;
    }
    populateRScript(analysisParam) {
        let rScript = this.rScript;
        let columnBindings = [];
        if (!!this.customROn) {
            if (!this.verifyRScript(rScript)) {
                return false;
            }
            columnBindings = this.customRBindingsComponent.getColumnBindings();
            if (!this.verifycolumnBindings(columnBindings)) {
                return false;
            }
            let unselectedColumns = this.customRBindingsComponent.getUnselectedColumns();
            let customRAnalysis = getCustomRAnalysis(rScript, columnBindings, unselectedColumns);
            if (!!this.pngOutput) {
                customRAnalysis.setROutputType(sage$1.AnalysisDescriptor.CustomRAnalysis.ROutputType.PNG);
            }
            else if (!!this.csvOutput) {
                customRAnalysis.setROutputType(sage$1.AnalysisDescriptor.CustomRAnalysis.ROutputType.CSV);
            }
            let analysisDescriptor = getCustomRAnalysisDescriptor(customRAnalysis);
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        if (!!this.kMeansOn) {
            if (!this.verifyNumClusters()) {
                return false;
            }
            let selectedColumns = this.kMeansBindingComponent.getSelectedColumns();
            if (!this.verifyKmeansSelectedColumns(selectedColumns)) {
                return false;
            }
            let headers = getHeadersFromA3Request(this.a3AnalysisRequest, false /* onlyNumericColumns */);
            columnBindings = getKMeansColumnBindings(selectedColumns, headers);
            if (!columnBindings) {
                return false;
            }
            rScript = getKMeansClusterScript(this.numClusters, columnBindings, selectedColumns);
            let unselectedColumns = this.customRBindingsComponent.getUnselectedColumns();
            let customRAnalysis = getCustomRAnalysis(rScript, columnBindings, unselectedColumns);
            customRAnalysis.setROutputType(sage$1.AnalysisDescriptor.CustomRAnalysis.ROutputType.PNG);
            let analysisDescriptor = getCustomRAnalysisDescriptor(customRAnalysis);
            analysisParam.analysisDescriptor.push(analysisDescriptor);
            rScript = getKMeansCsvScript(this.numClusters, columnBindings, selectedColumns);
            if (!this.verifyRScript(rScript)) {
                return false;
            }
            unselectedColumns = this.customRBindingsComponent.getUnselectedColumns();
            customRAnalysis = getCustomRAnalysis(rScript, columnBindings, unselectedColumns);
            customRAnalysis.setROutputType(sage$1.AnalysisDescriptor.CustomRAnalysis.ROutputType.CSV);
            analysisDescriptor = getCustomRAnalysisDescriptor(customRAnalysis);
            analysisParam.analysisDescriptor.push(analysisDescriptor);
        }
        return true;
    }
    initializeDefaults() {
        this.minRows = 5;
        this.multiplier = '';
        this.maxLag = 50;
        this.minCorrelationCoefficient = 0.7;
        this.maxCorrelationCoefficient = 0.98;
        this.pValueThreshold = 0.05;
        this.minRelativeDifference = 5;
        this.stdevMeanOn = false;
        this.madMedianOn = false;
        this.shesdOn = false;
        this.trendAnalysisOn = false;
        this.crossCorrelationOn = false;
        this.linearRegressionOn = false;
        this.customROn = false;
        this.kMeansOn = false;
        this.numClusters = 3;
        this.rScript = '';
        this.pngOutput = true;
        this.csvOutput = false;
    }
    initStdevMeanCheckBox() {
        this.stdevMeanCheckbox = new CheckboxComponent$1({
            label: strings.a3.Z_SCORE_OUTLIER_DETECTION,
            stateGetter: () => this.stdevMeanOn,
            onClick: ($event) => {
                this.stdevMeanOn = !this.stdevMeanOn;
                if (!!this.stdevMeanOn) {
                    this.madMedianOn = false;
                    this.kMeansOn = false;
                    this.customROn = false;
                    this.classificationOn = false;
                }
            },
        });
    }
    initMadMedianCheckBox() {
        this.madMedianCheckbox = new CheckboxComponent$1({
            label: strings.a3.MEDIAN_Z_SCORE_OUTLIER_DETECTION,
            stateGetter: () => this.madMedianOn,
            onClick: ($event) => {
                this.madMedianOn = !this.madMedianOn;
                if (!!this.madMedianOn) {
                    this.stdevMeanOn = false;
                    this.kMeansOn = false;
                    this.customROn = false;
                    this.classificationOn = false;
                }
            },
        });
    }
    initSHESDCheckBox() {
        this.shesdCheckbox = new CheckboxComponent$1({
            label: strings.a3.SHESD_OUTLIER_DETECTION,
            stateGetter: () => this.shesdOn,
            onClick: ($event) => {
                this.shesdOn = !this.shesdOn;
                if (!!this.shesdOn) {
                    this.kMeansOn = false;
                    this.customROn = false;
                    this.classificationOn = false;
                }
            },
        });
    }
    initLinearRegressionCheckBox() {
        this.linearRegressionCheckbox = new CheckboxComponent$1({
            label: strings.a3.LINEAR_REGRESSION_OUTLIER_DETECTION,
            stateGetter: () => this.linearRegressionOn,
            onClick: ($event) => {
                this.linearRegressionOn = !this.linearRegressionOn;
                if (!!this.linearRegressionOn) {
                    this.kMeansOn = false;
                    this.customROn = false;
                    this.classificationOn = false;
                }
            },
        });
    }
    initTrendAnalysisCheckBox() {
        this.trendAnalysisCheckbox = new CheckboxComponent$1({
            label: strings.a3.TREND_ANALYSIS,
            stateGetter: () => this.trendAnalysisOn,
            onClick: ($event) => {
                this.trendAnalysisOn = !this.trendAnalysisOn;
                if (!!this.trendAnalysisOn) {
                    this.kMeansOn = false;
                    this.customROn = false;
                    this.classificationOn = false;
                }
            },
        });
    }
    initCrossCorrelationCheckBox() {
        this.crossCorrelationCheckbox = new CheckboxComponent$1({
            label: strings.a3.CROSS_CORRELATION,
            stateGetter: () => this.crossCorrelationOn,
            onClick: ($event) => {
                this.crossCorrelationOn = !this.crossCorrelationOn;
                if (!!this.crossCorrelationOn) {
                    this.kMeansOn = false;
                    this.customROn = false;
                    this.classificationOn = false;
                }
            },
        });
    }
    initCustomRCheckBox() {
        this.customRCheckbox = new CheckboxComponent$1({
            label: strings.a3.CUSTOM_SCRIPT,
            stateGetter: () => this.customROn,
            onClick: ($event) => {
                this.customROn = !this.customROn;
                if (!!this.customROn) {
                    this.kMeansOn = false;
                    this.stdevMeanOn = false;
                    this.madMedianOn = false;
                    this.shesdOn = false;
                    this.linearRegressionOn = false;
                    this.trendAnalysisOn = false;
                    this.crossCorrelationOn = false;
                    this.classificationOn = false;
                }
            },
        });
    }
    initKMeansCheckBox() {
        this.kMeansCheckbox = new CheckboxComponent$1({
            label: strings.a3.K_MEANS_CLUSTERING,
            stateGetter: () => this.kMeansOn,
            onClick: ($event) => {
                this.kMeansOn = !this.kMeansOn;
                if (!!this.kMeansOn) {
                    this.customROn = false;
                    this.stdevMeanOn = false;
                    this.madMedianOn = false;
                    this.shesdOn = false;
                    this.linearRegressionOn = false;
                    this.trendAnalysisOn = false;
                    this.crossCorrelationOn = false;
                    this.classificationOn = false;
                }
            },
        });
    }
    initChangeAnalysisCheckBox() {
        this.changeAnalysisCheckbox = new CheckboxComponent$1({
            label: strings.a3.CHANGE_ANALYSIS,
            stateGetter: () => this.changeAnalysisOn,
            onClick: ($event) => {
                this.changeAnalysisOn = !this.changeAnalysisOn;
                if (!!this.changeAnalysisOn) {
                    this.classificationOn = false;
                }
            },
        });
    }
    initClassificationCheckBox() {
        this.classificationCheckbox = new CheckboxComponent$1({
            label: strings.a3.CLASSIFICATION,
            stateGetter: () => this.classificationOn,
            onClick: ($event) => {
                this.classificationOn = !this.classificationOn;
                if (!!this.classificationOn) {
                    this.kMeansOn = false;
                    this.customROn = false;
                    this.stdevMeanOn = false;
                    this.madMedianOn = false;
                    this.shesdOn = false;
                    this.linearRegressionOn = false;
                    this.trendAnalysisOn = false;
                    this.crossCorrelationOn = false;
                    this.changeAnalysisOn = false;
                }
            },
        });
    }
    initExcludeNullCheckBox() {
        this.excludeNullCheckbox = new CheckboxComponent$1({
            label: strings.preferences.a3.excludeNullFromThisAnalysis,
            stateGetter: () => this.excludeNull,
            onClick: ($event) => {
                this.excludeNull = !this.excludeNull;
            },
        });
    }
    initExcludeZeroMeasureCheckBox() {
        this.excludeZeroMeasureCheckbox = new CheckboxComponent$1({
            label: strings.preferences.a3.excludeZeroMeasureFromThisAnalysis,
            stateGetter: () => this.excludeZeroMeasure,
            onClick: ($event) => {
                this.excludeZeroMeasure = !this.excludeZeroMeasure;
            },
        });
    }
    initAutotuneDateBoundaryCheckBox() {
        this.autotuneDateBoundaryCheckbox = new CheckboxComponent$1({
            label: strings.preferences.a3.autotuneDateBoundaryFromThisAnalysis,
            stateGetter: () => this.autotuneDateBoundary,
            onClick: ($event) => {
                this.autotuneDateBoundary = !this.autotuneDateBoundary;
            },
        });
    }
    initPngOutputCheckbox() {
        this.pngOutputCheckbox = new CheckboxComponent$1({
            label: strings.a3.PNG,
            stateGetter: () => this.pngOutput,
            onClick: ($event) => {
                this.pngOutput = !this.pngOutput;
                this.csvOutput = !this.pngOutput;
            },
        });
    }
    initCsvOutputCheckbox() {
        this.csvOutputCheckbox = new CheckboxComponent$1({
            label: strings.a3.CSV,
            stateGetter: () => this.csvOutput,
            onClick: ($event) => {
                this.csvOutput = !this.csvOutput;
                this.pngOutput = !this.csvOutput;
            },
        });
    }
    initA3Thresholds() {
        this.maxLag = this.a3Preference.getMaxLag();
        this.minCorrelationCoefficient = this.a3Preference.getMinCorrCoeff();
        this.maxCorrelationCoefficient = this.a3Preference.getMaxCorrCoeff();
        this.pValueThreshold = this.a3Preference.getPValueThreshold();
        this.minRelativeDifference = this.a3Preference.getMinRelativeDiff();
    }
    initExcludeNullFromPreference() {
        this.excludeNull = this.a3Preference.getExcludeNull();
    }
    initExcludeZeroMeasureFromPreference() {
        this.excludeZeroMeasure = this.a3Preference.getExcludeZeroMeasure();
    }
    initAutotuneDateBoundaryFromPreference() {
        this.autotuneDateBoundary = this.a3Preference.getAutotuneDateBoundary();
    }
    initTooltips() {
        this.algorithmSelectionTooltip = new InfoButtonTooltip(this.strings.a3.Algorithm_Selection_Tooltip);
        this.refineParametersTooltip = new InfoButtonTooltip(this.strings.a3.Refine_Parameters_Tooltip);
        this.insightCountsTooltip = new InfoButtonTooltip(this.strings.a3.Insight_Count_Settings_Tooltip);
    }
    postOpenInfoCardProperties() {
        collectEvent(new UserAction$1(UserAction$1.OPEN_CUSTOM_R_INFOCARD), {});
    }
    getParametersHeader() {
        if (this.customROn) {
            return this.strings.a3.CUSTOM_SCRIPT;
        }
        else {
            return this.strings.a3.Refine_Parameters;
        }
    }
};
A3AlgorithmBaseCustomizerComponent = __decorate$3([
    Component({
        name: 'bkA3AlgorithmBaseCustomizer',
        templateUrl: 'src/modules/a3/a3-algorithm-base-customizer/a3-algorithm-base-customizer.html'
    })
], A3AlgorithmBaseCustomizerComponent);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Antony Chen (antony.chen@thoughtspot.com)
 *
 * @fileoverview This component contains customization options found in the max_insights_opts proto.
 *
 */
/**
 * Max Insight Opts component
 */
let A3MaxInsightOpts = class A3MaxInsightOpts extends BaseComponent$1 {
    constructor(a3AnalysisRequest, a3AlgorithmCustomizerComponent, isTableAnalysis) {
        super();
        this.allCrossCorrelationPairsCheckbox = null;
        this.allCrossCorrelationPairs = false;
        this.options = [
            {
                label: strings.a3.Max_Measures,
                name: 'max_measures',
                prop: 'maxMeasures',
                tooltip: strings.a3.Max_Measures_Tooltip,
                onChange: () => {
                    this.algorithmCustomizer.setMaxColumnsOrAttributesChanged(true);
                    this.verifyMaxMeasures();
                },
                shouldShow: () => true
            },
            {
                label: strings.a3.Max_Attributes,
                name: 'max_attributes',
                prop: 'maxAttributes',
                tooltip: strings.a3.Max_Attributes_Tooltip,
                onChange: () => {
                    this.algorithmCustomizer.setMaxColumnsOrAttributesChanged(true);
                    this.verifyMaxAttributes();
                },
                shouldShow: () => true
            },
            {
                label: strings.a3.Max_Anomaly_Insights,
                name: 'max_anomaly',
                prop: 'maxAnomaly',
                tooltip: strings.a3.Max_Anomaly_Insights_Tooltip,
                onChange: () => this.verifyMaxAnomaly(),
                shouldShow: () => {
                    return !!this.algorithmCustomizer.getStdevMeanOn()
                        || !!this.algorithmCustomizer.getMadMedianOn();
                }
            },
            {
                label: strings.a3.Max_Seasonality_Detection_Anomaly_Insights,
                prop: 'maxSeasonalityDetectionAnomaly',
                tooltip: strings.a3.Max_Seasonality_Detection_Anomaly_Insights_Tooltip,
                onChange: () => this.verifyMaxSeasonalityDetectionAnomaly(),
                shouldShow: () => !!this.algorithmCustomizer.getShesdOn()
            },
            {
                label: strings.a3.Max_Linear_Regression_Anomaly_Insights,
                prop: 'maxLinearRegressionAnomaly',
                tooltip: strings.a3.Max_Linear_Regression_Anomaly_Insights_Tooltip,
                onChange: () => this.verifyMaxLinearRegressionAnomaly(),
                shouldShow: () => !!this.algorithmCustomizer.getLinearRegressionOn()
            },
            {
                label: strings.a3.Max_Trend_Insights,
                name: 'max_trend',
                prop: 'maxTrend',
                tooltip: strings.a3.Max_Trend_Insights_Tooltip,
                onChange: () => this.verifyMaxTrend(),
                shouldShow: () => !!this.algorithmCustomizer.getTrendAnalysisOn()
            },
            {
                label: strings.a3.Max_Cross_Correlation_Insights,
                name: 'max_cross_correlation',
                prop: 'maxCrossCorrelation',
                tooltip: strings.a3.Max_Cross_Correlation_Insights_Tooltip,
                onChange: () => this.verifyMaxCrossCorrelation(),
                shouldShow: () => !!this.algorithmCustomizer.getCrossCorrelationOn()
            }
        ];
        this.a3AnalysisRequest = a3AnalysisRequest;
        this.algorithmCustomizer = a3AlgorithmCustomizerComponent;
        this.initializeDefaults(isTableAnalysis);
        this.initAllCrossCorrelationPairsCheckBox();
        this.initOptionControls();
    }
    populateAnalysisParam(analysisParam) {
        if (!this.verifyMaxMeasures()) {
            return false;
        }
        if (!this.verifyMaxAttributes()) {
            return false;
        }
        if (!this.verifyMaxTrend()) {
            return false;
        }
        if (!this.verifyMaxCrossCorrelation()) {
            return false;
        }
        if (!this.verifyMaxAnomaly()) {
            return false;
        }
        if (!this.verifyMaxSeasonalityDetectionAnomaly()) {
            return false;
        }
        if (!this.verifyMaxLinearRegressionAnomaly()) {
            return false;
        }
        let maxInsightOptions = new sage$1.MaxInsightOptions();
        maxInsightOptions.maxMeasures = this.maxMeasures;
        maxInsightOptions.maxDrillAttributes = this.maxAttributes;
        maxInsightOptions.maxTrends = this.maxTrend;
        maxInsightOptions.maxCrossCorrelationInsights = this.maxCrossCorrelation;
        maxInsightOptions.crossCorrelationAllPairs = this.allCrossCorrelationPairs;
        maxInsightOptions.maxAnomalies = this.maxAnomaly;
        maxInsightOptions.maxShesdAnomalies = this.maxSeasonalityDetectionAnomaly;
        maxInsightOptions.maxLrAnomalies = this.maxLinearRegressionAnomaly;
        analysisParam.setMaxInsightsOpts(maxInsightOptions);
        return true;
    }
    populateValuesFromA3Request(analysisParam) {
        if (!analysisParam || !analysisParam.getMaxInsightsOpts()) {
            return;
        }
        let maxInsightOptions = analysisParam.getMaxInsightsOpts();
        this.maxMeasures = maxInsightOptions.getMaxMeasures();
        this.maxAttributes = maxInsightOptions.getMaxDrillAttributes();
        this.maxTrend = maxInsightOptions.getMaxTrends();
        this.maxCrossCorrelation = maxInsightOptions.getMaxCrossCorrelationInsights();
        this.allCrossCorrelationPairs = maxInsightOptions.getCrossCorrelationAllPairs();
        this.maxAnomaly = maxInsightOptions.getMaxAnomalies();
        this.maxSeasonalityDetectionAnomaly =
            maxInsightOptions.getMaxShesdAnomalies();
        this.maxLinearRegressionAnomaly = maxInsightOptions.getMaxLrAnomalies();
        this.initOptionControls();
    }
    initializeDefaults(isTableAnalysis) {
        if (!!isTableAnalysis) {
            this.maxAnomaly = 25;
            this.maxSeasonalityDetectionAnomaly = 6;
            this.maxLinearRegressionAnomaly = 6;
            this.maxTrend = 6;
            this.maxCrossCorrelation = 6;
            this.maxMeasures = 6;
        }
        else {
            this.maxAnomaly = 20;
            this.maxSeasonalityDetectionAnomaly = 3;
            this.maxLinearRegressionAnomaly = 3;
            this.maxTrend = 3;
            this.maxCrossCorrelation = 3;
            this.maxMeasures = 3;
        }
        this.maxAttributes = 10;
        this.allCrossCorrelationPairs = false;
    }
    initAllCrossCorrelationPairsCheckBox() {
        this.allCrossCorrelationPairsCheckbox = new CheckboxComponent$1({
            hideTooltip: true,
            label: strings.a3.All_Cross_Correlation_Pairs,
            stateGetter: () => this.allCrossCorrelationPairs,
            onClick: ($event) => {
                this.allCrossCorrelationPairs = !this.allCrossCorrelationPairs;
            },
        });
    }
    verifyMaxAnomaly() {
        return this.algorithmCustomizer
            .verifyNumber(strings.a3.Max_Anomaly_Insights, this.maxAnomaly);
    }
    verifyMaxSeasonalityDetectionAnomaly() {
        return this.algorithmCustomizer
            .verifyNumber(strings.a3.Max_Seasonality_Detection_Anomaly_Insights, this.maxSeasonalityDetectionAnomaly);
    }
    verifyMaxLinearRegressionAnomaly() {
        return this.algorithmCustomizer
            .verifyNumber(strings.a3.Max_Linear_Regression_Anomaly_Insights, this.maxLinearRegressionAnomaly);
    }
    verifyMaxTrend() {
        return this.algorithmCustomizer.verifyNumber(strings.a3.Max_Trend_Insights, this.maxTrend);
    }
    verifyMaxCrossCorrelation() {
        return this.algorithmCustomizer.verifyNumber(strings.a3.Max_Cross_Correlation_Insights, this.maxCrossCorrelation);
    }
    verifyMaxMeasures() {
        return this.algorithmCustomizer.verifyNumber(strings.a3.Max_Measures, this.maxMeasures);
    }
    verifyMaxAttributes() {
        return this.algorithmCustomizer.verifyNumber(strings.a3.Max_Attributes, this.maxAttributes);
    }
    initOptionControls() {
        this.optionControls = this.options.map((config) => {
            return new A3PreferencesInput({
                label: config.label,
                name: config.name || config.prop,
                show: () => config.shouldShow(),
                tooltip: !!config.tooltip ? config.tooltip : null,
                initialValue: this[config.prop],
                onChange: (val) => {
                    this[config.prop] = val;
                    config.onChange();
                }
            });
        });
    }
};
A3MaxInsightOpts = __decorate$3([
    Component({
        name: 'bkA3MaxInsightOpts',
        templateUrl: 'src/modules/a3/a3-algorithm-customizer/a3-max-insight-opts/a3-max-insight-opts.html'
    })
], A3MaxInsightOpts);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Gunjan Jha (gunjan.jha@thoughtspot.com)
 *
 * @fileoverview This component customizes the algorithm for
 * a3 analysis.
 *
 */
/**
 * Algorithm customizer component
 */
let A3AlgorithmCustomizerComponent = class A3AlgorithmCustomizerComponent extends A3AlgorithmBaseCustomizerComponent {
    constructor(a3AnalysisRequest, isTable, allColumns, a3AnalysisCustomizerComponent) {
        super();
        this.maxColumnsOrAttributesChanged = false;
        this.a3AnalysisRequest = a3AnalysisRequest;
        this.a3AnalysisCustomizerComponent = a3AnalysisCustomizerComponent;
        this.maxInsightOpts = new A3MaxInsightOpts(this.a3AnalysisRequest, this, 
        /* isTableAnalysis */ !!isTable);
        this.isA3Table = isTable;
        this.isA3Viz = isVizAnalysis(this.a3AnalysisRequest) || isTable;
        this.isA3AnomalyExplanation =
            isAnomalyExplanationAnalysis(this.a3AnalysisRequest);
        if (!!this.isA3Viz) {
            this.visualizationAnalysis = a3AnalysisRequest.getVisualizationAnalysis();
        }
        if (!!this.isA3AnomalyExplanation) {
            this.anomalyExplanationAnalysis =
                a3AnalysisRequest.getAnomalyExplanationAnalysis();
        }
        this.isA3Diff = isDiffAnalysis(this.a3AnalysisRequest);
        this.rInfoCardComponent = new RanalysisInfoCardComponent();
        this.infoCardIconComponent = new InfoCardIconComponent(this.rInfoCardComponent);
        this.rInfoCardComponent.toggleInfoCardActiveCallback = () => {
            this.infoCardIconComponent.toggleCardActive();
        };
        this.initColumnSelector(allColumns);
        this.initCurrentDataOnlyCheckbox();
        this.initializeDiffDefaults();
        this.initialize();
    }
    setMaxColumnsOrAttributesChanged(maxColumnsOrAttributesChanged) {
        this.a3AnalysisCustomizerComponent.setMax3AnalysisCustomizerComponent(maxColumnsOrAttributesChanged);
    }
    initCurrentDataOnlyCheckbox() {
        if (!!this.visualizationAnalysis) {
            this.currentDataOnly = this.visualizationAnalysis.getAnalyzeCurrentData()
                === sage$1.VisualizationAnalysisRequest.CurrentDataOptions.CURRENT_ONLY;
        }
        this.currentDataOnlyCheckbox = new CheckboxComponent$1({
            label: strings.a3.currentDataOnly,
            stateGetter: () => this.currentDataOnly,
            onClick: ($event) => {
                this.currentDataOnly = !this.currentDataOnly;
            },
        });
    }
    setAnalysisRequest(analysisParam) {
        const requestType = this.a3AnalysisRequest.getType();
        if (requestType === sage$1.A3AnalysisType.E.VISUALIZATION) {
            let visualizationAnalysis = this.a3AnalysisRequest.getVisualizationAnalysis();
            if (!this.visualizationAnalysis) {
                return false;
            }
            visualizationAnalysis.setParam(analysisParam);
            if (this.currentDataOnly) {
                visualizationAnalysis.setAnalyzeCurrentData(sage$1.VisualizationAnalysisRequest
                    .CurrentDataOptions.CURRENT_ONLY);
            }
            else {
                visualizationAnalysis.setAnalyzeCurrentData(sage$1.VisualizationAnalysisRequest.CurrentDataOptions.INCLUDE);
            }
            this.a3AnalysisRequest.setVisualizationAnalysis(visualizationAnalysis);
            return true;
        }
        else if (requestType === sage$1.A3AnalysisType.E.ANOMALY_EXPLANATION) {
            if (!this.anomalyExplanationAnalysis) {
                return false;
            }
            this.anomalyExplanationAnalysis.setParam(analysisParam);
            this.a3AnalysisRequest.setAnomalyExplanationAnalysis(this.anomalyExplanationAnalysis);
            return true;
        }
        else if (requestType === sage$1.A3AnalysisType.E.DATA) {
            let dataAnalysis = this.a3AnalysisRequest.getDataAnalysis();
            if (!dataAnalysis) {
                return false;
            }
            dataAnalysis.setParam(analysisParam);
            this.a3AnalysisRequest.setDataAnalysis(dataAnalysis);
            return true;
        }
        else if (requestType === sage$1.A3AnalysisType.E.TABLE) {
            let tableAnalysis = this.a3AnalysisRequest.getTableAnalysis();
            if (!tableAnalysis) {
                return false;
            }
            tableAnalysis.setParam(analysisParam);
            this.a3AnalysisRequest.setTableAnalysis(tableAnalysis);
            return true;
        }
        return false;
    }
    populateValuesFromA3Request() {
        let analysisParam = new sage$1.AnalysisParam();
        const requestType = this.a3AnalysisRequest.getType();
        if (requestType === sage$1.A3AnalysisType.E.VISUALIZATION) {
            let visualizationAnalysis = this.a3AnalysisRequest.getVisualizationAnalysis();
            analysisParam = visualizationAnalysis.getParam();
            this.visualizationAnalysis = visualizationAnalysis;
            this.currentDataOnly = visualizationAnalysis.getAnalyzeCurrentData()
                === sage$1.VisualizationAnalysisRequest.CurrentDataOptions.CURRENT_ONLY;
        }
        else if (requestType === sage$1.A3AnalysisType.E.DATA) {
            let dataAnalysis = this.a3AnalysisRequest.getDataAnalysis();
            analysisParam = dataAnalysis.getParam();
        }
        else if (requestType === sage$1.A3AnalysisType.E.TABLE) {
            let tableAnalysis = this.a3AnalysisRequest.getTableAnalysis();
            analysisParam = tableAnalysis.getParam();
        }
        if (!!this.isA3Viz || !!this.isA3AnomalyExplanation) {
            this.populateVisualizationValues(analysisParam);
        }
        else if (!!this.isA3Diff) {
            let dataAnalysis = this.a3AnalysisRequest.getDataAnalysis();
            analysisParam = dataAnalysis.getParam();
            this.populateDiffValues(analysisParam);
        }
    }
    initializeDiffDefaults() {
        this.maxDiffElements = 10;
        this.maxFraction = 0.5;
        this.minAbsChangeRatio = 0.1;
        this.minChangeRatio = 0.1;
    }
    initColumnSelector(allColumns) {
        if (allColumns) {
            this.customRBindingsComponent = new CustomRBindingsComponent(allColumns);
            this.kMeansBindingComponent = new CustomRBindingsComponent(allColumns, null, this.strings.a3.SelectColumnsForKMeans);
            this.classificationBindingComponent = new CustomRBindingsComponent([allColumns[0]], allColumns.slice(1), this.strings.a3.SelectColumnForClassification, false, true);
        }
        else {
            let headers = getHeadersFromA3Request(this.a3AnalysisRequest, false /* onlyNumericColumns */);
            this.customRBindingsComponent = new CustomRBindingsComponent(headers);
            let selectedNumericHeaders = getHeadersFromA3Request(this.a3AnalysisRequest, true /* onlyNumericColumns */);
            let unselectedNumericHeaders = [];
            let selectedHeaders = [];
            let unselectedHeaders = [];
            if (selectedNumericHeaders.length > 2) {
                unselectedNumericHeaders = _$1.slice(selectedNumericHeaders, 2);
                selectedNumericHeaders = _$1.slice(selectedNumericHeaders, 0, 2);
            }
            if (headers.length) {
                selectedHeaders = _$1.slice(headers, 0, 1);
                unselectedHeaders = _$1.slice(headers, 1);
            }
            this.kMeansBindingComponent = new CustomRBindingsComponent(selectedNumericHeaders, unselectedNumericHeaders, this.strings.a3.SelectColumnsForKMeans);
            this.anomalyExplanationBindingComponent = new CustomRBindingsComponent(selectedNumericHeaders, unselectedNumericHeaders);
            this.classificationBindingComponent = new CustomRBindingsComponent(selectedHeaders, unselectedHeaders, this.strings.a3.SelectColumnForClassification, false, true);
        }
    }
};
A3AlgorithmCustomizerComponent = __decorate$3([
    Component({
        name: 'bkA3AlgorithmCustomizer',
        templateUrl: 'src/modules/a3/a3-algorithm-customizer/a3-algorithm-customizer.html'
    })
], A3AlgorithmCustomizerComponent);

/**
 * Copyright: ThoughtSpot Inc. 2012-2015
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Controller for widget showing checkbox with the specified name.
 */
let _logger$2 = logger_3('checkbox-collection-controller');
let CheckboxCollectionComponent = class CheckboxCollectionComponent extends BaseComponent$1 {
    constructor(checkboxCollection, onChange, isReadOnly, allowSelectAll, maximumSelectedItems = Number.POSITIVE_INFINITY, isSearchMode = false, maxSelectedItemInOtherSection, onSelectionChangeCb) {
        super();
        this.checkboxCollection = checkboxCollection;
        this.onChange = onChange;
        this.isReadOnly = isReadOnly;
        this.allowSelectAll = allowSelectAll;
        this.maximumSelectedItems = maximumSelectedItems;
        this.isSearchMode = isSearchMode;
        this.maxSelectedItemInOtherSection = maxSelectedItemInOtherSection;
        this.onSelectionChangeCb = onSelectionChangeCb;
        this.numSelectedItems = 0;
        this.selectedItemsKeys = {};
        this.checkboxCollection = checkboxCollection;
        this.inputOnChange = onChange;
        this.isReadOnly = !!isReadOnly;
        this.allowSelectAll = !!allowSelectAll && !this.isReadOnly;
        this.checkboxCollection.forEach((checkboxItem, index) => {
            const key = checkboxItem.id || index;
            if (checkboxItem.isChecked) {
                this.selectedItemsKeys[key] = true;
                this.numSelectedItems++;
            }
            else {
                this.selectedItemsKeys[key] = false;
            }
        });
        this.resetMaxSelectedItems(this.maxSelectedItemInOtherSection, this.maximumSelectedItems);
    }
    getSelectedItemKeys() {
        return _$1.cloneDeep(this.selectedItemsKeys);
    }
    resetMaxSelectedItems(value, maximumSelectionAllowed) {
        this.maxSelectedItemInOtherSection = value;
        this.disableUnselectedCheckBoxes = this.isSearchMode ?
            this.numSelectedItems >= maximumSelectionAllowed :
            this.maxSelectedItemInOtherSection + this.numSelectedItems >= maximumSelectionAllowed;
        this.init();
    }
    init() {
        this.initCheckboxControllers();
        this.initSelectAllCBCtrl();
    }
    initCheckboxControllers() {
        this.checkboxItemCtrls = this.checkboxCollection.map((checkboxItem, index) => {
            const key = checkboxItem.id || index;
            const checkbox = new CheckboxComponent$1({
                id: key,
                label: checkboxItem.title,
                stateGetter: () => this.selectedItemsKeys[key],
                isReadOnly: this.isCheckBoxReadOnly(key),
                onClick: ($event) => {
                    this.onSingleCheckboxChange(checkboxItem.title, !this.selectedItemsKeys[key], key, false);
                },
            });
            return checkbox;
        });
    }
    initSelectAllCBCtrl() {
        if (this.allowSelectAll) {
            this.selectAllCBCtrl = new CheckboxComponent$1({
                label: strings.ALL,
                stateGetter: () => (this.numSelectedItems > 0),
                onClick: ($event) => {
                    this.onSelectAllToggle(this.numSelectedItems === 0);
                },
            });
        }
    }
    onSingleCheckboxChange(title, newState, id, shouldInitSelectAllCtrl) {
        if (newState) {
            this.selectedItemsKeys[id] = true;
            this.numSelectedItems++;
            if (this.onSelectionChangeCb) {
                this.onSelectionChangeCb(this.numSelectedItems);
            }
        }
        else {
            this.selectedItemsKeys[id] = false;
            this.numSelectedItems--;
            if (this.onSelectionChangeCb) {
                this.onSelectionChangeCb(this.numSelectedItems);
            }
        }
        if (_$1.isFinite(this.maximumSelectedItems)) {
            this.shouldDisbaleUnselectedCheckBoxes(this.numSelectedItems);
        }
        this.inputOnChange(title, newState, id);
        if (!!shouldInitSelectAllCtrl) {
            this.initSelectAllCBCtrl();
        }
    }
    onSelectAllToggle(newState) {
        if (newState && this.numSelectedItems > 0) {
            _logger$2.error('Select all cannot be checked when there is any selection present');
            return;
        }
        if (newState) {
            this.checkboxCollection.forEach((checkboxItem, index) => {
                this.onSingleCheckboxChange(checkboxItem.title, true, checkboxItem.id || index, false);
            });
        }
        else {
            this.checkboxCollection.forEach((checkboxItem, index) => {
                const key = checkboxItem.id || index;
                if (this.selectedItemsKeys[key]) {
                    this.onSingleCheckboxChange(checkboxItem.title, false, checkboxItem.id || index, false);
                }
            });
        }
        this.init();
    }
    shouldDisbaleUnselectedCheckBoxes(numSelectedItems) {
        let limitExcedded = this.isSearchMode ?
            this.numSelectedItems >= this.maximumSelectedItems :
            this.maxSelectedItemInOtherSection + this.numSelectedItems >= this.maximumSelectedItems;
        if (limitExcedded) {
            //re-render unselected items and change isReadOnly here to true
            this.disableUnselectedCheckBoxes = true;
        }
        else {
            this.disableUnselectedCheckBoxes = false;
        }
        this.init();
    }
    isCheckBoxReadOnly(key) {
        if (this.isReadOnly) {
            return true;
        }
        if (this.disableUnselectedCheckBoxes) {
            return !this.selectedItemsKeys[key];
        }
        return false;
    }
};
CheckboxCollectionComponent = __decorate$3([
    Component({
        name: 'bkCheckboxCollection',
        templateUrl: 'src/common/widgets/checkbox-collection/checkbox-collection.html'
    })
], CheckboxCollectionComponent);

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Samuel Paul Chandrasegaran (samuelpaulc@thoughtspot.com)
 *
 * @fileoverview Controller for checkbox groups
 * Component can have many checkbox groups and each group can have many checkbox items
 * The groups are collapsible and some basic operations such as Select All and clear all across
 * groups are provided.
 *
 * By default clicking on the row containing the checkbox(i.e on the label or the white space
 * on the row of the checkbox) inverts the state of the checkbox
 *
 * but there is a special 'labelMode' when enabled, allows user to control what happens
 * when we click on the label). In this mode the row becomes focused with light gray
 * background and user can decide if a state change is needed to be done and can
 * do so by calling api's such as selectItem, deleteItem, etc(PS: this was needed for Embrace)
 *
 */
let CheckboxGroupsComponent = class CheckboxGroupsComponent extends BaseComponent$1 {
    constructor(config) {
        super();
        this.groupsExpandedKeys = {};
        this.selectedItemsKeys = {};
        Object.assign(this, config);
        this.setCheckboxGroups(this.checkboxGroups);
    }
    getSelectedItems() {
        let selectedItems = [];
        this.groupsCtrls.forEach(group => {
            group.checkboxItemCtrls.forEach(itemCtrl => {
                if (this.selectedItemsKeys[itemCtrl.getID()]) {
                    selectedItems.push({
                        id: itemCtrl.getID(),
                        groupName: group.name,
                        itemName: itemCtrl.getLabel()
                    });
                }
            });
        });
        return selectedItems;
    }
    setCheckboxGroups(checkboxGroups) {
        this.checkboxGroups = checkboxGroups;
        this.resetSelectedItems();
        this.initControllers();
    }
    selectItem(groupName, itemName, id) {
        const key = id || this.getItemKey(groupName, itemName);
        this.selectedItemsKeys[key] = true;
    }
    deselectItem(groupName, itemName, id) {
        const key = id || this.getItemKey(groupName, itemName);
        this.selectedItemsKeys[key] = false;
    }
    selectAll() {
        this.focusedItemId = null;
        this.groupsCtrls.forEach(group => {
            group.checkboxItemCtrls.forEach(itemCtrl => {
                this.selectedItemsKeys[itemCtrl.getID()] = true;
            });
        });
        if (this.onSelectAllCallback) {
            this.onSelectAllCallback();
        }
    }
    clearAll() {
        this.resetSelectedItems();
        if (this.onClearAllCallback) {
            this.onClearAllCallback();
        }
    }
    resetSelectedItems() {
        this.focusedItemId = null;
        this.selectedItemsKeys = {};
    }
    initControllers() {
        this.groupsCtrls = this.checkboxGroups.map((group) => {
            this.toggleGroup(group);
            const groupName = group.name;
            return {
                name: groupName,
                checkboxItemCtrls: group.items.map((item, index) => {
                    const itemName = item.name;
                    const itemKey = item.id || this.getItemKey(groupName, itemName);
                    if (item.isChecked) {
                        this.selectItem(groupName, itemName, itemKey);
                    }
                    const checkboxCtrl = new CheckboxComponent$1({
                        id: itemKey,
                        label: itemName,
                        stateGetter: () => this.selectedItemsKeys[itemKey],
                        isReadOnly: item.isReadOnly ? item.isReadOnly : false,
                        onClick: ($event, itemId, isLabelClicked) => {
                            if (this.labelMode && isLabelClicked) {
                                this.focusedItemId = itemKey;
                                if (this.onItemFocusedCallback) {
                                    this.onItemFocusedCallback(groupName, itemName, itemKey);
                                }
                            }
                            else {
                                this.focusedItemId = null;
                                this.onCheckboxClicked(groupName, item);
                            }
                        },
                        shouldTruncate: this.shouldTruncate
                    });
                    return checkboxCtrl;
                })
            };
        });
    }
    getItemKey(groupName, itemName) {
        return groupName + '-' + itemName;
    }
    isCheckboxItemFocused(itemCtrl) {
        return this.focusedItemId === itemCtrl.getID();
    }
    onCheckboxClicked(groupName, item) {
        const itemKey = item.id || this.getItemKey(groupName, item.name);
        const newState = !this.selectedItemsKeys[itemKey];
        if (newState) {
            this.selectedItemsKeys[itemKey] = true;
        }
        else {
            delete this.selectedItemsKeys[itemKey];
        }
        if (this.onCheckBoxStateChangedCallback) {
            this.onCheckBoxStateChangedCallback(groupName, item.name, newState, itemKey);
        }
    }
    isGroupExpanded(group) {
        return !!this.groupsExpandedKeys[group.name];
    }
    toggleGroup(group) {
        this.groupsExpandedKeys[group.name] = !this.groupsExpandedKeys[group.name];
    }
};
CheckboxGroupsComponent = __decorate$3([
    Component({
        name: 'bkCheckboxGroups',
        templateUrl: 'src/common/widgets/checkbox-groups/checkbox-groups.html'
    })
], CheckboxGroupsComponent);

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Service to interact with AutoComplete server (Sage Server) for a3 analysis.
 */
let $q = ngRequire('$q');
let Command = ngRequire('Command');
let _logger$3 = logger_3('auto-complete-service'), _transport = new Thrift.Transport(flags.getValue(flags.BLINK_FLAGS.sageBasePathV2.name)), _protocol = new Thrift.Protocol(_transport), _timeout = flags.getValue(flags.BLINK_FLAGS.a3Timeout.name), FeatureFlag = sage.FeatureFlag;
let a3Client = new thrift.Sage.AutoComplete.AutoCompleteV2Client(_protocol);
function getThriftRequest(a3Request) {
    let request = new thrift.common.ThriftRequest();
    request.request = sage.serialize(a3Request);
    return request;
}
/**
 * Creates a default callback handler for sage calls.
 * @param deferred
 * @returns {{success: Function, error: Function,
* timeout:(_defaultEnv.sageTimeout|*|me.sageTimeout|t.sageTimeout)}}
 */
function getDefaultCallbackHandlers(deferred) {
    return {
        success: function (sageResponse) {
            _logger$3.debug('sage response success', sageResponse);
            deferred.resolve(sageResponse);
        },
        error: function (jqueryXhr, textStatus, errorThrown) {
            _logger$3.error('sage response failure', jqueryXhr, textStatus, errorThrown);
            deferred.reject(errorThrown);
        },
        timeout: _timeout
    };
}
/**
 *
 * @param request ThriftRequest wrapping VisualizationAnalysisRequest in request.
 * @returns {ThriftResponse} Wrapping VisualizationAnalysisResponse in response.
 * @constructor
 */
function triggerVisualizationAnalysis(request) {
    request = getThriftRequest(request);
    _logger$3.warn('Use of deprecated API');
    let defer = $q.defer();
    a3Client.A3VisualizationAnlysis(request, getDefaultCallbackHandlers(defer));
    return defer.promise;
}
/**
 *
 * @param request ThriftRequest wrapping A3Request in request.
 * @returns {ThriftResponse} Wrapping A3Response in response.
 * @constructor
 */
function triggerA3Analysis(request, userAction, eventProps) {
    let params = {
        submitanalysisrequest: sage.serialize(request)
    };
    let path = '/answer/submitAnalysis';
    let command = new Command()
        .setPath(path)
        .setPostMethod()
        .setPostParams(params)
        .setIsMultipart(true);
    collectEvent(userAction, eventProps);
    return command.execute();
}
/**
 *
 * @param request ThriftRequest wrapping RelatedQueryRequest in request.
 * @returns {ThriftResponse} Wrapping RelatedQueryResponse in response.
 * @constructor
 */
function getRelatedQueries(request) {
    request = getThriftRequest(request);
    let defer = $q.defer();
    a3Client.GetRelatedQueries(request, getDefaultCallbackHandlers(defer));
    return defer.promise;
}
/**
 *
 * @param request ThriftRequest wrapping DataAnalysisRequest in request.
 * @returns {ThriftResponse} Wrapping DataAnalysisResponse in response.
 * @constructor
 */
function triggerDataAnalysis(request) {
    request = getThriftRequest(request);
    _logger$3.warn('Use of deprecated API');
    let defer = $q.defer();
    a3Client.A3DataAnalysis(request, getDefaultCallbackHandlers(defer));
    return defer.promise;
}
function getA3SuggestedColumns(queryContext, index, tableRequest, a3Request) {
    let requestFeatures = new Set([FeatureFlag.ENABLE_OUT_OF_SCOPE_MATCHES]);
    let requestInfo = getRequestInfoObject(requestFeatures);
    let editTableRequest = new sage.EditTableRequest({
        info: requestInfo,
        context: queryContext,
        idx: index,
        table: tableRequest
    });
    let getSuggestedColumnsRequest = new sage.A3SuggestedColumnsRequest({
        a3Request: a3Request,
        editTable: editTableRequest
    });
    let thriftRequest = getThriftRequest(getSuggestedColumnsRequest);
    let defer = $q.defer();
    let callbackHandler = {
        success: function (sageResponse) {
            _logger$3.debug('sage response success', sageResponse);
            sageResponse = sage.deserialize(sageResponse.response, sage.AnswerResponse);
            sageResponse = new SageResponse(sageResponse, _$1.noop);
            defer.resolve(sageResponse);
        },
        error: function (jqueryXhr, textStatus, errorThrown) {
            _logger$3.error('sage response failure', jqueryXhr, textStatus, errorThrown);
            defer.reject(errorThrown);
        },
        timeout: _timeout
    };
    a3Client.GetA3SuggestedColumnsV2(thriftRequest, callbackHandler);
    return defer.promise;
}
Provide('a3Service')({
    triggerVisualizationAnalysis,
    triggerDataAnalysis,
    triggerA3Analysis,
    getRelatedQueries,
    getA3SuggestedColumns
});

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Shikhar Agarwal (shikhar@thoughtspot.com)
 *         Manoj Ghosh (manoj.ghosh@thoughtspot.com)
 *
 * @fileoverview Component for fetching drill suggestions on a visualization
 * This works by creating a transformed query to sage with appended keyword's like
 * 'by', 'foreach' and then requesting sage to return applicable recognised tokens for the new
 * transformed query. The resulting tokens are displayed to user as drill down choices.
 *
 * Some hints:
 * One way to return all the attributes is to have query like "Q by" where Q is the original query.
 * Similarly you can get all measures by "Q sum"
 * If you simply do Q with max_completions of 100 or so then you can get both
 * (top 100 ones by score)
 * Increase 100 to further large number if you want to get even more.
 */
let $q$1 = ngRequire('$q');
class TokenOptions {
    constructor(sageClient, shouldIncludeMeasures, showAllTokens) {
        this.includeMeasures = false;
        this.showAllTokens = false;
        this.sageClient = sageClient;
        this.includeMeasures = shouldIncludeMeasures;
        this.showAllTokens = showAllTokens;
    }
    // Returns a promise which resolves when the sage-token-options initialization
    // is complete.
    init(transformations) {
        let context = this.sageClient.getContext();
        let index = this.sageClient.getCurrentIndex();
        if (!!transformations) {
            this.initializationPromise =
                transformTable(context, index, transformations)
                    .then((sageResponse) => {
                    let answerResponse = sageResponse.answerResponse;
                    let tableResponse = answerResponse.getTableResponse();
                    this.drillTokens = tableResponse.getNewTokens();
                });
        }
        else {
            this.drillTokens = context.getTables()[index].getTokens();
            this.initializationPromise = $q$1.resolve();
        }
        return this.initializationPromise;
    }
    /**
     * Setter for showAllTokens
     * @param {boolean} showAllTokens
     */
    setShowAllTokens(showAllTokens) {
        this.showAllTokens = showAllTokens;
    }
    /**
     * Returns the recognized tokens from the table response's data completions.
     * @param {sage.ACTableResponse} tableResponse
     */
    getItems(tableResponse) {
        let tokens = [];
        let newTokens = tableResponse.getNewTokens();
        // It might happen that the user has searched for 'customer region' in the search bar.
        // In this case, sage recognizes the token and does not send this in data completions.
        // So we take the token out from new tokens.
        if (newTokens.length === this.drillTokens.length + 1
            && !newTokens.last().isUnrecognized()) {
            if (newTokens.last().isAttributeToken()) {
                tokens = [newTokens.last()];
            }
        }
        else {
            // Only keep attribute tokens from the completions returned by Sage and also filter out
            // the attribute on which the drill is being performed.
            // NOTE(vibhor): Ideally, we would skip all the attribute tokens that are already in
            // the query and are being drill down into. However, a simple attribute token
            // already in query check is insufficient since an attribute token with an aggregate
            // keyword will act as the measure for that query. For instance 'count color by
            // customer region', user may wish to drill a customer region of WEST // by color
            // (making the resulting query), 'count color for customer region = WEST by color'.
            // Since, sage currently doesn't give us token boundaries, we can't distinguish a
            // 'GROUP BY' attribute token from a METRIC attribute token.
            tokens = tableResponse.getQueryCompletions()
                .filter((completion) => completion.getCompletionTokens().length === 1)
                .map((completion) => completion.getCompletionTokens()[0])
                .filter((completionToken) => {
                // do not include measures if asked to do so.
                if (completionToken.isMeasureToken()) {
                    return this.includeMeasures;
                }
                return completionToken.isAttributeToken();
            });
        }
        return tokens.map((token) => {
            let tokenText = token.getTokenText(), lineage = token.getImmediateLineage();
            return {
                id: token.getGuid(),
                tokenText: tokenText,
                lineage: lineage,
                tokens: this.drillTokens.concat(token)
            };
        });
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Shikhar Agarwal (shikhar@thoughtspot.com)
 *         Manoj Ghosh (manoj.ghosh@thoughtspot.com)
 *
 * @fileoverview Component for fetching drill suggestions on a visualization
 * This works by creating a transformed query to sage with appended keyword's like
 * 'by', 'foreach' and then requesting sage to return applicable recognised tokens for the new
 * transformed query. The resulting tokens are displayed to user as drill down choices.
 *
 * Some hints:
 * One way to return all the attributes is to have query like "Q by" where Q is the original query.
 * Similarly you can get all measures by "Q sum"
 * If you simply do Q with max_completions of 100 or so then you can get both
 * (top 100 ones by score)
 * Increase 100 to further large number if you want to get even more.
 */
let CancelablePromise = ngRequire('CancelablePromise');
class A3TokenOptions extends TokenOptions {
    constructor(sageClient, shouldIncludeMeasures, showAllTokens) {
        super(sageClient, shouldIncludeMeasures, showAllTokens);
    }
    /**
     * Search for tokens using the searchText keyword.
     * @param searchText the search text that customers provide to filter down the columns.
     * @return {Promise<Array>} Array of tokens matching the search pattern.
     */
    getSearchItems(searchText, a3Request) {
        if (this.pendingPromise) {
            this.pendingPromise.cancel();
        }
        let editTablePromise = this.initializationPromise.then(() => {
            let context = this.sageClient.getContext();
            let currentIndex = this.sageClient.getCurrentIndex();
            let searchToken = sage.RecognizedToken.createUnrecognizedToken(searchText);
            let tokens = this.drillTokens.concat(searchToken);
            let tableRequest = getNewACTableRequest();
            tableRequest.setDataScopeLogicalTables([]);
            tableRequest.setInputTokens(tokens);
            // TODO(Archit): Temporary bug fix for SCAL-39021, until we move to a better API
            // to get suggested columns insted of hacking EditTable call.
            tableRequest.setMaxCompletions(200);
            // Adds the the context tables into the data scope for query on query.
            let dataScopeTables = tableRequest.getDataScopeLogicalTables();
            let tables = context.getTables();
            tables.forEach(function (table, index) {
                if (index < currentIndex && dataScopeTables.indexOf(table) < 0) {
                    dataScopeTables.push(table.getId());
                }
            });
            if (this.showAllTokens) {
                tableRequest.setMaxCompletions(-1);
            }
            return getA3SuggestedColumns(context, currentIndex, tableRequest, a3Request)
                .then((sageResponse) => {
                let answerResponse = sageResponse.answerResponse;
                let tableResponse = answerResponse.getTableResponse();
                let suggestedColumns = this.getItems(tableResponse);
                if (!this.showAllTokens) ;
                return suggestedColumns;
            });
        });
        this.pendingPromise = new CancelablePromise(editTablePromise);
        return this.pendingPromise;
    }
    /**
     * Returns the recognized tokens from the table response's data completions.
     * @param {sage.ACTableResponse} tableResponse
     */
    getItems(tableResponse) {
        // Only keep attribute tokens from the completions returned by Sage and also filter out
        // the attribute on which the drill is being performed.
        // NOTE(vibhor): Ideally, we would skip all the attribute tokens that are already in
        // the query and are being drill down into. However, a simple attribute token
        // already in query check is insufficient since an attribute token with an aggregate
        // keyword will act as the measure for that query. For instance 'count color by
        // customer region', user may wish to drill a customer region of WEST // by color
        // (making the resulting query), 'count color for customer region = WEST by color'.
        // Since, sage currently doesn't give us token boundaries, we can't distinguish a
        // 'GROUP BY' attribute token from a METRIC attribute token.
        let tokens = tableResponse.getQueryCompletions()
            .filter((completion) => completion.getCompletionTokens().length === 1)
            .map((completion) => completion.getCompletionTokens()[0])
            .filter((completionToken) => {
            // do not include measures if asked to do so.
            if (completionToken.isMeasureToken()) {
                return this.includeMeasures;
            }
            return completionToken.isAttributeToken();
        });
        return tokens.map((token) => {
            let tokenText = token.getTokenText(), lineage = token.getImmediateLineage();
            return {
                id: token.getGuid(),
                tokenText: tokenText,
                lineage: lineage,
                tokens: this.drillTokens.concat(token)
            };
        });
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Service to generate a3 visualization analysis request.
 */
let sageUtil = ngRequire('sageUtil');
Provide('a3RequestGenerator')({
    getA3VisualizationAnalysisRequest,
    getA3AnomalyExplanationAnalysisRequest,
    getA3DataAnalysisRequest,
    getA3TableAnalysisRequest
});
function getVisualization(vizModel) {
    let visualization = new callosum.VisualizationProto();
    visualization.type =
        callosum.VisualizationProto.VisualizationTypeEnumProto.TABLE;
    let insightPinboardTitle = getVisualizationTitle(vizModel);
    visualization.title = insightPinboardTitle;
    visualization.chartContent = vizModel.getVizContent();
    return visualization;
}
/**
 * Get the Visualization title. This title is used in a3 pinboard name.
 * So it must not be empty.
 *
 * @param vizModel
 * @return {any}
 */
function getVisualizationTitle(vizModel) {
    // Use the visualization title as it represents the user set value.
    let title = vizModel.getContainingAnswerModel().getName();
    // get original query tokens. this is second best option as this
    // helps in understanding which query is being analysed.
    if (title === '') {
        title = getOriginalQuery(vizModel);
    }
    // fall back logic: if that is empty, use the underlying sage question text.
    if (title === '') {
        title = vizModel.getQuestionText();
    }
    // if it is still empty fill with unknown title.
    if (!title || title === '') {
        title = 'Unknown title';
    }
    return title;
}
function getOriginalQuery(vizModel) {
    let questionModel = vizModel.getQuestion();
    let sageContext = questionModel.getContext();
    let sageContextIndex = questionModel.getContextIndex();
    let tables = sageContext.getTables();
    let table = tables[sageContextIndex];
    let tokens = table.getTokens();
    return sageUtil.tokensToQuery(tokens);
}
function getVisualizationQuery$1(vizModel) {
    let visualizationQuery = new callosum.VisualizationQueryProto();
    let questionModel = vizModel.getQuestion();
    let sageContext = questionModel.getContext();
    let sageContextIndex = questionModel.getContextIndex();
    let tables = sageContext.getTables();
    let table = tables[sageContextIndex];
    let query = table.getQuery();
    visualizationQuery.sageProgram = query;
    let visualization = getVisualization(vizModel);
    visualizationQuery.visualization = visualization;
    visualizationQuery.context = sageContext;
    visualizationQuery.tableIndex = sageContextIndex;
    return visualizationQuery;
}
function getA3DataAnalysisRequest(vizModel, visualizationColumns, dataRows, selectedTokens) {
    let a3Request = new sage$1.A3Request();
    let dataAnalysisRequest = new sage$1.DataAnalysisRequest();
    let visualizationQuery = getVisualizationQuery$1(vizModel);
    dataAnalysisRequest.visualizationQuery = visualizationQuery;
    dataAnalysisRequest.userGuid = getUserGuid();
    dataAnalysisRequest.locale = getCurrentLocale();
    let sageColumnIdsForVisualizationColumns = visualizationColumns.map(function (vizCol) {
        return vizCol.getId();
    });
    Array.prototype.push.apply(dataAnalysisRequest.sageOutputColumnId, sageColumnIdsForVisualizationColumns);
    Array.prototype.push.apply(dataAnalysisRequest.dataRow, dataRows);
    if (!!selectedTokens && selectedTokens.length > 0) {
        Array.prototype.push.apply(dataAnalysisRequest.selectedToken, selectedTokens);
    }
    a3Request.dataAnalysis = dataAnalysisRequest;
    a3Request.type = sage$1.A3AnalysisType.E.DATA;
    let title = getA3RequestTitle(a3Request);
    a3Request.title = title;
    return a3Request;
}
function getA3VisualizationAnalysisRequest(vizModel, insightInfoCard, selectedTokens) {
    let a3Request = new sage$1.A3Request();
    let visualizationAnalysisRequest = new sage$1.VisualizationAnalysisRequest();
    let visualizationQuery = getVisualizationQuery$1(vizModel);
    let dataPoints;
    if (insightInfoCard) {
        dataPoints = insightInfoCard.getDataPoints();
    }
    visualizationAnalysisRequest.visualizationQuery = visualizationQuery;
    visualizationAnalysisRequest.userGuid = getUserGuid();
    visualizationAnalysisRequest.locale = getCurrentLocale();
    visualizationAnalysisRequest.analyzeCurrentData =
        sage$1.VisualizationAnalysisRequest.CurrentDataOptions.INCLUDE;
    if (!!selectedTokens && selectedTokens.length > 0) {
        Array.prototype.push.apply(visualizationAnalysisRequest.selectedToken, selectedTokens);
    }
    if (dataPoints && dataPoints.length > 0) {
        Array.prototype.push.apply(visualizationAnalysisRequest.dataPoint, dataPoints);
    }
    a3Request.visualizationAnalysis = visualizationAnalysisRequest;
    a3Request.type = sage$1.A3AnalysisType.E.VISUALIZATION;
    let title = getA3RequestTitle(a3Request);
    a3Request.title = title;
    return a3Request;
}
function getA3AnomalyExplanationAnalysisRequest(vizModel, insightInfoCard, selectedTokens) {
    let a3Request = new sage$1.A3Request();
    let anomalyExplanationAnalysisRequest = new sage$1.AnomalyExplanationAnalysisRequest();
    let visualizationQuery = getVisualizationQuery$1(vizModel);
    let dataPoints = insightInfoCard.getDataPoints();
    anomalyExplanationAnalysisRequest.visualizationQuery = visualizationQuery;
    anomalyExplanationAnalysisRequest.userGuid = getUserGuid();
    anomalyExplanationAnalysisRequest.locale = getCurrentLocale();
    anomalyExplanationAnalysisRequest.analyzeCurrentData =
        sage$1.VisualizationAnalysisRequest.CurrentDataOptions.INCLUDE;
    anomalyExplanationAnalysisRequest.explorationType =
        sage$1.AnomalyExplanationAnalysisRequest.ExplorationType.ANOMALY_EXPLANATION;
    if (selectedTokens && selectedTokens.length > 0) {
        Array.prototype.push.apply(anomalyExplanationAnalysisRequest.selectedToken, selectedTokens);
    }
    if (dataPoints && dataPoints.length > 0) {
        Array.prototype.push.apply(anomalyExplanationAnalysisRequest.dataPoint, dataPoints);
    }
    a3Request.anomalyExplanationAnalysis = anomalyExplanationAnalysisRequest;
    a3Request.type = sage$1.A3AnalysisType.E.ANOMALY_EXPLANATION;
    let title = getA3RequestTitle(a3Request);
    a3Request.title = title;
    return a3Request;
}
function getA3TableAnalysisRequest(tableGuid, tableName, isWorksheet, selectedColumns, delayInSeconds = 0) {
    let a3Request = new sage$1.A3Request();
    let tableAnalysisRequest = new sage$1.TableAnalysisRequest();
    tableAnalysisRequest.tableGuid = tableGuid;
    tableAnalysisRequest.tableName = tableName;
    tableAnalysisRequest.isWorksheet = isWorksheet;
    tableAnalysisRequest.userGuid = getUserGuid();
    tableAnalysisRequest.locale = getCurrentLocale();
    if (delayInSeconds > 0) {
        tableAnalysisRequest.initialDelaySeconds = delayInSeconds;
    }
    if (!!selectedColumns && selectedColumns.length > 0) {
        Array.prototype.push.apply(tableAnalysisRequest.selectedColumn, selectedColumns);
    }
    a3Request.tableAnalysis = tableAnalysisRequest;
    a3Request.type = sage$1.A3AnalysisType.E.TABLE;
    let title = getA3RequestTitle(a3Request);
    a3Request.title = title;
    return a3Request;
}
function customizeA3Request(a3Request, selectedTokens, excludedTokens) {
    // Reset analysis ID, Sage would generate a new one.
    a3Request.setAnalysisId(null);
    switch (a3Request.getType()) {
        case sage$1.A3AnalysisType.E.VISUALIZATION:
            {
                let visualizationAnalysis = a3Request.getVisualizationAnalysis();
                visualizationAnalysis.getSelectedToken().length = 0;
                Array.prototype.push.apply(visualizationAnalysis.getSelectedToken(), selectedTokens);
                visualizationAnalysis.getExcludedToken().length = 0;
                // Reset with current user ID.
                visualizationAnalysis.setUserGuid(getUserGuid());
                // Reset analysis ID, Sage would generate a new one.
                visualizationAnalysis.setAnalysisId(null);
                visualizationAnalysis.setLocale(getCurrentLocale());
                if (excludedTokens) {
                    Array.prototype.push.apply(visualizationAnalysis.getExcludedToken(), excludedTokens);
                }
                break;
            }
        case sage$1.A3AnalysisType.E.ANOMALY_EXPLANATION:
            {
                let anomalyExplanationAnalysis = a3Request.getAnomalyExplanationAnalysis();
                anomalyExplanationAnalysis.getSelectedToken().length = 0;
                Array.prototype.push.apply(anomalyExplanationAnalysis.getSelectedToken(), selectedTokens);
                anomalyExplanationAnalysis.getExcludedToken().length = 0;
                // Reset with current user ID.
                anomalyExplanationAnalysis.setUserGuid(getUserGuid());
                // Reset analysis ID, Sage would generate a new one.
                anomalyExplanationAnalysis.setAnalysisId(null);
                anomalyExplanationAnalysis.setLocale(getCurrentLocale());
                if (excludedTokens) {
                    Array.prototype.push.apply(anomalyExplanationAnalysis.getExcludedToken(), excludedTokens);
                }
                break;
            }
        case sage$1.A3AnalysisType.E.DATA:
            {
                let dataAnalysis = a3Request.getDataAnalysis();
                dataAnalysis.setAnalysisId(null);
                dataAnalysis.getSelectedToken().length = 0;
                Array.prototype.push.apply(dataAnalysis.getSelectedToken(), selectedTokens);
                dataAnalysis.getExcludedToken().length = 0;
                // Reset with current user ID.
                dataAnalysis.setUserGuid(getUserGuid());
                dataAnalysis.setLocale(getCurrentLocale());
                Array.prototype.push.apply(dataAnalysis.getExcludedToken(), excludedTokens);
                break;
            }
        case sage$1.A3AnalysisType.E.TABLE:
            {
                let tableAnalysis = a3Request.getTableAnalysis();
                tableAnalysis.setAnalysisId(null);
                tableAnalysis.getSelectedColumn().length = 0;
                Array.prototype.push.apply(tableAnalysis.getSelectedColumn(), selectedTokens);
                tableAnalysis.getExcludedColumn().length = 0;
                Array.prototype.push.apply(tableAnalysis.getExcludedColumn(), excludedTokens);
                // Reset with current user ID.
                tableAnalysis.setUserGuid(getUserGuid());
                tableAnalysis.setLocale(getCurrentLocale());
                // remove delay if editing existing request
                tableAnalysis.setInitialDelaySeconds(0);
                break;
            }
    }
    let title = getA3RequestTitle(a3Request);
    a3Request.setTitle(title);
    // skip empty tokens which are in a3Request
    let acContext = getACContext(a3Request);
    if (!!acContext) {
        let table = acContext.getTables()[0];
        table.setTokens(table.getTokens().filter(token => token.typeEnum !== sage$1.TokenType.E.UNRECOGNIZED));
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Bhanu Jupally(bhanu.jupally@thoughtspot.com)
 *
 * @fileoverview This component displays the sage columns for customer to select for
 * a3 analysis.
 *
 */
/**
 * Column selection component
 */
let A3AnalysisColumnSelectorComponent = class A3AnalysisColumnSelectorComponent extends UIComponent$1 {
    constructor(sageClient, selectedTokens, a3Request, hideShowMore = false, a3AnalysisCustomizerComponent) {
        super();
        this.a3AnalysisCustomizerComponent = a3AnalysisCustomizerComponent;
        this.showingAllColumns = false;
        this.$currentElement = null;
        this.fetchColumns = () => {
            this.a3AnalysisCustomizerComponent.hideAlertMessage();
            this.showLoading();
            return this.makeApiRequest()
                .then((tokens) => {
                this.tokensMap = this.formatResponse(tokens);
            })
                .catch(() => {
                this.tokensMap = {};
                if (this.selectedTokens) { // show original a3RequestTokens
                    this.selectedTokens.forEach(token => {
                        this.tokensMap[token.getGuid()] = token;
                    });
                }
            })
                .finally(() => {
                this.createCheckboxCollection();
                this.hideLoading();
            });
        };
        this.sageClient = sageClient;
        this.selectedTokens = [...(selectedTokens || [])];
        this.hideShowMore = hideShowMore;
        this.a3Request = a3Request;
        this.onChecboxChange = this.onChecboxChange.bind(this);
        this.onCheckboxGroupChange = this.onCheckboxGroupChange.bind(this);
        this.initInfoBox();
        this.init();
    }
    initInfoBox() {
        this.infoBox = new InfoBoxComponent(this.strings.a3.runSpotIQByDefault.title, this.strings.a3.runSpotIQByDefault.info, !getShouldHideColumnsTabInfo());
        setShouldHideColumnsTabInfo(true);
    }
    onTabActivated(maxColumnsOrAttributesChanged) {
        if (maxColumnsOrAttributesChanged) {
            this.reset();
            this.fetchColumns();
        }
    }
    uIPostLink($currentElement) {
        super.uIPostLink($currentElement);
        this.$currentElement = $currentElement;
        if (this.isLoading) {
            this.showLoading();
        }
    }
    showLoading() {
        this.isLoading = true;
        if (this.$currentElement) {
            super.showLoading();
        }
    }
    hideLoading() {
        this.isLoading = false;
        super.hideLoading();
    }
    reset() {
        this.selectedTokensMap = {};
        this.isInitial = true;
    }
    init() {
        this.isLoading = false;
        this.isInitial = true;
        this.searchInputCtrl = new InputComponent(this.getInputConfig());
        this.columnsTooltip = new InfoButtonTooltip(this.strings.a3.suggestedColumns.tooltip);
        this.selectedTokensMap = this.parseSelectedTokens(this.selectedTokens);
        this.setShowAllColumnsStrings();
        this.initApiContext();
        this.fetchColumns();
    }
    parseSelectedTokens(selectedTokens) {
        return {};
    }
    getSelectedColumns() {
        return _$1.values(this.selectedTokensMap || {});
    }
    initApiContext() {
        this.a3TokenOptions = new A3TokenOptions(this.sageClient, true /* Show measures as well */, this.showingAllColumns /* show all tokens */);
        this.a3TokenOptions.init([
            sage.QueryTransform.createAddEmptyGroupByTransformation()
        ]);
    }
    tokenToCheckboxItem(token, hideTableName) {
        const title = hideTableName ?
            token.getToken() :
            `${token.getToken()} - ${token.getImmediateLineage()}`;
        return {
            title,
            isChecked: !!this.selectedTokensMap[token.getGuid()],
            id: token.getGuid()
        };
    }
    filterData(tokensData, selectTokensData, searchText) {
        const filterFn = (tokens) => _$1.values(tokens).filter((token) => _$1.toLower(token.getToken()).indexOf(_$1.toLower(searchText)) > -1).reduce((map, token) => {
            map[token.getGuid()] = token;
            return map;
        }, {});
        return {
            tokensData: filterFn(tokensData),
            selectTokensData: filterFn(selectTokensData)
        };
    }
    preselectColumns() {
        if (this.isInitial) {
            this.isInitial = false;
            _$1.forIn(this.tokensMap, (token, key) => {
                this.selectedTokensMap[key] = token;
            });
        }
    }
    checkIfAllTokensSameTable(tokensData, selectTokensData) {
        const tables = {};
        _$1.forEach(Object.assign({}, tokensData, selectTokensData), (token) => {
            tables[token.getImmediateLineage()] = true;
        });
        return Object.keys(tables).length === 1;
    }
    createCheckboxCollection() {
        this.allColumnsCheckboxGroup = null;
        this.selectedCheckboxCollection = null;
        this.unselectedCheckboxCollection = null;
        this.preselectColumns();
        const { tokensData, selectTokensData } = this.filterData(this.tokensMap, this.selectedTokensMap, this.searchInputCtrl.value);
        const sameTable = this.checkIfAllTokensSameTable(tokensData, selectTokensData);
        if (!this.showingAllColumns) {
            const selectedCheckboxItems = [];
            const unselectedCheckboxItems = [];
            _$1.forIn(selectTokensData, (token, key) => {
                selectedCheckboxItems.push(this.tokenToCheckboxItem(tokensData[key] || token, sameTable));
            });
            _$1.forIn(tokensData, (token, key) => {
                if (!this.selectedTokensMap[key]) {
                    unselectedCheckboxItems.push(this.tokenToCheckboxItem(token, sameTable));
                }
            });
            this.unselectedCheckboxCollection = new CheckboxCollectionComponent(unselectedCheckboxItems, this.onChecboxChange, false, false);
            this.selectedCheckboxCollection = new CheckboxCollectionComponent(selectedCheckboxItems, this.onChecboxChange, false, false);
        }
        else {
            const checkboxItems = {};
            this.displayNamesToTokensMap = {};
            _$1.forIn(tokensData, (token, key) => {
                const immediateLineage = token.getImmediateLineage();
                const tokenName = token.getToken();
                checkboxItems[immediateLineage] = checkboxItems[immediateLineage] || [];
                checkboxItems[immediateLineage].push({
                    name: tokenName,
                    isChecked: !!this.selectedTokensMap[token.getGuid()]
                });
                this.displayNamesToTokensMap[immediateLineage + '-' + tokenName] = token;
            });
            const checkboxGroups = [];
            _$1.forIn(checkboxItems, (items, name) => {
                checkboxGroups.push({
                    name,
                    items
                });
            });
            this.allColumnsCheckboxGroup = new CheckboxGroupsComponent({
                checkboxGroups,
                allowSelectAll: true,
                onSelectAllCallback: () => this.onSelectAll(),
                allowClearAll: true,
                onClearAllCallback: () => this.onClearAll(),
                onCheckBoxStateChangedCallback: this.onCheckboxGroupChange,
            });
        }
        this.showNoColumnsAlert();
    }
    makeApiRequest() {
        customizeA3Request(this.a3Request, this.selectedTokens, /* excluded tokens */ null);
        return this.a3TokenOptions.getSearchItems('', this.a3Request);
    }
    formatResponse(data) {
        return data.reduce((tokenObj, token) => {
            const lastToken = token.tokens[token.tokens.length - 1];
            tokenObj[lastToken.getGuid()] = lastToken;
            return tokenObj;
        }, {});
    }
    renderOnSearch() {
        if (this.searchInputCtrl.value && !this.showingAllColumns) {
            this.toggleShowAllColumns();
        }
        else {
            this.createCheckboxCollection();
        }
    }
    showNoColumnsAlert() {
        if (!Object.keys(this.selectedTokensMap).length) {
            this.a3AnalysisCustomizerComponent.showAlertMessage(this.strings.a3.AutoSelectedColumns, alertConstants.type.INFO);
        }
        else {
            this.a3AnalysisCustomizerComponent.hideAlertMessage();
        }
    }
    checkSelectedColumnsExist() {
        return this.selectedCheckboxCollection &&
            this.unselectedCheckboxCollection &&
            !!this.selectedCheckboxCollection.checkboxCollection.length &&
            !!this.unselectedCheckboxCollection.checkboxCollection.length;
    }
    onSelectAll(shouldRefresh) {
        this.selectedTokensMap = { ...this.tokensMap };
        if (shouldRefresh) {
            this.createCheckboxCollection();
        }
    }
    onClearAll(shouldRefresh) {
        this.selectedTokensMap = {};
        if (shouldRefresh) {
            this.createCheckboxCollection();
        }
    }
    setShowAllColumnsStrings() {
        if (!this.showingAllColumns) {
            this.showAllColumnString = this.strings.a3.showAllColumns;
            this.showAllColumnTooltip = this.strings.a3.showAllColumnsTooltip;
        }
        else {
            this.showAllColumnString = this.strings.a3.showingAllColumns;
            this.showAllColumnTooltip = this.strings.a3.showingAllColumnsTooltip;
        }
    }
    toggleShowAllColumns() {
        this.showingAllColumns = !this.showingAllColumns;
        this.a3TokenOptions.setShowAllTokens(this.showingAllColumns);
        this.setShowAllColumnsStrings();
        this.fetchColumns();
    }
    onChecboxChange(displayText, isSelected, id) {
        if (isSelected) {
            this.selectedTokensMap[id] = this.tokensMap[id];
        }
        else {
            delete this.selectedTokensMap[id];
        }
        this.showNoColumnsAlert();
    }
    onCheckboxGroupChange(groupName, displayText, isSelected) {
        const token = this.displayNamesToTokensMap[groupName + '-' + displayText];
        if (token) {
            const id = token.getGuid();
            if (isSelected) {
                this.selectedTokensMap[id] = token;
            }
            else {
                delete this.selectedTokensMap[id];
            }
        }
        this.showNoColumnsAlert();
    }
    getInputConfig() {
        const checkBoxStrings = this.strings.smartCheckboxCollection;
        return {
            onChange: () => {
                this.renderOnSearch();
            },
            showClear: true,
            placeholder: checkBoxStrings.CHECKBOX_SEARCH_PLACEHOLDER,
            icon: 'rd-icon-search-m',
        };
    }
};
A3AnalysisColumnSelectorComponent = __decorate$3([
    Component({
        name: 'bkA3AnalysisColumnSelector',
        templateUrl: 'src/modules/a3/a3-analysis-column-selector/a3-analysis-column-selector.html'
    })
], A3AnalysisColumnSelectorComponent);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Bhanu Jupally(bhanu.jupally@thoughtspot.com)
 *
 * @fileoverview This component displays the Table columns for customer to select for
 * a3 analysis.
 *
 */
let $q$2 = ngRequire('$q');
let metadataPermissionService = ngRequire('metadataPermissionService');
let worksheetUtil = ngRequire('worksheetUtil');
/**
 * Table Column customizer component
 */
let A3AnalysisTableColumnSelectorComponent = class A3AnalysisTableColumnSelectorComponent extends A3AnalysisColumnSelectorComponent {
    constructor(tableId, allColumns, selectedTokens, a3AnalysisCustomizerComponent) {
        super(null, selectedTokens, null, true, a3AnalysisCustomizerComponent);
        this.tableId = tableId;
        this.allColumns = allColumns;
        this.initComponent();
    }
    init() {
        /* overriding parent method */
    }
    initApiContext() {
        /* overriding parent method */
    }
    parseSelectedTokens(selectedTokens) {
        return selectedTokens.reduce((tokensMap, tokenId) => {
            tokensMap[tokenId] = true;
            return tokensMap;
        }, {});
    }
    getSelectedColumns() {
        return _$1.keys(this.selectedTokensMap || {});
    }
    onTabActivated(maxColumnsOrAttributesChanged) {
        // noop
    }
    tokenToCheckboxItem(token) {
        return {
            title: token.getName(),
            isChecked: !!this.selectedTokensMap[token.getGuid()],
            id: token.getGuid()
        };
    }
    checkIfAllTokensSameTable() {
        return true;
    }
    filterData(tokensData, selectTokensData, searchText) {
        const filteredTokensData = _$1.values(tokensData).filter((token) => _$1.toLower(token.getName()).indexOf(_$1.toLower(searchText)) > -1).reduce((map, token) => {
            map[token.getGuid()] = token;
            return map;
        }, {});
        const filteredSelectTokensData = _$1.keys(selectTokensData).filter(key => tokensData[key] &&
            _$1.toLower(tokensData[key].getName()).indexOf(_$1.toLower(searchText)) > -1).reduce((map, key) => {
            map[key] = true;
            return map;
        }, {});
        return {
            tokensData: filteredTokensData,
            selectTokensData: filteredSelectTokensData
        };
    }
    preselectColumns() {
        if (this.isInitial && !this.selectedTokens.length) {
            this.isInitial = false;
            _$1.forIn(this.tokensMap, (token, key) => {
                this.selectedTokensMap[key] = token;
            });
        }
    }
    makeApiRequest() {
        if (!this.tableId) {
            return $q$2.when([]);
        }
        return this.fetchLogicalTable(this.tableId).then(data => {
            if (!data || data.length < 1) {
                return [];
            }
            return data[data.length - 1];
        });
    }
    formatResponse(data) {
        return data.reduce((tokenObj, token) => {
            tokenObj[token.getGuid()] = token;
            return tokenObj;
        }, {});
    }
    renderOnSearch() {
        this.createCheckboxCollection();
    }
    initComponent() {
        // Initializing the component after both constructors are run.
        super.init();
    }
    fetchLogicalTable(tableId) {
        if (this.allColumns !== null) {
            let ret = new Array(1);
            ret[0] = this.allColumns;
            return $q$2.when(ret);
        }
        let permissionsPromise = metadataPermissionService.getEffectivePermissions([{ id: tableId }], jsonConstants_1.metadataType.LOGICAL_TABLE, true).then(function (response) {
            return response.data;
        }, function (response) {
            return $q$2.reject(response.data);
        });
        let detailsPromise = this.fetchMetadata(tableId).then(function (model) {
            return model.getColumns();
        }, function (error) {
            if (error !== blinkConstants_1.IGNORED_API_CALL_ERROR) {
                return null;
            }
        });
        return Promise.all([
            permissionsPromise,
            detailsPromise
        ]);
    }
    fetchMetadata(tableId) {
        return worksheetUtil.getLogicalTableModel(tableId, { showHidden: true })
            .then(response => response.data);
    }
};
A3AnalysisTableColumnSelectorComponent = __decorate$3([
    Component({
        name: 'bkA3AnalysisTableColumnSelector',
        templateUrl: 'src/modules/a3/a3-analysis-column-selector/a3-analysis-column-selector.html'
    })
], A3AnalysisTableColumnSelectorComponent);

/**
 * Copyright: ThoughtSpot Inc. 2015-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Provides a service that allows blink app to trigger auto analysis of
 * visualizations.
 */
let alertService = ngRequire('alertService');
let Logger = ngRequire('Logger');
let UserAction$2 = ngRequire('UserAction');
let logger$2;
Provide('autoAnalyzerService')({
    triggerVisualizationAnalysis: triggerVisualizationAnalysis$1,
    triggerAnomalyExplanationAnalysis,
    triggerDataAnalysis: triggerDataAnalysis$1,
    triggerA3Analyis,
    reTriggerInsightAnalysisOnDislike
});
function triggerA3Analyis(a3AnalysisRequest, analysisType) {
    let eventProps = {};
    let userAction;
    if (isCustomRAnalysis(a3AnalysisRequest)) {
        userAction = new UserAction$2(UserAction$2.CREATE_CUSTOM_R_SPOTIQ_ANALYZE);
        let customR = getAnalysisParams(a3AnalysisRequest)
            .getAnalysisDescriptor()[0].getCustomRAnalysis();
        eventProps['objectSubType'] = customR.getROutputType();
        eventProps['objectId'] = customR.getRTemplateId();
        eventProps['rColBindingCount'] = customR.getColumnBinding().length;
    }
    else {
        eventProps['spotiqAnalysisType'] = getAnalysisTypeString(a3AnalysisRequest);
        userAction = new UserAction$2(UserAction$2.CREATE_SPOTIQ_ANALYSIS);
        // Breached Mixpanel Checks SCAL-37054.
        //  - Sending more than allowed 255 characters per value.
        // eventProps['spotiqAnalysisParams'] = getAnalysisParams(a3AnalysisRequest);
        eventProps['spotiqIncludedColCount'] = getSelectedTokens(a3AnalysisRequest).length;
        eventProps['spotiqExcludedColCount'] = getExcludedTokens(a3AnalysisRequest).length;
    }
    eventProps[SpotIqAnalysisTypeEventProperty] = analysisType || SpotIqAnalysisType.DEFAULT;
    return triggerA3Analysis(a3AnalysisRequest, userAction, eventProps).then(handleVisualizationAnalysisSuccess, handleVisualizationAnalysisFailure);
}
function triggerVisualizationAnalysis$1(visualizationModel, analysisType, insightInfoCard, selectedTokens) {
    if (!logger$2) {
        logger$2 = Logger.create('auto-analyzer-service');
    }
    let request = getA3VisualizationAnalysisRequest(visualizationModel, insightInfoCard, selectedTokens);
    alertService.showAlert({
        message: strings.a3.TRIGGER_MESSAGE,
        type: alertService.alertConstants.type.SUCCESS
    });
    let eventProps = {
        'insightVizId': visualizationModel.getReferencingViz().getId(),
        'insightPinboardId': visualizationModel.getId(),
        [SpotIqAnalysisTypeEventProperty]: analysisType
    };
    let userAction = new UserAction$2(UserAction$2.CREATE_SPOTIQ_ANALYSIS);
    return triggerA3Analysis(request, userAction, eventProps)
        .then(handleVisualizationAnalysisSuccess, handleVisualizationAnalysisFailure);
}
function triggerAnomalyExplanationAnalysis(visualizationModel, insightInfoCard, selectedTokens) {
    if (!logger$2) {
        logger$2 = Logger.create('auto-analyzer-service');
    }
    let request = getA3AnomalyExplanationAnalysisRequest(visualizationModel, insightInfoCard, selectedTokens);
    alertService.showAlert({
        message: strings.a3.TRIGGER_MESSAGE,
        type: alertService.alertConstants.type.SUCCESS
    });
    let eventProps = { [SpotIqAnalysisTypeEventProperty]: SpotIqAnalysisType.ANOMALY_EXPLANATION };
    let userAction = new UserAction$2(UserAction$2.CREATE_SPOTIQ_ANALYSIS);
    return triggerA3Analysis(request, userAction, eventProps)
        .then(handleVisualizationAnalysisSuccess, handleVisualizationAnalysisFailure);
}
function reTriggerInsightAnalysisOnDislike(vizModel, excludedTokens, a3Request) {
    let request = a3Request || getExistingA3Request(vizModel);
    let excludedTokensProto = getExcludedTokens(request);
    let eventProps = {};
    if (excludedTokens) {
        eventProps['spotiqExcludedColCount'] = excludedTokens.length;
    }
    if (!!excludedTokens && excludedTokens.length > 0) {
        Array.prototype.push.apply(excludedTokensProto, excludedTokens);
    }
    eventProps['insightVizId'] = vizModel.getReferencingViz().getId();
    eventProps['insightPinboardId'] = vizModel.getId();
    eventProps['excludedCols'] = excludedTokens;
    eventProps[SpotIqAnalysisTypeEventProperty] = SpotIqAnalysisType.FEEDBACK_DISLIKE;
    let userAction = new UserAction$2(UserAction$2.CREATE_SPOTIQ_ANALYSIS);
    alertService.showAlert({
        message: strings.a3.TRIGGER_MESSAGE,
        type: alertService.alertConstants.type.SUCCESS
    });
    return triggerA3Analysis(request, userAction, eventProps)
        .then(handleVisualizationAnalysisSuccess, handleVisualizationAnalysisFailure);
}
function triggerDataAnalysis$1(vizModel, vizColumns, selectedData, selectedTokens) {
    if (!logger$2) {
        logger$2 = Logger.create('auto-analyzer-service');
    }
    let request = getA3DataAnalysisRequest(vizModel, vizColumns, selectedData, selectedTokens);
    alertService.showAlert({
        message: strings.a3.TRIGGER_MESSAGE,
        type: alertService.alertConstants.type.SUCCESS
    });
    let eventProps = { [SpotIqAnalysisTypeEventProperty]: SpotIqAnalysisType.DEFAULT };
    let userAction = new UserAction$2(UserAction$2.CREATE_SPOTIQ_ANALYSIS);
    return triggerA3Analysis(request, userAction, eventProps)
        .then(handleVisualizationAnalysisSuccess, handleVisualizationAnalysisFailure);
}
function handleVisualizationAnalysisSuccess(response) {
    alertService.showAlert({
        message: strings.a3.ANALYSIS_ACCEPTED,
        type: alertService.alertConstants.type.SUCCESS,
        action: {
            message: strings.a3.OPEN_ANALYSES,
            link: navService.getInsightsPath('analyses'),
        }
    });
}
function handleVisualizationAnalysisFailure(error) {
    if (!logger$2) {
        logger$2 = Logger.create('auto-analyzer-service');
    }
    logger$2.error('A3 visualization analysis request failed.', error);
    alertService.showAlert({
        message: strings.a3.ANALYSIS_FAILED,
        type: alertService.alertConstants.type.ERROR
    });
}

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Jasmeet Singh Jaggi(jasmeet@thoughtspot.com)
 *
 * @fileoverview A component to view and customize A3 Request.
 */
let A3AnalysisCustomizerComponent = class A3AnalysisCustomizerComponent extends BaseComponent$1 {
    constructor(a3AnalysisRequest, sageClient, allColumns, onCommit, isTableAnalysis, analysisType) {
        super();
        this.a3AnalysisRequest = a3AnalysisRequest;
        this.onCommit = onCommit;
        this.sageClient = sageClient;
        this.allColumns = allColumns;
        this.isTableAnalysis = isTableAnalysis;
        this.analysisType = analysisType;
        if (a3AnalysisRequest.getTableAnalysis()) {
            this.tableId = a3AnalysisRequest.getTableAnalysis().getTableGuid();
        }
        this.initColumnSelectorComponent();
        this.initAlgorithmCustomizerComponent();
    }
    trigger() {
        let selectedTokens = this.getSelectedColumns();
        customizeA3Request(this.a3AnalysisRequest, selectedTokens, null);
        if (!!this.a3AlgorithmCustomizerComponent &&
            !this.a3AlgorithmCustomizerComponent.updateA3Request()) {
            if (this.a3AlgorithmCustomizerComponent.getInvalidInputMessageString()) {
                this.showAlertMessage(this.a3AlgorithmCustomizerComponent.getInvalidInputMessageString(), alertConstants.type.ERROR);
            }
            return;
        }
        triggerA3Analyis(this.a3AnalysisRequest, this.analysisType);
        this.onCommit();
    }
    showAlertMessage(msg, type) {
        this.alertComponent = new AlertComponent({
            message: msg,
            type: type,
            allowClose: true,
            hideReportButton: true
        }, (alertComponent => (() => { }))(), AlertComponent.CLASS_TAG.UNMUTED, 20000);
    }
    hideAlertMessage() {
        this.alertComponent = null;
    }
    setMax3AnalysisCustomizerComponent(maxColumnsOrAttributesChanged) {
        this.maxColumnsOrAttributesChanged = maxColumnsOrAttributesChanged;
        if (this.maxColumnsOrAttributesChanged && !this.isTableAnalysis) {
            this.a3AnalysisColumnSelectorComponent.reset();
            this.a3AlgorithmCustomizerComponent.updateA3Request();
        }
    }
    getSelectedColumns() {
        const columnSelector = this.isTableAnalysis ?
            this.a3AnalysisTableColumnSelector
            : this.a3AnalysisColumnSelectorComponent;
        return columnSelector.getSelectedColumns();
    }
    initColumnSelectorComponent() {
        let selectedTokens = getSelectedTokens(this.a3AnalysisRequest);
        if (!this.isTableAnalysis) {
            this.a3AnalysisColumnSelectorComponent = new A3AnalysisColumnSelectorComponent(this.sageClient, selectedTokens, this.a3AnalysisRequest, false, this);
        }
        else {
            this.a3AnalysisTableColumnSelector = new A3AnalysisTableColumnSelectorComponent(this.tableId, this.allColumns, selectedTokens, this);
        }
    }
    initAlgorithmCustomizerComponent() {
        this.a3AlgorithmCustomizerComponent = new A3AlgorithmCustomizerComponent(this.a3AnalysisRequest, this.isTableAnalysis, this.allColumns, this);
    }
    allowAdvancedParams() {
        return !!(this.a3AlgorithmCustomizerComponent &&
            !this.a3AlgorithmCustomizerComponent.isA3AnomalyExplanation);
    }
    onTabActivated(activeTab) {
        if (activeTab.tabId === 'advanced') {
            this.a3AlgorithmCustomizerComponent.showInfoBox();
        }
        else {
            if (!this.isTableAnalysis) {
                this.a3AnalysisColumnSelectorComponent.onTabActivated(this.maxColumnsOrAttributesChanged);
            }
            else {
                this.a3AnalysisTableColumnSelector.onTabActivated(this.maxColumnsOrAttributesChanged);
            }
            this.maxColumnsOrAttributesChanged = false;
        }
    }
};
A3AnalysisCustomizerComponent = __decorate$3([
    Component({
        name: 'bkA3AnalysisCustomizer',
        templateUrl: 'src/modules/a3/a3-analysis-customizer/a3-analysis-customizer.html'
    })
], A3AnalysisCustomizerComponent);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Manoj Ghosh (manoj.ghosh@thoughtspot.com),
 *
 * @fileoverview This component displays the sage columns for customer to select for
 * a3 analysis.
 *
 */
/**
 * A3 Dialog component shows A3 related information for customers to select options from.
 */
let A3DialogComponent = class A3DialogComponent extends BaseComponent$1 {
    constructor(a3Request, sageClient, onCommit, allColumns, analysisType) {
        super();
        this.a3AnalysisCustomizerComponent = new A3AnalysisCustomizerComponent(a3Request, sageClient, allColumns, onCommit, isTableAnalysis(a3Request), analysisType);
    }
};
A3DialogComponent = __decorate$3([
    Component({
        name: 'bkA3Dialog',
        templateUrl: 'src/modules/a3/a3-dialog.html'
    })
], A3DialogComponent);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Manoj Ghosh (manoj.ghosh@thoughtspot.com),
 *
 * @fileoverview A popup component to display sage recommended columns via auto complete request.
 * Customers will select and narrow down the choices for a3 analysis of the columns.
 */
let $q$3 = ngRequire('$q');
/**
 * A3 select columns popup component shows the related columns suggested by sage.
 */
let A3DialogPopupComponent = class A3DialogPopupComponent extends BaseComponent$1 {
    constructor(a3Request, sageClient, allColumns = null, analysisType) {
        super();
        this.init(a3Request, sageClient, allColumns, analysisType);
        this.splashScreenPopupComponent = new SplashScreenPopupComponent({
            splashImageUrl: '/resources/img/splash-screen/spotiq.png',
            title: strings.SPOT_IQ,
            bodyUrl: 'src/modules/a3/a3-splash-screen/splash-screen-body.html',
            confirmBtnText: strings.a3.splash.confirm,
            onDismiss: () => {
                this.showAnalysisDialog();
                setShouldHideSplashScreen(true);
                return true;
            },
            onConfirm: () => {
                this.splashScreenPopupComponent.hide();
            }
        });
    }
    show() {
        if (getShouldHideSplashScreen()) {
            this.showAnalysisDialog();
        }
        else {
            this.splashScreenPopupComponent.show();
        }
    }
    showAnalysisDialog() {
        this.analysisDialog = show({
            dialogSize: DialogSize.SMALL,
            cancelBtnLabel: strings.CANCEL,
            title: strings.SPOT_IQ,
            headerIcon: 'rd-icon-analyze-custom-m',
            onHeaderInfoIconClicked: () => {
                this.analysisDialog.close(null);
                this.splashScreenPopupComponent.show();
            },
            skipConfirmBtn: true,
            customCssClass: 'bk-a3-dialog',
            confirmAsyncBtnLabel: strings.a3.triggerAnalysis,
            onConfirmAsync: () => {
                let defer = $q$3.defer();
                let analysisComponent = this.a3DialogComponent.a3AnalysisCustomizerComponent;
                let algorithmComponent = this.a3DialogComponent.a3AnalysisCustomizerComponent
                    .a3AlgorithmCustomizerComponent;
                analysisComponent.trigger();
                if (!analysisComponent || algorithmComponent.isInputInvalid) {
                    defer.reject();
                    return defer.promise;
                }
                defer.resolve();
                return defer.promise;
            },
            onCancel: () => {
                return true;
            },
            onDismiss: () => {
                return true;
            },
            customData: {
                a3DialogComponent: this.a3DialogComponent,
            },
            customBodyUrl: 'src/modules/a3/a3-dialog-popup.html'
        });
    }
    hide() {
        ComponentPopupService.hide();
    }
    init(a3Request, sageClient, allColumns, analysisType) {
        this.a3DialogComponent = new A3DialogComponent(a3Request, sageClient, this.hide, allColumns, analysisType);
    }
};
A3DialogPopupComponent = __decorate$3([
    Provide('A3DialogPopupComponent'),
    Component({
        name: 'bkA3DialogPopup',
        templateUrl: 'src/modules/a3/a3-dialog-popup.html'
    })
], A3DialogPopupComponent);

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Shikhar Agarwal (shikhar@thoughtspot.com)
 *         Manoj Ghosh (manoj.ghosh@thoughtspot.com)
 *
 * @fileoverview Component for fetching drill suggestions on a visualization
 * This works by creating a transformed query to sage with appended keyword's like
 * 'by', 'foreach' and then requesting sage to return applicable recognised tokens for the new
 * transformed query. The resulting tokens are displayed to user as drill down choices.
 *
 * Some hints:
 * One way to return all the attributes is to have query like "Q by" where Q is the original query.
 * Similarly you can get all measures by "Q sum"
 * If you simply do Q with max_completions of 100 or so then you can get both
 * (top 100 ones by score)
 * Increase 100 to further large number if you want to get even more.
 */
let CancelablePromise$1 = ngRequire('CancelablePromise');
class SageTokenOptions extends TokenOptions {
    constructor(sageClient, shouldIncludeMeasures, showAllTokens) {
        super(sageClient, shouldIncludeMeasures, showAllTokens);
    }
    /**
     * Search for tokens using the searchText keyword.
     * @param searchText the search text that customers provide to filter down the columns.
     * @return {Promise<Array>} Array of tokens matching the search pattern.
     */
    getSearchItems(searchText) {
        if (this.pendingPromise) {
            this.pendingPromise.cancel();
        }
        let editTablePromise = this.initializationPromise.then(() => {
            let context = this.sageClient.getContext();
            let currentIndex = this.sageClient.getCurrentIndex();
            let searchToken = sage.RecognizedToken.createUnrecognizedToken(searchText);
            let tokens = this.drillTokens.concat(searchToken);
            let tableRequest = getNewACTableRequest();
            tableRequest.setInputTokens(tokens);
            // TODO(Archit): Temporary bug fix for SCAL-39021, until we move to a better API
            // to get the drill down columns insted of hacking EditTable call.
            tableRequest.setMaxCompletions(200);
            // Adds the the context tables into the data scope for query on query.
            let dataScopeTables = tableRequest.getDataScopeLogicalTables();
            let tables = context.getTables();
            tables.forEach(function (table, index) {
                if (index < currentIndex && dataScopeTables.indexOf(table) < 0) {
                    dataScopeTables.push(table.getId());
                }
            });
            if (this.showAllTokens) {
                tableRequest.setMaxCompletions(-1);
            }
            return editTable(context, currentIndex, tableRequest)
                .then((sageResponse) => {
                let answerResponse = sageResponse.answerResponse;
                let tableResponse = answerResponse.getTableResponse();
                return this.getItems(tableResponse);
            });
        });
        this.pendingPromise = new CancelablePromise$1(editTablePromise);
        return this.pendingPromise;
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2017
 *
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview Base class for all the context menu item components.
 */
class VizContextMenuItemBase extends ScopedComponent$1 {
    constructor() {
        super(...arguments);
        this.enabled = true;
    }
    isEnabled() {
        return this.enabled;
    }
    getDisabledHelp() {
        return this.disabledHelp;
    }
    disable(disabledHelp) {
        this.enabled = false;
        this.disabledHelp = disabledHelp;
    }
    onClick() {
        if (!this.isEnabled()) {
            return;
        }
        this.onItemClick();
    }
}

/**
 * Copyright: ThoughtSpot Inc. 2014-2015
 * Author: Shikhar Agarwal (shikhar@thoughtspot.com)
 *         Manoj Ghosh (manoj.ghosh@thoughtspot.com)
 *
 * @fileoverview Controller to handle drilling in viz.
 */
let DrillMenuItem = class DrillMenuItem extends VizContextMenuItemBase {
    constructor(filteredCVPairs, unfilteredCVPairs, sageClient, answerModel, closeMenuCallback, showSubMenuItemsCallback, resetContextMenuCallback) {
        super();
        this.sageClient = sageClient;
        this.closeMenuCallback = closeMenuCallback;
        this.showSubMenuItemsCallback = showSubMenuItemsCallback;
        this.resetContextMenuCallback = resetContextMenuCallback;
        this.logger = logger_3('drill-menu-item');
        if (!!this.sageClient) {
            this.sageTokenOptions = new SageTokenOptions(sageClient, false);
            let config = {
                includeColumnAggregations: true,
                includeFilteredColumns: false,
                answerModel: answerModel
            };
            let queryTransformations = createQueryTransformations(filteredCVPairs, unfilteredCVPairs.map((col) => col.column), config).concat(sage.QueryTransform.createAddEmptyGroupByTransformation());
            this.sageTokenOptions.init(queryTransformations)
                .then(() => {
                this.handleDrillSearch('');
            });
        }
        else {
            this.disable(strings.vizContextMenu.disabledHelp.noSageClient);
        }
    }
    shouldShowDrillOptions() {
        return this.showDrillOptions;
    }
    onItemClick() {
        this.showDrillOptions = !this.showDrillOptions;
        if (this.showDrillOptions) {
            // Event for drill down
            startWorkflow(UserWorkflowActionTypes.DRILL_DOWN);
            this.showSubMenuItemsCallback(VizContextMenuOptionType.DRILL);
        }
        else {
            this.resetContextMenuCallback();
        }
    }
    getItems() {
        return this.items;
    }
    handleDrillSearch(search) {
        let hasAlert = false;
        this.sageTokenOptions.getSearchItems(search)
            .then((items) => {
            if (items.length) {
                hasAlert = false;
                this.items = items;
            }
            else {
                hasAlert = true;
                let alertContent = getNoMatchAlertContent();
                this.alertComponent = new AlertComponent(alertContent, void 0);
            }
        }, (response) => {
            // Sage doesn't yet return response as payload
            if (!response) {
                response = strings.alert.errorCause.UNKNOWN;
            }
            let msg = (response.message) ? response.message : response;
            hasAlert = true;
            this.logger.error(response);
            // TODO: response should be a payload for alertComponent
            this.alertComponent = new AlertComponent({
                message: msg,
                type: alertConstants.type.ERROR,
            }, void 0);
        }).finally(() => {
            if (!hasAlert) {
                this.alertComponent = null;
            }
        });
    }
    handleDrillItemClick(item) {
        let tableRequest = getNewACTableRequest();
        tableRequest.setInputTokens(item.tokens);
        this.sageClient.editTable(tableRequest);
        this.closeMenuCallback();
    }
};
DrillMenuItem = __decorate$3([
    Component({
        name: 'bkDrillMenuItem',
        templateUrl: 'src/modules/viz-context-menu/menu-items/drill/drill-menu-item.html'
    })
], DrillMenuItem);

/**
 * Copyright: ThoughtSpot Inc. 2019
 * Author: Rifdhan Nazeer (rifdhan.nazeer@thoughtspot.com)
 *
 * @fileoverview Generic context menu item that is customizable to have any look/style.
 */
// These are used as unique IDs for context menu items, and for track-id in user-click events
var GenericMenuItemType;
(function (GenericMenuItemType) {
    GenericMenuItemType["SHOW_UNDERLYING_DATA"] = "context-menu-item-show-underlying-data";
    GenericMenuItemType["INCLUDE"] = "context-menu-item-include";
    GenericMenuItemType["EXCLUDE"] = "context-menu-item-exclude";
    GenericMenuItemType["SPOTIQ_ANALYZE"] = "context-menu-item-spotiq-analyze";
    GenericMenuItemType["COPY_TO_CLIPBOARD"] = "context-menu-item-copy-to-clipboard";
    GenericMenuItemType["EXPLORE"] = "context-menu-item-explore";
    GenericMenuItemType["DOWNLOAD"] = "context-menu-item-download";
    GenericMenuItemType["EDIT"] = "context-menu-item-edit";
    GenericMenuItemType["COPY_AND_EDIT"] = "context-menu-item-copy-and-edit";
})(GenericMenuItemType || (GenericMenuItemType = {}));
let GenericMenuItem = class GenericMenuItem extends VizContextMenuItemBase {
    constructor(id, text, iconName, onClickCb) {
        super();
        this.id = id;
        this.text = text;
        this.iconName = iconName;
        this.onClickCb = onClickCb;
    }
    onItemClick() {
        this.onClickCb();
    }
};
GenericMenuItem = __decorate$3([
    Component({
        name: 'bkGenericMenuItem',
        templateUrl: 'src/modules/viz-context-menu/menu-items/generic-menu-item/generic-menu-item.html'
    })
], GenericMenuItem);
Provide('GenericMenuItem')({
    GenericMenuItemType,
    GenericMenuItem
});

/**
 * Copyright: ThoughtSpot Inc. 2014-2015
 * Author: Shikhar Agarwal (shikhar@thoughtspot.com)
 *
 * @fileoverview
 * A utility service to launch leaf level data view
 */
const _logger$4 = logger_3('leaf-level-data-launcher');
/**
 * Launches the dialog
 * @param documentModel
 * @param summaryInfo
 */
function showDetailView(documentModel, summaryInfo) {
    show({
        dialogSize: DialogSize.FULLSCREEN,
        title: strings.Showing_underlying_data,
        customCssClass: 'bk-leaf-level-data-dialog',
        customData: {
            documentModel: documentModel,
            summaryInfo: summaryInfo
        },
        contextState: GlobalContextStates.LEAF_LEVEL_DATA_VIEWER,
        skipCancelBtn: true,
        skipConfirmBtn: true,
        customBodyUrl: 'src/common/widgets/dialogs/templates/row-detail-dialog.html'
    });
}
/**
 * Public method for launching the row-detail-view dialog.
 * @param documentModel
 * @param summaryInfo
 */
function launch(documentModel, summaryInfo) {
    if (!documentModel) {
        _logger$4.error('Invalid parameters while launching row detail view');
        _logger$4.debug(arguments);
        return;
    }
    showDetailView(documentModel, summaryInfo);
}

/**
 * Copyright: ThoughtSpot Inc. 2015
 * Author: Rahul Paliwal (rahul@thoughtspot.com),
 *         Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview Controller for drill down context menu.
 */
let $q$4 = ngRequire('$q');
let alertService$1 = ngRequire('alertService');
let answerService = ngRequire('answerService');
let autoCompleteService = ngRequire('autoCompleteService');
let vizContextMenuUtil = ngRequire('vizContextMenuUtil');
let Logger$1 = ngRequire('Logger');
let UserAction$3 = ngRequire('UserAction');
let logger$3;
Provide('showUnderlyingDataService')({
    launchVizLevelUnderlyingData,
    launchPointUnderlyingData
});
/**
 * Launches leaf data for vizLevel type.
 * Here we don't need to do any transformations. We only need un-aggregated leaf
 * data for the given document model.
 * Also there is no summary information for this type.
 */
function launchVizLevelUnderlyingData(vizModel, sageClient) {
    if (!logger$3) {
        logger$3 = Logger$1.create('show-underlying-data-service');
    }
    let answerModel = vizModel.getContainingAnswerModel();
    // SCAL-7778: for falcon performance reason we want to remove any sort by clauses
    // when asking for underlying data. This is achieved by removing all but non-filter
    // clauses and adding back all the columns of the table to the query.
    let queryTransformations = vizContextMenuUtil.createQueryTransformations([], vizModel.getVizColumns(), {
        includeColumnAggregations: false,
        includeFilteredColumns: false,
        answerModel: answerModel
    });
    processTransformations(sageClient, queryTransformations, null);
}
function launchPointUnderlyingData(filteredCVPairs, unfilteredCVPairs, sageClient) {
    if (!logger$3) {
        logger$3 = Logger$1.create('show-underlying-data-service');
    }
    if (!filteredCVPairs || !filteredCVPairs) {
        logger$3.error('Launching row detail view with invalid parameters');
        return;
    }
    let queryTransformations = vizContextMenuUtil.createQueryTransformations(filteredCVPairs, unfilteredCVPairs.map((col) => col.column), {
        includeColumnAggregations: false,
        includeFilteredColumns: true
    });
    let summaryInfo = filteredCVPairs.concat(unfilteredCVPairs);
    processTransformations(sageClient, queryTransformations, summaryInfo);
}
/**
 * 1. Processes Query Transformations
 * 2. Fetches transformed Answer Model from transformed answer state
 * 3. Launches Drill Leaf Data from fetched Answer Model
 */
function processTransformations(sageClient, queryTransformations, summaryInfo) {
    let sageContext = sageClient.getContext();
    let index = sageClient.getCurrentIndex();
    loadingIndicator.showLoading();
    autoCompleteService.transformTable(sageContext, index, queryTransformations)
        .then((sageResponse) => {
        let answerResponse = sageResponse.answerResponse;
        let questionParams = {};
        questionParams[jsonConstants_1.SAGE_CONTEXT_PROTO_KEY] = answerResponse.getContext();
        questionParams[jsonConstants_1.SAGE_CONTEXT_INDEX_KEY] = sageClient.getCurrentIndex();
        let params = {
            includeData: true,
            leafData: true,
            requestType: RequestTypes.DATA_SHOW_UNDERLYING_ROW
        };
        let userAction = new UserAction$3(UserAction$3.FETCH_ANSWER);
        answerService.getAnswer(questionParams, params)
            .then((response) => {
            let answerModel = response.data;
            launch(answerModel, summaryInfo);
            return answerModel;
        }, (response) => {
            alertService$1.showUserActionFailureAlert(userAction, response);
            return $q$4.reject(response.data);
        })
            .finally(() => {
            loadingIndicator.hideLoading();
        });
    }, (e) => {
        logger$3.error('error getting leaf level data', e);
        loadingIndicator.hideLoading();
    });
}

/**
 * Copyright: ThoughtSpot Inc. 2017
 * Author: Mahesh Sharma (mahesh@thoughtspot.com)
 *
 * @fileoverview Utility for handling viz context menu operations.
 */
let util$2 = ngRequire('util');
let Logger$2 = ngRequire('Logger');
let sessionService$1 = ngRequire('sessionService');
let dateUtil = ngRequire('dateUtil');
let logger$4;
var VizContextMenuOptionType;
(function (VizContextMenuOptionType) {
    VizContextMenuOptionType["DRILL"] = "DRILL";
    VizContextMenuOptionType["APPLY_AS_RUNTIME_FILTER"] = "APPLY_AS_RUNTIME_FILTER";
    VizContextMenuOptionType["RELATED_ITEMS"] = "RELATED_ITEMS";
    VizContextMenuOptionType["GENERIC"] = "GENERIC";
})(VizContextMenuOptionType || (VizContextMenuOptionType = {}));
/**
 * These options will always be visible, if they are not supported in a particular context,
 * we will disable them with a tooltip.
 * @type {any[]}
 */
let DefaultVizContextMenuOptionTypes = [
    VizContextMenuOptionType.DRILL,
    GenericMenuItemType.SHOW_UNDERLYING_DATA,
    GenericMenuItemType.EXCLUDE,
    GenericMenuItemType.INCLUDE
];
let VizContextMenuOptionsRequiringUnderlyingDataAccess = [
    VizContextMenuOptionType.DRILL,
    GenericMenuItemType.SHOW_UNDERLYING_DATA,
    GenericMenuItemType.EXCLUDE,
    GenericMenuItemType.INCLUDE,
    GenericMenuItemType.SPOTIQ_ANALYZE
];
/**
 * The order in which these items should appear in the context menu.
 * Note that enabled items will appear first before disabled items. Within disabled and enabled
 * subset this order will be respected.
 * @type {any[]}
 *
 * Note(Rifdhan): we are have moved most context menu items to use the GenericMenuItem, but the few
 * remaining items have not yet been moved. Until they are all moved over, this list will contain
 * a mix of the two IDs.
 */
let VizContextMenuItemsOrder = [
    GenericMenuItemType.EXPLORE,
    GenericMenuItemType.COPY_TO_CLIPBOARD,
    GenericMenuItemType.DOWNLOAD,
    GenericMenuItemType.EDIT,
    GenericMenuItemType.COPY_AND_EDIT,
    GenericMenuItemType.EXCLUDE,
    GenericMenuItemType.INCLUDE,
    VizContextMenuOptionType.DRILL,
    GenericMenuItemType.SHOW_UNDERLYING_DATA,
    GenericMenuItemType.SPOTIQ_ANALYZE,
    VizContextMenuOptionType.APPLY_AS_RUNTIME_FILTER,
    VizContextMenuOptionType.RELATED_ITEMS
];
function sortContextMenuItems(menuItems) {
    // Reorder the items defined by VizContextMenuItemsOrder.
    let orderObj = {};
    VizContextMenuItemsOrder.forEach((itemId, index) => {
        orderObj[itemId] = index;
    });
    return menuItems.sort(function (item1, item2) {
        let id1 = item1.ctrl.id || item1.id;
        let id2 = item2.ctrl.id || item2.id;
        return orderObj[id1] - orderObj[id2];
    });
}
let VizContextMenuUrls = {
    'DRILL': 'menu-item-drill.html',
    'APPLY_AS_RUNTIME_FILTER': 'src/modules/viz-context-menu/templates/menu-item-apply-as-runtime-filter.html',
    'RELATED_ITEMS': 'menu-item-exclude.html',
    'GENERIC': 'generic-item.html'
};
class ContextMenuInputValue {
    constructor(column, value) {
        this.column = column;
        this.value = value === null ? util$2.formatDataValue(value) : value;
    }
}
class ContextMenuInputPoint {
    constructor() {
        this.selectedAttributes = [];
        this.deselectedAttributes = [];
        this.selectedMeasures = [];
        this.deselectedMeasures = [];
    }
    pushSelected(inputValue) {
        if (inputValue.column.isGroupingColumn()) {
            this.selectedAttributes.push(inputValue);
        }
        else {
            this.selectedMeasures.push(inputValue);
        }
    }
    pushDeselected(inputValue) {
        if (inputValue.column.isGroupingColumn()) {
            this.deselectedAttributes.push(inputValue);
        }
        else {
            this.deselectedMeasures.push(inputValue);
        }
    }
    getAllColumnInputValues() {
        return [].concat(this.selectedAttributes, this.deselectedAttributes, this.selectedMeasures, this.deselectedMeasures);
    }
}
let VizContextMenuItem = class VizContextMenuItem {
    constructor(id, ctrl) {
        this.id = id;
        this.url = VizContextMenuUrls[id];
        this.ctrl = ctrl;
    }
    isEnabled() {
        return this.ctrl.isEnabled();
    }
    getDisabledHelp() {
        return this.ctrl.getDisabledHelp();
    }
    disable(disabledHelp) {
        this.ctrl.disable(disabledHelp);
        return this;
    }
};
VizContextMenuItem = __decorate$3([
    Provide('VizContextMenuItem')
], VizContextMenuItem);
function createQueryTransformations(columnValuePairs, unfilteredColumns, config) {
    // Let us say the original query is "revenue by region by category for 2013 for california,
    // nevada" and the user drilled on "nevada, Electronics" data point.
    let queryTransformations = [
        // Remove non filter phrases.
        // In the example: "for 2013 for california, nevada"
        sage.QueryTransform.createRemoveNonFilterPhrasesTransformation(),
        sage.QueryTransform.createRemoveAllHavingFiltersTransformation()
    ];
    // Prepend the unfiltered columns that should be kept.
    // Example: "revenue for 2013 for california, nevada"
    unfilteredColumns.forEach(function (unfilteredCol) {
        let addColumnTransformation = sage.QueryTransform.createAddColumnTransformation({
            tokenOutputGuid: unfilteredCol.getId(),
            prepend: true
        });
        if (config.includeColumnAggregations && unfilteredCol.hasAggregateOverride()) {
            let effectiveAggregateType = (unfilteredCol.getEffectiveAggregateType() || 'NONE')
                .toUpperCase();
            let sageAggrType = getSageAggrTypeForCallosumAggrType(effectiveAggregateType);
            addColumnTransformation.aggregation = sage.AggregationType[sageAggrType];
        }
        queryTransformations.push(addColumnTransformation);
    });
    queryTransformations = queryTransformations.concat(createIncludeQueryTransformations(columnValuePairs, config.answerModel, config.includeFilteredColumns));
    return queryTransformations;
}
function createExcludeQueryTransformations(columnValuePairs) {
    let queryTransformations = [];
    logger$4 = logger$4 || Logger$2.create('viz-context-menu-util');
    columnValuePairs.forEach(function (cvPair) {
        if (cvPair.value === null) {
            // Warn but continue. See the note about null handling above.
            logger$4.warn('An exclude drill filter column has null value', cvPair, columnValuePairs);
        }
        // Now append one filter for each of the columns in the column value pair.
        // Example: "revenue for 2013 for region = nevada for category = Electronics"
        //
        // Depending on the type of filter, we may have to use a "between" filter transform or a in
        // filter.
        if (Array.isArray(cvPair.value)) {
            logger$4.warn('Exclusion drill called for bucketed column, skipping!', cvPair.column);
        }
        else {
            queryTransformations.push(sage.QueryTransform.createAddPredicateFilterTransformation({
                tokenOutputGuid: cvPair.column.getId(),
                op: sage.CompareType.NE,
                value1: cvPair.column.convertValueToSageValue(cvPair.value)
            }));
        }
    });
    return queryTransformations;
}
function createIncludeQueryTransformations(columnValuePairs, answerModel, includeFilteredColumns) {
    includeFilteredColumns = includeFilteredColumns || false;
    let includedFilteredColumnIds = [];
    let queryTransformations = [];
    logger$4 = logger$4 || Logger$2.create('viz-context-menu-util');
    columnValuePairs.forEach(function (cvPair) {
        if (cvPair.value === null) {
            // Warn but continue. See the note about null handling above.
            logger$4.warn('An include drill filter column has null value', cvPair, columnValuePairs);
        }
        let columnValuePair = getBucketedColumnValuePair(cvPair, answerModel);
        // Remove existing filters in the query that apply to columns in the column value pair. Note
        // that any existing filter that is not in the output should be left alone.
        // Example: "revenue for 2013".
        // SCAL-24957 We will not remove filters if its a date column and we have already
        // removed filters for this column before
        let columnId = cvPair.column.getBaseColumnGuid();
        let skipRemovingFilters = cvPair.column.isDateFamilyColumn() &&
            includedFilteredColumnIds.includes(columnId);
        if (!skipRemovingFilters) {
            includedFilteredColumnIds.push(columnId);
            if (cvPair.column.isDateColumn()) {
                queryTransformations.push(sage.QueryTransform.createRemoveAllDateRangeFilterTransformation({
                    tokenOutputGuid: columnValuePair.column.getId()
                }));
            }
            else {
                queryTransformations.push(sage.QueryTransform.createRemoveAllFilterTransformation({
                    tokenOutputGuid: columnValuePair.column.getId()
                }));
            }
        }
        // Now append one filter for each of the columns in the column value pair.
        // Example: "revenue for 2013 for region = nevada for category = Electronics"
        //
        // Depending on the type of filter, we may have to use a "between" filter transform or a in
        // filter.
        if (Array.isArray(columnValuePair.value)) {
            queryTransformations.push(sage.QueryTransform.createAddPredicateFilterTransformation({
                tokenOutputGuid: columnValuePair.column.getId(),
                op: sage.CompareType.BW_INC,
                value1: columnValuePair.column.convertValueToSageValue(columnValuePair.value[0]),
                value2: columnValuePair.column.convertValueToSageValue(columnValuePair.value[1])
            }));
        }
        else {
            queryTransformations.push(sage.QueryTransform.createAddInFilterTransformation({
                tokenOutputGuid: columnValuePair.column.getId(),
                value: columnValuePair.column.convertValueToSageValue(columnValuePair.value)
            }));
        }
        if (includeFilteredColumns) {
            queryTransformations.push(sage.QueryTransform.createAddColumnTransformation({
                tokenOutputGuid: columnValuePair.column.getId(),
                prepend: true
            }));
        }
    });
    return queryTransformations;
}
function getVizContextMenuItems(vizModel, sageClient, contextMenuInput, closeContextMenuCallback, showSubMenuItemsCallback, resetContextMenuCallback) {
    let menuItems = _$1.reduce(DefaultVizContextMenuOptionTypes, (menuItems, optionID) => {
        let clickedPoint = contextMenuInput.clickedPoint;
        let caption;
        switch (optionID) {
            case VizContextMenuOptionType.DRILL:
                // Regardless of what attributes are selected or not, always add all the
                // attributes in that row as filters, to make sure that we are drilling only the
                // data represented by that row.
                let filteringAttributes = clickedPoint.selectedAttributes.concat(clickedPoint.deselectedAttributes);
                // If at least one measure is selected, drill that, else drill all the measures
                // present.
                let measuresToDrill = clickedPoint.selectedMeasures.length
                    ? clickedPoint.selectedMeasures
                    : clickedPoint.deselectedMeasures;
                menuItems[optionID] = new VizContextMenuItem(VizContextMenuOptionType.DRILL, new DrillMenuItem(filteringAttributes, measuresToDrill, sageClient, vizModel.getContainingAnswerModel(), closeContextMenuCallback, showSubMenuItemsCallback, resetContextMenuCallback));
                break;
            case GenericMenuItemType.SHOW_UNDERLYING_DATA:
                // In case of table, the row could be partially selected, but we just pretend as
                // if entire row was selected. So we merge selected and deselected attributes
                // and measures. For charts, you can only select on entire row
                // (i.e. A point on chart). So for charts deselectedAttributes and
                // deselectedMeasures are always empty.
                menuItems[optionID] = new VizContextMenuItem(VizContextMenuOptionType.GENERIC, new GenericMenuItem(GenericMenuItemType.SHOW_UNDERLYING_DATA, strings.Show_underlying, 'rd-icon-show-underlying-data-m', () => {
                    launchPointUnderlyingData(clickedPoint.selectedAttributes
                        .concat(clickedPoint.deselectedAttributes), clickedPoint.selectedMeasures
                        .concat(clickedPoint.deselectedMeasures), sageClient);
                    closeContextMenuCallback();
                }));
                break;
            case GenericMenuItemType.INCLUDE:
                if (clickedPoint.selectedAttributes.length === 1) {
                    caption = stringUtil_1(strings.vizContextMenu.includeValue, clickedPoint.selectedAttributes[0].column
                        .getDataFormatter()(clickedPoint.selectedAttributes[0].value));
                }
                else if (vizModel.getVizType() === jsonConstants_1.vizType.CHART) {
                    caption = strings.vizContextMenu.includePoint;
                }
                else {
                    caption = strings.vizContextMenu.includeValues;
                }
                menuItems[optionID] = new VizContextMenuItem(VizContextMenuOptionType.GENERIC, new GenericMenuItem(GenericMenuItemType.INCLUDE, caption, 'rd-icon-filter-m', () => {
                    startFilterChangeWorkflow();
                    sageClient.transformTable(createIncludeQueryTransformations(clickedPoint.selectedAttributes, vizModel.getContainingAnswerModel(), false));
                    closeContextMenuCallback();
                }));
                break;
            case GenericMenuItemType.EXCLUDE:
                if (clickedPoint.selectedAttributes.length === 1) {
                    caption = stringUtil_1(strings.vizContextMenu.excludeValue, clickedPoint.selectedAttributes[0].column
                        .getDataFormatter()(clickedPoint.selectedAttributes[0].value));
                }
                else {
                    caption = strings.vizContextMenu.excludeValues;
                }
                menuItems[optionID] = new VizContextMenuItem(VizContextMenuOptionType.GENERIC, new GenericMenuItem(GenericMenuItemType.EXCLUDE, caption, 'rd-icon-filter-m', () => {
                    startFilterChangeWorkflow();
                    sageClient.transformTable(createExcludeQueryTransformations(clickedPoint.selectedAttributes));
                    closeContextMenuCallback();
                }));
                break;
            default:
                throw new Error('Unhandled context menu type');
        }
        return menuItems;
    }, {});
    if (sessionService$1.isA3Enabled()) {
        menuItems[GenericMenuItemType.SPOTIQ_ANALYZE] = new VizContextMenuItem(VizContextMenuOptionType.GENERIC, new GenericMenuItem(GenericMenuItemType.SPOTIQ_ANALYZE, strings.spotIQAnalyze, 'rd-icon-analyze-m', () => {
            let vizColumns = [];
            let selectedData = [];
            parseVizDataForA3(vizColumns, contextMenuInput, selectedData);
            let a3Request = getA3DataAnalysisRequest(vizModel, vizColumns, selectedData, void 0);
            let a3p = new A3DialogPopupComponent(a3Request, sageClient, null, SpotIqAnalysisType.CONTEXT_MENU);
            a3p.show();
            closeContextMenuCallback();
        }));
    }
    _$1.forEach(menuItems, (item, optionID) => {
        let enabilityAndExplanation = getContextMenuItemEnability(vizModel, optionID, contextMenuInput);
        if (!enabilityAndExplanation.enabled) {
            item.disable(enabilityAndExplanation.explanation);
        }
    });
    return menuItems;
}
function startFilterChangeWorkflow() {
    // Event for changing a filter from the UI
    startWorkflow(UserWorkflowActionTypes.TRANSFORM_TABLE, {
        payload: {
            startType: 'contextMenuChangeFilter'
        }
    });
}
function getContextMenuItemEnability(vizModel, optionID, contextMenuInput) {
    let disabledHelp = strings.vizContextMenu.disabledHelp;
    if (vizModel.isMissingUnderlyingDataAccess() &&
        VizContextMenuOptionsRequiringUnderlyingDataAccess.indexOf(optionID) !== -1) {
        return {
            enabled: false,
            explanation: disabledHelp.requiresUnderlyingAccess
        };
    }
    if (optionID === VizContextMenuOptionType.DRILL ||
        optionID === GenericMenuItemType.SHOW_UNDERLYING_DATA) {
        let disabledExplanation = null;
        let allPoints = [contextMenuInput.clickedPoint, ...contextMenuInput.selectedPoints];
        allPoints.forEach((drillPoint) => {
            if (disabledExplanation !== null) {
                return;
            }
            let measureColumnInputs = [];
            if (optionID === VizContextMenuOptionType.DRILL) {
                // For drilling, just drill the selected measures, if no measure is selected,
                // drill all measures.
                measureColumnInputs = drillPoint.selectedMeasures.length
                    ? drillPoint.selectedMeasures
                    : drillPoint.deselectedMeasures;
            }
            else {
                // For showing underlying data, pretend as if entire row is selected.
                measureColumnInputs =
                    drillPoint.selectedMeasures.concat(drillPoint.deselectedMeasures);
            }
            let measureColumns = measureColumnInputs
                .map((vDV) => vDV.column);
            if (!measureColumns || !measureColumns.length) {
                disabledExplanation = optionID === VizContextMenuOptionType.DRILL
                    ? disabledHelp.noMeasureDrillDown
                    : disabledHelp.noMeasureUnderlyingData;
                return;
            }
            let hasAnyGrowthCol = measureColumns.some(function (column) {
                return column.isGrowth();
            });
            if (hasAnyGrowthCol) {
                disabledExplanation = optionID === VizContextMenuOptionType.DRILL
                    ? disabledHelp.growthMeasureDrillDown
                    : disabledHelp.growthMeasureUnderlyingData;
            }
        });
        if (disabledExplanation !== null) {
            return {
                enabled: false,
                explanation: disabledExplanation
            };
        }
    }
    let clickedPoint = contextMenuInput.clickedPoint;
    if (optionID === GenericMenuItemType.EXCLUDE) {
        // Note that because we don't support expressing OR filter in sage (or transform), it is not
        // possible to support exclude quick filter for a query involving multiple grouping columns
        // or grouping column involving bucketed date.
        if (clickedPoint.selectedAttributes.length !== 1) {
            let explanation = vizModel.getVizType() === jsonConstants_1.vizType.CHART
                ? disabledHelp.disabledExcludeInChart
                : disabledHelp.disabledExcludeInTable;
            return {
                enabled: false,
                explanation: explanation
            };
        }
        if (isAnyBucketedDateColumn(clickedPoint.selectedAttributes)) {
            return {
                enabled: false,
                explanation: disabledHelp.dateColumn
            };
        }
    }
    if (optionID === GenericMenuItemType.INCLUDE) {
        if (clickedPoint.selectedAttributes.length === 0) {
            return {
                enabled: false,
                explanation: disabledHelp.disabledInclude
            };
        }
        if (isAnyBucketedDateColumn(clickedPoint.selectedAttributes)) {
            return {
                enabled: false,
                explanation: disabledHelp.dateColumn
            };
        }
    }
    if (optionID === GenericMenuItemType.SHOW_UNDERLYING_DATA) {
        // currently we don't show formula columns in the leaf level data
        // (i.e. all the formula columns are excluded). if there series
        // has only formula columns this would result in an empty view
        // hence we disable "show underlying data" option for such cases
        let cols = clickedPoint.getAllColumnInputValues().map(iv => iv.column);
        let allColumnsAreFormulae = clickedPoint.getAllColumnInputValues()
            .map(iv => iv.column)
            .every((col) => col.isFormula());
        if (allColumnsAreFormulae) {
            return {
                enabled: false,
                explanation: disabledHelp.allFormula
            };
        }
    }
    return {
        enabled: true
    };
}
function isAnyBucketedDateColumn(attributeInputValues) {
    return attributeInputValues.some(attribute => attribute.column.isDateColumn() &&
        attribute.column.getTimeBucket() !== dateUtil.timeBuckets.NO_BUCKET);
}
/**
 * Parses the visualization data and populates the vizColumns and selectedData for A3
 * analysis
 * @param vizColumns
 * @param chartDrillInput
 * @param selectedData the function populates this array
 */
function parseVizDataForA3(vizColumns, chartDrillInput, selectedData) {
    logger$4 = logger$4 || Logger$2.create('viz-context-menu-util');
    // Input validation.
    if (!vizColumns || !selectedData) {
        logger$4.error('Parsing of context menu data called with undefined out params');
        return;
    }
    let row;
    let drillInputRows = chartDrillInput.selectedPoints.length
        ? chartDrillInput.selectedPoints
        : [chartDrillInput.clickedPoint];
    let firstInputRow = drillInputRows[0];
    if (!firstInputRow
        || !firstInputRow.selectedAttributes
        || !firstInputRow.selectedAttributes.length) {
        logger$4.error('No data row passed for analysis');
        return;
    }
    firstInputRow.selectedAttributes.forEach((attrDrillValue) => vizColumns.push(attrDrillValue.column));
    drillInputRows.forEach((drillInputRow) => {
        row = new callosum.DataRow();
        drillInputRow.selectedAttributes.forEach((drillInputValue, colIdx) => {
            if (drillInputValue.column.getId() !== vizColumns[colIdx].getId()) {
                logger$4.error('Mismatch in attribute columns');
            }
            let type = drillInputValue.column.getEffectiveDataType();
            let v = vizColumns[colIdx].convertValueToBackend(drillInputValue.value);
            let value = util$2.getConstantValue(v, type);
            row.getDataValue().push(value);
        });
        selectedData.push(row);
    });
}
function getClampedBoundaries(inputBoundaries, column, answerModel) {
    // If the input is not an interval or any information to clamp is unavailable, bail out.
    if (!answerModel || !column || inputBoundaries.length !== 2) {
        return inputBoundaries;
    }
    let filterModel = answerModel.getCurrentAnswerSheet()
        .getFilterModelByColumn(column);
    if (!filterModel) {
        return inputBoundaries;
    }
    let filterColumn = filterModel.getColumn();
    let isDateFilter = filterModel.getType() === FILTER_MODEL_TYPES.DATE;
    if (!isDateFilter) {
        return inputBoundaries;
    }
    // We use the Interval utility from luxon to clamp the provided date range to align
    // with the date filter range in the answer.
    // To use the utility, we have to prep the data appropriately.
    // 1. Convert all epoch values to milliseconds.
    // 2. Depending on the operator, change the interval so that the resulting range is inclusive.
    // (Interval intersection expects ranges to be inclusive).
    //
    // For the unbounded comparison operators (GT, GE, LT, LE), we use the max javascript date
    // boundaries as per the ECMAScript 5 convention (100 million days on either side of epoch):
    // http://www.tutorialspoint.com/javascript/javascript_date_object.htm
    let filterConditions = filterModel.getConditions();
    if (filterConditions.length !== 1) {
        return inputBoundaries;
    }
    let filterCondition = filterConditions[0];
    let filterOperator = filterCondition.condition.op;
    let filterValues = filterCondition.condition.values.map((filterValue) => filterColumn.convertValueFromBackend(filterValue.intValue));
    let MAX_DATE_EPOCH = 8640000000000000, MIN_DATE_EPOCH = -8640000000000000;
    switch (filterOperator) {
        case sage.CompareTypeProto.E.EQ:
            // The excluded date value must not be in the range of selected points.
            if (filterCondition.condition.isNegate) {
                return inputBoundaries;
            }
            filterValues.push(filterValues[0]);
            break;
        case sage.CompareTypeProto.E.GT:
            // For Greater Than, advance the value by 1 millisecond and treat this as Greater Than
            // Equal.
            filterValues[0]++;
            filterValues.push(MAX_DATE_EPOCH);
            break;
        case sage.CompareTypeProto.E.GE:
            filterValues.push(MAX_DATE_EPOCH);
            break;
        case sage.CompareTypeProto.E.LT:
            // For Lesser Than, reduce the value by 1 millisecond and treat this as Lesser Than
            // Equal.
            filterValues[0]--;
            filterValues.push(filterValues[0]);
            filterValues[0] = MIN_DATE_EPOCH;
            break;
        case sage.CompareTypeProto.E.LE:
            filterValues.push(filterValues[0]);
            filterValues[0] = MIN_DATE_EPOCH;
            break;
        case sage.CompareTypeProto.E.BW:
            filterValues[0]++;
            filterValues[1]--;
            break;
        case sage.CompareTypeProto.E.BW_INC_MAX:
            filterValues[0]++;
            break;
        case sage.CompareTypeProto.E.BW_INC_MIN:
            filterValues[1]--;
            break;
        case sage.CompareTypeProto.E.BW_INC:
            // noop
            break;
        default:
            return inputBoundaries;
    }
    let intersectionRange = dateUtil_8(inputBoundaries[0], inputBoundaries[1], filterValues[0], filterValues[1]);
    if (!dateUtil_12(intersectionRange)) {
        return inputBoundaries;
    }
    return dateUtil_11(intersectionRange);
}
function getBucketedColumnValuePair(columnValuePair, answerModel) {
    let column = columnValuePair.column;
    if (!column.isDateColumn()) {
        return {
            column: column,
            value: columnValuePair.value
        };
    }
    let timeBucketBoundaries = column.getDateBucketBoundaries(columnValuePair.value);
    if (!timeBucketBoundaries || timeBucketBoundaries.length <= 1) {
        return {
            column: column,
            value: columnValuePair.value
        };
    }
    timeBucketBoundaries = getClampedBoundaries(timeBucketBoundaries, column, answerModel);
    return {
        column: column,
        value: [timeBucketBoundaries[0], timeBucketBoundaries[1]]
    };
}
Provide('vizContextMenuUtil')({
    VizContextMenuOptionType,
    createQueryTransformations,
    createExcludeQueryTransformations,
    createIncludeQueryTransformations,
    getContextMenuItemEnability,
    parseVizDataForA3,
    VizContextMenuItemsOrder
});

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Jasmeet Singh Jaggi (jasmeet@thoughtspot.com)
 *
 * @fileoverview
 */
let Logger$3 = ngRequire('Logger');
function getContextMenuInputPointForNetwork(chartModel, networkElement) {
    let contextMenuInputPoint = new ContextMenuInputPoint();
    // TS will downcast node appropriately
    if (isChartLink(networkElement)) {
        let link = networkElement, measureColumn = chartModel.getYAxisColumns()[0], measureValue = link.value;
        contextMenuInputPoint.pushSelected(new ContextMenuInputValue(measureColumn, measureValue));
        [link.source, link.target].forEach((node) => {
            let column = chartModel.getXAxisColumns()[node.baseColumnIndex];
            let value = node.name;
            contextMenuInputPoint.pushSelected(new ContextMenuInputValue(column, value));
        });
    }
    else {
        let column = chartModel.getXAxisColumns()[networkElement.baseColumnIndex], value = networkElement.name;
        contextMenuInputPoint.pushSelected(new ContextMenuInputValue(column, value));
        let measureColumn = chartModel.getYAxisColumns()[0], measureValue = networkElement.value;
        contextMenuInputPoint.pushSelected(new ContextMenuInputValue(measureColumn, measureValue));
    }
    return contextMenuInputPoint;
}
function getInputForNetworkContextMenu(chartModel, sageClient, node, closeContextMenu, showSubMenuItems, resetContextMenu) {
    let clickContextMenuPoint = getContextMenuInputPointForNetwork(chartModel, node);
    let contextMenuInputPoints = {
        clickedPoint: clickContextMenuPoint,
        selectedPoints: []
    };
    let menuItems = getVizContextMenuItems(chartModel, sageClient, contextMenuInputPoints, closeContextMenu, showSubMenuItems, resetContextMenu);
    //Note(chab) for now, we do not allow multiple points selections
    return {
        points: contextMenuInputPoints,
        menuItems: sortContextMenuItems(_$1.values(menuItems))
    };
}

/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview Exports a config class for Sankey Component
 */
let defaultConfig = {
    iterations: 15,
    fontFamily: 'Optimo-Plain',
    labelPaddingLeft: 20,
    labelPaddingRight: 10,
    labelTextAnchor: 'end',
    labelDownShift: '.35em',
    nodeWidth: 10,
    nodePadding: 30,
    minTextSize: 10,
    maxTextSize: 10,
    margin: {
        top: 0, right: 10, bottom: 0, left: 10
    },
    padding: {
        top: 30, right: 0, bottom: 30, left: 50
    },
    svgContainerSelector: '.sankey-chart',
    xAxisTopSelector: '.x.axis.top',
    xAxisBottomSelector: '.x.axis.bottom',
    chartSelector: {
        node: '.node',
        link: '.link'
    },
    tooltipClass: 'bk-sankey-tooltip',
    chartAxisContainerSelector: '.bk-chart-container',
    chartBodySelector: '.bk-chart-body',
    sankeyClipPath: 'chart-clip-path',
    _gradientStart: 10,
    _gradientEnd: 90
};
class SankeyConfig {
    constructor(config) {
        Object.assign(this, defaultConfig, config);
        let customStyleConfig = CustomStylingService.getConfig();
        let axisStyle = customStyleConfig.getChartFontFace(CustomizableChartFeature.X_AXIS_LABEL).toStyle();
        this.axisFont = axisStyle.fontFamily;
        this.axisFontSize = axisStyle.fontSize;
        this.axisFontColor = axisStyle.color;
        this.initClassesField();
    }
    get gradientStart() {
        return `${this._gradientStart}%`;
    }
    get gradientEnd() {
        return `${this._gradientEnd}%`;
    }
    getFullSize(_width, _height) {
        let width = _width - (this.margin.left + this.margin.right);
        let height = _height - (this.margin.bottom + this.margin.top);
        return { width, height };
    }
    getChartSize(_width, _height) {
        let { width, height } = this.getFullSize(_width, _height);
        width = width - (this.padding.left + this.padding.right);
        height = height - (this.padding.top + this.padding.bottom);
        return { width, height };
    }
    getClipPathRectangleSelector(id) {
        return `#${this.getClipPathId(id)} > rect`;
    }
    getClipPathId(id) {
        return `${this.sankeyClipPath}-${id}`;
    }
    initClassesField() {
        this.xAxisTopClasses = browserUtil_2(this.xAxisTopSelector);
        this.xAxisBottomClasses = browserUtil_2(this.xAxisBottomSelector);
        this.svgContainerClass = browserUtil_2(this.svgContainerSelector);
        this.chartAxisContainerClass = browserUtil_2(this.chartAxisContainerSelector);
        this.chartBodySelectorClass = browserUtil_2(this.chartBodySelector);
        this.chartClasses =
            Object.keys(this.chartSelector).reduce((acc, k) => {
                acc[k] = browserUtil_2(this.chartSelector[k]);
                return acc;
            }, {});
    }
}

/**
 * Copyright Thoughtspot Inc. 2016
 * Author:  Francois Chabbey (francois.chabbey@thoughtspot.com)
 *
 * @fileoverview: Sankey Chart Component
 */
let BlinkPositionablePopover = ngRequire('BlinkPositionablePopover');
let ID = 0;
const CHART_CONTAINER = '.bk-sankey-container';
// size of small tile
const CHART_WIDTH_LIMIT = 300;
const CHART_HEIGHT_LIMIT = 200;
const CHART_MARGIN = 14;
const OFFSET = 7; //svg container always seem to take some extra space equal to this
// we give some space for the text that go on the left of the
// first node
const quickFix = 80;
let SankeyChartComponent = class SankeyChartComponent extends BaseChart {
    constructor(chartVizComponent, onRenderCallback, sageClient, initWidth = 0, initHeight = 0, options = new SankeyConfig()) {
        super();
        this.chartVizComponent = chartVizComponent;
        this.onRenderCallback = onRenderCallback;
        this.sageClient = sageClient;
        this.initWidth = initWidth;
        this.initHeight = initHeight;
        this.options = options;
        this.contextMenuCtrl = null;
        this.labelNameToLabelDisplayed = {};
        this.closeContextMenu = () => {
            if (this.contextMenuCtrl) {
                this.contextMenuCtrl.hide();
            }
        };
        this.showSubMenuItems = (subMenuId) => {
            if (this.contextMenuCtrl) {
                this.contextMenuCtrl.showSubMenuItems(subMenuId);
            }
        };
        this.resetContextMenu = () => {
            if (this.contextMenuCtrl) {
                this.contextMenuCtrl.reset();
            }
        };
        this.disableHighlightOnHover
            = chartVizComponent.dataVizComponentConfig.disableHighlightOnHover;
        this.model = chartVizComponent.dataVizComponentConfig.vizModel;
        if (this.model.getYAxisColumns().length > 0) {
            this.unit = this.model.getYAxisColumns()[0].getName();
        }
        if (this.model.xAxisColumnHasSorting()) {
            options.iterations = 0; // preserve order of nodes in layout
        }
        this._id = ID;
        ID++;
        this.tooltip = new BlinkPositionablePopover(null, [options.tooltipClass]);
        if (!chartVizComponent.dataVizComponentConfig.disableTransformations) {
            this.contextMenuCtrl = new ContextMenu(this.closeContextMenu);
        }
        this.nodeDepth = this.model.getDataModel().maxNodesInColumns;
    }
    getSeries() {
        return []; // used by legend-controller, not used in our case
    }
    onDestroy() {
        if (!!this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }
    setSize(width, height) {
        let chartHeight = height - CHART_MARGIN - OFFSET;
        // discuss those numbers
        if (width < CHART_WIDTH_LIMIT) {
            width = CHART_WIDTH_LIMIT;
        }
        if (chartHeight < CHART_HEIGHT_LIMIT) {
            chartHeight = CHART_HEIGHT_LIMIT;
        }
        // if we have more than 13 nodes for a column, we allow the chart
        // to grow outside the window
        if (this.nodeDepth > 13) {
            chartHeight = 50 * this.nodeDepth;
            width = width - 20; // remove scroll bar size otherwise it will overflow on X
        }
        this.getSvgContainer()
            .attr(SVG.height, chartHeight)
            .attr(SVG.width, width);
        // some nice pain from safari
        if (browserInfo.isSafari) {
            this.getSvgContainer().style('min-height', chartHeight);
        }
        let chartSize = this.options.getChartSize(width, chartHeight);
        this.updateGraph(chartSize.width, chartSize.height);
        // axis take the width of the chart, but goes in the full space
        this.updateAxis(chartSize.width, chartHeight);
    }
    // we cannot call initChart from parent, coz at that time, the element
    // is not mounted on the DOM
    postLink(element) {
        this.initChart(this.initWidth, this.initHeight, element[0]);
        this.setSize(this.initWidth, this.initHeight);
    }
    initChart(width, height, element) {
        let margin = this.options.margin;
        let padding = this.options.padding;
        let chartHeight = height - CHART_MARGIN - OFFSET;
        let sizeExent = _$1.values(this.options.getFullSize(width, chartHeight));
        if (!this.svgElement) {
            this.svgElement = select(element);
            this.svgElement = this.svgElement.select(CHART_CONTAINER)
                .style('margin-top', `${CHART_MARGIN}px`)
                .insert(SVG.svg)
                .attr(SVG.klass, this.options.svgContainerClass);
            this.svgElement.append(SVG.g)
                .attr(SVG.klass, this.options.chartAxisContainerClass)
                .attr(SVG.transform, SVG.translate(margin.left, margin.top))
                .append(SVG.g)
                .attr(SVG.klass, this.options.chartBodySelectorClass)
                .attr(SVG.transform, SVG.translate(padding.left, padding.top))
                .attr(SVG.clipPathAttr, SVG.url(this.options.sankeyClipPath));
        }
        this.gradientDefinitions = this.svgElement.append(SVG.defs);
        let sankey = Sankey()
            .nodeWidth(this.options.nodeWidth)
            .nodePadding(this.options.nodePadding)
            .iterations(this.options.iterations)
            .extent([[0, 10], sizeExent])
            .nodeAlign((node) => node.baseColumnIndex); // align nodes with axis
        let dataModel = this.model.getDataModel();
        let graph = {
            links: dataModel.links,
            nodes: dataModel.nodes
        };
        sankey(graph);
        // we remove empty links with no value and nodes with no links
        graph.links = graph.links.filter(l => !!l.value && l.value > 0);
        graph.nodes = graph.nodes.filter(node => node.value !== 0);
        this.sankey = sankey;
        this.graph = graph;
        // Scale for text size
        this.textScale = linear$1()
            .domain(extent(graph.nodes, (n) => n.value))
            .range([this.options.minTextSize, this.options.maxTextSize]);
        this.colorScale = ordinal(schemeCategory10);
        this.colorScale = ordinal(ChartThemeService.getDefaultTheme().allColors);
        this.updateNodePosition(this.sankeyGen(graph, sankey));
        this.initAxis(width, chartHeight);
        // init chart clip-path
        let chartSize = this.options.getChartSize(width, chartHeight);
        this.gradientDefinitions
            .append(SVG.clipPath)
            .attr(SVG.id, this.options.getClipPathId(this._id))
            .append(SVG.rect)
            .attr(SVG.width, chartSize.width)
            .attr(SVG.height, chartSize.height)
            .attr(SVG.x, -quickFix);
        this.onRenderCallback();
    }
    updateGraph(width, height) {
        this.sankey.extent([[0, 10], [width - quickFix, height]]);
        this.sankey(this.graph);
        // the layout can choose to put an element with y at the extreme value, so we allow
        // a bit of overflowing
        this.gradientDefinitions
            .select(this.options.getClipPathRectangleSelector(this._id))
            .attr(SVG.width, width + quickFix)
            .attr(SVG.height, height + 10);
        this.updateFontSize(this.sankeyGen(this.graph, this.sankey), getSankeyChartScreenConfig(this.chartVizComponent.scaledFonts()));
        this.updateNodePosition(this.sankeyGen(this.graph, this.sankey));
    }
    getSvgContainer() {
        return this.svgElement;
    }
    getChartContainer() {
        return this.svgElement.select(this.options.chartAxisContainerSelector);
    }
    getChartBody() {
        return this.svgElement.select(this.options.chartBodySelector);
    }
    updateAxis(width, height) {
        this.xAxisBottom.scale().range([0, width]);
        this.xAxisTop.scale().range([0, width]);
        let padding = this.xAxisBottom.tickPadding()
            + this.xAxisTop.tickPadding()
            + 6; // we do not want label to touch
        let maxWidthPerLabel = Math.floor(width / this.xAxisTop.scale().domain().length);
        // we remove a conservative value of 14 px to the maximum, otherwise the labels
        // will touch before starting to ellipsis ( this is due to the fact the canvas measurement
        // does not take all css properties into account, in that case, letter-spacing )
        maxWidthPerLabel = maxWidthPerLabel - padding;
        let labels = this.xAxisTop.scale().domain();
        labels.forEach(l => this.labelNameToLabelDisplayed[l] = this.truncateLabelIfNeeded(l, maxWidthPerLabel));
        this.getChartContainer().select(this.options.xAxisTopSelector)
            .attr(SVG.transform, SVG.translate(this.options.margin.left, -this.options.margin.top))
            .call(this.xAxisTop);
        this.getChartContainer().select(this.options.xAxisBottomSelector)
            .attr(SVG.transform, SVG.translate(this.options.margin.left, height - this.options.margin.bottom - 1))
            .call(this.xAxisBottom);
    }
    initAxis(width, height) {
        let columnNameCounter = {};
        this.model.getXAxisColumns().forEach(c => columnNameCounter[c.getName()] =
            columnNameCounter[c.getName()] === void 0 ? 1 : ++columnNameCounter[c.getName()]);
        let scale = point()
            .domain(this.model.getXAxisColumns().map(c => {
            return columnNameCounter[c.getName()] > 1 ?
                `${c.getName()} (${c.getSourceName()})` : c.getName();
        }))
            .range([0, width]);
        scale.domain()
            .forEach(label => this.labelNameToLabelDisplayed[label] = label);
        this.xAxisBottom = axisTop(scale);
        this.xAxisTop = axisBottom(scale);
        let axisContainer = this.getChartContainer();
        // in our case we want ticks to go down, so that's why we use axisBottom for top
        // axis, and vice-et-versa
        axisContainer.append(SVG.g)
            .attr(SVG.klass, this.options.xAxisTopClasses)
            .attr(SVG.transform, SVG.translate(this.options.margin.left, 0))
            .style(SVG.fontFamily, this.options.axisFont)
            .style(SVG.fontSize, this.options.axisFontSize)
            .call(this.xAxisTop);
        axisContainer.append(SVG.g)
            .attr(SVG.klass, this.options.xAxisBottomClasses)
            .attr(SVG.transform, SVG.translate(this.options.margin.left, height))
            .style(SVG.fontFamily, this.options.axisFont)
            .style(SVG.fontSize, this.options.axisFontSize)
            .call(this.xAxisBottom);
        // this is the only way to set the font color, as d3 axis
        // comes with a fill attribute set to '#000'
        axisContainer.selectAll('.tick text').attr(SVG.fill, this.options.axisFontColor);
        // use the map as formatter
        this.xAxisBottom.tickFormat((d) => this.labelNameToLabelDisplayed[d]);
        this.xAxisTop.tickFormat((d) => this.labelNameToLabelDisplayed[d]);
    }
    /**
     *
     * This method will add new nodes, but will not
     * set their properties their positions
     * this work is left to updateNodePosition
     *
     * @param graph
     * @param sankey
     */
    sankeyGen(graph, sankey) {
        // format variables
        graph.nodes = graph.nodes.filter(d => !d.hide);
        graph.links = graph.links
            .filter(d => !d.source.hide && !d.target.hide);
        let nodes = graph.nodes;
        let links = graph.links;
        let chartBody = this.getChartBody();
        let nodeSelection = chartBody.selectAll(this.options.chartSelector.node)
            .data(nodes, d => d.key);
        nodeSelection.exit().remove();
        let svgNodes = nodeSelection.enter().append(SVG.g)
            .attr(SVG.klass, d => `${this.options.chartClasses.node} ${d.key}`);
        // add the rectangles for the nodes
        svgNodes.append(SVG.rect)
            .attr(SVG.width, sankey.nodeWidth())
            .style(SVG.fill, d => d.color = this.colorScale(d.key))
            .style(SVG.stroke, d => d.color);
        // we could try to check if we are on the left/right of the container
        // and put text before/after the node
        svgNodes.append(SVG.text)
            .style(SVG.fontSize, d => this.textScale(d.value))
            .style(SVG.fontFamily, this.options.fontFamily)
            .attr(SVG.x, (d) => {
            return d.x0 === 0 ? this.options.labelPaddingLeft : -this.options.labelPaddingRight;
        })
            .attr(SVG.dy, this.options.labelDownShift)
            .attr(SVG.textAnchor, (d) => {
            return d.x0 === 0 ? 'start' : 'end';
        })
            .attr(SVG.transform, null)
            .text(d => d.name);
        // add gradient to links
        let linkSelection = chartBody.selectAll(this.options.chartSelector.link)
            .data(links, d => d.key);
        linkSelection.exit()
            .remove();
        let svgLinksSelection = linkSelection
            .enter()
            .append(SVG.path)
            .attr(SVG.klass, this.options.chartClasses.link);
        // Please note that our gradients will ONLY be created when NEW
        // links come in
        svgLinksSelection.style(SVG.stroke, (d, i) => {
            // make unique gradient ids
            const gradientID = `gradient${i}`;
            const startColor = d.source.color;
            const stopColor = d.target.color;
            // when a path is horizontal, bbox is null so we fall back to userSpace and set x1,x2 to
            // the coordinate of the source/target nodes, so the gradient will match the link width
            const linearGradient = this.gradientDefinitions
                .append(SVG.linearGradient)
                .attr(SVG.gradientUnits, SVG.userSpaceOnUse)
                .attr(SVG.x1, d.source.x1 + '')
                .attr(SVG.x2, d.target.x0 + '')
                .attr(SVG.id, gradientID);
            linearGradient.selectAll(SVG.stop)
                .data([
                { offset: this.options.gradientStart, color: startColor },
                { offset: this.options.gradientEnd, color: stopColor }
            ])
                .enter()
                .append(SVG.stop)
                .attr(SVG.offset, d => d.offset)
                .attr(SVG.stopColor, d => d.color);
            return `url(#${gradientID})`;
        });
        // d3 bind 'this' to the dom element, but we want to keep the
        // binding to the class instance
        // also, note these are the enter selection, so we are
        // not going to put event listeners on already displayed nodes
        svgNodes.on(SVG.contexmenu, (d) => this.launchContextMenu(d));
        svgNodes.on('mouseenter', (d) => this.showNodeTooltip(d));
        svgNodes.on('mouseout', () => { this.tooltip.hide(); });
        svgLinksSelection.on(SVG.contexmenu, (d) => this.launchContextMenu(d));
        svgLinksSelection.on('mousemove', (d) => this.showLinkTooltip(d));
        svgLinksSelection.on('mouseout', () => { this.tooltip.hide(); });
        svgLinksSelection.on(SVG.contexmenu, (d) => this.launchContextMenu(d));
        return {
            nodeSelection,
            linkSelection
        };
    }
    truncateLabelIfNeeded(text, maxWidth) {
        return truncateTextToWidth(text, maxWidth, `${this.options.axisFontSize} ${this.options.axisFont}`);
    }
    updateFontSize(selections, config) {
        const { nodeSelection } = selections;
        nodeSelection.selectAll(SVG.text)
            .style(SVG.fontSize, config.fontSize);
        const axisContainer = this.getChartContainer();
        axisContainer.selectAll('.axis').style(SVG.fontSize, config.fontSize);
    }
    updateNodePosition(selections) {
        let { nodeSelection, linkSelection } = selections;
        nodeSelection.attr(SVG.transform, d => SVG.translate(d.x0, d.y0));
        nodeSelection.selectAll(SVG.rect).attr(SVG.height, d => d.y1 - d.y0);
        nodeSelection.selectAll(SVG.text)
            .attr(SVG.y, d => (d.y1 - d.y0) / 2)
            .text(d => d.depth === 0 ? this.truncateLabelIfNeeded(d.name, quickFix) : d.name);
        linkSelection.attr(SVG.d, sankeyLinkHorizontal())
            .style(SVG.strokeWidth, d => d.width);
    }
    launchContextMenu(d) {
        if (!this.contextMenuCtrl) {
            return;
        }
        let evt = event$1;
        event$1.preventDefault();
        let contextMenuInput = getInputForNetworkContextMenu(this.model, this.sageClient, d, this.closeContextMenu, this.showSubMenuItems, this.resetContextMenu);
        let contextMenuConfig = {
            clickedPosition: {
                left: evt.clientX,
                top: evt.clientY
            },
            subMenuItems: contextMenuInput.menuItems
        };
        this.contextMenuCtrl.show(contextMenuConfig);
    }
    showLinkTooltip(d) {
        let tooltipContent = {};
        let e = event$1;
        tooltipContent[_$1.capitalize(this.strings.from)] = d.source.name;
        tooltipContent[_$1.capitalize(this.strings.to)] = d.target.name;
        tooltipContent[_$1.capitalize(this.unit)] = d.formattedValue;
        this.tooltip.show(e.clientX, e.clientY, tooltipContent);
    }
    showNodeTooltip(d) {
        let tooltipContent = {};
        let e = event$1;
        tooltipContent[_$1.capitalize(this.xAxisTop.scale().domain()[d.baseColumnIndex])] = d.name;
        tooltipContent[_$1.capitalize(this.unit)] = this.model.getDataModel().formatter(d.value);
        this.tooltip.show(e.clientX, e.clientY, tooltipContent);
    }
};
SankeyChartComponent = __decorate$3([
    Component({
        name: 'bkSankeyChart',
        templateUrl: 'src/modules/viz-layout/viz/chart/networks/sankey.html'
    })
], SankeyChartComponent);

export { SankeyChartComponent };
//# sourceMappingURL=sankey-component-2903d913.js.map
