const initialState = {
  userList: [],
  searchedUserList: [],
  selectedUser: {},
  searched: "",
  pagination: {
    order: "asc",
    orderBy: "first_name",
    page: 0,
    rowsPerPage: 10,
    count: 0,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        userList: action.payload.users,
        pagination: {
          ...state.pagination,
          count: action.payload.count,
        },
      };
    case "SELECT_USER":
      return {
        ...state,
        selectedUser: action.payload.user,
      };
    case "CHANGE_SORT":
      return {
        ...state,
        pagination: {
          ...state.pagination,
          order: action.payload.order,
          orderBy: action.payload.orderBy,
        },
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload.page,
        },
      };
    case "CHANGE_ROWS_PER_PAGE":
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload.page,
          rowsPerPage: action.payload.rowsPerPage,
        },
      };
    case "SEARCH_USER":
      const { searched, searchedUserList, pagination } = action.payload;
      return {
        ...state,
        searched,
        searchedUserList,
        pagination,
      };

    default:
      return { ...state };
  }
};

export default userReducer;
