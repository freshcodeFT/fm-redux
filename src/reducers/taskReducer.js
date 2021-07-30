import ACTION_TYPES from '../actions/actionTypes';

let serial = 1;

const initialState = [
  {
    id: 0,
    body: 'test task',
    isDone: false,
  },
];

function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { values: task } = action;
      return [
        ...state,
        {
          ...task,
          id: serial++,
        },
      ];
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { id, values } = action;

      return state.map(task => {
        if (task.id === id) {
          return { ...task, ...values };
        }
        return task;
      });
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { id } = action;

      return state.filter(task => task.id !== id);
    }
    default: {
      return state;
    }
  }
}

export default taskReducer;
