export const reducer_28 = (state, action) => {
  const newPeople = [...state.people,action.payload];
  if(action.type ==='ADD_ITEM'){
    return{
      ...state,
      people:newPeople,
      isModalOpen:true,
      modalContent:'item added'
    }
  }
  if(action.type === 'CLOSE_MODAL'){
    return {
      ...state,isModalOpen:false,
      modalContent:''

    }
  }
};