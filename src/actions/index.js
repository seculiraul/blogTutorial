import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder"


export const fetchPostsAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPost());
       
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id =>  dispatch(fetchUser(id)))
        .value()
}


export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);
    dispatch({type: 'FETCH_USER', payload: response.data})
};

/*export const fetchUser = (userId) => async dispatch => _fetchUser(userId, dispatch);
const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
});*/

