(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(components)/header/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Navigation = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSophrologieOpen, setIsSophrologieOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Helper function to check if a path is active
    const isActive = (path)=>{
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
        setIsSophrologieOpen(false); // Close sophrologie dropdown when main menu toggles
    };
    const closeMenu = ()=>{
        setIsMenuOpen(false);
        setIsSophrologieOpen(false);
    };
    const toggleSophrologie = ()=>{
        setIsSophrologieOpen(!isSophrologieOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 w-full h-16 md:h-14 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20 z-50 flex items-center justify-between px-4 md:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-[#005649] font-bold text-lg hover:text-[#007562] transition-colors duration-200",
                    onClick: closeMenu,
                    children: "Catherine Fabrici"
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-[#005649] font-bold text-xl hover:text-[#007562] transition-all duration-300 hover:scale-105",
                    children: [
                        "Catherine Fabrici",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-xs text-gray-600 font-normal",
                            children: "Sophrologue Certifiée"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden md:flex items-center justify-center flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex items-center justify-center gap-8 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ".concat(isActive("/") ? "text-[#005649] font-semibold" : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"),
                                children: [
                                    "Accueil",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isActive("/") ? "w-full" : "w-0 group-hover:w-full")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                        lineNumber: 60,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/qui-je-suis",
                                className: "relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ".concat(isActive("/qui-je-suis") ? "text-[#005649] font-semibold" : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"),
                                children: [
                                    "Qui je suis",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isActive("/qui-je-suis") ? "w-full" : "w-0 group-hover:w-full")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/sophrologie",
                                    className: "relative flex items-center gap-1 transition-all duration-300 font-medium px-3 py-2 rounded-lg ".concat(isActive("/sophrologie") ? "text-[#005649] font-semibold" : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"),
                                    children: [
                                        "Sophrologie",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 transition-transform duration-300 group-hover:rotate-180",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                lineNumber: 85,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isActive("/sophrologie") ? "w-full" : "w-0 group-hover:w-full")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 87,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sophrologie",
                                                className: "group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-[#005649] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Sophrologie"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                lineNumber: 94,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sophrologie/et-douleur",
                                                className: "group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Sophrologie et douleur"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                lineNumber: 98,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sophrologie/et-cancer",
                                                className: "group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Sophrologie et cancer"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                lineNumber: 102,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sophrologie/enfant-et-adolescent",
                                                className: "group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "L'enfant et l'adolescent"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                lineNumber: 106,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sophrologie/stress-au-travail",
                                                className: "group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Le stress au travail"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                lineNumber: 110,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sophrologie/hypnose-humaniste",
                                                className: "group/item flex items-center px-5 py-3 text-sm hover:bg-[#005649]/10 hover:text-[#005649] transition-all duration-200 rounded-lg mx-2 border-l-4 border-transparent hover:border-[#005649]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-[#007562] rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Hypnose Humaniste"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                lineNumber: 114,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                        lineNumber: 93,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tarifs",
                                className: "relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ".concat(isActive("/tarifs") ? "text-[#005649] font-semibold" : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"),
                                children: [
                                    "Tarifs",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isActive("/tarifs") ? "w-full" : "w-0 group-hover:w-full")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 122,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/avis",
                                className: "relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ".concat(isActive("/avis") ? "text-[#005649] bg-[#005649]/10 font-semibold" : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"),
                                children: [
                                    "Avis",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isActive("/avis") ? "w-full" : "w-0 group-hover:w-full")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                        lineNumber: 140,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/mediation",
                                className: "relative transition-all duration-300 font-medium px-3 py-2 rounded-lg group ".concat(isActive("/mediation") ? "text-[#005649] font-semibold" : "text-gray-700 hover:text-[#005649] hover:bg-[#005649]/5"),
                                children: [
                                    "Médiation",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 left-0 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isActive("/mediation") ? "w-full" : "w-0 group-hover:w-full")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "bg-gradient-to-r from-[#005649] to-[#007562] text-white px-6 py-2 rounded-full font-semibold hover:from-[#007562] hover:to-[#005649] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm",
                    children: "Me contacter"
                }, void 0, false, {
                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                    lineNumber: 162,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                lineNumber: 161,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMenu,
                className: "md:hidden p-2 rounded-lg hover:bg-[#005649]/10 focus:outline-none focus:ring-2 focus:ring-[#005649] transition-all duration-200",
                "aria-label": "Toggle menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 flex flex-col justify-center items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block w-5 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1")
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 174,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block w-5 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isMenuOpen ? "opacity-0" : "opacity-100")
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 175,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block w-5 h-0.5 bg-[#005649] transition-all duration-300 ".concat(isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1")
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                    lineNumber: 173,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed inset-0 bg-black/50 z-40",
                onClick: closeMenu
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                lineNumber: 182,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "md:hidden fixed top-16 right-0 h-screen w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 overflow-y-auto ".concat(isMenuOpen ? "translate-x-0" : "translate-x-full"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ".concat(isActive("/") ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                onClick: closeMenu,
                                children: "Accueil"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 188,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/qui-je-suis",
                                className: "block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ".concat(isActive("/qui-je-suis") ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                onClick: closeMenu,
                                children: "Qui je suis"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 201,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleSophrologie,
                                    className: "w-full flex items-center justify-between px-6 py-3 transition-colors duration-200 font-medium ".concat(isActive("/sophrologie") ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                    children: [
                                        "Sophrologie",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 transition-transform duration-200 ".concat(isSophrologieOpen ? "rotate-180" : ""),
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                                lineNumber: 225,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 224,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                    lineNumber: 215,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden transition-all duration-300 bg-gray-50 ".concat(isSophrologieOpen ? "max-h-96" : "max-h-0"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sophrologie",
                                            className: "block px-10 py-2 text-sm transition-colors ".concat(pathname === "/sophrologie" ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                            onClick: closeMenu,
                                            children: "Sophrologie"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 230,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sophrologie/et-douleur",
                                            className: "block px-10 py-2 text-sm transition-colors ".concat(pathname === "/sophrologie/et-douleur" ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                            onClick: closeMenu,
                                            children: "Sophrologie et douleur"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 241,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sophrologie/et-cancer",
                                            className: "block px-10 py-2 text-sm transition-colors ".concat(pathname === "/sophrologie/et-cancer" ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                            onClick: closeMenu,
                                            children: "Sophrologie et cancer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 252,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sophrologie/enfant-et-adolescent",
                                            className: "block px-10 py-2 text-sm transition-colors ".concat(pathname === "/sophrologie/enfant-et-adolescent" ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                            onClick: closeMenu,
                                            children: "L'enfant et l'adolescent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 263,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sophrologie/stress-au-travail",
                                            className: "block px-10 py-2 text-sm transition-colors ".concat(pathname === "/sophrologie/stress-au-travail" ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                            onClick: closeMenu,
                                            children: "Le stress au travail"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 274,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sophrologie/hypnose-humaniste",
                                            className: "block px-10 py-2 text-sm transition-colors ".concat(pathname === "/sophrologie/hypnose-humaniste" ? "text-[#005649] bg-[#005649]/15 font-semibold border-l-2 border-l-[#005649]" : "text-gray-600 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                            onClick: closeMenu,
                                            children: "Hypnose Humaniste"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                            lineNumber: 285,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                    lineNumber: 229,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 214,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tarifs",
                                className: "block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ".concat(isActive("/tarifs") ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                onClick: closeMenu,
                                children: "Tarifs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 299,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 298,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/avis",
                                className: "block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ".concat(isActive("/avis") ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                onClick: closeMenu,
                                children: "Avis"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 312,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 311,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/mediation",
                                className: "block px-6 py-3 transition-colors duration-200 font-medium border-b border-gray-100 ".concat(isActive("/mediation") ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                onClick: closeMenu,
                                children: "Médiation"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 325,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 324,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "block px-6 py-3 transition-colors duration-200 font-medium ".concat(isActive("/contact") ? "text-[#005649] bg-[#005649]/10 font-semibold border-l-4 border-l-[#005649]" : "text-gray-700 hover:bg-[#005649]/5 hover:text-[#005649]"),
                                onClick: closeMenu,
                                children: "Me contacter"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                                lineNumber: 338,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                            lineNumber: 337,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                    lineNumber: 187,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/header/Navigation.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(components)/header/Navigation.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navigation, "6520Aln5aCg5sPBUyHPSjRjzJPM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navigation;
const __TURBOPACK__default__export__ = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28components%29_header_Navigation_tsx_fc235a2a._.js.map