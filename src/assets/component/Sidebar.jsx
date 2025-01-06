import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectSidebarState, toggleSidebar } from '../../reduxStore/features/sidebarSlice';
import { FaTachometerAlt, FaUsers, FaBox, FaChevronRight, FaChevronLeft, FaUserAlt, FaProductHunt } from 'react-icons/fa';

const Sidebar = () => {
  const isSidebarOpen = useSelector(selectSidebarState); // Get the sidebar state from Redux
  const dispatch = useDispatch(); // Dispatch action to toggle sidebar
  const location = useLocation(); // Get the current route

  const [expandedMenu, setExpandedMenu] = useState(null); // To track which menu is expanded

  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: <FaTachometerAlt /> },
    {
      key: 'users',
      label: 'Users',
      icon: <FaUsers />,
      submenu: [
        { key: 'all-users', label: 'All Users', path: '/users/all', icon: <FaUserAlt /> },
        { key: 'add-user', label: 'Add User', path: '/users/add', icon: <FaUserAlt /> },
      ],
    },
    {
      key: 'products',
      label: 'Products',
      icon: <FaBox />,
      submenu: [
        { key: 'all-products', label: 'All Products', path: '/products/all', icon: <FaProductHunt /> },
        { key: 'add-product', label: 'Add Product', path: '/products/add', icon: <FaProductHunt /> },
      ],
    },
  ];

  return (
    <aside
      className={`bg-white h-screen shadow-lg fixed top-0 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      } transition-all duration-300 ease-in-out overflow-hidden z-40 border-r`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-center mx-4">
        <img
          src="https://agentmatchr.com/images/findmyagent.svg" // Replace with your logo path
          alt="Logo"
          className={`transition-all duration-300 ${isSidebarOpen ? 'w-28 ' : 'w-8 h-8'}`}
        />
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const isExpanded = expandedMenu === item.key;

            return (
              <li key={item.key}>
                {/* Main Menu Item */}
                <div
                  className={`flex items-center px-4 py-2 rounded-lg cursor-pointer mx-4 font-bold ${
                    isActive ? 'bg-blue-50 text-blue-400' : 'text-gray-600 hover:bg-gray-100'
                  } transition-colors duration-200`}
                  onClick={() =>
                    item.submenu ? setExpandedMenu(isExpanded ? null : item.key) : null // Don't allow click for non-submenu items
                  }
                >
                  <span className="text-lg mr-4">{item.icon}</span>

                  {item.path ? (
                    <Link to={item.path}><span className={`flex-1 ${isSidebarOpen ? 'block' : 'hidden'}`}>{item.label}</span></Link>
                   
                  ) : (
                    <span className={`flex-1 ${isSidebarOpen ? 'block' : 'hidden'}`}>{item.label}</span>
                  )}
                 
                  {item.submenu && isSidebarOpen && (
                    <FaChevronRight
                      className={`text-sm transform ${isExpanded ? 'rotate-90' : ''} transition-transform`}
                    />
                  )}
                </div>

                {/* Submenu Items */}
                {item.submenu && isExpanded && isSidebarOpen && (
                  <ul className="ml-8 mt-2 space-y-1">
                    {item.submenu.map((subItem) => {
                      const isSubActive = location.pathname === subItem.path;

                      return (
                        <li key={subItem.key}>
                          <Link
                            to={subItem.path}
                            className={`flex items-center px-4 py-2 rounded-lg ${
                              isSubActive ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-100'
                            } transition-colors duration-200`}
                          >
                            <span className="mr-4">{subItem.icon}</span>
                            {subItem.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Toggle Button */}
      <button
        className="absolute bottom-4 left-4 bg-blue-500 text-white p-2 rounded-full focus:outline-none transition-transform transform hover:scale-110"
        onClick={() => dispatch(toggleSidebar())}
      >
        {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </aside>
  );
};

export default Sidebar;
