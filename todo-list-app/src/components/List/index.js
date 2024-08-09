import React from 'react';
import Card from '../Card';


function List(props) {
  const {list, onDelete, onChange} = props;
  
  return (
    <div className="List">
      {
        list.map((item, index) => <Card key={index}
          text={item.text}
          onDelete={() => onDelete(index)}
          checked={item.checked} 
          onChange={(checked) => onChange(checked, index)}/>)
      }
    </div>
  );
}

export default List;
