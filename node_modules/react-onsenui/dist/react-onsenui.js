/* react-onsenui v1.10.0 - 2018-01-26 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-dom'), require('onsenui')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-dom', 'onsenui'], factory) :
	(factory((global.Ons = {}),global.React,global.PropTypes,global.ReactDOM,global.ons));
}(this, (function (exports,React,PropTypes,ReactDOM,ons) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
ons = ons && ons.hasOwnProperty('default') ? ons['default'] : ons;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var pixelSize = function pixelSize(item) {
  return typeof item === 'number' ? item + 'px' : item;
};

var normalize = function normalize(key) {
  if (/^is[A-Z]/.test(key)) {
    key = key.slice(2);
  }
  return key.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
};

var convert = function convert(dict, name) {
  var newName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : name;

  if (dict.hasOwnProperty(name)) {
    switch (_typeof(dict[name])) {
      case 'boolean':
        if (dict[name]) {
          dict[newName] = '';
        } else {
          delete dict[newName];
        }
        break;
      case 'string':
      case 'number':
        dict[newName] = dict[name];
        break;
      default:
        dict[name] = null;
    }

    if (newName !== name) {
      dict[name] = null;
    }
  }

  return dict;
};

var Util = {
  eventToHandler: function eventToHandler(string) {
    return 'on' + string.charAt(0).toUpperCase() + string.slice(1);
  },
  getAttrs: function getAttrs(el) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : el.props;
    var dict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var attrs = _extends({}, props);
    var validProps = el.constructor.propTypes || {};

    if (attrs.hasOwnProperty('animationOptions') && typeof attrs.animationOptions !== 'string') {
      attrs.animationOptions = JSON.stringify(attrs.animationOptions);
    }

    Object.keys(attrs).forEach(function (key) {
      if (validProps.hasOwnProperty(key) && ['onClick'].indexOf(key) === -1) {
        if (['isOpen'].indexOf(key) !== -1) {
          attrs[key] = null;
        } else {
          if (/(height|width)/i.test(key)) {
            attrs[key] = pixelSize(attrs[key]);
          }
          convert(attrs, key, dict[key] || normalize(key));
        }
      }
    });

    return attrs;
  }
};

var BaseDialog = function (_React$Component) {
  inherits(BaseDialog, _React$Component);

  function BaseDialog() {
    var _ref;

    classCallCheck(this, BaseDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = BaseDialog.__proto__ || Object.getPrototypeOf(BaseDialog)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onCancel = callback.bind(_this, 'onCancel');
    _this.onPreShow = callback.bind(_this, 'onPreShow');
    _this.onPostShow = callback.bind(_this, 'onPostShow');
    _this.onPreHide = callback.bind(_this, 'onPreHide');
    _this.onPostHide = callback.bind(_this, 'onPostHide');
    return _this;
  }

  createClass(BaseDialog, [{
    key: 'show',
    value: function show() {
      this.node.firstChild.show();
    }
  }, {
    key: 'updateClasses',
    value: function updateClasses() {
      var node = this.node.firstChild;

      if (this.props.className) {
        if (this.lastClass) {
          node.className = node.className.replace(this.lastClass, '');
        }

        this.lastClass = ' ' + this.props.className;
        node.className += this.lastClass;
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.node.firstChild.hide();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);

      this.node.addEventListener('dialog-cancel', this.onCancel);
      this.node.addEventListener('preshow', this.onPreShow);
      this.node.addEventListener('postshow', this.onPostShow);
      this.node.addEventListener('prehide', this.onPreHide);
      this.node.addEventListener('posthide', this.onPostHide);

      this.renderPortal(this.props, false, this.props.onDeviceBackButton);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.renderPortal(newProps, this.props.isOpen);
      if (newProps.onDeviceBackButton !== undefined) {
        this.node.firstChild.onDeviceBackButton = newProps.onDeviceBackButton;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      this.node.removeEventListener('dialog-cancel', this.onCancel);
      this.node.removeEventListener('preshow', this.onPreShow);
      this.node.removeEventListener('postshow', this.onPostShow);
      this.node.removeEventListener('prehide', this.onPreHide);
      this.node.removeEventListener('posthide', this.onPostHide);

      var unmount = function unmount() {
        ReactDOM__default.unmountComponentAtNode(_this2.node);
        document.body.removeChild(_this2.node);
      };

      if (this.node.firstChild.visible === true) {
        this.node.firstChild.hide().then(unmount);
      } else {
        unmount();
      }
    }
  }, {
    key: '_update',
    value: function _update(isShown, onDeviceBackButton) {
      if (this.props.isOpen) {
        if (!isShown) {
          this.show();
        }
      } else {
        this.hide();
      }

      this.updateClasses();

      if (onDeviceBackButton instanceof Function) {
        this.node.firstChild.onDeviceBackButton = onDeviceBackButton;
      }
    }
  }, {
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      throw new Error('_getDomNodeName is not implemented');
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props, isShown) {
      var onDeviceBackButton = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var isOpen = props.isOpen,
          others = objectWithoutProperties(props, ['isOpen']);

      var attrs = Util.getAttrs(this, others);
      var DomNodeName = this._getDomNodeName();

      ReactDOM__default.unstable_renderSubtreeIntoContainer(this, React.createElement(DomNodeName, _extends({}, attrs, { children: props.children })), this.node, this._update.bind(this, isShown, onDeviceBackButton));
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return BaseDialog;
}(React.Component);

BaseDialog.propTypes = {
  onCancel: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  isCancelable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  animation: PropTypes.string,
  maskColor: PropTypes.string,
  animationOptions: PropTypes.object,
  onPreShow: PropTypes.func,
  onPostShow: PropTypes.func,
  onPreHide: PropTypes.func,
  onPostHide: PropTypes.func,
  onDeviceBackButton: PropTypes.func
};

BaseDialog.defaultProps = {
  isCancelable: true,
  isDisabled: false
};

/**
 * @original ons-action-sheet
 * @category dialog
 * @tutorial react/Reference/action-sheet
 * @description
 * [en]
 *  Action/bottom sheet that is displayed on top of current screen.
 *  The action sheet is useful for displaying a list of options and asking the user to make a decision. An ActionSheetButton component is provided for this purpose, although it can contain any type of content.
 *  It will automatically be displayed as Material Design (bottom sheet) when running on an Android device.
 * [/en]
 * [ja][/ja]
 */

var ActionSheet = function (_BaseDialog) {
  inherits(ActionSheet, _BaseDialog);

  function ActionSheet() {
    classCallCheck(this, ActionSheet);
    return possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).apply(this, arguments));
  }

  createClass(ActionSheet, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-action-sheet';
    }
  }]);
  return ActionSheet;
}(BaseDialog);

ActionSheet.propTypes = {
  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  maskColor: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the action sheet is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the action sheet is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the action sheet is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the action sheet is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

var BasicComponent = function (_React$Component) {
  inherits(BasicComponent, _React$Component);

  function BasicComponent() {
    var _ref;

    classCallCheck(this, BasicComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = BasicComponent.__proto__ || Object.getPrototypeOf(BasicComponent)).call.apply(_ref, [this].concat(args)));

    _this.updateClasses = _this.updateClasses.bind(_this);
    return _this;
  }

  createClass(BasicComponent, [{
    key: 'updateClasses',
    value: function updateClasses() {
      var node = ReactDOM__default.findDOMNode(this);

      if (!node) {
        return;
      }

      if (typeof this.props.className !== 'undefined') {
        if (this.lastClass) {
          node.className = node.className.replace(this.lastClass, ' ');
        }

        this.lastClass = ' ' + this.props.className.trim();

        node.className = node.className.trim() + this.lastClass;
      }

      if (!ons) {
        throw new Error("react-onsenui requires `onsenui`, make sure you are loading it with `import onsenui` or `require('onsenui')` before using the components");
      }

      ons._autoStyle.prepare(node);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateClasses();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateClasses();
    }
  }]);
  return BasicComponent;
}(React.Component);

var SimpleWrapper = function (_BasicComponent) {
  inherits(SimpleWrapper, _BasicComponent);

  function SimpleWrapper() {
    classCallCheck(this, SimpleWrapper);
    return possibleConstructorReturn(this, (SimpleWrapper.__proto__ || Object.getPrototypeOf(SimpleWrapper)).apply(this, arguments));
  }

  createClass(SimpleWrapper, [{
    key: 'render',
    value: function render() {
      return React.createElement(this._getDomNodeName(), Util.getAttrs(this), this.props.children);
    }
  }]);
  return SimpleWrapper;
}(BasicComponent);

/**
 * @original ons-action-sheet-button
 * @category dialog
 * @tutorial react/Reference/action-sheet
 * @description
 * [en]Component that represent each button of the action sheet.[/en]
 * [ja][/ja]
 */

var ActionSheetButton = function (_SimpleWrapper) {
  inherits(ActionSheetButton, _SimpleWrapper);

  function ActionSheetButton() {
    classCallCheck(this, ActionSheetButton);
    return possibleConstructorReturn(this, (ActionSheetButton.__proto__ || Object.getPrototypeOf(ActionSheetButton)).apply(this, arguments));
  }

  createClass(ActionSheetButton, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-action-sheet-button';
    }
  }]);
  return ActionSheetButton;
}(SimpleWrapper);

ActionSheetButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the action sheet button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name icon
   * @type string
   * @description
   *  [en]Creates an `Icon` component with this string. Only visible on Android.[/en]
   *  [ja][/ja]
   */
  icon: PropTypes.string,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en]This function will be called when the button is clicked.[/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-alert-dialog
 * @category dialog
 * @tutorial react/Reference/dialog
 * @description
 * [en]
 *   Alert dialog that is displayed on top of the current screen. Useful for displaying questions, warnings or error messages to the user. The title, content and buttons can be easily customized and it will automatically switch style based on the platform.
 * [/en]
 * [ja][/ja]
 * @example
   <AlertDialog isOpen={this.state.isOpen} onCancel={this.handleCancel.bind(this)} cancelable>
     <div className="alert-dialog-title">Warning!</div>
     <div className="alert-dialog-content">
       An error has occurred!
     </div>
     <div className="alert-dialog-footer">
       <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
         Cancel
       </Button>
       <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
         Ok
       </Button>
     </div>
   </AlertDialog>
 */

var AlertDialog = function (_BaseDialog) {
  inherits(AlertDialog, _BaseDialog);

  function AlertDialog() {
    classCallCheck(this, AlertDialog);
    return possibleConstructorReturn(this, (AlertDialog.__proto__ || Object.getPrototypeOf(AlertDialog)).apply(this, arguments));
  }

  createClass(AlertDialog, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-alert-dialog';
    }
  }]);
  return AlertDialog;
}(BaseDialog);

AlertDialog.propTypes = {
  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  maskColor: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-alert-dialog-button
 * @category dialog
 * @tutorial react/Reference/dialog
 * @description
 * [en]Component that represent each button of the alert dialog.[/en]
 * [ja][/ja]
 */

var AlertDialogButton = function (_SimpleWrapper) {
  inherits(AlertDialogButton, _SimpleWrapper);

  function AlertDialogButton() {
    classCallCheck(this, AlertDialogButton);
    return possibleConstructorReturn(this, (AlertDialogButton.__proto__ || Object.getPrototypeOf(AlertDialogButton)).apply(this, arguments));
  }

  createClass(AlertDialogButton, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-alert-dialog-button';
    }
  }]);
  return AlertDialogButton;
}(SimpleWrapper);

AlertDialogButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the alert dialog button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en]This function will be called when the button is clicked.[/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-back-button
 * @category navigation
 * @tutorial react/Reference/navigator
 * @description
 * [en]
 *   Back button component for Toolbar. It enables to automatically to pop the top page of the navigator. When only presented with one page, the button is hidden automatically.
 *
 *   The default behavior can be overridden using the `onClick` prop.
 * [/en]
 * [ja][/ja]
 * @example
 * <Toolbar modifier={this.props.modifier} >
      <div className="left"><BackButton modifier={this.props.modifier}>Back</BackButton></div>
      <div className="center">{this.props.title}</div>
   </Toolbar>
 */

var BackButton = function (_SimpleWrapper) {
  inherits(BackButton, _SimpleWrapper);

  function BackButton() {
    classCallCheck(this, BackButton);
    return possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).apply(this, arguments));
  }

  createClass(BackButton, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-back-button';
    }
  }, {
    key: '_updateOnClick',
    value: function _updateOnClick(props) {
      var node = ReactDOM__default.findDOMNode(this);

      if (props.onClick) {
        node.onClick = function () {
          return null;
        };
      } else {
        delete node.onClick;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateOnClick(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this._updateOnClick(props);
    }
  }]);
  return BackButton;
}(SimpleWrapper);

BackButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the back button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en]This function will be called ones the button is clicked. It overrides the default behavior of the back button.[/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-bottom-toolbar
 * @category page
 * @description
 * [en]Toolbar component that is positioned at the bottom of the page.[/en]
 * [ja][/ja]
 * @example
 * <BottomToolbar modifier="material"> Content </BottomToolbar>
 */

var BottomToolbar = function (_SimpleWrapper) {
  inherits(BottomToolbar, _SimpleWrapper);

  function BottomToolbar() {
    classCallCheck(this, BottomToolbar);
    return possibleConstructorReturn(this, (BottomToolbar.__proto__ || Object.getPrototypeOf(BottomToolbar)).apply(this, arguments));
  }

  createClass(BottomToolbar, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-bottom-toolbar';
    }
  }]);
  return BottomToolbar;
}(SimpleWrapper);

BottomToolbar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]Specify modifier name to specify custom styles. Optional.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-button
 * @category form
 * @tutorial react/Reference/button
 * @description
 * [en] Button component. If you want to place a button in a toolbar, use `ToolbarButton` or `BackButton` instead. Will automatically display as a Material Design button with a ripple effect on Android.
 [/en]
 * [ja][/ja]
 * @example
 * <Button modifier="large--cta">
 *   Tap Me
 * </Button>
 */

var Button = function (_SimpleWrapper) {
  inherits(Button, _SimpleWrapper);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-button';
    }
  }]);
  return Button;
}(SimpleWrapper);

Button.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name ripple
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button has a ripple effect.
   *  [/en]
   *  [ja][/ja]
   */
  ripple: PropTypes.bool,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en] This function will be called ones the button is clicked. [/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-card
 * @category visual
 * @tutorial react/Reference/visual
 * @description
 * [en]Card component that can be used to display content.[/en]
 * [ja][/ja]
 * @example
 *
<Card>
  <p>Some content</p>
</Card>
 */

var Card = function (_SimpleWrapper) {
  inherits(Card, _SimpleWrapper);

  function Card() {
    classCallCheck(this, Card);
    return possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  createClass(Card, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-card';
    }
  }]);
  return Card;
}(SimpleWrapper);

Card.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-carousel
 * @category carousel
 * @tutorial react/Reference/carousel
 * @description
 * [en] Carousel component. A carousel can be used to display several items in the same space.
 *     The component supports displaying content both horizontally and vertically. The user can scroll through the items by dragging and it can also be controller programmatically.
 [/en]
 * [ja][/ja]
 * @example
 *    <Carousel
          onPostChange={() => console.log('onPostChange')}
          onOverscroll={() => console.log('onOverscroll')}
          onRefresh={() => console.log('onRefresh')}
          ref={(carousel) => { this.carousel = carousel; }}
          swipeable
          overscrollable
          autoScroll
          fullscreen
          autoScrollRatio={0.2}
      >
          <CarouselItem style={{backgroundColor: 'gray'}}>
            <div className='item-label'>GRAY</div>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: '#085078'}}>
            <div className='item-label'>BLUE</div>
          </CarouselItem>
        </Carousel>

 */

var Carousel = function (_SimpleWrapper) {
  inherits(Carousel, _SimpleWrapper);

  function Carousel() {
    var _ref;

    classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onChange = callback.bind(_this, 'onPostChange');
    _this.onRefresh = callback.bind(_this, 'onRefresh');
    _this.onOverscroll = callback.bind(_this, 'onOverscroll');
    return _this;
  }

  createClass(Carousel, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-carousel';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Carousel.prototype.__proto__ || Object.getPrototypeOf(Carousel.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM.findDOMNode(this);
      node.addEventListener('postchange', this.onChange);
      node.addEventListener('refresh', this.onRefresh);
      node.addEventListener('overscroll', this.onOverscroll);
      node.onSwipe = this.props.onSwipe || null;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM.findDOMNode(this);
      node.removeEventListener('postchange', this.onPostChange);
      node.removeEventListener('refresh', this.onRefresh);
      node.removeEventListener('overscroll', this.onOverscroll);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      var node = ReactDOM.findDOMNode(this);

      if (this.props.index !== node.getActiveIndex()) {
        node.setActiveIndex(this.props.index, props.animationOptions);
      }

      if (this.props.children.length !== props.children.length) {
        node.refresh();
      }

      if (this.props.onSwipe !== props.onSwipe) {
        node.onSwipe = this.props.onSwipe;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var attrs = Util.getAttrs(this, this.props, { index: 'initial-index' });

      return React.createElement(
        'ons-carousel',
        attrs,
        React.createElement(
          'div',
          null,
          this.props.children
        ),
        React.createElement('div', null)
      );
    }
  }]);
  return Carousel;
}(SimpleWrapper);

Carousel.propTypes = {

  /**
   * @name direction
   * @type string
   * @required false
   * @description
   *  [en]The direction of the carousel. Can be either "horizontal" or "vertical". Default is "horizontal".[/en]
   *  [ja][/ja]
   */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * @name fullscreen
   * @type bool
   * @description
   *  [en]If true, the carousel will cover the whole screen.[/en]
   *  [ja][/ja]
   */
  fullscreen: PropTypes.bool,

  /**
   * @name overscrollable
   * @type bool
   * @description
   *  [en]If true, the carousel will be scrollable over the edge. It will bounce back when released.[/en]
   *  [ja][/ja]
   */
  overscrollable: PropTypes.bool,

  /**
   * @name centered
   * @type bool
   * @description
   *  [en]If true, the carousel then the selected item will be in the center of the carousel instead of the beginning. Useful only when the items are smaller than the carousel.[/en]
   *  [ja][/ja]
   */
  centered: PropTypes.bool,

  /**
   * @name itemWidth
   * @type number
   * @description
   *  [en]ons-carousel-item's width. Only works when the direction is set to "horizontal".[/en]
   *  [ja][/ja]
   */
  itemWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * @name itemHeight
   * @type number
   * @description
   *  [en]ons-carousel-item's height. Only works when the direction is set to "vertical".[/en]
   *  [ja][/ja]
   */
  itemHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * @name autoScroll
   * @type bool
   * @description
   *  [en]If true, the carousel will be automatically scrolled to the closest item border when released.[/en]
   *  [ja][/ja]
   */
  autoScroll: PropTypes.bool,

  /**
   * @name autoScrollRatio
   * @type number
   * @description
   *  [en]A number between 0.0 and 1.0 that specifies how much the user must drag the carousel in order for it to auto scroll to the next item.[/en]
   *  [ja][/ja]
   */
  autoScrollRatio: PropTypes.number,

  /**
   * @name swipeable
   * @type bool
   * @description
   *  [en]If true, the carousel can be scrolled by drag or swipe.[/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.bool,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]If true, the carousel will be disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name index
   * @type number
   * @description
   *  [en]Specify the index of the ons-carousel-item to show. Default is 0.[/en]
   *  [ja][/ja]
   */
  index: PropTypes.number,

  /**
   * @name autoRefresh
   * @type bool
   * @description
   *  [en]When this attribute is set the carousel will automatically refresh when the number of child nodes change.[/en]
   *  [ja][/ja]
   */
  autoRefresh: PropTypes.bool,

  /**
   * @name onPostChange
   * @type function
   * @description
   *  [en]Called just after the current carousel item has changed.  [/en]
   *  [ja][/ja]
   */
  onPostChange: PropTypes.func,

  /**
   * @name onRefresh
   * @type function
   * @description
   *  [en]Called when the carousel has been refreshed. [/en]
   *  [ja][/ja]
   */
  onRefresh: PropTypes.func,

  /**
   * @name onOverscroll
   * @type function
   * @description
   *  [en]Called when the carousel has been overscrolled. [/en]
   *  [ja][/ja]
   */
  onOverscroll: PropTypes.func,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onSwipe
   * @type function
   * @description
   *  [en]Hook called whenever the user slides the carousel. It gets a decimal index and an animationOptions object as arguments.[/en]
   *  [ja][/ja]
   */
  onSwipe: PropTypes.func
};

/**
 * @original ons-carousel-item
 * @category carousel
 * @tutorial react/Reference/carousel
 * @description
 * [en] Carousel item component. Used as a child of the `<ons-carousel>` element.
 [/en]
 * [ja][/ja]
 * @example
*  <Carousel swipeable overscrollable autoScroll fullscreen >
     <CarouselItem style={{backgroundColor: 'gray'}}>
       <div className='item-label'>GRAY</div>
     </CarouselItem>
     <CarouselItem style={{backgroundColor: '#085078'}}>
       <div className='item-label'>BLUE</div>
     </CarouselItem>
   </Carousel>
 */

var CarouselItem = function (_SimpleWrapper) {
  inherits(CarouselItem, _SimpleWrapper);

  function CarouselItem() {
    classCallCheck(this, CarouselItem);
    return possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).apply(this, arguments));
  }

  createClass(CarouselItem, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-carousel-item';
    }
  }]);
  return CarouselItem;
}(SimpleWrapper);

CarouselItem.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

var BaseInput = function (_BasicComponent) {
  inherits(BaseInput, _BasicComponent);

  function BaseInput() {
    var _ref;

    classCallCheck(this, BaseInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = BaseInput.__proto__ || Object.getPrototypeOf(BaseInput)).call.apply(_ref, [this].concat(args)));

    _this.onChange = function (event) {
      if (_this.props.onChange) {
        return _this.props.onChange(event);
      }
    };
    return _this;
  }

  createClass(BaseInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      get(BaseInput.prototype.__proto__ || Object.getPrototypeOf(BaseInput.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);

      if (this.props.value !== undefined) {
        node.value = this.props.value;
      }

      this.EVENT_TYPES.forEach(function (eventType) {
        return node.addEventListener(eventType, _this2.onChange);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      var node = ReactDOM__default.findDOMNode(this);
      this.EVENT_TYPES.forEach(function (eventType) {
        return node.removeEventListener(eventType, _this3.onChange);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var node = ReactDOM__default.findDOMNode(this);

      if (typeof props.value !== 'undefined' && node.value !== props.value) {
        node.value = props.value;
      }

      if (typeof props.checked !== 'undefined') {
        node.checked = props.checked;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          props = objectWithoutProperties(_props, ['onChange']);

      return React.createElement(this._getDomNodeName(), Util.getAttrs(this, props));
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change', 'input'];
    }
  }]);
  return BaseInput;
}(BasicComponent);

BaseInput.propTypes = {
  modifier: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  checked: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  inputId: PropTypes.string,
  float: PropTypes.bool
};

/**
 * @original ons-checkbox
 * @category form
 * @tutorial react/Reference/input
 * @description
 * [en]
 *  A checkbox element. The component will automatically render as a Material Design checkbox on Android devices.
 *
 *  Most attributes that can be used for a normal `<input type="checkbox">` element can also be used on the `<Checkbox>` component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Checkbox
 *   onChange={event => { this.setState({checked: event.target.checked})} }
 *   modifier='material' />
 */

var Checkbox = function (_BaseInput) {
  inherits(Checkbox, _BaseInput);

  function Checkbox() {
    classCallCheck(this, Checkbox);
    return possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  createClass(Checkbox, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-checkbox';
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change'];
    }
  }]);
  return Checkbox;
}(BaseInput);

Checkbox.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the checkbox.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the checkbox is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the checkbox state changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en] Value of the checkbox.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name checked
   * @type boolean
   * @description
   *  [en]Controls the state of the checkbox.[/en]
   *  [ja][/ja]
   */
  checked: PropTypes.bool,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements.[/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string
};

/**
 * @original ons-col
 * @category grid
 * @description
 * [en]
 * Represents a column in the grid system. Use with `<ons-row>` to layout components.
 * [/en]
 * [ja][/ja]
 * <Row>
 *   <Col width={50}>
  *   <ons-icon icon="fa-twitter"></ons-icon>
 *   </Col>
 *   <Col>Text</Col>
 * </Row>
 */

var Col = function (_SimpleWrapper) {
  inherits(Col, _SimpleWrapper);

  function Col() {
    classCallCheck(this, Col);
    return possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  createClass(Col, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-col';
    }
  }]);
  return Col;
}(SimpleWrapper);

Col.propTypes = {

  /**
  * @name verticalAlign
  * @type {String}
  * @description
  *   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
  *   [ja][/ja]
  */
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center']),

  /**
  * @name width
  * @type {String}
  * @description
  *   [en]The width of the column. Valid values are css width values ("10%", 50).[/en]
  *   [ja][/ja]
  */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

/**
 * @original ons-dialog
 * @category dialog
 * @tutorial react/Reference/dialog
 * @description
 * [en]  Dialog that is displayed on top of current screen. As opposed to the AlertDialog element, this component can contain any kind of content.  The dialog is useful for displaying menus, additional information or to ask the user to make a decision.  It will automatically be displayed as Material Design when running on an Android device.
 [/en]
 * [ja][/ja]
 * @example
   <Dialog onCancel={this.onCancel}
     isOpen={this.props.isOpen}
     style={{height: 250}}  cancelable>
     <Page>
       Page Content
     </Page>
    </Dialog>

 */

var Dialog = function (_BaseDialog) {
  inherits(Dialog, _BaseDialog);

  function Dialog() {
    classCallCheck(this, Dialog);
    return possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  createClass(Dialog, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-dialog';
    }
  }]);
  return Dialog;
}(BaseDialog);

Dialog.propTypes = {
  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  maskColor: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-fab
 * @category form
 * @tutorial react/Reference/fab
 * @description
 * [en] The Floating action button is a circular button defined in the [Material Design specification](https://www.google.com/design/spec/components/buttons-floating-action-button.html). They are often used to promote the primary action of the app.
 *     It can be displayed either as an inline element or in one of the corners. Normally it will be positioned in the lower right corner of the screen.
 [/en]
 * [ja][/ja]
 * @example
 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
     <Fab>
       <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
     </Fab>
     <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
   </SpeedDial>
  */

var Fab = function (_SimpleWrapper) {
  inherits(Fab, _SimpleWrapper);

  function Fab() {
    classCallCheck(this, Fab);
    return possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).apply(this, arguments));
  }

  createClass(Fab, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-fab';
    }
  }]);
  return Fab;
}(SimpleWrapper);

Fab.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name ripple
   * @type bool
   * @description
   *  [en]If true,  the button will have a ripple effect when tapped.[/en]
   *  [ja][/ja]
   */
  ripple: PropTypes.bool,

  /**
   * @name position
   * @type string
   * @required false
   * @description
   *  [en]The position of the button. Should be a string like `"bottom right"` or `"top left"`. If this attribute is not defined it will be displayed as an inline element.[/en]
   *  [ja][/ja]
   */
  position: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] If true, the button will be disabled. [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en] This function will be called ones the button is clicked. [/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-icon
 * @category visual
 * @tutorial react/Reference/icon
 * @description
 * [en]
 * Displays an icon. The following icon suites are available:
 *   *  [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
 *   *  [Ionicons](http://ionicons.com/)
 *   *  [Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/)
 * [/en]
 * [ja][/ja]
 * @example
  <Icon
    size={{default: 32, material: 40}}
    icon={{default: 'ion-navicon', material: 'md-menu'}}
  />
*/

var Icon = function (_SimpleWrapper) {
  inherits(Icon, _SimpleWrapper);

  function Icon() {
    classCallCheck(this, Icon);
    return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  createClass(Icon, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-icon';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          size = _props.size,
          others = objectWithoutProperties(_props, ['icon', 'size']);

      var attrs = Util.getAttrs(this, others);

      if (icon) {
        if (typeof icon === 'string') {
          attrs.icon = icon;
        } else {
          var keys = Object.keys(icon).filter(function (a) {
            return a !== 'default';
          });
          var innerString = keys.map(function (key) {
            return key + ':' + icon[key] + '';
          });
          attrs.icon = icon.default + ', ' + innerString.join(',');
        }
      }

      if (size) {
        if (typeof size === 'number') {
          attrs.size = size + 'px';
        } else {
          var _keys = Object.keys(size).filter(function (a) {
            return a !== 'default';
          });
          var _innerString = _keys.map(function (key) {
            return key + ':' + size[key] + 'px';
          });
          attrs.size = size.default + 'px, ' + _innerString.join(',');
        }
      }

      return React.createElement(this._getDomNodeName(), attrs, this.props.children);
    }
  }]);
  return Icon;
}(SimpleWrapper);

Icon.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the icon.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name icon
   * @type 'object or string'
   * @description
   *  [en] can be either a string or an object. If it is an string, it is set to an specific icon like 'ions-navicon'. If it is an object, it represents a dictionary of the icons depending on the modifier e.g.   `{{default: 'ion-navicon', material: 'md-menu'}}` [/en]
   *  [ja][/ja]
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.string)]),

  /**
   * @name size
   * @type 'object or number'
   * @description
   *  [en] can be either a number or an object. If it is an number, it  specifies the icon size with a number in pixels. If it is an object, it represents a dictionary of the icon sizes depending on the modifier e.g.   `{{default: 20, material: 18}}` [/en]
   *  [ja][/ja]
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),

  /**
   * @name rotate
   * @type number
   * @description
   *  [en] Number of degrees to rotate the icon. Valid values are 90, 180 and 270. [/en]
   *  [ja][/ja]
   */
  rotate: PropTypes.oneOf([0, 90, 180, 270]),

  /**
   * @name fixedWidth
   * @type bool
   * @description
   * [en] When used in a list, you want the icons to have the same width so that they align vertically by defining this attribute. [/en]
   *  [ja][/ja]
   */
  fixedWidth: PropTypes.bool,

  /**
   * @name spin
   * @type bool
   * @description
   * [en] Specify whether the icon should be spinning. [/en]
   *  [ja][/ja]
   */
  spin: PropTypes.bool

};

/**
 * @original ons-input
 * @category form
 * @tutorial react/Reference/input
 * @description
 * [en]
 * An input element. The `type` attribute can be used to change the input type. All text input types as well as `checkbox` and `radio` are supported. The component will automatically render as a Material Design input on Android devices. Most attributes that can be used for a normal `<input>` element can also be used on the `<ons-input>` element..
 [/en]
 * [ja][/ja]
 * @example
 * <Input
 *   value={this.state.text} float
 *   onChange={(event) => { this.setState({text: event.target.value})} }
 *   modifier='material'
 *   placeholder='Username' />
 */

var Input = function (_BaseInput) {
  inherits(Input, _BaseInput);

  function Input() {
    classCallCheck(this, Input);
    return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  createClass(Input, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-input';
    }
  }]);
  return Input;
}(BaseInput);

Input.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the input.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]Specifies whether the input is disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en]Called when the text of the input changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en]Content of the input.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name placehoder
   * @type string
   * @description
   *  [en] Placeholder text. In Material Design this placeholder will be a floating label. [/en]
   *  [ja][/ja]
   */
  placeholder: PropTypes.string,

  /**
   * @name type
   * @type string
   * @description
   *  [en]
   *    Specify the input type. This is the same as the "type" attribute for normal inputs. It expects strict text types such as `text`, `password`, etc. For checkbox, radio button, select or range, please have a look at the corresponding components.
   *
   *    Please take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) for an exhaustive list of possible values. Depending on the platform and browser version some of these might not work.
   *  [/en]
   *  [ja][/ja]
   */
  type: PropTypes.string,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en]  Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements [/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string,

  /**
   * @name float
   * @type bool
   * @description
   *  [en]  If this attribute is present, the placeholder will be animated in Material Design.  [/en]
   *  [ja][/ja]
   */
  float: PropTypes.bool
};

/**
 * @original ons-lazy-repeat
 * @category list
 * @tutorial react/Reference/lazy-list
 * @description
 * [en] Using this component a list with millions of items can be rendered without a drop in performance.
 *     It does that by "lazily" loading elements into the DOM when they come into view and
 *     removing items from the DOM when they are not visible.
 [/en]
 * [ja][/ja]
 * @example
 *
  renderRow(index) {
    return (
      <ListItem key={index}>
        {'Item ' + (index + 1)}
      </ListItem>
    );
  }

  render() {
    return (
      <Page renderToolbar={() => <MyToolbar title='LazyList' />} >
        <div style={{height: 100}}>
          <LazyList
            length={1000}
            renderRow={() =>
              <ListItem key={index}>
                {'Item ' + (index + 1)}
              </ListItem>
            }
            calculateItemHeight={() => 44}
          />
        </div>
      </Page>
    );
  }
}
 */

var LazyList = function (_BasicComponent) {
  inherits(LazyList, _BasicComponent);

  function LazyList() {
    var _ref;

    classCallCheck(this, LazyList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = LazyList.__proto__ || Object.getPrototypeOf(LazyList)).call.apply(_ref, [this].concat(args)));

    _this.state = { children: [] };
    _this.update = _this.update.bind(_this);
    return _this;
  }

  createClass(LazyList, [{
    key: 'update',
    value: function update(props) {
      var self = this;

      this._lazyRepeat.delegate = {
        calculateItemHeight: function calculateItemHeight(index) {
          return props.calculateItemHeight(index);
        },
        // _render: function(items, newHeight) {
        _render: function _render(start, limit, updateTop) {
          var createElement = function createElement(index) {
            return props.renderRow(index);
          };

          var el = [];
          for (var i = start; i < limit; i++) {
            el.push(createElement(i));
          }

          self.setState({ children: el }, updateTop);
        },
        countItems: function countItems() {
          return props.length;
        }
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var helpProps = _extends({}, this.props, newProps);
      this.update(helpProps);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(LazyList.prototype.__proto__ || Object.getPrototypeOf(LazyList.prototype), 'componentDidMount', this).call(this);
      this.update(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'ons-list',
        _extends({}, this.props, { ref: function ref(list) {
            _this2._list = list;
          },
          'class': 'list', style: { position: 'relative', height: this.state.height }
        }),
        React.createElement('ons-lazy-repeat', { ref: function ref(lazyRepeat) {
            _this2._lazyRepeat = lazyRepeat;
          } }),
        this.state.children
      );
    }
  }]);
  return LazyList;
}(BasicComponent);

LazyList.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the lazy list.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name length
   * @type number
   * @description
   *  [en]The length of the list.[/en]
   *  [ja][/ja]
   */
  length: PropTypes.number.isRequired,

  /**
   * @name renderRow
   * @type function
   * @description
   *  [en] A function given the index of the to display row, renders it.[/en]
   *  [ja][/ja]
   */
  renderRow: PropTypes.func.isRequired,

  /**
   * @name calculateItemHeight
   * @type function
   * @description
   *  [en] A function given the index of the to row, returns the height of it.[/en]
   *  [ja][/ja]
   */
  calculateItemHeight: PropTypes.func.isRequired
};

/**
 * @original ons-list
 * @category list
 * @tutorial react/Reference/list
 * @description
 *   [en]
 *     Component for representing a list. It takes an array called datasource and calls renderRow(row, index) for every row.  Furthermore, the header and the footer can be specified with `renderRow` and `renderHeader` respectivly. [/en]
 * [ja][/ja]
 * @example
  <List
    dataSource={['Row 1', 'Row 2']}
    renderHeader={this.renderHeader}
    renderRow={(row, idx) => (
      <ListItem modifier={idx === this.state.data.length - 1 ? 'longdivider' : null}>
      {row}
  <Button modifier="quiet" onClick={this.remove.bind(this, idx)}>Remove</Button>
  </ListItem>
  )}
  renderFooter={this.renderFooter}
  />
 */

