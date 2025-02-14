# 📁 프로젝트 디렉토리 구조 및 역할

본 프로젝트는 **FSD(Folder-by-Feature Structure)** 를 기반으로 설계되었으며, 모든 파일과 폴더는 역할과 범위에 따라 구분됩니다. 아래는 주요 폴더와 파일들의 역할 및 사용 기준을 정리한 문서입니다.

## 폴더 구조

```
public/
├── fonts/                    # 폰트 파일
├── icons/                    # 아이콘 (svg)
├── images/                   # 이미지 파일 (jpg, png, svg...)

src/
├── app/
│   ├── (centeredFrame)       # 중앙 레이아웃 라우트 그룹
│   │   ├── emotion-guide/    # 감정 설명서
│   │   ├── keyword-select/   # 키워드 선택
│   │   ├── sign-in/          # 로그인
│   │   ├── sign-up/          # 회원가입
│   │   └── layout.tsx        # 레이아웃
│   ├── (main)                # 메인 페이지
│   ├── calendar              # 달력 페이지
│   │   ├── @diary/           # 일기 slot
│   │   ├── layout.tsx        # 달력 전체 레이아웃
│   │   └── page.tsx          # 달력 slot
│   ├── chat/                 # 감정 챗봇
│   ├── diary/[id]/           # 특정 일기 상세 페이지
│   │   ├── @panel/           # 덧말, 마음 읽기 slot
│   │   ├── layout.tsx        # 일기보기 전체 레이아웃
│   │   └── page.tsx          # 일기 콘텐츠 slot
│   ├── drawer/               # 서랍 페이지
│   ├── moment-log/           # 감정 관리서 페이지
│   ├── overview/             # 통계 페이지
│   ├── write/                # 일기 작성 페이지
│   └── layout                # RootLayout

├── features/                 # 주요 기능 단위
│   ├── search/               # 커뮤니티 검색 기능
│   │   ├── ui/               # 검색 관련 UI 컴포넌트
│   │   ├── services/         # API 호출, 상태관리, 비즈니스 로직
│   │   ├── lib/              # 유틸 함수 및 커스텀 훅
│   │   ├── search.types.ts   # 로컬 타입 정의
│   │   └── consts/           # 로컬 상수 정의
│   ├── auth/                 # 인증 기능
│   └── ...

├── shared/                   # 재사용 가능한 전역 리소스
│   ├── components/           # 공용 컴포넌트 (Button, Modal 등)
│   ├── config/               # 환경 설정
│   ├── consts/               # 전역 상수
│   ├── lib/                  # 공용 유틸함수 및 커스텀 훅
│   │   ├── utils/            # 유틸함수
│   │   └── hooks/            # 커스텀 훅
|   ├── services/             # 전역 API, 상태관리, 비즈니스 로직
|   ├── styles/               # 전역 스타일 관리
│   │   ├── base/             # 기본 스타일 설정
│   │   ├── mixins/           # Mixin (재사용 가능한 스타일 함수)
│   │   ├── variables/        # 스타일 변수 관리 (폰트, 컬러..)
│   │   └── styles.scss/      # import 허브
│   ├── types/                # 전역 타입 정의

└── widgets/                  # 독립적인 UI 블록
    ├── emotion-stats/        # 감정 통계 위젯
    ├── diary-overview/       # 일기 전체보기 위젯
    └── ...


```

## 네이밍 컨벤션

### 폴더명 및 URL

- **kebab-case**: `moment-log`, `dambda.me/sign-in`

### 컴포넌트 파일명

- **PascalCase**: `Modal.tsx`
    - 단, 페이지 파일은 Next app routing 규칙에 따라 소문자로만 명명: `page.tsx`

### 변수 및 함수, className

- **camelCase**: `userProfile`  `loginFormWrapper`

### 커스텀 훅

- **use**로 시작: `useToggle`

### 상수

- **SCREAMING_SNAKE_CASE**: `USER_AUTH`

### 타입 파일

- 파일명 끝에 **.types.ts**: `user.types.ts`
    - 전역 타입은 `shared`에, 로컬 타입은 각 도메인 별로 관리
    - 인터페이스는 **I** 접두사 사용: `IUser`

### SCSS 파일명

- 컴포넌트 스타일 (**PascalCase**)

    - 컴포넌트와 같은 이름의 module.scss 확장자 사용

    ```
    shared/components/button
    ├── Button.tsx
    ├── Button.module.scss
    ```

- 페이지 스타일 (**kebab-case**)
    ```
    app/drawer
    ├── page.tsx
    ├── page.module.scss
    ```
- 전역 스타일 (**kebab-case**)
    ```
    shared/styles/
    ├── _variables.scss
    ├── _mixins.scss
    ├── _globals.scss
    ```

<br>
<br>

## Layers

Layer는 최상위 디렉토리이자 서비스 분해의 첫 번째 단계

```
└── src/
    ├── app/
    ├── widgets/
    ├── features/
    └── shared/

```

**Layer 기본 원칙**

> Layer 원칙 1: 자신보다 아래 단계의 개체에만 접근 가능

> Layer 원칙 2: 위계가 낮은 컴포넌트일수록 영향을 받는 곳이 많기 때문에 독립적이며 범용적으로 사용할 수 있도록 구성

<br>

### `app/`

<br>

`app/../layout.tsx`

- 하위 페이지들에 공통적으로 적용되는 전역 레이아웃 제공
- 페이지 전체에 걸쳐 반복적으로 사용되는 공통 구조 제공
- 최상위 레벨의 스코프

<br>

