import { memo, FC, ReactNode } from 'react';
import Button from '@mui/material/Button';

type Props = {
  children: ReactNode;
};

const SubmitButton: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <div>
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        {children}
      </Button>
    </div>
  );
});

export default SubmitButton;
