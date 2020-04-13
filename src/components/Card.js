import React from 'react'
import cx from 'classnames'
import CountUp from 'react-countup'

export default function Card({
    cardColor,
    cardTitle,
    cardData
}) {

    let cardLineClassNames = cx(
        'rounded-sm',
        'h-1',
        'mb-3',
        cardColor
    )

    return (
        <div className="flex-1 bg-white text-sm rounded shadow-md m-2 px-4 py-4">
            <div className={cardLineClassNames} />
            <h6 className="text-gray-700 text-center sm:text-left mb-1">
                {cardTitle}
            </h6>
            {
                !cardData
                    ?   (<div className="leading-9">Loading...</div>)
                    :   (<CountUp
                            className="block text-gray-900 text-2xl font-semibold text-center sm:text-left"
                            start={0}
                            end={cardData}
                            duration={2}
                            separator=',' />
                        )
            }
        </div>
    )
}