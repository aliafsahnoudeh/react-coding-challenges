import React, { useEffect, useState } from 'react';
import Card from './components/card';
import './App.css';


function App() {
  const [list, setList] = useState([]);

  const getResponse = async () => {
    const result = [
      {
        'id': Math.random(),
        text: 'jadsfhkldhjf',
        'description': 'kdfnaksdjf',
        url: './logo192.png'
      },
      {
        'id': Math.random(),
        text: 'jadsfhkldhjf',
        'description': 'kdfnaksdjf',
        url: './logo192.png'
      },
      {
        'id': Math.random(),
        text: 'jadsfhkldhjf',
        'description': 'kdfnaksdjf',
        url: './logo192.png'
      },
      {
        'id': Math.random(),
        text: 'jadsfhkldhjf',
        'description': 'kdfnaksdjf',
        url: './logo192.png'
      },
      {
        'id': Math.random(),
        text: 'jadsfhkldhjf',
        'description': 'kdfnaksdjf',
        url: './logo192.png'
      },
      {
        'id': Math.random(),
        text: 'jadsfhkldhjf',
        'description': 'kdfnaksdjf',
        url: './logo192.png'
      },
      {
        'id': Math.random(),
        text: 'jadsfhkldhjf',
        'description': 'kdfnaksdjf',
        url: './logo192.png'
      },
      {
        'id': Math.random(),
        text: 'jadsfhkldhjf',
        'description': 'kdfnaksdjf',
        url: './logo192.png'
      }
    ];

    setTimeout(() => {
      setList(list.concat(result));
    }, 1000);
  };

  useEffect(() => {
    getResponse();

    return () => {
    };
  },[]);


  useEffect(()=> {
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          getResponse();
        }
      });
    },{
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const observableItem = document.querySelector('#observable');
    if(observableItem) {
      observer.observe(observableItem);
    }


    return () => {
      if(observableItem) {
        observer.unobserve(observableItem);
      }
      observer.disconnect();
    };

  }, [list]);
     


  return (
    <div className="App">
      <div className="List">
        {
          list.map((item, index) => <Card key={item.id} observable={index === list.length - 4} {...item} />)
        }
      </div>
    </div>
  );
}

export default App;
