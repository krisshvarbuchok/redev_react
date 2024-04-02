import React from 'react';
const MyBoolean = (props) => {
    if(props.message){
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