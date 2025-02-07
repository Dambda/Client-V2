import DiaryView from '@/shared/components/diary-view/DiaryView';
import test1 from '../../../../public/next.svg';

export default function DiaryComponentTest() {
    return (
        <DiaryView
            mode="default"
            title="제목"
            content="오늘은 날씨가 흐리고 약간 쌀쌀했다. 아침에 일어나 커피 한 잔을 마시며 하루를 시작했다. 창밖을 보니 구름이 가득 끼어 있었지만, 그 나름대로 운치가 있었다. 어제 너무 늦게까지 일을 해서 그런지 몸이 조금 무겁게 느껴졌다. 하지만 어쩔 수 없이 해야 할 일이 많아서 부지런히 움직이기로 마음먹었다. 점심때쯤 잠깐 산책을 나갔는데, 찬 바람이 불어서 코끝이 시려웠다. 길을 걷다 보니 노랗게 물든 은행나무와 빨갛게 물든 단풍나무가 눈에 띄었다. 가을이 깊어지는 풍경 속에서 나도 모르게 한참 동안 멍하니 서 있었다. 그 순간만큼은 복잡했던 마음이 조금은 가라앉는 기분이 들었다."
            date="01월 10일 오후 3:42"
            coverImg={test1}
            contentImg={test1}
        ></DiaryView>
    );
}
