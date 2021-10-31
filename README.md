# BACS Web Project

---

## 현재 이 프로젝트는 중단되었습니다!!

## Collabo Coffee 프로젝트 진행중!!

---

## Description

---

- Wix를 사용중인 BACS 홈페이지의 속도 & 더 좋은 사용자 경험 제공을 위해 시작한 프로젝트

- 현재 Wix를 사용해서 제작한 BACS 홈페이지 https://www.bacsroastery.com/

- 현재 커피 정기배송을 구글 폼으로 신청받아서, 사용자 경험이 떨어짐

- 이를 해결하기 위해, 자체 웹서비스 제작 목표

## Environment

---

- Firebase Hosting - 정적 페이지 제공
- Firebase Functions - 카카오 로그인등의 api call
- Firestore - 사용자 데이터 저장하는 Document형 DB

## How to run

---

1. <pre>npm run build</pre>
2. <pre>firebase serve --only hosting</pre>

## How to deploy

---

1. <pre>npm run build</pre>
2. <pre>firebase deploy</pre>

## Stack

---

- React.js
- Google Cloud Platform
  - Firebase Hosting
  - Firebase Functions (server less)
