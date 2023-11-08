import React, { useState } from 'react';
import Select from 'react-select';

function Select2Dp({optionProps}) {
  const [isClearable] = useState(true);
  const [isSearchable] = useState(true);
  const [isDisabled] = useState(false);
  const [isLoading] = useState(true);
  const [isRtl] = useState(false);

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={optionProps}
        styles={{ zIndex:99999999 }}
      />
    </>
  );
}

export default Select2Dp;
