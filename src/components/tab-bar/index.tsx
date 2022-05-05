import * as React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Link, Container, Spacer } from '@nextui-org/react';
import cn from 'classnames';
import { isActive } from '@/utils/links';
import { includes } from 'lodash';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { StyledTabContainer, StyledTabMainContainer } from '../../layouts/styles';
import { useEffect, useState } from 'react';

export interface TabLinkProps {
    text: string;
    href: string;
    icon?: string;
}

const TabBar = () => {
    const router = useRouter();
    useEffect(() => {
        window.addEventListener('scroll', onScroll.bind(this));
        return () => {
            window.removeEventListener('scroll', onScroll.bind(this));
        };
    }, []);

    const onScroll = () => {
        requestAnimationFrame(() => {
            setScrollPosition(window.pageYOffset);
        });
    };
    const [scrollPosition, setScrollPosition] = useState((typeof window !== 'undefined' && window.pageYOffset) || 0);
    const detached = scrollPosition > 0;
    const showBlur = !!detached;

    const { t, lang } = useTranslation();
    const navLinks: TabLinkProps[] = t('navbar:mobile-links', {}, { returnObjects: true });
    return (
        <StyledTabMainContainer>
            <StyledTabContainer detached={detached} showBlur={showBlur}>
                <Container lg={true} as="nav" display="flex" wrap="nowrap" alignItems="center" justify="center">
                    {navLinks?.map(({ text, href }, index) => (
                        <>
                            <Spacer x={1} y={0} />
                            <NextLink href={lang === 'en' ? href : `/ro/${href}`} key={index}>
                                <Link
                                    className={cn('navbar__link', {
                                        active:
                                            isActive(router.pathname, href) && !includes(router.asPath, 'components')
                                    })}
                                    href={lang === 'en' ? href : `/ro/${href}`}
                                    css={{
                                        color: '$text',
                                        '&.active': {
                                            fontWeight: '600',
                                            color: '$primary'
                                        }
                                    }}
                                >
                                    {text}
                                </Link>
                            </NextLink>
                        </>
                    ))}

                    <Spacer x={1} y={0} />
                </Container>
            </StyledTabContainer>
        </StyledTabMainContainer>
    );
};

const MemoTabBar = React.memo(TabBar);

export default MemoTabBar;
