// actions.js
export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_DATA_REQUEST' });
  
      try {
        const response = await fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3');
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      }
    };
  };