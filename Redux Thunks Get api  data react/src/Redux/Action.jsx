import axios from "axios"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"

export const getData = async (dispatch) => {
    dispatch({ type: FETCH_REQUEST })

    try {
        const responce = await axios.get('https:/dummyjson.com/products')
        const finalData = responce.data.products
        dispatch({ type: FETCH_SUCCESS, payload: finalData })

    } catch (e) {
        console.log(e)
        dispatch({ type: FETCH_FAILURE, payload: e.message })
    }
}