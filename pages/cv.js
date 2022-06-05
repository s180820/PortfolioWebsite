import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Cv = () => {
 return (
     <Layout title="CV">
     <Container>
         <Heading as ='h3' fontSize={20} mb={4}>
             CV
         </Heading>
         <embed src="CV.pdf#toolbar=0&navpanes=0&scrollbar=0" width="800px" height="1130px" />
     </Container>
     </Layout>
 )
}

export default Cv