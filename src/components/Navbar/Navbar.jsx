import React from "react";
import Link from "./Link";

const navigationData = [
  {
    id: "nav-001",
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: "nav-002",
    name: "User Profile",
    path: "/profile",
  },
  {
    id: "nav-003",
    name: "Settings",
    path: "/settings",
  },
  {
    id: "nav-004",
    name: "Analytics",
    path: "/reports/analytics",
  },
  {
    id: "nav-005",
    name: "Support",
    path: "/help-center",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-10">
        <h3 className="mr-10">My Navbar</h3>
      <ul className="flex">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>

      {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

      {/* <ul className='flex'>
                <li className='mr-10'><a href="/home">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
            <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
