import { Header, ListItem, List } from '@/app/components/index';

import { SERVICES } from '@/app/Utils/Constant/index';

import styles from './services.module.scss';

const Services = () => {

    return (
        <div className={styles['services-container']}>
            <div>
                <Header title='Servicios' />
            </div>
            <div>
                <List>
                    {SERVICES.map((service, index) =>
                        <ListItem key={service.name} position={`0${index + 1}`} title={service.name} />
                    )}
                </List>
            </div>
        </div>
    )
};

export default Services;