import { Route } from '@/lib/docs/page';
import { Container } from '@nextui-org/react';
import React from 'react';
import Navbar from './navbar';
import TabBar from '@/components/tab-bar';

export interface Props {
    routes: Route[];
    currentRoute?: Route;
    tag?: string;
    slug?: string;
}

const DefaultLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, routes }) => {
    return (
        <div id="app-container">
            <Navbar isHome hasNotify routes={routes} />
            <Container
                lg={true}
                id="main-container"
                display="flex"
                as="main"
                alignContent="space-between"
                className="main-container"
                css={{
                    position: 'relative',
                    minHeight: '100vh',
                    background: '$background',
                    '@mdMax': {
                        overflowX: 'hidden'
                    }
                }}
            >
                {children}
            </Container>

            <TabBar />
        </div>
    );
};

export default DefaultLayout;
