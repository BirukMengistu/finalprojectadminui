import { createStyles,Modal,Select,Paper, TextInput,Table,Button, Anchor, Text, Group, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import useUser from '../../hooks/useUser'
import PageTitle from '../PageTitle';
import {Notifications} from '@mantine/notifications'
const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));



const UserInfo = ( data )=> {
  const { classes, theme } = useStyles();
  const { updateUser } = useUser()
  const [opened, { close, open }] = useDisclosure(false);
  const [newReview , SetReview] = useState(false)
 
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  
  const [activeData, setActive] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState()


  const handleApproved = async ()=> {
    const roles = role.split(" ");
    const newData ={
        ...activeData ,  roles
    }
    const updateResposne = await updateUser(newData,activeData._id)
    //console.log(updateResposne)
    if(updateResposne?.status === 200)
    {
      Notifications.show({
       title:'Succesfull',
       message:'Role Succesfull updated',
       autoClose: true
      })

      setTimeout(()=>{
        return window.location.replace('/userAccount')
      },1500)
    }
    if(updateResposne.status!==200){
      Notifications.show({
        title:'Unsuccesfull',
        message:'Profile failed to added',
        autoClose: true,
        color: 'red',
       })
      
    }
  }
  const activeUser =data?.user?.filter((val) => val.roles[0] !== 'admin')
  const handleModal =(data)=>{
    console.log('data', data)
    setSlowTransitionOpened(true)
    setActive(data)   
    console.log('active data', activeData) 
  }
  const rows = activeUser?.map((row) => {
   

    return (
      <>
      
       <tr key={row._id}>
        <td>
          <Anchor component="button" fz="sm">
            {row.firstName}
          </Anchor>
        </td>
        <td>{row.lastName}</td>
        <td>
          <Anchor component="button" fz="sm">
            {row.roles}
          </Anchor>
        </td>
       
       
        
        <td>
          <Group position="apart">
          <Button fz="xs"  weight={700} onClick={()=> handleModal(row)}>
              Edit
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
        <Paper radius="md" p="xl" withBorder >
        <PageTitle heading='User Role Management'/>  
        <form >
             <TextInput label="First Name"  value={activeData?.firstName} onChange={setFirstName}  classNames={classes} />
             <TextInput label="Last Name"  value={activeData?.lastName} onChange={setLastName}  classNames={classes} />
              <Select
                mt="md"
                withinPortal
                value={role}
                onChange={(e)=>setRole(e)}
                data={['student', 'admin', 'user', 'hr','mentor']}
                label="User Role"
                classNames={classes}
              />
        <Group position="right" spacing="sm" mt='md'>
          <Button fz="xs" variant ='outline' weight={700} onClick={ handleApproved}>
              Confirm
          </Button>
          <Button fz="xs"  variant ='outline' weight={700} onClick={()=> handleModal(row)}>
              Cancel
          </Button>
          </Group>
      </form>  
      </Paper>
    </Modal>
      
      </>  
  
    );
  });

  return (
    <ScrollArea>
       <PageTitle heading='User Role Management'/> 
      <Table sx={{ minWidth: 300 }} horizontalSpacing="md" verticalSpacing="xs" striped='true'>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Roles</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default UserInfo