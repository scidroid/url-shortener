import { useRouter } from "next/router";
import Link from "next/link";

const Show = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <h1
      style={{
        textAlign: "center",
        fontSize: "2em",
        margin: "1em 0",
      }}
    >
      <Link href={`/${id}`}>
        <a>{`https://url.scidroid.co/${id}`}</a>
      </Link>
    </h1>
  );
};

export default Show;
