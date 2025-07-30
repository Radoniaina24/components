"use client";

import { MenuItem, Navigation } from "@/components/Header/Header";
import { HeroSection } from "@/components/Hero/HeroSection";

export default function Page() {
  const menuItems: MenuItem[] = [
    {
      id: "home",
      label: "Accueil",
      href: "/",
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      children: [
        {
          id: "web-dev",
          label: "Développement Web",
          href: "/services/web-development",
        },
        {
          id: "mobile-dev",
          label: "Applications Mobile",
          href: "/services/mobile-development",
        },
        {
          id: "consulting",
          label: "Consulting IT",
          href: "/services/consulting",
        },
      ],
    },
    {
      id: "products",
      label: "Produits",
      href: "/products",
      children: [
        {
          id: "saas-platform",
          label: "Plateforme SaaS",
          href: "/products/saas",
        },
        {
          id: "mobile-app",
          label: "Application Mobile",
          href: "/products/mobile-app",
        },
      ],
    },
    {
      id: "about",
      label: "À propos",
      href: "/about",
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation
        logo={{
          src: "/logo.png",
          alt: "Mon Logo",
          width: 40,
          height: 40,
        }}
        menuItems={menuItems}
        ctaButton={{
          label: "Commencer",
          href: "/get-started",
          variant: "primary",
        }}
      />
      <HeroSection
        subtitle="🚀 Innovation & Excellence"
        title="Transformez vos idées en solutions digitales"
        description="Nous créons des expériences numériques exceptionnelles qui propulsent votre entreprise vers le succès. Découvrez comment nous pouvons vous aider à atteindre vos objectifs."
        primaryButton={{
          label: "Découvrir nos services",
          href: "/services",
        }}
        secondaryButton={{
          label: "Voir la démo",
          href: "/demo",
        }}
      />
      <HeroSection
        subtitle="🚀 Innovation & Excellence"
        title="Transformez vos idées en solutions digitales"
        description="Nous créons des expériences numériques exceptionnelles qui propulsent votre entreprise vers le succès. Découvrez comment nous pouvons vous aider à atteindre vos objectifs."
        primaryButton={{
          label: "Découvrir nos services",
          href: "/services",
        }}
        secondaryButton={{
          label: "Voir la démo",
          href: "/demo",
        }}
      />
    </div>
  );
}
