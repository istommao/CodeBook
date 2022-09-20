import axios from "axios"

const HostURL = "http://127.0.0.1:8000"

const RunCodeRequest = async (payload: any) => {
    let config = {
        headers: { 'Content-Type': 'application/json' }
    }

    try {
      const response = await axios.post(HostURL + '/api/coderun/', payload, config);
      console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
      return {"result": error}
    }
}


export {
  RunCodeRequest,
} 
