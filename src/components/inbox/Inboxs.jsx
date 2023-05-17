import { createStyles,Modal,TextInput, Table,Button, Anchor, Text, Group, ScrollArea, rem } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));



const Inboxs = (data )=> {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery("(max-width: 50em)");
  const [opened, setOpen] = useState(false);
  const [newReview , SetReview] = useState(false)
  const [id , setId]= useState('')
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  console.log(data)
  const [activeData, setActive] = useState(null)
 


  const rows = data?.SupportMessage?.map((row) => {
   


  const handleModal =(data)=>{
    console.log(data)
    console.log(slowTransitionOpened)
    setSlowTransitionOpened(true)
    setActive(data)    
  }
  
    return (
      <>
       
       <tr key={row._id}>
        <td>
          <Anchor component="button" fz="sm">
            {row.name}
          </Anchor>
        </td>
        <td>{(row.createdAt)}</td>
      
       
        <td>
          <Group position="apart">
          
            <Text fz="xs" c="orange" weight={700}>
            {row.subject}
            </Text>
            
          </Group>
         
        
        </td>
        
        <td>
        
        <Group position="apart">
          <Button fz="xs" c="orange" 
          variant ="outline" 
             onClick={()=> handleModal(row)}>
             Preview
          </Button>
          
        </Group>
        </td>
       </tr>
       <Modal
      opened={slowTransitionOpened}
      onClose={() => setSlowTransitionOpened(false)}
      title={activeData!==undefined && activeData?.subject} 
      transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
       >
          <Text fz="xs" c="gray" weight={200} mb='md'>
             Email - {activeData!==undefined && activeData?.email}
          </Text>
          <Text fz="s" c="black" weight={400}>
              {activeData!==undefined && activeData?.message}
          </Text>
          <Text fz="xs" c="black"  weight={200}>
               {activeData!==null && (activeData?.createdAt).substr(0, 10)}
          </Text>
    </Modal>
      
      </>  
  
    );
  });

  return (
    <ScrollArea >
      <Table  sx={{ minWidth: 300 }} horizontalSpacing="md" verticalSpacing="xs" striped='true'>
        <thead>
          <tr>
            <th>Name of User</th>
            <th>Created At</th>
            <th>Subject</th>
            <th>Body Preview</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default Inboxs
