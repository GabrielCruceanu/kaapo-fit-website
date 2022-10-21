import { fetchDocsManifest, getCurrentTag, Route } from '@/lib/docs/page';
import DefaultLayout from '../layouts/default';
import { getSlug } from '@/lib/docs/utils';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

interface Props {
    routes: Route[];
    currentRoute: Route;
}

const IndexPage: React.FC<Props> = ({ routes, currentRoute }) => {
    const { query } = useRouter();
    const { tag, slug } = getSlug(query);

    return <DefaultLayout routes={routes} currentRoute={currentRoute} tag={tag} slug={slug}></DefaultLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
    const tag = await getCurrentTag();
    const manifest = await fetchDocsManifest(tag);
    return {
        props: {
            routes: manifest.routes
        }
    };
};

export default IndexPage;
