import * as actionTypes from './actionTypes';

export const getInputChangeAction = (value: boolean): {} => ({
  type: actionTypes.CHANGE_FOCUESD,
  value
})