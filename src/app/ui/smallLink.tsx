import { useRouter } from 'next/navigation';

export default function SmallLink() {
    const router = useRouter();

    return (
        <div
            onClick={() => router.back()}
            className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-[0.625rem] bg-no-repeat bg-center bg-[url('/back-20.svg')]
                hover:bg-rose-400 hover:bg-[url('/back-white-20.svg')] 
                dark:bg-rose-400 dark:bg-opacity-20
                dark:hover:bg-rose-400"
        />
    );
}
