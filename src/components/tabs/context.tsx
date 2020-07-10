import { createContext } from 'react';

export const tabListElementContext: any = createContext(null);
export const TabListProvider = tabListElementContext.Provider;

export const selectedPanelContext: any = createContext(null);
export const SelectedPanelProvider = selectedPanelContext.Provider;

export const setSelectedPanelContext: any = createContext(null);
export const SetSelectedPanelProvider = setSelectedPanelContext.Provider;

export const panelContext: any = createContext(null);
export const PanelContextProvider = panelContext.Provider;
