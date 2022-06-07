import React from "react";

const RangeBar = (props) => {
    return (
        <input 
          id="typeinp" 
          type="range" 
          min="0" max="5"
          onChange={props.onChange}
          step="1"/>
      );
}

export default RangeBar