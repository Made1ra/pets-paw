import girlAndPet from '../assets/girl-and-pet.svg';

function GirlAndPet() {
    return (
        <div className="flex relative">
            <div className="flex-shrink-0 absolute top-1/2 left-1/2 w-[680px] h-[840px] bg-red-100 rounded-[20px] -z-10 transform -translate-x-1/2 -translate-y-1/2" />
            <img
                className="flex-shrink-0 w-[775px] h-[900px] z-10"
                src={girlAndPet}
            />
        </div>
    );
}

export default GirlAndPet;
