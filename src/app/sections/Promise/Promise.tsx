import Image from 'next/image';

import { Header } from '@/app/components';

import style from './promise.module.scss';

const Promise = () => {
    return(
        <div className={style['primise-container']}>
            <div className={style['primise-info']}>
                <Header square title="Nos comprometemos" />
                <p>A que cada elemento de nuestro equipo que lo atienda, tendrá pleno conocimiento del material que va a maquilar para brindarle el mejor servicio en cada maquila que nos confie.</p>
            </div>
            <div className={style['primise-img']}>
                <Image 
                    src="/sections/promise.svg"
                    alt='Nos comprometemos'
                    width={600} 
                    height={600} 
                />
                <div className={style['red-bar']}></div>
            </div>
        </div>
    );
};

export default Promise;
