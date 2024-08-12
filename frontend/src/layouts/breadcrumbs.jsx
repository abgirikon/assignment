import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link component={RouterLink} to="/">
          Home
        </Link>
      ) : (
        <Typography>Home</Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} component={RouterLink} to={routeTo}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
