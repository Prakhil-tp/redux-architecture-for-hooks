import combineReducers from 'utils/combineReducers'
import participantReducer from './participantReducer'
import trainerReducer from './trainerReducer'

export default combineReducers({
  Trainer: trainerReducer,
  Participant: participantReducer
})