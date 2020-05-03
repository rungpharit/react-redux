import penTypes from './penTypes'

const initialState = {
  numOfPens : 20
}

function penReducer( state = initialState , action ){
  switch(action.type){
    case penTypes.ADD_Pen:
      return {
        ...state,
        numOfPens:state.numOfPens + 1
      };
    case penTypes.BUY_Pen:
      return {
        ...state,
        numOfPens:state.numOfPens - 1
      };
    default :
      return state ;
  }
}

export default penReducer;