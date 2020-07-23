import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Rated Counsel App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>
          <a>Welcome to Rated Counsel!</a>
        </h1>

        <p className='description'>
          The future of legal services is about to begin...
        </p>

        <h2 className='subtitle'>
          <a>Watch this space</a>
        </h2>

        <h2>Follow us on social</h2>
        <div className='wrapper'>
          <a href='https://www.facebook.com/RatedCounsel' target='_blank'>
            <i className='fa fa-5x fa-facebook-square'></i>
          </a>
          <a href='https://twitter.com/ratedcounsel' target='_blank'>
            <i className='fa fa-5x fa-twitter-square'></i>
          </a>
          <a href='https://www.instagram.com/ratedcounsel/' target='_blank'>
            <i className='fa fa-5x fa-instagram'></i>
          </a>
        </div>
      </main>

      <footer>
        <p>Copyright Rated Counsel Limited - all rights reserved</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .subtitle {
          margin: 0 0 2rem 0;
          line-height: 1.15;
          font-size: 2rem;
        }

        .subtitle a {
          color: #0070f3;
          text-decoration: none;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        h2 {
          color: green;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1rem;
          flex-direction: row;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          text-align: center;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .wrapper {
          display: inline-flex;
          margin: 0;
          padding: 0;
          align-items: center;
          justify-content: center;
        }

        i {
          padding: 0px 10px;
        }

        .wrapper i:nth-child(1) {
          color: #4867aa;
          cursor: pointer;
          text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
          transition: all ease-in-out 150ms;
        }

        .wrapper i:nth-child(1):hover {
          margin-top: -10px;
          text-shadow: 0px 16px 10px rgba(0, 0, 0, 0.3);
          transform: translate(0, -8);
        }

        .wrapper i:nth-child(2) {
          color: #1da1f2;
          cursor: pointer;
          text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
          transition: all ease-in-out 150ms;
        }

        .wrapper i:nth-child(2):hover {
          margin-top: -10px;
          text-shadow: 0px 16px 10px rgba(0, 0, 0, 0.3);
          transform: translate(0, -8);
        }

        .wrapper i:nth-child(3) {
          color: #444;
          cursor: pointer;
          text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
          transition: all ease-in-out 150ms;
        }

        .wrapper i:nth-child(3):hover {
          margin-top: -10px;
          text-shadow: 0px 14px 10px rgba(0, 0, 0, 0.4);
          transform: translate(0, -5);
        }
        .wrapper i:nth-child(4) {
          color: #fffc00;
          cursor: pointer;
          text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
          transition: all ease-in-out 150ms;
        }
        .wrapper i:nth-child(4):hover {
          margin-top: -10px;
          text-shadow: 0px 16px 10px rgba(0, 0, 0, 0.3);
          transform: translate(0, -8);
        }
      `}</style>
    </div>
  );
}
