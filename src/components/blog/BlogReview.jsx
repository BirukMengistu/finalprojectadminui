import { createStyles,Modal,Select, Table,Button, Anchor, Text, Group, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import useBlog from '../../hooks/useBlog'
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
  
  const handleApproved =(tempData, boolData)=> {
    
    const newData ={
        ...tempData,review:boolData
    }
    const updateResposne = updateBlog(newData,tempData._id)
    
   
  }


  const rows = data?.blog?.map((row) => {
   
  const BlogReviews = (row.review)? 'Published':'UnPublished';


    return (
      <>
       
       <tr key={row.tittle}>
        <td>
          <Anchor component="button" fz="sm">
            {row.tittle}
          </Anchor>
        </td>
        <td>{(row.createdAt).substring(0, 10)}</td>
        <td>
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
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs" striped='true'>
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