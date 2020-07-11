import React, { Fragment } from 'react';
import Tabs from './tabs';
import Panel from './panel';
import Tab from './tab';
import Content from './content';
import './tabs.scss';

import Portfolio from '../../pages/portfolio';
import About from '../about';
import useTabs from './useTabs';
import Services from '../Services';

const TabsComponent: React.FC<IProps> = (props: IProps) => {
    const { activePanel, setActivePanel, setFirstPanelRef } = useTabs();

    return (
        <article className='tabs-container'>
            <Tabs
                id='nav-links'
                className='tab-col'
                direction='col'
                activePanel={activePanel}
                onActivePanelChange={setActivePanel}>
                {/*if ever need a first panel ref={setFirstPanelRef} */}
                <Panel>
                    <Tab>Who am I?</Tab>
                    <Content>
                        <About />
                    </Content>
                </Panel>
                <Panel ref={setFirstPanelRef}>
                    <Tab>Where else can you find me?</Tab>
                    <Content></Content>
                </Panel>
            </Tabs>
        </article>
    );
};

export default TabsComponent;
