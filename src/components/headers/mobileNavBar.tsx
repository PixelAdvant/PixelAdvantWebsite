import { MegaColumnDataType, MegaMenuDataType, menuData, MenuItemDataType, SubMenuDataType } from '@/db/menuData';
import { MouseEvent, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';

const isExternalHref = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

const MobileNavBar = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleSubmenu = (e: MouseEvent, index: number) => {
        e.preventDefault();
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className='mobile-menu d-lg-none'>
            {menuData.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return <MenuItem key={index} item={item} index={index} toggleSubmenu={toggleSubmenu} isOpen={isOpen} />;
            })}
        </div>
    );
};

const MenuItem = ({ item, index, toggleSubmenu, isOpen }: { item: MenuItemDataType; index: number; isOpen: boolean; toggleSubmenu: (e: MouseEvent, index: number) => void }) => {
    return (
        <div key={index} className='menu-item'>
            <Link to={item.link}>
                {item.title}
                {(item.megamenu?.length || item.megaColumns?.length || item.submenu?.length) && (
                    <i onClick={(e) => toggleSubmenu(e, index)}>+</i>
                )}
            </Link>
            {item.megamenu?.length && <MegaMenu megamenu={item.megamenu} isOpen={isOpen} index={index} />}
            {item.megaColumns?.length && <MegaColumns megaColumns={item.megaColumns} isOpen={isOpen} index={index} />}
            {item.submenu?.length && <Submenu submenu={item.submenu} isOpen={isOpen} index={index} />}
        </div>
    );
};

const MegaMenu = ({ megamenu, isOpen, index }: { megamenu: MegaMenuDataType[]; isOpen: boolean; index: number }) => (
    <AnimateHeight id={`submenu-${index}`} duration={300} height={isOpen ? 'auto' : 0}>
        <div className='mega-menu'>
            {megamenu.map(({ image, links, title }) => (
                <div className="homemenu" key={title}>
                    <div className="homemenu-thumb">
                        <img src={image} alt="img" />
                        <div className="demo-button">
                            {links.map(({ link, title }) => (
                                <Link key={link} to={link} className="theme-btn">
                                    <span>{title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">{title}</h4>
                    </div>
                </div>
            ))}
        </div>
    </AnimateHeight>
);

const MegaColumns = ({
    megaColumns,
    isOpen,
    index,
}: {
    megaColumns: MegaColumnDataType[];
    isOpen: boolean;
    index: number;
}) => (
    <AnimateHeight id={`submenu-${index}`} duration={300} height={isOpen ? 'auto' : 0}>
        <div className='mega-columns-mobile'>
            {megaColumns.map((column, colIndex) => (
                <div key={colIndex} className='mega-column-mobile-item'>
                    <h6>
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
                    </h6>
                    {column.description ? <p>{column.description}</p> : null}
                    <div className='mega-column-mobile-links'>
                        {column.links.map((linkItem, linkIndex) => (
                            isExternalHref(linkItem.link) ? (
                                <a
                                    key={linkIndex}
                                    href={linkItem.link}
                                    target={linkItem.openInNewTab ? "_blank" : undefined}
                                    rel={linkItem.openInNewTab ? "noopener noreferrer" : undefined}
                                >
                                    {linkItem.title}
                                </a>
                            ) : (
                                <Link key={linkIndex} to={linkItem.link} target={linkItem.openInNewTab ? "_blank" : undefined}>
                                    {linkItem.title}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </AnimateHeight>
);

const Submenu = ({ submenu, isOpen, index }: { submenu: SubMenuDataType[]; isOpen: boolean; index: number }) => {
    const [openSubIndexes, setOpenSubIndexes] = useState<number[]>([]);

    const toggleNestedSubmenu = (e: MouseEvent, subIndex: number) => {
        e.preventDefault();
        setOpenSubIndexes((prev) =>
            prev.includes(subIndex) ? prev.filter((i) => i !== subIndex) : [...prev, subIndex]
        );
    };

    return (
        <AnimateHeight id={`submenu-${index}`} duration={500} height={isOpen ? 'auto' : 0}>
            <div className='has-submenu'>
                {submenu.map((item, subIndex) => {
                    const nestedIsOpen = openSubIndexes.includes(subIndex);
                    return (
                        <div key={subIndex}>
                            <Link to={item.link}>
                                {item.title}
                                {item.submenu?.length && (
                                    <i onClick={(e) => toggleNestedSubmenu(e, subIndex)}>+</i>
                                )}
                            </Link>
                            {item.submenu?.length && <Submenu submenu={item.submenu} isOpen={nestedIsOpen} index={subIndex} />}
                        </div>
                    );
                })}
            </div>
        </AnimateHeight>
    );
};

export default MobileNavBar;
