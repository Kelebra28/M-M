import SquareIcon from '@mui/icons-material/Square';

import styles from './header.module.scss';

type HeaderProps = {
    title: string;
    square?: boolean;
}

export const Header = ({ title, square }: HeaderProps) => {
    return (
        <div className={styles['header-container']}>
           { square && <div className={styles['icon-container']}>
                <SquareIcon />
            </div>}
            <h2>{title}</h2>
            <div>
                <span className={styles['red-bar']}></span>
            </div>
        </div>
    )
};