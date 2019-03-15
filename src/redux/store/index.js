import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers/index';

const loggerMiddleWare = createLogger();

export default function configStore() {
  const store = createStore(
    reducers,
    applyMiddleware(
      thunkMiddleWare,
      loggerMiddleWare
    )
  )
  return store
}
