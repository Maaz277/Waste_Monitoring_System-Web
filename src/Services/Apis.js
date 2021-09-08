import axios from 'axios'
const constant = require('./Constants')
export default{
    
    DEPOT_COUNT : function(data){
        return axios.get(constant.URL + constant.DEPOT_COUNT + data , {
            params: {
                depot: data
            }
        })
    },
}