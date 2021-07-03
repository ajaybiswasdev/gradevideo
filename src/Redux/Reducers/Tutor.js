import { TUTOR_MODAL_TOGGLE } from "../Type";

const INITIAL = {
  isOpen: false,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case TUTOR_MODAL_TOGGLE: {
      const { isOpen, info, rect } = action.data;
      return { ...state, isOpen, info, rect };
    }

    default:
      return state;
  }
};
