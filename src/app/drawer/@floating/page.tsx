'use client';

import Floating from '@/shared/components/floating/container/Floating';

export default function FloatingPage() {
    return (
        <>
            <Floating menus={['drawer', 'comment', 'delete']} />
        </>
    );
}
