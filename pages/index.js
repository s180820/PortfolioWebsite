import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Image, 
    Link,
    List,
    ListItem,
    Icon,
    chakra,
    useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {IoLogoGithub,
        IoLogoLinkedin,
        IoLogoInstagram,
        IoLogoFacebook,
        IoLogoPython,
        IoLogoJavascript,
        IoMail} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
        shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
          })

const Page = () => {
    return (
    <Layout>
        <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', "whiteAlpha.200")} p={3} mb={6} align="center">
            Hello, I&apos;m a Data-scientist based in Copenhagen!
        </Box>
        
        <Box dispaly={{md:'flex'}}>
        <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
            Gustav Gamst Larsen
        </Heading>
        <p>Data Scientist and Artificial Intelligence Enthusiast </p>
        </Box>
        <Box 
        flexShrink={0} 
        mt={{base: 4, md:0}}
        ml={{md:6}}
        align="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Gustav1.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                About me
            </Heading>
        <Paragraph>Student at Denmarks Technical University studying Bsc. Artificial Intelligence and Data science. 
            Machine learning, Data science and Human Cognition are some of my primary interests. 
            Toying with data and visualising plots and grafs is a passion.
            </Paragraph>
        <Box align='center' my={4}>
            <Button
                as={NextLink}
                href="/works"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                >
                My Portfolio
            </Button>
        </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>1997</BioYear>
                Born in Copenhagen, Denmark.
            </BioSection>
            <BioSection>
                <BioYear>2018-2021</BioYear>
                Bachelors Bsc program: Artificial Intelligence and Data at Denmarks Technical University (DTU)
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Teaching Assistant in 02461 Introduction to Intelligent Systems (DTU)
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Contract work for SMK (States Museum of Art, Copenhagen) as a Deep Learning Engineer, working with Deep Voice Conversion
            </BioSection>
            <BioSection>
                <BioYear>2022-present</BioYear>
                Masters Msc Program: Human Centered AI at Denmarks Technical University (DTU).
            </BioSection>
            <BioSection>
                <BioYear>2022-present</BioYear>
                Teaching Assistant in Big Data Mangement at Copenhagen Buisness School (CBS)
            </BioSection>
            <BioSection>
                <BioYear>2022-present</BioYear>
                Student Software Developer at Siemens Mobility (Siemens A/S)
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I enjoy
            </Heading>
        <Paragraph> Machine Learning, Datascience, Human Cognition, Music, Art, Cooking
            </Paragraph>
        </Section>
        <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
                I program in
            </Heading>
        <Paragraph> Python <Icon as={IoLogoPython} />, R, Java, JavaScript <Icon as={IoLogoJavascript} />
            </Paragraph>
        </Section>
        <Section delay={0.5}>
            <Heading as='h3' variant="section-title">
                On the web
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://www.linkedin.com/in/gustav-gamst-larsen-153b03146/" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>Linkedin Profile</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://github.com/s180820" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>Github Profile</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.instagram.com/gingergustav/" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>@gingergustav</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.facebook.com/gustav.larsen.7/" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>Gustav Larsen</Button>
                    </Link>
                </ListItem>
                <a href="mailto:Redgustavlarsen@gmail.com">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />}>Send me a mail!</Button>
                    </a>
            </List>
        </Section>
        </Container>
        </Layout>
    )
}

export default Page