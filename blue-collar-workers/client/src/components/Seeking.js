import React from 'react'

function Seeking() {
    return (
        <div>
            <input type='text' name="title" placeholder="title"/>
            <input type='text' name='description' placeholder='description'/>
            <input type='text' name='city' placeholder='city'/>
            <input type='text' name='province' placeholder='province'/>
            <input type='text' name='expiry_date' placeholder='expiry_date'/>
            <input type='submit'/>
        </div>
    )
}

export default Seeking
