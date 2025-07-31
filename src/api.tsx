import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse{
    data: CompanySearch[];
}

export const searchCompanies = async(query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&apikey=${process.env.REACT_APP_API_KEY}`
        )
        return data;
    }catch(error){
        if ((error as any).isAxiosError) {
            console.log("error message: ", (error as Error).message);
            return (error as Error).message;
        }else{
            console.log("unexpected error: ", error);
            return "An expected error has occured.";
        }
    }
}