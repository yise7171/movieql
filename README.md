# movieql

- Movie API with GraphQL Test 2021
- 노마드님의 강의를 따라함
- GraphQL의 특징
  - Over-fetching : 우리가 요청한 정보의 영역보다 많은 정보를 서버에서 받아오는 것
  - Under-fetching : 한의 요청을 완료 후에 정보를 완성하기 위해 다른 요청을 해야하는 것
  - GraphQL에서는 URL자체가 존재하지 않는다
  - GraphQL에서는 모든 요청을 한개의 query로 만들 수 있다.
  - Query는 Database에서 무언가를 요청하고 GraphQL 언어로 내가 원하는 정보를 알려준다.
  - 스키마 선언 시 "!"는 필수의 의미
- graphql yoga
  - create-react-app 명령어와 비슷하다. GraphQL 프로젝트를 빠르게 시작할 수 있게 도와준다
  ```
  yarn add graphql-yoga
  ```
- Nodemon
  - 프로젝트 폴더의 파일들을 모니터링하고 있다가 파일이 수정될 경우 자동으로 서버를 리스타트하는 모듈
  ```
  npm i nodemon
  ```
- node-fetch

  - API 요청을 쉽게해주는 컴포넌트(라이브러리?)
  - fetch()함수를 이용
  - 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환
  - 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject

  ```
  npm i node-fetch

  fetch(url, options)
    .then((response) => console.log("response:", response))
    .catch((error) => console.log("error:", error))

  GET 호출
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data))

  POST 호출
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      title: "Test",
      body: "I am testing!",
      userId: 1,
    }),
  }).then((response) => console.log(response))

  PUT 호출
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      title: "Test",
      body: "I am testing!",
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))

  DELETE 호출
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
  ```
