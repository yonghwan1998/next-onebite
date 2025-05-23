import { useRouter } from "next/router";
import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";

export default function Page() {

  const router = useRouter();

  // const q = router.query.q;
  const {q} = router.query;

  return (
    <h1>SEARCH {q}</h1>
  );
}

Page.getLayout = (page: ReactNode) => {
  return (
    <SearchableLayout>
      {page}
    </SearchableLayout>
  );
}