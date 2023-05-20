import { createStyles,Modal,Select, Table,Button, Anchor, Text, Group, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import useBlog from '../../hooks/useBlog'
import{Notifications} from '@mantine/notifications'
const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));



const BlogReview = (data )=> {
  const { classes, theme } = useStyles();
  const { updateBlog } = useBlog()
  const [opened, { close, open }] = useDisclosure(false);
  const [newReview , SetReview] = useState(false)
  const [id , setId]= useState('')

  console.log(data)
  
  const handleApproved = async (tempData, boolData)=> {
    
    const newData ={
        ...tempData,review:boolData
    }
    const updateResposne = await updateBlog(newData,tempData._id)
    console.log(updateResposne)
    if(updateResposne?.status === 200 && boolData)
    {
      Notifications.show({
       title:'Succesfull',
       message:'blog Succesfull Published',
       autoClose: true
      })

      setTimeout(()=>{
        return window.location.replace('/blog')
      },1500)
    }

    if(updateResposne?.status === 200 && boolData === true)
    {
      Notifications.show({
       title:'Succesfull',
       message:'blog Succesfull Published',
       autoClose: true
      })

      setTimeout(()=>{
        return window.location.replace('/blogs')
      },1500)
    }
    if(updateResposne?.status === 200 && boolData===false)
    {
      Notifications.show({
       title:'Succesfull',
       message:'blog Succesfull UnPublished',
       autoClose: true
      })

      setTimeout(()=>{
        return window.location.replace('/blogs')
      },1500)
    }
    if(updateResposne.status!==200){
      Notifications.show({
        title:'Unsuccesfull',
        message:'Blog failed to Published',
        autoClose: true,
        color: 'red',
       })
      
    }
   
  }


  const rows = data?.blog?.map((row ,index) => {
   
  const BlogReviews = (row.review)? 'Published':'UnPublished';


    return (
      <>
       
       <tr key={index}>
        <td key={row.title}>
          <Anchor component="button" fz="sm">
            {row.tittle}
          </Anchor>
        </td >
        <td key={row.createStyles}>{(row.createdAt).substring(0, 10)}</td>
        <td key={row.authour}>
          <Anchor component="button" fz="sm">
            {row.authour}
          </Anchor>
        </td>
       
        <td>
          <Group position="apart">
          {row.review?<Text fz="xs" c="teal" weight={700}>
              {BlogReviews}
            </Text> :
            <Text fz="xs" c="orange" weight={700}>
            {BlogReviews}
          </Text>}
            
          </Group>
         
        
        </td>
        
        <td>
          <Group position="apart">
            {
              row.review=== true?
              <Button fz="xs" variant="outline" weight={700} onClick={()=> handleApproved(row , false) }>
                Unpublished
             </Button> :
            <Button fz="xs"  weight={700} onClick={()=> handleApproved(row , true) }>
              Published
             </Button>
            
            }
            
          </Group>
          
        </td>
       </tr>

      
      </>  
  
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 300 }} horizontalSpacing="md" verticalSpacing="xs" striped='true'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created At</th>
            <th>Author</th>
            <th>Review</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default BlogReview