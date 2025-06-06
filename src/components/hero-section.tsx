import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Heart, Smartphone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">Vòng Đeo Cổ Thông Minh</h1>
              <p className="text-xl lg:text-2xl text-pink-600 font-medium">Bảo vệ thú cưng bằng công nghệ yêu thương</p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Chúng tôi không chỉ bán thiết bị, chúng tôi trao gửi sự an tâm. Mỗi vòng cổ là một cam kết cho cuộc sống
              thú cưng khỏe mạnh hơn.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">GPS Chính Xác</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium">Theo Dõi Sức Khỏe</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Ứng Dụng Thông Minh</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                  Khám phá sản phẩm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Xem video demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/vong_co_2.jpg"
                alt="Thú cưng đeo vòng cổ thông minh"
                width={500}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Milu đang khỏe mạnh</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Nhịp tim: 85 bpm</p>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium">Vị trí: Công viên Tao Đàn</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Cách nhà 500m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
