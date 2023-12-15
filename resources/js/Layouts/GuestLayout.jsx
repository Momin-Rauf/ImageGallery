import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex flex-row p-16 relative bottom-4 justify-center items-center">
            

                {children}
            
        </div>
    );
}
