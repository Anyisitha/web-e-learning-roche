import { Container } from "@mui/material";
import useControllers from "controllers";
import useComponents from "views/components";

const Step1 = () => {
    /** Components */
    const { Input } = useComponents();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useAdmin } = useScreenHooks();
    const { useAdminModules } = useAdmin();
    const {
        control,
        handleStep1,
        handleSubmit
    } = useAdminModules();

    return (
        <Container className="pt-8">
            {/* <Input /> */}
        </Container>
    );
}

export default Step1;