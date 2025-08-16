
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, Persistor } from 'redux-persist';
import { configureStore as configureStoreRTK } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
import { wishlistSlice } from './slices/wishlistSlice';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
 

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
}));

const store = configureStoreRTK({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware:any) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppPersistor = Persistor;

export const persistor = persistStore(store);

export default store;

