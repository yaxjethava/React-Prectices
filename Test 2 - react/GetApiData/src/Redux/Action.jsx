import axios from "axios"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"

export const getServerData = async (dispatch) => {
    dispatch({ type: FETCH_REQUEST })
    console.log('request');

    try {
        const response = await axios.get("https://dummyjso.com/products")
        const finalData = response.data.products
        dispatch({ type: FETCH_SUCCESS, payload: finalData })
        console.log(finalData);

    } catch (e) {
        console.log(e)
        dispatch({ type: FETCH_FAILURE, payload: e.message })
    }
}