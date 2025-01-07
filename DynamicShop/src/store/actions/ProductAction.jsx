import axios from "axios";
import { add } from "../reducers/ProductSlice";
import { products } from "../../Product";

export const asynGetProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('https://apigenerator.dronahq.com/api/0erByQ6G/chairs');
        const data = response.data;
        dispatch(add(data));
    } catch  {
        dispatch(add(products));
    }
};
