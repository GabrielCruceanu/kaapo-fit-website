import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';
import { CssBaseline } from '@nextui-org/react';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        const styledJSXStyles = flush();

        return {
            ...initialProps,
            styles: (
                <React.Fragment>
                    {initialProps.styles}
                    {styledJSXStyles}
                </React.Fragment>
            )
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/public/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#fff" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    {CssBaseline.flush()}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
