import Paw from '../assets/paw.svg';
import PetsPaw from '../assets/PetsPaw.svg';

function Logo() {
    return (
        <div className="w-[106.16px] h-6 pr-[2.40px] justify-center items-center gap-[7.89px] inline-flex">
            <div>
                <img src={Paw} />
            </div>
            <div>
                <img src={PetsPaw} />
            </div>
        </div>
    );
}

export default Logo;
