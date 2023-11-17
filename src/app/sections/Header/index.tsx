import Image from 'next/image';

import style from './headerSection.module.scss';
import VerticalCarousel from '@/app/components/VerticlaCarousel';

const Header = () => {
    return (
        <div className={``}>
            <div className=''>
                <Image
                    src="logo-header.svg"
                    alt="Maquina y Maquila de Suajes"
                    height={550}
                    width={550}
                />
            </div>
            <div className='flex justify-between'>
                <div className=''>
                    <div className=' flex items-center pl-24 h-[500px]'>
                        <div className='w-[500px]'>
                            <h2 className='text-4xl font-bold'>Somos la mejor opción</h2>
                            <p className='text-lg '>Trabajamos en mejorar constantemente nuestros procesos para ofrecerle herramientas que hagan crecer sus proyectos.</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-end'>
                        <div className='flex justify-center items-center flex-col bg-red-600 w-[300px] h-[350px]'>
                            <Image
                                src="icons/hours.svg"
                                alt="Timing clock"
                                height={100}
                                width={100}
                            />
                            <div className='py-10 text-xl text-gray-50 font-semibold'>
                                <p>Horario de Atención</p>
                                <p> L-V 8:00am / 6:00pm</p>
                            </div>
                        </div>
                        <div className='bg-black w-[600px] h-[250px] flex  items-center flex-col'>
                            <p className='text-white uppercase text-xl py-10 font-semibold'>Habla con un experto</p>
                            <div className='flex w-full'>

                                <div className="b mx-auto h-16 w-64 flex justify-center items-center min-w-[34rem]">
                                    <div className="i h-16 w-64 bg-gradient-to-br from-green-400 to-green-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                                    </div>
                                    <a className="text-center text-white font-semibold z-10 pointer-events-none">¡Envíanos un WhatApp! </a>
                                </div>
                                <div className='flex justify-end w-full'>

                                    <Image
                                        src="icons/red-arrows.svg"
                                        alt="Red Arrow"
                                        height={30}
                                        width={30}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=''>
                    <VerticalCarousel />
                </div>
            </div>
        </div>
    );
};

export default Header;
