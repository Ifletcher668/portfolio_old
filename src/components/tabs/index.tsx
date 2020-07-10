import React, { useState, useEffect, Fragment } from 'react';
import Tabs from './tabs';
import Panel from './panel';
import Tab from './tab';
import Content from './content';
import MusicPage from '../../pages/music';
import WritingPage from '../../pages/writing';
import ContactPage from '../../pages/contact-me';
import Portfolio from '../../pages/portfolio';
import './tabs.scss';
import ResourcesPage from '../../pages/resources';

const TabsComponent: React.FC<IProps> = (props: IProps) => {
    const [activePanel, setActivePanel] = useState<any>();
    const [firstPanelRef, setFirstPanelRef] = useState<any>();

    useEffect(() => setActivePanel(firstPanelRef), [firstPanelRef]);

    return (
        <Fragment>
            <Tabs
                id='sidebar'
                className='test'
                direction='col'
                activePanel={activePanel}
                onActivePanelChange={setActivePanel}>
                {/*if ever need a first panel ref={setFirstPanelRef} */}
                <Panel>
                    <Tab>Musician</Tab>
                    <Content
                        id='music-page'
                        className='overflow-contained flex-container flex-full section'>
                        <MusicPage />
                    </Content>
                </Panel>
                <Panel>
                    <Tab>Writer</Tab>
                    <Content
                        id='writing-page'
                        className='overflow-contained flex-container flex-full section'>
                        <WritingPage />
                    </Content>
                </Panel>
                <Panel>
                    <Tab>Web Developer</Tab>
                    <Content
                        id='dev-portfolio'
                        className='overflow-contained flex-container flex-full section'>
                        <Portfolio />
                    </Content>
                </Panel>
                <Panel>
                    <Tab>Contact Me</Tab>
                    <Content
                        id='contact-me-page'
                        className='overflow-contained flex-container flex-full section'>
                        <ContactPage />
                    </Content>
                </Panel>
                <Panel>
                    <Tab>Resources</Tab>
                    <Content
                        id='resources-page'
                        className='overflow-contained flex-container flex-full section'>
                        <ResourcesPage />
                    </Content>
                </Panel>
            </Tabs>
        </Fragment>
    );
};

export default TabsComponent;
