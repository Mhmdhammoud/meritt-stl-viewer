'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paint = require('./Paint');

var _Paint2 = _interopRequireDefault(_Paint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STLViewer = function (_Component) {
  _inherits(STLViewer, _Component);

  function STLViewer(props) {
    _classCallCheck(this, STLViewer);

    return _possibleConstructorReturn(this, (STLViewer.__proto__ || Object.getPrototypeOf(STLViewer)).call(this, props));
  }

  _createClass(STLViewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.paint = new _Paint2.default();
      this.paint.init(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
        if (JSON.stringify(nextProps.sliders) === JSON.stringify(this.props.sliders)) {
          this.paint = new _Paint2.default();
        }
        return true;
      }
      return false;
      // return JSON.stringify(nextProps) !== JSON.stringify(this.props);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.props = nextProps;
      this.paint.init(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.paint.clean();
      delete this.paint;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          backgroundColor = _props.backgroundColor;

      return _react2.default.createElement(
        'div',
        {
          className: this.props.className,
          style: {
            width: width,
            height: height,
            overflow: 'hidden',
            backgroundColor: backgroundColor
          }
        },
        _react2.default.createElement(
          'div',
          {
            id: 'loader',
            style: {
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
          },
          _react2.default.createElement('div', { className: 'spinner spinner-blue' })
        )
      );
    }
  }]);

  return STLViewer;
}(_react.Component);

STLViewer.propTypes = {
  className: _propTypes2.default.string,
  url: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  backgroundColor: _propTypes2.default.string,
  modelColor: _propTypes2.default.string,
  rotate: _propTypes2.default.bool,
  orbitControls: _propTypes2.default.bool,
  cameraX: _propTypes2.default.number,
  cameraY: _propTypes2.default.number,
  cameraZ: _propTypes2.default.number,
  lights: _propTypes2.default.array,
  lightColor: _propTypes2.default.string,
  rotationSpeeds: _propTypes2.default.arrayOf(_propTypes2.default.number),
  models: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.instanceOf(ArrayBuffer)]).isRequired
};
STLViewer.defaultProps = {
  backgroundColor: '#fff',
  width: 400,
  height: 400,
  modelColor: '#B92C2C',
  rotate: true,
  orbitControls: true,
  cameraX: 0,
  cameraY: 0,
  cameraZ: null,
  lights: [0, 0, 1],
  lightColor: '#ffffff',
  rotationSpeeds: [0, 0, 0.02],
  models: undefined
};


module.exports = STLViewer;