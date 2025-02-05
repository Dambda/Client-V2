import { ReactNode } from 'react';

export default function Layout({
    children,
    stats,
}: {
    children: ReactNode;
    stats: ReactNode;
}) {
    return (
        <div>
            {children}
            {stats}
        </div>
    );
}
