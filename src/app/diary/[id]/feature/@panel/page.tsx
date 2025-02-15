import ReadMind from '@/features/diary-view/ReadMiind';
import S from './DiaryPanel.module.scss';

export default function PanelPage() {
    return (
        <div className={S.container}>
            <ReadMind></ReadMind>
        </div>
    );
}
