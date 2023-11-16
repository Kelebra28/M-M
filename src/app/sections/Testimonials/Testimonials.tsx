import CarruselTestimonial from '@/app/components/common/CarruselTestimonial/CarruselTestimonial';

import style from './testimonials.module.scss';

const Testimonials = () => {
    return(
        <div className={style['testimonials-container']}>
            <div>
                <h1>Testimonios</h1>
            </div>
            <div>
             <CarruselTestimonial />
            </div>
        </div>
    );
};

export default Testimonials;