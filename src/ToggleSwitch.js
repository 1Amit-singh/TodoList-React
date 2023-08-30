import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch(props) {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
    props.changeTheme();
  }

  return (
    <div className="app" style={{textAlign: "center"}}>
        <h4>Dark mode</h4>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch;