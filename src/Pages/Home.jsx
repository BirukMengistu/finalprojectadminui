import React from 'react'
import PageCard from '../components/PageCard'
import { Grid } from '@mantine/core';
import Container from '../Layout/Container';
import PageTitle from '../components/PageTitle';
const BlogData = {
  "title": "Admin task for Blog",
  "description": "Admins can review and publish content on all pages and access all items in the Admin Toolbar."
}
const InboxData = {
  "title": "Monitor Message from user",
  "description": "Follow up incoming fedback and support email."
}
const UserData = {
  "title": "Control User informatio",
  "description": "Admins can control user data on all pages and access all items in the Admin Toolbar."
}

const Home = () => {
  return (
    <Container>
       <PageTitle heading='Admin Panel'/>
       <Grid justify="center" align="center">
       <Grid.Col xs={6}  md={3} lg={3}><PageCard title={BlogData.title} description={BlogData.description} icon={'blog'}/></Grid.Col>
       <Grid.Col xs={6} md={3} lg={3}><PageCard title={InboxData.title} description={InboxData.description} icon={'inbox'}/></Grid.Col>
       <Grid.Col xm={6} md={3}lg={3}><PageCard title={UserData.title} description={UserData.description} icon={'user'}/></Grid.Col> 
      </Grid>
    </Container>
   
  )
}

export default Home
