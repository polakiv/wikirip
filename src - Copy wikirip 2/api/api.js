import * as axios from "axios";
 

const instance = axios.create({ 
    baseURL: 'https://wikirip.site/index.php?route=api/', 
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`getthree&page=${currentPage}&limit=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile&product_id=` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


