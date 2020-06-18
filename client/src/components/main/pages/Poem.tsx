import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import axios from 'axios';

interface Props extends RouteComponentProps {
    id?: string;
    allPoems?: any;
}

type Poem = { [key: string]: any };

const Poem: React.FC<Props> = (props: Props) => {
    const wordpressRestUrl = `http://localhost/wordpress/wp-json/wp/v2/`;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
    const [poem, setPoem] = useState<Poem>({});
    const [allPoems, setAllPoems] = useState<any[]>([]);
    useEffect(() => {
        axios.get(`http://localhost/wordpress/wp-json/wp/v2/poetry/${props.id}`).then((res) => {
            setPoem(res.data);
            setIsLoading(false);
            setIsRedirecting(false);
        });
    }, [isRedirecting]);

    // useEffect(() => {
    //     console.log(poem);
    // }, [isLoading]);

    useEffect(() => {
        axios
            .get(`${wordpressRestUrl}poetry`)
            .then((res: any) => {
                setAllPoems(res.data);
                setIsLoading(false);
            })
            .catch((err: any) => console.log(err));
    }, []);

    return isLoading ? (
        <h1></h1>
    ) : (
        <div className='container container-full'>
            <article id='poem' className='primary-content-left container horizontal center'>
                <h1
                    className='poem-title'
                    dangerouslySetInnerHTML={{ __html: poem.title.rendered }}
                    style={{ color: 'white' }}></h1>
                <p
                    className='poem-body'
                    dangerouslySetInnerHTML={{ __html: poem.content.rendered }}
                    style={{ color: 'white' }}></p>
            </article>
            {/* <aside
                id='navbar-poems'
                className='aside-content-right container horizontal container-full'>
                <h1>Other Works</h1>
                <ul>
                    {allPoems.map((poem: Poem, idx: number) => {
                        return (
                            <li key={idx} id={`link-to-poem-${poem.id}`} className={`link-to-poem`}>
                                {
                                    <Link
                                        to={`../${poem.id}`}
                                        onClick={(e: any) => setIsRedirecting(true)}>
                                        {poem.title.rendered}
                                    </Link>
                                }
                            </li>
                        );
                    })}
                </ul>
            </aside> */}
        </div>
    );
};

export default Poem;
