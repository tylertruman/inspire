export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    timeout: 4000
})