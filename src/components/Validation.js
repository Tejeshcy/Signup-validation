const Validation = (values) =>{

    let errors={};

    if(!values.fullname){
        errors.fullname= "Enter Your Full Name"
    }
    if(!values.email){
        errors.email = "Enter Your Email ID"
    }else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email=" Enter Valid Email ID"
    }
    if(!values.password){
        errors.password = "Enter Your Password"
    }else if(values.password.length<5) {
        errors.password= "Password Must be more than five characters"
    }

    return errors;
}

export default Validation;