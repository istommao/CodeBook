import axios from "axios"

const HostURL = "https://play.golang.org/compile"

const RunGoCodeRequest = async (payload: any) => {
    let config = {
        // headers: { 'Content-Type': 'application/json' }
    }

    try {
      const response = await axios.post(HostURL, payload, config);
      console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
      return {"result": error}
    }
}


export {
  RunGoCodeRequest,
} 
