import { useEffect, useState } from 'react';

const useTabs = () => {
    const [activePanel, setActivePanel] = useState<any>();
    const [firstPanelRef, setFirstPanelRef] = useState<any>();

    useEffect(() => setActivePanel(firstPanelRef), [firstPanelRef]);

    return {
        activePanel,
        setActivePanel,
        firstPanelRef,
        setFirstPanelRef,
    };
};
export default useTabs;
