import React from 'react'

export default function AppContainer(props) {
    return (
        <div
            className="container mx-auto py-4 px-4 sm:px-0 transition-all duration-200 ease-linear"
            style={{scrollBehavior: 'smooth'}}
        >
            {props.children}
        </div>
    )
}