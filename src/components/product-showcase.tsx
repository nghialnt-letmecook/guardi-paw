import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Heart, Battery } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Smart Collar Pro",
    subtitle: "GPS + Sức khỏe",
    price: "950.000",
    originalPrice: "1.200.000",
    colors: ["Đen", "Xanh", "Hồng"],
    size: "Chó cỡ trung – lớn",
    image: "/images/vong_co_thong_minh_showcase_1.png",
    features: ["GPS siêu chính xác", "Theo dõi sức khỏe", "Pin 10 ngày"],
    badge: "Bán chạy",
  },
  {
    id: 2,
    name: "Smart Collar Mini",
    subtitle: "Nhẹ và Đáng Yêu",
    price: "790.000",
    colors: ["Hồng pastel", "Trắng"],
    size: "Mèo, chó nhỏ",
    image: "/images/vong_co_thong_minh_showcase_2.png",
    features: ["Siêu nhẹ", "Thiết kế đáng yêu", "An toàn tuyệt đối"],
    badge: "Mới",
  },
  {
    id: 3,
    name: "Smart Collar AI Edition",
    subtitle: "Phân tích nâng cao",
    price: "1.200.000",
    colors: ["Đen nhám", "Cam năng động"],
    size: "Theo dõi sức khỏe đặc biệt",
    image: "/images/vong_co_thong_minh_showcase_3.png",
    features: ["AI phân tích", "Cảnh báo thông minh", "Báo cáo chi tiết"],
    badge: "Premium",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập vòng cổ thông minh được thiết kế đặc biệt cho
            từng loại thú cưng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-pink-500 text-white">
                  {product.badge}
                </Badge>
                <div className="absolute top-4 right-4 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-1 hover:text-pink-600 transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-pink-600 font-medium">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-gray-500">{product.size}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-gray-800">
                      {product.price} VNĐ
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {product.originalPrice} VNĐ
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    Màu sắc: {product.colors.join(", ")}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link href={`/products/${product.id}`}>
                    <Button className="flex-1 bg-pink-500 hover:bg-pink-600">
                      Mua Ngay
                    </Button>
                  </Link>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-50"
            >
              Xem tất cả sản phẩm
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">
            Tính Năng Vượt Trội
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                GPS Siêu Chính Xác
              </h4>
              <p className="text-gray-600 text-sm">
                Định vị thời gian thực với độ chính xác cao, cảnh báo khu vực an
                toàn
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Theo Dõi Sức Khỏe
              </h4>
              <p className="text-gray-600 text-sm">
                Giám sát nhịp tim, hoạt động và cảnh báo bất thường
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Pin Siêu Bền
              </h4>
              <p className="text-gray-600 text-sm">
                Thời lượng pin lên đến 10 ngày, sạc nhanh chỉ 2 giờ
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Thiết Kế Thời Trang
              </h4>
              <p className="text-gray-600 text-sm">
                Chất liệu silicone nhẹ, nhiều màu sắc, thân thiện với thú cưng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
