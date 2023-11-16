import Image from "next/image";
import Link from "next/link";

import styles from './footer.module.scss';

const Footer = () => {
    return(
        <div className={styles['footer-container']}>
            <div className={styles['footer-dev']}>
                <div className="text-white">
                    <p>Desarrollado por :</p>
                    <Image
                        src="/icons/blanco.svg"
                        alt="Rpm Code"
                        height={200}
                        width={200}
                    />
                </div>
                <div className={styles['footer-links']}>
                    <Link href="/">Inicio</Link>
                    <Link href="#services">Servicios</Link>
                    <Link href="#services">Contancto</Link>
                </div>
            </div>
            <div className={styles['logo-footer']}>
                <Image
                    src="/icons/logo_white.svg"
                    alt="Maquina y Maquila de Suajes"
                    height={450}
                    width={450}
                />
            </div>
        </div>
    );
};

export default Footer;