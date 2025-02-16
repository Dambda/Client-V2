import { useFloatingToggle } from '@/shared/lib/hooks/useFloatingToggle';
import S from './Floating.module.scss';
import FloatingTrigger from '../trigger/FloatingTrigger';
import FloatingBody from '../body/FloatingBody';

export default function Floating() {
    const { isOpen, toggleFloating, parentRef, childRef } = useFloatingToggle();

    //클릭 됐을 때 없어지는 경우 안없어지는 경우 모두 고려ㄹㄹㄹ

    return (
        <div className={S.container}>
            <FloatingBody
                isOpen={isOpen}
                parentRef={parentRef}
                childRef={childRef}
            />
            <FloatingTrigger isOpen={isOpen} onClick={toggleFloating} />
        </div>
    );
}
