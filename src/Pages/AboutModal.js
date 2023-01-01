import React from 'react';

const AboutModal = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        const userInfo = {
            name,
            email,
            university,
            address
        }
        fetch('http://localhost:5000/userinfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // refetch();
                // form.reset();

            })
    }
    return (
        <div className='bg-white rounded-2xl p-3 font-semibold mb-48'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <div className='flex'>

                    <h1 className='mr-3 mb-3'>
                        Name :
                    </h1>
                    <input type="text" name="name" className='rounded-2xl outline-none border-2 mb-1 pl-3' required />

                </div>
                <div className='flex'>

                    <h1 className='mr-3 mb-3'>
                        Email :
                    </h1>
                    <input type="email" name="email" className='rounded-2xl outline-none border-2 mb-1 pl-3' required />

                </div>
                <div className='flex'>

                    <h1 className='mr-3 mb-3'>
                        University :
                    </h1>
                    <input type="text" name="university" className='rounded-2xl outline-none border-2 mb-1 pl-3' required />

                </div>
                <div className='flex'>

                    <h1 className='mr-3 mb-3'>
                        Address :
                    </h1>
                    <input type="text" name="address" className='rounded-2xl outline-none border-2 mb-1 pl-3' required />

                </div>
                <button type='submit' className='active:translate-y-0.5 py-1 px-5 hover:bg-rose-200 rounded-2xl border-2 font-semibold ease-in-out duration-300'>Save</button>
            </form>
        </div>
    );
};

export default AboutModal;