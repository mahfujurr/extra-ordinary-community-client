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
        <div className='bg-white rounded-2xl p-3 font-semibold'>
            <form onSubmit={handleSubmit}>
                <div className='flex'>

                    <h1 className='mr-3'>
                        Name :
                    </h1>
                    <input type="text" name="name" required />

                </div>
                <div className='flex'>

                    <h1 className='mr-3'>
                        Email :
                    </h1>
                    <input type="email" name="email" required />

                </div>
                <div className='flex'>

                    <h1 className='mr-3'>
                        University :
                    </h1>
                    <input type="text" name="university" required />

                </div>
                <div className='flex'>

                    <h1 className='mr-3'>
                        Address :
                    </h1>
                    <input type="text" name="address" required />

                </div>
                <button type='submit'>Save</button>
            </form>
        </div>
    );
};

export default AboutModal;