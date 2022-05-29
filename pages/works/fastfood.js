import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="fastfood">
            <Container>
                <Title>
                Visualising Health and Fastfood in the US <Badge>2022</Badge>
                </Title>
                <P>
                    A Project showcasing various data visualisation methods by looking into the health of US counties together with locations
                    of Fastfood resturants. The project used alot of data cleaning and extracting aswell as many different tools for visualisation
                    including Matplotlib, Plotly, folium and Seaborn. A prediction model was also implemented to predict obese counties based on health features.
                </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://peetzie.github.io/socialdata/">
                        Final Project Website <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <WorkImage src="/images/fastfood.png" alt="fastfood"/>
            </Container>
        </Layout>
    )
}

export default Work
