import React from 'react'

function GetDate() {

    const newDate = new Date()
    const GetDate =  newDate.getDate() + "/"+ (newDate.getMonth() + 1)  + "/" + newDate.getFullYear() 
    return (
        <>
            <div>
                <h3>{GetDate}</h3>
            </div>

        </>
    )
}

export default GetDate;