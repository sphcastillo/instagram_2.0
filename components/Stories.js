import React, { useEffect } from 'react';

function Stories() {

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        console.log("suggestions: ", suggestions);
    }, []);
    
    return (
        <div>
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