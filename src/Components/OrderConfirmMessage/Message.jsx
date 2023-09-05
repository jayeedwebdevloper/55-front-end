/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { WebController } from '../../ParentContext/Context';

const Message = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const product = useLoaderData();
    console.log(product);
    const {img, name} = product;
    const { userInfo } = useContext(WebController);

    const order = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;

        console.log(name, email, phone, address);
    }

    return (
        <div className='mt-5 pt-5 pb-3'>
            <div className="container">

                <div className="row pb-5 w-50 mx-auto align-items-center">
                    <div className="col-2">
                        <div className="img-box">
                            <img className='img-fluid' src={img} alt={name} />
                        </div>
                    </div>
                    <div className="col-10">
                        <h2 className='text-dark'>{name}</h2>
                    </div>
                </div>

                <form onSubmit={order} className="row g-3 w-50 mx-auto">

                    <h5 className='text-center'>Fill Up The Form</h5>

                    <div className="col-12">
                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                        <input type="text" name='name' defaultValue={userInfo?.displayName} className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="name" />
                    </div>

                    <div className="col-12">
                        <label htmlFor="Email" className="form-label fw-semibold">Email</label>
                        <input type="email" name='email' defaultValue={userInfo?.email} required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="Email" />
                        <small className='text-danger fw-semibold'></small>
                    </div>

                    <div className="col-12">
                        <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                        <input type="number" name='phone' defaultValue={userInfo?.phoneNumber} placeholder='+880 1234567890' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="phone" />
                        <small className='text-danger fw-semibold'></small>
                    </div>

                    <div className="col-12">
                        <label htmlFor="address" className="form-label fw-semibold">Type Your Address</label>
                        <textarea name='address' placeholder='1234 Road No, Area, Country' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="address" />
                        <small className='text-danger fw-semibold'></small>
                    </div>

                    <div className="col-12 text-center">
                        <button type="submit" id='submit' className="btn btn-dark btn-200px rounded-0">Order</button>
                    </div>

                </form>

                <Link to='/products'><button className='btn btn-pink btn-200px text-white'>Continue Shop</button></Link>
            </div>
        </div>
    );
};

export default Message;