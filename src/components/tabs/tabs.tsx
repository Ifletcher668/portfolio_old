import React, { useState, Fragment } from 'react';
import './tabs.scss';

import { TabListProvider, SelectedPanelProvider, SetSelectedPanelProvider } from './context';

const NOOP = () => {};

const Tabs: React.FC<ITabs> = ({
    id,
    className,
    direction,
    children,

    activePanel = null,
    onActivePanelChange = NOOP,
}) => {
    const [tabListElement, setTabListElement] = useState<any>(null);

    return (
        <Fragment>
            <ul
                className={`tab-list-${direction} ${className ? className : ''}`}
                ref={setTabListElement}
            />
            <TabListProvider value={tabListElement}>
                <SetSelectedPanelProvider value={onActivePanelChange}>
                    <SelectedPanelProvider value={activePanel}>
                        {tabListElement ? children : null}
                    </SelectedPanelProvider>
                </SetSelectedPanelProvider>
            </TabListProvider>
        </Fragment>
    );
};

export default Tabs;
