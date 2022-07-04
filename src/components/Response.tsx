import { useState } from 'react'
export default function Form() {
    const [url, setUrl] = useState("");
    return (
        <div className='bg-blue-100 flex flex-col w-full'>
            <p>You response:</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde hic quis praesentium, eius voluptatibus similique officia, numquam rerum aperiam autem reprehenderit. Earum ab laborum illum asperiores soluta consequatur quam.</p>
        </div>
    );
}