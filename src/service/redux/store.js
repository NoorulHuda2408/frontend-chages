import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signup from "./reduces/singup";
import singin from "./reduces/sigin";
// import User from "./reducer/user";
// import licenses from "./reducer/licenses";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import mentorSignup from "./reducer/mentorSignup";
// import forumReducer from "./reducer/forumReducer";

// export const store = configureStore({
//   reducer: {
//     singup: SingUp,
//     singin: SingIn,
//     user: User,
//   },
// });

const appReducer = combineReducers({
  signup: signup,
  signin: singin,
//   user: User,
//   mentorSignup: mentorSignup,
//   forumData: forumReducer

});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
