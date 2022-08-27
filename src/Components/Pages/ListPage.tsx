import { config } from '../config';

const fetchWordApi = async () => {
  await await fetch(
    'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
    config
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const ListPage = () => {
  fetchWordApi();
  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default ListPage;
