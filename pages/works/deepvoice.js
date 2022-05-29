import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="deepvoice">
            <Container>
                <Title>
                    Deep Voice Conversion <Badge>2022</Badge>
                </Title>
                <P>
                    A Project surrounding using Deep Neural Networks to alter a voice or save voice features from one voice and replace content (words and speech).
                    The work was a one time gig for SMK (States Museum of Art in Denmark) and were used to replicate an interview the artist, Haugue Yang, had participated in in english
                    to make it sound like she could speak Danish. The audio were used for a video that was available to the public at the Exhibition &lsquo;Double Soul&lsquo; that was shown at SMK from March till end of July.
                </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>DTU Article</Meta>
                    <Link href="https://www.compute.dtu.dk/english/news/nyhed?id={DD464DED-EE16-4F82-8032-AF197111FFD9}">
                        DTU Compute Article <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Radio Interview</Meta>
                    <Link href="https://www.dr.dk/lyd/p1/kulturen-pa-p1/kulturen-2022-03-15-15-03">
                        Denmarks Radio Interview (40:13) <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <WorkImage src="/images/HaegueYang.jpeg" alt="HaegueYang"/>
            </Container>
        </Layout>
    )
}

export default Work