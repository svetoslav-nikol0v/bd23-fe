import React from 'react';
import { IAppContext } from '../../types/interfaces';

export const AppContext = React.createContext<IAppContext>(null!);
export const useAppContext = (): IAppContext => {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
