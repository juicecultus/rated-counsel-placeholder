import Head from 'next/head';
import Timer from '../components/Timer';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Rated Counsel App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div className='logo'>
          <svg width='128' height='128' viewBox='0 0 83.5 84'>
            <path
              className='st0'
              d='M4.1,41.8C4,21.8,19.5,5.2,39.5,4.1v-4C16.5,1.4-1.1,20.9,0.1,43.9c1.1,21.3,18.1,38.3,39.4,39.4v-4.1
		C19.6,78.2,4,61.7,4.1,41.8z'
            />
            <path
              className='st0'
              d='M35.6,44.4c5.7,0.8,11.2,3.1,15.6,6.8l1-2.2c-4.5-3.6-9.8-6.1-15.4-7.1L35.6,44.4z'
            />
            <path
              className='st0'
              d='M23.5,71.7c4.6,3.5,10.2,5.6,16,6l1-2.2c-5.8-0.4-11.3-2.5-16-6L23.5,71.7z'
            />
            <path
              className='st0'
              d='M75.1,66.7c5.4-7.2,8.3-16,8.3-25c0-22.1-17.2-40.3-39.3-41.6V4c20.8,1.4,36.6,19.3,35.2,40.1
		c-0.5,7.7-3.4,15-8.2,21.1l-0.8,1l4.5,9.1L46.4,62l3.6-8.1c-2.3-3.4-13.3-8.9-14.5-9.5l-9.9,22.4c2.5,3.5,14.9,8.6,14.9,8.6
		l4.3-9.8l38.7,18.1L75.1,66.7z'
            />
          </svg>
        </div>
      </header>

      <main>
        <h1 className='title'>Rated Counsel</h1>
        <p className='subtitle'>The future of legal services begins in...</p>
        <Timer />

        <h2>Follow us on social</h2>
        <div className='wrapper'>
          <a href='https://www.facebook.com/RatedCounsel' target='_blank'>
            <i className='fa fa-3x fa-facebook-square'></i>
          </a>
          <a href='https://twitter.com/ratedcounsel' target='_blank'>
            <i className='fa fa-3x fa-twitter-square'></i>
          </a>
          <a href='https://www.instagram.com/ratedcounsel/' target='_blank'>
            <i className='fa fa-3x fa-instagram'></i>
          </a>
        </div>
      </main>

      <footer>
        <p>
          Copyright {new Date().getFullYear()} - Rated Counsel Limited - all
          rights reserved
        </p>
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

        header {
          margin-top: 2rem;
        }

        main {
          padding: 0.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .logo {
        }

        svg {
          fill: #4867aa;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #4867aa;
          font-size: 0.7rem;
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
          margin-top: 0;
          margin-bottom: 2rem;
          line-height: 1.15;
          font-size: 6vmax;
          color: #0070f3;
        }

        .title,
        .description {
          text-align: center;
        }

        h2 {
          color: green;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 900px;
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
        .timer {
          margin: 0 0 0.5rem 0;
          line-height: 1.75;
          font-size: 3vmax;
          color: #0070f3;
        }
        .subtitle {
          line-height: 1.5;
          font-size: 2vmax;
          color: #4867aa;
        }
      `}</style>
    </div>
  );
}
