import { createSlice } from '@reduxjs/toolkit';
// com
import { openNotificationWithIcon } from "../helper/request/notification_antd";
// helper
import {
    finishedLoadingSuccess,
    finishedLoadingFailure,
    isLoadingRequest,
} from '../helper/redux/slice_redux';
import { authServices } from './services';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../config/storage_key';
import { history } from '../helper/request/api_client';

const initialState = {};

// Slice
const slice = createSlice({
    name: 'app_state',
    initialState,
    reducers: {
        loginRequest: (state, { payload }) => {
            isLoadingRequest(state);
            state.isLogin = false;
        },
        loginSuccess: (state, { payload }) => {
            finishedLoadingSuccess(state);
            state.isLogin = true;
            state.userrole = payload.userrole;
        },
        loginFail: (state, { payload }) => {
            finishedLoadingFailure(state)
            state.isLogin = false;
        }
    }
});
// action
const { loginRequest, loginSuccess, loginFail } = slice.actions;

export const requestLogin = (body) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const { data } = await authServices.handleLogin(body)
        await dispatch(loginSuccess(data));
        localStorage.setItem(ACCESS_TOKEN, data.access_token);
        localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
        openNotificationWithIcon("success", data.msg);
        console.log('redirect home')
        return 1;
    } catch (err) {
        console.log(err, 'err')
        dispatch(loginFail())
        return 0;
    }
}
// selector

export const isLoginSelector = state => {
    console.log(state, 'ddd')
    return state.app.isLogin
};


export default slice.reducer;
