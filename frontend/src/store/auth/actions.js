import { auth } from '../../config/firebase';

export const setUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_USER', payload: user });
  } catch (err) {
    console.log(err);
  }
};

export const clearUser = () => async (dispatch) => {
  try {
    auth.signOut();
    dispatch({ type: 'CLEAR_USER' });
  } catch (err) {
    console.log(err);
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const authUser = await auth.signInWithEmailAndPassword(email, password);
    dispatch({ type: 'SET_USER', payload: authUser });
    return authUser.user.updateProfile({
      displayName: 'יהודה',
    });
  } catch (err) {
    alert(err.message);
  }
};