`app/../page.tsx`

- 각 페이지의 진입점 역할
- 특정 URL에 매핑된 개별 페이지 담당
- features, widgets 등을 조립하여 화면 구성

    > 페이지 자체의 기능 구현 보다는 **필요한 Feature와 Widget을 조합하여 배치**하는 역할에 집중

 <br>

### `widgets/`

**역할**

- 여러 features와 shared 컴포넌트를 조합하여 만든 완성도 높은 **독립적인 UI 모듈**
- 특정 페이지의 주요 섹션을 구성하거나 여러 페이지에서 재사용 가능
- **가장 높은 레벨의 UI 단위**

**예시**
![마음읽기_평온](https://github.com/user-attachments/assets/81e0361d-5072-449b-bc82-f22facd77584)

- 마음읽기 페이지에서 일기 내용을 보여주는 좌측의 `DiaryConent` 위젯
- 마음읽기 내용을 보여주는 우측의 `EmotionInsight` 위젯

```
// widgets/Navbar.tsx
import { LoginForm } from "@/features/auth/ui/LoginForm";
import { ProfileMenu } from "@/features/profile/ui/ProfileMenu";

export function Navbar() {
  return (
    <nav>
      <h1>로고</h1>
      <LoginForm />
      <ProfileMenu />
    </nav>
  );
}
```

<br>

### `features/ui`

**역할**

- 특정 기능에 종속된 UI 컴포넌트
- 상태나 비즈니스 로직 등과 밀접하게 연관된 기능 단위의 UI
- 재사용성 낮음

**예시**

- `LoginForm`, `DiaryCard`

```
// features/auth/ui/LoginForm.tsx
import { useAuth } from "../model/useAuth";

export function LoginForm() {
  const { login, isLoading } = useAuth();

  return (
    <form onSubmit={login}>
      <input type="email" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <button type="submit" disabled={isLoading}>로그인</button>
    </form>
  );
}

```

<br>

### `shared/components/`

**역할**

- 독립적이고 범용적인 공통 컴포넌트
- 가장 높은 재사용성을 갖는 순수 UI
- 모든 레이어에서 재사용 가능한 **가장 낮은 레벨의 UI 단위**

> 컴포넌트는 독립적이며 상태를 가지지 않도록 설계

**예시**

- `Button`, `Modal`, `InputField`

<br>
<br>

> Layer 단위로 관심사 분리

| **폴더**              | **역할**                                | **스코프**                   | **레벨**  |
| --------------------- | --------------------------------------- | ---------------------------- | --------- |
| **layout.tsx**        | 전역 레이아웃 관리                      | 앱 전체                      | 최상위    |
| **page.tsx**          | 페이지별 콘텐츠와 구성                  | 특정 URL에 해당하는 페이지   | -         |
| **widgets**           | 여러 컴포넌트를 조합한 독립적인 UI 블록 | 특정 도메인 또는 페이지 섹션 | 높은 레벨 |
| **features/ui**       | 특정 Feature에 종속된 UI 컴포넌트       | Feature 내부                 | 중간      |
| **shared/components** | 전역적으로 재사용 가능한 기본 UI 요소   | 앱 전체                      | 가장 낮음 |

<br>

> `features/ui` vs `widgets`

| 구분                   | `features/ui`             | `widgets`                       |
| ---------------------- | ------------------------- | ------------------------------- |
| **역할**               | 특정 기능의 일부 UI       | 여러 기능을 조합한 UI 구성 요소 |
| **재사용성**           | 특정 기능 내에서만 사용   | 여러 페이지에서 재사용 가능     |
| **비즈니스 로직 포함** | 포함될 수 있음            | 포함하지 않음                   |
| **상태 관리**          | 내부적으로 상태 관리 가능 | 상태를 직접 관리하지 않음       |
| **예제**               | `LoginForm.tsx`           | `Navbar.tsx`                    |

<br>

**결론**

- 특정 기능(Feature)의 일부로 UI가 필요하면 `features/ui`에 작성

- 여러 기능을 조합해서 페이지의 큰 블록을 만들려면 `widgets`에 작성

<br>
<br>

## Segments

기능별 코드를 역할에 따라 분리하여 유지보수성과 가독성을 높이는 데 목적을 둠

**`ui`**

- UI 인터페이스
- 화면에 표시되는 컴포넌트, 레이아웃, 스타일이 포함된 UI 구성 요소

    ```
    src/features/diary/ui/
    ├── DiaryForm.tsx
    ├── diaryForm.module.scss
    ```

**`types`**

- 로컬 타입 정의
- 해당 features에서 사용하는 데이터 구조와 타입

    ```
    src/features/diary/
    ├── diary.types.ts  # 단일 타입
    ```

    ```
    src/features/diary/types/  # 여러 타입
    ├── diary.types.ts
    ├── keyword.types.ts
    ```

**`lib`**

- 커스텀 훅 및 유틸 함수 관리
- 특정 features 내부에서만 재사용 되는 함수나 로직 추상화

    ```
    src/features/diary/lib/
    ├── useToggle.ts
    ```

**`services`**

- API 호출 및 데이터 가공
- 상태 관리
- 비즈니스 로직

    ```
    src/features/diary/services/
    ├── diaryApi.ts         # API 호출
    ├── diaryStore.ts       # 상태 관리
    ```

**`consts`**

- 고정된 상수 관리

<br>

> - 모든 Segment를 반드시 사용할 필요는 없음.
> - **필요에 따라 유연하게 선택적으로 구성**하여 각 기능의 요구사항에 맞게 사용.
