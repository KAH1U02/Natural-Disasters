import * as types from '../constants/actionTypes';
import countryList from '../constants/countryList'

const initialState = {
  // Initialize state here
  selectedCountry: null,
	selectCountryData: null,
  countryList,  // TODO: Populate country list from GET request to database
  disasterTypes: {
    Climatological: false,
    Geophysical: false,
    Hydrological: false,
    Meteorological: false
  }
};

const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
	  case types.CHANGE_COUNTRY:
		  return {
			  ...state,
			  selectedCountry: action.payload,
      };
      
	  case types.CHANGE_COUNTRY_DATA: {
		  const selectedCountryData = {
        Climatological: [],
        Geophysical: [],
        Hydrological: [],
        Meteorological: [],
      };

      action.payload.disastersByCountryName.forEach(
        dataPoint => {
          selectedCountryData[dataPoint.disasterType].push({
            decade: dataPoint.timeRange,
            Occurrences: dataPoint.events,
            "Total Deaths": dataPoint.deaths
          });
        }
      );

	  	return {
			  ...state,
			  selectedCountryData
		  }
    }
    
    case types.CHANGE_DISASTER_TYPE_VIEW: {
      const disasterTypes = {
        ...state.disasterTypes
      };
      disasterTypes[action.payload.disasterType] = action.payload.newVal;
      return {
        ...state,
        disasterTypes
      };
    }

    default: 
      return state;
  }
};

export default chartsReducer;
