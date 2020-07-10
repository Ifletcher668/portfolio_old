import React, { forwardRef } from 'react';
import { PanelContextProvider } from './context';
import useForwardRef from '@bedrock-layout/use-forwarded-ref';

const Panel: React.FC<ITab> = forwardRef((props: ITab, ref) => {
    const { children } = props;

    const panelRef = useForwardRef(ref);

    if (!panelRef.current) panelRef.current = {};

    return <PanelContextProvider value={panelRef.current}>{children}</PanelContextProvider>;
});

export default Panel;
