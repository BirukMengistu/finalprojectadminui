import { createStyles, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconInbox , IconUser ,IconArticle } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    '&:hover': {
      boxShadow: theme.shadows.md, 
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.brand[1], theme.colors.brand[7]),
    },
  },
}));



const PageCard =({ title, description ,icon })=> {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" mt="md" className={classes.card}>
      
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'pink', to: 'orange' }}
      >
        {icon ==='blog' && <IconArticle  size={rem(28)} stroke={1.5} />}
        {icon ==='inbox' && <IconInbox size={rem(28)} stroke={1.5} />}
        {icon ==='user' && <IconUser size={rem(28)} stroke={1.5} />}
      </ThemeIcon>
       <Text size="sm" weight={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {description}
      </Text>
    </Paper>
  );
}

export default PageCard