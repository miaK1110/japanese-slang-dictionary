import { ButtonGroup } from '@mui/material';
import Tag from '../Atoms/Tag';

// Temporary categoryList
const CategoryList = ['Anime', 'Idle', 'Vtuber', 'Game', 'General Slang'];

const Category = () => {
  return (
    <div>
      <ButtonGroup
        size='large'
        aria-label='large button group'
        sx={{ flexWrap: 'wrap' }}
      >
        {CategoryList.map((item, index) => (
          <div key={index}>
            <Tag>{item}</Tag>
          </div>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Category;
