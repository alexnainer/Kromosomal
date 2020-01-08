export const ADD_FIRST_PERSON = 'ADD_FIRST_PERSON';

export const addFirstPerson = (tree) => async (dispatch, getState) => {
  dispatch({
    type: addFirstPerson,
    data: tree,
  });
};
