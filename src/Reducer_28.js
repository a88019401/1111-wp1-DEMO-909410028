const Reducer_28 = (state, action) => {
  console.log(action.payload)
  if(action.type === 'SHOW_ALERT'){
    return {...state, alert: action.payload}
    
  }

  if (action.type === "REMOVE_ITEM") {
    const filteredBlogs = state.blogs.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, blogs: filteredBlogs, loading: false };
  }


};


export default Reducer_28;
