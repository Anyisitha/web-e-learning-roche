import React, {FC} from "react";
import {Provider} from "react-redux";
import useConfig from "config";
import {Router} from "react-router";
import {createMemoryHistory} from "history";

const useRenderTemplate = () => {
    /** Configuration hooks */
    const {useStoreConfig} = useConfig();
    const {store} = useStoreConfig();

    /** History variable */
    const history = createMemoryHistory();

    /**
     * This functional component generates the template so that the component can be assembled and tested.
     * @return ComponentType
     */
    const RenderTemplate : FC<{children: any;}> = ({children}) => {
        return (
            <React.Suspense fallback={null}>
                <Provider store={store}>
                    <Router history={history}>
                        {children}
                    </Router>
                </Provider>
            </React.Suspense>
        );
    }

    return {
        RenderTemplate
    };
}

export default useRenderTemplate;