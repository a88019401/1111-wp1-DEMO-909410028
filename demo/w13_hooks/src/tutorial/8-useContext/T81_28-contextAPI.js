import React, { useState, useContext } from 'react';
import { data } from '../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();

const T81_28_contextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  /*大括弧送程式 小括弧送物件*/ 
  return (
    <PersonContext.Provider value={{people,removePerson}}> 
      <h3>Context API / useContext</h3>
      <List/>
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log('mainData',mainData);
  return(
    <>
      {mainData.people.map((person) => {
        return(
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};
const SinglePerson = ({ id, name }) => {
  const {removePerson} = useContext(PersonContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default T81_28_contextAPI;