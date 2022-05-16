import { useForm } from "react-hook-form";

const useRegisterCard = () => {

    /** Use form */
    const { control } = useForm({mode: "onChange"});

    return {
        control
    }
}

export default useRegisterCard;