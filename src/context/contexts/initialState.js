import {fetchUser,fetchUsers} from '../../Api/fetchlocal'

const usersinfo = fetchUsers();
const userinfo = fetchUser();

export const initialState = {
  userinfo: userinfo,
  usersinfo: usersinfo,
};
