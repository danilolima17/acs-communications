// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export const localStorageAvailable = typeof Storage !== 'undefined';

export enum LocalStorageKeys {
  Theme = 'AzureCommunicationUI_Theme'
}



export const getThemeFromLocalStorage = (scopeId: string): string | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(LocalStorageKeys.Theme + '_' + scopeId);
  }
  
  return null;
};

export const saveThemeToLocalStorage = (theme: string, scopeId: string): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LocalStorageKeys.Theme + '_' + scopeId, theme);
  }
};






