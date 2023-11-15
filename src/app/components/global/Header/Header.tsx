import SquareIcon from '@mui/icons-material/Square';

import styles from './header.module.scss';

type HeaderProps = {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <div className={styles['header-container']}>
            <div className={styles['icon-container']}>
                <SquareIcon />
            </div>
            <h2>{title}</h2>
            <div>
                <span className={styles['red-bar']}></span>
            </div>
        </div>
    )
};