// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
"use client"


import { CommunicationUserIdentifier } from '@azure/communication-common';
import {
  AvatarPersonaData,
  ChatAdapter,
  ChatComposite,
  fromFlatCommunicationIdentifier,
  toFlatCommunicationIdentifier,
  useAzureCommunicationChatAdapter,
  FileSharingMessage
} from '@azure/communication-react';
import { Stack } from '@fluentui/react';
import React, { useCallback, useEffect, useMemo } from 'react';

import { ChatHeader } from '../ChatHeader';
import { Footer, chatCompositeContainerStyle, chatScreenContainerStyle } from './styles';
import { createAutoRefreshingCredential } from '../../utils/credential';
import { fetchEmojiForUser } from '../../utils/emojiCache';
import { getBackgroundColor } from '../../utils/utils';
import { useSwitchableFluentTheme } from '../../theming/SwitchableFluentThemeProvider';
import { Users, Question, VideoCamera } from 'phosphor-react';
import { People20Filled, People20Regular } from '@fluentui/react-icons';
import { useTheme } from '@azure/communication-react';
import { IconButton, mergeStyles } from '@fluentui/react';
import FooterContainer from '../Footer';

// These props are passed in when this component is referenced in JSX and not found in context
interface ChatScreenProps {
  token: string;
  userId: string;
  displayName: string;
  endpointUrl: string;
  threadId: string;
  endChatHandler(isParticipantRemoved: boolean): void;
 
}

export type PeopleButtonProps = {
  isParticipantsDisplayed: boolean;
  setHideParticipants(hideParticipants: boolean): void;
};


export const ChatScreen = (props: ChatScreenProps & PeopleButtonProps): JSX.Element => {
  const { displayName, endpointUrl, threadId, token, userId, endChatHandler } = props;
  const theme = useTheme();
  const participantListExpandedString = 'Participants list Button Expanded';
  const participantListCollapsedString = 'Participants list Button Collapsed';

  // Disables pull down to refresh. Prevents accidental page refresh when scrolling through chat messages
  // Another alternative: set body style touch-action to 'none'. Achieves same result.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'null';
    };
  }, []);

  const { currentTheme } = useSwitchableFluentTheme();

  const adapterAfterCreate = useCallback(
    async (adapter: ChatAdapter): Promise<ChatAdapter> => {
      adapter.on('participantsRemoved', (listener) => {
        const removedParticipantIds = listener.participantsRemoved.map((p) => toFlatCommunicationIdentifier(p.id));
        if (removedParticipantIds.includes(userId)) {
          const removedBy = toFlatCommunicationIdentifier(listener.removedBy.id);
          endChatHandler(removedBy !== userId);
        }
      });
      adapter.on('error', (e) => {
        console.error(e);
      });
      return adapter;
    },
    [endChatHandler, userId]
  );

  const handleFileUpload = async (file: File) => {
    try {
      if (adapter) {
        const fileSharingMessage: FileSharingMessage = {
          content: file, // O arquivo a ser enviado
          type: 'image/png', // O tipo de arquivo (por exemplo, 'image/png' para imagens PNG)
          displayName: file.name // O nome do arquivo a ser exibido no chat
        };
        await adapter.sendMessage({ content: fileSharingMessage });
      }
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
    }
  };
  

  const adapterArgs = useMemo(
    () => ({
      endpoint: endpointUrl,
      userId: fromFlatCommunicationIdentifier(userId) as CommunicationUserIdentifier,
      displayName,
      credential: createAutoRefreshingCredential(userId, token),
      threadId
    }),
    [endpointUrl, userId, displayName, token, threadId]
  );
  const adapter = useAzureCommunicationChatAdapter(adapterArgs, adapterAfterCreate);

  // Dispose of the adapter in the window's before unload event
  useEffect(() => {
    const disposeAdapter = (): void => adapter?.dispose();
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', disposeAdapter);
      return () => window.removeEventListener('beforeunload', disposeAdapter);
    }
  }, [adapter]);

  if (adapter) {
    const onFetchAvatarPersonaData = (userId: string): Promise<AvatarPersonaData> =>
      fetchEmojiForUser(userId).then(
        (emoji) =>
          new Promise((resolve) => {
            return resolve({
              imageInitials: emoji,
              initialsColor: emoji ? getBackgroundColor(emoji)?.backgroundColor : undefined
            });
          })
      );
    return (
      <>
      <Stack className={chatScreenContainerStyle}>
        <Stack.Item className={chatCompositeContainerStyle} role="main">
         
          <div>
           
          <ChatComposite
            adapter={adapter}
            
            options={{
              autoFocus: 'sendBoxTextField'
            }}
            onFetchAvatarPersonaData={onFetchAvatarPersonaData}
                     
          />
          </div>
 
        </Stack.Item>

        <ChatHeader onEndChat={() => adapter.removeParticipant(userId)} />
        
      </Stack>
     
      <IconButton
      onRenderIcon={() => (props.isParticipantsDisplayed ? <People20Filled /> : <People20Regular />)}
      className={mergeStyles({ color: theme.palette.neutralPrimaryAlt })}
      onClick={() => props.setHideParticipants(props.isParticipantsDisplayed)}
      ariaLabel={props.isParticipantsDisplayed ? participantListExpandedString : participantListCollapsedString}
    />     
      </>
    );
  }
  return <>Initializing...</>;
};
