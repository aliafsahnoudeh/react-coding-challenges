import React, { useEffect, useState } from 'react';
import List from './components/List';
import Select from './components/Select';
import './App.css';


function App() {
  const [list,setList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [visibleList , setVisibleList] = useState([]);
  const [text, setText] = useState('');


  const handleAdd = () => {
    setList(list.concat({
      text,
      checked: false
    }));
  };

  const handleDelete = (indexInVisible) => {
    const index = list.findIndex(item => item.text === visibleList[indexInVisible].text);
    if(index > -1) {
      list.splice(index, 1);
      setList([...list]);
    } else {
      throw new Error('Error on delete');
    }
  };

  const handleSelect = (filter) => {
    setFilter(filter);
  };

  const handleChange = (checked, indexInVisible) => {
    const index = list.findIndex(item => item.text === visibleList[indexInVisible].text);
    if(index > -1) {
      list[index].checked = checked;
      setList([...list]);
    }else {
      throw new Error('Error on Change');
    }
  };

  useEffect(() => {
    setVisibleList([...list.reduce((acc, item) => {
      if((filter === 'all') || (filter === 'checked' && item.checked) || (filter === 'unchecked' && !item.checked))
        acc.push(item);

      return acc;
    },[])]);
  }, [list, filter]);

  return (
    <div className="App">
      <Select onSelect={handleSelect} />
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <List list={visibleList} onDelete={handleDelete} onChange={handleChange} />
    </div>
  );
}

export default App;
