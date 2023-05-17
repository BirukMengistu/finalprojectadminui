import React from 'react'
import PageCard from '../components/PageCard'
import Container from '../Layout/Container'

const mockdata = {
  "title": "Theming documentation",
  "description": "Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components."
}

const Home = () => {
  return (
    <Container>
       <PageCard title={mockdata.title} description={mockdata.description}/>
       <PageCard title={mockdata.title} description={mockdata.description}/>
       <PageCard title={mockdata.title} description={mockdata.description}/>
    </Container>
  )
}

export default Home
