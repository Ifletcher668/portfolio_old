import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';

interface Props {
    id?: string;
    className?: string;
    to: string;
    title: string;
}
const NavbarItem: React.FC<Props> = (props: Props) => {
    const { id, className, to, title } = props;

    if (id && className)
        return (
            <Link id={id} className={className} to={to}>
                {title}
            </Link>
        );
    else if (id && !className)
        return (
            <Link id={id} to={to}>
                {title}
            </Link>
        );
    else if (className && !id)
        return (
            <Link className={className} to={to}>
                {title}
            </Link>
        );
    else return <Link to={to}>{title}</Link>;
};

export default NavbarItem;
