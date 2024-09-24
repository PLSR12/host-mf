import {
	configureStore,
	ThunkAction,
	Action,
	combineReducers,
	Tuple,
} from "@reduxjs/toolkit";
import { userSlice } from "./features/user/slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { thunk } from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user"],
};

const reducers = combineReducers({
	user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const makeStore = () =>
	configureStore({
		reducer: persistedReducer,
		devTools: true,
		middleware: () => new Tuple(thunk),
	});

const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

export default store;
