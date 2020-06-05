import React from 'react';

const rank=({name,entries})=>{
    return(
        <div>
        <div className='f3 gold underline'style={{font: 'Courier New'}}>
            {`Name->${name}||THE NO OF ENTRIES IS..`}
        </div>
        <div className='gold f3'>
            {entries}
        </div>
        </div>

    );
}
export default rank;