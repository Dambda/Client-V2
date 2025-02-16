import { ReactNode } from 'react';

export default function DrawerLayout({
    children,
    floating,
}: {
    children: ReactNode;
    floating: ReactNode;
}) {
    return (
        <div>
            {children}
            {floating}
        </div>
    );
}
