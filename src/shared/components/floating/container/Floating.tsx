import { useFloatingToggle } from '@/shared/lib/hooks/useFloatingToggle';
import S from './Floating.module.scss';
import FloatingTrigger from '../trigger/FloatingTrigger';
import FloatingBody from '../body/FloatingBody';

export default function Floating({ menus }: { menus: string[] }) {
    const config = useFloatingToggle();

    //클릭 됐을 때 없어지는 경우 안없어지는 경우 모두 고려ㄹㄹㄹ
    // 바깥 클릭했을 때 닫히도록

    return (
        <div className={S.container}>
            <FloatingBody {...config} menus={menus} />
            <FloatingTrigger
                isOpen={config.isOpen}
                onClick={config.toggleFloating}
            />
        </div>
    );
}
