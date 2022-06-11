import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Checkbox;
