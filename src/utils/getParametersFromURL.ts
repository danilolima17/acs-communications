// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


/**
 *
 * The threadId of the current thread is extracted from the url
 * using URLsearchparams.
 *
 * @returns The current threadId as String
 *
 */


// export const getExistingThreadIdFromURL = (): string | null => {
//     const urlParams = new URLSearchParams();
//     const threadId = urlParams.get('threadId');
//     console.log(threadId)
  
//     return threadId;
//   };

import { ParsedUrlQuery } from 'querystring';

export const getExistingThreadIdFromURL = (query: ParsedUrlQuery): string | null => {
  const threadId = query?.threadId;
  
  if (Array.isArray(threadId)) {
    return threadId[0];
  }


  return threadId || null;
};
  
  /**
   *
   * The userId is extracted from the url
   * using URLsearchparams.
   *
   * @returns The userId as String
   *
   */
  
  export const getExistingUserIdFromURL = (query: ParsedUrlQuery): string | null => {
    const userId = query?.userId
    
    if (Array.isArray(userId)) {
      return userId[0];
    }

    return userId || null;
  };
  
  /**
   *
   * The token is extracted from the url
   * using URLsearchparams.
   *
   * @returns The token as String
   *
   */
  
  export const getExistingTokenFromURL = (): string | null => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get('userId');
      return userId;
    }
  
    return null;
  };
  
  /**
   *
   * The endpointURL is extracted from the url
   * using URLsearchparams.
   *
   * @returns The endpointURL as String
   *
   */
  
  export const getExistingEndpointURLFromURL = (): string | null => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const endpointUrl = urlParams.get('endpointUrl');
      return endpointUrl;
    }
    
    return null;
  };
  
  
  /**
   *
   * The displayName is extracted from the url
   * using URLsearchparams.
   *
   * @returns The displayName as String
   *
   */
  
  export const getExistingDisplayNameFromURL = (): string | null => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const displayName = urlParams.get('displayName');
      return displayName;
    }
    
    return null;
  };