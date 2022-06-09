import { Container, Heading, List, ListItem, Link, Button} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'


const Courses = () => {
 return (
     <Layout>
     <Container>
         <Heading as ='h3' fontSize={20} mb={4}>
             Passed Technical Specification Courses
         </Heading>
         A list of the Technical Specification courses I have passed at my time at DTU.
         <Section delay={0.1}>
            <List>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02182" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02182 - Symbolic artificial intelligence</Button>
                    </Link> 
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02405" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02405 - Probability Theory</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02418" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02418 - Statistical Modelling: Theory and Practice</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02445" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02445 -  Project in statistical evaluation for Artificial Intelligence and Data</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02450" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02450 - Introduction to machine learning and data mining</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02455" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02455 - Experiment in cognitive science</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02462" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02462 - Signals and data</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02463" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02463 - Active machine learning and agency</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02464" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02464 - Artificial intelligence and human cognition</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02465" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02465 - Introduction to reinforcement learning and control</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02467" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02467 - Computational social science</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02506" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02506 - Advanced Image Analysis</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02806" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02806 - Social data analysis and visualization</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://kurser.dtu.dk/course/02809" target="_blank">
                        <Button variant="ghost" colorScheme="teal">02809 - UX design prototyping</Button>
                    </Link>
                </ListItem>
            </List>
        </Section>
     </Container>
     </Layout>
 )
}

export default Courses