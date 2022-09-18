import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserData } from '../data/UserData';


function Stories() {

    // useEffect(() =>  { 
    //     const suggestions =  [...Array(12)].map((_,i) => ({
    //         ...UserData.
    //     }))
    //     console.log(suggestions)
    // }, []);

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {/* <div>
                {UserData.map((user, index) => {
                    return (
                        <div key={index}>
                            <Image 
                                src={user.src}
                                alt={user.name}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    )
                })}
            </div> */}

            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
        </div>
    )
}

export default Stories