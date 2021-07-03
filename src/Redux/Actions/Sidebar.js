import { SIDEBAR_TOGGLE } from '../Type';

export const toggleSidebar = (isOpen) => {
  return {
    type: SIDEBAR_TOGGLE,
    data: { isOpen }
  }
}