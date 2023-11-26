import React, { useState } from "react";
import Select from "react-select";

function Select2Dp({ name, optionProps, onChange = () => {}}) {
  const [isClearable] = useState(true);
  const [isSearchable] = useState(true);
  const [isDisabled] = useState(false);
  const [isLoading] = useState(true);
  const [isRtl] = useState(false);

  const handleOnChange = (selectedOption) => {
    if (onChange && typeof onChange === "function") {
      onChange(selectedOption.value);
    }
  };

  // console.log(optionProps, 'optionProps');
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
        name={name}
        styles={{ zIndex: 99999999 }}
        onChange={handleOnChange}
        options={optionProps}
      />
       
    </>
  );
}

export default Select2Dp;
