/* eslint-disable no-console */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import sortArray from 'sort-array';

// CUSTOM IMPORTS
import {
  Container,
  Form,
  SubmitButton,
  UserInfo,
  Group,
  GroupPod,
  PodiumGames,
  PodiumGame,
  Body,
  NoPlayer,
} from './styles';
import podium from '~/assets/podium.png';
import gaben from '~/assets/lord-gaben.png';
import background from '~/assets/steambg10.png';

// APIS
import { getUser } from '~/apis/userApi';
import { getOwnedGames } from '~/apis/gamesApi';

// import SimpleDateTime from 'react-simple-timestamp-to-date';

const fromUnixTime = require('date-fns/fromUnixTime');
const formatISO = require('date-fns/formatISO');

export default function Main() {
  // STATES
  const [user, setUser] = React.useState([]);
  const [games, setGames] = React.useState({});
  const [found, setFound] = React.useState(false);
  const [input, setInput] = React.useState('76561198300021798');

  const auxArray = games.games;

  // const notifyNotFound = () =>
  //   toast.error(
  //     'Steam user not found, double check if the USER ID is correct 😥'
  //   );

  // FUNCTIONS
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    await getUser(input).then(response => {
      setUser(response.data.response.players[0]);
    });
    await getOwnedGames(input).then(response => {
      setGames(response.data.response);
    });
    setFound(true);
  }

  function totalHours() {
    let playtime = 0;
    for (let i = 0; i < games.game_count; i += 1) {
      playtime += games.games[i].playtime_forever;
    }

    return (playtime / 60).toFixed(2);
  }

  function dateCreated() {
    // WeekDay Mounth day year 00:00:00 GMT-0300 (Brasilia Standard Time))
    const createdAt = fromUnixTime(user.timecreated);
    const result = formatISO(createdAt);
    return result.split('T')[0];
  }

  function getPodium() {
    sortArray(auxArray, {
      order: 'desc',
      by: 'playtime_forever',
      computed: {
        number: row => row.inner.number,
      },
    });
  }

  function renderBody() {
    if (found) {
      return (
        <Body
          style={{
            backgroundImage: `url(${background})`,
            height: '100%',
            width: '100%',
          }}
        >
          <UserInfo>
            <img src={user.avatarfull} alt="profile-pic" />
            <h1>{user.personaname}</h1>
            <Group>
              <h3>Member Since. </h3>
              <h2>{dateCreated()}</h2>
            </Group>
            <Group>
              <h3>Playtime Forever.</h3>
              <h2> {totalHours()} hours</h2>
            </Group>
            <Group>
              <h3>Paid Games.</h3>
              <h2>{games.game_count}</h2>
            </Group>
          </UserInfo>

          <PodiumGames>
            <GroupPod>
              <h4>Most Played</h4>
              <img src={podium} className="podIcon" alt="podium-pic" />
            </GroupPod>
            <PodiumGame>
              {getPodium()}
              <img
                src={`http://media.steampowered.com/steamcommunity/public/images/apps/${auxArray[0].appid}/${auxArray[0].img_logo_url}.jpg`}
                alt="profile-pic"
              />
              <Group>
                <h4>Playtime.</h4>
                <h2>{(auxArray[0].playtime_forever / 60).toFixed(2)} hours</h2>
              </Group>
            </PodiumGame>

            <PodiumGame>
              {getPodium()}
              <img
                src={`http://media.steampowered.com/steamcommunity/public/images/apps/${auxArray[1].appid}/${auxArray[1].img_logo_url}.jpg`}
                alt="profile-pic"
              />
              <Group>
                <h4>Playtime.</h4>
                <h2>{(auxArray[1].playtime_forever / 60).toFixed(2)} hours</h2>
              </Group>
            </PodiumGame>

            <PodiumGame>
              {getPodium()}
              <img
                src={`http://media.steampowered.com/steamcommunity/public/images/apps/${auxArray[2].appid}/${auxArray[2].img_logo_url}.jpg`}
                alt="profile-pic"
              />
              <Group>
                <h4>Playtime.</h4>
                <h2>{(auxArray[2].playtime_forever / 60).toFixed(2)} hours</h2>
              </Group>
            </PodiumGame>

            <PodiumGame>
              {getPodium()}
              <img
                src={`http://media.steampowered.com/steamcommunity/public/images/apps/${auxArray[3].appid}/${auxArray[3].img_logo_url}.jpg`}
                alt="profile-pic"
              />
              <Group>
                <h4>Playtime.</h4>
                <h2>{(auxArray[3].playtime_forever / 60).toFixed(2)} hours</h2>
              </Group>
            </PodiumGame>

            <PodiumGame>
              {getPodium()}
              <img
                src={`http://media.steampowered.com/steamcommunity/public/images/apps/${auxArray[4].appid}/${auxArray[4].img_logo_url}.jpg`}
                alt="profile-pic"
              />
              <Group>
                <h4>Playtime.</h4>
                <h2>{(auxArray[4].playtime_forever / 60).toFixed(2)} hours</h2>
              </Group>
            </PodiumGame>
          </PodiumGames>
        </Body>
      );
    }

    return (
      <NoPlayer>
        <img src={gaben} className="gabenHome" alt="What the hell?" />
      </NoPlayer>
    );
  }

  return (
    <>
      <header id="header">
        <Container>
          <ToastContainer />
          <svg fill="#ffffff" strokeWidth="0" viewBox="0" className="logo">
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="Logo"
              d="M204.218,21.882h-.924V19.573l-.924,1.524h-.462l-.462-1.524v2.309h-.924V17.957h.924l.924,2.124.924-2.124h.924Zm-4.156-3.233h-.924v3.233h-.924V18.65h-.924v-.693h2.771ZM194.983,33.2h-2.771V24.33L188.979,30.1h-1.847l-2.771-5.772V33.2h-3.233V17.957h3.233l3.694,8.22,4.156-8.22h2.771Zm-18.01,0H173.74l-.924-2.678h-5.08l-.924,2.678h-3.233l5.541-15.239h2.309Zm-4.618-5.218-1.847-5.541-1.847,5.541ZM158.963,33.2H148.8V17.957h10.159v2.632h-6.927v3.6h6v2.632h-6v3.74h6.927ZM144.186,20.589h-3.694V33.2h-3.233V20.589H133.1V17.957h11.083Zm-14.777,8.127c0,3.14-2.771,4.572-5.541,4.618-2.771,0-4.618-.647-5.541-2.032l1.847-1.893a4.835,4.835,0,0,0,3.694,1.293c1.847,0,2.771-.647,2.771-1.893,0-1.154-.924-1.662-1.847-1.847l-1.847-.231q-4.156-.554-4.156-4.295a4.422,4.422,0,0,1,1.385-3.371,5.588,5.588,0,0,1,3.694-1.247,7.143,7.143,0,0,1,5.08,1.755L127.1,21.467a4.95,4.95,0,0,0-3.233-1.062c-1.385.092-2.309.6-2.309,1.94,0,1.062.924,1.57,1.847,1.662l1.847.277A4.383,4.383,0,0,1,129.408,28.717Zm-23.551-2.771a7.811,7.811,0,0,1-7.85,7.527,7.5,7.5,0,0,1,0-15.008A7.8,7.8,0,0,1,105.857,25.946ZM98.007,12A14.025,14.025,0,0,0,84.153,25.9L75.379,38.414a6.2,6.2,0,0,0-.924-.092A12.442,12.442,0,0,0,68.914,39.8L29.477,23.914a10.469,10.469,0,1,0-10.252,12.7,10.04,10.04,0,0,0,5.357-1.478L64.3,51.021A10,10,0,0,0,74.456,59.1a10.443,10.443,0,0,0,10.159-9.282l13.392-9.79a14.212,14.212,0,0,0,14.315-14.038A14.2,14.2,0,0,0,98.007,12Zm0,4.618a9.4,9.4,0,1,1,0,18.795,9.4,9.4,0,0,1,0-18.795ZM19.226,18.465a7.689,7.689,0,0,1,6.835,4.064L22.227,21a6.127,6.127,0,0,0-4.572,11.36l3.233,1.293a6.33,6.33,0,0,1-1.663.185,7.689,7.689,0,0,1,0-15.378Zm55.23,22.628A7.514,7.514,0,0,1,81.844,48.8a7.639,7.639,0,0,1-14.315,3.6,25.655,25.655,0,0,0,3.694,1.616c3.233,1.385,6.465-.462,7.85-3.417.924-2.863,0-6.788-3.233-8.035l-3.233-1.293A12.455,12.455,0,0,1,74.456,41.093Z"
              transform="translate(-8.78 -12)"
            />
          </svg>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              id="steamId"
              placeholder="Insira o ID do usuário"
              onChange={e => {
                setInput(e.target.value);
              }}
            />
            <SubmitButton>
              <FaSearch color="#FFF" />
            </SubmitButton>
          </Form>
        </Container>
      </header>
      {renderBody()}
    </>
  );
}
