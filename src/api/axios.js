import axios from "axios";  

export default axios.create({
  baseURL:'http://127.0.0.1:8000/categories/user-categories/?created_by=1',
  headers:{
  },
  
});
