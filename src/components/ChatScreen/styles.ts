// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { mergeStyles } from '@fluentui/react';
import styled from 'styled-components';

export const chatScreenContainerStyle = mergeStyles({
  height: '100%',
  width: '100%',
  paddingTop: '2.5rem',
  paddingBottom: '0.5rem',
  
});

export const chatCompositeContainerStyle = mergeStyles({
  width: '100%',
  height: '100%',
 
});

export const Footer = styled.footer`
  background-color: #4a90a7;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  div {
    display: flex;
    justify-content: space-around;
  }

  svg {
    color: #fff;
    font-weight: 900;
  }
`