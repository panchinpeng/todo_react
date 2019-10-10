export let doToReducer = (state = [], actions) => {
  switch (actions.type){
    case 'ADD_TODO': {
      let newState = [...state]
      newState.push({title: actions.data, complete: false});
      return newState
    }
    case 'DO_FINISHED': {
      let newState = [...state]
      newState[actions.data] && (newState[actions.data].complete = true)
      return newState
    }
    default : {
      return state
    }
      
  }
}