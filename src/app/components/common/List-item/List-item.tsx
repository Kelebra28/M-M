
import styles from './list-item.module.scss'

type ListItemProps = {
    position: string;
    title: string
}

export const ListItem = ({ position, title } : ListItemProps) => {
    return(
        <div className={styles['item-container']}>
            <span>{position}</span>
            <p>{title}</p>
        </div>
    )
}
