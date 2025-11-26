import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./NavigationBar.css";
import NavigationData from "./NavigationData";

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState({});
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close drawer on route change
    useEffect(() => {
        setIsDrawerOpen(false);
        // Remove body scroll lock
        document.body.style.overflow = 'unset';
    }, [location.pathname]);

    // Toggle body scroll when drawer opens/closes
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isDrawerOpen]);

    // Reset submenu state whenever drawer closes
    useEffect(() => {
        if (!isDrawerOpen) {
            setOpenSubmenus({});
        }
    }, [isDrawerOpen]);

    const contactInfo = {
        phone: "+91 84018 49206",
        email: "info@blisssolutions.com"
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${contactInfo.phone}`;
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${contactInfo.email}`;
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleDrawerSubmenu = (id) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
        <div id="navigation-bar" className={isScrolled ? 'scrolled' : ''}>
            <div className="NavigationBarContainer">
                <div className="Container">
                    <div className="LogoContainer">
                           <Link to="/"> <img src="/Images/TBSLogos/BlissWhiteLogo.webp" alt="Bliss Logo" /></Link>
                    </div>
                        <div className="desktop-menu">
                        <ul className="nav-menu-div">
                                {NavigationData.map((item) => {
                                    const hasSublinks = Array.isArray(item.sublinks) && item.sublinks.length > 0;

                                    return (
                                        <li key={item.id} className={`nav-item ${hasSublinks ? 'has-dropdown' : ''}`}>
                                            <div className={`nav-link-wrapper ${hasSublinks ? 'with-dropdown' : ''}`}>
                                    <Link
                                        to={item.path}
                                                    className={`nav-link FadeParaColor ${location.pathname === item.path ? 'active' : ''}`}
                                                >
                                                    {item.name}
                                                </Link>
                                                {hasSublinks && (
                                                    <span className="dropdown-arrow" aria-hidden="true">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </div>
                                            {hasSublinks && (
                                                <div className="dropdown-menu">
                                                    <ul >
                                                    {item.sublinks.map((subLink) => (
                                                        <li key={subLink.id}>
                                                            <Link
                                                                to={subLink.path}
                                                                className={`dropdown-link ${location.pathname === subLink.path ? 'active' : ''}`}
                                                            >
                                                                {subLink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="buttonContainerNavigation">
                            {/* Desktop Contact Button with Dropdown */}
                            <div className="contact-dropdown-wrapper desktop-contact-btn">
                                <button className="contact-us-btn">
                                    Contact Us
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className="contact-dropdown-menu">
                                    <ul>
                                        <li onClick={handlePhoneClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                            <span>{contactInfo.phone}</span>
                                        </li>
                                        <li onClick={handleEmailClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                            <span>{contactInfo.email}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Mobile Contact Button */}
                            <div className="mobile-right-section">
                                <button className="mobile-contact-btn" onClick={handlePhoneClick} aria-label="Call Us">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </button>
                                <button
                                    className={`hamburger-btn ${isDrawerOpen ? 'active' : ''}`}
                                    onClick={toggleDrawer}
                                    aria-label="Menu"
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            <div
                className={`drawer-backdrop ${isDrawerOpen ? 'active' : ''}`}
                onClick={toggleDrawer}
            ></div>

            {/* Drawer Menu */}
            <div className={`drawer-menu ${isDrawerOpen ? 'open' : ''}`}>
                <div className="drawer-content">
                    <div className="drawer-header">
                        <img src="/Images/TBSLogos/BlissWhiteLogo.webp" alt="Bliss Logo" />
                        <button
                            className="drawer-close-btn"
                            onClick={toggleDrawer}
                            aria-label="Close Menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <nav className="drawer-nav">
                        <ul>
                            {NavigationData.map((item, index) => {
                                const hasSublinks = Array.isArray(item.sublinks) && item.sublinks.length > 0;
                                const isSubmenuOpen = !!openSubmenus[item.id];

                                return (
                                    <li
                                        key={item.id}
                                        className={`drawer-nav-item ${isDrawerOpen ? 'animate' : ''}`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className={`drawer-nav-link ${hasSublinks ? 'has-sublinks' : ''}`}>
                                            <Link
                                                to={item.path}
                                                className={`drawer-parent-link ${location.pathname === item.path ? 'active' : ''}`}
                                                onClick={() => setIsDrawerOpen(false)}
                                    >
                                        {item.name}
                                            </Link>
                                            {hasSublinks && (
                                                <button
                                                    type="button"
                                                    className={`drawer-expand-btn ${isSubmenuOpen ? 'open' : ''}`}
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        toggleDrawerSubmenu(item.id);
                                                    }}
                                                    aria-label="Toggle submenu"
                                                    aria-expanded={isSubmenuOpen}
                                                >
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                        {hasSublinks && (
                                            <div className={`drawer-submenu ${isSubmenuOpen ? 'open' : ''}`}>
                                                <ul>
                                                    {item.sublinks.map((subLink) => (
                                                        <li key={subLink.id}>
                                                            <Link
                                                                to={subLink.path}
                                                                className={`drawer-sub-link ${location.pathname === subLink.path ? 'active' : ''}`}
                                                                onClick={() => setIsDrawerOpen(false)}
                                                            >
                                                                {subLink.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="drawer-footer">
                        <div className="drawer-contact-buttons">
                            <button className="drawer-contact-btn" onClick={handlePhoneClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                Call Us
                            </button>
                            <button className="drawer-contact-btn" onClick={handleEmailClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                Email Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;