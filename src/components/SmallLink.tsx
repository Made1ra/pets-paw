import { useNavigate } from 'react-router-dom';

function SmallLink() {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-[0.625rem] bg-no-repeat bg-center bg-[url('../src/assets/back-20.svg')]
                hover:bg-rose-400 hover:bg-[url('../src/assets/back-white-20.svg')] 
                dark:bg-rose-400 dark:bg-opacity-20
                dark:hover:bg-rose-400 "
        />
    );
}

export default SmallLink;
