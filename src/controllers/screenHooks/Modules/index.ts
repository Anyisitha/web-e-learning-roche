import { useParams } from "react-router";

const useModules = () => {
    /** Params */
    const { id } = useParams<{id?: string;}>();

    return {
        id
    };
}

export default useModules;