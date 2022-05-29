import { Container, Badge } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="bachelor">
            <Container>
                <Title>
                    Hierachies in a student social network <Badge>2021-2022</Badge>
                </Title>
                <P>
                My Bachelor thesis about how Online Social relations between people in a network shapes a social hierarchy. 
                By using two rank infering methods, a social hierarchy can be analysed in the SensibleDTU dataset, using an Expectation Maximization method and Pagerank. 
                The student&apos;s rank sees a small change in time depending on what semester they are attending and students generally connect with people of close to similar grade. 
                A RMSE of 66.32 was achieved in the prediction model meaning a suitable model was not achieved for prediction. 
                In conclusion, a ranking method was inferred on the students, but due to not enough features a successful prediction model could not be obtained. 
                </P>
            <WorkImage src="/images/network.png" alt="Network"/>
            </Container>
        </Layout>
    )
}

export default Work