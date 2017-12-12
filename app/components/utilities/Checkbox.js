import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label,render} = this.props;
    const { isChecked } = this.state;

    return (
      <div style={{display: 'flex', alignItems: 'center',marginLeft: "10px"}} className="checkbox">

          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
					<div style={{marginLeft: '5px'}}>
						{this.props.component()}
					</div>


      </div>
    );
  }
}

Checkbox.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
