import { useEffect, useState } from "react";

const useHeaderDashboard = () => {
    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);

    /** Handlers */
    
    /** Effects */
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return {
        width,
    };
}

export default useHeaderDashboard;