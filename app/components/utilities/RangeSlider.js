import React from 'react';


import Slider from 'rc-slider';
//import 'rc-slider/assets/index.css';
//import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};


const RangeSlider = ({handleRange}) => (
		<div style={{position: 'relative', width: "220px", marginLeft: "15px"}}>
      <Range onAfterChange={handleRange} min={0} max={4} defaultValue={[0, 4]} step={0.5} tipFormatter={value => `${value}`} />
    </div>
);

export default RangeSlider;
