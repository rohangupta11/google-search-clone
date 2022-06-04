import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = "https://google-search3.p.rapidapi.com/api/v1";

function ResultContextProvider({ children })
{
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) =>
  {
    setIsLoading(true);
    const response = await fetch(baseURL + type, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "845a9f14c2mshbae3891057444b6p1b1716jsnab7b8e89c955",
      },
    });

    const data=await response.json();
    if(type.includes("/image"))
        setResults(data.image_results);
    else if(type.includes("/news"))
        setResults(data.entries);
    else
        setResults(data.results);

    setIsLoading(false);
  };
  return(
    <ResultContext.Provider value={{getResults, results,searchTerm,setSearchTerm,isLoading}}>
        {children}
    </ResultContext.Provider>
  );
}
export const useResultContext = () => useContext(ResultContext);
export default ResultContextProvider;