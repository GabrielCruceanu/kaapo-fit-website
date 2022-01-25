import { Box, Link, ScaleFade, Image } from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';
import { images } from '../constants';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Navbar } from '@/components/navbar/Navbar';

const Home: NextPage = () => {
    return (
        <Box backgroundColor="gray.900" height="100vh">
            <Head>
                <title>Kaapo.Fit</title>
                <meta name="description" content="Your app to tracking your fitness jurney." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
        </Box>
    );
};

export default Home;
