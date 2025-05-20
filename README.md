# 프로젝트 이름

Next.js 학습

---

## 📦 설치 방법 (Backend Server)

1. GitHub에서 backend server `.zip` 파일 다운로드  
   👉 https://github.com/winterlood/onebite-books-server

2. 프로젝트 폴더에 압축 해제 후, 에디터로 열기

3. [Supabase](https://supabase.com/)에서 새 프로젝트 생성 후 Database Password 복사

4. Supabase 대시보드 상단의 **"Connect"** 버튼 클릭 → Connection string 복사

5. 루트 디렉토리에 `.env` 파일 생성 후 connection string 추가

   ```env
   # Connection Pooling
   DATABASE_URL="postgresql://postgres.itnyhhtfiptlycugucat:[YOUR-PASSWORD]@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"

   # Direct DB connection (for migrations)
   DIRECT_URL="postgresql://postgres.itnyhhtfiptlycugucat:[YOUR-PASSWORD]@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres"
   ```

6. `[YOUR-PASSWORD]` 부분에 Supabase Database 비밀번호 입력

7. 의존성 설치

   ```bash
   npm install
   ```

8. Supabase Database 초기화

   ```bash
   npx prisma db push
   ```

9. Supabase Database 시드 데이터 삽입

   ```bash
   npm run seed
   ```

10. Backend Server 빌드

    ```bash
    npm run build
    ```

11. Backend Server 실행

    ```bash
    npm run start
    ```

12. 확인용 URL 및 도구

    - API 서버: [http://localhost:12345](http://localhost:12345)
    - API 테스트: [http://localhost:12345/api](http://localhost:12345/api)
    - DB 관리: `npx prisma studio` → [http://localhost:5555](http://localhost:5555)

---

## 📦 설치 방법 (Frontend - Next.js)

```bash
npx create-next-app@14 [프로젝트명 혹은 폴더명]
```

---

## 📌 사용 버전

- Next.js: `v14`

---

## ▶ 실행 방법

- **Backend**:

  ```bash
  npm run start
  ```

- **Frontend** (Next.js):

  ```bash
  npm run dev
  ```
