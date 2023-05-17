import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem, Avatar } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconInbox,
  IconBrandBlogger,
} from '@tabler/icons-react';
import  Logo  from '../Asset/images/hubLogo.svg';

import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom/dist';
const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },
  image:{
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[5] : 'white',
    fill:theme.colors.brand[5] 
  },
  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));



function NavbarLink({ icon: Icon, label, active, onClick,to ,Image}) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Link className={cx(classes.link, { [classes.active]: active })} to={to}>
           <Icon size="2rem" stroke={1.5}  />
        </Link>
        
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', path:'/' },
  { icon: IconBrandBlogger, label: 'Blog'  ,path:'/blogs'},
  { icon: IconInbox, label: 'Message',path:'/message' },
  { icon: IconUser, label: 'Account'  , path:'/account'},
  { icon: IconSettings, label: 'Settings', path:'/setting' },
];

const NavbarMain = () =>{
  const navigate = useNavigate();
  const [active, setActive] = useState(2);
  const {classes ,cx} = useStyles()
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      to ={link.path}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar  width={{ base: 80 }} p="md">
      <Center>
   
				<Avatar
					
          color='#FFD54F'
					src={Logo}
					alt=''
					onClick={() => {
						navigate('/');
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							navigate('/');
						}
					}}
				/> 
     
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavbarMain