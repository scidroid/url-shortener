import { useRouter } from "next/router";
import { Input } from "postcss";

const Index = () => {
  const router = useRouter();

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2em",
          margin: "1em 0",
          fontStyle: "bold",
        }}
      >
        Insert an url
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("/api/add", {
            method: "POST",
            body: JSON.stringify({
              url: e.target.url.value,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.key) {
                router.push(`/show/${res.key}`);
              } else {
                alert("Failed to submit");
              }
            });
        }}
      >
        <input
          style={{
            fontSize: "1.5em",
            margin: "1em 0",
          }}
          type="url"
          name="url"
          placeholder="Insert an url"
        />
        <input
          style={{
            fontSize: "1.5em",
            margin: "1em 0",
          }}
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default Index;
