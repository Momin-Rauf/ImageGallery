export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `bg-[#090b0e] mr-10 w-36 self-center relative left-7 rounded-full p-1 text-white ${
                    disabled && 'opacity-25'
                } ` 
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
