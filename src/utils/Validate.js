export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const ValidateLogin = (obj) => {
    const errors = {};
    if (!obj.email) {
        errors.email = "Please provide a email.";
    }
    if (obj.email && !validateEmail(obj.email)) {
        errors.email = "Please enter valid email.";
    }
    if (!obj.password) {
        errors.password = "Please provide a password.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}


export const ValidateRegister = (obj) => {
    const errors = {};
    if (!obj.email) {
        errors.email = "Please provide a email.";
    }
    if (obj.email && !validateEmail(obj.email)) {
        errors.email = "Please enter valid email.";
    }
    if (!obj.password) {
        errors.password = "Please provide a password.";
    }
    if (!obj.confirmPassword) {
        errors.confirmPassword = "Please provide a confirm password.";
    }
    if (!obj.phone) {
        errors.phone = "Please provide a phone.";
    }
    if (!obj.gender) {
        errors.gender = "Please provide a gender.";
    }
    if (!obj.dateofbirth) {
        errors.dateofbirth = "Please provide a dateofbirth.";
    }
    if (!obj.name) {
        errors.name = "Please provide a name.";
    }
    if (obj.password!==obj.confirmPassword) {
        errors.password = "Please provide a correct password.";
        errors.confirmPassword = "Please provide a correct password.";
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

export const ValidateUser = (obj) => {
    const errors = {};
    if (!obj.email) {
        errors.email = "Please provide a email.";
    }
    if (obj.email && !validateEmail(obj.email)) {
        errors.email = "Please enter valid email.";
    }
    if (!obj.otp) {
        errors.otp = "Please provide a otp.";
    }
    if (obj.otp.length !== 6) {
        errors.otp = "Please provide a correct otp.";
    }

   
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}