import { CHANGE_CURRENT_ROOM } from '../actions/types'

const initialState = {
  currentRoom:{},
  totalRooms:[]
}

 const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_ROOM:
      return state;

    default: return state; 
  }
}

export default reducer;