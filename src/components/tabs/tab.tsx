import React, { useContext, useCallback } from 'react';
import {
    tabListElementContext,
    setSelectedPanelContext,
    panelContext,
    selectedPanelContext,
} from './context';

import { createPortal } from 'react-dom';

const Tab: React.FC<ITab> = (props: ITab) => {
    const { children } = props;

    const tabListElement: any = useContext(tabListElementContext);
    const setSelectedPanel: any = useContext(setSelectedPanelContext);
    const selectedPanel: any = useContext(selectedPanelContext);
    const panel: any = useContext(panelContext);

    const handleClick = useCallback(() => setSelectedPanel(panel), [setSelectedPanel, panel]);

    const classNames: string[] = ['tab'];

    if (selectedPanel === panel) classNames.push('active');

    return createPortal(
        <div className={classNames.join(' ')}>
            <button onClick={handleClick}>{children}</button>
        </div>,
        tabListElement
    );
};

export default Tab;
