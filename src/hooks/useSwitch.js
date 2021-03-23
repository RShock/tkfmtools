import { useEffect, useState } from 'react';

import useLocalStorage from 'hooks/useLocalStorage';

const useSwitch = (localStorageKey, layouts, initLayoutIndex, unmountOnLeave) => {
    const [localLayout, setLocalLayout] = useLocalStorage(
        localStorageKey,
        layouts[initLayoutIndex]
    )

    const [state, setState] = useState({
        canRender: Array(layouts.length).fill(false),
    })

    useEffect(() => {
        if (!localLayout) {
            return
        }

        setState((state) => ({
            ...state,
            canRender: state.canRender.map((b, i) => (
                (b && !unmountOnLeave) || layouts[i] === localLayout)
            )
        }))
    }, [localLayout])

    const setLayout = (layout) => setLocalLayout(layout)

    return {
        layout: localLayout,
        canRender: state.canRender,
        setLayout: setLayout
    }
}

export default useSwitch