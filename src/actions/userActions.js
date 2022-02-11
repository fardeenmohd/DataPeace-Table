import axios from "axios";

const usersUrl =
  "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";

export const loadUsers = () => async (dispatch, getState) => {
  const usersData = await axios.get(usersUrl);
  dispatch({
    type: "FETCH_USERS",
    payload: {
      users: usersData.data,
      count: usersData.data.length,
    },
  });
};

export const selectUser = (id) => (dispatch, getState) => {
  const user = getState().users.userList.filter((user) => {
    return user.id == id;
  })[0];

  dispatch({
    type: "SELECT_USER",
    payload: {
      user,
    },
  });
};

export const changeSort = (event, property) => (dispatch, getState) => {
  const isAsc =
    getState().users.pagination.orderBy === property &&
    getState().users.pagination.order === "asc";

  dispatch({
    type: "CHANGE_SORT",
    payload: {
      order: isAsc ? "desc" : "asc",
      orderBy: property,
    },
  });
};

export const changePage = (event, newPage) => (dispatch) => {
  dispatch({
    type: "CHANGE_PAGE",
    payload: {
      page: newPage,
    },
  });
};

export const changeRowsPerPage = (event) => (dispatch) => {
  dispatch({
    type: "CHANGE_ROWS_PER_PAGE",
    payload: {
      page: 0,
      rowsPerPage: parseInt(event.target.value, 10),
    },
  });
};

export const searchUser = (event) => (dispatch, getState) => {
  const { userList, pagination } = getState().users;
  const searched = event.target.value;

  if (searched === "") {
    dispatch({
      type: "SEARCH_USER",
      payload: {
        searched: event.target.value,
        searchedUserList: [],
        pagination: {
          ...pagination,
          count: userList.length,
          page: 0,
        },
      },
    });
  } else {
    const searchedUserList = userList.filter((row) => {
      return (
        row.first_name.toLowerCase().includes(searched.toLowerCase()) ||
        row.last_name.toLowerCase().includes(searched.toLowerCase())
      );
    });
    dispatch({
      type: "SEARCH_USER",
      payload: {
        searched: event.target.value,
        searchedUserList,
        pagination: {
          ...pagination,
          count: searchedUserList.length,
          page: 0,
        },
      },
    });
  }
};
