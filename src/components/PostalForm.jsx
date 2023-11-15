import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

function PostalForm() {
    const dispatch = useDispatch();
    const [pin, setPin] = useState("");
    const postalDetail = useSelector(state => state.postalData);
    const loading = useSelector(state => state.loading);

    const getData = (e) => {
        e.preventDefault();
        dispatch({ type: "LOADING" })
        if (isNaN(pin) || pin === "") {
            dispatch({ type: "INPUT_VALID" })
            return
        } else {
            fetch(`https://api.zippopotam.us/in/${pin}`)
                .then((res) => res.json())
                .then((data) => {
                    if (Object.keys(data).length > 0) {
                        dispatch({ type: "POSTALDATA", payload: data })
                    } else {
                        dispatch({ type: "INPUT_VALID" })
                    }
                }).catch((error) => {
                    dispatch({ type: "ERROR" })
                })
        }
    }


    return (
        <div>

            {/* User input form */}
            <form className='mx-auto flex flex-col gap-4 lg:w-3/12 md:w-5/12 w-9/12 mt-11 bg-white p-4 rounded' onSubmit={getData}>
                <label className='font-semibold text-lg'>Postal code</label>
                <div className='relative'>
                    <input value={pin} onChange={(e) => setPin(e.target.value)}
                        name='pin' placeholder='Enter postal code here ...'
                        className='outline-0 border border-slate-500 rounded py-2 pl-9 w-full' />
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-5 h-5 absolute top-[12px] left-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                {
                    postalDetail == null &&
                    <button disabled={loading}
                        className={`bg-green-200 text-green-600 border border-green-400 rounded py-2 font-medium cursor-pointer flex justify-center ${loading && "cursor-not-allowed"}`}
                        type='submit'>
                        {
                            loading ?
                                <ThreeDots height="25" width="80" radius="20" color="#4fa94d" ariaLabel="three-dots-loading" visible={true} />
                                :
                                "Get detail"
                        }
                    </button>
                }
            </form>

            {/* Clear data -button */}
            {
                postalDetail !== null &&
                <button onClick={() => {
                    dispatch({ type: "CLEARDATA" });
                    setPin("")
                }}
                    className={`bg-red-100 text-red-600 border border-red-400 mx-auto rounded py-2 font-medium cursor-pointer flex justify-center lg:w-3/12 md:w-5/12 w-9/12 mt-5`}>
                    Clear data
                </button>
            }
        </div>
    )
}

export default PostalForm