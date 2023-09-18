import { Link } from 'react-router-dom';

function SmallLink() {
    return (
        <Link
            to="/"
            style={{ textDecoration: 'none' }}
        >
            <div
                className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-[10px] bg-no-repeat bg-center bg-[url('src/assets/back-20.svg')] hover:bg-rose-400 hover:bg-[url('src/assets/back-white-20.svg')]"
            />
        </Link >
    );
}

export default SmallLink;
