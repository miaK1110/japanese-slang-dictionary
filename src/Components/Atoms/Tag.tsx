import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

type Props = {
  children: ReactNode;
};

const Tag: FC<Props> = ({ children }) => {
  return (
    <div>
      <Button sx={{ mr: 1, mt: 1 }}>{children}</Button>
    </div>
  );
};

export default Tag;