var List = function (_BasicComponent) {
  inherits(List, _BasicComponent);

  function List() {
    classCallCheck(this, List);
    return possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  createClass(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attrs = Util.getAttrs(this);
      var pages = this.props.dataSource.map(function (data, idx) {
        return _this2.props.renderRow(data, idx);
      });

      return React.createElement(
        'ons-list',
        _extends({}, attrs, { ref: function ref(list) {
            _this2._list = list;
          } }),
        this.props.renderHeader(),
        pages,
        this.props.children,
        this.props.renderFooter()
      );
    }
  }]);
  return List;
}(BasicComponent);

List.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name dataSource
   * @type string
   * @description
   *  [en]
   *    Source of the list data. Should be an array.
   *  [/en]
   *  [ja][/ja]
   */
  dataSource: PropTypes.array,

  /**
   * @name renderRow
   * @type function
   * @description
   *  [en]
   *  Function to specify the rendering function for every element in
   *  in the dataSource.
   *  [/en]
   *  [ja][/ja]
   */
  renderRow: PropTypes.func,

  /**
   * @name renderHeader
   * @type function
   * @description
   *  [en]
   *  Function to specify the rendering function for the header
   *  [/en]
   *  [ja][/ja]
   */
  renderHeader: PropTypes.func,

  /**
   * @name renderFooter
   * @type function
   * @description
   *  [en]
   *  Function to specify the rendering function for the footer
   *  [/en]
   *  [ja][/ja]
   */
  renderFooter: PropTypes.func
};

List.defaultProps = {
  dataSource: [],
  renderRow: function renderRow() {
    return null;
  },
  renderHeader: function renderHeader() {
    return null;
  },
  renderFooter: function renderFooter() {
    return null;
  }
};

/**
 * @original ons-list-header
 * @category list
 * @tutorial react/Reference/list
 * @description
 * [en] Header element for list items. Must be put inside ons-list component.
 [/en]
 * [ja][/ja]
 * @example
   <List
     dataSource={this.state.data}
     renderHeader={() =>
        <ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> }
    renderRow={(row, idx) => (
      <ListItem > {row} </ListItem>
    )}
  />
 */

var ListHeader = function (_SimpleWrapper) {
  inherits(ListHeader, _SimpleWrapper);

  function ListHeader() {
    classCallCheck(this, ListHeader);
    return possibleConstructorReturn(this, (ListHeader.__proto__ || Object.getPrototypeOf(ListHeader)).apply(this, arguments));
  }

  createClass(ListHeader, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-list-header';
    }
  }]);
  return ListHeader;
}(SimpleWrapper);

ListHeader.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-list-item
 * @category list
 * @tutorial react/Reference/list
 * @description
 *   [en]
 *   Component that represents each item in the list. Must be put inside the `List` component. The list item is composed of three parts that are represented with the `left`, `center` and `right` classes. These classes can be used to ensure that the content of the list items is properly aligned.
 *   [/en]
 * [ja][/ja]
 * @example
   <ListItem>
 *   <div className="left">Left</div>
 *   <div className="center">Center</div>
 *   <div className="right">Right</div>
 * </ListItem>
 */

var ListItem = function (_SimpleWrapper) {
  inherits(ListItem, _SimpleWrapper);

  function ListItem() {
    classCallCheck(this, ListItem);
    return possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  createClass(ListItem, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-list-item';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'componentDidMount', this).call(this);
      this.node = ReactDOM__default.findDOMNode(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'componentDidUpdate', this).call(this);
      this.node._compile();
    }
  }]);
  return ListItem;
}(SimpleWrapper);

ListItem.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en] The appearance of the list item.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name tappable
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the list item is tappable.
   *  [/en]
   *  [ja][/ja]
   */
  tappable: PropTypes.bool,

  /**
   * @name tapBackgroundColor
   * @type string
   * @description
   *  [en]
   *  Changes the background color when tapped. For this to work, the attribute "tappable" needs to be set. The default color is "#d9d9d9". It will display as a ripple effect on Android.
   *  [/en]
   *  [ja][/ja]
   */
  tapBackgroundColor: PropTypes.string,

  /**
   * @name lockOnDrag
   * @type bool
   * @description
   *  [en] Prevent vertical scrolling when the user drags horizontally. [/en]
   *  [ja][/ja]
   */
  lockOnDrag: PropTypes.bool
};

/**
 * @original ons-list-title
 * @category list
 * @tutorial react/Reference/list
 * @description
 * [en] Title element for lists. Usually comes before ons-list component.
 [/en]
 * [ja][/ja]
 * @example
 * <ListTitle>List Title</ListTitle>
   <List
     dataSource={this.state.data}
     renderHeader={() =>
        <ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> }
    renderRow={(row, idx) => (
      <ListItem > {row} </ListItem>
    )}
  />
 */

var ListTitle = function (_SimpleWrapper) {
  inherits(ListTitle, _SimpleWrapper);

  function ListTitle() {
    classCallCheck(this, ListTitle);
    return possibleConstructorReturn(this, (ListTitle.__proto__ || Object.getPrototypeOf(ListTitle)).apply(this, arguments));
  }

  createClass(ListTitle, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-list-title';
    }
  }]);
  return ListTitle;
}(SimpleWrapper);

ListTitle.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-navigator
 * @category navigation
 * @tutorial react/Reference/navigator
 * @description
 * [en] This component is responsible for page transitioning and managing the pages of your OnsenUI application. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.  [/en]
 * [ja][/ja]
 * @example
  <Navigator
    renderPage={(route, navigator) =>
     <MyPage
       title={route.title}
       onPop={() => navigator.popPage()}
       />
    }
    initialRoute={{
        title: 'First Page'
    }} />
   }
 }
 */

var Navigator = function (_BasicComponent) {
  inherits(Navigator, _BasicComponent);

  function Navigator() {
    var _ref;

    classCallCheck(this, Navigator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Navigator.__proto__ || Object.getPrototypeOf(Navigator)).call.apply(_ref, [this].concat(args)));

    _this.pages = [];
    _this.state = {};
    _this._prePush = _this._prePush.bind(_this);
    _this._postPush = _this._postPush.bind(_this);
    _this._prePop = _this._prePop.bind(_this);
    _this._postPop = _this._postPop.bind(_this);
    return _this;
  }

  createClass(Navigator, [{
    key: 'update',
    value: function update(pages, obj) {
      var _this2 = this;

      this.pages = pages || [];
      return new Promise(function (resolve) {
        _this2.forceUpdate(resolve);
      });
    }

    /**
     * @method resetPage
     * @signature resetPage(route, options = {})
     * @param {Object} route
     *   [en] The route that the page should be reset to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Resets the current page[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'resetPage',
    value: function resetPage(route) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.resetPageStack([route], options);
    }

    /**
     * @method resetPageStack
     * @signature resetPageStack(route, options = {})
     * @param {Array} routes
     *   [en] The routes that the navigator should be reset to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Resets the navigator to the current page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'resetPageStack',
    value: function resetPageStack(routes) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return Promise.reject('Navigator is already running animation.');
      }

      var hidePages = function hidePages() {
        var pageElements = _this3._navi.pages;
        for (var i = pageElements.length - 2; i >= 0; i--) {
          pageElements[i].style.display = 'none';
        }
      };

      if (options.pop) {
        this.routesBeforePop = this.routes.slice();
        this.routesAfterPop = routes;
        this.routes = routes.concat([this.routes[this.routes.length - 1]]);

        var _update = function _update() {
          _this3.pages.pop();
          _this3.routes = routes;
          return new Promise(function (resolve) {
            return _this3.forceUpdate(resolve);
          });
        };

        return this.update(this.pages).then(function () {
          return _this3._navi._popPage(options, _update);
        }).then(function () {
          return hidePages();
        });
      }

      var lastRoute = routes[routes.length - 1];
      var newPage = this.props.renderPage(lastRoute, this);
      this.routes.push(lastRoute);

      var update = function update() {
        _this3.pages.push(newPage);
        return new Promise(function (resolve) {
          return _this3.forceUpdate(resolve);
        });
      };

      return this._navi._pushPage(options, update).then(function () {
        _this3.routes = routes;
        _this3.pages = routes.map(function (route) {
          return _this3.props.renderPage(route, _this3);
        });
        return _this3.update(_this3.pages).then(function () {
          return hidePages();
        });
      });
    }

    /**
     * @method pushPage
     * @signature pushPage(route, options = {})
     * @param {Object} route
     *   [en] The route that the navigator should push to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en] Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Pushes a page to the page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'pushPage',
    value: function pushPage(route) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return Promise.reject('Navigator is already running animation.');
      }

      return new Promise(function (resolve) {
        var update = function update() {
          return new Promise(function (resolve) {
            _this4.pages.push(_this4.props.renderPage(route, _this4));
            _this4.forceUpdate(resolve);
          });
        };

        _this4.routes.push(route);
        _this4._navi._pushPage(options, update).then(resolve).catch(function (error) {
          _this4.routes.pop();
          _this4.pages.pop();
          throw error;
        });
      });
    }
  }, {
    key: 'isRunning',
    value: function isRunning() {
      return this._navi._isRunning;
    }

    /*
     * @method replacePage
     * @signature replacePage(route, [options])
     * @param {Object} route
     *   [en] The route that the navigator should replace the top page with.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the new page.[/en]
     *   [ja]新しいページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Replaces the current top page with the specified one. Extends `pushPage()` parameters.[/en]
     *   [ja]現在表示中のページをを指定したページに置き換えます。[/ja]
     */

  }, {
    key: 'replacePage',
    value: function replacePage(route) {
      var _this5 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return Promise.reject('Navigator is already running animation.');
      }

      return this.pushPage(route, options).then(function () {
        var pos = _this5.pages.length - 2;
        _this5.pages.splice(pos, 1);
        _this5.routes.splice(pos, 1);
        _this5._navi.topPage.updateBackButton(_this5.pages.length > 1);
        _this5.forceUpdate();
      });
    }

    /**
     * @method popPage
     * @signature popPage(options = {})
     * @return {Promise}
     *   [en] Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Pops a page out of the page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'popPage',
    value: function popPage() {
      var _this6 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.isRunning()) {
        return Promise.reject('Navigator is already running animation.');
      }

      this.routesBeforePop = this.routes.slice();
      this.routesAfterPop = this.routesBeforePop.slice(0, this.routesBeforePop.length - 1);

      var update = function update() {
        return new Promise(function (resolve) {
          _this6.pages.pop();
          _this6.routes.pop();

          _this6.forceUpdate(resolve);
        });
      };

      return this._navi._popPage(options, update);
    }
  }, {
    key: '_onDeviceBackButton',
    value: function _onDeviceBackButton(event) {
      if (this.pages.length > 1) {
        this.popPage();
      } else {
        event.callParentHandler();
      }
    }
  }, {
    key: '_prePop',
    value: function _prePop(event) {
      if (event.target !== this._navi) {
        return;
      }

      event.routes = {
        poppingRoute: this.routesBeforePop[this.routesBeforePop.length - 1],
        routes: this.routesBeforePop
      };

      this.props.onPrePop(event);
    }
  }, {
    key: '_postPop',
    value: function _postPop(event) {
      if (event.target !== this._navi) {
        return;
      }

      event.routes = {
        poppedRoute: this.routesBeforePop[this.routesBeforePop.length - 1],
        routes: this.routesAfterPop
      };

      this.props.onPostPop(event);
    }
  }, {
    key: '_prePush',
    value: function _prePush(event) {
      if (event.target !== this._navi) {
        return;
      }

      event.routes = {
        pushingRoute: this.routes[this.routes.length - 1],
        routes: this.routes.slice(0, this.routes.length - 1)
      };

      this.props.onPrePush(event);
    }
  }, {
    key: '_postPush',
    value: function _postPush(event) {
      if (event.target !== this._navi) {
        return;
      }

      event.routes = {
        pushedRoute: this.routes[this.routes.length - 1],
        routes: this.routes
      };

      this.props.onPostPush(event);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this7 = this;

      var node = this._navi;
      node.popPage = this.popPage.bind(this);

      node.addEventListener('prepush', this._prePush);
      node.addEventListener('postpush', this._postPush);
      node.addEventListener('prepop', this._prePop);
      node.addEventListener('postpop', this._postPop);

      node.swipeMax = this.props.swipePop;
      node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);

      if (this.props.initialRoute && this.props.initialRouteStack) {
        throw new Error('In Navigator either initalRoute or initalRoutes can be set');
      }

      if (this.props.initialRoute) {
        this.routes = [this.props.initialRoute];
      } else if (this.props.initialRouteStack) {
        this.routes = this.props.initialRouteStack;
      } else {
        this.routes = [];
      }

      this.pages = this.routes.map(function (route) {
        return _this7.props.renderPage(route, _this7);
      });
      this.forceUpdate();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.onDeviceBackButton !== undefined) {
        this._navi.onDeviceBackButton = newProps.onDeviceBackButton;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = this._navi;
      node.removeEventListener('prepush', this.props.onPrePush);
      node.removeEventListener('postpush', this.props.onPostPush);
      node.removeEventListener('prepop', this.props.onPrePop);
      node.removeEventListener('postpop', this.props.onPostPop);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var attrs = Util.getAttrs(this);
      var pages = this.routes ? this.routes.map(function (route) {
        return _this8.props.renderPage(route, _this8);
      }) : null;

      return React.createElement(
        'ons-navigator',
        _extends({}, attrs, { ref: function ref(navi) {
            _this8._navi = navi;
          } }),
        pages
      );
    }
  }]);
  return Navigator;
}(BasicComponent);

Navigator.propTypes = {
  /**
   * @name renderPage
   * @type function
   * @required true
   * @defaultValue null
   * @description
   *  [en] This function takes the current route object as a parameter and returns a React component.[/en]
   *  [ja][/ja]
   */
  renderPage: PropTypes.func.isRequired,
  /**
   * @name initialRouteStack
   * @type array
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial routes from the Navigator,
   *  which will be used to render the initial pages in the `renderPage` method.
   *  [/en]
   *  [ja][/ja]
   */
  initialRouteStack: PropTypes.array,

  /**
   * @name initialRoute
   * @type object
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial route of the navigator,
   *  which will be used to render the initial pages in the
   *  renderPage method.
   *  [/en]
   *  [ja][/ja]
   */
  initialRoute: PropTypes.object,

  /**
   * @name onPrePush
   * @type function
   * @required false
   * @description
   *  [en]Called just before a page is pushed. It gets an event object with route information.[/en]
   *  [ja][/ja]
   */
  onPrePush: PropTypes.func,

  /**
   * @name onPostPush
   * @type function
   * @required false
   * @description
   *  [en]Called just after a page is pushed. It gets an event object with route information.[/en]
   *  [ja][/ja]
   */
  onPostPush: PropTypes.func,

  /**
   * @name onPrePop
   * @type function
   * @required false
   * @description
   *  [en]Called just before a page is popped. It gets an event object with route information.[/en]
   */
  onPrePop: PropTypes.func,

  /**
   * @name onPostPop
   * @type function
   * @required false
   * @description
   *  [en]Called just after a page is popped. It gets an event object with route information.[/en]
   *  [ja][/ja]
   */
  onPostPop: PropTypes.func,

  /**
   * @name animation
   * @type {String}
   * @description
   *   [en]
   *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
   *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
   *   [/en]
   *   [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name swipeable
   * @type bool|string
   * @required false
   * @description
   *  [en]Enables swipe-to-pop functionality for iOS.[/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * @name swipePop
   * @type function
   * @required false
   * @description
   *  [en]Optional function called on swipe-to-pop. If provided, must perform a popPage with the given options object.[/en]
   *  [ja][/ja]
   */
  swipePop: PropTypes.func,
  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]Custom handler for device back button.[/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

var NOOP = function NOOP() {
  return null;
};

Navigator.defaultProps = {
  onPostPush: NOOP,
  onPrePush: NOOP,
  onPrePop: NOOP,
  onPostPop: NOOP
};

/**
 * @original ons-modal
 * @category dialog
 * @tutorial react/Reference/modal
 * @description
 * [en]
 *   A modal component covers the entire screen. Underlying components are not
 *   subject to any events while the modal component is shown.
 *
 *   This component can be used to block user input while some operation is
 *   running or to show some information to the user.
 * [/en]
 * [ja]
 *   画面全体をマスクするモーダル用コンポーネントです。下側にあるコンポーネントは、
 *   モーダルが表示されている間はイベント通知が行われません
 * [/ja]
 * @example
  <Page>
    <div> Page content </div>

    <Modal isOpen={this.state.isLoading}>
      Loading ...
    </Modal>
  </Page>
 */

var Modal = function (_BaseDialog) {
  inherits(Modal, _BaseDialog);

  function Modal() {
    classCallCheck(this, Modal);
    return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  createClass(Modal, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-modal';
    }
  }]);
  return Modal;
}(BaseDialog);

Modal.propTypes = {
  /**
   * @name animation
   * @type {String}
   * @description
   *   [en]
   *     Animation name. Available animations are `"fade"`, `"lift"` and `"none"`.
   *   [/en]
   */
  animation: PropTypes.oneOf(['none', 'fade', 'lift']),

  /**
   * @name animationOptions
   * @type object
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the modal is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the modal is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the modal is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the modal is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name isOpen
   * @type boolean
   * @description
   *  [en]When `true` the modal will show itself.[/en]
   */
  isOpen: PropTypes.bool,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

Modal.defaultProps = {
  isOpen: false,
  animation: 'none'
};

/**
 * @original ons-page
 * @category page
 * @tutorial react/Reference/page
 * @description
 * [en]
 *   This component is handling the entire page. The content can be scrolled.
 *
 *   To add fixed content that doesn't scroll with the page the `renderFixed` prop is used.
 *
 *   A page toolbar can be added with the `renderToolbar` prop.
 * [/en]
 * [ja][/ja]
 * @example
  <Page
    renderFixed={() => <Fab></Fab>}
    renderToolbar={() => <Toolbar>...</Toolbar>}
    contentStyle={{padding: 40}}>
    <div> Page content </div>
  </Page>
 */

var Page = function (_BasicComponent) {
  inherits(Page, _BasicComponent);

  function Page() {
    var _ref;

    classCallCheck(this, Page);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onInit = callback.bind(_this, 'onInit');
    _this.onShow = callback.bind(_this, 'onShow');
    _this.onHide = callback.bind(_this, 'onHide');
    return _this;
  }

  createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);
      node.addEventListener('init', this.onInit);
      node.addEventListener('show', this.onShow);
      node.addEventListener('hide', this.onHide);

      if (this.props.onDeviceBackButton instanceof Function) {
        node.onDeviceBackButton = this.props.onDeviceBackButton;
      }
      if (this.props.onInfiniteScroll instanceof Function) {
        node.onInfiniteScroll = this.props.onInfiniteScroll;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.onDeviceBackButton !== undefined) {
        ReactDOM__default.findDOMNode(this).onDeviceBackButton = newProps.onDeviceBackButton;
      }
      if (newProps.onInfiniteScroll !== undefined) {
        ReactDOM__default.findDOMNode(this).onInfiniteScroll = newProps.onInfiniteScroll;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM__default.findDOMNode(this);
      node.removeEventListener('init', this.onInit);
      node.removeEventListener('show', this.onShow);
      node.removeEventListener('hide', this.onHide);
    }
  }, {
    key: 'render',
    value: function render() {
      var toolbar = this.props.renderToolbar(this);
      var bottomToolbar = this.props.renderBottomToolbar(this);
      var modal = this.props.renderModal(this);
      var fixed = this.props.renderFixed(this);

      var _props = this.props,
          contentStyle = _props.contentStyle,
          other = objectWithoutProperties(_props, ['contentStyle']);

      var attrs = Util.getAttrs(this, other);

      return React.createElement(
        'ons-page',
        attrs,
        toolbar,
        React.createElement(
          'div',
          { className: 'page__background' },
          ' '
        ),
        React.createElement(
          'div',
          { className: 'page__content', style: contentStyle },
          this.props.children
        ),
        React.createElement(
          'div',
          { className: 'page__extra', style: { zIndex: 10001 } },
          modal
        ),
        fixed,
        bottomToolbar
      );
    }
  }]);
  return Page;
}(BasicComponent);

Page.propTypes = {

  /**
   * @name contentStyle
   * @type Object
   * @description
   *  [en]
   *  Specify the style of the page content. Optional.
   *  [/en]
   */
  contentStyle: PropTypes.object,

  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name renderModal
   * @type function
   * @required false
   * @defaultValue null
   * @description
   *  [en] This function renders a modal that masks current screen.[/en]
   */
  renderModal: PropTypes.func,

  /**
   * @name renderToolbar
   * @type function
   * @required false
   * @defaultValue null
   * @description
   *  [en] This function renders the toolbar of the page.[/en]
   *  [ja][/ja]
   */
  renderToolbar: PropTypes.func,

  /**
   * @name renderBottomToolbar
   * @type function
   * @defaultValue null
   * @description
   *  [en] This function renders the bottom toolbar of the page.[/en]
   *  [ja][/ja]
   */
  renderBottomToolbar: PropTypes.func,

  /**
   * @name renderFixed
   * @type function
   * @defaultValue null
   * @description
   *  [en] This function renders fixed content of the page. Can be used to render `Fab` or `SpeedDial` components as well as other components that don't scroll with the page.[/en]
   *  [ja][/ja]
   */
  renderFixed: PropTypes.func,

  /**
   * @name onInit
   * @type function
   * @required false
   * @description
   *  [en]
   *  	Fired right after the page is attached.
   *  [/en]
   *  [ja][/ja]
   */
  onInit: PropTypes.func,

  /**
   * @name onShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called Fired right after the page is shown.
   *  [/en]
   *  [ja][/ja]
   */
  onShow: PropTypes.func,

  /**
   * @name onHide
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called after the page is hidden.
   *  [/en]
   *  [ja][/ja]
   */
  onHide: PropTypes.func,

  /**
   * @name onInfiniteScroll
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called when scrolling to the bottom of the page. It gets a 'done' callback (first argument) that must be called when it's finished.
   *  [/en]
   *  [ja][/ja]
   */
  onInfiniteScroll: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

var NOOP$1 = function NOOP() {
  return null;
};

Page.defaultProps = {
  renderToolbar: NOOP$1,
  renderBottomToolbar: NOOP$1,
  renderModal: NOOP$1,
  renderFixed: NOOP$1
};

/**
 * @original ons-popover
 * @category dialog
 * @tutorial react/Reference/popover
 * @description
 *   [en]
 *     A component that displays a popover next to an element. The popover can be used to display extra information about a component or a tooltip.
 *    Another common way to use the popover is to display a menu when a button on the screen is tapped.
 *   [/en]
 * [ja][/ja]
 * @example
 * <Page>
 *  <Button
 *    ref={(btn) => { this.btn = btn; }}
 *    onClick={() =>
 *      this.setState({target: this.btn, isOpen: true})
 *    }
 *  />
    <Popover
      isOpen={this.state.isOpen}
      onCancel={() => this.setState({isOpen: false})}
      getTarget={() => this.state.target}
    >
      <div style={{textAlign: 'center', opacity: 0.5}}>
        <p>This is a popover!</p>
          <p><small>Click the background to remove the popover.</small></p>
        </div>
        </Popover>
 * </Page>
 */

var Popover = function (_BaseDialog) {
  inherits(Popover, _BaseDialog);

  function Popover() {
    classCallCheck(this, Popover);
    return possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
  }

  createClass(Popover, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-popover';
    }
  }, {
    key: 'show',
    value: function show() {
      var target = this.props.getTarget();
      target = ReactDOM__default.findDOMNode(target);
      return this.node.firstChild.show(target);
    }
  }]);
  return Popover;
}(BaseDialog);

Popover.propTypes = {
  /**
   * @name getTarget
   * @type function
   * @required true
   * @description
   *  [en]
   *  This function should return react component or a domnode that the popover is showing on.
   *  [/en]
   *  [ja][/ja]
   */
  getTarget: PropTypes.func.isRequired,
  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  maskColor: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-progress-bar
 * @category visual
 * @tutorial react/Reference/progress
 * @description
 * [en] The component is used to display a linear progress bar. It can either display a progress bar that shows the user how much of a task has been completed. In the case where the percentage is not known it can be used to display an animated progress bar so the user can see that an operation is in progress.  [/en]
 * [ja][/ja]
 * @example
 *<ProgressBar value={55} secondaryValue={87} />
 *<ProgressBar indeterminate />
 */

var ProgressBar = function (_SimpleWrapper) {
  inherits(ProgressBar, _SimpleWrapper);

  function ProgressBar() {
    classCallCheck(this, ProgressBar);
    return possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  createClass(ProgressBar, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-progress-bar';
    }
  }]);
  return ProgressBar;
}(SimpleWrapper);

ProgressBar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the progress indicator.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name value
   * @type number
   * @description
   *  [en]
   *  Current progress. Should be a value between 0 and 100.
   *  [/en]
   *  [ja][/ja]
   */
  value: PropTypes.number,

  /**
   * @name secondaryValue
   * @type bool
   * @description
   *  [en]
   *  Current secondary progress. Should be a value between 0 and 100.
   *  [/en]
   *  [ja][/ja]
   */
  secondaryValue: PropTypes.number,

  /**
   * @name indeterminate
   * @type bool
   * @description
   *  [en] If this property is set, an infinite looping animation will be shown. [/en]
   *  [ja][/ja]
   */
  indeterminate: PropTypes.bool
};

/**
 * @original ons-progress-circular
 * @category visual
 * @tutorial react/Reference/progress
 * @description
 * [en] This component displays a circular progress indicator. It can either be used to show how much of a task has been completed or to show a looping animation to indicate that an operation is currently running.
 * [/en]
 * [ja][/ja]
 * @example
 *<ProgressCircular value={55} secondaryValue={87} />
 *<ProgressCircular indeterminate />
 */

var ProgressCircular = function (_SimpleWrapper) {
  inherits(ProgressCircular, _SimpleWrapper);

  function ProgressCircular() {
    classCallCheck(this, ProgressCircular);
    return possibleConstructorReturn(this, (ProgressCircular.__proto__ || Object.getPrototypeOf(ProgressCircular)).apply(this, arguments));
  }

  createClass(ProgressCircular, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-progress-circular';
    }
  }]);
  return ProgressCircular;
}(SimpleWrapper);

ProgressCircular.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the progress indicator.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name value
   * @type number
   * @description
   *  [en]
   *  Current progress. Should be a value between 0 and 100.
   *  [/en]
   *  [ja][/ja]
   */
  value: PropTypes.number,

  /**
   * @name secondaryValue
   * @type bool
   * @description
   *  [en]
   *  Current secondary progress. Should be a value between 0 and 100.
   *  [/en]
   *  [ja][/ja]
   */
  secondaryValue: PropTypes.number,

  /**
   * @name indeterminate
   * @type bool
   * @description
   *  [en] If this property is set, an infinite looping animation will be shown. [/en]
   *  [ja][/ja]
   */
  indeterminate: PropTypes.bool
};

/**
 * @original ons-pull-hook
 * @category control
 * @tutorial react/Reference/pull-hook
 * @description
 * [en]  Component that adds **Pull to refresh** functionality to an `<ons-page>` element.
 *     It can be used to perform a task when the user pulls down at the top of the page. A common usage is to refresh the data displayed in a page.
 [/en]
 * [ja][/ja]
 * @example

    return (
      <PullHook onChange={this.onChange} onLoad={this.onLoad}>
      {
       (this.state.pullHookState === 'initial') ?
        <span >
          <Icon size={35} spin={false} icon='ion-arrow-down-a' />
          Pull down to refresh
        </span> :
        (this.state.pullHookState === 'preaction') ?
         <span>
           <Icon size={35} spin={false} icon='ion-arrow-up-a' />
           Release to refresh
        </span>
        :
        <span><Icon size={35} spin={true} icon='ion-load-d'></Icon> Loading data...</span>
    }
      </PullHook>
    );
 */

var PullHook = function (_BasicComponent) {
  inherits(PullHook, _BasicComponent);

  function PullHook() {
    var _ref;

    classCallCheck(this, PullHook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = PullHook.__proto__ || Object.getPrototypeOf(PullHook)).call.apply(_ref, [this].concat(args)));

    _this.onChange = function (event) {
      if (_this.props.onChange) {
        return _this.props.onChange(event);
      }
    };
    return _this;
  }

  createClass(PullHook, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(PullHook.prototype.__proto__ || Object.getPrototypeOf(PullHook.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);
      node.addEventListener('changestate', this.onChange);
      this._pullHook.onAction = this.props.onLoad || null;
      this._pullHook.onPull = this.props.onPull || null;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM__default.findDOMNode(this);
      node.removeEventListener('changestate', this.onChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.onLoad !== prevProps.onLoad) {
        this._pullHook.onAction = this.props.onLoad;
      }
      if (this.props.onPull !== prevProps.onPull) {
        this._pullHook.onPull = this.props.onPull;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attrs = Util.getAttrs(this);
      return React.createElement('ons-pull-hook', _extends({}, attrs, { ref: function ref(pullHook) {
          _this2._pullHook = pullHook;
        } }));
    }
  }]);
  return PullHook;
}(BasicComponent);

PullHook.propTypes = {
  /**
   * @name onChange
   * @type function
   * @required false
   * @description
   *  [en]Called when the pull hook inner state is changed. The state can be either "initial", "preaction" or "action"[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name onLoad
   * @type function
   * @required false
   * @description
   *  [en]Called when the pull hook is in the `action` state[/en]
   *  [ja][/ja]
   */
  onLoad: PropTypes.func,

  /**
   * @name onPull
   * @type function
   * @required false
   * @description
   *  [en]Hook called whenever the user pulls the element. It gets the pulled distance ratio (scroll / height) and an animationOptions object as arguments.[/en]
   *  [ja][/ja]
   */
  onPull: PropTypes.func,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] When set to true, the pull hook will be disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name height
   * @type number
   * @description
   *  [en] The height of the pull hook in pixels. The default value is 64.[/en]
   *  [ja][/ja]
   */
  height: PropTypes.number,

  /**
   * @name thresholdHeight
   * @type number
   * @description
   *  [en] The threshold height of the pull hook in pixels. The default value is 96.[/en]
   *  [ja][/ja]
   */
  thresholdHeight: PropTypes.number,

  /**
   * @name fixedContent
   * @type number
   * @description
   *  [en] If set to true, the content of the page will not move when pulling.[/en]
   *  [ja][/ja]
   */
  fixedContent: PropTypes.bool
};

/**
 * @original ons-radio
 * @category form
 * @tutorial react/Reference/input
 * @description
 * [en]
 *  A radio button element. The component will automatically render as a Material Design radio button on Android devices.
 *
 *  Most attributes that can be used for a normal `<input type="radio">` element can also be used on the `<Radio>` component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Radio
 *   onChange={event => { this.setState({checked: event.target.checked})} }
 *   modifier='material' />
 */

var Radio = function (_BaseInput) {
  inherits(Radio, _BaseInput);

  function Radio() {
    classCallCheck(this, Radio);
    return possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  createClass(Radio, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-radio';
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change'];
    }
  }]);
  return Radio;
}(BaseInput);

Radio.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the radio button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the radio button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the radio button state changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en] Value of the radio button.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name checked
   * @type boolean
   * @description
   *  [en]Controls the state of the radio button.[/en]
   *  [ja][/ja]
   */
  checked: PropTypes.bool,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements.[/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string
};

/**
 * @original ons-range
 * @category form
 * @tutorial react/Reference/range
 * @description
 * [en]
 *   Range input component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Range modifier="material"
 *   value={this.state.value}
 *   onChange={(event) => this.setState({value: parseInt(event.target.value)})}
 *   />
 */

var Range = function (_BaseInput) {
  inherits(Range, _BaseInput);

  function Range() {
    classCallCheck(this, Range);
    return possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
  }

  createClass(Range, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-range';
    }
  }]);
  return Range;
}(BaseInput);

Range.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the progress indicator.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the value of the input changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type number
   * @description
   *  [en]
   *  Current value of the element.
   *  [/en]
   *  [ja][/ja]
   */
  value: PropTypes.number,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] If true, the element is disabled. [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool
};

/**
 * @original ons-ripple
 * @category visual
 * @tutorial react/Reference/ripple
 * @description
 * [en]
 *   Adds a Material Design "ripple" effect to an element.
 * [/en]
 * [ja][/ja]
 * @example
   <div className='myList'>
     <Ripple color='red' />
   </div>
 */

var Ripple = function (_SimpleWrapper) {
  inherits(Ripple, _SimpleWrapper);

  function Ripple() {
    classCallCheck(this, Ripple);
    return possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).apply(this, arguments));
  }

  createClass(Ripple, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-ripple';
    }
  }]);
  return Ripple;
}(SimpleWrapper);

Ripple.propTypes = {
  /**
   * @name color
   * @type string
   * @required false
   * @description
   *  [en]Color of the ripple effect.[/en]
   *  [ja][/ja]
   */
  color: PropTypes.string,

  /**
   * @name background
   * @type string
   * @required false
   * @description
   *  [en]Color of the background.[/en]
   *  [ja][/ja]
   */
  background: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool
};

/**
 * @original ons-navigator
 * @category navigation
 * @tutorial react/Reference/navigator
 * @description
 * [en] This component is responsible for page transitioning and managing the pages of your OnsenUI application. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.[/en]
 * [ja][/ja]
 */

