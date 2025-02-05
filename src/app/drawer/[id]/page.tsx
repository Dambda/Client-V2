'use client';

import { useParams } from 'next/navigation';

export default function Drawer() {
    const { id } = useParams();

    return <div>Drawer ID : {id}</div>;
}
