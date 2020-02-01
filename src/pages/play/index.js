import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { initYourPlayer } from '~/features/players/you.slice';
import css from '~/styles/site/site.scss';

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const inputRef = React.useRef();
  const [{ error }, setError] = React.useState({ error: false });
  const [{ hero }, selectHero] = React.useState({ hero: null });

  // React.useEffect(() => {
  //   router.prefetch('/game');
  // }, []);

  function handleDispatch(username, heroname) {
    // dispatch(setYourHero(heroname));
    // dispatch(setYourUsername(username));
  }

  function handleForm(event) {
    event.preventDefault();

    const ref = inputRef && inputRef.current;
    const val = ref.value;

    if (val && hero) {
      setError({ error: false });
      dispatch(initYourPlayer(val, hero));
      router.push('/game');
    } else {
      setError({ error: true });
    }
  }

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
          <button type="submit">Submit</button>
        </p>
      </form>

      <style jsx>{`
        .form {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 75vh;
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
