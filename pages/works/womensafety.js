import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="womensafety">
            <Container>
                <Title>
                The online conversation about women's safety <Badge>2021</Badge>
                </Title>
                <P>
                    A Project surrounding analysing twitter posts from individuals using the tag #SarahEverard using TwitterAPI. Sarah was a british police officer
                    who were murdered in the UK. The murder sparked a conversation regarding women's safety. The goal of this project was to investigate 
                    whether these issues are only dicussed among women, and if in fact men participate in the conversation through network analysis. 
                    The project also investigates whether the language used about violenece against women differ between the genders using NLP.
                </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://website-katgussoe.netlify.app/">
                        Final Project Website <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <SimpleGrid columns={2} gap={2}>
            <WorkImage src="/images/network_sarah.png" alt="SarahEverard"/>
            <WorkImage src="/images/wordcloud.png" alt="SarahEverard"/>
            </SimpleGrid>
            <WorkImage src="/images/network_sarah_2.png" alt="SarahEverard"/>
            </Container>
        </Layout>
    )
}

export default Work