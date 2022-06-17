import React, { useState } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(props.value);
  const handleOnChange = (event) => {
    setIsChecked(!isChecked);
    props.onChange(event.target.name, event.target.checked);
  };

  return (
    <div className="App">
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="highContrastCheckbox"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Checkbox;
