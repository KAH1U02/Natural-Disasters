import * as types from '../constants/actionTypes';

export const changeCountry = countryName => ({
  type: types.CHANGE_COUNTRY,
  payload: countryName
});

export const changeCountryData = countryData => ({
	type: types.CHANGE_COUNTRY_DATA,
	payload: countryData
});

export const changeDisasterTypeView = (event, newVal) => ({
	type: types.CHANGE_DISASTER_TYPE_VIEW,
	payload: {
    disasterType: event.target.id,
    newVal
  }
});