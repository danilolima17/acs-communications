// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
"use client"

import { setLogLevel } from '@azure/logger';
import { initializeIcons, Spinner } from '@fluentui/react';
import React, { useEffect, useState } from 'react';
import { ChatScreen } from '../components/ChatScreen';
import ConfigurationScreen from '../components/ConfigurationScreen';
import { EndScreen } from '../components/EndScreen/EndScreen';
import { ErrorScreen } from '../components/ErrorScreen';
import HomeScreen from '../components/HomeScreen';
import { getExistingThreadIdFromURL } from '../pages/api/getParametersFromURL';
import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons';


setLogLevel('verbose');

initializeIcons();
initializeFileTypeIcons();

const ERROR_PAGE_TITLE_REMOVED = 'You have been removed from the chat.';

const webAppTitle = document.title;

export default (): JSX.Element => {
  const [page, setPage] = useState('home');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [threadId, setThreadId] = useState('');
  const [endpointUrl, setEndpointUrl] = useState('');


  const renderPage = (): JSX.Element => {
    switch (page) {
      case 'home': {
        document.title = `home - ${webAppTitle}`;
        return <HomeScreen />;
      }
      case 'configuration': {
        document.title = `configuration - ${webAppTitle}`;
        return (
          <ConfigurationScreen
            joinChatHandler={() => {
              setPage('chat');
            }}
            setToken={setToken}
            setUserId={setUserId}
            setDisplayName={setDisplayName}
            setThreadId={setThreadId}
            setEndpointUrl={setEndpointUrl}
          />
        );
      }
      case 'chat': {
        document.title = `chat - ${webAppTitle}`;
        if (token && userId && displayName && threadId && endpointUrl) {
          return (
            <ChatScreen
              token={token}
              userId={userId}
              displayName={displayName}
              endpointUrl={endpointUrl}
              threadId={threadId}
              endChatHandler={(isParticipantRemoved) => {
                if (isParticipantRemoved) {
                  setPage('removed');
                } else {
                  setPage('end');
                }
              }}
            />
          );
        }

        return <Spinner label={'Loading...'} ariaLive="assertive" labelPosition="top" />;
      }
      case 'end': {
        document.title = `end chat - ${webAppTitle}`;
        return (
          <EndScreen
            rejoinHandler={() => {
              setPage('chat'); // use stored information to attempt to rejoin the chat thread
            }}
            homeHandler={() => {
       
                window.location.href = window.location.origin;
          
            }}
            userId={userId}
            displayName={displayName}
          />
        );
      }
      case 'removed': {
        document.title = `removed - ${webAppTitle}`;
        return (
          <ErrorScreen
            title={ERROR_PAGE_TITLE_REMOVED}
            homeHandler={() => {
         
                window.location.href = window.location.origin;

            }}
          />
        );
      }
      default:
        document.title = `error - ${webAppTitle}`;
        throw new Error('Page type not recognized');
    }
  };

  if (getExistingThreadIdFromURL() && page === 'home') {
    setPage('configuration');
  }

  return renderPage();
};
