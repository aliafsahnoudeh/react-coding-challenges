import React from 'react';

function Select(props) {
  const {onSelect} = props;


  return (
    <div>
      <label htmlFor="filters">Filters:</label>

      <select name="filters" id="filters" onChange={(event) => {
        onSelect(event.target.value);
      }}>
        <option value="all">All</option>
        <option value="checked">Checked</option>
        <option value="unchecked">Unchecked</option>
      </select>
    </div>
  );
}

export default Select;