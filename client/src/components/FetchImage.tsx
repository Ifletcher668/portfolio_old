import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import axios from 'axios';

interface Props {
    id: string;
    altText: string;
    width: number;
    height: number;
}

export const FetchImage: React.FC<Props> = (props: Props) => {
    const { id, altText, width, height } = props;
    const wordpressUrl = 'http://localhost/wordpress/wp-json/wp/v2/media/';
    const [imgSrcUrl, setImgSrcUrl] = useState<string>('');

    useEffect(() => {
        axios
            .get(`${wordpressUrl}${id}`)
            .then((res) => {
                setImgSrcUrl(res.data.guid.rendered);
            })
            .catch((err) => console.log(err));
    }, []);

    return imgSrcUrl.length ? (
        <img src={imgSrcUrl} alt={altText} width={width} height={height} />
    ) : (
        <h3>loading...</h3>
    );
};
