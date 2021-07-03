import { TUTOR_MODAL_TOGGLE } from '../Type';

export const toggleTutorModal = (isOpen, info = null, rect = null) => {
  return {
    type: TUTOR_MODAL_TOGGLE,
    data: { isOpen, info, rect }
  }
}