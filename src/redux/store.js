import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usuarioReducer, { delLocalAstateAccion } from './usuarioDuck'

const rootReducer = combineReducers({
    usuarios: usuarioReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    delLocalAstateAccion()(store.dispatch)
    return store
}
