import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import NextLink from 'next/link';
import { Row, Col, Spacer, Link } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { includes } from 'lodash';
import { StyledNavContainer, StyledNavMainContainer } from './styles';
import { isActive } from '@/utils/links';
import Logo from '@/components/logo';
import { Route } from '@/lib/docs/page';
import ThemeToggle from '@/components/theme-toggle';
import useTranslation from 'next-translate/useTranslation';

export interface NavLinkProps {
    text: string;
    href: string;
}

export interface Props {
    routes?: Route[];
    hasNotify?: boolean;
    isHome?: boolean;
}

const Navbar: React.FC<Props> = ({ isHome, hasNotify }) => {
    const router = useRouter();
    const [scrollPosition, setScrollPosition] = useState((typeof window !== 'undefined' && window.pageYOffset) || 0);

    const detached = hasNotify ? scrollPosition > 30 : scrollPosition > 0;

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

    const showBlur = !!detached || isHome;

    const { t, lang } = useTranslation();
    const navLinks: NavLinkProps[] = t('navbar:links', {}, { returnObjects: true });

    return (
        <StyledNavMainContainer id="navbar-container">
            <StyledNavContainer detached={detached} showBlur={showBlur}>
                <Container lg={true} as="nav" display="flex" wrap="nowrap" alignItems="center">
                    <Col
                        className="navbar__logo-container"
                        css={{
                            '@mdMax': {
                                width: '100%'
                            }
                        }}
                    >
                        <Row justify="flex-start" align="center">
                            <NextLink href="/">
                                <Link href="/">
                                    <Logo
                                        auto
                                        className="navbar__logo"
                                        css={{
                                            cursor: 'pointer',
                                            transition: '$default'
                                        }}
                                    />
                                </Link>
                            </NextLink>
                        </Row>
                    </Col>
                    <Col className="navbar__resources-container" css={{ '@mdMax': { d: 'none' } }}>
                        <Row justify="center" align="center">
                            {navLinks.map((link) => (
                                <>
                                    <Spacer x={1} y={0} />
                                    <NextLink href={lang === 'en' ? link.href : `/ro/${link.href}`}>
                                        <Link
                                            className={cn('navbar__link', {
                                                active:
                                                    isActive(router.pathname, link.href) &&
                                                    !includes(router.asPath, 'components')
                                            })}
                                            href={lang === 'en' ? link.href : `/ro/${link.href}`}
                                            css={{
                                                color: '$text',
                                                '&.active': {
                                                    fontWeight: '600',
                                                    color: '$primary'
                                                }
                                            }}
                                        >
                                            {link.text}
                                        </Link>
                                    </NextLink>
                                </>
                            ))}
                        </Row>
                    </Col>
                    <Col className="navbar__search-container">
                        <Row
                            className="navbar__search-row"
                            justify="flex-end"
                            align="center"
                            css={{
                                position: 'initial',
                                '@mdMax': {
                                    jc: 'center'
                                }
                            }}
                        >
                            <Row
                                className="navbar__social-icons-container"
                                justify="flex-end"
                                align="center"
                                gap={1}
                                css={{
                                    width: 'initial',
                                    '@mdMax': {
                                        d: 'none'
                                    }
                                }}
                            >
                                <ThemeToggle
                                    className="navbar__social-icon"
                                    css={{
                                        m: '0 6px',
                                        '& svg': {
                                            transition: '$default'
                                        },
                                        '&:hover': {
                                            '& svg': {
                                                opacity: 0.7
                                            }
                                        }
                                    }}
                                />
                                <NextLink href="" locale={router.locale === 'en' ? 'ro' : 'en'}>
                                    <Link
                                        className="navbar__social-icon"
                                        href=""
                                        css={{
                                            fontSize: '24px',
                                            color: '$text',
                                            m: '0 6px',
                                            '& svg': {
                                                transition: '$default'
                                            },
                                            '&:hover': {
                                                '& svg': {
                                                    opacity: 0.7
                                                }
                                            }
                                        }}
                                    >
                                        {router.locale === 'ro' ? <p>EN</p> : <p>RO</p>}
                                    </Link>
                                </NextLink>
                            </Row>
                        </Row>
                    </Col>
                    <Col
                        className="navbar__menu-container"
                        css={{
                            size: '100%',
                            display: 'none',
                            '@mdMax': {
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }
                        }}
                    >
                        <ThemeToggle
                            className="navbar__social-icon"
                            css={{
                                m: '0 6px',
                                '& svg': {
                                    transition: '$default'
                                },
                                '&:hover': {
                                    '& svg': {
                                        opacity: 0.7
                                    }
                                }
                            }}
                        />
                        <NextLink href="" locale={router.locale === 'en' ? 'ro' : 'en'}>
                            <Link
                                className="navbar__social-icon"
                                href=""
                                css={{
                                    fontSize: '24px',
                                    color: '$text',
                                    m: '0 6px',
                                    '& svg': {
                                        transition: '$default'
                                    },
                                    '&:hover': {
                                        '& svg': {
                                            opacity: 0.7
                                        }
                                    }
                                }}
                            >
                                {router.locale === 'ro' ? <p>EN</p> : <p>RO</p>}
                            </Link>
                        </NextLink>
                    </Col>
                </Container>
            </StyledNavContainer>
        </StyledNavMainContainer>
    );
};

export default Navbar;
