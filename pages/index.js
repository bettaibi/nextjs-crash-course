import Meta from '../components/Meta';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Home() {
  const router = useRouter();

  const getPosts = () =>{
    router.push('/posts')
  }

  return (
    <div>
      <Meta 
        title = "Home Pages"
        description = "Next js crash course"
        keywords = "nextjs, react"
      />
      {/* This div element uses an inline css style property */}
      <div style={{maxWidth: '500px', textAlign: 'center'}}>
        <h6 className="title">
          Next js is awesome
        </h6>
        <p>
          Click on the button below to navigate to posts page, which implement a static site redering to fetch posts from a certain url.
        </p>
        <Link href="/posts">
          <button className = "btn">
            Fetch Posts
          </button>
        </Link>
        {/* <button className = "btn" onClick = {getPosts}>
          Fetch Posts
        </button> */}
      </div>
      {/* This how to declare a css style tag */}
      <style jsx>
        {
          `
            .btn{
              background-color: #333;
              color: #fff;
              min-width: 64px;
              padding: 1rem;
              border: none;
              outline: none;
              cursor: pointer;
              transition: all 0.5s ease-out;
              border-radius: 5px;
            }
            .btn:hover{
              background-color: #111;
            }
            .btn:active{
              transform: scale(0.94);
            }
            .title {
              color: #0070f3;
              margin: 0.5rem 0;
              line-height: 1.15;
              font-weight:500;
              font-size: 3rem;
              text-align: center;
            }
          `
        }
      </style>
    </div>
  )
}
