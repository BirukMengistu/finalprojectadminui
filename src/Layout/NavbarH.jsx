import { useNavigate } from 'react-router-dom';
import styles from '../Asset/styles/layout/navbar.module.css';
import  HamburgerMenu  from './HamburgerMenu';
import  Logo  from '../Asset/images/hubLogo.svg';

import { Auth } from '../hooks/utils'
import { useState } from 'react';
import { createStyles , rem } from '@mantine/core';



const useStyles = createStyles((theme, { opened }) => ({
	control: {
	  
	  display: 'flex',
	  justifyContent: 'space-between',
	  alignItems: 'center',
	  padding: `${theme.spacing.xs} ${theme.spacing.md}`,
	  borderRadius: theme.radius.md,
	  radius:'md',
	  border: `${rem(1)} solid ${
		theme.colorScheme === 'dark' ? theme.colors.brand[6] : theme.colors.brand[2]
	  }`,
	  transition: 'background-color 150ms ease',
	  
  
	  '&:hover': {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.brand[opened ? 3 : 7],
	  },
	},
  
	label: {
	  fontWeight: 500,
	  fontSize: theme.fontSizes.sm,
	},
  
	icon: {
	  transition: 'transform 150ms ease',
	  transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
	},
  }));

const NavbarH = () => {
	const  isAuth  = Auth.isAuth()
	const navigate = useNavigate();
	const [opened, setOpened] = useState(false);
    const { classes } = useStyles({ opened });
   
	return (
		<div id='menuID' className={styles['l-navbar']}>
			<div className={styles.navbar}>
			
				<img className={styles['l-navbar-logo']}
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
				
               
			     <HamburgerMenu />
				
				
			</div>
		</div>
	);
};

export default NavbarH;