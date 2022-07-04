import { useState } from 'react'
export default function Form() {
    const [url, setUrl] = useState("");
    return (
        <div className='bg-blue-100 flex flex-col w-full h-full'>
            <div className='flex'>
                <input className='bg-indigo-100 rounded w-full' type="text" value={url} onChange={(event) => setUrl(event.target.value)} placeholder='Paste your url here' />
                <input className='bg-blue-200 p-3' type="button" value="Send" onClick={() => window.alert("Sending message")} />
            </div>
            <textarea className='bg-red-200 rounded h-full resize-none' placeholder='You body content' />
        </div>
    );
}