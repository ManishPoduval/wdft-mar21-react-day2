import React, {useState} from 'react'

function DisLikeBtn(){
    //We're using the useState hook here
    // HOOKS can be used only inside functions
    // it returns us an array of 2 elements
    // a state , and a fn that updates the state

    // the useState() takes a default value of the state as a argument
    // useState and the handler that updates the state are both asynchronous
    const [count, updateCount]  = useState(100)
    

    return <button onClick={() => { updateCount(count - 1) }  } >{count} Dislike</button>
}


export default DisLikeBtn