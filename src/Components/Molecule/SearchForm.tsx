import { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import AutoSuggest from 'react-autosuggest';

import '../Molecule/SerachForm.css';

const words: string[] = ['Oshi', 'Otakatsu', 'Supacha', 'Nagesenn'];
const lowerCasedWords = words.map((word) => word.toLowerCase());

const SearchForm = () => {
  const [searchWord, setSearchWord] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  function getSuggestions(value: string): string[] {
    // remove whitespace from both ends and change a striing to lowercase
    return lowerCasedWords.filter((word) =>
      word.startsWith(value.trim().toLowerCase())
    );
  }

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AutoSuggest
          suggestions={suggestions}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionsFetchRequested={({ value }) => {
            setSearchWord(value);
            setSuggestions(getSuggestions(value));
          }}
          onSuggestionSelected={(_, { suggestionValue }) =>
            console.log('Selected: ' + suggestionValue)
          }
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={(suggestion) => <span>{suggestion}</span>}
          inputProps={{
            placeholder: 'Search Word..',
            value: searchWord,
            onChange: (_, { newValue, method }) => {
              setSearchWord(newValue);
            },
            onKeyPress: (e) => {
              if (e.key === 'Enter') {
                return;
              }
            },
          }}
          highlightFirstSuggestion={true}
        />
        <Button variant='contained' sx={{ ml: 1 }}>
          <IconButton
            // // size='large'
            // color='white'
            component='label'
          >
            <input hidden accept='image/*' type='file' />
            <SearchOutlined />
          </IconButton>
        </Button>
      </Box>
    </div>
  );
};

export default SearchForm;
