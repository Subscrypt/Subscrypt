import React from 'react'
import logo from '../../../../public/img/logo.json'
import Lottie from "lottie-react";
import Image from 'next/image';
import { useAccountAbstraction } from "../../store/safe/accountAbstractionContext";

const Landing = () => {
    const { loginWeb3Auth } = useAccountAbstraction()
    return (
        <div className='overflow-scroll rounded-2xl'>
            <div>
                <div className='border-2 border-gray-100 relative overflow-hidden p-12 flex flex-col justify-between items-start w-full h-[800px] bg-gray-50 rounded-2xl'>
                    <div className='flex flex-row gap-2 font-semibold uppercase items-center text-gray-600'>made proudly using <img className='w-6 h-6' src='/img/landing/safe.png' /> and <img className='w-6 h-6' src='/img/landing/base.png' /> during Superhack</div>
                    <div>
                        <div className='absolute right-[-150px] top-[-200px]'>
                            <Image quality={100} width={787} height={1060} alt='imageCollection' src={'/img/landing/collection.png'} />
                        </div>
                        <div className='w-16 h-16 -translate-x-3 mb-4'><Lottie animationData={logo} loop={false} /></div>
                        <div className='text-6xl font-extrabold text-gray-900'>
                            Pay Together <br /> Securely <br />
                            With <span className='text-green-500'>Spayce</span>
                        </div>
                        <button className="py-4 px-6 rounded-xl font-bold transition-colors bg-green-400 hover:bg-green-500 active:bg-green-600 mt-8" onClick={loginWeb3Auth}>Log In to Run App</button>
                    </div>
                </div>
                <div className='flex flex-col gap-6 px-12 py-20 w-2/3 text-5xl font-bold text-gray-900 leading-none'>
                    <span>Everybody loves <span className='text-red-500'>Netflix</span></span>
                    <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>But with its price, it just doesn&apos;t feel like a good value. So you plan to share a Premium Plan for $12.99 for 5 people, but your friend Jake is not a reliable person to pay his share, and you don&apos;t have the rest 3 to share your lovely streaming service.<br /> And also, <span className='font-bold'>you don&apos;t want to pay with your card all by yourself</span></div>
                </div>

                <div className='rounded-2xl bg-green-500 text-gray-900 flex flex-col gap-12 p-12 w-full text-5xl font-bold text-gray-900 leading-none'>
                    <span><span className='text-white'>Spayce</span> got you covered</span>
                    <div className='flex flex-row gap-6'>
                        <div className='w-1/4 flex flex-col gap-2'>
                            <div className='text-3xl text-white'>We help you gather the crew</div>
                            <div className='text-xl font-semibold'>Users may join your subscription to help you reduce the price.</div>
                        </div>
                        <div className='w-1/4 flex flex-col gap-2'>
                            <div className='text-3xl text-white'>We decentralize payments</div>
                            <div className='text-xl font-semibold'>We collect all payments into a multisig contract, where everyone is equally an owner.</div>
                        </div>
                        <div className='w-1/4 flex flex-col gap-2'>
                            <div className='text-3xl text-white'>We organize the payment</div>
                            <div className='text-xl font-semibold'>Now you don&apos;t have to rely on that one person with a credit card, or worse, be one. </div>
                        </div>
                        <div className='w-1/4 flex flex-col gap-2'>
                            <div className='text-3xl text-white'>You watch Netlix with 80% discount</div>
                            <div className='text-xl font-semibold'>Finally!</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 px-12 py-20 w-2/3 text-5xl font-bold text-gray-900 leading-none'>
                    <span>Multisignature Wallets</span>
                    <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>But with its price</div>
                </div>
                <div className='flex flex-col gap-6 px-12 py-20 w-2/3 text-5xl font-bold text-gray-900 leading-none'>
                    <span>Accout Abstractions</span>
                    <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>But with its price, it just doesn&apos;t feel like a good value. </div>
                </div>
                <div className='flex flex-col gap-6 px-12 py-20 w-2/3 text-5xl font-bold text-gray-900 leading-none'>
                    <span>Intuitive and seamless. <br /> Web3 has never been easier</span>
                    <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>But with its price, it just doesn&apos;t feel like a good value. </div>
                </div>
                <div className='flex flex-col gap-6 px-12 py-20 w-2/3 text-5xl font-bold text-gray-900 leading-none'>
                    <span>Based on CoinBase. <br /> Safed by Safe.</span>
                    <div className='w-full text-2xl font-medium text-gray-900 leading-normal'>But with its price, it just doesn&apos;t feel like a good value. </div>
                </div>
                <div className='rounded-2xl text-4xl bg-green-500 text-gray-900 flex flex-row justify-between items-center gap-12 px-12 py-6 w-full font-bold text-gray-900 leading-none'>
                    <span>Save $. Join <span className='text-white'>Spayce</span></span>
                    <button className="text-white py-4 px-6 text-xl rounded-xl font-bold transition-colors border-2 border-white bg-green-500 hover:bg-gray-100 hover:text-green-500 active:bg-white" onClick={loginWeb3Auth}>Log In to Run App</button>
                </div>

            </div>
        </div>
    )
}

export default Landing