type NavigationContainerProps = {
    children?: React.ReactNode;
};

function NavigationContainer({ children }: NavigationContainerProps) {
    return (
        <div className="flex flex-row items-center mb-6">
            {children}
        </div>
    );
}

export default NavigationContainer;
