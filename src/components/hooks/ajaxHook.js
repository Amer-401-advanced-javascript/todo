import axios from "axios";

const useAjax = (cb) => {
  const getNote = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const postNote = async (url, item) => {
    try{
    const response = axios({
      method: "post",
      url: url,
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      data: item,
    })
  }catch (error) {
    console.error(error);
  }
  };


  const putNote = async (url, data) => {
    try {
      const response = await axios({
        method: "PUT",
        url: url,
        data: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  const deleteNote = async (url, id) => {
    try {
      let id1 = {_id: id }      
      const response = await axios({
       method: "delete",
       url: url,
       mode: "cors",
       data: {data:id},
      });
      console.log(response);
      
    } catch (error) {
      console.error(error);
    }
  };
  return [getNote, postNote, putNote, deleteNote];
};

export default useAjax;
