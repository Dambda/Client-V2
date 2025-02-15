import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            {/* 일기 컴포넌트 */}
            {children}
        </div>
    );
}
