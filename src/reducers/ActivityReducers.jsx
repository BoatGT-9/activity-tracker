import { v4 as uuid4 } from "uuid";
const initialState = [
  {
    id: 1,
    name: "runtime",
    duration: " 1 hr",
  },
];

const activitiesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_ACTIVITY":
      return [
        ...state,
        {
          id: uuid4(),
          name: payload.name,
          duration: payload.duration,
        },
      ];
    case "DELETE_ACTIVITY":
      const copyState = [...state];
      return copyState.filter((activity) => activity.id !== payload.id);
    default:
      return state;
  }
};

export default activitiesReducer