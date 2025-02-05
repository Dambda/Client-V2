'use client';

import { useParams } from 'next/navigation';

export default function Chat() {
    const { char } = useParams();

    return <div>Chat Character : {char}</div>;
}
