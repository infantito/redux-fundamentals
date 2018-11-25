// Create Store: Updating the State
{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false,
  }
}

{
  type: 'REMOVE_TODO',
  id: 0,
}

{
  type: 'TOGGLE_TODO',
  id: 0,
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a Marathon',
  }
}

{
  type: 'REMOVE_GOAL',
  id: 0,
}

/*
  Characteristics of a Pure Function
  1) They always return the same result if the same arguments are passed in.
     (PF always return the same result given the same arguments.)
  2) They depend only on the arguments passed into them.
     (PF's execution doesn't depend on the state of the application)
  3) Never produce any side effects.
     (PF don't modify the variables outside of their scope.)
*/

// Reducer function (It must be a Pure Function)
function todos (state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo]);
  }

  return state;
}

function createStore () {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    }
  }

  return {
    getState,
    subscribe,
  }
}
