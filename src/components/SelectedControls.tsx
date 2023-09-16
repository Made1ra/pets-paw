function SelectedControls() {
    return (
        <div className="w-[90px] h-[30px] relative">
            <div className="w-[90px] h-[30px] left-0 top-0 absolute bg-white rounded-[20px]" />
            <div className="w-2.5 h-2.5 left-[10px] top-[10px] absolute bg-red-100 rounded-[10px] active:bg-rose-400" />
            <div className="w-2.5 h-2.5 left-[25px] top-[10px] absolute bg-red-100 rounded-[10px] active:bg-rose-400" />
            <div className="w-2.5 h-2.5 left-[40px] top-[10px] absolute bg-red-100 rounded-[10px] active:bg-rose-400" />
            <div className="w-2.5 h-2.5 left-[55px] top-[10px] absolute bg-red-100 rounded-[10px] active:bg-rose-400" />
            <div className="w-2.5 h-2.5 left-[70px] top-[10px] absolute bg-red-100 rounded-[10px] active:bg-rose-400" />
        </div>
    );
}

export default SelectedControls;