var RouterNavigator = function (_BasicComponent) {
  inherits(RouterNavigator, _BasicComponent);

  function RouterNavigator() {
    var _ref;

    classCallCheck(this, RouterNavigator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = RouterNavigator.__proto__ || Object.getPrototypeOf(RouterNavigator)).call.apply(_ref, [this].concat(args)));

    _this.cancelUpdate = false;
    _this.page = null;

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onPrePush = callback.bind(_this, 'onPrePush');
    _this.onPostPush = callback.bind(_this, 'onPostPush');
    _this.onPrePop = callback.bind(_this, 'onPrePop');
    _this.onPostPop = callback.bind(_this, 'onPostPop');
    return _this;
  }

  createClass(RouterNavigator, [{
    key: 'update',
    value: function update(cb) {
      if (!this.cancelUpdate) {
        this.setState({}, cb);
      }
    }

    /**
     * @method resetPageStack
     * @signature resetPageStack(route, options = {})
     * @param {Array} [routes]
     *   [en] The routes that the navigator should be reset to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Resets the navigator to the current page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'resetPageStack',
    value: function resetPageStack(routes) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return;
      }

      var update = function update() {
        return new Promise(function (resolve) {
          _this2.pages.push(_this2.props.renderPage(routes[routes.length - 1]));
          _this2.update(resolve);
        });
      };

      return this._navi._pushPage(options, update).then(function () {
        _this2.pages = routes.map(function (route) {
          return _this2.props.renderPage(route);
        });
        _this2.update();
      });
    }

    /**
     * @method pushPage
     * @signature pushPage(route, options = {})
     * @param {Array} [routes]
     *   [en] The routes that the navigator should push to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en] Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Pushes a page to the page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'pushPage',
    value: function pushPage(route) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return;
      }

      var update = function update() {
        return new Promise(function (resolve) {
          _this3.page = _this3.props.renderPage(route);
          _this3.update(resolve);
        });
      };

      return this._navi._pushPage(options, update).then(function () {
        _this3.page = null;
        _this3.update();
      });
    }
  }, {
    key: 'isRunning',
    value: function isRunning() {
      return this._navi._isRunning;
    }

    /*
     * @method replacePage
     * @signature replacePage(page, [options])
     * @return {Promise}
     *   [en]Promise which resolves to the new page.[/en]
     *   [ja]新しいページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Replaces the current top page with the specified one. Extends `pushPage()` parameters.[/en]
     *   [ja]現在表示中のページをを指定したページに置き換えます。[/ja]
     */

  }, {
    key: 'replacePage',
    value: function replacePage(route) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return;
      }

      var update = function update() {
        return new Promise(function (resolve) {
          _this4.pages.push(_this4.props.renderPage(route));
          _this4.update(resolve);
        });
      };

      return this._navi._pushPage(options, update).then(function () {
        _this4.pages.splice(_this4.pages.length - 2, 1);
        _this4.update();
      });
    }

    /**
     * @method popPage
     * @signature popPage(route, options = {})
     * @return {Promise}
     *   [en] Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Pops a page out of the page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'popPage',
    value: function popPage() {
      var _this5 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.isRunning()) {
        return;
      }

      var update = function update() {
        return new Promise(function (resolve) {
          _this5.pages.pop();
          _this5.update(resolve);
        });
      };

      return this._navi._popPage(options, update);
    }
  }, {
    key: '_onDeviceBackButton',
    value: function _onDeviceBackButton(event) {
      if (this.props.routeConfig.routeStack.length > 1) {
        this.popPage();
      } else {
        event.callParentHandler();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      var node = this._navi;

      this.cancelUpdate = false;

      node.addEventListener('prepush', this.onPrePush);
      node.addEventListener('postpush', this.onPostPush);
      node.addEventListener('prepop', this.onPrePop);
      node.addEventListener('postpop', this.onPostPop);

      if (!this.props.routeConfig) {
        throw new Error('In RouterNavigator the property routeConfig needs to be set');
      }

      this.routeConfig = this.props.routeConfig;

      this.pages = this.routeConfig.routeStack.map(function (route) {
        return _this6.props.renderPage(route, _this6);
      });

      node.swipeMax = this.props.swipePop;
      node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);

      this.update();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var processStack = [].concat(toConsumableArray(newProps.routeConfig.processStack));

      if (newProps.onDeviceBackButton !== undefined) {
        this._navi.onDeviceBackButton = newProps.onDeviceBackButton;
      }

      /**
       * Fix for Redux Timetravel.
       */
      if (this.props.routeConfig.processStack.length < newProps.routeConfig.processStack.length && this.props.routeConfig.routeStack.length > newProps.routeConfig.routeStack.length) {
        return;
      }

      if (processStack.length > 0) {
        var _processStack$ = processStack[0],
            type = _processStack$.type,
            route = _processStack$.route,
            options = _processStack$.options;


        switch (type) {
          case 'push':
            this.pushPage(route, options);
            break;
          case 'pop':
            this.popPage(options);
            break;
          case 'reset':
            if (Array.isArray(route)) {
              this.resetPageStack(route, options);
            } else {
              this.resetPageStack([route], options);
            }
            break;
          case 'replace':
            this.replacePage(route, options);
            break;
          default:
            throw new Error('Unknown type ' + type + ' in processStack');
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = this._navi;
      node.removeEventListener('prepush', this.onPrePush);
      node.removeEventListener('postpush', this.onPostPush);
      node.removeEventListener('prepop', this.onPrePop);
      node.removeEventListener('postpop', this.onPostPop);
      this.cancelUpdate = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var attrs = Util.getAttrs(this);

      return React.createElement(
        'ons-navigator',
        _extends({}, attrs, { ref: function ref(navi) {
            _this7._navi = navi;
          } }),
        this.props.routeConfig.routeStack.map(function (route) {
          return _this7.props.renderPage(route);
        }),
        this.page
      );
    }
  }]);
  return RouterNavigator;
}(BasicComponent);

RouterNavigator.propTypes = {
  /**
   * @name renderPage
   * @type function
   * @required true
   * @defaultValue null
   * @description
   *  [en] This function takes the current route object as a parameter and  creates returns a react componen.[/en]
   *  [ja][/ja]
   */
  renderPage: PropTypes.func.isRequired,
  /**
   * @name initialRouteStack
   * @type array
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial routes from the navigator,
   *  which will be used to render the initial pages in the renderPage method.
   *  [/en]
   *  [ja][/ja]
   */
  initialRouteStack: PropTypes.array,

  /**
   * @name initialRoute
   * @type object
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial route of the navigator,
   *  which will be used to render the initial pages in the
   *  renderPage method.
   *  [/en]
   *  [ja][/ja]
   */
  initialRoute: PropTypes.object,

  /**
   * @name onPrePush
   * @type function
   * @required false
   * @description
   *  [en]Called just before a page is pushed.[/en]
   */
  onPrePush: PropTypes.func,

  /**
   * @name onPostPush
   * @type function
   * @required false
   * @description
   *  [en]Called just after a page is pushed.[/en]
   */
  onPostPush: PropTypes.func,

  /**
   * @name onPrePop
   * @type function
   * @required false
   * @description
   *  [en]Called just before a page is popped.[/en]
   */
  onPrePop: PropTypes.func,

  /**
   * @name onPostPop
   * @type function
   * @required false
   * @description
   *  [en]Called just after a page is popped.[/en]
   */
  onPostPop: PropTypes.func,

  /**
   * @property animation
   * @type {String}
   * @description
   *   [en]
   *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
   *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
   *   [/en]
   */
  animation: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name swipeable
   * @type bool|string
   * @required false
   * @description
   *  [en]
   *  Enables swipe-to-pop functionality for iOS.
   *  [/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * @name swipePop
   * @type function
   * @required false
   * @description
   *  [en]
   *  Function called on swipe-to-pop. Must perform a popPage with the given options object.
   *  [/en]
   *  [ja][/ja]
   */
  swipePop: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-row
 * @category grid
 * @description
 * [en]
 * Represents a row in the grid system. Use with `Col` to layout components.
 * [/en]
 * [ja][/ja]
 * <Row>
 *   <Col width={50}>
  *   <ons-icon icon="fa-twitter"></ons-icon>
 *   </Col>
 *   <Col>Text</Col>
 * </Row>
 */

var Row = function (_SimpleWrapper) {
  inherits(Row, _SimpleWrapper);

  function Row() {
    classCallCheck(this, Row);
    return possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  createClass(Row, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-row';
    }
  }]);
  return Row;
}(SimpleWrapper);

Row.propTypes = {

  /**
  * @name verticalAlign
  * @type {String}
  * @description
  *   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
  *   [ja][/ja]
  */
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center'])

};

/**
 * @original ons-search-input
 * @category form
 * @tutorial react/Reference/input
 * @description
 * [en]
 *  A search input component. The component will automatically render as a Material Design search input on Android devices.
 *
 *  Most attributes that can be used for a normal `<input>` element can also be used on the `<SearchInput>` component.
 * [/en]
 * [ja][/ja]
 * @example
 * <SearchInput
 *   value={this.state.text}
 *   onChange={(event) => { this.setState({text: event.target.value})} }
 *   modifier='material'
 *   placeholder='Username' />
 */

var SearchInput = function (_BaseInput) {
  inherits(SearchInput, _BaseInput);

  function SearchInput() {
    classCallCheck(this, SearchInput);
    return possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).apply(this, arguments));
  }

  createClass(SearchInput, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-search-input';
    }
  }]);
  return SearchInput;
}(BaseInput);

SearchInput.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the input.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]Specifies whether the input is disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en]Called when the text of the input changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en]Content of the input.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name inputId
   * @type string
   * @description
   *  [en]  Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements [/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string
};

/**
 * @original ons-segment
 * @category control
 * @tutorial react/Reference/segment
 * @description
 * [en]
 *   Segment component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Segment modifier="material">
 *  <button>Label 1</button>
 *  <button>Label 2</button>
 *  <button>Label 3</button>
 * </Segment>
 */

var Segment = function (_BasicComponent) {
  inherits(Segment, _BasicComponent);

  function Segment() {
    var _ref;

    classCallCheck(this, Segment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Segment.__proto__ || Object.getPrototypeOf(Segment)).call.apply(_ref, [this].concat(args)));

    _this.onPostChange = function (event) {
      if (_this.props.onPostChange) {
        return _this.props.onPostChange(event);
      }
    };
    return _this;
  }

  createClass(Segment, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-segment';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Segment.prototype.__proto__ || Object.getPrototypeOf(Segment.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM.findDOMNode(this);

      node.addEventListener('postchange', this.onPostChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM.findDOMNode(this);

      node.removeEventListener('postchange', this.onPostChange);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var node = ReactDOM.findDOMNode(this);

      if (this.props.index !== props.index && props.index !== node.getActiveButtonIndex()) {
        node.setActiveButton(props.index, { reject: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var attrs = Util.getAttrs(this, this.props, { index: 'active-index' });
      return React.createElement(this._getDomNodeName(), attrs, this.props.children);
    }
  }]);
  return Segment;
}(BasicComponent);

Segment.propTypes = {
  /**
   * @name index
   * @type number
   * @required
   * @description
   *  [en] The index of the button to highlight.[/en]
   *  [ja][/ja]
   */
  index: PropTypes.number,

  /**
   * @name tabbarId
   * @type string
   * @description
   *  [en] ID of the `<Tabbar>` to "connect" to the segment. [/en]
   *  [ja][/ja]
   */
  tabbarId: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the segment.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the active button changes.[/en]
   *  [ja][/ja]
   */
  onPostChange: PropTypes.func
};

/**
 * @original ons-select
 * @category form
 * @tutorial react/Reference/select
 * @description
 * [en]
 *   Select input component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Select modifier="material"
 *   value={this.state.value}
 *   onChange={(event) => this.setState({value: event.target.value})}
 *   <option value="1">1</option>
 *   <option value="2">2nd</option>
 *   <option value="3">3rd option</option>
 * </Select>
 */

var Select = function (_BaseInput) {
  inherits(Select, _BaseInput);

  function Select() {
    classCallCheck(this, Select);
    return possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          props = objectWithoutProperties(_props, ['value', 'onChange']);

      var attrs = Util.getAttrs(this, props);

      return React.createElement(
        'ons-select',
        attrs,
        React.createElement(
          'select',
          null,
          this.props.children
        )
      );
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change'];
    }
  }]);
  return Select;
}(BaseInput);

Select.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]The appearance of the select box.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]Specifies whether the select is disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en]Called when the value of the select changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en]Use this prop to set the selected option value.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.string,

  /**
   * @name multiple
   * @type boolean
   * @description
   *  [en]If this attribute is defined, multiple options can be selected at once.[/en]
   *  [ja][/ja]
   */
  multiple: PropTypes.bool,

  /**
   * @name autofocus
   * @type boolean
   * @description
   *  [en]Element automatically gains focus on page load.[/en]
   *  [ja][/ja]
   */
  autofocus: PropTypes.bool,

  /**
   * @name required
   * @type boolean
   * @description
   *  [en]Make the select input required for submitting the form it is part of.[/en]
   *  [ja][/ja]
   */
  required: PropTypes.bool,

  /**
   * @name form
   * @type string
   * @description
   *  [en]Associate a select element to an existing form on the page, even if not nested.[/en]
   *  [ja][/ja]
   */
  form: PropTypes.string,

  /**
   * @name size
   * @type string
   * @description
   *  [en]How many options are displayed; if there are more than the size then a scroll appears to navigate them[/en]
   *  [ja][/ja]
   */
  size: PropTypes.string
};

/**
 * @original ons-speed-dial
 * @category control
 * @tutorial react/Reference/speed-dial
 * @description
 * [en] Element that displays a Material Design Speed Dialog component. It is useful when there are more than one primary action that can be performed in a page.
 *  The Speed dial looks like a `Fab` element but will expand a menu when tapped.
 [/en]
 * [ja][/ja]
 * @example
 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
     <Fab>
       <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
     </Fab>
     <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
   </SpeedDial>
 */

var SpeedDial = function (_SimpleWrapper) {
  inherits(SpeedDial, _SimpleWrapper);

  function SpeedDial() {
    classCallCheck(this, SpeedDial);
    return possibleConstructorReturn(this, (SpeedDial.__proto__ || Object.getPrototypeOf(SpeedDial)).apply(this, arguments));
  }

  createClass(SpeedDial, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-speed-dial';
    }
  }]);
  return SpeedDial;
}(SimpleWrapper);

SpeedDial.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the speed dial.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name position
   * @type string
   * @description
   *  [en]Specify the vertical and horizontal position of the component.
   *     I.e. to display it in the top right corner specify "right top".
   *     Choose from "right", "left", "top" and "bottom".
  [/en]
   *  [ja][/ja]
   */
  position: PropTypes.string,

  /**
   * @name direction
   * @type string
   * @description
   *  [en]Specify the direction the items are displayed. Possible values are "up", "down", "left" and "right".[/en]
   *  [ja][/ja]
   */
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

  /**
   * @name disabled
   * @type string
   * @description
   *  [en]Specify if button should be disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool
};

/**
 * @original ons-speed-dial-item
 * @category control
 * @tutorial react/Reference/speed-dial
 * @description
 * [en] This component displays the child elements of the Material Design Speed dial component. [/en]
 * [ja][/ja]
 * @example
 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
     <Fab>
       <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
     </Fab>
     <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
   </SpeedDial>
 */

var SpeedDialItem = function (_SimpleWrapper) {
  inherits(SpeedDialItem, _SimpleWrapper);

  function SpeedDialItem() {
    var _ref;

    classCallCheck(this, SpeedDialItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = SpeedDialItem.__proto__ || Object.getPrototypeOf(SpeedDialItem)).call.apply(_ref, [this].concat(args)));

    _this.onClick = function (event) {
      if (_this.props.onClick) {
        return _this.props.onClick(event);
      }
    };
    return _this;
  }

  createClass(SpeedDialItem, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-speed-dial-item';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(SpeedDialItem.prototype.__proto__ || Object.getPrototypeOf(SpeedDialItem.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);
      node.addEventListener('click', this.onClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM__default.findDOMNode(this);
      node.removeEventListener('click', this.onClick);
    }
  }]);
  return SpeedDialItem;
}(SimpleWrapper);

SpeedDialItem.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en] This function will be called ones the button is clicked. [/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-splitter
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout.
 *
 *    It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide
      side="left"
      width={200}
      isSwipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide
      side="right"
      width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      isSwipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */

var Splitter = function (_SimpleWrapper) {
  inherits(Splitter, _SimpleWrapper);

  function Splitter() {
    classCallCheck(this, Splitter);
    return possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).apply(this, arguments));
  }

  createClass(Splitter, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-splitter';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Splitter.prototype.__proto__ || Object.getPrototypeOf(Splitter.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);

      if (this.props.onDeviceBackButton instanceof Function) {
        node.onDeviceBackButton = this.props.onDeviceBackButton;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.onDeviceBackButton !== undefined) {
        ReactDOM__default.findDOMNode(this).onDeviceBackButton = newProps.onDeviceBackButton;
      }
    }
  }]);
  return Splitter;
}(SimpleWrapper);

Splitter.propTypes = {
  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-splitter-content
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  The SplitterContent  element is used as a child element of Splitter.
 *    It contains the main content of the page while SplitterSide contains the list.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide
      side="left"
      width={200}
      isSwipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide
      side="right"
      width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      isSwipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */

var SplitterContent = function (_SimpleWrapper) {
  inherits(SplitterContent, _SimpleWrapper);

  function SplitterContent() {
    classCallCheck(this, SplitterContent);
    return possibleConstructorReturn(this, (SplitterContent.__proto__ || Object.getPrototypeOf(SplitterContent)).apply(this, arguments));
  }

  createClass(SplitterContent, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-splitter-content';
    }
  }]);
  return SplitterContent;
}(SimpleWrapper);

/**
 * @original ons-splitter-side
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  The SplitterContent  element is used as a child element of Splitter.
 *    It contains the main content of the page while SplitterSide contains the list.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide
      side="left"
      width={200}
      swipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide
      side="right"
      width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      swipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */

var SplitterSide = function (_BasicComponent) {
  inherits(SplitterSide, _BasicComponent);

  function SplitterSide() {
    var _ref;

    classCallCheck(this, SplitterSide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = SplitterSide.__proto__ || Object.getPrototypeOf(SplitterSide)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onOpen = callback.bind(_this, 'onOpen');
    _this.onClose = callback.bind(_this, 'onClose');
    _this.onPreOpen = callback.bind(_this, 'onPreOpen');
    _this.onPreClose = callback.bind(_this, 'onPreClose');
    _this.onModeChange = callback.bind(_this, 'onModeChange');
    return _this;
  }

  createClass(SplitterSide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(SplitterSide.prototype.__proto__ || Object.getPrototypeOf(SplitterSide.prototype), 'componentDidMount', this).call(this);
      this.node = ReactDOM__default.findDOMNode(this);
      this.componentWillReceiveProps(this.props);

      this.node.addEventListener('postopen', this.onOpen);
      this.node.addEventListener('postclose', this.onClose);
      this.node.addEventListener('preopen', this.onPreOpen);
      this.node.addEventListener('preclose', this.onPreClose);
      this.node.addEventListener('modechange', this.onModeChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.node.removeEventListener('postopen', this.onOpen);
      this.node.removeEventListener('postclose', this.onClose);
      this.node.removeEventListener('preopen', this.onPreOpen);
      this.node.removeEventListener('preclose', this.onPreClose);
      this.node.removeEventListener('modechange', this.onModeChange);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.isOpen) {
        this.node.open();
      } else {
        this.node.close();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      ['isCollapsed', 'isSwipeable'].forEach(function (p) {
        return _this2.props.hasOwnProperty(p) && console.error('The property \'' + p + '\' is deprecated, please use \'' + p.toLowerCase().slice(2) + '\', see https://onsen.io/v2/docs/react/SplitterSide.html.');
      });

      var _props = this.props,
          isOpen = _props.isOpen,
          props = objectWithoutProperties(_props, ['isOpen']);

      var attrs = Util.getAttrs(this, props);

      return React.createElement(
        'ons-splitter-side',
        attrs,
        this.props.children
      );
    }
  }]);
  return SplitterSide;
}(BasicComponent);

SplitterSide.propTypes = {
  /**
   * @name collapse
   * @type string
   * @description
   *  [en] Specify the collapse behavior. Valid values are `"portrait"`, `"landscape"` or a media query.
   *     The strings `"portrait"` and `"landscape"` means the view will collapse when device is in landscape or portrait orientation.
   *     If the value is not defined, the view always be in `"collapse"` mode.
  [/en]
   *  [ja][/ja]
   */
  collapse: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * @name swipeable
   * @type bool
   * @description
   *  [en]Ennable swipe interaction on collapse mode.[/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.bool,

  /**
   * @name isOpen
   * @type bool
   * @description
   *  [en]Specifies whether the menu is open.[/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool,

  /**
   * @name onOpen
   * @type function
   * @description
   *  [en]Called after the menu is opened.[/en]
   *  [ja][/ja]
   */
  onOpen: PropTypes.func,

  /**
   * @name onClose
   * @type function
   * @description
   *  [en]Called after the menu is closed.[/en]
   *  [ja][/ja]
   */
  onClose: PropTypes.func,

  /**
   * @name side
   * @type string
   * @description
   *  [en]Specify which side of the screen the SplitterSide element is located. Possible values are `"left"` and `"right"`.[/en]
   *  [ja][/ja]
   */
  side: PropTypes.oneOf(['left', 'right']),

  /**
   * @name swipeTargetWidth
   * @type number
   * @description
   *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
   *  [ja][/ja]
   */
  swipeTargetWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * @name width
   * @type  number
   * @description
   *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
   *  [ja][/ja]
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]Specify the animation. Use one of `overlay`, `push`, `reveal`, or `default`.[/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name openThreshold
   * @type object
   * @required false
   * @description
   *  [en] Specify how much the menu needs to be swiped before opening. A value between `0` and `1`.  [/en]
   *  [ja][/ja]
   */
  openThreshold: PropTypes.number,

  /**
   * @name mode
   * @type string
   * @required false
   * @description
   *  [en] Current mode. Possible values are `"collapse"` or `"split"`. This attribute is read only.  [/en]
   *  [ja][/ja]
   */
  mode: PropTypes.oneOf(['collapse', 'split']),

  /**
   * @name onPreOpen
   * @type string
   * @description
   *  [en] Called before the menu opens.  [/en]
   *  [ja][/ja]
   */
  onPreOpen: PropTypes.func,

  /**
   * @name onPreClose
   * @type string
   * @description
   *  [en] Called before the menu closes.  [/en]
   *  [ja][/ja]
   */
  onPreClose: PropTypes.func,

  /**
   * @name onModeChange
   * @type string
   * @description
   *  [en] Called after the component's mode changes. [/en]
   *  [ja][/ja]
   */
  onModeChange: PropTypes.func
};

/**
 * @original ons-switch
 * @category form
 * @tutorial react/Reference/switch
 * @description
 * [en]   Switch component. The switch can be toggled both by dragging and tapping.
 *     Will automatically displays a Material Design switch on Android devices.
 [/en]
 * [ja][/ja]
 * @example
 * <Switch checked={this.state.checked} onChange={this.onChange} />
 */

var Switch = function (_BaseInput) {
  inherits(Switch, _BaseInput);

  function Switch() {
    classCallCheck(this, Switch);
    return possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
  }

  createClass(Switch, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-switch';
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change'];
    }
  }]);
  return Switch;
}(BaseInput);

Switch.propTypes = {
  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the value of the switch changes (checked/unchecked) [/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name checked
   * @type bool
   * @description
   *  [en] Whether the switch is checked.[/en]
   *  [ja][/ja]
   */
  checked: PropTypes.bool,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] If set, the switch is disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en] Specify the `id` attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string
};

/**
 * @original ons-tab
 * @category tabbar
 * @tutorial react/Reference/tabbar
 * @description
 * [en] Represents a tab inside tab bar.
 [/en]
 * [ja][/ja]
 * @example
 * <Tap>
 *   Home
 * </Tap>
 */

var Tab = function (_SimpleWrapper) {
  inherits(Tab, _SimpleWrapper);

  function Tab() {
    classCallCheck(this, Tab);
    return possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  createClass(Tab, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-tab';
    }
  }]);
  return Tab;
}(SimpleWrapper);

/**
 * @original ons-tabbar
 * @category tabbar
 * @tutorial react/Reference/tabbar
 * @description
 * [en] Component to display a tabbar on either the top or the bottom of a page.
 * To define the tabs and the content the property renderTabs need to be implemented, that returns an array of tabs and their content. See the example for specifics. [/en]* [ja][/ja]
 * @example

  <Page>
    <Tabbar
      onPreChange={({index}) => this.setState(index)}
      onPostChange={() => console.log('postChange')}
      onReactive={() => console.log('postChange')}
      position='bottom'
      index={this.state.index}
      renderTabs={(activeIndex, tabbar) => [
        {
          content: <TabPage title="Home" active={activeIndex === 0} tabbar={tabbar} />,
          tab: <Tab label="Home" icon="md-home" />
        },
        {
          content: <TabPage title="Settings" active={activeIndex === 1} tabbar={tabbar} />,
          tab: <Tab label="Settings" icon="md-settings" />
        }]
      }
    />
  </Page>
 */

var Tabbar = function (_BasicComponent) {
  inherits(Tabbar, _BasicComponent);

  function Tabbar() {
    var _ref;

    classCallCheck(this, Tabbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Tabbar.__proto__ || Object.getPrototypeOf(Tabbar)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onPreChange = callback.bind(_this, 'onPreChange');
    _this.onPostChange = callback.bind(_this, 'onPostChange');
    _this.onReactive = callback.bind(_this, 'onReactive');
    return _this;
  }

  createClass(Tabbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Tabbar.prototype.__proto__ || Object.getPrototypeOf(Tabbar.prototype), 'componentDidMount', this).call(this);
      var node = this._tabbar;
      node.addEventListener('prechange', this.onPreChange);
      node.addEventListener('postchange', this.onPostChange);
      node.addEventListener('reactive', this.onReactive);
      node.onSwipe = this.props.onSwipe || null;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = this._tabbar;
      node.removeEventListener('prechange', this.onPreChange);
      node.removeEventListener('postchange', this.onPostChange);
      node.removeEventListener('reactive', this.onReactive);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var node = this._tabbar;
      if (nextProps.index !== this.props.index && nextProps.index !== node.getActiveTabIndex()) {
        node.setActiveTab(nextProps.index, { reject: false });
      }
      if (this.props.onSwipe !== nextProps.onSwipe) {
        node.onSwipe = nextProps.onSwipe;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attrs = Util.getAttrs(this, this.props, { index: 'activeIndex' });
      var tabs = this.props.renderTabs(this.props.index, this);

      if (!this.tabPages) {
        this.tabPages = tabs.map(function (tab) {
          return tab.content;
        });
      } else {
        this.tabPages[this.props.index] = tabs[this.props.index].content;
      }

      return React.createElement(
        'ons-tabbar',
        _extends({}, attrs, { ref: function ref(tabbar) {
            _this2._tabbar = tabbar;
          } }),
        React.createElement(
          'div',
          { className: 'tabbar__content' },
          React.createElement(
            'div',
            null,
            this.tabPages
          ),
          React.createElement('div', null)
        ),
        React.createElement(
          'div',
          { className: 'tabbar' },
          tabs.map(function (tab) {
            return tab.tab;
          }),
          React.createElement('div', { className: 'tabbar__border' })
        )
      );
    }
  }]);
  return Tabbar;
}(BasicComponent);

Tabbar.propTypes = {
  /**
   * @name index
   * @type number
   * @required
   * @description
   *  [en] The index of the tab to highlight.[/en]
   *  [ja][/ja]
   */
  index: PropTypes.number.isRequired,

  /**
   * @name renderTabs
   * @type function
   * @description
   *  [en] Function that returns an array of objects with the keys `content` and `tab`.[/en]
   *  [ja][/ja]
   */
  renderTabs: PropTypes.func.isRequired,

  /**
   * @name position
   * @type string
   * @description
   *  [en] Tabbar's position. Available values are `"bottom"` and `"top"`. Use `"auto"` to choose position depending on platform (iOS bottom, Android top). [/en]
   *  [ja][/ja]
   */
  position: PropTypes.string,

  /**
   * @name swipeable
   * @type bool
   * @description
   *  [en]Ennable swipe interaction.[/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.bool,

  /**
   * @name ignoreEdgeWidth
   * @type number
   * @description
   *  [en]Distance in pixels from both edges. Swiping on these areas will prioritize parent components such as `Splitter` or `Navigator`.[/en]
   *  [ja][/ja]
   */
  ignoreEdgeWidth: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @description
   *  [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
   *  [ja][/ja]
   */
  animation: PropTypes.oneOf(['none', 'slide']),

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name tabBorder
   * @type bool
   * @description
   *  [en]If true, the tabs show a dynamic bottom border. Only works for iOS since the border is always visible in Material Design.[/en]
   *  [ja][/ja]
   */
  tabBorder: PropTypes.bool,

  /**
   * @name onPreChange
   * @type function
   * @description
   *  [en]Called just before the tab is changed.[/en]
   *  [ja][/ja]
   */
  onPreChange: PropTypes.func,

  /**
   * @name onPostChange
   * @type function
   * @description
   *  [en]Called just after the tab is changed.[/en]
   *  [ja][/ja]
   */
  onPostChange: PropTypes.func,

  /**
   * @name onReactive
   * @type function
   * @description
   *  [en]Called if the already open tab is tapped again.[/en]
   *  [ja][/ja]
   */
  onReactive: PropTypes.func,

  /**
   * @name onSwipe
   * @type function
   * @description
   *  [en]Hook called whenever the user slides the tabbar. It gets a decimal index and an animationOptions object as arguments.[/en]
   *  [ja][/ja]
   */
  onSwipe: PropTypes.func
};

Tabbar.defaultProps = {
  index: 0
};

/**
 * @original ons-toast
 * @category dialog
 * @tutorial react/Reference/dialog
 * @description
 * [en]
 *  The Toast or Snackbar component is useful for displaying dismissable information or simple actions at (normally) the bottom of the page.
 *
 *  This component does not block user input, allowing the app to continue its flow. Furthermore, it can be automatically hidden after a timeout.
 * [/en]
 * [ja][/ja]
 */

var Toast = function (_BaseDialog) {
  inherits(Toast, _BaseDialog);

  function Toast() {
    classCallCheck(this, Toast);
    return possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
  }

  createClass(Toast, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-toast';
    }
  }]);
  return Toast;
}(BaseDialog);

Toast.propTypes = {
  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the toast open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the toast.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the toast is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the toast is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the toast is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the toast is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-toolbar
 * @category page
 * @tutorial react/Reference/page
 * @description
 * [en]Toolbar component that can be used with navigation. Left, center and right container can be specified by class names. This component will automatically displays as a Material Design toolbar when running on Android devices.[/en]
 * [ja][/ja]
 * @example
 *
<Page renderToolbar={() =>
  <Toolbar>
    <div className="left">
      <BackButton>
          Back
      </BackButton>
    </div>
    <div className="center">
      Title
    </div>
    <div className="right">
      <ToolbarButton>
        <Icon icon="md-menu" />
      </ToolbarButton>
    </div>
  </Toolbar> }
/>
 */

var Toolbar = function (_SimpleWrapper) {
  inherits(Toolbar, _SimpleWrapper);

  function Toolbar() {
    classCallCheck(this, Toolbar);
    return possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  createClass(Toolbar, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-toolbar';
    }
  }]);
  return Toolbar;
}(SimpleWrapper);

Toolbar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-toolbar-button
 * @category page
 * @tutorial react/Reference/page
 * @description
 *   [en]
 *   Button component for the Toolbar. Using this component gives a nice default style.
 *
 *
 *   [/en]
 * [ja][/ja]
 * @example
 * <Page
     renderToolbar = { () =>
      <Toolbar>
        <div className='left'><BackButton>Back</BackButton></div>
        <div className='center'>Input</div>
        <div className='right'>
          <ToolbarButton onClick={this.add} >Add</ToolbarButton>
        </div>
      </Toolbar>
     }>
      Page Content
    </Page>
 */

var ToolbarButton = function (_SimpleWrapper) {
  inherits(ToolbarButton, _SimpleWrapper);

  function ToolbarButton() {
    classCallCheck(this, ToolbarButton);
    return possibleConstructorReturn(this, (ToolbarButton.__proto__ || Object.getPrototypeOf(ToolbarButton)).apply(this, arguments));
  }

  createClass(ToolbarButton, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-toolbar-button';
    }
  }]);
  return ToolbarButton;
}(SimpleWrapper);

ToolbarButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Indicates whether the button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool
};

/*
 * routeStack : [userRoute, userRoute2, ...]
 * processStack: [
 * { type: push | pop | reset, route: userRoute },
 * { type: push | pop | reset, route: userRoute2 },
 * ...
 * ]
 */

