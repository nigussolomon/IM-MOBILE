import { useState } from 'react';
import { Code, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import classes from './NavbarSimple.module.css';
import { navigationData, footerNavigation } from '../../config/navigation';

type NavbarSimpleProps = {
    userRole: 'admin' | 'customer' | 'insurer';
};

export function NavbarSimple({ userRole }: NavbarSimpleProps) {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);



    const links = navigationData[userRole].map((item) => (
        <Link
            className={classes.link}
            data-active={item.link === active || undefined}
            to={item.link}
            key={item.label}
            onClick={() => setActive(item.link)}
        >
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));



    const footerLinks = footerNavigation.map((item) => (
        <Link
            className={classes.link}
            to={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();

            }}
        >
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <h1>IM</h1>

                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                {footerLinks}
            </div>
        </nav>
    );
}
