import { combineReducers } from 'redux';

import { RECEIVE_BILL } from 'src/actions';

function bill(state = {
  callCharges: { calls: [] },
  package: { subscriptions: [] },
  skyStore: { buyAndKeep: [], rentals: [] },
  statement: { period: {} },
}, action){
  switch(action.type) {
    case RECEIVE_BILL:
      return {
        ...state,
        ...action.bill
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  bill
});

export default rootReducer;