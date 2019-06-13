import { createStore, compose} from 'redux'
import rootReducer from '../reducers/reducers'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const enhancers = compose(
    //    window.devToolsExtension ? window.devToolsExtension() : f => f
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

// https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975
const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer,enhancers);
export const persistor = persistStore(store);

//export const store = createStore(surveyApp,enhancers)

