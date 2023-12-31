// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IButtonStyles, IIconProps, mergeStyles } from '@fluentui/react';

export const chatHeaderContainerStyle = mergeStyles({
  position: 'absolute',
  alignSelf: 'flex-end',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  width: '100%',
  height: '3rem',
  marginBottom: '2rem',
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  backgroundColor: '#4a90a7',
  top: 0
});

export const leaveButtonStyle = mergeStyles({
  marginRight: '0.625rem',
  width: '6.688rem',
  borderWidth: '0.125rem',
  fontSize: '0.875rem', // 14px
  fontWeight: 600
});

export const greyIconButtonStyle = mergeStyles({
  marginRight: '0.5rem'
});

export const leaveIcon: IIconProps = {
  iconName: 'Leave'
};

export const paneButtonContainerStyle = mergeStyles({
  whiteSpace: 'nowrap',
  marginRight: '0.75rem'
});

export const largeLeaveButtonContainerStyle = mergeStyles({
  whiteSpace: 'nowrap',
  '@media (max-width: 50rem)': {
    display: 'none'
  }
});

export const buttonWithIconStyles: IButtonStyles = {
  textContainer: {
    display: 'contents'
  }
};

export const smallLeaveButtonContainerStyle = mergeStyles({
  whiteSpace: 'nowrap',
  '@media (min-width: 50rem)': {
    display: 'none'
  }
});

export const leaveIconStyle = mergeStyles({
  marginRight: '0.5em',
  fontSize: '0.875rem' // 14px
});
