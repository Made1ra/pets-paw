export default function RightSectionContainer({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <div className="w-screen flex flex-col items-center
        max-sm:ml-4 max-sm:overflow-x-hidden
        md:items-end
        lg:flex lg:p-0 lg:-mr-[8.5rem] lg:ml-72
        xl:ml-72
        2xl:ml-80 2xl:float-right">
            {children}
        </div>
    );
}
