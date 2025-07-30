//Header V1

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
// export interface MenuItem {
//   id: string;
//   label: string;
//   href: string;
//   icon?: React.ReactNode;
//   children?: MenuItem[];
// }

// export interface NavigationProps {
//   logo: {
//     src: string;
//     alt: string;
//     width?: number;
//     height?: number;
//   };
//   menuItems: MenuItem[];
//   ctaButton?: {
//     label: string;
//     href: string;
//     variant?: "primary" | "secondary";
//   };
//   className?: string;
// }

// export interface HeroSectionProps {
//   title: string;
//   subtitle?: string;
//   description: string;
//   backgroundImage?: string;
//   backgroundColor?: string;
//   primaryButton?: {
//     label: string;
//     href: string;
//   };
//   secondaryButton?: {
//     label: string;
//     href: string;
//   };
//   className?: string;
// }

// export const Navigation: React.FC<NavigationProps> = ({
//   logo,
//   menuItems,
//   ctaButton,
//   className = "",
// }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setActiveDropdown(null);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = (itemId: string) => {
//     setActiveDropdown(activeDropdown === itemId ? null : itemId);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   const renderMenuItem = (item: MenuItem, isMobile = false) => {
//     const hasChildren = item.children && item.children.length > 0;

//     if (isMobile) {
//       return (
//         <div key={item.id} className="relative">
//           <div className="flex items-center justify-between">
//             <Link
//               href={item.href}
//               className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
//               onClick={!hasChildren ? closeMobileMenu : undefined}
//             >
//               {item.icon && <span className="w-5 h-5">{item.icon}</span>}
//               <span className="font-medium">{item.label}</span>
//             </Link>
//             {hasChildren && (
//               <button
//                 onClick={() => toggleDropdown(item.id)}
//                 className="p-2 text-gray-500 hover:text-gray-700"
//               >
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform duration-200 ${
//                     activeDropdown === item.id ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//             )}
//           </div>
//           {hasChildren && activeDropdown === item.id && (
//             <div className="pl-6 py-2 space-y-1 bg-gray-50 rounded-lg mt-2">
//               {item.children?.map((child) => (
//                 <Link
//                   key={child.id}
//                   href={child.href}
//                   className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-all duration-200"
//                   onClick={closeMobileMenu}
//                 >
//                   {child.label}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       );
//     }

//     return (
//       <div key={item.id} className="relative group">
//         <Link
//           href={item.href}
//           className="flex items-center space-x-2 px-5 py-3 text-gray-700 hover:text-white font-medium transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-lg transform hover:scale-105"
//           onMouseEnter={() => hasChildren && setActiveDropdown(item.id)}
//         >
//           {item.icon && <span className="w-4 h-4">{item.icon}</span>}
//           <span className="text-sm lg:text-base">{item.label}</span>
//           {hasChildren && (
//             <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
//           )}
//         </Link>
//         {hasChildren && activeDropdown === item.id && (
//           <div
//             ref={dropdownRef}
//             className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl z-50 py-3 overflow-hidden"
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             {item.children?.map((child, index) => (
//               <Link
//                 key={child.id}
//                 href={child.href}
//                 className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border-b border-gray-50 last:border-b-0"
//                 style={{ animationDelay: `${index * 50}ms` }}
//               >
//                 {child.icon && <span className="w-5 h-5">{child.icon}</span>}
//                 <div className="flex-1">
//                   <div className="font-semibold text-sm">{child.label}</div>
//                   <div className="text-xs text-gray-500 mt-1">
//                     Description du service
//                   </div>
//                 </div>
//                 <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50  transition-all duration-500 ${
//         isScrolled ? "bg-white shadow-2xl" : "bg-transparent"
//       } ${className}`}
//     >
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex items-center justify-between h-18 lg:h-24">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3 group">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.width || 40}
//                 height={logo.height || 40}
//                 className="relative w-auto h-10 lg:h-12 rounded-lg"
//               />
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//                 MonLogo
//               </h1>
//               <p className="text-xs text-gray-500 -mt-1">Solutions digitales</p>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center">
//             <div className="flex items-center space-x-1  backdrop-blur-sm px-2 py-2  ">
//               {menuItems.map((item) => renderMenuItem(item))}
//             </div>
//           </div>

//           {/* CTA Button & Mobile Menu Toggle */}
//           <div className="flex items-center space-x-4">
//             {ctaButton && (
//               <Link
//                 href={ctaButton.href}
//                 className={`hidden lg:inline-flex items-center space-x-3 px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ml-6 ${
//                   ctaButton.variant === "secondary"
//                     ? "text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
//                     : "text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
//                 }`}
//               >
//                 <span>{ctaButton.label}</span>
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             )}

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden transition-all duration-500 overflow-hidden ${
//           isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-8 space-y-3 shadow-2xl">
//           {menuItems.map((item) => renderMenuItem(item, true))}

//           {ctaButton && (
//             <div className="pt-6 border-t border-gray-100">
//               <Link
//                 href={ctaButton.href}
//                 className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
//                   ctaButton.variant === "secondary"
//                     ? "text-gray-700 bg-gray-100 hover:bg-gray-200"
//                     : "text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
//                 }`}
//                 onClick={closeMobileMenu}
//               >
//                 <span>{ctaButton.label}</span>
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export interface NavigationProps {
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  menuItems: MenuItem[];
  ctaButton?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  className?: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  backgroundColor?: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  logo,
  menuItems,
  ctaButton,
  className = "",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fermer le menu mobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const renderMenuItem = (item: MenuItem, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0;

    if (isMobile) {
      return (
        <div key={item.id} className="group">
          <div className="flex items-center">
            {hasChildren ? (
              // Pour les éléments avec enfants, on utilise un bouton au lieu d'un lien
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown(item.id);
                }}
                className="flex-1 flex items-center space-x-4 px-6 py-6 text-gray-800 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 font-semibold text-lg rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md mx-1 my-1 w-full text-left"
              >
                {item.icon && (
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                    <span className="w-6 h-6 text-gray-600">{item.icon}</span>
                  </div>
                )}
                <div className="flex-1">
                  <span className="block">{item.label}</span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    activeDropdown === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              // Pour les éléments sans enfants, on garde le lien
              <Link
                href={item.href}
                className="flex-1 flex items-center space-x-4 px-6 py-6 text-gray-800 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 font-semibold text-lg rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md mx-1 my-1"
                onClick={closeMobileMenu}
              >
                {item.icon && (
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                    <span className="w-6 h-6 text-gray-600">{item.icon}</span>
                  </div>
                )}
                <div className="flex-1">
                  <span className="block">{item.label}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          {/* Dropdown pour mobile */}
          {hasChildren && (
            <div
              className={`mx-1 mb-2 overflow-hidden transition-all duration-500 ease-in-out ${
                activeDropdown === item.id
                  ? "max-h-screen opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <div className="bg-gray-50 rounded-2xl border border-gray-100">
                {item.children?.map((child, childIndex) => (
                  <Link
                    key={child.id}
                    href={child.href}
                    className="block px-8 py-4 text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-200 border-b border-gray-100 last:border-b-0"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-center space-x-4">
                      {child.icon && (
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg">
                          <span className="w-4 h-4 text-gray-600">
                            {child.icon}
                          </span>
                        </div>
                      )}
                      <div>
                        <span className="font-semibold text-base">
                          {child.label}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={item.id} className="relative group">
        <Link
          href={item.href}
          className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 rounded-lg hover:bg-blue-50 group"
          onMouseEnter={() => hasChildren && setActiveDropdown(item.id)}
        >
          {item.icon && <span className="w-4 h-4">{item.icon}</span>}
          <span className="text-sm font-semibold">{item.label}</span>
          {hasChildren && (
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
          )}
        </Link>
        {hasChildren && activeDropdown === item.id && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 py-2 animate-in slide-in-from-top-2 duration-200"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.children?.map((child) => (
              <Link
                key={child.id}
                href={child.href}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 mx-2 rounded-lg"
              >
                {child.icon && <span className="w-5 h-5">{child.icon}</span>}
                <div className="flex-1">
                  <div className="font-semibold text-sm">{child.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Description du service
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-2xl  " : "bg-white lg:bg-transparent"
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 40}
                  height={logo.height || 40}
                  className="w-auto h-8 lg:h-10 rounded-lg transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-gray-900">
                  MonLogo
                </h1>
                <p className="text-xs text-gray-600 -mt-0.5">
                  Solutions digitales
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => renderMenuItem(item))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {ctaButton && (
                <Link
                  href={ctaButton.href}
                  className={`hidden lg:inline-flex items-center space-x-2 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 text-sm ${
                    ctaButton.variant === "secondary"
                      ? "text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300"
                      : "text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
                  }`}
                >
                  <span>{ctaButton.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[90] transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Full Screen Menu */}
        <div
          className={`absolute inset-0 bg-white flex flex-col w-full h-full transform transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-10 w-32 h-32 border border-gray-300 rounded-full"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 border border-gray-200 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-gray-300 rounded-full"></div>
          </div>

          {/* Header du menu mobile - Fixed */}
          <div className="relative flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/80 flex-shrink-0">
            <div className="flex items-center space-x-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">MonLogo</h2>
                <p className="text-sm text-gray-600">Solutions digitales</p>
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-xl transition-all duration-200"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items - Scrollable */}
          <div className="relative flex-1 overflow-y-auto px-6 py-8 min-h-0">
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transform transition-all duration-700 ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-[-100px] opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {renderMenuItem(item, true)}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button Mobile - Fixed */}
          {ctaButton && (
            <div className="relative p-6 border-t border-gray-100 bg-gray-50/80 flex-shrink-0">
              <Link
                href={ctaButton.href}
                className={`flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl font-bold transition-all duration-300 w-full text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
                  ctaButton.variant === "secondary"
                    ? "text-gray-700 bg-gray-200 hover:bg-gray-300 border-2 border-gray-300"
                    : "text-white bg-gray-900 hover:bg-gray-800"
                }`}
                onClick={closeMobileMenu}
              >
                <span>{ctaButton.label}</span>
                <ArrowRight className="w-6 h-6" />
              </Link>

              {/* Contact Info */}
              <div className="mt-6 text-center text-gray-600">
                <p className="text-sm font-semibold">Besoin d&apos;aide ?</p>
                <p className="text-xs mt-1 text-gray-500">
                  contact@monlogo.com • +33 1 23 45 67 89
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
