import React from 'react';
import { CSS, styled } from '@nextui-org/react';

export interface LogoProps {
    auto?: boolean;
    size?: number;
    width?: number;
    height?: number;
    small?: boolean;
    fill?: string;
    dark?: boolean;
    className?: string;
    css?: CSS;
}

// const StyledSmallLogo = styled('svg', {
//     '& path': { fill: '$foreground' },
//     variants: {
//         auto: {
//             true: {
//                 display: 'none',
//                 '@mdMax': {
//                     display: 'block'
//                 }
//             }
//         }
//     }
// });

const StyledLargeLogo = styled('svg', {
    display: 'block',
    '& path:nth-child(1)': { fill: '$foreground' },
    variants: {
        auto: {
            true: {
                '@mdMax': {
                    display: 'block'
                }
            }
        }
    }
});

const Logo: React.FC<LogoProps> = ({ auto, size, width, height, dark, small, css, className, ...props }) => {
    // const Small = () => (
    //     <StyledSmallLogo
    //         className="logo__small"
    //         width={width || size || 25}
    //         height={height || size || 25}
    //         viewBox="0 0 43 43"
    //         auto={auto}
    //         css={css}
    //         {...props}
    //     >
    //         <path d="M32 43H11a10.928 10.928 0 01-7.778-3.222A10.928 10.928 0 010 32V11a10.928 10.928 0 013.222-7.778A10.928 10.928 0 0111 0h21a10.929 10.929 0 017.779 3.222A10.927 10.927 0 0143 11v21a10.927 10.927 0 01-3.222 7.778A10.929 10.929 0 0132 43zM11.314 12.293v12.033a6.35 6.35 0 00.87 3.31 6.243 6.243 0 002.422 2.3 7.458 7.458 0 003.595.843 7.474 7.474 0 003.6-.839 6.2 6.2 0 002.418-2.3 6.381 6.381 0 00.869-3.315V12.292h-1.659V24.21a5.149 5.149 0 01-.643 2.578 4.6 4.6 0 01-1.824 1.779 5.668 5.668 0 01-2.759.648 5.646 5.646 0 01-2.756-.648 4.64 4.64 0 01-1.823-1.779 5.116 5.116 0 01-.648-2.578V12.292zm18.6 0v18.175h1.66V12.293z" />
    //     </StyledSmallLogo>
    // );

    const Large = () => (
        <StyledLargeLogo className="logo__large" width={142} height={28} viewBox="0 0 284 56" auto={auto} {...props}>
            <path d="M.585 44h8.714V32.288l4.286-5.233L24.875 44h10.424L19.824 21.24 35.118 2.784H24.674L9.842 20.958H9.3V2.785H.585V44ZM48.31 44.584c4.568 0 7.526-1.993 9.035-4.87h.242V44h8.13V23.151c0-7.365-6.238-10.464-13.12-10.464-7.407 0-12.277 3.542-13.464 9.176l7.929.644c.584-2.052 2.415-3.562 5.494-3.562 2.918 0 4.588 1.47 4.588 4.005v.12c0 1.993-2.113 2.255-7.486 2.778-6.118.563-11.612 2.616-11.612 9.519 0 6.117 4.367 9.217 10.264 9.217Zm2.455-5.917c-2.636 0-4.528-1.227-4.528-3.582 0-2.415 1.992-3.602 5.01-4.025 1.872-.261 4.931-.704 5.958-1.388v3.28c0 3.24-2.677 5.715-6.44 5.715ZM81.183 44.584c4.568 0 7.526-1.993 9.036-4.87h.241V44h8.13V23.151c0-7.365-6.238-10.464-13.12-10.464-7.406 0-12.277 3.542-13.464 9.176l7.929.644c.584-2.052 2.415-3.562 5.494-3.562 2.918 0 4.588 1.47 4.588 4.005v.12c0 1.993-2.113 2.255-7.486 2.778-6.118.563-11.612 2.616-11.612 9.519 0 6.117 4.367 9.217 10.264 9.217Zm2.455-5.917c-2.636 0-4.528-1.227-4.528-3.582 0-2.415 1.992-3.602 5.01-4.025 1.872-.261 4.931-.704 5.958-1.388v3.28c0 3.24-2.677 5.715-6.44 5.715ZM105.241 55.592h8.573V39.049h.262c1.187 2.576 3.783 5.454 8.774 5.454 7.044 0 12.538-5.574 12.538-15.918 0-10.626-5.736-15.898-12.518-15.898-5.172 0-7.647 3.079-8.794 5.594h-.382V13.09h-8.453v42.503Zm8.392-27.047c0-5.515 2.335-9.036 6.5-9.036 4.247 0 6.5 3.683 6.5 9.036 0 5.393-2.294 9.136-6.5 9.136-4.125 0-6.5-3.622-6.5-9.136ZM155.069 44.604c9.378 0 15.214-6.42 15.214-15.939 0-9.579-5.836-15.978-15.214-15.978s-15.214 6.4-15.214 15.978c0 9.52 5.836 15.939 15.214 15.939Zm.04-6.641c-4.326 0-6.54-3.965-6.54-9.358 0-5.393 2.214-9.378 6.54-9.378 4.247 0 6.46 3.985 6.46 9.378 0 5.393-2.213 9.358-6.46 9.358ZM207.151 13.09h-6.843V9.305c0-3.24 1.751-5.051 4.871-5.051 1.187 0 1.911.261 2.455.442l1.046-3.14c-.724-.301-1.932-.683-3.823-.683-4.206 0-8.151 2.696-8.151 7.687v4.528h-4.749v3.12h4.749V44h3.582l.02-27.792h6.843V13.09ZM214.34 44h3.602V13.09h-3.602V44Zm1.831-36.224c1.47 0 2.697-1.167 2.697-2.576 0-1.408-1.227-2.576-2.697-2.576-1.469 0-2.676 1.168-2.676 2.576 0 1.41 1.207 2.576 2.676 2.576ZM239.591 13.09h-6.54V5.682h-3.603v7.406h-4.608v3.12h4.608v20.566c0 5.052 3.985 7.688 7.95 7.688 1.489 0 2.495-.282 3.179-.544l-.765-3.24a7.35 7.35 0 0 1-2.092.282c-2.436 0-4.669-1.147-4.669-5.03V16.207h6.54V13.09Z" />
            <path
                d="M181.09 44.584c2.757 0 5.192-2.335 5.232-5.233-.04-2.857-2.475-5.172-5.232-5.172-2.898 0-5.273 2.315-5.233 5.172-.04 2.898 2.335 5.233 5.233 5.233Z"
                fill="#00B39A"
            />
        </StyledLargeLogo>
    );

    // if (auto) {
    //     return (
    //         <div>
    //             <Small />
    //             <Large />
    //         </div>
    //     );
    // }
    //
    // if (small) {
    //     return <Small />;
    // }
    return <Large />;
};

export default Logo;