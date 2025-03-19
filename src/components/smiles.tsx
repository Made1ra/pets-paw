import Link from "next/link";
import Smile from "@/components/smile";

export default function Smiles() {
  const smiles = [
    {
      title: "likes",
    },
    {
      title: "favourites",
    },
    {
      title: "dislikes",
    },
  ];

  return (
    <>
      {smiles.map((smile) => (
        <div key={smile.title}>
          <Link href={`/${smile.title}`}>
            <Smile title={smile.title} />
          </Link>
        </div>
      ))}
    </>
  );
}
