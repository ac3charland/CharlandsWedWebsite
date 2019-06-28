import axios from "axios";

export default {

    saveShred: function(shredData) {
        console.log("Posting shred with ShredData: ")
        console.log(shredData)
        return axios.post("api/posts", shredData);
    },

    getAllShreds: function() {
        return axios.get("/api/posts/");
    },

    getUserShreds: function(username){
        return axios.get("/api/posts/user/" + username)
    },

    getPostShred: function(id) {
        return axios.get("/api/posts/" + id);
    },

    postComment: function(comment, id) {
        return axios.post("/api/posts/" + id + "/comments", comment)
    },
    

}