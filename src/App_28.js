import React, { useState, useEffect } from 'react';
import List_28 from './components/List_28';
import Alert_28 from './components/Alert_28';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const App_28 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //預先取消掉 action 的動作
    if (!name) {
      showAlert(true, 'Please enter value', 'danger');
    } else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };
  //{...某物件}  意思是把整包的值抓近來
  return (
    <>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert_28 {...alert} removeAlert={showAlert} />}
          <h3>Grocery Bub - 909410028</h3>
          <div className='form-control'>
            <input
              type='text'
              className='grocery'
              placeholder='e.g. eggs'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button type='submit' className='submit-btn'>
              submit
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className='grocery-container'>
            <List_28 items={list} />
            <button className='clear-btn'>Clear Items</button>
          </div>
        )}
      </section>
    </>
  );
};

export default App_28;
