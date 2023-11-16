import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import styles from './whats-app.module.scss';

const WhatsApp = () => {
    const whatsapp = 'https://api.whatsapp.com/send?phone=+5215555096515&text=Hola!';
    return(
        <a className={styles.button} target="_blank" href={whatsapp}>
            <WhatsAppIcon className={styles.icon} />
        </a>
    )
};
export default WhatsApp;