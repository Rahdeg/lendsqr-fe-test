import axios from "axios";


export const getAllUsers  = async () =>{
    try {
        const res = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        return res.data;
    } catch (error) {
        return null;
    }
} 


export const getUser = async (userId) =>{
    try {
        const res = await axios.delete(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`)
        return res.data;
    } catch (error) {
        return null;
    }
} 

export const getOrganisations  = async () =>{
    try {
        const res = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        const orgs = res.data.orgName
        return orgs;
    } catch (error) {
        return null;
    }
} 