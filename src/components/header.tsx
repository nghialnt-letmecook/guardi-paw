"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="GUARDi PAW Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />

            <span className="text-xl font-bold text-gray-800">GUARDi PAW</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              href="/products"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Sản phẩm
            </Link>
            <Link
              href="/#about"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Về chúng tôi
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Liên hệ
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Trang chủ
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Sản phẩm
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Về chúng tôi
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Liên hệ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
