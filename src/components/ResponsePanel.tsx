import { useState } from 'react'
export default function Form() {
    const [url, setUrl] = useState("");
    return (
        <div className='bg-white flex flex-col w-full h-full overflow-auto p-3 border-l-2 border-gray-200'>
            <p>You response:</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad temporibus, nemo tempore et alias doloremque numquam error laboriosam hic ea mollitia est optio blanditiis, possimus eveniet totam corporis officiis sit.</p>
        </div>
    );
}