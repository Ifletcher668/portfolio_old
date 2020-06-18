import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link, Router } from '@reach/router';
import axios from 'axios';
import Post from './Poem';
import Poem from './Poem';

interface Props extends RouteComponentProps {}
const WritingPage: React.FC<Props> = (props: Props) => {
    const wordpressRestUrl = `http://localhost/wordpress/wp-json/wp/v2/`;
    const [loading, setLoading] = useState<boolean>(true);
    const [allPosts, setAllPosts] = useState<any[]>([]);

    useEffect(() => {
        axios
            .get(`${wordpressRestUrl}poetry`)
            .then((res) => {
                setAllPosts(res.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <React.Fragment>
            <section id='writing-page'>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    allPosts.map((post: any, idx: number) => {
                        console.log(post);
                        return (
                            <div key={idx}>
                                <Link to={`blogs/${post.id}`} state={allPosts}>
                                    {' '}
                                    {post.title.rendered}
                                </Link>
                                {/* <h6>{post.excerpt.rendered}</h6> */}
                            </div>
                        );
                    })
                )}
            </section>
            <Router>
                <Poem path='blogs/:id' />
            </Router>
        </React.Fragment>
    );
};

export default WritingPage;
