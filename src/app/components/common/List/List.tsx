
import styles from './list.module.scss';

type ListProps = {
    children: React.ReactNode
};

export const List = ({ children }: ListProps) => {
    return(
        <div className={styles['list-container']}>
            <div className={styles['red-bar']}></div>
            <div>
                {children}
            </div>
        </div>
    );
};