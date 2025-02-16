import S from './Floating.module.scss';
import FloatingTrigger from '../trigger/FloatingTrigger';
import FloatingBody from '../body/FloatingBody';
import { useClickOutside, useFloatingToggle } from '@/shared/lib/hooks';
import { useRef } from 'react';

export default function Floating({ menus }: { menus: string[] }) {
    const floatingRef = useRef<HTMLDivElement>(null);
    const config = useFloatingToggle();

    // 바깥 클릭했을 때 닫히도록
    useClickOutside(floatingRef, config.setIsOpen);

    return (
        <div ref={floatingRef} className={S.container}>
            <FloatingBody {...config} menus={menus} />
            <FloatingTrigger
                isOpen={config.isOpen}
                onClick={config.toggleFloating}
            />
        </div>
    );
}
