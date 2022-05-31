export const EXCHANGES_AVAIBLE='EXCHANGES_AVAIBLE';
export function listingExchange(exchanges){
    return{
        type: EXCHANGES_AVAIBLE,
        data:{exchanges}
    }
}