var RouterUtil = {
  init: function init(routes) {
    return {
      routeStack: [].concat(toConsumableArray(routes)),
      processStack: []
    };
  },

  replace: function replace(_ref) {
    var routeConfig = _ref.routeConfig,
        route = _ref.route,
        options = _ref.options,
        key = _ref.key;

    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    if (key == null || processStack.filter(function (el) {
      return el.key === key;
    }).length === 0) {
      var process = {
        type: 'replace',
        route: route,
        options: options,
        key: key
      };
      processStack = [].concat(toConsumableArray(processStack), [process]);
    }

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  reset: function reset(_ref2) {
    var routeConfig = _ref2.routeConfig,
        route = _ref2.route,
        options = _ref2.options,
        key = _ref2.key;

    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    if (key == null || processStack.filter(function (el) {
      return el.key === key;
    }).length === 0) {
      var process = {
        type: 'reset',
        route: route,
        options: options,
        key: key
      };

      processStack = [].concat(toConsumableArray(processStack), [process]);
    }

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  push: function push(_ref3) {
    var routeConfig = _ref3.routeConfig,
        route = _ref3.route,
        options = _ref3.options,
        key = _ref3.key;

    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    if (key == null || config.processStack.filter(function (el) {
      return el.key === key;
    }).length === 0) {
      var process = {
        type: 'push',
        route: route,
        options: options,
        key: key
      };

      processStack = [].concat(toConsumableArray(processStack), [process]);
    }

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  pop: function pop(_ref4) {
    var routeConfig = _ref4.routeConfig,
        options = _ref4.options,
        key = _ref4.key;

    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    /**
     * Safegaurd to ensure that not
     * too many pages are popped from
     * the stack.
     */
    var pops = processStack.filter(function (x) {
      return x.type === 'pop';
    }).length;

    if (pops + 1 >= routeStack.length) {
      console.warn('Page stack is already empty');
      return config;
    }

    var process = {
      type: 'pop',
      key: key,
      options: options
    };

    processStack = [].concat(toConsumableArray(processStack), [process]);

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  postPush: function postPush(routeConfig) {
    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    var next = processStack.shift();
    var type = next.type;
    var route = next.route;

    if (type === 'push') {
      if (route !== null) {
        routeStack = [].concat(toConsumableArray(routeStack), [route]);
      }
    } else if (type === 'reset') {
      if (!Array.isArray(route)) route = [route];
      routeStack = route;
    } else if (type === 'replace') {
      routeStack.pop();
      routeStack.push(route);
    }

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  postPop: function postPop(routeConfig) {
    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));
    routeStack = routeStack.slice(0, routeStack.length - 1);
    processStack = processStack.slice(1);

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  }
};

exports.ActionSheet = ActionSheet;
exports.ActionSheetButton = ActionSheetButton;
exports.AlertDialog = AlertDialog;
exports.AlertDialogButton = AlertDialogButton;
exports.BackButton = BackButton;
exports.BottomToolbar = BottomToolbar;
exports.Button = Button;
exports.Card = Card;
exports.Carousel = Carousel;
exports.CarouselItem = CarouselItem;
exports.Checkbox = Checkbox;
exports.Col = Col;
exports.Dialog = Dialog;
exports.Fab = Fab;
exports.Icon = Icon;
exports.Input = Input;
exports.LazyList = LazyList;
exports.List = List;
exports.ListHeader = ListHeader;
exports.ListItem = ListItem;
exports.ListTitle = ListTitle;
exports.Navigator = Navigator;
exports.Modal = Modal;
exports.Page = Page;
exports.Popover = Popover;
exports.ProgressBar = ProgressBar;
exports.ProgressCircular = ProgressCircular;
exports.PullHook = PullHook;
exports.Radio = Radio;
exports.Range = Range;
exports.Ripple = Ripple;
exports.RouterNavigator = RouterNavigator;
exports.RouterUtil = RouterUtil;
exports.Row = Row;
exports.SearchInput = SearchInput;
exports.Segment = Segment;
exports.Select = Select;
exports.SpeedDial = SpeedDial;
exports.SpeedDialItem = SpeedDialItem;
exports.Splitter = Splitter;
exports.SplitterContent = SplitterContent;
exports.SplitterSide = SplitterSide;
exports.Switch = Switch;
exports.Tab = Tab;
exports.Tabbar = Tabbar;
exports.Toast = Toast;
exports.Toolbar = Toolbar;
exports.ToolbarButton = ToolbarButton;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtb25zZW51aS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudHMvVXRpbC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0Jhc2VEaWFsb2cuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQWN0aW9uU2hlZXQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQmFzaWNDb21wb25lbnQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2ltcGxlV3JhcHBlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BY3Rpb25TaGVldEJ1dHRvbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BbGVydERpYWxvZy5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BbGVydERpYWxvZ0J1dHRvbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9CYWNrQnV0dG9uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0JvdHRvbVRvb2xiYXIuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Jhc2VJbnB1dC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9DaGVja2JveC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Db2wuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRGlhbG9nLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ZhYi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0lucHV0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xhenlMaXN0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xpc3QuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9MaXN0VGl0bGUuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdG9yLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL01vZGFsLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1BhZ2UuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUG9wb3Zlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0NpcmN1bGFyLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1B1bGxIb29rLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JhZGlvLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JhbmdlLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JpcHBsZS5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXJOYXZpZ2F0b3IuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUm93LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NlYXJjaElucHV0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2VsZWN0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwZWVkRGlhbC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9TcGVlZERpYWxJdGVtLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwbGl0dGVyLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwbGl0dGVyQ29udGVudC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9TcGxpdHRlclNpZGUuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU3dpdGNoLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhYi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWJiYXIuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVG9hc3QuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVG9vbGJhci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Ub29sYmFyQnV0dG9uLmpzeCIsIi4uL3NyYy9Sb3V0ZXJVdGlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBpeGVsU2l6ZSA9IGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdudW1iZXInID8gYCR7aXRlbX1weGAgOiBpdGVtO1xuXG5jb25zdCBub3JtYWxpemUgPSBrZXkgPT4ge1xuICBpZiAoL15pc1tBLVpdLy50ZXN0KGtleSkpIHtcbiAgICBrZXkgPSBrZXkuc2xpY2UoMik7XG4gIH1cbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oW2EtekEtWl0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuY29uc3QgY29udmVydCA9IChkaWN0LCBuYW1lLCBuZXdOYW1lID0gbmFtZSkgPT4ge1xuICBpZiAoZGljdC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHN3aXRjaCAodHlwZW9mIGRpY3RbbmFtZV0pIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBpZiAoZGljdFtuYW1lXSkge1xuICAgICAgICAgIGRpY3RbbmV3TmFtZV0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZGljdFtuZXdOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBkaWN0W25ld05hbWVdID0gZGljdFtuYW1lXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaWN0W25hbWVdID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobmV3TmFtZSAhPT0gbmFtZSkge1xuICAgICAgZGljdFtuYW1lXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpY3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGV2ZW50VG9IYW5kbGVyKHN0cmluZykge1xuICAgIHJldHVybiAnb24nICsgc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9LFxuXG4gIGdldEF0dHJzKGVsLCBwcm9wcyA9IGVsLnByb3BzLCBkaWN0ID0ge30pIHtcbiAgICBjb25zdCBhdHRycyA9IHsgLi4ucHJvcHMgfTtcbiAgICBjb25zdCB2YWxpZFByb3BzID0gZWwuY29uc3RydWN0b3IucHJvcFR5cGVzIHx8IHt9O1xuXG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KCdhbmltYXRpb25PcHRpb25zJykgJiYgdHlwZW9mIGF0dHJzLmFuaW1hdGlvbk9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XG4gICAgICBhdHRycy5hbmltYXRpb25PcHRpb25zID0gSlNPTi5zdHJpbmdpZnkoYXR0cnMuYW5pbWF0aW9uT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAodmFsaWRQcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIFsnb25DbGljayddLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBpZiAoWydpc09wZW4nXS5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICBhdHRyc1trZXldID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKC8oaGVpZ2h0fHdpZHRoKS9pLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICBhdHRyc1trZXldID0gcGl4ZWxTaXplKGF0dHJzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udmVydChhdHRycywga2V5LCBkaWN0W2tleV0gfHwgbm9ybWFsaXplKGtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuY2xhc3MgQmFzZURpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG5hbWUsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wc1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tuYW1lXShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uQ2FuY2VsID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25DYW5jZWwnKTtcbiAgICB0aGlzLm9uUHJlU2hvdyA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUHJlU2hvdycpO1xuICAgIHRoaXMub25Qb3N0U2hvdyA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUG9zdFNob3cnKTtcbiAgICB0aGlzLm9uUHJlSGlkZSA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUHJlSGlkZScpO1xuICAgIHRoaXMub25Qb3N0SGlkZSA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUG9zdEhpZGUnKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQuc2hvdygpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NlcygpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2xhc3MpIHtcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZS5yZXBsYWNlKHRoaXMubGFzdENsYXNzLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdENsYXNzID0gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICBub2RlLmNsYXNzTmFtZSArPSB0aGlzLmxhc3RDbGFzcztcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubm9kZS5maXJzdENoaWxkLmhpZGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblxuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdkaWFsb2ctY2FuY2VsJywgdGhpcy5vbkNhbmNlbCk7XG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZXNob3cnLCB0aGlzLm9uUHJlU2hvdyk7XG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bvc3RzaG93JywgdGhpcy5vblBvc3RTaG93KTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlaGlkZScsIHRoaXMub25QcmVIaWRlKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdGhpZGUnLCB0aGlzLm9uUG9zdEhpZGUpO1xuXG4gICAgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcywgZmFsc2UsIHRoaXMucHJvcHMub25EZXZpY2VCYWNrQnV0dG9uKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICB0aGlzLnJlbmRlclBvcnRhbChuZXdQcm9wcywgdGhpcy5wcm9wcy5pc09wZW4pO1xuICAgIGlmIChuZXdQcm9wcy5vbkRldmljZUJhY2tCdXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQub25EZXZpY2VCYWNrQnV0dG9uID0gbmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkaWFsb2ctY2FuY2VsJywgdGhpcy5vbkNhbmNlbCk7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ByZXNob3cnLCB0aGlzLm9uUHJlU2hvdyk7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RzaG93JywgdGhpcy5vblBvc3RTaG93KTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlaGlkZScsIHRoaXMub25QcmVIaWRlKTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdGhpZGUnLCB0aGlzLm9uUG9zdEhpZGUpO1xuXG4gICAgY29uc3QgdW5tb3VudCA9ICgpID0+IHtcbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubm9kZS5maXJzdENoaWxkLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMubm9kZS5maXJzdENoaWxkLmhpZGUoKS50aGVuKHVubW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZShpc1Nob3duLCBvbkRldmljZUJhY2tCdXR0b24pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIGlmICghaXNTaG93bikge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG5cbiAgICBpZiAob25EZXZpY2VCYWNrQnV0dG9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMubm9kZS5maXJzdENoaWxkLm9uRGV2aWNlQmFja0J1dHRvbiA9IG9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gIH1cblxuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdfZ2V0RG9tTm9kZU5hbWUgaXMgbm90IGltcGxlbWVudGVkJyk7XG4gIH1cblxuICByZW5kZXJQb3J0YWwocHJvcHMsIGlzU2hvd24sIG9uRGV2aWNlQmFja0J1dHRvbiA9IG51bGwpIHtcbiAgICBjb25zdCB7IGlzT3BlbiwgLi4ub3RoZXJzIH0gPSBwcm9wcztcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcywgb3RoZXJzKTtcbiAgICBjb25zdCBEb21Ob2RlTmFtZSA9IHRoaXMuX2dldERvbU5vZGVOYW1lKCk7XG5cbiAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihcbiAgICAgIHRoaXMsXG4gICAgICA8RG9tTm9kZU5hbWUgeyAuLi5hdHRycyB9IGNoaWxkcmVuPXsgcHJvcHMuY2hpbGRyZW4gfSAvPixcbiAgICAgIHRoaXMubm9kZSxcbiAgICAgIHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIGlzU2hvd24sIG9uRGV2aWNlQmFja0J1dHRvbilcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbkJhc2VEaWFsb2cucHJvcFR5cGVzID0ge1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNDYW5jZWxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWFza0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvblByZVNob3c6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvc3RTaG93OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25QcmVIaWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkJhc2VEaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICBpc0NhbmNlbGFibGU6IHRydWUsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlRGlhbG9nO1xuIiwiaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSAnLi9CYXNlRGlhbG9nLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtYWN0aW9uLXNoZWV0XG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2FjdGlvbi1zaGVldFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgQWN0aW9uL2JvdHRvbSBzaGVldCB0aGF0IGlzIGRpc3BsYXllZCBvbiB0b3Agb2YgY3VycmVudCBzY3JlZW4uXG4gKiAgVGhlIGFjdGlvbiBzaGVldCBpcyB1c2VmdWwgZm9yIGRpc3BsYXlpbmcgYSBsaXN0IG9mIG9wdGlvbnMgYW5kIGFza2luZyB0aGUgdXNlciB0byBtYWtlIGEgZGVjaXNpb24uIEFuIEFjdGlvblNoZWV0QnV0dG9uIGNvbXBvbmVudCBpcyBwcm92aWRlZCBmb3IgdGhpcyBwdXJwb3NlLCBhbHRob3VnaCBpdCBjYW4gY29udGFpbiBhbnkgdHlwZSBvZiBjb250ZW50LlxuICogIEl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNwbGF5ZWQgYXMgTWF0ZXJpYWwgRGVzaWduIChib3R0b20gc2hlZXQpIHdoZW4gcnVubmluZyBvbiBhbiBBbmRyb2lkIGRldmljZS5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqL1xuY2xhc3MgQWN0aW9uU2hlZXQgZXh0ZW5kcyBCYXNlRGlhbG9nIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWFjdGlvbi1zaGVldCc7XG4gIH1cbn1cblxuQWN0aW9uU2hlZXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgb25DYW5jZWxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIG9ubHkgaWYgaXNDYW5jZWxhYmxlIGlzIHRydWUuIEl0IHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRhcHBpbmcgdGhlIGJhY2tncm91bmQgb3IgYnkgcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIG9wZW4gYW5kIHNob3duLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0NhbmNlbGFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGNhbmNlbGFibGUgb3Igbm90LlxuICAgKiAgQSBjYW5jZWxhYmxlIGRpYWxvZyB3aWxsIGNhbGwgb25DYW5jZWwgIHdoZW4gdGFwcGluZyB0aGUgYmFja2dyb3VuZCBvciBvciAgcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlc1xuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNDYW5jZWxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaXNEaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBUaGUgYW5pbWF0aW9uIHVzZWQgd2hlbiBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIGRpYWxvZy4gQ2FuIGJlIGVpdGhlciBgXCJub25lXCJgIG9yIGBcImRlZmF1bHRcImAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGRpYWxvZy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbWFza0NvbG9yXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29sb3Igb2YgdGhlIGJhY2tncm91bmQgbWFzay4gRGVmYXVsdCBpcyBcInJnYmEoMCwgMCwgMCwgMC4yKVwiWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbWFza0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25PcHRpb25zXG4gICAqIEB0eXBlIG9iamVjdFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBhY3Rpb24gc2hlZXQgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0U2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBhZnRlciB0aGUgYWN0aW9uIHNoZWV0IGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSB0aGUgYWN0aW9uIHNoZWV0IGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZUhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciB0aGUgYWN0aW9uIHNoZWV0IGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25TaGVldDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IG9ucyBmcm9tICdvbnNlbnVpJztcblxuY2xhc3MgQmFzaWNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzID0gdGhpcy51cGRhdGVDbGFzc2VzLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVDbGFzc2VzKCkge1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2xhc3MpIHtcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZS5yZXBsYWNlKHRoaXMubGFzdENsYXNzLCAnICcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RDbGFzcyA9ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lLnRyaW0oKTtcblxuICAgICAgbm9kZS5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZS50cmltKCkgKyB0aGlzLmxhc3RDbGFzcztcbiAgICB9XG5cbiAgICBpZiAoIW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVhY3Qtb25zZW51aSByZXF1aXJlcyBgb25zZW51aWAsIG1ha2Ugc3VyZSB5b3UgYXJlIGxvYWRpbmcgaXQgd2l0aCBgaW1wb3J0IG9uc2VudWlgIG9yIGByZXF1aXJlKCdvbnNlbnVpJylgIGJlZm9yZSB1c2luZyB0aGUgY29tcG9uZW50c1wiKTtcbiAgICB9XG5cbiAgICBvbnMuX2F1dG9TdHlsZS5wcmVwYXJlKG5vZGUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbmNsYXNzIFNpbXBsZVdyYXBwZXIgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLl9nZXREb21Ob2RlTmFtZSgpLCBVdGlsLmdldEF0dHJzKHRoaXMpLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVXcmFwcGVyO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtYWN0aW9uLXNoZWV0LWJ1dHRvblxuICogQGNhdGVnb3J5IGRpYWxvZ1xuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9hY3Rpb24tc2hlZXRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXUNvbXBvbmVudCB0aGF0IHJlcHJlc2VudCBlYWNoIGJ1dHRvbiBvZiB0aGUgYWN0aW9uIHNoZWV0LlsvZW5dXG4gKiBbamFdWy9qYV1cbiAqL1xuY2xhc3MgQWN0aW9uU2hlZXRCdXR0b24gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWFjdGlvbi1zaGVldC1idXR0b24nO1xuICB9XG59XG5cbkFjdGlvblNoZWV0QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFjdGlvbiBzaGVldCBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGljb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNyZWF0ZXMgYW4gYEljb25gIGNvbXBvbmVudCB3aXRoIHRoaXMgc3RyaW5nLiBPbmx5IHZpc2libGUgb24gQW5kcm9pZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNsaWNrXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvblNoZWV0QnV0dG9uO1xuIiwiaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSAnLi9CYXNlRGlhbG9nLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtYWxlcnQtZGlhbG9nXG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2RpYWxvZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgIEFsZXJ0IGRpYWxvZyB0aGF0IGlzIGRpc3BsYXllZCBvbiB0b3Agb2YgdGhlIGN1cnJlbnQgc2NyZWVuLiBVc2VmdWwgZm9yIGRpc3BsYXlpbmcgcXVlc3Rpb25zLCB3YXJuaW5ncyBvciBlcnJvciBtZXNzYWdlcyB0byB0aGUgdXNlci4gVGhlIHRpdGxlLCBjb250ZW50IGFuZCBidXR0b25zIGNhbiBiZSBlYXNpbHkgY3VzdG9taXplZCBhbmQgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IHN3aXRjaCBzdHlsZSBiYXNlZCBvbiB0aGUgcGxhdGZvcm0uXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICAgPEFsZXJ0RGlhbG9nIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59IG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpfSBjYW5jZWxhYmxlPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPldhcm5pbmchPC9kaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtZGlhbG9nLWNvbnRlbnRcIj5cbiAgICAgICBBbiBlcnJvciBoYXMgb2NjdXJyZWQhXG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWRpYWxvZy1mb290ZXJcIj5cbiAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImFsZXJ0LWRpYWxvZy1idXR0b25cIj5cbiAgICAgICAgIENhbmNlbFxuICAgICAgIDwvQnV0dG9uPlxuICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYWxlcnQtZGlhbG9nLWJ1dHRvblwiPlxuICAgICAgICAgT2tcbiAgICAgICA8L0J1dHRvbj5cbiAgICAgPC9kaXY+XG4gICA8L0FsZXJ0RGlhbG9nPlxuICovXG5jbGFzcyBBbGVydERpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtYWxlcnQtZGlhbG9nJztcbiAgfVxufVxuXG5BbGVydERpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBvbkNhbmNlbFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgb25seSBpZiBpc0NhbmNlbGFibGUgaXMgdHJ1ZS4gSXQgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGFwcGluZyB0aGUgYmFja2dyb3VuZCBvciBieSBwcmVzc2luZyB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc09wZW5cbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgdHJ1ZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgb3BlbiBhbmQgc2hvd24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQ2FuY2VsYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY2FuY2VsYWJsZSBvciBub3QuXG4gICAqICBBIGNhbmNlbGFibGUgZGlhbG9nIHdpbGwgY2FsbCBvbkNhbmNlbCAgd2hlbiB0YXBwaW5nIHRoZSBiYWNrZ3JvdW5kIG9yIG9yICBwcmVzc2luZyB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc0NhbmNlbGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Rpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBkaXNhYmxlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFRoZSBhbmltYXRpb24gdXNlZCB3aGVuIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgZGlhbG9nLiBDYW4gYmUgZWl0aGVyIGBcIm5vbmVcImAgb3IgYFwiZGVmYXVsdFwiYC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgZGlhbG9nLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtYXNrQ29sb3JcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db2xvciBvZiB0aGUgYmFja2dyb3VuZCBtYXNrLiBEZWZhdWx0IGlzIFwicmdiYSgwLCAwLCAwLCAwLjIpXCJbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtYXNrQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBiZWZvcmUgdGhlIGFsZXJ0IGRpYWxvZyBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZVNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBhbGVydCBkaWFsb2cgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0U2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlSGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBhbGVydCBkaWFsb2cgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdEhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSBhbGVydCBkaWFsb2cgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdEhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0RGlhbG9nO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtYWxlcnQtZGlhbG9nLWJ1dHRvblxuICogQGNhdGVnb3J5IGRpYWxvZ1xuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9kaWFsb2dcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXUNvbXBvbmVudCB0aGF0IHJlcHJlc2VudCBlYWNoIGJ1dHRvbiBvZiB0aGUgYWxlcnQgZGlhbG9nLlsvZW5dXG4gKiBbamFdWy9qYV1cbiAqL1xuY2xhc3MgQWxlcnREaWFsb2dCdXR0b24gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWFsZXJ0LWRpYWxvZy1idXR0b24nO1xuICB9XG59XG5cbkFsZXJ0RGlhbG9nQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFsZXJ0IGRpYWxvZyBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNsaWNrXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0RGlhbG9nQnV0dG9uO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1iYWNrLWJ1dHRvblxuICogQGNhdGVnb3J5IG5hdmlnYXRpb25cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvbmF2aWdhdG9yXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgQmFjayBidXR0b24gY29tcG9uZW50IGZvciBUb29sYmFyLiBJdCBlbmFibGVzIHRvIGF1dG9tYXRpY2FsbHkgdG8gcG9wIHRoZSB0b3AgcGFnZSBvZiB0aGUgbmF2aWdhdG9yLiBXaGVuIG9ubHkgcHJlc2VudGVkIHdpdGggb25lIHBhZ2UsIHRoZSBidXR0b24gaXMgaGlkZGVuIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogICBUaGUgZGVmYXVsdCBiZWhhdmlvciBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgYG9uQ2xpY2tgIHByb3AuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFRvb2xiYXIgbW9kaWZpZXI9e3RoaXMucHJvcHMubW9kaWZpZXJ9ID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPjxCYWNrQnV0dG9uIG1vZGlmaWVyPXt0aGlzLnByb3BzLm1vZGlmaWVyfT5CYWNrPC9CYWNrQnV0dG9uPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgIDwvVG9vbGJhcj5cbiAqL1xuY2xhc3MgQmFja0J1dHRvbiBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtYmFjay1idXR0b24nO1xuICB9XG5cbiAgX3VwZGF0ZU9uQ2xpY2socHJvcHMpIHtcbiAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAocHJvcHMub25DbGljaykge1xuICAgICAgbm9kZS5vbkNsaWNrID0gKCkgPT4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIG5vZGUub25DbGljaztcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl91cGRhdGVPbkNsaWNrKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIHRoaXMuX3VwZGF0ZU9uQ2xpY2socHJvcHMpO1xuICB9XG59XG5cbkJhY2tCdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgYmFjayBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBvbmVzIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gSXQgb3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9mIHRoZSBiYWNrIGJ1dHRvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFja0J1dHRvbjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWJvdHRvbS10b29sYmFyXG4gKiBAY2F0ZWdvcnkgcGFnZVxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dVG9vbGJhciBjb21wb25lbnQgdGhhdCBpcyBwb3NpdGlvbmVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UuWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxCb3R0b21Ub29sYmFyIG1vZGlmaWVyPVwibWF0ZXJpYWxcIj4gQ29udGVudCA8L0JvdHRvbVRvb2xiYXI+XG4gKi9cbmNsYXNzIEJvdHRvbVRvb2xiYXIgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWJvdHRvbS10b29sYmFyJztcbiAgfVxufVxuXG5Cb3R0b21Ub29sYmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tVG9vbGJhcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWJ1dHRvblxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvYnV0dG9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gQnV0dG9uIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gcGxhY2UgYSBidXR0b24gaW4gYSB0b29sYmFyLCB1c2UgYFRvb2xiYXJCdXR0b25gIG9yIGBCYWNrQnV0dG9uYCBpbnN0ZWFkLiBXaWxsIGF1dG9tYXRpY2FsbHkgZGlzcGxheSBhcyBhIE1hdGVyaWFsIERlc2lnbiBidXR0b24gd2l0aCBhIHJpcHBsZSBlZmZlY3Qgb24gQW5kcm9pZC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPEJ1dHRvbiBtb2RpZmllcj1cImxhcmdlLS1jdGFcIj5cbiAqICAgVGFwIE1lXG4gKiA8L0J1dHRvbj5cbiAqL1xuY2xhc3MgQnV0dG9uIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1idXR0b24nO1xuICB9XG59XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByaXBwbGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBidXR0b24gaGFzIGEgcmlwcGxlIGVmZmVjdC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb25lcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1jYXJkXG4gKiBAY2F0ZWdvcnkgdmlzdWFsXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3Zpc3VhbFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dQ2FyZCBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGNvbnRlbnQuWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqXG48Q2FyZD5cbiAgPHA+U29tZSBjb250ZW50PC9wPlxuPC9DYXJkPlxuICovXG5jbGFzcyBDYXJkIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1jYXJkJztcbiAgfVxufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuIE9wdGlvbmFsLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1jYXJvdXNlbFxuICogQGNhdGVnb3J5IGNhcm91c2VsXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2Nhcm91c2VsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gQ2Fyb3VzZWwgY29tcG9uZW50LiBBIGNhcm91c2VsIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgc2V2ZXJhbCBpdGVtcyBpbiB0aGUgc2FtZSBzcGFjZS5cbiAqICAgICBUaGUgY29tcG9uZW50IHN1cHBvcnRzIGRpc3BsYXlpbmcgY29udGVudCBib3RoIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS4gVGhlIHVzZXIgY2FuIHNjcm9sbCB0aHJvdWdoIHRoZSBpdGVtcyBieSBkcmFnZ2luZyBhbmQgaXQgY2FuIGFsc28gYmUgY29udHJvbGxlciBwcm9ncmFtbWF0aWNhbGx5LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICBvblBvc3RDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdvblBvc3RDaGFuZ2UnKX1cbiAgICAgICAgICBvbk92ZXJzY3JvbGw9eygpID0+IGNvbnNvbGUubG9nKCdvbk92ZXJzY3JvbGwnKX1cbiAgICAgICAgICBvblJlZnJlc2g9eygpID0+IGNvbnNvbGUubG9nKCdvblJlZnJlc2gnKX1cbiAgICAgICAgICByZWY9eyhjYXJvdXNlbCkgPT4geyB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7IH19XG4gICAgICAgICAgc3dpcGVhYmxlXG4gICAgICAgICAgb3ZlcnNjcm9sbGFibGVcbiAgICAgICAgICBhdXRvU2Nyb2xsXG4gICAgICAgICAgZnVsbHNjcmVlblxuICAgICAgICAgIGF1dG9TY3JvbGxSYXRpbz17MC4yfVxuICAgICAgPlxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdncmF5J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0tbGFiZWwnPkdSQVk8L2Rpdj5cbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzA4NTA3OCd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLWxhYmVsJz5CTFVFPC9kaXY+XG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG5cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2UgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvblBvc3RDaGFuZ2UnKTtcbiAgICB0aGlzLm9uUmVmcmVzaCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUmVmcmVzaCcpO1xuICAgIHRoaXMub25PdmVyc2Nyb2xsID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25PdmVyc2Nyb2xsJyk7XG4gIH1cblxuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtY2Fyb3VzZWwnO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICBjb25zdCBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vbkNoYW5nZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdyZWZyZXNoJywgdGhpcy5vblJlZnJlc2gpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignb3ZlcnNjcm9sbCcsIHRoaXMub25PdmVyc2Nyb2xsKTtcbiAgICBub2RlLm9uU3dpcGUgPSB0aGlzLnByb3BzLm9uU3dpcGUgfHwgbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RjaGFuZ2UnLCB0aGlzLm9uUG9zdENoYW5nZSk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWZyZXNoJywgdGhpcy5vblJlZnJlc2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3ZlcnNjcm9sbCcsIHRoaXMub25PdmVyc2Nyb2xsKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcm9wcykge1xuICAgIGNvbnN0IG5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmluZGV4ICE9PSBub2RlLmdldEFjdGl2ZUluZGV4KCkpIHtcbiAgICAgIG5vZGUuc2V0QWN0aXZlSW5kZXgodGhpcy5wcm9wcy5pbmRleCwgcHJvcHMuYW5pbWF0aW9uT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoICE9PSBwcm9wcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIG5vZGUucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uU3dpcGUgIT09IHByb3BzLm9uU3dpcGUpIHtcbiAgICAgIG5vZGUub25Td2lwZSA9IHRoaXMucHJvcHMub25Td2lwZTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHRoaXMucHJvcHMsIHsgaW5kZXg6ICdpbml0aWFsLWluZGV4JyB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLWNhcm91c2VsIHsuLi5hdHRyc30+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9vbnMtY2Fyb3VzZWw+XG4gICAgKTtcbiAgfVxufVxuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpcmVjdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBkaXJlY3Rpb24gb2YgdGhlIGNhcm91c2VsLiBDYW4gYmUgZWl0aGVyIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi4gRGVmYXVsdCBpcyBcImhvcml6b250YWxcIi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGZ1bGxzY3JlZW5cbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgY2Fyb3VzZWwgd2lsbCBjb3ZlciB0aGUgd2hvbGUgc2NyZWVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGZ1bGxzY3JlZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvdmVyc2Nyb2xsYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsIHRoZSBjYXJvdXNlbCB3aWxsIGJlIHNjcm9sbGFibGUgb3ZlciB0aGUgZWRnZS4gSXQgd2lsbCBib3VuY2UgYmFjayB3aGVuIHJlbGVhc2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG92ZXJzY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgY2VudGVyZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgY2Fyb3VzZWwgdGhlbiB0aGUgc2VsZWN0ZWQgaXRlbSB3aWxsIGJlIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhcm91c2VsIGluc3RlYWQgb2YgdGhlIGJlZ2lubmluZy4gVXNlZnVsIG9ubHkgd2hlbiB0aGUgaXRlbXMgYXJlIHNtYWxsZXIgdGhhbiB0aGUgY2Fyb3VzZWwuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpdGVtV2lkdGhcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXW9ucy1jYXJvdXNlbC1pdGVtJ3Mgd2lkdGguIE9ubHkgd29ya3Mgd2hlbiB0aGUgZGlyZWN0aW9uIGlzIHNldCB0byBcImhvcml6b250YWxcIi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpdGVtV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogQG5hbWUgaXRlbUhlaWdodFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5db25zLWNhcm91c2VsLWl0ZW0ncyBoZWlnaHQuIE9ubHkgd29ya3Mgd2hlbiB0aGUgZGlyZWN0aW9uIGlzIHNldCB0byBcInZlcnRpY2FsXCIuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhdXRvU2Nyb2xsXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdHJ1ZSwgdGhlIGNhcm91c2VsIHdpbGwgYmUgYXV0b21hdGljYWxseSBzY3JvbGxlZCB0byB0aGUgY2xvc2VzdCBpdGVtIGJvcmRlciB3aGVuIHJlbGVhc2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGF1dG9TY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhdXRvU2Nyb2xsUmF0aW9cbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUEgbnVtYmVyIGJldHdlZW4gMC4wIGFuZCAxLjAgdGhhdCBzcGVjaWZpZXMgaG93IG11Y2ggdGhlIHVzZXIgbXVzdCBkcmFnIHRoZSBjYXJvdXNlbCBpbiBvcmRlciBmb3IgaXQgdG8gYXV0byBzY3JvbGwgdG8gdGhlIG5leHQgaXRlbS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhdXRvU2Nyb2xsUmF0aW86IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHN3aXBlYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsIHRoZSBjYXJvdXNlbCBjYW4gYmUgc2Nyb2xsZWQgYnkgZHJhZyBvciBzd2lwZS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzd2lwZWFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsIHRoZSBjYXJvdXNlbCB3aWxsIGJlIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaW5kZXhcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGluZGV4IG9mIHRoZSBvbnMtY2Fyb3VzZWwtaXRlbSB0byBzaG93LiBEZWZhdWx0IGlzIDAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGF1dG9SZWZyZXNoXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dV2hlbiB0aGlzIGF0dHJpYnV0ZSBpcyBzZXQgdGhlIGNhcm91c2VsIHdpbGwgYXV0b21hdGljYWxseSByZWZyZXNoIHdoZW4gdGhlIG51bWJlciBvZiBjaGlsZCBub2RlcyBjaGFuZ2UuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYXV0b1JlZnJlc2g6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RDaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGN1cnJlbnQgY2Fyb3VzZWwgaXRlbSBoYXMgY2hhbmdlZC4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUmVmcmVzaFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgd2hlbiB0aGUgY2Fyb3VzZWwgaGFzIGJlZW4gcmVmcmVzaGVkLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblJlZnJlc2g6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbk92ZXJzY3JvbGxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIGNhcm91c2VsIGhhcyBiZWVuIG92ZXJzY3JvbGxlZC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25PdmVyc2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25Td2lwZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Ib29rIGNhbGxlZCB3aGVuZXZlciB0aGUgdXNlciBzbGlkZXMgdGhlIGNhcm91c2VsLiBJdCBnZXRzIGEgZGVjaW1hbCBpbmRleCBhbmQgYW4gYW5pbWF0aW9uT3B0aW9ucyBvYmplY3QgYXMgYXJndW1lbnRzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uU3dpcGU6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtY2Fyb3VzZWwtaXRlbVxuICogQGNhdGVnb3J5IGNhcm91c2VsXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2Nhcm91c2VsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gQ2Fyb3VzZWwgaXRlbSBjb21wb25lbnQuIFVzZWQgYXMgYSBjaGlsZCBvZiB0aGUgYDxvbnMtY2Fyb3VzZWw+YCBlbGVtZW50LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4qICA8Q2Fyb3VzZWwgc3dpcGVhYmxlIG92ZXJzY3JvbGxhYmxlIGF1dG9TY3JvbGwgZnVsbHNjcmVlbiA+XG4gICAgIDxDYXJvdXNlbEl0ZW0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdncmF5J319PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLWxhYmVsJz5HUkFZPC9kaXY+XG4gICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICA8Q2Fyb3VzZWxJdGVtIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzA4NTA3OCd9fT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbS1sYWJlbCc+QkxVRTwvZGl2PlxuICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgIDwvQ2Fyb3VzZWw+XG4gKi9cbmNsYXNzIENhcm91c2VsSXRlbSBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtY2Fyb3VzZWwtaXRlbSc7XG4gIH1cbn1cblxuQ2Fyb3VzZWxJdGVtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuIE9wdGlvbmFsLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsSXRlbTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuY2xhc3MgQmFzZUlucHV0IGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldCBFVkVOVF9UWVBFUygpIHtcbiAgICByZXR1cm4gWydjaGFuZ2UnLCAnaW5wdXQnXTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZS52YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5FVkVOVF9UWVBFUy5mb3JFYWNoKGV2ZW50VHlwZSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB0aGlzLm9uQ2hhbmdlKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgdGhpcy5FVkVOVF9UWVBFUy5mb3JFYWNoKGV2ZW50VHlwZSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB0aGlzLm9uQ2hhbmdlKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wcy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbm9kZS52YWx1ZSAhPT0gcHJvcHMudmFsdWUpIHtcbiAgICAgIG5vZGUudmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BzLmNoZWNrZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBub2RlLmNoZWNrZWQgPSBwcm9wcy5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLl9nZXREb21Ob2RlTmFtZSgpLCBVdGlsLmdldEF0dHJzKHRoaXMsIHByb3BzKSk7XG4gIH1cbn1cblxuQmFzZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmbG9hdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VJbnB1dDtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1jaGVja2JveFxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvaW5wdXRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogIEEgY2hlY2tib3ggZWxlbWVudC4gVGhlIGNvbXBvbmVudCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVuZGVyIGFzIGEgTWF0ZXJpYWwgRGVzaWduIGNoZWNrYm94IG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAqXG4gKiAgTW9zdCBhdHRyaWJ1dGVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGEgbm9ybWFsIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+YCBlbGVtZW50IGNhbiBhbHNvIGJlIHVzZWQgb24gdGhlIGA8Q2hlY2tib3g+YCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPENoZWNrYm94XG4gKiAgIG9uQ2hhbmdlPXtldmVudCA9PiB7IHRoaXMuc2V0U3RhdGUoe2NoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkfSl9IH1cbiAqICAgbW9kaWZpZXI9J21hdGVyaWFsJyAvPlxuICovXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1jaGVja2JveCc7XG4gIH1cblxuICBnZXQgRVZFTlRfVFlQRVMoKSB7XG4gICAgcmV0dXJuIFsnY2hhbmdlJ107XG4gIH1cbn1cblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgY2hlY2tib3guWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgY2hlY2tib3ggaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgd2hlbiB0aGUgY2hlY2tib3ggc3RhdGUgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVmFsdWUgb2YgdGhlIGNoZWNrYm94LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBjaGVja2VkXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSBjaGVja2JveC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaW5wdXRJZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgXCJpZFwiIGF0dHJpYnV0ZSBvZiB0aGUgaW5uZXIgYDxpbnB1dD5gIGVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gdXNpbmcgPGxhYmVsIGZvcj1cIi4uLlwiPiBlbGVtZW50cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWNvbFxuICogQGNhdGVnb3J5IGdyaWRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogUmVwcmVzZW50cyBhIGNvbHVtbiBpbiB0aGUgZ3JpZCBzeXN0ZW0uIFVzZSB3aXRoIGA8b25zLXJvdz5gIHRvIGxheW91dCBjb21wb25lbnRzLlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogPFJvdz5cbiAqICAgPENvbCB3aWR0aD17NTB9PlxuICAqICAgPG9ucy1pY29uIGljb249XCJmYS10d2l0dGVyXCI+PC9vbnMtaWNvbj5cbiAqICAgPC9Db2w+XG4gKiAgIDxDb2w+VGV4dDwvQ29sPlxuICogPC9Sb3c+XG4gKi9cbmNsYXNzIENvbCBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtY29sJztcbiAgfVxufVxuXG5Db2wucHJvcFR5cGVzID0ge1xuXG4gIC8qKlxuICAqIEBuYW1lIHZlcnRpY2FsQWxpZ25cbiAgKiBAdHlwZSB7U3RyaW5nfVxuICAqIEBkZXNjcmlwdGlvblxuICAqICAgW2VuXVNob3J0IGhhbmQgYXR0cmlidXRlIGZvciBhbGlnbmluZyB2ZXJ0aWNhbGx5LiBWYWxpZCB2YWx1ZXMgYXJlIHRvcCwgYm90dG9tLCBhbmQgY2VudGVyLlsvZW5dXG4gICogICBbamFdWy9qYV1cbiAgKi9cbiAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbScsICdjZW50ZXInXSksXG5cbiAgLyoqXG4gICogQG5hbWUgd2lkdGhcbiAgKiBAdHlwZSB7U3RyaW5nfVxuICAqIEBkZXNjcmlwdGlvblxuICAqICAgW2VuXVRoZSB3aWR0aCBvZiB0aGUgY29sdW1uLiBWYWxpZCB2YWx1ZXMgYXJlIGNzcyB3aWR0aCB2YWx1ZXMgKFwiMTAlXCIsIDUwKS5bL2VuXVxuICAqICAgW2phXVsvamFdXG4gICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbDtcbiIsImltcG9ydCBCYXNlRGlhbG9nIGZyb20gJy4vQmFzZURpYWxvZy5qc3gnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtZGlhbG9nXG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2RpYWxvZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dICBEaWFsb2cgdGhhdCBpcyBkaXNwbGF5ZWQgb24gdG9wIG9mIGN1cnJlbnQgc2NyZWVuLiBBcyBvcHBvc2VkIHRvIHRoZSBBbGVydERpYWxvZyBlbGVtZW50LCB0aGlzIGNvbXBvbmVudCBjYW4gY29udGFpbiBhbnkga2luZCBvZiBjb250ZW50LiAgVGhlIGRpYWxvZyBpcyB1c2VmdWwgZm9yIGRpc3BsYXlpbmcgbWVudXMsIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gb3IgdG8gYXNrIHRoZSB1c2VyIHRvIG1ha2UgYSBkZWNpc2lvbi4gIEl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNwbGF5ZWQgYXMgTWF0ZXJpYWwgRGVzaWduIHdoZW4gcnVubmluZyBvbiBhbiBBbmRyb2lkIGRldmljZS5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICAgPERpYWxvZyBvbkNhbmNlbD17dGhpcy5vbkNhbmNlbH1cbiAgICAgaXNPcGVuPXt0aGlzLnByb3BzLmlzT3Blbn1cbiAgICAgc3R5bGU9e3toZWlnaHQ6IDI1MH19ICBjYW5jZWxhYmxlPlxuICAgICA8UGFnZT5cbiAgICAgICBQYWdlIENvbnRlbnRcbiAgICAgPC9QYWdlPlxuICAgIDwvRGlhbG9nPlxuXG4gKi9cbmNsYXNzIERpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtZGlhbG9nJztcbiAgfVxufVxuXG5EaWFsb2cucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgb25DYW5jZWxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIG9ubHkgaWYgaXNDYW5jZWxhYmxlIGlzIHRydWUuIEl0IHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRhcHBpbmcgdGhlIGJhY2tncm91bmQgb3IgYnkgcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIG9wZW4gYW5kIHNob3duLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0NhbmNlbGFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGNhbmNlbGFibGUgb3Igbm90LlxuICAgKiAgQSBjYW5jZWxhYmxlIGRpYWxvZyB3aWxsIGNhbGwgb25DYW5jZWwgIHdoZW4gdGFwcGluZyB0aGUgYmFja2dyb3VuZCBvciBvciAgcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlc1xuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNDYW5jZWxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaXNEaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBUaGUgYW5pbWF0aW9uIHVzZWQgd2hlbiBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIGRpYWxvZy4gQ2FuIGJlIGVpdGhlciBgXCJub25lXCJgIG9yIGBcImRlZmF1bHRcImAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGRpYWxvZy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbWFza0NvbG9yXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29sb3Igb2YgdGhlIGJhY2tncm91bmQgbWFzay4gRGVmYXVsdCBpcyBcInJnYmEoMCwgMCwgMCwgMC4yKVwiWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbWFza0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25PcHRpb25zXG4gICAqIEB0eXBlIG9iamVjdFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBhbGVydCBkaWFsb2cgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0U2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBhZnRlciB0aGUgYWxlcnQgZGlhbG9nIGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSB0aGUgYWxlcnQgZGlhbG9nIGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZUhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciB0aGUgYWxlcnQgZGlhbG9nIGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWZhYlxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvZmFiXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gVGhlIEZsb2F0aW5nIGFjdGlvbiBidXR0b24gaXMgYSBjaXJjdWxhciBidXR0b24gZGVmaW5lZCBpbiB0aGUgW01hdGVyaWFsIERlc2lnbiBzcGVjaWZpY2F0aW9uXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvYnV0dG9ucy1mbG9hdGluZy1hY3Rpb24tYnV0dG9uLmh0bWwpLiBUaGV5IGFyZSBvZnRlbiB1c2VkIHRvIHByb21vdGUgdGhlIHByaW1hcnkgYWN0aW9uIG9mIHRoZSBhcHAuXG4gKiAgICAgSXQgY2FuIGJlIGRpc3BsYXllZCBlaXRoZXIgYXMgYW4gaW5saW5lIGVsZW1lbnQgb3IgaW4gb25lIG9mIHRoZSBjb3JuZXJzLiBOb3JtYWxseSBpdCB3aWxsIGJlIHBvc2l0aW9uZWQgaW4gdGhlIGxvd2VyIHJpZ2h0IGNvcm5lciBvZiB0aGUgc2NyZWVuLlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8U3BlZWREaWFsIGRpc2FibGVkPXtmYWxzZX0gZGlyZWN0aW9uPSdyaWdodCcgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3Rlc3QxJyl9IHBvc2l0aW9uPSdsZWZ0IGJvdHRvbSc+XG4gICAgIDxGYWI+XG4gICAgICAgPEljb24gaWNvbj0nZmEtdHdpdHRlcicgc2l6ZT17MjZ9IGZpeGVkV2lkdGg9e2ZhbHNlfSBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0gLz5cbiAgICAgPC9GYWI+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBBJyl9PiBBIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEInKX0+IEIgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQycpfT4gQyA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBEJyl9PiBEIDwvU3BlZWREaWFsSXRlbT5cbiAgIDwvU3BlZWREaWFsPlxuICAqL1xuY2xhc3MgRmFiIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1mYWInO1xuICB9XG59XG5cbkZhYi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJpcHBsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsICB0aGUgYnV0dG9uIHdpbGwgaGF2ZSBhIHJpcHBsZSBlZmZlY3Qgd2hlbiB0YXBwZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgcG9zaXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgcG9zaXRpb24gb2YgdGhlIGJ1dHRvbi4gU2hvdWxkIGJlIGEgc3RyaW5nIGxpa2UgYFwiYm90dG9tIHJpZ2h0XCJgIG9yIGBcInRvcCBsZWZ0XCJgLiBJZiB0aGlzIGF0dHJpYnV0ZSBpcyBub3QgZGVmaW5lZCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhcyBhbiBpbmxpbmUgZWxlbWVudC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb25lcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWljb25cbiAqIEBjYXRlZ29yeSB2aXN1YWxcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvaWNvblxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiBEaXNwbGF5cyBhbiBpY29uLiBUaGUgZm9sbG93aW5nIGljb24gc3VpdGVzIGFyZSBhdmFpbGFibGU6XG4gKiAgICogIFtGb250IEF3ZXNvbWVdKGh0dHBzOi8vZm9ydGF3ZXNvbWUuZ2l0aHViLmlvL0ZvbnQtQXdlc29tZS8pXG4gKiAgICogIFtJb25pY29uc10oaHR0cDovL2lvbmljb25zLmNvbS8pXG4gKiAgICogIFtNYXRlcmlhbCBEZXNpZ24gSWNvbmljIEZvbnRdKGh0dHA6Ly96YXZvbG9rbG9tLmdpdGh1Yi5pby9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvKVxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgPEljb25cbiAgICBzaXplPXt7ZGVmYXVsdDogMzIsIG1hdGVyaWFsOiA0MH19XG4gICAgaWNvbj17e2RlZmF1bHQ6ICdpb24tbmF2aWNvbicsIG1hdGVyaWFsOiAnbWQtbWVudSd9fVxuICAvPlxuKi9cbmNsYXNzIEljb24gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWljb24nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgc2l6ZSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzLCBvdGhlcnMpO1xuXG4gICAgaWYgKGljb24pIHtcbiAgICAgIGlmICgodHlwZW9mIGljb24pID09PSAnc3RyaW5nJykge1xuICAgICAgICBhdHRycy5pY29uID0gaWNvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhpY29uKS5maWx0ZXIoKGEpID0+IGEgIT09ICdkZWZhdWx0Jyk7XG4gICAgICAgIGNvbnN0IGlubmVyU3RyaW5nID0ga2V5cy5tYXAoKGtleSkgPT4ga2V5ICsgJzonICsgaWNvbltrZXldICsgJycpO1xuICAgICAgICBhdHRycy5pY29uID0gaWNvbi5kZWZhdWx0ICsgJywgJyArIGlubmVyU3RyaW5nLmpvaW4oJywnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2l6ZSkge1xuICAgICAgaWYgKCh0eXBlb2Ygc2l6ZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGF0dHJzLnNpemUgPSBgJHtzaXplfXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaXplKS5maWx0ZXIoKGEpID0+IGEgIT09ICdkZWZhdWx0Jyk7XG4gICAgICAgIGNvbnN0IGlubmVyU3RyaW5nID0ga2V5cy5tYXAoKGtleSkgPT4ga2V5ICsgJzonICsgc2l6ZVtrZXldICsgJ3B4Jyk7XG4gICAgICAgIGF0dHJzLnNpemUgPSBzaXplLmRlZmF1bHQgKyAncHgsICcgKyBpbm5lclN0cmluZy5qb2luKCcsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5fZ2V0RG9tTm9kZU5hbWUoKSwgYXR0cnMsIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgaWNvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgaWNvblxuICAgKiBAdHlwZSAnb2JqZWN0IG9yIHN0cmluZydcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LiBJZiBpdCBpcyBhbiBzdHJpbmcsIGl0IGlzIHNldCB0byBhbiBzcGVjaWZpYyBpY29uIGxpa2UgJ2lvbnMtbmF2aWNvbicuIElmIGl0IGlzIGFuIG9iamVjdCwgaXQgcmVwcmVzZW50cyBhIGRpY3Rpb25hcnkgb2YgdGhlIGljb25zIGRlcGVuZGluZyBvbiB0aGUgbW9kaWZpZXIgZS5nLiAgIGB7e2RlZmF1bHQ6ICdpb24tbmF2aWNvbicsIG1hdGVyaWFsOiAnbWQtbWVudSd9fWAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLnN0cmluZylcbiAgXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIHNpemVcbiAgICogQHR5cGUgJ29iamVjdCBvciBudW1iZXInXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyIG9yIGFuIG9iamVjdC4gSWYgaXQgaXMgYW4gbnVtYmVyLCBpdCAgc3BlY2lmaWVzIHRoZSBpY29uIHNpemUgd2l0aCBhIG51bWJlciBpbiBwaXhlbHMuIElmIGl0IGlzIGFuIG9iamVjdCwgaXQgcmVwcmVzZW50cyBhIGRpY3Rpb25hcnkgb2YgdGhlIGljb24gc2l6ZXMgZGVwZW5kaW5nIG9uIHRoZSBtb2RpZmllciBlLmcuICAgYHt7ZGVmYXVsdDogMjAsIG1hdGVyaWFsOiAxOH19YCBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMubnVtYmVyKVxuICBdKSxcblxuICAvKipcbiAgICogQG5hbWUgcm90YXRlXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gTnVtYmVyIG9mIGRlZ3JlZXMgdG8gcm90YXRlIHRoZSBpY29uLiBWYWxpZCB2YWx1ZXMgYXJlIDkwLCAxODAgYW5kIDI3MC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcm90YXRlOiBQcm9wVHlwZXMub25lT2YoWzAsIDkwLCAxODAsIDI3MF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaXhlZFdpZHRoXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFtlbl0gV2hlbiB1c2VkIGluIGEgbGlzdCwgeW91IHdhbnQgdGhlIGljb25zIHRvIGhhdmUgdGhlIHNhbWUgd2lkdGggc28gdGhhdCB0aGV5IGFsaWduIHZlcnRpY2FsbHkgYnkgZGVmaW5pbmcgdGhpcyBhdHRyaWJ1dGUuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGZpeGVkV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzcGluXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFtlbl0gU3BlY2lmeSB3aGV0aGVyIHRoZSBpY29uIHNob3VsZCBiZSBzcGlubmluZy4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3BpbjogUHJvcFR5cGVzLmJvb2xcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1pbnB1dFxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvaW5wdXRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogQW4gaW5wdXQgZWxlbWVudC4gVGhlIGB0eXBlYCBhdHRyaWJ1dGUgY2FuIGJlIHVzZWQgdG8gY2hhbmdlIHRoZSBpbnB1dCB0eXBlLiBBbGwgdGV4dCBpbnB1dCB0eXBlcyBhcyB3ZWxsIGFzIGBjaGVja2JveGAgYW5kIGByYWRpb2AgYXJlIHN1cHBvcnRlZC4gVGhlIGNvbXBvbmVudCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVuZGVyIGFzIGEgTWF0ZXJpYWwgRGVzaWduIGlucHV0IG9uIEFuZHJvaWQgZGV2aWNlcy4gTW9zdCBhdHRyaWJ1dGVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGEgbm9ybWFsIGA8aW5wdXQ+YCBlbGVtZW50IGNhbiBhbHNvIGJlIHVzZWQgb24gdGhlIGA8b25zLWlucHV0PmAgZWxlbWVudC4uXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxJbnB1dFxuICogICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fSBmbG9hdFxuICogICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IHRoaXMuc2V0U3RhdGUoe3RleHQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pfSB9XG4gKiAgIG1vZGlmaWVyPSdtYXRlcmlhbCdcbiAqICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyAvPlxuICovXG5jbGFzcyBJbnB1dCBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1pbnB1dCc7XG4gIH1cbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgaW5wdXQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25DaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIHRleHQgb2YgdGhlIGlucHV0IGNoYW5nZXMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB2YWx1ZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29udGVudCBvZiB0aGUgaW5wdXQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSlcbiAgXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIHBsYWNlaG9kZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBQbGFjZWhvbGRlciB0ZXh0LiBJbiBNYXRlcmlhbCBEZXNpZ24gdGhpcyBwbGFjZWhvbGRlciB3aWxsIGJlIGEgZmxvYXRpbmcgbGFiZWwuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB0eXBlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogICAgU3BlY2lmeSB0aGUgaW5wdXQgdHlwZS4gVGhpcyBpcyB0aGUgc2FtZSBhcyB0aGUgXCJ0eXBlXCIgYXR0cmlidXRlIGZvciBub3JtYWwgaW5wdXRzLiBJdCBleHBlY3RzIHN0cmljdCB0ZXh0IHR5cGVzIHN1Y2ggYXMgYHRleHRgLCBgcGFzc3dvcmRgLCBldGMuIEZvciBjaGVja2JveCwgcmFkaW8gYnV0dG9uLCBzZWxlY3Qgb3IgcmFuZ2UsIHBsZWFzZSBoYXZlIGEgbG9vayBhdCB0aGUgY29ycmVzcG9uZGluZyBjb21wb25lbnRzLlxuICAgKlxuICAgKiAgICBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgW01ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I2F0dHItdHlwZSkgZm9yIGFuIGV4aGF1c3RpdmUgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZXMuIERlcGVuZGluZyBvbiB0aGUgcGxhdGZvcm0gYW5kIGJyb3dzZXIgdmVyc2lvbiBzb21lIG9mIHRoZXNlIG1pZ2h0IG5vdCB3b3JrLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgaW5wdXRJZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dICBTcGVjaWZ5IHRoZSBcImlkXCIgYXR0cmlidXRlIG9mIHRoZSBpbm5lciBgPGlucHV0PmAgZWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgd2hlbiB1c2luZyA8bGFiZWwgZm9yPVwiLi4uXCI+IGVsZW1lbnRzIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGZsb2F0XG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dICBJZiB0aGlzIGF0dHJpYnV0ZSBpcyBwcmVzZW50LCB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBhbmltYXRlZCBpbiBNYXRlcmlhbCBEZXNpZ24uICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBmbG9hdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtbGF6eS1yZXBlYXRcbiAqIEBjYXRlZ29yeSBsaXN0XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2xhenktbGlzdFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFVzaW5nIHRoaXMgY29tcG9uZW50IGEgbGlzdCB3aXRoIG1pbGxpb25zIG9mIGl0ZW1zIGNhbiBiZSByZW5kZXJlZCB3aXRob3V0IGEgZHJvcCBpbiBwZXJmb3JtYW5jZS5cbiAqICAgICBJdCBkb2VzIHRoYXQgYnkgXCJsYXppbHlcIiBsb2FkaW5nIGVsZW1lbnRzIGludG8gdGhlIERPTSB3aGVuIHRoZXkgY29tZSBpbnRvIHZpZXcgYW5kXG4gKiAgICAgcmVtb3ZpbmcgaXRlbXMgZnJvbSB0aGUgRE9NIHdoZW4gdGhleSBhcmUgbm90IHZpc2libGUuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqXG4gIHJlbmRlclJvdyhpbmRleCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgIHsnSXRlbSAnICsgKGluZGV4ICsgMSl9XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIHJlbmRlclRvb2xiYXI9eygpID0+IDxNeVRvb2xiYXIgdGl0bGU9J0xhenlMaXN0JyAvPn0gPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAxMDB9fT5cbiAgICAgICAgICA8TGF6eUxpc3RcbiAgICAgICAgICAgIGxlbmd0aD17MTAwMH1cbiAgICAgICAgICAgIHJlbmRlclJvdz17KCkgPT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHsnSXRlbSAnICsgKGluZGV4ICsgMSl9XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxjdWxhdGVJdGVtSGVpZ2h0PXsoKSA9PiA0NH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG4gKi9cbmNsYXNzIExhenlMaXN0IGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtjaGlsZHJlbjogW119O1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZShwcm9wcykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuX2xhenlSZXBlYXQuZGVsZWdhdGUgPSB7XG4gICAgICBjYWxjdWxhdGVJdGVtSGVpZ2h0OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gcHJvcHMuY2FsY3VsYXRlSXRlbUhlaWdodChpbmRleCk7XG4gICAgICB9LFxuICAgICAgLy8gX3JlbmRlcjogZnVuY3Rpb24oaXRlbXMsIG5ld0hlaWdodCkge1xuICAgICAgX3JlbmRlcjogZnVuY3Rpb24oc3RhcnQsIGxpbWl0LCB1cGRhdGVUb3ApIHtcbiAgICAgICAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5yZW5kZXJSb3coaW5kZXgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGVsID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxpbWl0OyBpKyspIHtcbiAgICAgICAgICBlbC5wdXNoKGNyZWF0ZUVsZW1lbnQoaSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7Y2hpbGRyZW46IGVsfSwgdXBkYXRlVG9wKTtcbiAgICAgIH0sXG4gICAgICBjb3VudEl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgIHZhciBoZWxwUHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgLi4ubmV3UHJvcHNcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlKGhlbHBQcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMudXBkYXRlKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8b25zLWxpc3Qgey4uLnRoaXMucHJvcHN9IHJlZj17KGxpc3QpID0+IHsgdGhpcy5fbGlzdCA9IGxpc3Q7IH19XG4gICAgICAgIGNsYXNzPSdsaXN0JyBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0fX1cbiAgICAgID5cbiAgICAgICAgPG9ucy1sYXp5LXJlcGVhdCByZWY9eyhsYXp5UmVwZWF0KSA9PiB7IHRoaXMuX2xhenlSZXBlYXQgPSBsYXp5UmVwZWF0OyB9fSAvPlxuICAgICAgICB7dGhpcy5zdGF0ZS5jaGlsZHJlbn1cbiAgICAgIDwvb25zLWxpc3Q+XG4gICAgKTtcbiAgfVxufVxuXG5MYXp5TGlzdC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBsYXp5IGxpc3QuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGxlbmd0aFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGxlbmd0aCBvZiB0aGUgbGlzdC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBsZW5ndGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyUm93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBBIGZ1bmN0aW9uIGdpdmVuIHRoZSBpbmRleCBvZiB0aGUgdG8gZGlzcGxheSByb3csIHJlbmRlcnMgaXQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVyUm93OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBjYWxjdWxhdGVJdGVtSGVpZ2h0XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBBIGZ1bmN0aW9uIGdpdmVuIHRoZSBpbmRleCBvZiB0aGUgdG8gcm93LCByZXR1cm5zIHRoZSBoZWlnaHQgb2YgaXQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgY2FsY3VsYXRlSXRlbUhlaWdodDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF6eUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNpY0NvbXBvbmVudCBmcm9tICcuL0Jhc2ljQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtbGlzdFxuICogQGNhdGVnb3J5IGxpc3RcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvbGlzdFxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1cbiAqICAgICBDb21wb25lbnQgZm9yIHJlcHJlc2VudGluZyBhIGxpc3QuIEl0IHRha2VzIGFuIGFycmF5IGNhbGxlZCBkYXRhc291cmNlIGFuZCBjYWxscyByZW5kZXJSb3cocm93LCBpbmRleCkgZm9yIGV2ZXJ5IHJvdy4gIEZ1cnRoZXJtb3JlLCB0aGUgaGVhZGVyIGFuZCB0aGUgZm9vdGVyIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCBgcmVuZGVyUm93YCBhbmQgYHJlbmRlckhlYWRlcmAgcmVzcGVjdGl2bHkuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxMaXN0XG4gICAgZGF0YVNvdXJjZT17WydSb3cgMScsICdSb3cgMiddfVxuICAgIHJlbmRlckhlYWRlcj17dGhpcy5yZW5kZXJIZWFkZXJ9XG4gICAgcmVuZGVyUm93PXsocm93LCBpZHgpID0+IChcbiAgICAgIDxMaXN0SXRlbSBtb2RpZmllcj17aWR4ID09PSB0aGlzLnN0YXRlLmRhdGEubGVuZ3RoIC0gMSA/ICdsb25nZGl2aWRlcicgOiBudWxsfT5cbiAgICAgIHtyb3d9XG4gIDxCdXR0b24gbW9kaWZpZXI9XCJxdWlldFwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlLmJpbmQodGhpcywgaWR4KX0+UmVtb3ZlPC9CdXR0b24+XG4gIDwvTGlzdEl0ZW0+XG4gICl9XG4gIHJlbmRlckZvb3Rlcj17dGhpcy5yZW5kZXJGb290ZXJ9XG4gIC8+XG4gKi9cbmNsYXNzIExpc3QgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcyk7XG4gICAgY29uc3QgcGFnZXMgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2UubWFwKChkYXRhLCBpZHgpID0+IHRoaXMucHJvcHMucmVuZGVyUm93KGRhdGEsIGlkeCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxvbnMtbGlzdCB7IC4uLmF0dHJzIH0gcmVmPXsobGlzdCkgPT4geyB0aGlzLl9saXN0ID0gbGlzdDsgfX0+XG4gICAgICAgIHt0aGlzLnByb3BzLnJlbmRlckhlYWRlcigpfVxuICAgICAgICB7cGFnZXN9XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICB7dGhpcy5wcm9wcy5yZW5kZXJGb290ZXIoKX1cbiAgICAgIDwvb25zLWxpc3Q+XG4gICAgKTtcbiAgfVxufVxuXG5MaXN0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGF0YVNvdXJjZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICAgIFNvdXJjZSBvZiB0aGUgbGlzdCBkYXRhLiBTaG91bGQgYmUgYW4gYXJyYXkuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlclJvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEZ1bmN0aW9uIHRvIHNwZWNpZnkgdGhlIHJlbmRlcmluZyBmdW5jdGlvbiBmb3IgZXZlcnkgZWxlbWVudCBpblxuICAgKiAgaW4gdGhlIGRhdGFTb3VyY2UuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZW5kZXJSb3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW5kZXJIZWFkZXJcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBGdW5jdGlvbiB0byBzcGVjaWZ5IHRoZSByZW5kZXJpbmcgZnVuY3Rpb24gZm9yIHRoZSBoZWFkZXJcbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlckhlYWRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlckZvb3RlclxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEZ1bmN0aW9uIHRvIHNwZWNpZnkgdGhlIHJlbmRlcmluZyBmdW5jdGlvbiBmb3IgdGhlIGZvb3RlclxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVyRm9vdGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGFTb3VyY2U6IFtdLFxuICByZW5kZXJSb3c6ICgpID0+IG51bGwsXG4gIHJlbmRlckhlYWRlcjogKCkgPT4gbnVsbCxcbiAgcmVuZGVyRm9vdGVyOiAoKSA9PiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1saXN0LWhlYWRlclxuICogQGNhdGVnb3J5IGxpc3RcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvbGlzdFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIEhlYWRlciBlbGVtZW50IGZvciBsaXN0IGl0ZW1zLiBNdXN0IGJlIHB1dCBpbnNpZGUgb25zLWxpc3QgY29tcG9uZW50LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gICA8TGlzdFxuICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgIHJlbmRlckhlYWRlcj17KCkgPT5cbiAgICAgICAgPExpc3RIZWFkZXIgc3R5bGU9e3tmb250U2l6ZTogMTV9fSBjbGFzc05hbWU9XCJ0ZXN0Q2xhc3NcIj4gSGVhZGVyIFRleHQgPC9MaXN0SGVhZGVyPiB9XG4gICAgcmVuZGVyUm93PXsocm93LCBpZHgpID0+IChcbiAgICAgIDxMaXN0SXRlbSA+IHtyb3d9IDwvTGlzdEl0ZW0+XG4gICAgKX1cbiAgLz5cbiAqL1xuY2xhc3MgTGlzdEhlYWRlciBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtbGlzdC1oZWFkZXInO1xuICB9XG59XG5cbkxpc3RIZWFkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmeSBtb2RpZmllciBuYW1lIHRvIHNwZWNpZnkgY3VzdG9tIHN0eWxlcy4gT3B0aW9uYWwuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtbGlzdC1pdGVtXG4gKiBAY2F0ZWdvcnkgbGlzdFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9saXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXVxuICogICBDb21wb25lbnQgdGhhdCByZXByZXNlbnRzIGVhY2ggaXRlbSBpbiB0aGUgbGlzdC4gTXVzdCBiZSBwdXQgaW5zaWRlIHRoZSBgTGlzdGAgY29tcG9uZW50LiBUaGUgbGlzdCBpdGVtIGlzIGNvbXBvc2VkIG9mIHRocmVlIHBhcnRzIHRoYXQgYXJlIHJlcHJlc2VudGVkIHdpdGggdGhlIGBsZWZ0YCwgYGNlbnRlcmAgYW5kIGByaWdodGAgY2xhc3Nlcy4gVGhlc2UgY2xhc3NlcyBjYW4gYmUgdXNlZCB0byBlbnN1cmUgdGhhdCB0aGUgY29udGVudCBvZiB0aGUgbGlzdCBpdGVtcyBpcyBwcm9wZXJseSBhbGlnbmVkLlxuICogICBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICAgPExpc3RJdGVtPlxuICogICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5MZWZ0PC9kaXY+XG4gKiAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+Q2VudGVyPC9kaXY+XG4gKiAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5SaWdodDwvZGl2PlxuICogPC9MaXN0SXRlbT5cbiAqL1xuY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWxpc3QtaXRlbSc7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMubm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIHRoaXMubm9kZS5fY29tcGlsZSgpO1xuICB9XG59XG5cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBsaXN0IGl0ZW0uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHRhcHBhYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgbGlzdCBpdGVtIGlzIHRhcHBhYmxlLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdGFwcGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB0YXBCYWNrZ3JvdW5kQ29sb3JcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2hhbmdlcyB0aGUgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRhcHBlZC4gRm9yIHRoaXMgdG8gd29yaywgdGhlIGF0dHJpYnV0ZSBcInRhcHBhYmxlXCIgbmVlZHMgdG8gYmUgc2V0LiBUaGUgZGVmYXVsdCBjb2xvciBpcyBcIiNkOWQ5ZDlcIi4gSXQgd2lsbCBkaXNwbGF5IGFzIGEgcmlwcGxlIGVmZmVjdCBvbiBBbmRyb2lkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdGFwQmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBsb2NrT25EcmFnXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFByZXZlbnQgdmVydGljYWwgc2Nyb2xsaW5nIHdoZW4gdGhlIHVzZXIgZHJhZ3MgaG9yaXpvbnRhbGx5LiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBsb2NrT25EcmFnOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWxpc3QtdGl0bGVcbiAqIEBjYXRlZ29yeSBsaXN0XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2xpc3RcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBUaXRsZSBlbGVtZW50IGZvciBsaXN0cy4gVXN1YWxseSBjb21lcyBiZWZvcmUgb25zLWxpc3QgY29tcG9uZW50LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8TGlzdFRpdGxlPkxpc3QgVGl0bGU8L0xpc3RUaXRsZT5cbiAgIDxMaXN0XG4gICAgIGRhdGFTb3VyY2U9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgcmVuZGVySGVhZGVyPXsoKSA9PlxuICAgICAgICA8TGlzdEhlYWRlciBzdHlsZT17e2ZvbnRTaXplOiAxNX19IGNsYXNzTmFtZT1cInRlc3RDbGFzc1wiPiBIZWFkZXIgVGV4dCA8L0xpc3RIZWFkZXI+IH1cbiAgICByZW5kZXJSb3c9eyhyb3csIGlkeCkgPT4gKFxuICAgICAgPExpc3RJdGVtID4ge3Jvd30gPC9MaXN0SXRlbT5cbiAgICApfVxuICAvPlxuICovXG5jbGFzcyBMaXN0VGl0bGUgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWxpc3QtdGl0bGUnO1xuICB9XG59XG5cbkxpc3RUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0VGl0bGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNpY0NvbXBvbmVudCBmcm9tICcuL0Jhc2ljQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtbmF2aWdhdG9yXG4gKiBAY2F0ZWdvcnkgbmF2aWdhdGlvblxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9uYXZpZ2F0b3JcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBUaGlzIGNvbXBvbmVudCBpcyByZXNwb25zaWJsZSBmb3IgcGFnZSB0cmFuc2l0aW9uaW5nIGFuZCBtYW5hZ2luZyB0aGUgcGFnZXMgb2YgeW91ciBPbnNlblVJIGFwcGxpY2F0aW9uLiBJbiBvcmRlciB0byBtYW5hZ2UgdG8gZGlzcGxheSB0aGUgcGFnZXMsIHRoZSAgbmF2aWdhdG9yIG5lZWRzIHRvIGRlZmluZSB0aGUgYHJlbmRlclBhZ2VgIG1ldGhvZCwgdGhhdCB0YWtlcyBhbiByb3V0ZSBhbmQgYSBuYXZpZ2F0b3IgYW5kICBjb252ZXJ0cyBpdCB0byBhbiBwYWdlLiAgWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgPE5hdmlnYXRvclxuICAgIHJlbmRlclBhZ2U9eyhyb3V0ZSwgbmF2aWdhdG9yKSA9PlxuICAgICA8TXlQYWdlXG4gICAgICAgdGl0bGU9e3JvdXRlLnRpdGxlfVxuICAgICAgIG9uUG9wPXsoKSA9PiBuYXZpZ2F0b3IucG9wUGFnZSgpfVxuICAgICAgIC8+XG4gICAgfVxuICAgIGluaXRpYWxSb3V0ZT17e1xuICAgICAgICB0aXRsZTogJ0ZpcnN0IFBhZ2UnXG4gICAgfX0gLz5cbiAgIH1cbiB9XG4gKi9cbmNsYXNzIE5hdmlnYXRvciBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMucGFnZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlID0geyB9O1xuICAgIHRoaXMuX3ByZVB1c2ggPSB0aGlzLl9wcmVQdXNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcG9zdFB1c2ggPSB0aGlzLl9wb3N0UHVzaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3ByZVBvcCA9IHRoaXMuX3ByZVBvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3Bvc3RQb3AgPSB0aGlzLl9wb3N0UG9wLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGUocGFnZXMsIG9iaikge1xuICAgIHRoaXMucGFnZXMgPSBwYWdlcyB8fCBbXTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUocmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCByZXNldFBhZ2VcbiAgICogQHNpZ25hdHVyZSByZXNldFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSlcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvdXRlXG4gICAqICAgW2VuXSBUaGUgcm91dGUgdGhhdCB0aGUgcGFnZSBzaG91bGQgYmUgcmVzZXQgdG8uWy9lbl1cbiAgICogICBbamFdWy9qYV1cbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICogICBbZW5dUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgcmV2ZWFsZWQgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mmI7jgonjgYvjgavjgZfjgZ/jg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXVJlc2V0cyB0aGUgY3VycmVudCBwYWdlWy9lbl1cbiAgICogICBbamFdWy9qYV1cbiAgICovXG4gIHJlc2V0UGFnZShyb3V0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzZXRQYWdlU3RhY2soW3JvdXRlXSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCByZXNldFBhZ2VTdGFja1xuICAgKiBAc2lnbmF0dXJlIHJlc2V0UGFnZVN0YWNrKHJvdXRlLCBvcHRpb25zID0ge30pXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJvdXRlc1xuICAgKiAgIFtlbl0gVGhlIHJvdXRlcyB0aGF0IHRoZSBuYXZpZ2F0b3Igc2hvdWxkIGJlIHJlc2V0IHRvLlsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXVByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIHJldmVhbGVkIHBhZ2UuWy9lbl1cbiAgICogICBbamFd5piO44KJ44GL44Gr44GX44Gf44Oa44O844K444KS6Kej5rG644GZ44KLUHJvbWlzZeOCkui/lOOBl+OBvuOBmeOAglsvamFdXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgIFtlbl0gUmVzZXRzIHRoZSBuYXZpZ2F0b3IgdG8gdGhlIGN1cnJlbnQgcGFnZSBzdGFja1svZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqL1xuICByZXNldFBhZ2VTdGFjayhyb3V0ZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05hdmlnYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmcgYW5pbWF0aW9uLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGVQYWdlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2VFbGVtZW50cyA9IHRoaXMuX25hdmkucGFnZXM7XG4gICAgICBmb3IgKGxldCBpID0gcGFnZUVsZW1lbnRzLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHBhZ2VFbGVtZW50c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5wb3ApIHtcbiAgICAgIHRoaXMucm91dGVzQmVmb3JlUG9wID0gdGhpcy5yb3V0ZXMuc2xpY2UoKTtcbiAgICAgIHRoaXMucm91dGVzQWZ0ZXJQb3AgPSByb3V0ZXM7XG4gICAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcy5jb25jYXQoW3RoaXMucm91dGVzW3RoaXMucm91dGVzLmxlbmd0aCAtIDFdXSk7XG5cbiAgICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdGhpcy5mb3JjZVVwZGF0ZShyZXNvbHZlKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUodGhpcy5wYWdlcylcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aS5fcG9wUGFnZShvcHRpb25zLCB1cGRhdGUpKVxuICAgICAgICAudGhlbigoKSA9PiBoaWRlUGFnZXMoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdFJvdXRlID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBuZXdQYWdlID0gdGhpcy5wcm9wcy5yZW5kZXJQYWdlKGxhc3RSb3V0ZSwgdGhpcyk7XG4gICAgdGhpcy5yb3V0ZXMucHVzaChsYXN0Um91dGUpO1xuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wYWdlcy5wdXNoKG5ld1BhZ2UpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB0aGlzLmZvcmNlVXBkYXRlKHJlc29sdmUpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX3B1c2hQYWdlKG9wdGlvbnMsIHVwZGF0ZSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcbiAgICAgIHRoaXMucGFnZXMgPSByb3V0ZXMubWFwKHJvdXRlID0+IHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSwgdGhpcykpO1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHRoaXMucGFnZXMpLnRoZW4oKCkgPT4gaGlkZVBhZ2VzKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcHVzaFBhZ2VcbiAgICogQHNpZ25hdHVyZSBwdXNoUGFnZShyb3V0ZSwgb3B0aW9ucyA9IHt9KVxuICAgKiBAcGFyYW0ge09iamVjdH0gcm91dGVcbiAgICogICBbZW5dIFRoZSByb3V0ZSB0aGF0IHRoZSBuYXZpZ2F0b3Igc2hvdWxkIHB1c2ggdG8uWy9lbl1cbiAgICogICBbamFdWy9qYV1cbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICogICBbZW5dIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIHJldmVhbGVkIHBhZ2UuWy9lbl1cbiAgICogICBbamFd5piO44KJ44GL44Gr44GX44Gf44Oa44O844K444KS6Kej5rG644GZ44KLUHJvbWlzZeOCkui/lOOBl+OBvuOBmeOAglsvamFdXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgIFtlbl0gUHVzaGVzIGEgcGFnZSB0byB0aGUgcGFnZSBzdGFja1svZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqL1xuICBwdXNoUGFnZShyb3V0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnTmF2aWdhdG9yIGlzIGFscmVhZHkgcnVubmluZyBhbmltYXRpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGFnZXMucHVzaCh0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUsIHRoaXMpKTtcbiAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVzLnB1c2gocm91dGUpO1xuICAgICAgdGhpcy5fbmF2aVxuICAgICAgICAuX3B1c2hQYWdlKFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgdXBkYXRlXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVzLnBvcCgpO1xuICAgICAgICAgIHRoaXMucGFnZXMucG9wKCk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpLl9pc1J1bm5pbmc7XG4gIH1cblxuICAvKlxuICAgKiBAbWV0aG9kIHJlcGxhY2VQYWdlXG4gICAqIEBzaWduYXR1cmUgcmVwbGFjZVBhZ2Uocm91dGUsIFtvcHRpb25zXSlcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvdXRlXG4gICAqICAgW2VuXSBUaGUgcm91dGUgdGhhdCB0aGUgbmF2aWdhdG9yIHNob3VsZCByZXBsYWNlIHRoZSB0b3AgcGFnZSB3aXRoLlsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXVByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIG5ldyBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaWsOOBl+OBhOODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dUmVwbGFjZXMgdGhlIGN1cnJlbnQgdG9wIHBhZ2Ugd2l0aCB0aGUgc3BlY2lmaWVkIG9uZS4gRXh0ZW5kcyBgcHVzaFBhZ2UoKWAgcGFyYW1ldGVycy5bL2VuXVxuICAgKiAgIFtqYV3nj77lnKjooajnpLrkuK3jga7jg5rjg7zjgrjjgpLjgpLmjIflrprjgZfjgZ/jg5rjg7zjgrjjgavnva7jgY3mj5vjgYjjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgcmVwbGFjZVBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05hdmlnYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmcgYW5pbWF0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnB1c2hQYWdlKHJvdXRlLCBvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMucGFnZXMubGVuZ3RoIC0gMjtcbiAgICAgIHRoaXMucGFnZXMuc3BsaWNlKHBvcywgMSk7XG4gICAgICB0aGlzLnJvdXRlcy5zcGxpY2UocG9zLCAxKTtcbiAgICAgIHRoaXMuX25hdmkudG9wUGFnZS51cGRhdGVCYWNrQnV0dG9uKHRoaXMucGFnZXMubGVuZ3RoID4gMSk7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBwb3BQYWdlXG4gICAqIEBzaWduYXR1cmUgcG9wUGFnZShvcHRpb25zID0ge30pXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXSBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFBvcHMgYSBwYWdlIG91dCBvZiB0aGUgcGFnZSBzdGFja1svZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqL1xuICBwb3BQYWdlKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05hdmlnYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmcgYW5pbWF0aW9uLicpO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVzQmVmb3JlUG9wID0gdGhpcy5yb3V0ZXMuc2xpY2UoKTtcbiAgICB0aGlzLnJvdXRlc0FmdGVyUG9wID0gdGhpcy5yb3V0ZXNCZWZvcmVQb3Auc2xpY2UoMCwgdGhpcy5yb3V0ZXNCZWZvcmVQb3AubGVuZ3RoIC0gMSk7XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXMucG9wKCk7XG5cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZShyZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fbmF2aS5fcG9wUGFnZShvcHRpb25zLCB1cGRhdGUpO1xuICB9XG5cbiAgX29uRGV2aWNlQmFja0J1dHRvbihldmVudCkge1xuICAgIGlmICh0aGlzLnBhZ2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucG9wUGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5jYWxsUGFyZW50SGFuZGxlcigpO1xuICAgIH1cbiAgfVxuXG4gIF9wcmVQb3AoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9uYXZpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucm91dGVzID0ge1xuICAgICAgcG9wcGluZ1JvdXRlOiB0aGlzLnJvdXRlc0JlZm9yZVBvcFt0aGlzLnJvdXRlc0JlZm9yZVBvcC5sZW5ndGggLSAxXSxcbiAgICAgIHJvdXRlczogdGhpcy5yb3V0ZXNCZWZvcmVQb3BcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9wcy5vblByZVBvcChldmVudCk7XG4gIH1cblxuICBfcG9zdFBvcChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMuX25hdmkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5yb3V0ZXMgPSB7XG4gICAgICBwb3BwZWRSb3V0ZTogdGhpcy5yb3V0ZXNCZWZvcmVQb3BbdGhpcy5yb3V0ZXNCZWZvcmVQb3AubGVuZ3RoIC0gMV0sXG4gICAgICByb3V0ZXM6IHRoaXMucm91dGVzQWZ0ZXJQb3BcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9wcy5vblBvc3RQb3AoZXZlbnQpO1xuICB9XG5cbiAgX3ByZVB1c2goZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9uYXZpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucm91dGVzID0ge1xuICAgICAgcHVzaGluZ1JvdXRlOiB0aGlzLnJvdXRlc1t0aGlzLnJvdXRlcy5sZW5ndGggLSAxXSxcbiAgICAgIHJvdXRlczogdGhpcy5yb3V0ZXMuc2xpY2UoMCwgdGhpcy5yb3V0ZXMubGVuZ3RoIC0gMSlcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9wcy5vblByZVB1c2goZXZlbnQpO1xuICB9XG5cbiAgX3Bvc3RQdXNoKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fbmF2aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnJvdXRlcyA9IHtcbiAgICAgIHB1c2hlZFJvdXRlOiB0aGlzLnJvdXRlc1t0aGlzLnJvdXRlcy5sZW5ndGggLSAxXSxcbiAgICAgIHJvdXRlczogdGhpcy5yb3V0ZXNcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9wcy5vblBvc3RQdXNoKGV2ZW50KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9uYXZpO1xuICAgIG5vZGUucG9wUGFnZSA9IHRoaXMucG9wUGFnZS5iaW5kKHRoaXMpO1xuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwcmVwdXNoJywgdGhpcy5fcHJlUHVzaCk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0cHVzaCcsIHRoaXMuX3Bvc3RQdXNoKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZXBvcCcsIHRoaXMuX3ByZVBvcCk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0cG9wJywgdGhpcy5fcG9zdFBvcCk7XG5cbiAgICBub2RlLnN3aXBlTWF4ID0gdGhpcy5wcm9wcy5zd2lwZVBvcDtcbiAgICBub2RlLm9uRGV2aWNlQmFja0J1dHRvbiA9IHRoaXMucHJvcHMub25EZXZpY2VCYWNrQnV0dG9uIHx8IHRoaXMuX29uRGV2aWNlQmFja0J1dHRvbi5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFJvdXRlICYmIHRoaXMucHJvcHMuaW5pdGlhbFJvdXRlU3RhY2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW4gTmF2aWdhdG9yIGVpdGhlciBpbml0YWxSb3V0ZSBvciBpbml0YWxSb3V0ZXMgY2FuIGJlIHNldCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxSb3V0ZSkge1xuICAgICAgdGhpcy5yb3V0ZXMgPSBbdGhpcy5wcm9wcy5pbml0aWFsUm91dGVdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pbml0aWFsUm91dGVTdGFjaykge1xuICAgICAgdGhpcy5yb3V0ZXMgPSB0aGlzLnByb3BzLmluaXRpYWxSb3V0ZVN0YWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMucGFnZXMgPSB0aGlzLnJvdXRlcy5tYXAoXG4gICAgICAocm91dGUpID0+IHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSwgdGhpcylcbiAgICApO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX25hdmkub25EZXZpY2VCYWNrQnV0dG9uID0gbmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9uYXZpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlcHVzaCcsIHRoaXMucHJvcHMub25QcmVQdXNoKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RwdXNoJywgdGhpcy5wcm9wcy5vblBvc3RQdXNoKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ByZXBvcCcsIHRoaXMucHJvcHMub25QcmVQb3ApO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdHBvcCcsIHRoaXMucHJvcHMub25Qb3N0UG9wKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcyk7XG4gICAgY29uc3QgcGFnZXMgPSB0aGlzLnJvdXRlcyA/IHRoaXMucm91dGVzLm1hcCgocm91dGUpID0+IHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSwgdGhpcykpIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLW5hdmlnYXRvciB7IC4uLmF0dHJzIH0gcmVmPXsobmF2aSkgPT4geyB0aGlzLl9uYXZpID0gbmF2aTsgfX0+XG4gICAgICAgIHtwYWdlc31cbiAgICAgIDwvb25zLW5hdmlnYXRvcj5cbiAgICApO1xuICB9XG59XG5cbk5hdmlnYXRvci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSByZW5kZXJQYWdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCB0cnVlXG4gICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgY3VycmVudCByb3V0ZSBvYmplY3QgYXMgYSBwYXJhbWV0ZXIgYW5kIHJldHVybnMgYSBSZWFjdCBjb21wb25lbnQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVyUGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBuYW1lIGluaXRpYWxSb3V0ZVN0YWNrXG4gICAqIEB0eXBlIGFycmF5XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgYXJyYXkgY29udGFpbnMgdGhlIGluaXRpYWwgcm91dGVzIGZyb20gdGhlIE5hdmlnYXRvcixcbiAgICogIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgdGhlIGluaXRpYWwgcGFnZXMgaW4gdGhlIGByZW5kZXJQYWdlYCBtZXRob2QuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbml0aWFsUm91dGVTdGFjazogUHJvcFR5cGVzLmFycmF5LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbml0aWFsUm91dGVcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgYXJyYXkgY29udGFpbnMgdGhlIGluaXRpYWwgcm91dGUgb2YgdGhlIG5hdmlnYXRvcixcbiAgICogIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgdGhlIGluaXRpYWwgcGFnZXMgaW4gdGhlXG4gICAqICByZW5kZXJQYWdlIG1ldGhvZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGluaXRpYWxSb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVQdXNoXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgYSBwYWdlIGlzIHB1c2hlZC4gSXQgZ2V0cyBhbiBldmVudCBvYmplY3Qgd2l0aCByb3V0ZSBpbmZvcm1hdGlvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZVB1c2g6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RQdXNoXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciBhIHBhZ2UgaXMgcHVzaGVkLiBJdCBnZXRzIGFuIGV2ZW50IG9iamVjdCB3aXRoIHJvdXRlIGluZm9ybWF0aW9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFB1c2g6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVBvcFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIGEgcGFnZSBpcyBwb3BwZWQuIEl0IGdldHMgYW4gZXZlbnQgb2JqZWN0IHdpdGggcm91dGUgaW5mb3JtYXRpb24uWy9lbl1cbiAgICovXG4gIG9uUHJlUG9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0UG9wXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciBhIHBhZ2UgaXMgcG9wcGVkLiBJdCBnZXRzIGFuIGV2ZW50IG9iamVjdCB3aXRoIHJvdXRlIGluZm9ybWF0aW9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFBvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dXG4gICAqICAgICBBbmltYXRpb24gbmFtZS4gQXZhaWxhYmxlIGFuaW1hdGlvbnMgYXJlIGBcInNsaWRlXCJgLCBgXCJsaWZ0XCJgLCBgXCJmYWRlXCJgIGFuZCBgXCJub25lXCJgLlxuICAgKiAgICAgVGhlc2UgYXJlIHBsYXRmb3JtIGJhc2VkIGFuaW1hdGlvbnMuIEZvciBmaXhlZCBhbmltYXRpb25zLCBhZGQgYFwiLWlvc1wiYCBvciBgXCItbWRcImAgc3VmZml4IHRvIHRoZSBhbmltYXRpb24gbmFtZS4gRS5nLiBgXCJsaWZ0LWlvc1wiYCwgYFwibGlmdC1tZFwiYC4gRGVmYXVsdHMgdmFsdWVzIGFyZSBgXCJzbGlkZS1pb3NcImAgYW5kIGBcImZhZGUtbWRcImAuXG4gICAqICAgWy9lbl1cbiAgICogICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZWFibGVcbiAgICogQHR5cGUgYm9vbHxzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUVuYWJsZXMgc3dpcGUtdG8tcG9wIGZ1bmN0aW9uYWxpdHkgZm9yIGlPUy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzd2lwZWFibGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIHN3aXBlUG9wXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1PcHRpb25hbCBmdW5jdGlvbiBjYWxsZWQgb24gc3dpcGUtdG8tcG9wLiBJZiBwcm92aWRlZCwgbXVzdCBwZXJmb3JtIGEgcG9wUGFnZSB3aXRoIHRoZSBnaXZlbiBvcHRpb25zIG9iamVjdC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzd2lwZVBvcDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgTk9PUCA9ICgpID0+IG51bGw7XG5cbk5hdmlnYXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uUG9zdFB1c2g6IE5PT1AsXG4gIG9uUHJlUHVzaDogTk9PUCxcbiAgb25QcmVQb3A6IE5PT1AsXG4gIG9uUG9zdFBvcDogTk9PUFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdG9yO1xuIiwiaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSAnLi9CYXNlRGlhbG9nLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtbW9kYWxcbiAqIEBjYXRlZ29yeSBkaWFsb2dcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvbW9kYWxcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogICBBIG1vZGFsIGNvbXBvbmVudCBjb3ZlcnMgdGhlIGVudGlyZSBzY3JlZW4uIFVuZGVybHlpbmcgY29tcG9uZW50cyBhcmUgbm90XG4gKiAgIHN1YmplY3QgdG8gYW55IGV2ZW50cyB3aGlsZSB0aGUgbW9kYWwgY29tcG9uZW50IGlzIHNob3duLlxuICpcbiAqICAgVGhpcyBjb21wb25lbnQgY2FuIGJlIHVzZWQgdG8gYmxvY2sgdXNlciBpbnB1dCB3aGlsZSBzb21lIG9wZXJhdGlvbiBpc1xuICogICBydW5uaW5nIG9yIHRvIHNob3cgc29tZSBpbmZvcm1hdGlvbiB0byB0aGUgdXNlci5cbiAqIFsvZW5dXG4gKiBbamFdXG4gKiAgIOeUu+mdouWFqOS9k+OCkuODnuOCueOCr+OBmeOCi+ODouODvOODgOODq+eUqOOCs+ODs+ODneODvOODjeODs+ODiOOBp+OBmeOAguS4i+WBtOOBq+OBguOCi+OCs+ODs+ODneODvOODjeODs+ODiOOBr+OAgVxuICogICDjg6Ljg7zjg4Djg6vjgYzooajnpLrjgZXjgozjgabjgYTjgovplpPjga/jgqTjg5njg7Pjg4jpgJrnn6XjgYzooYzjgo/jgozjgb7jgZvjgpNcbiAqIFsvamFdXG4gKiBAZXhhbXBsZVxuICA8UGFnZT5cbiAgICA8ZGl2PiBQYWdlIGNvbnRlbnQgPC9kaXY+XG5cbiAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30+XG4gICAgICBMb2FkaW5nIC4uLlxuICAgIDwvTW9kYWw+XG4gIDwvUGFnZT5cbiAqL1xuY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlRGlhbG9nIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLW1vZGFsJztcbiAgfVxufVxuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25cbiAgICogQHR5cGUge1N0cmluZ31cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXVxuICAgKiAgICAgQW5pbWF0aW9uIG5hbWUuIEF2YWlsYWJsZSBhbmltYXRpb25zIGFyZSBgXCJmYWRlXCJgLCBgXCJsaWZ0XCJgIGFuZCBgXCJub25lXCJgLlxuICAgKiAgIFsvZW5dXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnZmFkZScsICdsaWZ0J10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25PcHRpb25zXG4gICAqIEB0eXBlIG9iamVjdFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBtb2RhbCBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZVNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBtb2RhbCBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgdGhlIG1vZGFsIGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZUhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciB0aGUgbW9kYWwgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdEhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc09wZW5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1XaGVuIGB0cnVlYCB0aGUgbW9kYWwgd2lsbCBzaG93IGl0c2VsZi5bL2VuXVxuICAgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGFuaW1hdGlvbjogJ25vbmUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXBhZ2VcbiAqIEBjYXRlZ29yeSBwYWdlXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3BhZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogICBUaGlzIGNvbXBvbmVudCBpcyBoYW5kbGluZyB0aGUgZW50aXJlIHBhZ2UuIFRoZSBjb250ZW50IGNhbiBiZSBzY3JvbGxlZC5cbiAqXG4gKiAgIFRvIGFkZCBmaXhlZCBjb250ZW50IHRoYXQgZG9lc24ndCBzY3JvbGwgd2l0aCB0aGUgcGFnZSB0aGUgYHJlbmRlckZpeGVkYCBwcm9wIGlzIHVzZWQuXG4gKlxuICogICBBIHBhZ2UgdG9vbGJhciBjYW4gYmUgYWRkZWQgd2l0aCB0aGUgYHJlbmRlclRvb2xiYXJgIHByb3AuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICA8UGFnZVxuICAgIHJlbmRlckZpeGVkPXsoKSA9PiA8RmFiPjwvRmFiPn1cbiAgICByZW5kZXJUb29sYmFyPXsoKSA9PiA8VG9vbGJhcj4uLi48L1Rvb2xiYXI+fVxuICAgIGNvbnRlbnRTdHlsZT17e3BhZGRpbmc6IDQwfX0+XG4gICAgPGRpdj4gUGFnZSBjb250ZW50IDwvZGl2PlxuICA8L1BhZ2U+XG4gKi9cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG5hbWUsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wc1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tuYW1lXShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uSW5pdCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uSW5pdCcpO1xuICAgIHRoaXMub25TaG93ID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25TaG93Jyk7XG4gICAgdGhpcy5vbkhpZGUgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvbkhpZGUnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5pdCcsIHRoaXMub25Jbml0KTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cnLCB0aGlzLm9uU2hvdyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgdGhpcy5vbkhpZGUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25EZXZpY2VCYWNrQnV0dG9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIG5vZGUub25EZXZpY2VCYWNrQnV0dG9uID0gdGhpcy5wcm9wcy5vbkRldmljZUJhY2tCdXR0b247XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uSW5maW5pdGVTY3JvbGwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgbm9kZS5vbkluZmluaXRlU2Nyb2xsID0gdGhpcy5wcm9wcy5vbkluZmluaXRlU2Nyb2xsO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLm9uRGV2aWNlQmFja0J1dHRvbiA9IG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gICAgaWYgKG5ld1Byb3BzLm9uSW5maW5pdGVTY3JvbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykub25JbmZpbml0ZVNjcm9sbCA9IG5ld1Byb3BzLm9uSW5maW5pdGVTY3JvbGw7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5pdCcsIHRoaXMub25Jbml0KTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Nob3cnLCB0aGlzLm9uU2hvdyk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdoaWRlJywgdGhpcy5vbkhpZGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvb2xiYXIgPSB0aGlzLnByb3BzLnJlbmRlclRvb2xiYXIodGhpcyk7XG4gICAgY29uc3QgYm90dG9tVG9vbGJhciA9IHRoaXMucHJvcHMucmVuZGVyQm90dG9tVG9vbGJhcih0aGlzKTtcbiAgICBjb25zdCBtb2RhbCA9IHRoaXMucHJvcHMucmVuZGVyTW9kYWwodGhpcyk7XG4gICAgY29uc3QgZml4ZWQgPSB0aGlzLnByb3BzLnJlbmRlckZpeGVkKHRoaXMpO1xuXG4gICAgY29uc3Qge2NvbnRlbnRTdHlsZSwgLi4ub3RoZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcywgb3RoZXIpO1xuXG4gICAgcmV0dXJuIDxvbnMtcGFnZSB7Li4uYXR0cnN9ID5cbiAgICAgIHt0b29sYmFyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2VfX2JhY2tncm91bmQnPiA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50JyBzdHlsZT17Y29udGVudFN0eWxlfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlX19leHRyYScgc3R5bGU9e3t6SW5kZXg6IDEwMDAxfX0+XG4gICAgICAgIHttb2RhbH1cbiAgICAgIDwvZGl2PlxuICAgICAge2ZpeGVkfVxuICAgICAge2JvdHRvbVRvb2xiYXJ9XG4gICAgPC9vbnMtcGFnZT47XG4gIH1cbn1cblxuUGFnZS5wcm9wVHlwZXMgPSB7XG5cbiAgLyoqXG4gICAqIEBuYW1lIGNvbnRlbnRTdHlsZVxuICAgKiBAdHlwZSBPYmplY3RcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IHRoZSBzdHlsZSBvZiB0aGUgcGFnZSBjb250ZW50LiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqL1xuICBjb250ZW50U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuIE9wdGlvbmFsLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlck1vZGFsXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gcmVuZGVycyBhIG1vZGFsIHRoYXQgbWFza3MgY3VycmVudCBzY3JlZW4uWy9lbl1cbiAgICovXG4gIHJlbmRlck1vZGFsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyVG9vbGJhclxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgdGhlIHRvb2xiYXIgb2YgdGhlIHBhZ2UuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVyVG9vbGJhcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlckJvdHRvbVRvb2xiYXJcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgdGhlIGJvdHRvbSB0b29sYmFyIG9mIHRoZSBwYWdlLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlckJvdHRvbVRvb2xiYXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW5kZXJGaXhlZFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gcmVuZGVycyBmaXhlZCBjb250ZW50IG9mIHRoZSBwYWdlLiBDYW4gYmUgdXNlZCB0byByZW5kZXIgYEZhYmAgb3IgYFNwZWVkRGlhbGAgY29tcG9uZW50cyBhcyB3ZWxsIGFzIG90aGVyIGNvbXBvbmVudHMgdGhhdCBkb24ndCBzY3JvbGwgd2l0aCB0aGUgcGFnZS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZW5kZXJGaXhlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uSW5pdFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBcdEZpcmVkIHJpZ2h0IGFmdGVyIHRoZSBwYWdlIGlzIGF0dGFjaGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Jbml0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25TaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBGaXJlZCByaWdodCBhZnRlciB0aGUgcGFnZSBpcyBzaG93bi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uSGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgYWZ0ZXIgdGhlIHBhZ2UgaXMgaGlkZGVuLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25JbmZpbml0ZVNjcm9sbFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgd2hlbiBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS4gSXQgZ2V0cyBhICdkb25lJyBjYWxsYmFjayAoZmlyc3QgYXJndW1lbnQpIHRoYXQgbXVzdCBiZSBjYWxsZWQgd2hlbiBpdCdzIGZpbmlzaGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25JbmZpbml0ZVNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgTk9PUCA9ICgpID0+IG51bGw7XG5cblBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICByZW5kZXJUb29sYmFyOiBOT09QLFxuICByZW5kZXJCb3R0b21Ub29sYmFyOiBOT09QLFxuICByZW5kZXJNb2RhbDogTk9PUCxcbiAgcmVuZGVyRml4ZWQ6IE5PT1Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJpbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuL0Jhc2VEaWFsb2cuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXBvcG92ZXJcbiAqIEBjYXRlZ29yeSBkaWFsb2dcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcG9wb3ZlclxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1cbiAqICAgICBBIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGEgcG9wb3ZlciBuZXh0IHRvIGFuIGVsZW1lbnQuIFRoZSBwb3BvdmVyIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgZXh0cmEgaW5mb3JtYXRpb24gYWJvdXQgYSBjb21wb25lbnQgb3IgYSB0b29sdGlwLlxuICogICAgQW5vdGhlciBjb21tb24gd2F5IHRvIHVzZSB0aGUgcG9wb3ZlciBpcyB0byBkaXNwbGF5IGEgbWVudSB3aGVuIGEgYnV0dG9uIG9uIHRoZSBzY3JlZW4gaXMgdGFwcGVkLlxuICogICBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFBhZ2U+XG4gKiAgPEJ1dHRvblxuICogICAgcmVmPXsoYnRuKSA9PiB7IHRoaXMuYnRuID0gYnRuOyB9fVxuICogICAgb25DbGljaz17KCkgPT5cbiAqICAgICAgdGhpcy5zZXRTdGF0ZSh7dGFyZ2V0OiB0aGlzLmJ0biwgaXNPcGVuOiB0cnVlfSlcbiAqICAgIH1cbiAqICAvPlxuICAgIDxQb3BvdmVyXG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoe2lzT3BlbjogZmFsc2V9KX1cbiAgICAgIGdldFRhcmdldD17KCkgPT4gdGhpcy5zdGF0ZS50YXJnZXR9XG4gICAgPlxuICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG9wYWNpdHk6IDAuNX19PlxuICAgICAgICA8cD5UaGlzIGlzIGEgcG9wb3ZlciE8L3A+XG4gICAgICAgICAgPHA+PHNtYWxsPkNsaWNrIHRoZSBiYWNrZ3JvdW5kIHRvIHJlbW92ZSB0aGUgcG9wb3Zlci48L3NtYWxsPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAqIDwvUGFnZT5cbiAqL1xuY2xhc3MgUG9wb3ZlciBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtcG9wb3Zlcic7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLmdldFRhcmdldCgpO1xuICAgIHRhcmdldCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5maXJzdENoaWxkLnNob3codGFyZ2V0KTtcbiAgfVxufVxuXG5Qb3BvdmVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGdldFRhcmdldFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgdHJ1ZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHJldHVybiByZWFjdCBjb21wb25lbnQgb3IgYSBkb21ub2RlIHRoYXQgdGhlIHBvcG92ZXIgaXMgc2hvd2luZyBvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGdldFRhcmdldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2FuY2VsXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBvbmx5IGlmIGlzQ2FuY2VsYWJsZSBpcyB0cnVlLiBJdCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0YXBwaW5nIHRoZSBiYWNrZ3JvdW5kIG9yIGJ5IHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIGRldmljZXMuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzT3BlblxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCB0cnVlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBvcGVuIGFuZCBzaG93bi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgaXNDYW5jZWxhYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjYW5jZWxhYmxlIG9yIG5vdC5cbiAgICogIEEgY2FuY2VsYWJsZSBkaWFsb2cgd2lsbCBjYWxsIG9uQ2FuY2VsICB3aGVuIHRhcHBpbmcgdGhlIGJhY2tncm91bmQgb3Igb3IgIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIGRldmljZXNcbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzQ2FuY2VsYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzRGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgVGhlIGFuaW1hdGlvbiB1c2VkIHdoZW4gc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBkaWFsb2cuIENhbiBiZSBlaXRoZXIgYFwibm9uZVwiYCBvciBgXCJkZWZhdWx0XCJgLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBkaWFsb2cuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1hc2tDb2xvclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbG9yIG9mIHRoZSBiYWNrZ3JvdW5kIG1hc2suIERlZmF1bHQgaXMgXCJyZ2JhKDAsIDAsIDAsIDAuMilcIlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1hc2tDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGJlZm9yZSB0aGUgYWxlcnQgZGlhbG9nIGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGFsZXJ0IGRpYWxvZyBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgdGhlIGFsZXJ0IGRpYWxvZyBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0SGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGFsZXJ0IGRpYWxvZyBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXByb2dyZXNzLWJhclxuICogQGNhdGVnb3J5IHZpc3VhbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9wcm9ncmVzc1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoZSBjb21wb25lbnQgaXMgdXNlZCB0byBkaXNwbGF5IGEgbGluZWFyIHByb2dyZXNzIGJhci4gSXQgY2FuIGVpdGhlciBkaXNwbGF5IGEgcHJvZ3Jlc3MgYmFyIHRoYXQgc2hvd3MgdGhlIHVzZXIgaG93IG11Y2ggb2YgYSB0YXNrIGhhcyBiZWVuIGNvbXBsZXRlZC4gSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIHBlcmNlbnRhZ2UgaXMgbm90IGtub3duIGl0IGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYW4gYW5pbWF0ZWQgcHJvZ3Jlc3MgYmFyIHNvIHRoZSB1c2VyIGNhbiBzZWUgdGhhdCBhbiBvcGVyYXRpb24gaXMgaW4gcHJvZ3Jlc3MuICBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICo8UHJvZ3Jlc3NCYXIgdmFsdWU9ezU1fSBzZWNvbmRhcnlWYWx1ZT17ODd9IC8+XG4gKjxQcm9ncmVzc0JhciBpbmRldGVybWluYXRlIC8+XG4gKi9cbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1wcm9ncmVzcy1iYXInO1xuICB9XG59XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHByb2dyZXNzIGluZGljYXRvci5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VycmVudCBwcm9ncmVzcy4gU2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgc2Vjb25kYXJ5VmFsdWVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1cnJlbnQgc2Vjb25kYXJ5IHByb2dyZXNzLiBTaG91bGQgYmUgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHNlY29uZGFyeVZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbmRldGVybWluYXRlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBhbiBpbmZpbml0ZSBsb29waW5nIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1wcm9ncmVzcy1jaXJjdWxhclxuICogQGNhdGVnb3J5IHZpc3VhbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9wcm9ncmVzc1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoaXMgY29tcG9uZW50IGRpc3BsYXlzIGEgY2lyY3VsYXIgcHJvZ3Jlc3MgaW5kaWNhdG9yLiBJdCBjYW4gZWl0aGVyIGJlIHVzZWQgdG8gc2hvdyBob3cgbXVjaCBvZiBhIHRhc2sgaGFzIGJlZW4gY29tcGxldGVkIG9yIHRvIHNob3cgYSBsb29waW5nIGFuaW1hdGlvbiB0byBpbmRpY2F0ZSB0aGF0IGFuIG9wZXJhdGlvbiBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKjxQcm9ncmVzc0NpcmN1bGFyIHZhbHVlPXs1NX0gc2Vjb25kYXJ5VmFsdWU9ezg3fSAvPlxuICo8UHJvZ3Jlc3NDaXJjdWxhciBpbmRldGVybWluYXRlIC8+XG4gKi9cbmNsYXNzIFByb2dyZXNzQ2lyY3VsYXIgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXByb2dyZXNzLWNpcmN1bGFyJztcbiAgfVxufVxuXG5Qcm9ncmVzc0NpcmN1bGFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHByb2dyZXNzIGluZGljYXRvci5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VycmVudCBwcm9ncmVzcy4gU2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgc2Vjb25kYXJ5VmFsdWVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1cnJlbnQgc2Vjb25kYXJ5IHByb2dyZXNzLiBTaG91bGQgYmUgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHNlY29uZGFyeVZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbmRldGVybWluYXRlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBhbiBpbmZpbml0ZSBsb29waW5nIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NDaXJjdWxhcjtcbiIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXB1bGwtaG9va1xuICogQGNhdGVnb3J5IGNvbnRyb2xcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcHVsbC1ob29rXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gIENvbXBvbmVudCB0aGF0IGFkZHMgKipQdWxsIHRvIHJlZnJlc2gqKiBmdW5jdGlvbmFsaXR5IHRvIGFuIGA8b25zLXBhZ2U+YCBlbGVtZW50LlxuICogICAgIEl0IGNhbiBiZSB1c2VkIHRvIHBlcmZvcm0gYSB0YXNrIHdoZW4gdGhlIHVzZXIgcHVsbHMgZG93biBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLiBBIGNvbW1vbiB1c2FnZSBpcyB0byByZWZyZXNoIHRoZSBkYXRhIGRpc3BsYXllZCBpbiBhIHBhZ2UuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcblxuICAgIHJldHVybiAoXG4gICAgICA8UHVsbEhvb2sgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uTG9hZD17dGhpcy5vbkxvYWR9PlxuICAgICAge1xuICAgICAgICh0aGlzLnN0YXRlLnB1bGxIb29rU3RhdGUgPT09ICdpbml0aWFsJykgP1xuICAgICAgICA8c3BhbiA+XG4gICAgICAgICAgPEljb24gc2l6ZT17MzV9IHNwaW49e2ZhbHNlfSBpY29uPSdpb24tYXJyb3ctZG93bi1hJyAvPlxuICAgICAgICAgIFB1bGwgZG93biB0byByZWZyZXNoXG4gICAgICAgIDwvc3Bhbj4gOlxuICAgICAgICAodGhpcy5zdGF0ZS5wdWxsSG9va1N0YXRlID09PSAncHJlYWN0aW9uJykgP1xuICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgIDxJY29uIHNpemU9ezM1fSBzcGluPXtmYWxzZX0gaWNvbj0naW9uLWFycm93LXVwLWEnIC8+XG4gICAgICAgICAgIFJlbGVhc2UgdG8gcmVmcmVzaFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDpcbiAgICAgICAgPHNwYW4+PEljb24gc2l6ZT17MzV9IHNwaW49e3RydWV9IGljb249J2lvbi1sb2FkLWQnPjwvSWNvbj4gTG9hZGluZyBkYXRhLi4uPC9zcGFuPlxuICAgIH1cbiAgICAgIDwvUHVsbEhvb2s+XG4gICAgKTtcbiAqL1xuY2xhc3MgUHVsbEhvb2sgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VzdGF0ZScsIHRoaXMub25DaGFuZ2UpO1xuICAgIHRoaXMuX3B1bGxIb29rLm9uQWN0aW9uID0gdGhpcy5wcm9wcy5vbkxvYWQgfHwgbnVsbDtcbiAgICB0aGlzLl9wdWxsSG9vay5vblB1bGwgPSB0aGlzLnByb3BzLm9uUHVsbCB8fCBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlc3RhdGUnLCB0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkxvYWQgIT09IHByZXZQcm9wcy5vbkxvYWQpIHtcbiAgICAgIHRoaXMuX3B1bGxIb29rLm9uQWN0aW9uID0gdGhpcy5wcm9wcy5vbkxvYWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uUHVsbCAhPT0gcHJldlByb3BzLm9uUHVsbCkge1xuICAgICAgdGhpcy5fcHVsbEhvb2sub25QdWxsID0gdGhpcy5wcm9wcy5vblB1bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzKTtcbiAgICByZXR1cm4gPG9ucy1wdWxsLWhvb2sgeyAuLi5hdHRycyB9IHJlZj17KHB1bGxIb29rKSA9PiB7IHRoaXMuX3B1bGxIb29rID0gcHVsbEhvb2s7IH19IC8+O1xuICB9XG59XG5cblB1bGxIb29rLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgd2hlbiB0aGUgcHVsbCBob29rIGlubmVyIHN0YXRlIGlzIGNoYW5nZWQuIFRoZSBzdGF0ZSBjYW4gYmUgZWl0aGVyIFwiaW5pdGlhbFwiLCBcInByZWFjdGlvblwiIG9yIFwiYWN0aW9uXCJbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uTG9hZFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIHB1bGwgaG9vayBpcyBpbiB0aGUgYGFjdGlvbmAgc3RhdGVbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblB1bGxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUhvb2sgY2FsbGVkIHdoZW5ldmVyIHRoZSB1c2VyIHB1bGxzIHRoZSBlbGVtZW50LiBJdCBnZXRzIHRoZSBwdWxsZWQgZGlzdGFuY2UgcmF0aW8gKHNjcm9sbCAvIGhlaWdodCkgYW5kIGFuIGFuaW1hdGlvbk9wdGlvbnMgb2JqZWN0IGFzIGFyZ3VtZW50cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblB1bGw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBXaGVuIHNldCB0byB0cnVlLCB0aGUgcHVsbCBob29rIHdpbGwgYmUgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBoZWlnaHRcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGUgaGVpZ2h0IG9mIHRoZSBwdWxsIGhvb2sgaW4gcGl4ZWxzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA2NC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHRocmVzaG9sZEhlaWdodFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoZSB0aHJlc2hvbGQgaGVpZ2h0IG9mIHRoZSBwdWxsIGhvb2sgaW4gcGl4ZWxzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA5Ni5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB0aHJlc2hvbGRIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGZpeGVkQ29udGVudFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHNldCB0byB0cnVlLCB0aGUgY29udGVudCBvZiB0aGUgcGFnZSB3aWxsIG5vdCBtb3ZlIHdoZW4gcHVsbGluZy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBmaXhlZENvbnRlbnQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWxsSG9vaztcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1yYWRpb1xuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvaW5wdXRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogIEEgcmFkaW8gYnV0dG9uIGVsZW1lbnQuIFRoZSBjb21wb25lbnQgd2lsbCBhdXRvbWF0aWNhbGx5IHJlbmRlciBhcyBhIE1hdGVyaWFsIERlc2lnbiByYWRpbyBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzLlxuICpcbiAqICBNb3N0IGF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYSBub3JtYWwgYDxpbnB1dCB0eXBlPVwicmFkaW9cIj5gIGVsZW1lbnQgY2FuIGFsc28gYmUgdXNlZCBvbiB0aGUgYDxSYWRpbz5gIGNvbXBvbmVudC5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8UmFkaW9cbiAqICAgb25DaGFuZ2U9e2V2ZW50ID0+IHsgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWR9KX0gfVxuICogICBtb2RpZmllcj0nbWF0ZXJpYWwnIC8+XG4gKi9cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQmFzZUlucHV0IHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXJhZGlvJztcbiAgfVxuXG4gIGdldCBFVkVOVF9UWVBFUygpIHtcbiAgICByZXR1cm4gWydjaGFuZ2UnXTtcbiAgfVxufVxuXG5SYWRpby5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSByYWRpbyBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgcmFkaW8gYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQ2FsbGVkIHdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBzdGF0ZSBjaGFuZ2VzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBWYWx1ZSBvZiB0aGUgcmFkaW8gYnV0dG9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBjaGVja2VkXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSByYWRpbyBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlucHV0SWRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIFwiaWRcIiBhdHRyaWJ1dGUgb2YgdGhlIGlubmVyIGA8aW5wdXQ+YCBlbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHVzaW5nIDxsYWJlbCBmb3I9XCIuLi5cIj4gZWxlbWVudHMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5wdXRJZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VJbnB1dCBmcm9tICcuL0Jhc2VJbnB1dC5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtcmFuZ2VcbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3JhbmdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgUmFuZ2UgaW5wdXQgY29tcG9uZW50LlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxSYW5nZSBtb2RpZmllcj1cIm1hdGVyaWFsXCJcbiAqICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gKiAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpfSl9XG4gKiAgIC8+XG4gKi9cbmNsYXNzIFJhbmdlIGV4dGVuZHMgQmFzZUlucHV0IHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXJhbmdlJztcbiAgfVxufVxuXG5SYW5nZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGNoYW5nZXMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB2YWx1ZVxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXJyZW50IHZhbHVlIG9mIHRoZSBlbGVtZW50LlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHRydWUsIHRoZSBlbGVtZW50IGlzIGRpc2FibGVkLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1yaXBwbGVcbiAqIEBjYXRlZ29yeSB2aXN1YWxcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcmlwcGxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgQWRkcyBhIE1hdGVyaWFsIERlc2lnbiBcInJpcHBsZVwiIGVmZmVjdCB0byBhbiBlbGVtZW50LlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgIDxkaXYgY2xhc3NOYW1lPSdteUxpc3QnPlxuICAgICA8UmlwcGxlIGNvbG9yPSdyZWQnIC8+XG4gICA8L2Rpdj5cbiAqL1xuY2xhc3MgUmlwcGxlIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1yaXBwbGUnO1xuICB9XG59XG5cblJpcHBsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBjb2xvclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbG9yIG9mIHRoZSByaXBwbGUgZWZmZWN0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBiYWNrZ3JvdW5kXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29sb3Igb2YgdGhlIGJhY2tncm91bmQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJpcHBsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1uYXZpZ2F0b3JcbiAqIEBjYXRlZ29yeSBuYXZpZ2F0aW9uXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL25hdmlnYXRvclxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoaXMgY29tcG9uZW50IGlzIHJlc3BvbnNpYmxlIGZvciBwYWdlIHRyYW5zaXRpb25pbmcgYW5kIG1hbmFnaW5nIHRoZSBwYWdlcyBvZiB5b3VyIE9uc2VuVUkgYXBwbGljYXRpb24uIEluIG9yZGVyIHRvIG1hbmFnZSB0byBkaXNwbGF5IHRoZSBwYWdlcywgdGhlICBuYXZpZ2F0b3IgbmVlZHMgdG8gZGVmaW5lIHRoZSBgcmVuZGVyUGFnZWAgbWV0aG9kLCB0aGF0IHRha2VzIGFuIHJvdXRlIGFuZCBhIG5hdmlnYXRvciBhbmQgIGNvbnZlcnRzIGl0IHRvIGFuIHBhZ2UuWy9lbl1cbiAqIFtqYV1bL2phXVxuICovXG5jbGFzcyBSb3V0ZXJOYXZpZ2F0b3IgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuY2FuY2VsVXBkYXRlID0gZmFsc2U7XG4gICAgdGhpcy5wYWdlID0gbnVsbDtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG5hbWUsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wc1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tuYW1lXShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uUHJlUHVzaCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUHJlUHVzaCcpO1xuICAgIHRoaXMub25Qb3N0UHVzaCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUG9zdFB1c2gnKTtcbiAgICB0aGlzLm9uUHJlUG9wID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVQb3AnKTtcbiAgICB0aGlzLm9uUG9zdFBvcCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUG9zdFBvcCcpO1xuICB9XG5cbiAgdXBkYXRlKGNiKSB7XG4gICAgaWYgKCF0aGlzLmNhbmNlbFVwZGF0ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7fSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlc2V0UGFnZVN0YWNrXG4gICAqIEBzaWduYXR1cmUgcmVzZXRQYWdlU3RhY2socm91dGUsIG9wdGlvbnMgPSB7fSlcbiAgICogQHBhcmFtIHtBcnJheX0gW3JvdXRlc11cbiAgICogICBbZW5dIFRoZSByb3V0ZXMgdGhhdCB0aGUgbmF2aWdhdG9yIHNob3VsZCBiZSByZXNldCB0by5bL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl1Qcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFJlc2V0cyB0aGUgbmF2aWdhdG9yIHRvIHRoZSBjdXJyZW50IHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcmVzZXRQYWdlU3RhY2socm91dGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdKSk7XG4gICAgICAgIHRoaXMudXBkYXRlKHJlc29sdmUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl9uYXZpLl9wdXNoUGFnZShvcHRpb25zLCB1cGRhdGUpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZXMgPSByb3V0ZXMubWFwKHJvdXRlID0+IHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBwdXNoUGFnZVxuICAgKiBAc2lnbmF0dXJlIHB1c2hQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtyb3V0ZXNdXG4gICAqICAgW2VuXSBUaGUgcm91dGVzIHRoYXQgdGhlIG5hdmlnYXRvciBzaG91bGQgcHVzaCB0by5bL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl0gUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgcmV2ZWFsZWQgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mmI7jgonjgYvjgavjgZfjgZ/jg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXSBQdXNoZXMgYSBwYWdlIHRvIHRoZSBwYWdlIHN0YWNrWy9lbl1cbiAgICogICBbamFdWy9qYV1cbiAgICovXG4gIHB1c2hQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlKTtcbiAgICAgICAgdGhpcy51cGRhdGUocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX3B1c2hQYWdlKG9wdGlvbnMsIHVwZGF0ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpLl9pc1J1bm5pbmc7XG4gIH1cblxuICAvKlxuICAgKiBAbWV0aG9kIHJlcGxhY2VQYWdlXG4gICAqIEBzaWduYXR1cmUgcmVwbGFjZVBhZ2UocGFnZSwgW29wdGlvbnNdKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl1Qcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBuZXcgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mlrDjgZfjgYTjg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXVJlcGxhY2VzIHRoZSBjdXJyZW50IHRvcCBwYWdlIHdpdGggdGhlIHNwZWNpZmllZCBvbmUuIEV4dGVuZHMgYHB1c2hQYWdlKClgIHBhcmFtZXRlcnMuWy9lbl1cbiAgICogICBbamFd54++5Zyo6KGo56S65Lit44Gu44Oa44O844K444KS44KS5oyH5a6a44GX44Gf44Oa44O844K444Gr572u44GN5o+b44GI44G+44GZ44CCWy9qYV1cbiAgICovXG4gIHJlcGxhY2VQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZShyZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fbmF2aS5fcHVzaFBhZ2Uob3B0aW9ucywgdXBkYXRlKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBhZ2VzLnNwbGljZSh0aGlzLnBhZ2VzLmxlbmd0aCAtIDIsIDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBwb3BQYWdlXG4gICAqIEBzaWduYXR1cmUgcG9wUGFnZShyb3V0ZSwgb3B0aW9ucyA9IHt9KVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl0gUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgcmV2ZWFsZWQgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mmI7jgonjgYvjgavjgZfjgZ/jg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXSBQb3BzIGEgcGFnZSBvdXQgb2YgdGhlIHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcG9wUGFnZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcy5wb3AoKTtcbiAgICAgICAgdGhpcy51cGRhdGUocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX3BvcFBhZ2Uob3B0aW9ucywgdXBkYXRlKTtcbiAgfVxuXG4gIF9vbkRldmljZUJhY2tCdXR0b24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucG9wUGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5jYWxsUGFyZW50SGFuZGxlcigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9uYXZpO1xuXG4gICAgdGhpcy5jYW5jZWxVcGRhdGUgPSBmYWxzZTtcblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlcHVzaCcsIHRoaXMub25QcmVQdXNoKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bvc3RwdXNoJywgdGhpcy5vblBvc3RQdXNoKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZXBvcCcsIHRoaXMub25QcmVQb3ApO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHBvcCcsIHRoaXMub25Qb3N0UG9wKTtcblxuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbiBSb3V0ZXJOYXZpZ2F0b3IgdGhlIHByb3BlcnR5IHJvdXRlQ29uZmlnIG5lZWRzIHRvIGJlIHNldCcpO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVDb25maWcgPSB0aGlzLnByb3BzLnJvdXRlQ29uZmlnO1xuXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMucm91dGVDb25maWcucm91dGVTdGFjay5tYXAoXG4gICAgICAocm91dGUpID0+IHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSwgdGhpcylcbiAgICApO1xuXG4gICAgbm9kZS5zd2lwZU1heCA9IHRoaXMucHJvcHMuc3dpcGVQb3A7XG4gICAgbm9kZS5vbkRldmljZUJhY2tCdXR0b24gPSB0aGlzLnByb3BzLm9uRGV2aWNlQmFja0J1dHRvbiB8fCB0aGlzLl9vbkRldmljZUJhY2tCdXR0b24uYmluZCh0aGlzKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgY29uc3QgcHJvY2Vzc1N0YWNrID0gWy4uLm5ld1Byb3BzLnJvdXRlQ29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX25hdmkub25EZXZpY2VCYWNrQnV0dG9uID0gbmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpeCBmb3IgUmVkdXggVGltZXRyYXZlbC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5wcm9jZXNzU3RhY2subGVuZ3RoIDwgbmV3UHJvcHMucm91dGVDb25maWcucHJvY2Vzc1N0YWNrLmxlbmd0aCAmJlxuICAgICAgdGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLmxlbmd0aCA+IG5ld1Byb3BzLnJvdXRlQ29uZmlnLnJvdXRlU3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3NTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7dHlwZSwgcm91dGUsIG9wdGlvbnN9ID0gcHJvY2Vzc1N0YWNrWzBdO1xuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgdGhpcy5wdXNoUGFnZShyb3V0ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BvcCc6XG4gICAgICAgICAgdGhpcy5wb3BQYWdlKG9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGFnZVN0YWNrKHJvdXRlLCBvcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBhZ2VTdGFjayhbcm91dGVdLCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgIHRoaXMucmVwbGFjZVBhZ2Uocm91dGUsIG9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0eXBlICR7dHlwZX0gaW4gcHJvY2Vzc1N0YWNrYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX25hdmk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVwdXNoJywgdGhpcy5vblByZVB1c2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdHB1c2gnLCB0aGlzLm9uUG9zdFB1c2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlcG9wJywgdGhpcy5vblByZVBvcCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0cG9wJywgdGhpcy5vblBvc3RQb3ApO1xuICAgIHRoaXMuY2FuY2VsVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG9ucy1uYXZpZ2F0b3IgeyAuLi5hdHRycyB9IHJlZj17KG5hdmkpID0+IHsgdGhpcy5fbmF2aSA9IG5hdmk7IH19PlxuICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLm1hcChyb3V0ZSA9PiB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUpKX1cbiAgICAgICAge3RoaXMucGFnZX1cbiAgICAgIDwvb25zLW5hdmlnYXRvcj5cbiAgICApO1xuICB9XG59XG5cblJvdXRlck5hdmlnYXRvci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSByZW5kZXJQYWdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCB0cnVlXG4gICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgY3VycmVudCByb3V0ZSBvYmplY3QgYXMgYSBwYXJhbWV0ZXIgYW5kICBjcmVhdGVzIHJldHVybnMgYSByZWFjdCBjb21wb25lbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZW5kZXJQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQG5hbWUgaW5pdGlhbFJvdXRlU3RhY2tcbiAgICogQHR5cGUgYXJyYXlcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhpcyBhcnJheSBjb250YWlucyB0aGUgaW5pdGlhbCByb3V0ZXMgZnJvbSB0aGUgbmF2aWdhdG9yLFxuICAgKiAgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlbmRlciB0aGUgaW5pdGlhbCBwYWdlcyBpbiB0aGUgcmVuZGVyUGFnZSBtZXRob2QuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbml0aWFsUm91dGVTdGFjazogUHJvcFR5cGVzLmFycmF5LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbml0aWFsUm91dGVcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgYXJyYXkgY29udGFpbnMgdGhlIGluaXRpYWwgcm91dGUgb2YgdGhlIG5hdmlnYXRvcixcbiAgICogIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgdGhlIGluaXRpYWwgcGFnZXMgaW4gdGhlXG4gICAqICByZW5kZXJQYWdlIG1ldGhvZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGluaXRpYWxSb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVQdXNoXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgYSBwYWdlIGlzIHB1c2hlZC5bL2VuXVxuICAgKi9cbiAgb25QcmVQdXNoOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0UHVzaFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgYSBwYWdlIGlzIHB1c2hlZC5bL2VuXVxuICAgKi9cbiAgb25Qb3N0UHVzaDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlUG9wXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgYSBwYWdlIGlzIHBvcHBlZC5bL2VuXVxuICAgKi9cbiAgb25QcmVQb3A6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RQb3BcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIGEgcGFnZSBpcyBwb3BwZWQuWy9lbl1cbiAgICovXG4gIG9uUG9zdFBvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBhbmltYXRpb25cbiAgICogQHR5cGUge1N0cmluZ31cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXVxuICAgKiAgICAgQW5pbWF0aW9uIG5hbWUuIEF2YWlsYWJsZSBhbmltYXRpb25zIGFyZSBgXCJzbGlkZVwiYCwgYFwibGlmdFwiYCwgYFwiZmFkZVwiYCBhbmQgYFwibm9uZVwiYC5cbiAgICogICAgIFRoZXNlIGFyZSBwbGF0Zm9ybSBiYXNlZCBhbmltYXRpb25zLiBGb3IgZml4ZWQgYW5pbWF0aW9ucywgYWRkIGBcIi1pb3NcImAgb3IgYFwiLW1kXCJgIHN1ZmZpeCB0byB0aGUgYW5pbWF0aW9uIG5hbWUuIEUuZy4gYFwibGlmdC1pb3NcImAsIGBcImxpZnQtbWRcImAuIERlZmF1bHRzIHZhbHVlcyBhcmUgYFwic2xpZGUtaW9zXCJgIGFuZCBgXCJmYWRlLW1kXCJgLlxuICAgKiAgIFsvZW5dXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgc3dpcGVhYmxlXG4gICAqIEB0eXBlIGJvb2x8c3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEVuYWJsZXMgc3dpcGUtdG8tcG9wIGZ1bmN0aW9uYWxpdHkgZm9yIGlPUy5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlYWJsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQG5hbWUgc3dpcGVQb3BcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgRnVuY3Rpb24gY2FsbGVkIG9uIHN3aXBlLXRvLXBvcC4gTXVzdCBwZXJmb3JtIGEgcG9wUGFnZSB3aXRoIHRoZSBnaXZlbiBvcHRpb25zIG9iamVjdC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlUG9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXJOYXZpZ2F0b3I7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1yb3dcbiAqIEBjYXRlZ29yeSBncmlkXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqIFJlcHJlc2VudHMgYSByb3cgaW4gdGhlIGdyaWQgc3lzdGVtLiBVc2Ugd2l0aCBgQ29sYCB0byBsYXlvdXQgY29tcG9uZW50cy5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIDxSb3c+XG4gKiAgIDxDb2wgd2lkdGg9ezUwfT5cbiAgKiAgIDxvbnMtaWNvbiBpY29uPVwiZmEtdHdpdHRlclwiPjwvb25zLWljb24+XG4gKiAgIDwvQ29sPlxuICogICA8Q29sPlRleHQ8L0NvbD5cbiAqIDwvUm93PlxuICovXG5jbGFzcyBSb3cgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXJvdyc7XG4gIH1cbn1cblxuUm93LnByb3BUeXBlcyA9IHtcblxuICAvKipcbiAgKiBAbmFtZSB2ZXJ0aWNhbEFsaWduXG4gICogQHR5cGUge1N0cmluZ31cbiAgKiBAZGVzY3JpcHRpb25cbiAgKiAgIFtlbl1TaG9ydCBoYW5kIGF0dHJpYnV0ZSBmb3IgYWxpZ25pbmcgdmVydGljYWxseS4gVmFsaWQgdmFsdWVzIGFyZSB0b3AsIGJvdHRvbSwgYW5kIGNlbnRlci5bL2VuXVxuICAqICAgW2phXVsvamFdXG4gICovXG4gIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nLCAnY2VudGVyJ10pXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zZWFyY2gtaW5wdXRcbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2lucHV0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICBBIHNlYXJjaCBpbnB1dCBjb21wb25lbnQuIFRoZSBjb21wb25lbnQgd2lsbCBhdXRvbWF0aWNhbGx5IHJlbmRlciBhcyBhIE1hdGVyaWFsIERlc2lnbiBzZWFyY2ggaW5wdXQgb24gQW5kcm9pZCBkZXZpY2VzLlxuICpcbiAqICBNb3N0IGF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYSBub3JtYWwgYDxpbnB1dD5gIGVsZW1lbnQgY2FuIGFsc28gYmUgdXNlZCBvbiB0aGUgYDxTZWFyY2hJbnB1dD5gIGNvbXBvbmVudC5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8U2VhcmNoSW5wdXRcbiAqICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH1cbiAqICAgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnNldFN0YXRlKHt0ZXh0OiBldmVudC50YXJnZXQudmFsdWV9KX0gfVxuICogICBtb2RpZmllcj0nbWF0ZXJpYWwnXG4gKiAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgLz5cbiAqL1xuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc2VhcmNoLWlucHV0JztcbiAgfVxufVxuXG5TZWFyY2hJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBpbnB1dC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgd2hlbiB0aGUgdGV4dCBvZiB0aGUgaW5wdXQgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db250ZW50IG9mIHRoZSBpbnB1dC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcblxuICAvKipcbiAgICogQG5hbWUgaW5wdXRJZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dICBTcGVjaWZ5IHRoZSBcImlkXCIgYXR0cmlidXRlIG9mIHRoZSBpbm5lciBgPGlucHV0PmAgZWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgd2hlbiB1c2luZyA8bGFiZWwgZm9yPVwiLi4uXCI+IGVsZW1lbnRzIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xuIiwiaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zZWdtZW50XG4gKiBAY2F0ZWdvcnkgY29udHJvbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zZWdtZW50XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgU2VnbWVudCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNlZ21lbnQgbW9kaWZpZXI9XCJtYXRlcmlhbFwiPlxuICogIDxidXR0b24+TGFiZWwgMTwvYnV0dG9uPlxuICogIDxidXR0b24+TGFiZWwgMjwvYnV0dG9uPlxuICogIDxidXR0b24+TGFiZWwgMzwvYnV0dG9uPlxuICogPC9TZWdtZW50PlxuICovXG5jbGFzcyBTZWdtZW50IGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLm9uUG9zdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Qb3N0Q2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uUG9zdENoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1zZWdtZW50JztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vblBvc3RDaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vblBvc3RDaGFuZ2UpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbmRleCAhPT0gcHJvcHMuaW5kZXggJiYgcHJvcHMuaW5kZXggIT09IG5vZGUuZ2V0QWN0aXZlQnV0dG9uSW5kZXgoKSkge1xuICAgICAgbm9kZS5zZXRBY3RpdmVCdXR0b24ocHJvcHMuaW5kZXgsIHsgcmVqZWN0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHRoaXMucHJvcHMsIHsgaW5kZXg6ICdhY3RpdmUtaW5kZXgnIH0pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMuX2dldERvbU5vZGVOYW1lKCksIGF0dHJzLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5TZWdtZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGluZGV4XG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAcmVxdWlyZWRcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoZSBpbmRleCBvZiB0aGUgYnV0dG9uIHRvIGhpZ2hsaWdodC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgdGFiYmFySWRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBJRCBvZiB0aGUgYDxUYWJiYXI+YCB0byBcImNvbm5lY3RcIiB0byB0aGUgc2VnbWVudC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdGFiYmFySWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHNlZ21lbnQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgd2hlbiB0aGUgYWN0aXZlIGJ1dHRvbiBjaGFuZ2VzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdENoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlZ21lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnLi9CYXNlSW5wdXQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zZWxlY3RcbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3NlbGVjdFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgIFNlbGVjdCBpbnB1dCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNlbGVjdCBtb2RpZmllcj1cIm1hdGVyaWFsXCJcbiAqICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gKiAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KX1cbiAqICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gKiAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mm5kPC9vcHRpb24+XG4gKiAgIDxvcHRpb24gdmFsdWU9XCIzXCI+M3JkIG9wdGlvbjwvb3B0aW9uPlxuICogPC9TZWxlY3Q+XG4gKi9cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIGdldCBFVkVOVF9UWVBFUygpIHtcbiAgICByZXR1cm4gWydjaGFuZ2UnXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLXNlbGVjdCB7IC4uLmF0dHJzIH0+XG4gICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9vbnMtc2VsZWN0PlxuICAgICk7XG4gIH1cbn1cblxuU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgc2VsZWN0IGJveC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgd2hldGhlciB0aGUgc2VsZWN0IGlzIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25DaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Vc2UgdGhpcyBwcm9wIHRvIHNldCB0aGUgc2VsZWN0ZWQgb3B0aW9uIHZhbHVlLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtdWx0aXBsZVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRoaXMgYXR0cmlidXRlIGlzIGRlZmluZWQsIG11bHRpcGxlIG9wdGlvbnMgY2FuIGJlIHNlbGVjdGVkIGF0IG9uY2UuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhdXRvZm9jdXNcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1FbGVtZW50IGF1dG9tYXRpY2FsbHkgZ2FpbnMgZm9jdXMgb24gcGFnZSBsb2FkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlcXVpcmVkXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dTWFrZSB0aGUgc2VsZWN0IGlucHV0IHJlcXVpcmVkIGZvciBzdWJtaXR0aW5nIHRoZSBmb3JtIGl0IGlzIHBhcnQgb2YuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBmb3JtXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Bc3NvY2lhdGUgYSBzZWxlY3QgZWxlbWVudCB0byBhbiBleGlzdGluZyBmb3JtIG9uIHRoZSBwYWdlLCBldmVuIGlmIG5vdCBuZXN0ZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZm9ybTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgc2l6ZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSG93IG1hbnkgb3B0aW9ucyBhcmUgZGlzcGxheWVkOyBpZiB0aGVyZSBhcmUgbW9yZSB0aGFuIHRoZSBzaXplIHRoZW4gYSBzY3JvbGwgYXBwZWFycyB0byBuYXZpZ2F0ZSB0aGVtWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zcGVlZC1kaWFsXG4gKiBAY2F0ZWdvcnkgY29udHJvbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zcGVlZC1kaWFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gRWxlbWVudCB0aGF0IGRpc3BsYXlzIGEgTWF0ZXJpYWwgRGVzaWduIFNwZWVkIERpYWxvZyBjb21wb25lbnQuIEl0IGlzIHVzZWZ1bCB3aGVuIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHByaW1hcnkgYWN0aW9uIHRoYXQgY2FuIGJlIHBlcmZvcm1lZCBpbiBhIHBhZ2UuXG4gKiAgVGhlIFNwZWVkIGRpYWwgbG9va3MgbGlrZSBhIGBGYWJgIGVsZW1lbnQgYnV0IHdpbGwgZXhwYW5kIGEgbWVudSB3aGVuIHRhcHBlZC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNwZWVkRGlhbCBkaXNhYmxlZD17ZmFsc2V9IGRpcmVjdGlvbj0ncmlnaHQnIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCd0ZXN0MScpfSBwb3NpdGlvbj0nbGVmdCBib3R0b20nPlxuICAgICA8RmFiPlxuICAgICAgIDxJY29uIGljb249J2ZhLXR3aXR0ZXInIHNpemU9ezI2fSBmaXhlZFdpZHRoPXtmYWxzZX0gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IC8+XG4gICAgIDwvRmFiPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQScpfT4gQSA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBCJyl9PiBCIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEMnKX0+IEMgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgRCcpfT4gRCA8L1NwZWVkRGlhbEl0ZW0+XG4gICA8L1NwZWVkRGlhbD5cbiAqL1xuY2xhc3MgU3BlZWREaWFsIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1zcGVlZC1kaWFsJztcbiAgfVxufVxuXG5TcGVlZERpYWwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgc3BlZWQgZGlhbC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgcG9zaXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqICAgICBJLmUuIHRvIGRpc3BsYXkgaXQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIgc3BlY2lmeSBcInJpZ2h0IHRvcFwiLlxuICAgKiAgICAgQ2hvb3NlIGZyb20gXCJyaWdodFwiLCBcImxlZnRcIiwgXCJ0b3BcIiBhbmQgXCJib3R0b21cIi5cblsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXJlY3Rpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGRpcmVjdGlvbiB0aGUgaXRlbXMgYXJlIGRpc3BsYXllZC4gUG9zc2libGUgdmFsdWVzIGFyZSBcInVwXCIsIFwiZG93blwiLCBcImxlZnRcIiBhbmQgXCJyaWdodFwiLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0J10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSBpZiBidXR0b24gc2hvdWxkIGJlIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlZWREaWFsO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNwZWVkLWRpYWwtaXRlbVxuICogQGNhdGVnb3J5IGNvbnRyb2xcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3BlZWQtZGlhbFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoaXMgY29tcG9uZW50IGRpc3BsYXlzIHRoZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIFNwZWVkIGRpYWwgY29tcG9uZW50LiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNwZWVkRGlhbCBkaXNhYmxlZD17ZmFsc2V9IGRpcmVjdGlvbj0ncmlnaHQnIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCd0ZXN0MScpfSBwb3NpdGlvbj0nbGVmdCBib3R0b20nPlxuICAgICA8RmFiPlxuICAgICAgIDxJY29uIGljb249J2ZhLXR3aXR0ZXInIHNpemU9ezI2fSBmaXhlZFdpZHRoPXtmYWxzZX0gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IC8+XG4gICAgIDwvRmFiPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQScpfT4gQSA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBCJyl9PiBCIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEMnKX0+IEMgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgRCcpfT4gRCA8L1NwZWVkRGlhbEl0ZW0+XG4gICA8L1NwZWVkRGlhbD5cbiAqL1xuY2xhc3MgU3BlZWREaWFsSXRlbSBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLm9uQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc3BlZWQtZGlhbC1pdGVtJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gIH1cbn1cblxuU3BlZWREaWFsSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb25lcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVlZERpYWxJdGVtO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zcGxpdHRlclxuICogQGNhdGVnb3J5IG1lbnVcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3BsaXR0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSAgQSBjb21wb25lbnQgdGhhdCBlbmFibGVzIHJlc3BvbnNpdmUgbGF5b3V0IGJ5IGltcGxlbWVudGluZyBib3RoIGEgdHdvLWNvbHVtbiBsYXlvdXQgYW5kIGEgc2xpZGluZyBtZW51IGxheW91dC5cbiAqXG4gKiAgICBJdCBjYW4gYmUgY29uZmlndXJlZCB0byBhdXRvbWF0aWNhbGx5IGV4cGFuZCBpbnRvIGEgY29sdW1uIGxheW91dCBvbiBsYXJnZSBzY3JlZW5zIGFuZCBjb2xsYXBzZSB0aGUgbWVudSBvbiBzbWFsbGVyIHNjcmVlbnMuIFdoZW4gdGhlIG1lbnUgaXMgY29sbGFwc2VkIHRoZSB1c2VyIGNhbiBvcGVuIGl0IGJ5IHN3aXBpbmcuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgPFNwbGl0dGVyPlxuICAgIDxTcGxpdHRlclNpZGVcbiAgICAgIHNpZGU9XCJsZWZ0XCJcbiAgICAgIHdpZHRoPXsyMDB9XG4gICAgICBpc1N3aXBlYWJsZT17dHJ1ZX0+XG4gICAgICA8UGFnZT4gUGFnZSBMZWZ0IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyU2lkZT5cbiAgICA8U3BsaXR0ZXJDb250ZW50PlxuICAgICAgPFBhZ2U+IFBhZ2UgQ29udGVudCA8L1BhZ2U+XG4gICAgPC9TcGxpdHRlckNvbnRlbnQ+XG4gICAgPFNwbGl0dGVyU2lkZVxuICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgIHdpZHRoPXszMDB9XG4gICAgICBjb2xsYXBzZT17IXRoaXMuc3RhdGUuc2hvd1JpZ2h0fVxuICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW5SaWdodH1cbiAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlUmlnaHRDbG9zZS5iaW5kKHRoaXMpfVxuICAgICAgb25PcGVuPXt0aGlzLmhhbmRsZVJpZ2h0T3Blbi5iaW5kKHRoaXMpfVxuICAgICAgaXNTd2lwZWFibGU9e3RydWV9PlxuICAgICAgPFBhZ2U+IFBhZ2UgUmlnaHQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICA8L1NwbGl0dGVyPlxuICovXG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1zcGxpdHRlcic7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRGV2aWNlQmFja0J1dHRvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBub2RlLm9uRGV2aWNlQmFja0J1dHRvbiA9IHRoaXMucHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLm9uRGV2aWNlQmFja0J1dHRvbiA9IG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gIH1cbn1cblxuU3BsaXR0ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdHRlcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNwbGl0dGVyLWNvbnRlbnRcbiAqIEBjYXRlZ29yeSBtZW51XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3NwbGl0dGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gIFRoZSBTcGxpdHRlckNvbnRlbnQgIGVsZW1lbnQgaXMgdXNlZCBhcyBhIGNoaWxkIGVsZW1lbnQgb2YgU3BsaXR0ZXIuXG4gKiAgICBJdCBjb250YWlucyB0aGUgbWFpbiBjb250ZW50IG9mIHRoZSBwYWdlIHdoaWxlIFNwbGl0dGVyU2lkZSBjb250YWlucyB0aGUgbGlzdC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICA8U3BsaXR0ZXI+XG4gICAgPFNwbGl0dGVyU2lkZVxuICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgd2lkdGg9ezIwMH1cbiAgICAgIGlzU3dpcGVhYmxlPXt0cnVlfT5cbiAgICAgIDxQYWdlPiBQYWdlIExlZnQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICAgIDxTcGxpdHRlckNvbnRlbnQ+XG4gICAgICA8UGFnZT4gUGFnZSBDb250ZW50IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyQ29udGVudD5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgd2lkdGg9ezMwMH1cbiAgICAgIGNvbGxhcHNlPXshdGhpcy5zdGF0ZS5zaG93UmlnaHR9XG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUub3BlblJpZ2h0fVxuICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVSaWdodENsb3NlLmJpbmQodGhpcyl9XG4gICAgICBvbk9wZW49e3RoaXMuaGFuZGxlUmlnaHRPcGVuLmJpbmQodGhpcyl9XG4gICAgICBpc1N3aXBlYWJsZT17dHJ1ZX0+XG4gICAgICA8UGFnZT4gUGFnZSBSaWdodCA8L1BhZ2U+XG4gICAgPC9TcGxpdHRlclNpZGU+XG4gIDwvU3BsaXR0ZXI+XG4gKi9cbmNsYXNzIFNwbGl0dGVyQ29udGVudCBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc3BsaXR0ZXItY29udGVudCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsaXR0ZXJDb250ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCYXNpY0NvbXBvbmVudCBmcm9tICcuL0Jhc2ljQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtc3BsaXR0ZXItc2lkZVxuICogQGNhdGVnb3J5IG1lbnVcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3BsaXR0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSAgVGhlIFNwbGl0dGVyQ29udGVudCAgZWxlbWVudCBpcyB1c2VkIGFzIGEgY2hpbGQgZWxlbWVudCBvZiBTcGxpdHRlci5cbiAqICAgIEl0IGNvbnRhaW5zIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIHBhZ2Ugd2hpbGUgU3BsaXR0ZXJTaWRlIGNvbnRhaW5zIHRoZSBsaXN0LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxTcGxpdHRlcj5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwibGVmdFwiXG4gICAgICB3aWR0aD17MjAwfVxuICAgICAgc3dpcGVhYmxlPXt0cnVlfT5cbiAgICAgIDxQYWdlPiBQYWdlIExlZnQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICAgIDxTcGxpdHRlckNvbnRlbnQ+XG4gICAgICA8UGFnZT4gUGFnZSBDb250ZW50IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyQ29udGVudD5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgd2lkdGg9ezMwMH1cbiAgICAgIGNvbGxhcHNlPXshdGhpcy5zdGF0ZS5zaG93UmlnaHR9XG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUub3BlblJpZ2h0fVxuICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVSaWdodENsb3NlLmJpbmQodGhpcyl9XG4gICAgICBvbk9wZW49e3RoaXMuaGFuZGxlUmlnaHRPcGVuLmJpbmQodGhpcyl9XG4gICAgICBzd2lwZWFibGU9e3RydWV9PlxuICAgICAgPFBhZ2U+IFBhZ2UgUmlnaHQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICA8L1NwbGl0dGVyPlxuICovXG5cbmNsYXNzIFNwbGl0dGVyU2lkZSBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25PcGVuID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25PcGVuJyk7XG4gICAgdGhpcy5vbkNsb3NlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25DbG9zZScpO1xuICAgIHRoaXMub25QcmVPcGVuID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVPcGVuJyk7XG4gICAgdGhpcy5vblByZUNsb3NlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVDbG9zZScpO1xuICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Nb2RlQ2hhbmdlJyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMubm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLnByb3BzKTtcblxuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0b3BlbicsIHRoaXMub25PcGVuKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdGNsb3NlJywgdGhpcy5vbkNsb3NlKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlb3BlbicsIHRoaXMub25QcmVPcGVuKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlY2xvc2UnLCB0aGlzLm9uUHJlQ2xvc2UpO1xuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb2RlY2hhbmdlJywgdGhpcy5vbk1vZGVDaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RvcGVuJywgdGhpcy5vbk9wZW4pO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0Y2xvc2UnLCB0aGlzLm9uQ2xvc2UpO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVvcGVuJywgdGhpcy5vblByZU9wZW4pO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVjbG9zZScsIHRoaXMub25QcmVDbG9zZSk7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vZGVjaGFuZ2UnLCB0aGlzLm9uTW9kZUNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgaWYgKG5ld1Byb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5ub2RlLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFsnaXNDb2xsYXBzZWQnLCAnaXNTd2lwZWFibGUnXS5mb3JFYWNoKHAgPT4gdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSAmJiBjb25zb2xlLmVycm9yKFxuICAgICAgYFRoZSBwcm9wZXJ0eSAnJHtwfScgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAnJHtwLnRvTG93ZXJDYXNlKCkuc2xpY2UoMil9Jywgc2VlIGh0dHBzOi8vb25zZW4uaW8vdjIvZG9jcy9yZWFjdC9TcGxpdHRlclNpZGUuaHRtbC5gXG4gICAgKSk7XG5cbiAgICBjb25zdCB7IGlzT3BlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLXNwbGl0dGVyLXNpZGUgeyAuLi5hdHRycyB9ID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L29ucy1zcGxpdHRlci1zaWRlPlxuICAgICk7XG4gIH1cbn1cblxuU3BsaXR0ZXJTaWRlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGNvbGxhcHNlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gU3BlY2lmeSB0aGUgY29sbGFwc2UgYmVoYXZpb3IuIFZhbGlkIHZhbHVlcyBhcmUgYFwicG9ydHJhaXRcImAsIGBcImxhbmRzY2FwZVwiYCBvciBhIG1lZGlhIHF1ZXJ5LlxuICAgKiAgICAgVGhlIHN0cmluZ3MgYFwicG9ydHJhaXRcImAgYW5kIGBcImxhbmRzY2FwZVwiYCBtZWFucyB0aGUgdmlldyB3aWxsIGNvbGxhcHNlIHdoZW4gZGV2aWNlIGlzIGluIGxhbmRzY2FwZSBvciBwb3J0cmFpdCBvcmllbnRhdGlvbi5cbiAgICogICAgIElmIHRoZSB2YWx1ZSBpcyBub3QgZGVmaW5lZCwgdGhlIHZpZXcgYWx3YXlzIGJlIGluIGBcImNvbGxhcHNlXCJgIG1vZGUuXG5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBjb2xsYXBzZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQG5hbWUgc3dpcGVhYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dRW5uYWJsZSBzd2lwZSBpbnRlcmFjdGlvbiBvbiBjb2xsYXBzZSBtb2RlLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzT3BlblxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZmllcyB3aGV0aGVyIHRoZSBtZW51IGlzIG9wZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25PcGVuXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBhZnRlciB0aGUgbWVudSBpcyBvcGVuZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25DbG9zZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgYWZ0ZXIgdGhlIG1lbnUgaXMgY2xvc2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzaWRlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHdoaWNoIHNpZGUgb2YgdGhlIHNjcmVlbiB0aGUgU3BsaXR0ZXJTaWRlIGVsZW1lbnQgaXMgbG9jYXRlZC4gUG9zc2libGUgdmFsdWVzIGFyZSBgXCJsZWZ0XCJgIGFuZCBgXCJyaWdodFwiYC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzaWRlOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZVRhcmdldFdpZHRoXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSBtZW51IHdpdGggYSBudW1iZXIgKGZvciBwaXhlbHMpIG9yIGEgc3RyaW5nIChlLmcuIFwiMjAlXCIgZm9yIHBlcmNlbnRhZ2UpLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlVGFyZ2V0V2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQG5hbWUgd2lkdGhcbiAgICogQHR5cGUgIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSBtZW51IHdpdGggYSBudW1iZXIgKGZvciBwaXhlbHMpIG9yIGEgc3RyaW5nIChlLmcuIFwiMjAlXCIgZm9yIHBlcmNlbnRhZ2UpLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbi4gVXNlIG9uZSBvZiBgb3ZlcmxheWAsIGBwdXNoYCwgYHJldmVhbGAsIG9yIGBkZWZhdWx0YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9wZW5UaHJlc2hvbGRcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gU3BlY2lmeSBob3cgbXVjaCB0aGUgbWVudSBuZWVkcyB0byBiZSBzd2lwZWQgYmVmb3JlIG9wZW5pbmcuIEEgdmFsdWUgYmV0d2VlbiBgMGAgYW5kIGAxYC4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9wZW5UaHJlc2hvbGQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQ3VycmVudCBtb2RlLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBcImNvbGxhcHNlXCJgIG9yIGBcInNwbGl0XCJgLiBUaGlzIGF0dHJpYnV0ZSBpcyByZWFkIG9ubHkuICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RlOiBQcm9wVHlwZXMub25lT2YoWydjb2xsYXBzZScsICdzcGxpdCddKSxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVPcGVuXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQ2FsbGVkIGJlZm9yZSB0aGUgbWVudSBvcGVucy4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlQ2xvc2VcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgYmVmb3JlIHRoZSBtZW51IGNsb3Nlcy4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbk1vZGVDaGFuZ2VcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCdzIG1vZGUgY2hhbmdlcy4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Nb2RlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BsaXR0ZXJTaWRlO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnLi9CYXNlSW5wdXQuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXN3aXRjaFxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3dpdGNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gICBTd2l0Y2ggY29tcG9uZW50LiBUaGUgc3dpdGNoIGNhbiBiZSB0b2dnbGVkIGJvdGggYnkgZHJhZ2dpbmcgYW5kIHRhcHBpbmcuXG4gKiAgICAgV2lsbCBhdXRvbWF0aWNhbGx5IGRpc3BsYXlzIGEgTWF0ZXJpYWwgRGVzaWduIHN3aXRjaCBvbiBBbmRyb2lkIGRldmljZXMuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxTd2l0Y2ggY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cbiAqL1xuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQmFzZUlucHV0IHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXN3aXRjaCc7XG4gIH1cblxuICBnZXQgRVZFTlRfVFlQRVMoKSB7XG4gICAgcmV0dXJuIFsnY2hhbmdlJ107XG4gIH1cbn1cblxuU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIHN3aXRjaCBjaGFuZ2VzIChjaGVja2VkL3VuY2hlY2tlZCkgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBjaGVja2VkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFdoZXRoZXIgdGhlIHN3aXRjaCBpcyBjaGVja2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBJZiBzZXQsIHRoZSBzd2l0Y2ggaXMgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbnB1dElkXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gU3BlY2lmeSB0aGUgYGlkYCBhdHRyaWJ1dGUgb2YgdGhlIGlubmVyIGA8aW5wdXQ+YCBlbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHVzaW5nIGA8bGFiZWwgZm9yPVwiLi4uXCI+YCBlbGVtZW50cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXRhYlxuICogQGNhdGVnb3J5IHRhYmJhclxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS90YWJiYXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBSZXByZXNlbnRzIGEgdGFiIGluc2lkZSB0YWIgYmFyLlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8VGFwPlxuICogICBIb21lXG4gKiA8L1RhcD5cbiAqL1xuY2xhc3MgVGFiIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy10YWInO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy10YWJiYXJcbiAqIEBjYXRlZ29yeSB0YWJiYXJcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvdGFiYmFyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gQ29tcG9uZW50IHRvIGRpc3BsYXkgYSB0YWJiYXIgb24gZWl0aGVyIHRoZSB0b3Agb3IgdGhlIGJvdHRvbSBvZiBhIHBhZ2UuXG4gKiBUbyBkZWZpbmUgdGhlIHRhYnMgYW5kIHRoZSBjb250ZW50IHRoZSBwcm9wZXJ0eSByZW5kZXJUYWJzIG5lZWQgdG8gYmUgaW1wbGVtZW50ZWQsIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiB0YWJzIGFuZCB0aGVpciBjb250ZW50LiBTZWUgdGhlIGV4YW1wbGUgZm9yIHNwZWNpZmljcy4gWy9lbl0qIFtqYV1bL2phXVxuICogQGV4YW1wbGVcblxuICA8UGFnZT5cbiAgICA8VGFiYmFyXG4gICAgICBvblByZUNoYW5nZT17KHtpbmRleH0pID0+IHRoaXMuc2V0U3RhdGUoaW5kZXgpfVxuICAgICAgb25Qb3N0Q2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygncG9zdENoYW5nZScpfVxuICAgICAgb25SZWFjdGl2ZT17KCkgPT4gY29uc29sZS5sb2coJ3Bvc3RDaGFuZ2UnKX1cbiAgICAgIHBvc2l0aW9uPSdib3R0b20nXG4gICAgICBpbmRleD17dGhpcy5zdGF0ZS5pbmRleH1cbiAgICAgIHJlbmRlclRhYnM9eyhhY3RpdmVJbmRleCwgdGFiYmFyKSA9PiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiA8VGFiUGFnZSB0aXRsZT1cIkhvbWVcIiBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAwfSB0YWJiYXI9e3RhYmJhcn0gLz4sXG4gICAgICAgICAgdGFiOiA8VGFiIGxhYmVsPVwiSG9tZVwiIGljb249XCJtZC1ob21lXCIgLz5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IDxUYWJQYWdlIHRpdGxlPVwiU2V0dGluZ3NcIiBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAxfSB0YWJiYXI9e3RhYmJhcn0gLz4sXG4gICAgICAgICAgdGFiOiA8VGFiIGxhYmVsPVwiU2V0dGluZ3NcIiBpY29uPVwibWQtc2V0dGluZ3NcIiAvPlxuICAgICAgICB9XVxuICAgICAgfVxuICAgIC8+XG4gIDwvUGFnZT5cbiAqL1xuXG5jbGFzcyBUYWJiYXIgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG5hbWUsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wc1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tuYW1lXShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uUHJlQ2hhbmdlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVDaGFuZ2UnKTtcbiAgICB0aGlzLm9uUG9zdENoYW5nZSA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUG9zdENoYW5nZScpO1xuICAgIHRoaXMub25SZWFjdGl2ZSA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUmVhY3RpdmUnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX3RhYmJhcjtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZWNoYW5nZScsIHRoaXMub25QcmVDaGFuZ2UpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdGNoYW5nZScsIHRoaXMub25Qb3N0Q2hhbmdlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWN0aXZlJywgdGhpcy5vblJlYWN0aXZlKTtcbiAgICBub2RlLm9uU3dpcGUgPSB0aGlzLnByb3BzLm9uU3dpcGUgfHwgbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl90YWJiYXI7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVjaGFuZ2UnLCB0aGlzLm9uUHJlQ2hhbmdlKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RjaGFuZ2UnLCB0aGlzLm9uUG9zdENoYW5nZSk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWFjdGl2ZScsIHRoaXMub25SZWFjdGl2ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl90YWJiYXI7XG4gICAgaWYgKG5leHRQcm9wcy5pbmRleCAhPT0gdGhpcy5wcm9wcy5pbmRleCAmJiBuZXh0UHJvcHMuaW5kZXggIT09IG5vZGUuZ2V0QWN0aXZlVGFiSW5kZXgoKSkge1xuICAgICAgbm9kZS5zZXRBY3RpdmVUYWIobmV4dFByb3BzLmluZGV4LCB7IHJlamVjdDogZmFsc2UgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uU3dpcGUgIT09IG5leHRQcm9wcy5vblN3aXBlKSB7XG4gICAgICBub2RlLm9uU3dpcGUgPSBuZXh0UHJvcHMub25Td2lwZTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHRoaXMucHJvcHMsIHsgaW5kZXg6ICdhY3RpdmVJbmRleCcgfSk7XG4gICAgY29uc3QgdGFicyA9IHRoaXMucHJvcHMucmVuZGVyVGFicyh0aGlzLnByb3BzLmluZGV4LCB0aGlzKTtcblxuICAgIGlmICghdGhpcy50YWJQYWdlcykge1xuICAgICAgdGhpcy50YWJQYWdlcyA9IHRhYnMubWFwKCh0YWIpID0+IHRhYi5jb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJQYWdlc1t0aGlzLnByb3BzLmluZGV4XSA9IHRhYnNbdGhpcy5wcm9wcy5pbmRleF0uY29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG9ucy10YWJiYXIgey4uLmF0dHJzfSByZWY9eyh0YWJiYXIpID0+IHsgdGhpcy5fdGFiYmFyID0gdGFiYmFyOyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0YWJiYXJfX2NvbnRlbnQnfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMudGFiUGFnZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndGFiYmFyJ30+XG4gICAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IHRhYi50YWIpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJiYXJfX2JvcmRlcic+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vbnMtdGFiYmFyPlxuICAgICk7XG4gIH1cbn1cblxuVGFiYmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGluZGV4XG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAcmVxdWlyZWRcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIGhpZ2hsaWdodC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW5kZXJUYWJzXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBGdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBrZXlzIGBjb250ZW50YCBhbmQgYHRhYmAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVyVGFiczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgcG9zaXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUYWJiYXIncyBwb3NpdGlvbi4gQXZhaWxhYmxlIHZhbHVlcyBhcmUgYFwiYm90dG9tXCJgIGFuZCBgXCJ0b3BcImAuIFVzZSBgXCJhdXRvXCJgIHRvIGNob29zZSBwb3NpdGlvbiBkZXBlbmRpbmcgb24gcGxhdGZvcm0gKGlPUyBib3R0b20sIEFuZHJvaWQgdG9wKS4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHN3aXBlYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUVubmFibGUgc3dpcGUgaW50ZXJhY3Rpb24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaWdub3JlRWRnZVdpZHRoXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1EaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSBib3RoIGVkZ2VzLiBTd2lwaW5nIG9uIHRoZXNlIGFyZWFzIHdpbGwgcHJpb3JpdGl6ZSBwYXJlbnQgY29tcG9uZW50cyBzdWNoIGFzIGBTcGxpdHRlcmAgb3IgYE5hdmlnYXRvcmAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaWdub3JlRWRnZVdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0aGlzIGF0dHJpYnV0ZSBpcyBzZXQgdG8gYFwibm9uZVwiYCB0aGUgdHJhbnNpdGlvbnMgd2lsbCBub3QgYmUgYW5pbWF0ZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3NsaWRlJ10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25PcHRpb25zXG4gICAqIEB0eXBlIG9iamVjdFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHRhYkJvcmRlclxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsIHRoZSB0YWJzIHNob3cgYSBkeW5hbWljIGJvdHRvbSBib3JkZXIuIE9ubHkgd29ya3MgZm9yIGlPUyBzaW5jZSB0aGUgYm9yZGVyIGlzIGFsd2F5cyB2aXNpYmxlIGluIE1hdGVyaWFsIERlc2lnbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB0YWJCb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgdGhlIHRhYiBpcyBjaGFuZ2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0Q2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSB0YWIgaXMgY2hhbmdlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblJlYWN0aXZlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBpZiB0aGUgYWxyZWFkeSBvcGVuIHRhYiBpcyB0YXBwZWQgYWdhaW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25SZWFjdGl2ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uU3dpcGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSG9vayBjYWxsZWQgd2hlbmV2ZXIgdGhlIHVzZXIgc2xpZGVzIHRoZSB0YWJiYXIuIEl0IGdldHMgYSBkZWNpbWFsIGluZGV4IGFuZCBhbiBhbmltYXRpb25PcHRpb25zIG9iamVjdCBhcyBhcmd1bWVudHMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Td2lwZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblRhYmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluZGV4OiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJiYXI7XG4iLCJpbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuL0Jhc2VEaWFsb2cuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy10b2FzdFxuICogQGNhdGVnb3J5IGRpYWxvZ1xuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9kaWFsb2dcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogIFRoZSBUb2FzdCBvciBTbmFja2JhciBjb21wb25lbnQgaXMgdXNlZnVsIGZvciBkaXNwbGF5aW5nIGRpc21pc3NhYmxlIGluZm9ybWF0aW9uIG9yIHNpbXBsZSBhY3Rpb25zIGF0IChub3JtYWxseSkgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS5cbiAqXG4gKiAgVGhpcyBjb21wb25lbnQgZG9lcyBub3QgYmxvY2sgdXNlciBpbnB1dCwgYWxsb3dpbmcgdGhlIGFwcCB0byBjb250aW51ZSBpdHMgZmxvdy4gRnVydGhlcm1vcmUsIGl0IGNhbiBiZSBhdXRvbWF0aWNhbGx5IGhpZGRlbiBhZnRlciBhIHRpbWVvdXQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKi9cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZURpYWxvZyB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy10b2FzdCc7XG4gIH1cbn1cblxuVG9hc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdG9hc3Qgb3BlbiBhbmQgc2hvd24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUFuaW1hdGlvbiBuYW1lLiBBdmFpbGFibGUgYW5pbWF0aW9ucyBhcmUgYFwiZGVmYXVsdFwiYCwgYFwiYXNjZW5kXCJgIChBbmRyb2lkKSwgYFwibGlmdFwiYCAoaU9TKSwgYFwiZmFsbFwiYCwgYFwiZmFkZVwiYCBvciBgXCJub25lXCJgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9hc3QuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBiZWZvcmUgdGhlIHRvYXN0IGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIHRvYXN0IGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSB0aGUgdG9hc3QgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdEhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSB0b2FzdCBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXRvb2xiYXJcbiAqIEBjYXRlZ29yeSBwYWdlXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3BhZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVRvb2xiYXIgY29tcG9uZW50IHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBuYXZpZ2F0aW9uLiBMZWZ0LCBjZW50ZXIgYW5kIHJpZ2h0IGNvbnRhaW5lciBjYW4gYmUgc3BlY2lmaWVkIGJ5IGNsYXNzIG5hbWVzLiBUaGlzIGNvbXBvbmVudCB3aWxsIGF1dG9tYXRpY2FsbHkgZGlzcGxheXMgYXMgYSBNYXRlcmlhbCBEZXNpZ24gdG9vbGJhciB3aGVuIHJ1bm5pbmcgb24gQW5kcm9pZCBkZXZpY2VzLlsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKlxuPFBhZ2UgcmVuZGVyVG9vbGJhcj17KCkgPT5cbiAgPFRvb2xiYXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICA8QmFja0J1dHRvbj5cbiAgICAgICAgICBCYWNrXG4gICAgICA8L0JhY2tCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgIFRpdGxlXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgPFRvb2xiYXJCdXR0b24+XG4gICAgICAgIDxJY29uIGljb249XCJtZC1tZW51XCIgLz5cbiAgICAgIDwvVG9vbGJhckJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9Ub29sYmFyPiB9XG4vPlxuICovXG5jbGFzcyBUb29sYmFyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy10b29sYmFyJztcbiAgfVxufVxuXG5Ub29sYmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuIE9wdGlvbmFsLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXRvb2xiYXItYnV0dG9uXG4gKiBAY2F0ZWdvcnkgcGFnZVxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9wYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXVxuICogICBCdXR0b24gY29tcG9uZW50IGZvciB0aGUgVG9vbGJhci4gVXNpbmcgdGhpcyBjb21wb25lbnQgZ2l2ZXMgYSBuaWNlIGRlZmF1bHQgc3R5bGUuXG4gKlxuICpcbiAqICAgWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxQYWdlXG4gICAgIHJlbmRlclRvb2xiYXIgPSB7ICgpID0+XG4gICAgICA8VG9vbGJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnQnPjxCYWNrQnV0dG9uPkJhY2s8L0JhY2tCdXR0b24+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPklucHV0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodCc+XG4gICAgICAgICAgPFRvb2xiYXJCdXR0b24gb25DbGljaz17dGhpcy5hZGR9ID5BZGQ8L1Rvb2xiYXJCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ub29sYmFyPlxuICAgICB9PlxuICAgICAgUGFnZSBDb250ZW50XG4gICAgPC9QYWdlPlxuICovXG5jbGFzcyBUb29sYmFyQnV0dG9uIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy10b29sYmFyLWJ1dHRvbic7XG4gIH1cbn1cblxuVG9vbGJhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyQnV0dG9uO1xuIiwiLypcbiAqIHJvdXRlU3RhY2sgOiBbdXNlclJvdXRlLCB1c2VyUm91dGUyLCAuLi5dXG4gKiBwcm9jZXNzU3RhY2s6IFtcbiAqIHsgdHlwZTogcHVzaCB8IHBvcCB8IHJlc2V0LCByb3V0ZTogdXNlclJvdXRlIH0sXG4gKiB7IHR5cGU6IHB1c2ggfCBwb3AgfCByZXNldCwgcm91dGU6IHVzZXJSb3V0ZTIgfSxcbiAqIC4uLlxuICogXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogKHJvdXRlcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrOiBbLi4ucm91dGVzXSxcbiAgICAgIHByb2Nlc3NTdGFjazogW11cbiAgICB9O1xuICB9LFxuXG4gIHJlcGxhY2U6ICh7cm91dGVDb25maWcsIHJvdXRlLCBvcHRpb25zLCBrZXl9KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gey4uLnJvdXRlQ29uZmlnfTtcbiAgICBjb25zdCByb3V0ZVN0YWNrID0gWy4uLmNvbmZpZy5yb3V0ZVN0YWNrXTtcbiAgICBsZXQgcHJvY2Vzc1N0YWNrID0gWy4uLmNvbmZpZy5wcm9jZXNzU3RhY2tdO1xuXG4gICAgaWYgKGtleSA9PSBudWxsIHx8IHByb2Nlc3NTdGFjay5maWx0ZXIoKGVsKSA9PiBlbC5rZXkgPT09IGtleSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9jZXNzID0ge1xuICAgICAgICB0eXBlOiAncmVwbGFjZScsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBrZXlcbiAgICAgIH07XG4gICAgICBwcm9jZXNzU3RhY2sgPSBbXG4gICAgICAgIC4uLnByb2Nlc3NTdGFjayxcbiAgICAgICAgcHJvY2Vzc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVTdGFjayxcbiAgICAgIHByb2Nlc3NTdGFja1xuICAgIH07XG4gIH0sXG5cbiAgcmVzZXQ6ICh7cm91dGVDb25maWcsIHJvdXRlLCBvcHRpb25zLCBrZXl9KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gey4uLnJvdXRlQ29uZmlnfTtcbiAgICBjb25zdCByb3V0ZVN0YWNrID0gWy4uLmNvbmZpZy5yb3V0ZVN0YWNrXTtcbiAgICBsZXQgcHJvY2Vzc1N0YWNrID0gWy4uLmNvbmZpZy5wcm9jZXNzU3RhY2tdO1xuXG4gICAgaWYgKGtleSA9PSBudWxsIHx8IHByb2Nlc3NTdGFjay5maWx0ZXIoKGVsKSA9PiBlbC5rZXkgPT09IGtleSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9jZXNzID0ge1xuICAgICAgICB0eXBlOiAncmVzZXQnLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAga2V5XG4gICAgICB9O1xuXG4gICAgICBwcm9jZXNzU3RhY2sgPSBbXG4gICAgICAgIC4uLnByb2Nlc3NTdGFjayxcbiAgICAgICAgcHJvY2Vzc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVTdGFjayxcbiAgICAgIHByb2Nlc3NTdGFja1xuICAgIH07XG4gIH0sXG5cbiAgcHVzaDogKHtyb3V0ZUNvbmZpZywgcm91dGUsIG9wdGlvbnMsIGtleX0pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7Li4ucm91dGVDb25maWd9O1xuICAgIGNvbnN0IHJvdXRlU3RhY2sgPSBbLi4uY29uZmlnLnJvdXRlU3RhY2tdO1xuICAgIGxldCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICBpZiAoa2V5ID09IG51bGwgfHwgY29uZmlnLnByb2Nlc3NTdGFjay5maWx0ZXIoKGVsKSA9PiBlbC5rZXkgPT09IGtleSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9jZXNzID0ge1xuICAgICAgICB0eXBlOiAncHVzaCcsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBrZXlcbiAgICAgIH07XG5cbiAgICAgIHByb2Nlc3NTdGFjayA9IFtcbiAgICAgICAgLi4ucHJvY2Vzc1N0YWNrLFxuICAgICAgICBwcm9jZXNzXG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrLFxuICAgICAgcHJvY2Vzc1N0YWNrXG4gICAgfTtcbiAgfSxcblxuICBwb3A6ICh7cm91dGVDb25maWcsIG9wdGlvbnMsIGtleX0pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7Li4ucm91dGVDb25maWd9O1xuICAgIGNvbnN0IHJvdXRlU3RhY2sgPSBbLi4uY29uZmlnLnJvdXRlU3RhY2tdO1xuICAgIGxldCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICAvKipcbiAgICAgKiBTYWZlZ2F1cmQgdG8gZW5zdXJlIHRoYXQgbm90XG4gICAgICogdG9vIG1hbnkgcGFnZXMgYXJlIHBvcHBlZCBmcm9tXG4gICAgICogdGhlIHN0YWNrLlxuICAgICAqL1xuICAgIGNvbnN0IHBvcHMgPSBwcm9jZXNzU3RhY2tcbiAgICAgIC5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdwb3AnKVxuICAgICAgLmxlbmd0aDtcblxuICAgIGlmIChwb3BzICsgMSA+PSByb3V0ZVN0YWNrLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdQYWdlIHN0YWNrIGlzIGFscmVhZHkgZW1wdHknKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvY2VzcyA9IHtcbiAgICAgIHR5cGU6ICdwb3AnLFxuICAgICAga2V5LFxuICAgICAgb3B0aW9uc1xuICAgIH07XG5cbiAgICBwcm9jZXNzU3RhY2sgPSBbXG4gICAgICAuLi5wcm9jZXNzU3RhY2ssXG4gICAgICBwcm9jZXNzXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrLFxuICAgICAgcHJvY2Vzc1N0YWNrXG4gICAgfTtcbiAgfSxcblxuICBwb3N0UHVzaDogKHJvdXRlQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gey4uLnJvdXRlQ29uZmlnfTtcbiAgICBsZXQgcm91dGVTdGFjayA9IFsuLi5jb25maWcucm91dGVTdGFja107XG4gICAgY29uc3QgcHJvY2Vzc1N0YWNrID0gWy4uLmNvbmZpZy5wcm9jZXNzU3RhY2tdO1xuXG4gICAgY29uc3QgbmV4dCA9IHByb2Nlc3NTdGFjay5zaGlmdCgpO1xuICAgIGNvbnN0IHR5cGUgPSBuZXh0LnR5cGU7XG4gICAgbGV0IHJvdXRlID0gbmV4dC5yb3V0ZTtcblxuICAgIGlmICh0eXBlID09PSAncHVzaCcpIHtcbiAgICAgIGlmIChyb3V0ZSAhPT0gbnVsbCkge1xuICAgICAgICByb3V0ZVN0YWNrID0gW1xuICAgICAgICAgIC4uLnJvdXRlU3RhY2ssXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXNldCcpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3V0ZSkpIHJvdXRlID0gW3JvdXRlXTtcbiAgICAgIHJvdXRlU3RhY2sgPSByb3V0ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXBsYWNlJykge1xuICAgICAgcm91dGVTdGFjay5wb3AoKTtcbiAgICAgIHJvdXRlU3RhY2sucHVzaChyb3V0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlU3RhY2ssXG4gICAgICBwcm9jZXNzU3RhY2tcbiAgICB9O1xuICB9LFxuXG4gIHBvc3RQb3A6IChyb3V0ZUNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHsuLi5yb3V0ZUNvbmZpZ307XG4gICAgbGV0IHJvdXRlU3RhY2sgPSBbLi4uY29uZmlnLnJvdXRlU3RhY2tdO1xuICAgIGxldCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG4gICAgcm91dGVTdGFjayA9IHJvdXRlU3RhY2suc2xpY2UoMCwgcm91dGVTdGFjay5sZW5ndGggLSAxKTtcbiAgICBwcm9jZXNzU3RhY2sgPSBwcm9jZXNzU3RhY2suc2xpY2UoMSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVTdGFjayxcbiAgICAgIHByb2Nlc3NTdGFja1xuICAgIH07XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicGl4ZWxTaXplIiwiaXRlbSIsIm5vcm1hbGl6ZSIsInRlc3QiLCJrZXkiLCJzbGljZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNvbnZlcnQiLCJkaWN0IiwibmFtZSIsIm5ld05hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiZWwiLCJwcm9wcyIsImF0dHJzIiwidmFsaWRQcm9wcyIsImNvbnN0cnVjdG9yIiwicHJvcFR5cGVzIiwiYW5pbWF0aW9uT3B0aW9ucyIsIkpTT04iLCJzdHJpbmdpZnkiLCJrZXlzIiwiZm9yRWFjaCIsImluZGV4T2YiLCJCYXNlRGlhbG9nIiwiYXJncyIsImNhbGxiYWNrIiwiZXZlbnQiLCJvbkNhbmNlbCIsImJpbmQiLCJvblByZVNob3ciLCJvblBvc3RTaG93Iiwib25QcmVIaWRlIiwib25Qb3N0SGlkZSIsIm5vZGUiLCJmaXJzdENoaWxkIiwic2hvdyIsImNsYXNzTmFtZSIsImxhc3RDbGFzcyIsImhpZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyUG9ydGFsIiwib25EZXZpY2VCYWNrQnV0dG9uIiwibmV3UHJvcHMiLCJpc09wZW4iLCJ1bmRlZmluZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidW5tb3VudCIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJyZW1vdmVDaGlsZCIsInZpc2libGUiLCJ0aGVuIiwiaXNTaG93biIsInVwZGF0ZUNsYXNzZXMiLCJGdW5jdGlvbiIsIkVycm9yIiwib3RoZXJzIiwiVXRpbCIsImdldEF0dHJzIiwiRG9tTm9kZU5hbWUiLCJfZ2V0RG9tTm9kZU5hbWUiLCJ1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciIsImNoaWxkcmVuIiwiX3VwZGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiQWN0aW9uU2hlZXQiLCJCYXNpY0NvbXBvbmVudCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJ0cmltIiwib25zIiwiX2F1dG9TdHlsZSIsInByZXBhcmUiLCJTaW1wbGVXcmFwcGVyIiwiQWN0aW9uU2hlZXRCdXR0b24iLCJBbGVydERpYWxvZyIsIkFsZXJ0RGlhbG9nQnV0dG9uIiwiQmFja0J1dHRvbiIsIm9uQ2xpY2siLCJfdXBkYXRlT25DbGljayIsIkJvdHRvbVRvb2xiYXIiLCJCdXR0b24iLCJDYXJkIiwiQ2Fyb3VzZWwiLCJvbkNoYW5nZSIsIm9uUmVmcmVzaCIsIm9uT3ZlcnNjcm9sbCIsIm9uU3dpcGUiLCJvblBvc3RDaGFuZ2UiLCJpbmRleCIsImdldEFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJsZW5ndGgiLCJyZWZyZXNoIiwib25lT2YiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJDYXJvdXNlbEl0ZW0iLCJCYXNlSW5wdXQiLCJ2YWx1ZSIsIkVWRU5UX1RZUEVTIiwiZXZlbnRUeXBlIiwiY2hlY2tlZCIsImluc3RhbmNlT2YiLCJEYXRlIiwiQ2hlY2tib3giLCJDb2wiLCJEaWFsb2ciLCJGYWIiLCJJY29uIiwiaWNvbiIsInNpemUiLCJPYmplY3QiLCJmaWx0ZXIiLCJhIiwiaW5uZXJTdHJpbmciLCJtYXAiLCJkZWZhdWx0Iiwiam9pbiIsIm9iamVjdE9mIiwiSW5wdXQiLCJMYXp5TGlzdCIsInN0YXRlIiwidXBkYXRlIiwic2VsZiIsIl9sYXp5UmVwZWF0IiwiZGVsZWdhdGUiLCJjYWxjdWxhdGVJdGVtSGVpZ2h0Iiwic3RhcnQiLCJsaW1pdCIsInVwZGF0ZVRvcCIsInJlbmRlclJvdyIsImkiLCJwdXNoIiwic2V0U3RhdGUiLCJoZWxwUHJvcHMiLCJsaXN0IiwiX2xpc3QiLCJwb3NpdGlvbiIsImhlaWdodCIsImxhenlSZXBlYXQiLCJMaXN0IiwicGFnZXMiLCJkYXRhU291cmNlIiwiZGF0YSIsImlkeCIsInJlbmRlckhlYWRlciIsInJlbmRlckZvb3RlciIsImFycmF5IiwiTGlzdEhlYWRlciIsIkxpc3RJdGVtIiwiX2NvbXBpbGUiLCJMaXN0VGl0bGUiLCJOYXZpZ2F0b3IiLCJfcHJlUHVzaCIsIl9wb3N0UHVzaCIsIl9wcmVQb3AiLCJfcG9zdFBvcCIsIm9iaiIsIlByb21pc2UiLCJyZXNvbHZlIiwiZm9yY2VVcGRhdGUiLCJyb3V0ZSIsIm9wdGlvbnMiLCJyZXNldFBhZ2VTdGFjayIsInJvdXRlcyIsImlzUnVubmluZyIsInJlamVjdCIsImhpZGVQYWdlcyIsInBhZ2VFbGVtZW50cyIsIl9uYXZpIiwic3R5bGUiLCJkaXNwbGF5IiwicG9wIiwicm91dGVzQmVmb3JlUG9wIiwicm91dGVzQWZ0ZXJQb3AiLCJjb25jYXQiLCJfcG9wUGFnZSIsImxhc3RSb3V0ZSIsIm5ld1BhZ2UiLCJyZW5kZXJQYWdlIiwiX3B1c2hQYWdlIiwiY2F0Y2giLCJlcnJvciIsIl9pc1J1bm5pbmciLCJwdXNoUGFnZSIsInBvcyIsInNwbGljZSIsInRvcFBhZ2UiLCJ1cGRhdGVCYWNrQnV0dG9uIiwicG9wUGFnZSIsImNhbGxQYXJlbnRIYW5kbGVyIiwidGFyZ2V0Iiwib25QcmVQb3AiLCJvblBvc3RQb3AiLCJvblByZVB1c2giLCJvblBvc3RQdXNoIiwic3dpcGVNYXgiLCJzd2lwZVBvcCIsIl9vbkRldmljZUJhY2tCdXR0b24iLCJpbml0aWFsUm91dGUiLCJpbml0aWFsUm91dGVTdGFjayIsIm5hdmkiLCJOT09QIiwiTW9kYWwiLCJQYWdlIiwib25Jbml0Iiwib25TaG93Iiwib25IaWRlIiwib25JbmZpbml0ZVNjcm9sbCIsInRvb2xiYXIiLCJyZW5kZXJUb29sYmFyIiwiYm90dG9tVG9vbGJhciIsInJlbmRlckJvdHRvbVRvb2xiYXIiLCJtb2RhbCIsInJlbmRlck1vZGFsIiwiZml4ZWQiLCJyZW5kZXJGaXhlZCIsImNvbnRlbnRTdHlsZSIsIm90aGVyIiwiekluZGV4IiwiUG9wb3ZlciIsImdldFRhcmdldCIsIlByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NDaXJjdWxhciIsIlB1bGxIb29rIiwiX3B1bGxIb29rIiwib25BY3Rpb24iLCJvbkxvYWQiLCJvblB1bGwiLCJwcmV2UHJvcHMiLCJwdWxsSG9vayIsIlJhZGlvIiwiUmFuZ2UiLCJSaXBwbGUiLCJSb3V0ZXJOYXZpZ2F0b3IiLCJjYW5jZWxVcGRhdGUiLCJwYWdlIiwiY2IiLCJyb3V0ZUNvbmZpZyIsInJvdXRlU3RhY2siLCJwcm9jZXNzU3RhY2siLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwicmVwbGFjZVBhZ2UiLCJSb3ciLCJTZWFyY2hJbnB1dCIsIlNlZ21lbnQiLCJnZXRBY3RpdmVCdXR0b25JbmRleCIsInNldEFjdGl2ZUJ1dHRvbiIsIlNlbGVjdCIsIlNwZWVkRGlhbCIsIlNwZWVkRGlhbEl0ZW0iLCJTcGxpdHRlciIsIlNwbGl0dGVyQ29udGVudCIsIlNwbGl0dGVyU2lkZSIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJvblByZU9wZW4iLCJvblByZUNsb3NlIiwib25Nb2RlQ2hhbmdlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm9wZW4iLCJjbG9zZSIsInAiLCJjb25zb2xlIiwiU3dpdGNoIiwiVGFiIiwiVGFiYmFyIiwib25QcmVDaGFuZ2UiLCJvblJlYWN0aXZlIiwiX3RhYmJhciIsIm5leHRQcm9wcyIsImdldEFjdGl2ZVRhYkluZGV4Iiwic2V0QWN0aXZlVGFiIiwidGFicyIsInJlbmRlclRhYnMiLCJ0YWJQYWdlcyIsInRhYiIsImNvbnRlbnQiLCJ0YWJiYXIiLCJUb2FzdCIsIlRvb2xiYXIiLCJUb29sYmFyQnV0dG9uIiwiY29uZmlnIiwicHJvY2VzcyIsInBvcHMiLCJ4Iiwid2FybiIsIm5leHQiLCJzaGlmdCJdLCJtYXBwaW5ncyI6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
