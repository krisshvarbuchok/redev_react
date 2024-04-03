import React from 'react';
const MyBoolean = ({message}) => {
    if(message){
        return (
            <div>
                Man
            </div>
        )
    }else{
        return (
        <div>
            Woman
        </div>
    )
    }
    
}
export default MyBoolean;