import React from 'react'
import { useSelector } from 'react-redux'

function PostalDetail() {
    const postalDetail = useSelector(state => state.postalData);
    const error = useSelector(state => state.error)
    const input_valid = useSelector(state => state.input_valid)

    return (
        <div className=''>

            {/* Postal detail */}
            {
                postalDetail !== null &&
                <div className='mx-auto lg:w-7/12 w-9/12 mt-7 bg-white p-4 rounded'>
                    <div className='text-center flex md:flex-row flex-col justify-center md:gap-10 gap-1 border border-white border-b-slate-700 md:py-2 py-4'>
                        <p>
                            <span className='font-medium'>Country: </span>
                            {postalDetail.country}
                        </p>
                        <p>
                            <span className='font-medium'>Country abbreviation: </span>
                            {postalDetail["country abbreviation"]}
                        </p>
                        <p>
                            <span className='font-medium'>Post code: </span>
                            {postalDetail["post code"]}
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-6 mt-5'>
                        {
                            postalDetail.places?.map((place, i) => {
                                return <div key={i} className='shadow p-6 border border-slate-400 rounded grow'>
                                    <p>
                                        <span className='font-medium'>Latitude: </span>
                                        {place.latitude}
                                    </p>
                                    <p>
                                        <span className='font-medium'>Longitude: </span>
                                        {place.longitude}
                                    </p>
                                    <p>
                                        <span className='font-medium'>Place name: </span>
                                        {place["place name"]}
                                    </p>
                                    <p>
                                        <span className='font-medium'>State: </span>
                                        {place.state}
                                    </p>
                                    <p>
                                        <span className='font-medium'>State abbreviation: </span>
                                        {place["state abbreviation"]}
                                    </p>
                                </div>
                            })
                        }
                    </div>
                </div>
            }

            {/* Response error message */}
            {
                error &&
                <p className='font-medium text-red-500 text-center mt-5'>
                    Something went wrong</p>
            }

            {/* Invalid input message */}
            {
                !input_valid &&
                <p className='font-medium text-red-500 text-center mt-5'>
                    Please enter valid input</p>
            }
        </div>
    )
}

export default PostalDetail
