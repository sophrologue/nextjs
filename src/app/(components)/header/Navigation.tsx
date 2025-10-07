"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSophrologieOpen, setIsSophrologieOpen] = useState(false);
    const pathname = usePathname();

    // Helper function to check if a path is active
    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSophrologieOpen(false); // Close sophrologie dropdown when main menu toggles
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsSophrologieOpen(false);
    };

    const toggleSophrologie = () => {
        setIsSophrologieOpen(!isSophrologieOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 w-full h-16 md:h-14 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20 z-50 flex items-center justify-between px-4 md:px-8">
            {/* Logo/Brand - Mobile */}
            <div className="md:hidden">
                <Link href="/" className="text-[#005649] font-bold text-lg hover:text-[#007562] transition-colors duration-200" onClick={closeMenu}>
                    Catherine Fabrici
                </Link>
            </div>

            {/* Desktop Logo/Brand */}
            <div className="hidden md:block">
                <Link href="/" className="text-[#005649] font-bold text-xl hover:text-[#007562] transition-all duration-300 hover:scale-105">
                    Catherine Fabrici
                    <span className="block text-xs text-gray-600 font-normal">Sophrologue Certifiée</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1">
                <ul className="flex items-center justify-center gap-8 text-sm">
                    <li>
                        <Link href="/" className={`relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ${
                            isActive("/") 
                                ? "text-[#005649] font-semibold" 
                                : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"
                        }`}>
                            Accueil
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ${
                                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/qui-je-suis" className={`relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ${
                            isActive("/qui-je-suis") 
                                ? "text-[#005649] font-semibold" 
                                : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"
                        }`}>
                            Qui je suis
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ${
                                isActive("/qui-je-suis") ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="/sophrologie" className={`relative flex items-center gap-1 transition-all duration-300 font-medium px-3 py-2 rounded-lg ${
                            isActive("/sophrologie") 
                                ? "text-[#005649] font-semibold" 
                                : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"
                        }`}>
                            Sophrologie
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ${
                                isActive("/sophrologie") ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                        </Link>
                        {/* Desktop Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                            <div className="py-3">
                                <Link href="/sophrologie" className="group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]">
                                    <span className="w-2 h-2 bg-[#005649] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                                    Sophrologie
                                </Link>
                                <Link href="/sophrologie/et-douleur" className="group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]">
                                    <span className="w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                                    Sophrologie et douleur
                                </Link>
                                <Link href="/sophrologie/et-cancer" className="group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]">
                                    <span className="w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                                    Sophrologie et cancer
                                </Link>
                                <Link href="/sophrologie/enfant-et-adolescent" className="group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]">
                                    <span className="w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                                    L&apos;enfant et l&apos;adolescent
                                </Link>
                                <Link href="/sophrologie/stress-au-travail" className="group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]">
                                    <span className="w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                                    Le stress au travail
                                </Link>
                                <Link href="/sophrologie/hypnose-humaniste" className="group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]">
                                    <span className="w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                                    Hypnose Humaniste
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/tarifs" className={`relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ${
                            isActive("/tarifs") 
                                ? "text-[#005649] font-semibold" 
                                : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"
                        }`}>
                            Tarifs
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ${
                                isActive("/tarifs") ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/avis" className={`relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ${
                            isActive("/avis") 
                                ? "text-[#005649] bg-[#005649]/10 font-semibold" 
                                : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"
                        }`}>
                            Avis
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ${
                                isActive("/avis") ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/la-societe" className={`relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ${
                            isActive("/la-societe") 
                                ? "text-[#005649] font-semibold" 
                                : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"
                        }`}>
                            La Société
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ${
                                isActive("/la-societe") ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
                <Link href="/contact" className="bg-gradient-to-r from-[#005649] to-[#007562] text-white px-6 py-2 rounded-full font-semibold hover:from-[#007562] hover:to-[#005649] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm">
                    Me contacter
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-[#005649]/10 focus:outline-none focus:ring-2 focus:ring-[#005649] transition-all duration-200"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-[#005649] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}></span>
                    <span className={`block w-5 h-0.5 bg-[#005649] transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`block w-5 h-0.5 bg-[#005649] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={closeMenu}></div>
            )}

            {/* Mobile Menu */}
            <nav className={`md:hidden fixed top-16 right-0 h-screen w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 overflow-y-auto ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <ul className="flex flex-col py-4">
                    <li>
                        <Link 
                            href="/" 
                            className={`block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ${
                                isActive("/") 
                                    ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" 
                                    : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"
                            }`}
                            onClick={closeMenu}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/qui-je-suis" 
                            className={`block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ${
                                isActive("/qui-je-suis") 
                                    ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" 
                                    : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"
                            }`}
                            onClick={closeMenu}
                        >
                            Qui je suis
                        </Link>
                    </li>
                    <li className="border-b border-gray-100">
                        <button 
                            onClick={toggleSophrologie}
                            className={`w-full flex items-center justify-between px-6 py-3 transition-colors duration-200 font-medium ${
                                isActive("/sophrologie") 
                                    ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" 
                                    : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"
                            }`}
                        >
                            Sophrologie
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isSophrologieOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {/* Mobile Sophrologie Submenu */}
                        <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${isSophrologieOpen ? "max-h-96" : "max-h-0"}`}>
                            <Link 
                                href="/sophrologie" 
                                className={`block px-10 py-2 text-sm transition-colors ${
                                    pathname === "/sophrologie" 
                                        ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" 
                                        : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"
                                }`}
                                onClick={closeMenu}
                            >
                                Sophrologie
                            </Link>
                            <Link 
                                href="/sophrologie/et-douleur" 
                                className={`block px-10 py-2 text-sm transition-colors ${
                                    pathname === "/sophrologie/et-douleur" 
                                        ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" 
                                        : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"
                                }`}
                                onClick={closeMenu}
                            >
                                Sophrologie et douleur
                            </Link>
                            <Link 
                                href="/sophrologie/et-cancer" 
                                className={`block px-10 py-2 text-sm transition-colors ${
                                    pathname === "/sophrologie/et-cancer" 
                                        ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" 
                                        : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"
                                }`}
                                onClick={closeMenu}
                            >
                                Sophrologie et cancer
                            </Link>
                            <Link 
                                href="/sophrologie/enfant-et-adolescent" 
                                className={`block px-10 py-2 text-sm transition-colors ${
                                    pathname === "/sophrologie/enfant-et-adolescent" 
                                        ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" 
                                        : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"
                                }`}
                                onClick={closeMenu}
                            >
                                L&apos;enfant et l&apos;adolescent
                            </Link>
                            <Link 
                                href="/sophrologie/stress-au-travail" 
                                className={`block px-10 py-2 text-sm transition-colors ${
                                    pathname === "/sophrologie/stress-au-travail" 
                                        ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" 
                                        : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"
                                }`}
                                onClick={closeMenu}
                            >
                                Le stress au travail
                            </Link>
                            <Link 
                                href="/sophrologie/hypnose-humaniste" 
                                className={`block px-10 py-2 text-sm transition-colors ${
                                    pathname === "/sophrologie/hypnose-humaniste" 
                                        ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" 
                                        : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"
                                }`}
                                onClick={closeMenu}
                            >
                                Hypnose Humaniste
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link 
                            href="/tarifs" 
                            className={`block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ${
                                isActive("/tarifs") 
                                    ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" 
                                    : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"
                            }`}
                            onClick={closeMenu}
                        >
                            Tarifs
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/avis" 
                            className={`block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ${
                                isActive("/avis") 
                                    ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" 
                                    : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"
                            }`}
                            onClick={closeMenu}
                        >
                            Avis
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/la-societe" 
                            className={`block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ${
                                isActive("/la-societe") 
                                    ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" 
                                    : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"
                            }`}
                            onClick={closeMenu}
                        >
                            La Société
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/contact" 
                            className={`block px-6 py-3 transition-colors duration-200 font-medium ${
                                isActive("/contact") 
                                    ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" 
                                    : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"
                            }`}
                            onClick={closeMenu}
                        >
                            Me contacter
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;