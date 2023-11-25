import axios from "axios"

// AAS2 creating a common structure for all API requests install axios then goto allapi.js

export const commonRequest = async (method, url, body, header) => {
    let config = {
        method,
        url,
        headers: header ? header : "application/json",
        data: body
    }
    return axios(config).then(response => {
        console.log(response);
        return response
    }).catch(err => {
        console.log(err);
        return err
    })
}


// file type
// body - from data - header  Content-Type:multipart/formData

// no file type data in api
// body - from data - header  application/json