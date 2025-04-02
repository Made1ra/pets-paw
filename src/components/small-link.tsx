import { useRouter } from "next/navigation";

export default function SmallLink() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div
      onClick={handleClick}
      className="flex h-10 w-10 items-center justify-center rounded-[0.625rem] bg-red-100 bg-[url('/back-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/back-white-20.svg')] dark:bg-rose-400 dark:bg-opacity-20 dark:hover:bg-rose-400"
    />
  );
}
