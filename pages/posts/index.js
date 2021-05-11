import Meta from '../../components/Meta';
import postStyles from '../../styles/Post.module.css';
import Link from 'next/link';

const Posts = ({ posts }) => {

    return (
        <>
            <Meta
                title="Posts Pages"
                description="Next js crash course"
                keywords="nextjs, react"
            />

            <div className={postStyles.grid}>
                {
                    posts.map(item => (
                        <Link href = {`posts/${item.id}`}>
                            <div key={item.id} className={postStyles.card}>
                                <h2>{item.name}</h2>
                                <p>
                                    {item.email}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}

export default Posts;