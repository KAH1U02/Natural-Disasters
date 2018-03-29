import * as types from '../constants/actionTypes';
import countryList from '../constants/countryList'

const initialState = {
  // Initialize state here
  selectedCountry: null,
  countryList,  // TODO: Populate country list from GET request to database
  chartSelections: {
    disasterType: {
      climatological: true,
      geophysical: true,
      hydrological: true,
      meteorological: true
    }
  }
};

const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add cases for different action types, returning updated state
    case types.CHANGE_COUNTRY: 
      return {
        ...state,
        selectedCountry: action.payload
      };

    default: 
      return state;
  }
};

export default chartsReducer;