export const setData = (data) => {
    localStorage.setItem("data", data,);
};

export const setOtp = (otp) => {
    localStorage.setItem("otp", otp);
};

export const setAccesToken = (access_token) => {
    localStorage.setItem("access_token", access_token);
};
export const setUserData = (formData) => {
    localStorage.setItem("userdata", formData);
};




export const checkToken = () => {
    if (localStorage.getItem("access_token")) {
        const decryptedAccessToken = localStorage.getItem("access_token")
        return {
            access_token: decryptedAccessToken,
        };
    } else {
        return {
            access_token: null
        };
    }
};


export const clearToken = () => {
    localStorage.clear();
    window.location.href = "/login"
};
