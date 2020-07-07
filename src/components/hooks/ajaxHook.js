import axios from 'axios';

const useAjax = (cb) => {

    const getNote = async (url) => {
        try{
            const response = await axios.get(url)
            cb(response.data)
        } catch (error) { console.error(error) }
    }

    const postNote = async (url, data) => {
        try{
            const response =await axios({
                method:'POST',
                url:url,
                data: data,
            })
            console.log(response);
            
        } catch(error) { console.error(error) }
    }

    const putNote = async (url, data) => {
        try{
            const response = await axios({
                method:'PUT',
                url:url,
                data:data
            })
        } catch(error) { console.error(error) }
    }

    const deleteNote = async (url, id) => {
        try{
            const response = await axios({
                method:'DELETE',
                url: url,
                data:id
            })
        } catch(error) {console.error(error)}
    }
    return [getNote, postNote, putNote, deleteNote]
}

export default useAjax;