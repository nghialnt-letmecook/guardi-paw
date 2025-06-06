import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, ShoppingBag  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-xl font-bold">GUARDi PAW</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Công nghệ vì sự sống khỏe mạnh và hạnh phúc của thú cưng. Chúng tôi trao gửi sự an tâm cho mọi gia đình
              yêu thú cưng.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Hướng dẫn sử dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-500" />
                <span className="text-gray-300">contact@guardipaw.vn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-500" />
                <span className="text-gray-300">1900-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-500" />
                <span className="text-gray-300">TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2024 GUARDi PAW Vietnam. Tất cả quyền được bảo lưu.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-pink-500 text-sm transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="#" className="text-gray-300 hover:text-pink-500 text-sm transition-colors">
                Điều khoản dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
