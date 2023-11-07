import * as React from 'react';
import { RootStore } from './RootStore';

export const StoreCotext  = React.createContext(new RootStore);
export const StoreProvider = StoreCotext .Provider;

export const useStores = ()=> React.useContext(StoreCotext);