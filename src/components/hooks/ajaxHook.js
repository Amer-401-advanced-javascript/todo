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
      const response = await axios({
        method: "DELETE",
        url: url,
        data: id,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return [getNote, postNote, putNote, deleteNote];
};

export default useAjax;
