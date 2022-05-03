import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyD2X2pMlKfUS9ld7NP4i52OjgmsoRvXWig',
      
   },
})

export default instance