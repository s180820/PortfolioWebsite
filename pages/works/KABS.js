import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="KABS">
            <Container>
                <Title>
                    Coordinator of the Bachelor Studystart <Badge>2021-2022</Badge>
                </Title>
                <P>
                Consisting of 31 students, KABS21 was responsible for the start of the academic year 2021 at DTU, which involved 269 vectors (tutors) and around 2300 students.
                The work consists of providing the framework for how commencement of studies is to proceed: training the vectors prior to the introduction events, coordinating activities for new students during their first semester, and in general act as leaders and role models for the vectors.
                Through the KABS work, the student acquires a number of competences, including an understanding of group dynamics, skills in interacting in groups, time mangement and mainting an overview in stressful situations. In addition, the student will have gained mangement experience due to being responsible for a team of vectors and a fresher&apos;s trip, as well as competences within personal communication and conflict mangement.
                </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.pf.dk/studieliv/studiestart/bachelor-studiestart">
                        PF website <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <WorkImage src="/images/KABS.jpg" alt="KABS"/>
            <SimpleGrid columns={2} gap={2}>
            <WorkImage src="/images/KABS_Gustav.jpg" alt="KABS_GUSTAV"/>
            <WorkImage src="/images/SMKID21.jpg" alt="SMKID"/>
            </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work