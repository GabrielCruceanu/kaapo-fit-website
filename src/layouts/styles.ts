import { styled } from '@nextui-org/react';

export const StyledNavMainContainer = styled('nav', {
    top: 0,
    height: '76px',
    position: 'sticky',
    background: '$menuBackground',
    zIndex: '$max'
});

export const StyledNavContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    size: '100%',
    '& .navbar__social-icon': {
        fill: '$colors$headerIconColor'
    },
    variants: {
        showBlur: {
            true: {
                background: '$menuBackground'
            }
        },
        detached: {
            true: {
                borderBottom: '1px solid $primary'
            },
            false: {
                borderBottom: '1px solid $soft'
            }
        }
    }
});

export const StyledTabMainContainer = styled('nav', {
    bottom: 0,
    height: '76px',
    position: 'sticky',
    background: '$menuBackground',
    zIndex: '$max',
    '@md': {
        display: 'none'
    }
});

export const StyledTabContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    size: '100%',
    '& .navbar__social-icon': {
        fill: '$colors$headerIconColor'
    },
    variants: {
        showBlur: {
            true: {
                background: '$menuBackground'
            }
        },
        detached: {
            true: {
                borderTop: '1px solid $primary'
            },
            false: {
                borderTop: '1px solid $soft'
            }
        }
    }
});
