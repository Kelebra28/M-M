import Image from 'next/image';
import { Typography } from '@mui/material';

import CarruselTestimonial from '@/app/components/common/CarruselTestimonial/CarruselTestimonial';

import style from './testimonials.module.scss';

const Testimonials = () => {
    return(
        <div className={style['testimonials-container']}>
            <div>
               <div className='ml-[15rem]'>
                     <Typography fontWeight={900} variant="h4">Forma parte de</Typography>
                     <Image
                        src="/sections/history.svg"
                        alt="Picture of the author"
                        width={300}
                        height={50}
                     />
                     <Typography fontWeight={900} variant="h4">como miles de clientes</Typography>
                     <Typography fontWeight={900} variant="h4">han quedado satisfechos</Typography>
                     <Image
                        src="/sections/44.svg"
                        alt="Picture of the author"
                        width={200}
                        height={50}
                     />
               </div>
            </div>
            <div>
             <CarruselTestimonial />
            </div>
        </div>
    );
};

export default Testimonials;