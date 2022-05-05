import React from 'react';
import type { AppInitialProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from '../theme/shared';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextComponent } from '@/lib/types';
import { NextRouter, Router } from 'next/router';
import NProgress from 'nprogress';
import { debounce } from 'lodash';
import RouterEvents from '@/lib/router-events';
import { NextPage } from 'next';
import withTranslation from 'next-translate/withTranslation';

type AppPropsType<R extends NextRouter = NextRouter, P = {}> = AppInitialProps & {
    Component: NextComponent<P>;
    router: R;
    __N_SSG?: boolean;
    __N_SSP?: boolean;
};

type AppProps<P = {}> = AppPropsType<Router, P>;

NProgress.configure({ parent: '#app-container' });

const start = debounce(NProgress.start, 100);
RouterEvents.on('routeChangeStart', start);
RouterEvents.on('routeChangeComplete', (url) => {
    console.log(`Changed to URL: ${url}`);
    start.cancel();
    NProgress.done();
});
RouterEvents.on('routeChangeError', () => {
    start.cancel();
    NProgress.done();
});

const MyApp: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                <Component {...pageProps} />
                <style global jsx>{`
                    .noselect {
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none;
                        /* Non-prefixed version, currently
                                             supported by Chrome and Opera */
                    }
                `}</style>
            </NextUIProvider>
        </NextThemesProvider>
    );
};

export default withTranslation(MyApp);
