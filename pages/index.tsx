import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '@/components/navbar/Navbar';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Kaapo.Fit</title>
                <meta name="description" content="Your app to tracking your fitness jurney." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
        </div>
    );
};

export default Home;
