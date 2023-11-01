import React, { FC } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
type phoneProps = {
    darkmode: boolean;
};

const phone: FC<phoneProps> = ({ darkmode, ...fields }) => {
  return (
    <div className={darkmode  ? "whiteMode" : "darkMode"}>
      <PhoneInput
        country={'us'}
        {...fields}
        // value={this.state.phone}
        // onChange={(phone) => this.setState({ phone })}
      />
    </div>
  );
};

export default phone;
