import { menuData } from "@/db/menuData";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const isExternalHref = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

function Navbar() {
    return (
        <ul>
            {menuData.map(({ link, title, megamenu, megaColumns, submenu }, index) => (
                <li
                    key={index}
                    className={`${megamenu ? 'menu-thumb' : ''} ${megaColumns ? 'has-mega-columns' : ''} ${megamenu || megaColumns || submenu ? 'has-dropdown' : ''} ${index === 0 ? 'active' : ''}`}
                >
                    <Link to={link}>
                        {title}{' '}
                        {
                            megamenu || megaColumns || submenu ? <i className="fas fa-angle-down" /> : ''
                        }
                    </Link>
                    {
                        megamenu?.length &&
                        <ul className="submenu has-homemenu">
                            <li className="homemenu-items">
                                {
                                    megamenu.map(({ image, links, title }, index) => (
                                        <div key={index} className="homemenu">
                                            <div className="homemenu-thumb">
                                                <img src={image} alt="img" />
                                                <div className="demo-button">
                                                    {
                                                        links.map(({ link, title }, ind) => (
                                                            <Link key={ind} to={link} className="theme-btn">
                                                                <span>{title}</span>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                                <h4 className="homemenu-title">
                                                    {title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))
                                }
                            </li>
                        </ul>
                    }
                    {
                        megaColumns?.length &&
                        <ul className="submenu mega-columns-menu">
                            <li className="mega-columns-grid">
                                {megaColumns.map((column, columnIndex) => (
                                    <div key={columnIndex} className="mega-column">
                                        <h4 className="mega-column-title">
                                            {column.link ? (
                                                isExternalHref(column.link) ? (
                                                    <a
                                                        href={column.link}
                                                        target={column.openInNewTab ? "_blank" : undefined}
                                                        rel={column.openInNewTab ? "noopener noreferrer" : undefined}
                                                    >
                                                        {column.title}
                                                    </a>
                                                ) : (
                                                    <Link to={column.link} target={column.openInNewTab ? "_blank" : undefined}>
                                                        {column.title}
                                                    </Link>
                                                )
                                            ) : (
                                                column.title
                                            )}
                                        </h4>
                                        {column.description ? <p className="mega-column-desc">{column.description}</p> : null}
                                        <ul className="mega-column-links">
                                            {column.links.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    {isExternalHref(item.link) ? (
                                                        <a
                                                            href={item.link}
                                                            target={item.openInNewTab ? "_blank" : undefined}
                                                            rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                                                        >
                                                            {item.title}
                                                        </a>
                                                    ) : (
                                                        <Link to={item.link} target={item.openInNewTab ? "_blank" : undefined}>
                                                            {item.title}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    }
                    {
                        submenu?.length &&
                        <ul className="submenu">
                            {
                                submenu.map((dropdown, ind) => {
                                    return (
                                        <Fragment key={ind}>
                                            {
                                                dropdown.submenu ?
                                                    <li className="has-dropdown">
                                                        <Link to="#">
                                                            {dropdown.title}
                                                            {' '}<i className="fas fa-angle-down" />
                                                        </Link>
                                                        <ul className="submenu">
                                                            {
                                                                dropdown.submenu.map((subDropdown, index) =>
                                                                    <li key={index}><Link to={subDropdown.link}>{subDropdown.title}</Link></li>
                                                                )
                                                            }
                                                        </ul>
                                                    </li>
                                                    :
                                                    <li>
                                                        {isExternalHref(dropdown.link) ? (
                                                            <a
                                                                href={dropdown.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {dropdown.title}
                                                            </a>
                                                        ) : (
                                                            <Link to={dropdown.link}>{dropdown.title}</Link>
                                                        )}
                                                    </li>
                                            }
                                        </Fragment>
                                    )
                                })
                            }
                        </ul>
                    }
                </li >
            ))
            }
        </ul >
    );
}

export default Navbar;
