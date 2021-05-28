import React, { ChangeEvent } from 'react';

import { StateCode } from 'common/states';
import { CITIES_DATA } from 'common/citites';

export type CitiiesProps = {
  state: StateCode;
  onChange?(e: string): void;
};

const Cities = ({ state, onChange }: CitiiesProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onChange && value && onChange(value);
  };
  return (
    <select onChange={handleChange}>
      {CITIES_DATA[state] &&
        CITIES_DATA[state].map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
    </select>
  );
};

export default Cities;
