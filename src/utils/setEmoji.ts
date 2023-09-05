// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export const sendEmojiRequest = async (identity: string, emoji: string): Promise<void> => {
    try {
      const postTokenRequestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Emoji: emoji })
      };
      await (
        await fetch('http://localhost:8080/userConfig/' + identity, postTokenRequestOptions)
      ).json;
    } catch (error) {
      console.error('Failed at setting emoji, Error: ', error);
    }
  };
  