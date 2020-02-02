import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import css from '~/styles/site/site.scss';
import server from '~/server';

import {
  setYourHero,
  setYourUsername,
  setYourId,
  setYourConnection
} from '~/features/players/you.slice';
import {
  setTheirHero,
  setTheirUsername,
  setTheirId,
  setTheirConnection
} from '~/features/players/them.slice';

export default function Page() {
  const socket = server();
  const dispatch = useDispatch();
  const router = useRouter();
  const inputRef = React.useRef();
  const [{ error }, setError] = React.useState({ error: false });
  const [{ hero }, selectHero] = React.useState({ hero: null });
  const [{ waiting }, setIsWaiting] = React.useState({ waiting: false });

  function emit(userName, selectedHero) {
    socket.emit('player waiting');
    socket.emit('add user', {
      username: userName,
      hero: selectedHero,
      id: socket.id
    });
  }

  function handleForm(event) {
    event.preventDefault();

    const ref = inputRef && inputRef.current;
    const val = ref.value;

    if (val && hero) {
      setError({ error: false });
      emit(val, hero);
      setIsWaiting({ waiting: true });

      dispatch(setYourHero(hero));
      dispatch(setYourUsername(val));
      dispatch(setYourId(socket.id));

      router.prefetch('/game');
    } else {
      setError({ error: true });
    }
  }

  socket.on('start game', () => {
    dispatch(setYourConnection(true));
    router.push('/game');
  });

  // React.useEffect(() => {
  //   router.prefetch('/game');
  // }, []);

  return (
    <main className={css.Site}>
      <form className="form" onSubmit={e => handleForm(e)}>
        <h3 className="title">What's your nickname?</h3>
        <input className="input" type="text" maxLength="14" ref={inputRef} />
        {error && <span className="error">Must input a username</span>}

        <fieldset className="hero-selection" name="HeroSelection">
          <legend>Select Hero</legend>
          <div className="hero-grid">
            <div>
              <label htmlFor="HeroSelection_Mage">
                <input
                  id="HeroSelection_Mage"
                  name="HeroSelection"
                  type="radio"
                  value="Mage"
                  onClick={() => selectHero({ hero: 'Mage' })}
                />
                Mage
              </label>
            </div>
            <div>
              <label htmlFor="HeroSelection_Warrior">
                <input
                  id="HeroSelection_Warrior"
                  name="HeroSelection"
                  type="radio"
                  value="Warrior"
                  onClick={() => selectHero({ hero: 'Warrior' })}
                />
                Warrior
              </label>
            </div>
          </div>
        </fieldset>
        {error && <span className="error">Must select a hero</span>}

        <p>
          {!waiting && <button type="submit">Submit</button>}
          {waiting && <span>Waiting for opponent...</span>}
        </p>
      </form>

      <style jsx>{`
        .form {
          color: white;
          background: black;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
        }

        .hero-selection {
          margin: 20px auto 0;
        }

        .hero-grid {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;

          & > div + div {
            margin-left: 20px;
          }
        }

        .error {
          color: red;
          font-family: 'Courier New', Courier, monospace;
          font-size: 75%;
        }
      `}</style>
    </main>
  );
}
