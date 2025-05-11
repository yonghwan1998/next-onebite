# 프로젝트 이름

Next.js 학습

## 📦 설치 방법(백엔드 서버)

1. 깃허브에서 백엔드 서버 .zip 다운로드
https://github.com/winterlood/onebite-books-server

2. supabase에서 new project 생성
knPgOmYi1VA2mc0V

3. .env 생성 후 아래 코드 넣기
# Connect to Supabase via connection pooling
DATABASE_URL="postgresql://postgres.odgxixhrgbtpisibzzao:[YOUR-PASSWORD]@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection to the database. Used for migrations
DIRECT_URL="postgresql://postgres.odgxixhrgbtpisibzzao:[YOUR-PASSWORD]@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres"

4. supabase와 연결
npx prisma db push

5. supabase에 시드값 넣기
npm run seed

6. build
npm run build

7. backend 서버 실행
npm run start

8. apiece, db 정보 확인
http://localhost:12345/api#/
http://localhost:5555/
npx prisma studio

## 📦 설치 방법(Next.js)
npx create-next-app@14 section02

## 📦 버전
Next.js: v14

## 실행 방법
npm run dev