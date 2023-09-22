import {useEffect, useState} from "react";


export const Messages = () => {
const [advice, setAdvice] = useState("");
  useEffect(() => {
    const url ="https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let json = await response.json();
        // console.log(json.slip.advice);
        setAdvice(json.slip.advice);
        
      } catch(error) {
        console.log("error: ", error);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="bg-slate-200">
      {advice}
    </div>
  )
}