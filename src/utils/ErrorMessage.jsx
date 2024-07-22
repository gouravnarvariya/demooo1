import React from 'react'

const ErrorMessage = ({ errors, title }) => {
    // console.log(errors)
    if (errors && errors.errors && errors.errors[title]) {
        console.log(errors?.errors[title])   
        return <>
            <p className="error-input-msg">{errors?.errors[title]}</p>
        </>
    }
    return (
        <>
        </>
    )
}

export default ErrorMessage