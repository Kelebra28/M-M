'use client';
import { MouseEvent } from 'react';
import styles from './list-item.module.scss';

type ListItemProps = {
    position: string;
    title: string;
    active: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
    
export const ListItem = ({ position, title, onClick, active }: ListItemProps) => {
    return (
        <button
            onClick={(e) => onClick(e)}
            className={`${styles['item-container']} ${active ? styles['item-container-active'] : ''}`}
        >
            <span>{position}</span>
            <p>{title}</p>
        </button>
    );
};
