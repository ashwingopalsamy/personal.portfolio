import {Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text} from '@/once-ui/components';
import {baseURL, renderContent} from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss'
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import React from "react";

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations();
    const {person, about, social } = renderContent(t);
	const title = about.title;
	const description = about.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function About(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const {person, about, social } = renderContent(t);
    const structure = [
        { 
            title: about.intro.title,
            display: about.intro.display,
            items: []
        },
        { 
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map(experience => experience.company)
        },
        {
            // @ts-ignore
            title: about.studies.title,
            // @ts-ignore
            display: about.studies.display,
            // @ts-ignore
            items: about.studies.education.map((education: { course: any; }) => education.course)
        },
        { 
            title: about.technical.title,
            display: about.technical.display,
            items: about.technical.skills.map(skill => skill.title)
        },
    ]

    // @ts-ignore
    const {education: education1, title, display} = about.studies;
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />
            { about.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                    <TableOfContents
                        structure={structure}
                        about={about} />
                </Flex>
            )}
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                { about.avatar.display && (
                    <Flex
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar
                            src={person.avatar}
                            size="xl"/>
                        { person.languages.length > 0 && (
                            <Flex
                                wrap
                                gap="8">
                                {person.languages.map((language, index) => (
                                    <Tag
                                        key={index}
                                        size="m">
                                        {language}
                                    </Tag>
                                ))}
                            </Flex>
                        )}
                    </Flex>
                )}
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">
                    <Flex
                        id={about.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        marginBottom="32">
                        <Heading
                            className={styles.textAlign}
                            variant="display-strong-s"
                            marginBottom="xs"
                        >
                            {person.name}
                        </Heading>
                        { about.intro.display && (
                            <Flex
                                direction="column"
                                textVariant="body-default-l"
                                fillWidth gap="m" marginBottom="m">
                                {about.intro.description}
                            </Flex>
                        )}
                        {social.length > 0 && (
                            <Flex
                                className={styles.blockAlign}
                                paddingBottom="8" gap="8" wrap>
                                {social.map((item) => (
                                    item.link && (
                                        <Button
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="tertiary"/>
                                    )
                                ))}
                            </Flex>
                        )}
                        <Flex
                            className={styles.blockAlign}
                            paddingTop="20" paddingBottom="8" gap="8" wrap>
                            <Flex
                                style={{
                                    border: '1px solid var(--brand-alpha-medium)',
                                    width: 'fit-content'
                                }}
                                alpha="accent-weak" radius="full"
                                padding="8" gap="8"
                                alignItems="center">
                                <Flex>
                                    <Icon
                                        name="pdf"
                                        onBackground="accent-weak" />
                                </Flex>
                                <Flex>
                                    Download Resume
                                </Flex>
                                <IconButton
                                    href={`/docs/Resume_AshwinGopalsamy.pdf`}
                                    data-border="rounded"
                                    variant="tertiary"
                                    icon="chevronDown" />
                            </Flex>
                            {about.calendar.display && (
                                <Flex
                                    style={{
                                        backdropFilter: 'blur(var(--static-space-1))',
                                        border: '1px solid var(--brand-alpha-medium)',
                                        width: 'fit-content'
                                    }}
                                    alpha="accent-weak" radius="full"
                                    padding="8" gap="8"
                                    alignItems="center">
                                    <Flex>
                                        <Icon
                                            name="calendar"
                                            onBackground="accent-weak" />
                                    </Flex>
                                    <Flex>
                                        Meet in 1:1 call
                                    </Flex>
                                    <IconButton
                                        href={about.calendar.link}
                                        data-border="rounded"
                                        variant="tertiary"
                                        icon="chevronRight" />
                                </Flex>
                            )}
                        </Flex>



                        {/*{about.calendar.display && (*/}
                        {/*    <Flex*/}
                        {/*        className={styles.blockAlign}*/}
                        {/*        style={{*/}
                        {/*            backdropFilter: 'blur(var(--static-space-1))',*/}
                        {/*            border: '1px solid var(--brand-alpha-medium)',*/}
                        {/*            width: 'fit-content'*/}
                        {/*        }}*/}
                        {/*        alpha="accent-weak" radius="full"*/}
                        {/*        fillWidth padding="4" gap="8" marginBottom="s" marginTop="s"*/}
                        {/*        alignItems="center">*/}
                        {/*        <Flex paddingLeft="12">*/}
                        {/*            <Icon*/}
                        {/*                name="calendar"*/}
                        {/*                onBackground="accent-weak"/>*/}
                        {/*        </Flex>*/}
                        {/*        <Flex*/}
                        {/*            paddingX="8">*/}
                        {/*            Meet in 1:1 call*/}
                        {/*        </Flex>*/}
                        {/*        <IconButton*/}
                        {/*            href={about.calendar.link}*/}
                        {/*            data-border="rounded"*/}
                        {/*            variant="tertiary"*/}
                        {/*            icon="chevronRight"/>*/}
                        {/*    </Flex>*/}
                        {/*)}*/}
                        {/*<Flex translateY="10" delay={0.1}>*/}
                        {/*    <Button*/}
                        {/*        data-border="rounded"*/}
                        {/*        href={`${person.resume}`}*/}
                        {/*        variant="tertiary"*/}
                        {/*        suffixIcon="chevronDown"*/}
                        {/*        size="m">*/}
                        {/*        <Flex*/}
                        {/*            gap="8"*/}
                        {/*            alignItems="center">*/}
                        {/*            {about.avatar.display && (*/}
                        {/*                <Avatar*/}
                        {/*                    style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}*/}
                        {/*                    src={person.avatar}*/}
                        {/*                    size="m"/>*/}
                        {/*            )}*/}
                        {/*            Download Resume*/}
                        {/*        </Flex>*/}
                        {/*    </Button>*/}
                        {/*</Flex>*/}
                    </Flex>

                    { about.work.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.work.title}
                                // @ts-ignore
                                variant="display-medium-s"
                                marginBottom="m">
                                {about.work.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {about.work.experiences.map((experience, index) => (
                                    <Flex
                                        key={`${experience.company}-${experience.role}-${index}`}
                                        fillWidth
                                        direction="column">
                                        <Flex
                                            fillWidth
                                            justifyContent="space-between"
                                            alignItems="flex-end"
                                            marginBottom="4">
                                            <Text
                                                id={experience.company}
                                                variant="heading-strong-l">
                                                {experience.company}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {experience.timeframe}
                                            </Text>
                                        </Flex>
                                        <Text
                                            variant="body-default-s"
                                            onBackground="brand-weak"
                                            marginBottom="m">
                                            {experience.role}
                                        </Text>
                                        <Flex
                                            as="ul"
                                            direction="column" gap="16">
                                            {experience.achievements.map((achievement: string, index: any) => (
                                                <Text
                                                    as="li"
                                                    variant="body-default-m"
                                                    key={`${experience.company}-${index}`}>
                                                    {achievement}
                                                </Text>
                                            ))}
                                        </Flex>
                                        {experience.images.length > 0 && (
                                            <Flex
                                                fillWidth paddingTop="m" paddingLeft="40"
                                                wrap>
                                                {experience.images.map((image, index) => (
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        minWidth={image.width} height={image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src}/>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    { display && (
                        <>
                            <Heading
                                as="h2"
                                // @ts-ignore
                                id={title}
                                // @ts-ignore
                                variant="display-medium-s"
                                marginBottom="m">

                                {title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {education1.map((education: { course: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; role: any; timeframe: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; college: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; achievements: string[]; images: any[]; }, index: any) => (
                                    <Flex
                                        key={`${education.course}-${education.role}-${index}`}
                                        fillWidth
                                        direction="column">
                                        <Flex
                                            fillWidth
                                            justifyContent="space-between"
                                            alignItems="flex-end"
                                            marginBottom="4">
                                            <Text
                                                // @ts-ignore
                                                id={education.course}
                                                variant="heading-strong-l">
                                                {education.course}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {education.timeframe}
                                            </Text>
                                        </Flex>
                                        <Text
                                            variant="body-default-s"
                                            onBackground="brand-weak"
                                            marginBottom="m">
                                            {education.college}
                                        </Text>
                                        <Flex
                                            as="ul"
                                            direction="column" gap="16">
                                            {education.achievements.map((achievement: string, index: any) => (
                                                <Text
                                                    as="li"
                                                    variant="body-default-m"
                                                    key={`${education.course}-${index}`}>
                                                    {achievement}
                                                </Text>
                                            ))}
                                        </Flex>
                                        {education.images.length > 0 && (
                                            <Flex
                                                fillWidth paddingTop="m" paddingLeft="40"
                                                wrap>
                                                {education.images.map((image, index) => (
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        minWidth={image.width} height={image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src}/>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {about.technical.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.technical.title}
                                // @ts-ignore
                                variant="display-medium-s"
                                marginBottom="40">
                                {about.technical.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth
                                gap="l"
                                marginBottom="40">
                                {about.technical.skills.map((skill, index) => (
                                    <Flex
                                        key={`${skill.title}-${index}`}
                                        fillWidth
                                        gap="4"
                                        id={skill.title}
                                        direction="column">
                                        <Text variant="heading-strong-l">
                                            {skill.title}
                                        </Text>
                                        <Text
                                            variant="body-default-m"
                                            onBackground="neutral-medium">
                                            {skill.description}
                                        </Text>
                                        {skill.images.length > 0 && (
                                            <Flex
                                                fillWidth
                                                paddingTop="m"
                                                gap="12"
                                                wrap>
                                                {skill.images.map((image, index) => (
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        minWidth={image.width}
                                                        height={image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src}/>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                </Flex>
            </Flex>
        </Flex>
    );
}