import { GET_ALL_RECORDS } from "../types/RecordTypes";

const stateDefault = {
  recordsDefault: [],
};

export const LessonReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ALL_RECORDS:
      state.recordsDefault = action.value;
      return { ...state };

    default:
      return { ...state };
  }
};