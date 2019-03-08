const initState = {
  data: []
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "POST_DATA":
      return {
        ...state,
        data: [...state.data, action.data]
      };
    case "DELETE_POST":
      return {
        data: state.data.filter(i => i.id !== action.id)
      };
    case "EDIT_POST":
      return {
        data: state.data.map(i => {
          if (i.id === action.id) {
            i.isEditable = true;
          }
        })
      };
    default:
      return state;
  }
};
export default Reducer;
