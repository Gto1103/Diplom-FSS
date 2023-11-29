import {configureStore} from "@reduxjs/toolkit";
import calendar from '../reducers/createCalendarSlice';
import seance from '../reducers/createSeanceSlice';
import popup from '../reducers/createPopupSlice';
import admin from '../reducers/createAdminSlice';
import auth from '../reducers/createAuthSlice';

export const store = configureStore({
    reducer: {
        calendar,
        seance,
        auth,
        admin,
        popup,
    },
});
