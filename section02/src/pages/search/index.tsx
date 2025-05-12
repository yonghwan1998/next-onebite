import { useRouter } from "next/router";

export default function Page() {

  const router = useRouter();

  // const q = router.query.q;
  const {q} = router.query;

  return (
    <h1>SEARCH {q}</h1>
  );
}