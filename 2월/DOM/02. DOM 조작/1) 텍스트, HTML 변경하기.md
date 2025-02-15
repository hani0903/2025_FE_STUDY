# 1️⃣ [DOM 조작 #1] 텍스트와 HTML 변경하기

## 텍스트 변경하기

> **HTML 요소의 텍스트**를 변경하는 방법을 알아보자.
>
> -   1. innerText
> -   2. textContent

### innerText

`innerText`는 `Element`의 속성으로, element 내에서 사용자에게 보여지는 text 값들을 가져오거나 설정할 수 있다. 이 때 해당 요소뿐만 아니라 해당 요소의 자식들 안의 텍스트도 같이 갖고 온다.

#### 구문

```javascript
/* 가져오기 */
const renderedText = htmlElement.innerText;

/* 설정하기 */
htmlElement.innerText = string;
```

### textContent

`textContent`는 `Node`의 속성으로, 사용자에게 보여지는 text값만 읽어오는 `innetText`와는 달리 `<script>`나 `<style>` 태그에 상관없이 해당 노드가 가지고 있는 텍스트 값을 모두 읽어온다.

#### 구문

```javascript
/* 가져오기 */
const text = someNode.textContent;

/* 설정하기 */
someOtherNode.textContent = string;
```

#### 예제

```javascript
const paragraph = document.querySelector('p');

console.log(paragraph.innerText); // 화면에 보이는 텍스트만 가져옴
console.log(paragraph.textContent); // 모든 텍스트 가져옴 (숨겨진 요소 포함)
```

### innerHTML

`innerHTML`은 `Element`의 속성으로, element 내에 포함된 HTML 또는 XML 마크업을 가져오거나 태그와 함께 입력하여 내용을 직접 설정할 수 있다.

#### 구문

```javascript
const content = element.innerHTML;

element.innerHTML = htmlString;
```

#### 예제

```javascript
const div = document.querySelector('#container');
div.innerHTML = '<h2>새로운 제목</h2>'; // 기존 내용을 새로운 HTML로 대체
```

> 🚨 [주의할 점]
> innerHTML을 사용하면 기존 내용이 덮어씌워질 수 있다.
