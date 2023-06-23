import axios from "axios";
import { userData } from "./helpers";

export const makeUserRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers : {
        Authorization:"bearer "+userData().jwt,
    }
});