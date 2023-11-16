import Image from 'next/image';
import { Header } from '@/app/components';

import style from './max-time.module.scss';

const MaxTime = () => {
    return(
        <div className={style['max-time-container']}>
            <div className={style['img-container']}>
                <div className={style['back-blocks']}>
                    <div className={style.red}></div>
                    <div className={style.gray}></div>
                </div>
            <Image 
                    src="/sections/maxTime.svg" 
                    alt='Máxima puntualidad'
                    width={600} 
                    height={600} 
                />
            </div>
            <div className={style['info-container']}>   
                <Image 
                    src="icons/clock.svg" 
                    alt='Máxima puntualidad'
                    width={250} 
                    height={250} 
                    className={style['icon']}
                />
                <Header square title="Máxima puntualidad" />
                <div className='w-[20rem] ml-[15rem]'>
                    <p>Ofrecemos ser parte de la cadena productiva de su empresa, y facilitarle así la mejor calidad en el tiempo prometido.</p>
                </div>
            </div>
        </div>
    );
};

export default MaxTime;