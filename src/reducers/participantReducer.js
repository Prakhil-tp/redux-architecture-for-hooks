import { CHANGE_CURRENT_ROOM } from '../actions/types'

const initialState = {
  currentRoom:{},
  totalRooms:[]
}

 const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_ROOM:
      const totalRooms = state.totalRooms.concat(action.payload)
      return {...state, totalRooms};

    default: return state; 
  }
}

export default reducer