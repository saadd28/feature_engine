import axios from "axios";

// export const getcodedetails = (coding_system, code) => {
//   const url = `https://4213-125-209-108-19.ngrok-free.app/api/query-system/?name=${coding_system}&code=${code}`
//   return axios.get(url);
// };


export const getcodedetails = (name, code) => {
    return axios.get(`https://4213-125-209-108-19.ngrok-free.app/api/query-system/`, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        },
        params: {
            name,
            code
        }
    });
};