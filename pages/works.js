import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import SMKlogo from '../public/images/HaegueYang.jpeg'
import BSClogo from '../public/images/network.png'
import WClogo from '../public/images/wordcloud.png'
import KABSlogo from '../public/images/KABS.jpg'
import FastFoodlogo from '../public/images/fastfood.png'

const Works = () => {
 return (
     <Layout>
     <Container>
         <Heading as ='h3' fontSize={20} mb={4}>
             Works
         </Heading>
         <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="deepvoice" title="Deep Voice Conversion" thumbnail={SMKlogo}>
            Deep Voice conversion to convert the voice of Korean Artist Haegue Yang to Danish speech
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="KABS" title="Coordinator of the Bachelor Studystart" thumbnail={KABSlogo}>
            Coordinator of the Bachelor Studystart 2021 at DTU
          </WorkGridItem>
        </Section>
        </SimpleGrid>
        <Heading as ='h3' fontSize={20} mb={4}>
             Final Projects
         </Heading>
         <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        <WorkGridItem id="bachelor" title="Hierachies in a Student Social Network" thumbnail={BSClogo}>
            Bachelor Theis in Ranking popularity from student data at DTU
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="fastfood" title="Visualising Fastfood and health in the US" thumbnail={FastFoodlogo}>
            Data Visualisation of county health and fastfood locations across the United States
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="womensafety" title="Analysing online conversation regarding womens safety" thumbnail={WClogo}>
            Analysis of Twitter posts from men and women regarding womens safety following the death of Sarah Everard
          </WorkGridItem>
        </Section>
        </SimpleGrid>
     </Container>
     </Layout>
 )
}

export default Works