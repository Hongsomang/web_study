# html 기본 문법

## 1.태그

- 굵게

  ```
  <strong/>굵게</strong>
  ```

  - 실제로도 강조하기 위해사용

- 밑줄

  ```
  <u>밑줄</u>
  ```

- title

  - 웹페이지 제목

  - 브라우저 탭에서 확인

  - ```
    <html>
    <head>
    	<title>html title</title>
    </head>
    <body>
    </body>
    </html>
    ```

- style

  - 웹문서 디자인 
  - 방법
    - 해드태그 사이에 넣기
    - css파일 만들어서 적용
    - 태그에서 직접하기
  - 형식
    - 선택자{속성:값}
      - ex) p{color:yellow}
    - *{속성:값}
      - 모든 선택자에게 적용
    - .클래스이름{속성:값}
      - 특정 클래스에 스타일을 적용하고 싶은 경우
    - #아이디{속성:값}
      - 특정 아이디에 스타일 적용하고 싶은 경우

- base

  - base url 설정해주는거

  - head태그안에 한 번 밖에 정의 할 수 없음

  - ```
    <html>
    <head>
      <base href="https://github.com/">
    </head>
    <body>
    <a href="./Hongsomang/">Click</a>
    </body>
    </html>
    ```

- link

  - 외부 스타일시트(ex.css파일)랑 연결할 때 사용

  - 속성만 갖고 있음

  - 속성

    - rel :현재 문서와 외부 문서와의 관계를 명시 (css파일인 경우: stylesheet)
    - type:외부 리소스의 미디어 타입정이
    - href:외부 문서 url

  - ```
    <link rel="stylesheet" type="text/css" href="url주소">
    ```

- script

  - 자바스크립트코드 추가할때 사용

  - 방법

    - 태그 내에서 직접 작성

    - 외부 파일에서 추가

      - ```
        <script src="ex.js"></script>
        ```

        

- noscript

- meta

  - 웹과 웹서버 간의 교환되는 정보를 정의

  - 속성

    - http-equiv
      - 웹이 서버에 명령 내리는 속성
    - name
      - 메타 정보 이름정의 
    - content
      - meta 정보의 내용 지정

  - 자주쓰는거

    - 문자코드 종류 설정

    - ```
      <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
      ```

- head

  - 해당 문서에 대한 정보 집합

  - title style base link meta script noscript 가 포함되어야함 (script와 noscript는 body에 포함 될 수 있음)

  - ```
    <head>
    	<title></title>
    </head>
    ```


+ body
  + 몸통
  + 대표 태그- br, p, b, i,  h1, a, img, table, div, span, ul, li, from 등등
+ br
  + break의 약자, 줄바꿈
+ p
  + 문단을 나눌때 사용, 줄바꿈
+ div
  + 레이아웃 나눌 때 사용
  + 홈페이지 전체를 구성이나 배치를 위해서 사용
+ span
  + text를 꾸미는 용도, text가 차자하고 있는 범위만큼 차지
+ a

  + 속성과 항상 함께 사용

  + 속성종류

    + href -연결할 주소
    + title - 마우스 올려놨을 때 보이는 텍스트
    + taget
      + _self-설정하지 않으면 기본으로 되어 있는 속성, 현재페이지에서 이동
      + _blank- 새창을 띄운다
      + _top-현재 열린 창에서 최상위 창에서 띄운다
      + _parent-기존 창에서 바로 전 창에서 띄운다.

    + rel
      + href를 성명해주는 속성
+ i
  + text에서 어떤이유로 주위와 구분할때 사용 주로 기울임꼴로 나타냄
+ b
  + 굵게, strong과 같은 기능, strong태그를 권함
  + 그냥 글씨 굵게
+ table 
  + 표만드는 태그, 횸페이지 레이아웃을 만들떄도 사용
  + 헤더 셀과 스탠다드 셀로 나누어짐
  + tabler과 같이 쓰는 태그
    + th
      + 헤더셀, 표의 제목
      + table header 약자
    + tr
      + 가로줄 
      + table row약자
    + td
      + 셀 데이터
      + table data

  + 속성
    + colspan : 가로 셀 합칠 개수 지정
    + rowspan : 세로 셀 합칠 개수 지정
    + border : 테이블 경계선 굵기 지정
    + cellpadding:셀과 경계선 여백
    + cellspacing : 셀과 셀 사이 여백
    + align : 가로 줄 합치고 나서 정렬
    + valign: 세로 줄 합치고 나서 정렬
+ ul

  + 순서가 필요없는 목록 만들기
+ ol

  + 순서가 필요한 목록 만들기
+ li

  + list item 약자
  + 목록 만들때 각 항목 나열에 쓰임 
+ input

  + 사용자로 부터 정보를 받아올때 사용
  + 속성

    + type:입력 태그유형 

      + 속성값

        + text, password,radio,checkbox,file,image,hidden,submit,button,submit,reset

          *radio하나만 선택 하는법 : name에 같은 단어 넣기

    + value: 테그의 초기값

    + name:서버로 전달 되는 이름

    + title:
+ form
  + 사용자가 웹사이트에 데이터를 전송하는 거

  + 속성

    + action : 폼데이터를 서버로 보낼때 해당 데이터가 도착할 url

    + accept-charset : 서버로 전송될 때 사용하는 문자 인코딩방식 명시(거의 utf-8)

    + method : 서버로 재출할 때 사용되는 http메소드

      + get 방식
        + 폼데이터 추가 방식
        + 브라우저에 저장 보안성 낮음
        + 쿼리 문자열에 포함되어 전송되므로, 길이제한 있음

      + post방식
        + 폼 데이터 별도 첨부
        + 브라우저에 저장 x 보안성 높음
        + 쿼리 문자열과 별도로 전송, 길이제한 x

  + 함께 쓰는 태그
    + fieldset  : 폼 요소들 그룹화 할 때 사용 
    + legend : 폼 제목

+ select
  + 드롭다운 박스를 만드는 틀
  + 안에 option태그를 씀
  + 속성
    + multiple : 복수 선택 가능, 보여지는 아이템 4개(그 이후 스크롤)
    + size : 보여지는 아이템 개수를 정할 수 있다.
    + required  : 반드시 선택 해야됨
    + disabled :  사용자 선택 막음

+ option
  + 다롭다운 박스 안에 있는 아이템

+ optgroup
  + option태그 그룹화할때 사용
  + 선택되지 않는다.

+ section
  + 부문,구역,영역 등등을 나태내는 기능

+ nav
  + 메뉴를 나타낼 때 사용

+ img
  + 이미지를 넣을 때 사용
  + 속성
    + src :이미지 주소
    + alt : 이미지가 깨졌을 때 대체 텍스트
    + title: 이미지에 마우스 포인트를 갖다 대면 표시될 텍스트

