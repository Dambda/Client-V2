# 📁 프로젝트 디렉토리 구조 및 역할

본 프로젝트는 **FSD(Folder-by-Feature Structure)** 를 기반으로 설계되었으며, 모든 파일과 폴더는 역할과 범위에 따라 구분됩니다. 아래는 주요 폴더와 파일들의 역할 및 사용 기준을 정리한 문서입니다.

## 폴더 구조

작성 예정

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

<br>

### `features/ui`

**역할**

- 특정 기능에 종속된 UI 컴포넌트
- 상태나 비즈니스 로직 등과 밀접하게 연관된 기능 단위의 UI
- 재사용성 낮음

**예시**

- `LoginForm`, `DiaryCard`

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

> Layer 단위로 비교

| **폴더**              | **역할**                                | **스코프**                   | **레벨**  |
| --------------------- | --------------------------------------- | ---------------------------- | --------- |
| **layout.tsx**        | 전역 레이아웃 관리                      | 앱 전체                      | 최상위    |
| **page.tsx**          | 페이지별 콘텐츠와 구성                  | 특정 URL에 해당하는 페이지   | -         |
| **widgets**           | 여러 컴포넌트를 조합한 독립적인 UI 블록 | 특정 도메인 또는 페이지 섹션 | 높은 레벨 |
| **features/ui**       | 특정 Feature에 종속된 UI 컴포넌트       | Feature 내부                 | 중간      |
| **shared/components** | 전역적으로 재사용 가능한 기본 UI 요소   | 앱 전체                      | 가장 낮음 |

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
  src/features/diary/types/
  ├── diary.ts
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
