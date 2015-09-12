import max from 'lodash/math/max';
import React, {PropTypes} from 'react';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

const ANGLE_OFFSET = 90
  , START_ANGLE = 60
  , STROKE_WIDTH = 10;

const polarToCartesian = (centerX, centerY, radius, angleInDegrees)=>{
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

const arcCommands = (centerX, centerY, radius, startAngle, endAngle)=> {
  const start = polarToCartesian(centerX, centerY, radius, endAngle);
  const end = polarToCartesian(centerX, centerY, radius, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  return `
    M ${start.x} ${start.y}
    A ${radius} ${radius} 0 ${arcSweep} 0 ${end.x} ${end.y}
  `;
}

class Meter extends React.Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
  }

  state = {}

  render() {
    const { width, height } = this.props;
    return (
      <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`}
        style={{
          display: 'inline'
        }}
      >
        <g className="Meter--threshold">
          <path fill='none' d={::this.calculateArc()}
            style={{
              stroke: 'rgba(221,221,221_WIDTH,0.5)',
              strokeWidth: STROKE_WIDTH
            }}
          />
        </g>
        <g>
          {::this.calculateSeries()}
        </g>
      </svg>
    );
  }

  componentWillMount(){
    const { width, height, series } = this.props;
    this.setState({
      breadth: max([width, height]) / 2,
      radius: ((width + height) / 4) - STROKE_WIDTH,
      total: series.reduce((acc, item)=> acc + item.value, 0)
    })
  }

  translateEndAngle(startAngle, value) {
    const { total } = this.state;
    return clamp(startAngle + ((240.0 / total) * value), 0, 360)
  }

  arcCommands(startAngle, endAngle) {
    const { breadth, radius } = this.state;
    return arcCommands(
      breadth,
      breadth,
      radius,
      startAngle + ANGLE_OFFSET,
      endAngle + ANGLE_OFFSET
    );
  }

  calculateArc(){
    return this.arcCommands(START_ANGLE, this.translateEndAngle(START_ANGLE, 100));
  }

  calculateSeries(){
    const { series } = this.props;
    let startAngle = START_ANGLE;
    return series.map((item, i)=>{
      let endAngle = this.translateEndAngle(startAngle, item.value)
      let commands = this.arcCommands(startAngle, endAngle)
      startAngle = endAngle;
      return (
        <path key={i} fill="none" d={commands} style={{
            stroke: item.color,
            strokeWidth: STROKE_WIDTH,
          }}
        />
      );
    })
  }
}

export default Meter;