import React, { useState, useEffect } from 'react'
import List_28 from './components/List_28'
import Alert_28 from './components/Alert_28'

const App_28 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false, msg:'', type: '',
  });

    const showAlert = (show = false, msg= '', type='') => {
      setAlert({show, msg, type});
    }
  const handleSubmit = (e) => {
    e.preventDefault(); //預先取消掉 action 的動作
    if (!name){
      showAlert(true,'Please enter value','danger')
    }else{
      showAlert(true,'value changed','success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  }

  return <>
  <section className='section-center'>
    <form className="grocery-form" onSubmit = {handleSubmit}>
      <h3>Grocery Bub - 909410028</h3>
      <div className='form-control'>
        <input type="text" className='grocery' placeholder='e.g. eggs' value ={name} onChange={
          (e) => {
            setName(e.target.value)
            }}/> 
        <button type='submit' className='submit-btn' >submit</button>
      </div>
    </form>
  </section>
  </>
}

export default App_28
