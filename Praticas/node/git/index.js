const axios = require('axios')
const url = 'https://www.githubstatus.com/'

axios.get(url).then(response => {
    console.log(response.data)
})