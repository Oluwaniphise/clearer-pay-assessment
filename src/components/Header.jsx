import { Menu, X, Home, Wallet, CreditCard, Settings, User, UserCheck, ChevronDown, MenuSquareIcon, MenuIcon, Users, Receipt, ReceiptText } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
    { icon: <Home size={18} />, label: "Dashboard", path: '/dashboard' },
    { icon: <Wallet size={18} />, label: "Wallet", path: '/wallet' },
    { icon: <CreditCard size={18} />, label: "Merchants", path: '/merchants' },
    { icon: <ReceiptText size={18} />, label: "Transactions", path: '/transactions' },
    { icon: <Users size={18} />, label: "Beneficiaries", path: '/beneficiaries' },
];

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);


    return (
        <header className="flex flex-col ">
            <div className="flex flex-row justify-between items-center border-b border-gray-200 pb-3.5">

                <div className="flex flex-row items-center gap-9">
                    <h1 className="text-black text-2xl">ClearerPay</h1>

                    <div className="hidden xl:flex flex-row gap-8 items-center">
                        {navLinks.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) => `
                            relative
                            text-gray-700
                            hover:text-black
                            ${isActive ? 'text-gray-900 font-semibold' : ''}
                          `}
                                children={({ isActive }) => (
                                    <>
                                        <div className="inline-flex gap-x-2 items-center">
                                            {isActive && <span> {item.icon}</span>} {item.label}
                                        </div>

                                        {isActive && <span className="absolute left-0 right-0 -bottom-[21px] border-b-2 border-gray-900"></span>}
                                    </>
                                )}
                            />
                        ))}


                    </div>
                </div>

                <div className="hidden xl:flex flex-row justify-between items-center gap-7">
                    <button className="bg-gray-800 text-white rounded-full inline-flex items-center gap-2 pl-4 p-2">
                        <UserCheck className="w-5 h-5 text-white" />
                        Personal Account
                        <ChevronDown className="w-4 h-4 tex-white" />
                    </button>

                    <div className="inline-flex text-gray-700 items-center gap-2">
                        <Settings className="w-5 h-5 text-gray-500" />
                        Settings
                    </div>
                </div>

                <div className="xl:hidden">
                    <button onClick={() => setMobileOpen(true)}>
                        <MenuIcon className="w-5 h-5 text-gray-950" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="xl:hidden fixed inset-0 z-50 bg-white">
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="text-xl font-semibold">ClearerPay</div>
                        <button onClick={() => setMobileOpen(false)}>
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-4 p-4 text-sm text-gray-700">
                        {navLinks.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className="flex items-center gap-2 py-2 hover:text-black"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.icon}
                                {item.label}
                            </NavLink>
                        ))}

                        <hr className="my-2" />

                        <button className="flex items-center gap-2 py-2 text-gray-700">
                            <User className="w-5 h-5" />
                            Profile
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};


