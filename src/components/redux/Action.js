import { CHECKBOX_SWITCH, CHECKBOX_SWITCH_ALL } from './Types';

export const checkboxSwitch = (id) => ({
  type: CHECKBOX_SWITCH,
  id,

});

export const checkboxSwitchAll = (id, isActive) => ({
  type: CHECKBOX_SWITCH_ALL,
  id,
});
