import { ReactNode } from 'react';
import S from './layout.module.scss';

export default function Layout({
    children,
    panel,
}: {
    children: ReactNode;
    panel: ReactNode;
}) {
    return (
        <div className={S.container}>
            {panel}
            {children}
        </div>
    );
}
