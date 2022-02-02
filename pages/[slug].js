import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Redirect = () => {
  const [status, setStatus] = useState("Wait a moment :)");
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    fetch(`/api/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.key) {
          setStatus("Confirm redirect ;)");
          if (confirm(`You are being redirected to ${res.url}`)) {
            window.location.href = res.url;
          }
        } else {
          setStatus("Not found :(");
        }
      });
  });

  return (
    <h1
      style={{
        textAlign: "center",
        fontSize: "2em",
        margin: "1em 0",
        fontStyle: "bold",
      }}
    >
      {status}
    </h1>
  );
};

export default Redirect;
