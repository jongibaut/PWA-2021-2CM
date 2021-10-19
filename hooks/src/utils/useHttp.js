import React, {useState, useEffect} from 'react';
import axios from 'axios';
const useGet = ({intialState = [], url, params = {}}) => {
    const [data, setData] = useState(intialState); //data --> los datos que me devuelva la url
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const get = async() => {
            try{
                const {data} = await axios.get(url, params);
                setData(data.results);
                console.log(data);
                setLoading(false);
            }
            catch(err){
                console.error(err);
            }
        }

        get();
    }, [url]);
    return [data, loading];
}
 
export default useGet;