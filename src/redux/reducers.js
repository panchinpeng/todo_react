export let doToReducer = (state = [], actions) => {
  switch (actions.type){
    case 'ADD_TODO': {
      let newState = [...state]
      newState.push(actions.data)
      return newState
    }
    default : {
      return state
    }
      
  }
}