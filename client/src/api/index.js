import axios from "axios";

const baseUrl = 'http://localhost:5000/api';

const fetchPosts = () => {
     axios.get(baseUrl+'/posts');
}