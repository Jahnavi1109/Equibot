import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  BadgeRussianRuble,
  Orbit,
  Droplets,
  Bot,
  Handshake,
  Settings,
  Coins,
  Wrench,
  House,
} from "lucide-react";

import {
  ChevronDownIcon,
  HorizontaLDots,
  // ListIcon,
  // TableIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  { icon: <House />, name: "Dashboard", path: "/" },
  { icon: <BadgeRussianRuble />, name: "Binance AMM Data", path: "/binance-amm-data" },
  { icon: <Orbit />, name: "Bitget AMM Data", path: "/bitget-amm-data" },
  { icon: <Droplets />, name: "Hyperliquid AMM Data", path: "/hyperliquid-amm-data" },
  { icon: <Bot />, name: "Trading Bots", path: "/trading-bots" },
  { icon: <Handshake />, name: "Exchange", path: "/exchange" },
  { icon: <Settings />, name: "Admin Controls", path: "/admin-controls" },
  { icon: <Coins />, name: "Add Coins", path: "/add-coins" },
  { icon: <Wrench />, name: "Cron Settings", path: "/cron-settings" },
  // {
  //   name: "Forms",
  //   icon: <ListIcon />,
  //   subItems: [{ name: "Form Elements", path: "/form-elements" }],
  // },
  // {
  //   name: "Tables",
  //   icon: <TableIcon />,
  //   subItems: [{ name: "Basic Tables", path: "/basic-tables" }],
  // },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const [openSubmenu, setOpenSubmenu] = useState<{ type: "main"; index: number } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  useEffect(() => {
    let submenuMatched = false;
    navItems.forEach((nav, index) => {
      nav.subItems?.forEach((subItem) => {
        if (isActive(subItem.path)) {
          setOpenSubmenu({ type: "main", index });
          submenuMatched = true;
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [location, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `main-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu((prev) =>
      prev?.index === index ? null : { type: "main", index }
    );
  };

  const renderMenuItems = (items: NavItem[]) => (
    <ul className="flex flex-col gap-4 relative">
      {items.map((nav, index) => {
        const isSubmenuOpen = openSubmenu?.index === index;

        return (
          <li key={nav.name} className="relative">
            {nav.subItems ? (
              <button
                onClick={() => handleSubmenuToggle(index)}
                className={`
                  flex items-center w-full gap-3 px-4 py-2 rounded-l-full transition-colors
                  ${
                    isSubmenuOpen
                      ? "bg-blue-500 text-white font-semibold pr-0"
                      : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-500"
                  }
                  ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}
                  relative
                `}
                style={{ zIndex: isSubmenuOpen ? 10 : 1 }}
              >
                <span className={`w-5 h-5 ${isSubmenuOpen ? "text-white" : "text-gray-400 dark:text-gray-500 group-hover:text-white"}`}>
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <>
                    <span>{nav.name}</span>
                    <ChevronDownIcon className={`ml-auto w-5 h-5 transition-transform ${isSubmenuOpen ? "rotate-180 text-white" : "text-white"}`} />
                  </>
                )}

                {/* Right curved tab */}
                {isSubmenuOpen && (
                  <span
                    className="absolute top-[-4px] bottom-[-4px] right-0 w-4 bg-blue-500 rounded-tr-full rounded-br-full"
                    style={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.6)" }}
                  />
                )}
              </button>
            ) : (
              nav.path && (
                <Link
                  to={nav.path}
                  className={`
                    relative flex items-center gap-3 px-4 py-2 rounded-l-full transition-colors
                    ${
                      isActive(nav.path)
                        ? "bg-blue-500 text-white font-semibold pr-0"
                        : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-500"
                    }
                    ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}
                  `}
                  style={{ zIndex: isActive(nav.path) ? 10 : 1 }}
                >
                  <span className={`w-5 h-5 ${isActive(nav.path) ? "text-white" : "text-gray-400 dark:text-gray-500 group-hover:text-white"}`}>
                    {nav.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && <span>{nav.name}</span>}

                  {/* Right curved tab */}
                  {isActive(nav.path) && (
                    <span className="absolute -top-4 right-0 w-4 h-10 bg-body transition-all duration-200"></span>
                    
                  )}
                </Link>
              )
            )}

            {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div
                ref={(el) => {
                  subMenuRefs.current[`main-${index}`] = el;
                }}
                className="overflow-hidden transition-all duration-300"
                style={{
                  height: isSubmenuOpen ? `${subMenuHeight[`main-${index}`]}px` : "0px",
                }}
              >
                <ul className="mt-2 space-y-1 ml-9">
                  {nav.subItems.map((subItem) => {
                    const subItemActive = isActive(subItem.path);
                    return (
                      <li key={subItem.name} className="relative">
                        <Link
                          to={subItem.path}
                          className={`
                            block px-3 py-1 rounded-l-full transition-colors
                            ${
                              subItemActive
                                ? "bg-blue-500 text-white font-medium pr-0"
                                : "text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-500"
                            }
                            flex items-center
                          `}
                          style={{ zIndex: subItemActive ? 10 : 1 }}
                        >
                          <span>{subItem.name}</span>

                          {/* Right curved tab for submenu active */}
                          {subItemActive && (
                            <span
                              className="absolute top-[-3px] bottom-[-3px] right-0 w-3 bg-blue-500 rounded-tr-full rounded-br-full"
                              style={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.6)" }}
                            />
                          )}

                          {/* Pro/new tags */}
                          <span className="flex items-center gap-1 ml-auto">
                            {subItem.new && (
                              <span className="bg-blue-100 text-blue-500 text-xs rounded px-2 py-0.5 ml-2">new</span>
                            )}
                            {subItem.pro && (
                              <span className="bg-blue-100 text-blue-500 text-xs rounded px-2 py-0.5 ml-2">pro</span>
                            )}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-screen bg-white dark:bg-gray-900 dark:border-gray-800 border-r border-gray-200 text-gray-900 dark:text-white
        px-5 mt-16 lg:mt-0 transition-all duration-300
        ${isExpanded || isMobileOpen || isHovered ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img className="dark:hidden" src="/images/logo/gradient-logo.png" alt="Logo" width={150} height={40} />
              <img className="hidden dark:block" src="/images/logo/gradient-logo.png" alt="Logo" width={150} height={40} />
            </>
          ) : (
            <img src="/images/logo/gradient-logo-mini.png" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto no-scrollbar h-[calc(100vh-64px)]">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className={`mb-4 text-xs uppercase text-gray-400 dark:text-gray-500 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
                {isExpanded || isHovered || isMobileOpen ? "Menu" : <HorizontaLDots className="size-6" />}
              </h2>
              {renderMenuItems(navItems)}
            </div>
          </div>
        </nav>
        {(isExpanded || isHovered || isMobileOpen) && <SidebarWidget />}
      </div>
    </aside>
  );
};

export default AppSidebar;
