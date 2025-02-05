import { ReactNode } from 'react';

export default function Layout({
    children,
    log,
}: {
    children: ReactNode;
    log: ReactNode;
}) {
    return (
        <div>
            {children}
            {log}
        </div>
    );
}
