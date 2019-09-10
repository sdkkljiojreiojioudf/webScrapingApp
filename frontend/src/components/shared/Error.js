import React from 'react'

const Error = ({ error }) => {
    if (error instanceof Object) {
        return (
            <div> Errors 
                {error.graphQLErrors.map(({ message }, i) => (
                <span key={i}>{message} e</span>
            ))}
            </div>
        )
    } else {
        return (
            <div>Error {error.message}</div>
        )
    }
}

export default Error
