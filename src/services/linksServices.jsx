import axios from 'axios'

const API_URL = 'http://localhost:3000/api/links/'

export const getLinks = async (linkData) => {
    try {
        const response = await axios.get(API_URL)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Error al obtener todos los links', error)
        throw error
    }
}