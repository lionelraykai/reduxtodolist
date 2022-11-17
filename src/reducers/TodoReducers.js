const initialList = {
  list: [],
};

const todoReducers = (state = initialList, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const deleteList = state.list.filter((elem) => elem.id != action.id);
      return {
        ...state,
        list: deleteList,
      };

      case "DELETE_ALL":
        return {
            ...state,
            list:[]
        }
    default:
      return state;
  }
};

export default todoReducers;
