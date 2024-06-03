// redux/actions/procurementActions.js
export const createProcurement = (procurementData) => {
    return {
      type: 'CREATE_PROCUREMENT',
      payload: procurementData,
    };
  };
  
  // Other action creators for procurement...
  