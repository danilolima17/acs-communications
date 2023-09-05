// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AbortSignalLike } from '@azure/abort-controller';

const postRefreshTokenParameters = {
  method: 'POST'
};

export const refreshTokenAsync = (userIdentity: string): ((abortSignal?: AbortSignalLike) => Promise<string>) => {
  return async (): Promise<string> => {
    const response = await fetch(`http://localhost:8080/refreshToken/${userIdentity}`, postRefreshTokenParameters);
    if (response.ok) {
      return (await response.json()).token;
    } else {
      throw new Error('could not refresh token');
    }
  };
};
