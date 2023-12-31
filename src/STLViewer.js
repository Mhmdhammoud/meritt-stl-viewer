import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paint from './Paint';
class STLViewer extends Component {
  static propTypes = {
    className: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    modelColor: PropTypes.string,
    rotate: PropTypes.bool,
    orbitControls: PropTypes.bool,
    cameraX: PropTypes.number,
    cameraY: PropTypes.number,
    cameraZ: PropTypes.number,
    lights: PropTypes.array,
    lightColor: PropTypes.string,
    rotationSpeeds: PropTypes.arrayOf(PropTypes.number),
    models: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.instanceOf(ArrayBuffer),
    ]).isRequired,
  };

  static defaultProps = {
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
    models: undefined,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.paint = new Paint();
    this.paint.init(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      if (
        JSON.stringify(nextProps.sliders) === JSON.stringify(this.props.sliders)
      ) {
        this.paint = new Paint();
      }
      return true;
    }
    return false;
    // return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    this.props = nextProps;
    this.paint.init(this);
  }
  componentWillUnmount() {
    this.paint.clean();
    delete this.paint;
  }

  render() {
    const { width, height, backgroundColor } = this.props;
    return (
      <div
        className={this.props.className}
        style={{
          width: width,
          height: height,
          overflow: 'hidden',
          backgroundColor: backgroundColor,
        }}
      >
        <div
          id="loader"
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="spinner spinner-blue"></div>
        </div>
      </div>
    );
  }
}

module.exports = STLViewer;
