import { useState } from 'react'
export default function Form() {
    const [url, setUrl] = useState("");
    return (
        <div className='flex flex-col w-full h-full border-r-2 border-gray-200'>
            <div className='flex'>
                <input className='bg-gray-100 rounded w-full outline-none p-3' type="text" value={url} onChange={(event) => setUrl(event.target.value)} placeholder='Paste your url here' />
                <input className='bg-blue-400 p-3' type="button" value="Send" onClick={() => window.alert("Sending message")} />
            </div>
            <textarea className='bg-white h-full resize-none outline-none p-3' placeholder='You body content' />
        </div>
    );
}