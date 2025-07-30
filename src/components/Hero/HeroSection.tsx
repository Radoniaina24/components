"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
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
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = "bg-gradient-to-br from-blue-50 via-white to-purple-50",
  primaryButton,
  secondaryButton,
  className = "",
}) => {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      )}

      {/* Background Gradient */}
      {!backgroundImage && (
        <div className={`absolute inset-0 ${backgroundColor}`} />
      )}

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              {subtitle}
            </div>
          )}

          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight ${
              backgroundImage ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {title}
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto ${
              backgroundImage ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <span>{primaryButton.label}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}

            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`inline-flex items-center space-x-3 px-8 py-4 font-semibold rounded-xl transition-all duration-200 ${
                  backgroundImage
                    ? "bg-white/20 backdrop-blur-md text-white hover:bg-white/30 border border-white/30"
                    : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl"
                } transform hover:-translate-y-1`}
              >
                <Play className="w-5 h-5" />
                <span>{secondaryButton.label}</span>
              </Link>
            )}
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200/20">
            <div className="text-center">
              <div
                className={`text-3xl font-bold mb-2 ${
                  backgroundImage ? "text-white" : "text-gray-900"
                }`}
              >
                10k+
              </div>
              <div
                className={`text-sm ${
                  backgroundImage ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Clients satisfaits
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold mb-2 ${
                  backgroundImage ? "text-white" : "text-gray-900"
                }`}
              >
                99.9%
              </div>
              <div
                className={`text-sm ${
                  backgroundImage ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Temps de disponibilité
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold mb-2 ${
                  backgroundImage ? "text-white" : "text-gray-900"
                }`}
              >
                24/7
              </div>
              <div
                className={`text-sm ${
                  backgroundImage ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Support technique
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            backgroundImage ? "border-white" : "border-gray-400"
          }`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              backgroundImage ? "bg-white" : "bg-gray-400"
            }`}
          />
        </div>
      </div>
    </section>
  );
};
