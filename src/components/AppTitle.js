import React from 'react'

export default function AppTitle(props) {
    return (
        <h1 className="text-2xl text-center font-semibold leading-normal mx-2 mt-2 mb-4 sm:mt-4 sm:mb-6">
            {props.children}
        </h1>
    )
}