export const dataReducer = (state,action)=>{
    switch (action.type) {
        case "TO_UPDATE_DATA":
            return{
                ...state,...action.payload
            };
        case "TO_UPDATE_COUNTRY_DATA":
            return {
                ...state,
                countryData:{...action.payload}
            }
        case "TO_UPDATE_COUNTRY_NAMES":
            return {
                ...state,
                countries:[...action.payload]
            }
        default:
            break;
    }

}