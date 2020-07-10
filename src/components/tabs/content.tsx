import React, { useContext } from 'react';
import { selectedPanelContext, panelContext } from './context';

const Content: React.FC<IProps> = (props: IProps) => {
    const { id, className, children } = props;

    const selectedPanel = useContext(selectedPanelContext);
    const panel = useContext(panelContext);

    return selectedPanel === panel ? (
        <section id={id} className={`${className ? className : ''}`}>
            {children}
        </section>
    ) : null;
};

export default Content;
