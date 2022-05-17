import { useCallback, useState } from "react";

const useHome = () => {
    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);

    /** Handlers */
    const getWidth = useCallback(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return {
        width,
        getWidth
    }
}

export default useHome;