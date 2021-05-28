import React, { ChangeEvent } from 'react';

import { STATES, STATES_DATA } from 'common/states';

export type StatesProps = {
  onChange?(e: string): void;
};

const States = ({ onChange }: StatesProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const stateData = STATES_DATA[value];
    onChange && stateData && onChange(stateData);
  };
  return (
    <select onChange={handleChange}>
      {STATES.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default States;
