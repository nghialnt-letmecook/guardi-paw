import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductGallery from "@/components/product-gallery";
import ProductFeatures from "@/components/product-features";
import ProductSpecifications from "@/components/product-specifications";
import ProductReviews from "@/components/product-reviews";
import ProductFAQ from "@/components/product-faq";
import { Heart, ShoppingCart, Shield, ArrowRight, Check } from "lucide-react";
import { PageProps } from "../../../../.next/types/app/page";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  description: string;
  images: string[];
};

const products: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Smart Collar Pro",
    subtitle: "GPS + Theo dõi sức khỏe toàn diện",
    price: 950000,
    originalPrice: 1200000,
    discount: "20%",
    colors: ["Đen", "Xanh dương", "Hồng"],
    sizes: ["S (dưới 5kg)", "M (5-15kg)", "L (15-30kg)"],
    rating: 4.8,
    reviewCount: 124,
    stock: 15,
    description:
      "Vòng cổ thông minh GUARDi PAW kết hợp công nghệ GPS siêu chính xác và cảm biến sức khỏe tiên tiến, giúp bạn theo dõi vị trí và tình trạng sức khỏe của thú cưng mọi lúc, mọi nơi. Thiết kế nhẹ nhàng, thoải mái và chống nước, phù hợp với mọi hoạt động hàng ngày.",
    images: [
      "/images/vong_co_thong_minh_showcase_1.png",
      "/images/vong_co_v2.webp",
      "/images/vong_co_v11.webp",
      "/images/vong_co_v111.webp",
    ],
  },

  "2": {
    id: "2",
    name: "Smart Collar Mini",
    subtitle: "GPS + Theo dõi sức khỏe cơ bản",
    price: 790000,
    originalPrice: 900000,
    discount: "17%",
    colors: ["Đen", "Xanh lá", "Hồng"],
    sizes: ["S (dưới 5kg)", "M (5-15kg)", "L (15-30kg)"],
    rating: 4.5,
    reviewCount: 89,
    stock: 20,
    description:
      "Phiên bản Lite của vòng cổ thông minh GUARDi PAW, cung cấp các tính năng GPS và theo dõi sức khỏe cơ bản với mức giá phải chăng. Thiết kế nhỏ gọn, nhẹ nhàng và dễ sử dụng, phù hợp cho những thú cưng nhỏ.",
    images: [
      "/images/vong_co_thong_minh_showcase_2.png",
      "/images/vong_co_v511.webp",
      "/images/vong_co_v31.webp",
      "/images/vong_co_v3.webp",
    ],
  },
  "3": {
    id: "3",
    name: "Smart Collar AI Edition",
    subtitle: "GPS + Theo dõi sức khỏe nâng cao",
    price: 1200000,
    originalPrice: 1400000,
    discount: "18%",
    colors: ["Đen", "Xám", "Hồng"],
    sizes: ["S (dưới 5kg)", "M (5-15kg)", "L (15-30kg)"],
    rating: 4.9,
    reviewCount: 200,
    stock: 10,
    description:
      "Phiên bản cao cấp nhất của vòng cổ thông minh GUARDi PAW, tích hợp đầy đủ các tính năng GPS, theo dõi sức khỏe nâng cao và kết nối với ứng dụng di động. Thiết kế sang trọng, bền bỉ và chống nước, phù hợp cho những thú cưng lớn.",
    images: [
      "/images/vong_co_thong_minh_showcase_3.png",
      "/images/vong_co_v21.webp",
      "/images/vong_co_v4.webp",
      "/images/vong_co_v4111.webp",
    ],
  },
  "4": {
    id: "4",
    name: "Smart Collar Style",
    subtitle: "GPS + Theo dõi sức khỏe cho thú cưng nhỏ",
    price: 820000,
    originalPrice: 1000000,
    discount: "19%",
    colors: ["Hồng", "Xanh pastel", "Trắng"],
    sizes: ["XS (dưới 3kg)", "S (3-5kg)"],
    rating: 4.6,
    reviewCount: 75,
    stock: 30,
    description:
      "Vòng cổ thông minh GUARDi PAW Mini được thiết kế đặc biệt cho những thú cưng nhỏ, với các tính năng GPS và theo dõi sức khỏe cơ bản. Thiết kế nhẹ nhàng, thoải mái và dễ sử dụng, giúp bạn theo dõi thú cưng của mình một cách hiệu quả.",
    images: [
      "/images/vong_co_thong_minh_showcase_4.png",
      "/images/vong_co_v51.webp",
      "/images/vong_co_v5.webp",
      "/images/vong_co_v1.webp",
    ],
  },

  // Thêm các sản phẩm khác nếu cần
};

export default async function ProductDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id as keyof typeof products;
  const product = products[id];
  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10">
        Sản phẩm không tồn tại.
      </div>
    );
  }
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-pink-500">
                  Trang chủ
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-500 hover:text-pink-500"
                >
                  Sản phẩm
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-pink-500 font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <ProductGallery images={product.images} />

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-pink-500 text-white mb-2">Hot</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h1>
                <p className="text-xl text-pink-600 font-medium">
                  {product.subtitle}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviewCount} đánh giá)
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-800">
                  {product.price.toLocaleString()} VNĐ
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      {product.originalPrice.toLocaleString()} VNĐ
                    </span>
                    <Badge className="bg-green-500 text-white">
                      Tiết kiệm {product.discount}
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-gray-600">{product.description}</p>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Màu sắc
                </h3>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-black rounded-full border-2 border-pink-500 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-transparent cursor-pointer"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-transparent cursor-pointer"></div>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Kích cỡ
                </h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="border-gray-300 hover:border-pink-500 hover:bg-pink-50"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Còn {product.stock} sản phẩm</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Mua ngay
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Heart className="mr-2 h-5 w-5" />
                  Thêm vào yêu thích
                </Button>
              </div>

              {/* Trial Offer */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">
                      Dùng thử 7 ngày
                    </h3>
                    <p className="text-sm text-blue-600">
                      Không hài lòng? Hoàn tiền 100% trong vòng 7 ngày đầu tiên.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="w-full flex justify-start mb-8 border-b overflow-x-auto">
              <TabsTrigger value="features" className="text-lg">
                Tính năng
              </TabsTrigger>
              <TabsTrigger value="app" className="text-lg">
                Ứng dụng
              </TabsTrigger>
              <TabsTrigger value="specs" className="text-lg">
                Thông số kỹ thuật
              </TabsTrigger>
              <TabsTrigger value="package" className="text-lg">
                Bộ sản phẩm
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-lg">
                Đánh giá
              </TabsTrigger>
              <TabsTrigger value="faq" className="text-lg">
                FAQ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-0">
              <ProductFeatures />
            </TabsContent>

            <TabsContent value="app" className="mt-0">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Ứng Dụng GUARDi PAW
                </h2>
                <p className="text-gray-600 mb-8">
                  Ứng dụng GUARDi PAW được thiết kế để kết nối liền mạch với
                  vòng cổ thông minh, cung cấp cho bạn mọi thông tin cần thiết
                  về thú cưng trong một giao diện trực quan, dễ sử dụng.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Hiển thị dữ liệu sức khỏe & vị trí
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Bảng điều khiển trực quan
                          </h4>
                          <p className="text-sm text-gray-600">
                            Xem tất cả các chỉ số sức khỏe quan trọng và vị trí
                            hiện tại của thú cưng trong một màn hình tổng quan.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Theo dõi nhịp tim theo thời gian thực
                          </h4>
                          <p className="text-sm text-gray-600">
                            Giám sát nhịp tim của thú cưng và nhận thông báo khi
                            phát hiện bất thường.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Bản đồ GPS chi tiết
                          </h4>
                          <p className="text-sm text-gray-600">
                            Xem vị trí hiện tại và lịch sử di chuyển của thú
                            cưng trên bản đồ chi tiết.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4 max-w-sm mx-auto">
                    <Image
                      src="/images/main_app.png"
                      alt="Ứng dụng GUARDi PAW - Màn hình chính"
                      width={300}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="bg-gray-100 rounded-xl p-4 max-w-sm mx-auto">
                    <Image
                      src="/images/care_app.png"
                      alt="Ứng dụng GUARDi PAW - Gợi ý chăm sóc"
                      width={300}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Gợi ý chăm sóc & kết nối bác sĩ thú y
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Gợi ý chăm sóc cá nhân hóa
                          </h4>
                          <p className="text-sm text-gray-600">
                            Nhận các gợi ý chăm sóc dựa trên dữ liệu sức khỏe,
                            giống và độ tuổi của thú cưng.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Tư vấn thú y trực tuyến
                          </h4>
                          <p className="text-sm text-gray-600">
                            Kết nối trực tiếp với bác sĩ thú y qua chat hoặc
                            video call khi cần thiết.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Cảnh báo sức khỏe thông minh
                          </h4>
                          <p className="text-sm text-gray-600">
                            Nhận thông báo khi phát hiện các dấu hiệu bất thường
                            trong hoạt động hoặc chỉ số sức khỏe.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Lịch sử sức khỏe & tiêm phòng
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Hồ sơ sức khỏe toàn diện
                          </h4>
                          <p className="text-sm text-gray-600">
                            Lưu trữ toàn bộ lịch sử khám bệnh, điều trị và kết
                            quả xét nghiệm.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Lịch tiêm phòng tự động
                          </h4>
                          <p className="text-sm text-gray-600">
                            Nhắc nhở khi đến hạn tiêm phòng và lưu trữ lịch sử
                            tiêm chủng.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 rounded-full p-2 mt-1">
                          <Check className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Báo cáo sức khỏe định kỳ
                          </h4>
                          <p className="text-sm text-gray-600">
                            Nhận báo cáo phân tích xu hướng sức khỏe hàng tuần
                            và hàng tháng.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4 max-w-sm mx-auto">
                    <Image
                      src="/images/health_app.png"
                      alt="Ứng dụng GUARDi PAW - Lịch sử sức khỏe"
                      width={300}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                    Tải ứng dụng ngay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="mt-0">
              <ProductSpecifications />
            </TabsContent>

            <TabsContent value="package" className="mt-0">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Bộ Sản Phẩm Bao Gồm
                </h2>
                <p className="text-gray-600 mb-8">
                  Mỗi bộ sản phẩm GUARDi PAW được đóng gói cẩn thận và bao gồm
                  đầy đủ các phụ kiện cần thiết để bạn có thể bắt đầu sử dụng
                  ngay.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6 text-center flex flex-col items-center">
                    <div className="rounded-lg mb-4 flex items-center justify-center w-32 h-32 overflow-hidden shadow-sm">
                      <Image
                        src="/images/vong_co_v4111.webp"
                        alt="Vòng cổ thông minh"
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      1 Vòng cổ thông minh
                    </h3>
                    <p className="text-sm text-gray-600">
                      Vòng cổ thông minh GUARDi PAW với cảm biến sức khỏe và GPS
                      tích hợp.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 text-center flex flex-col items-center">
                    <div className="rounded-lg mb-4 flex items-center justify-center w-32 h-32 overflow-hidden shadow-sm">
                      <Image
                        src="/images/day_sac.png"
                        alt="Dây sạc"
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      1 Dây sạc
                    </h3>
                    <p className="text-sm text-gray-600">
                      Dây sạc USB-C chất lượng cao, dài 1m, sạc nhanh và an
                      toàn.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 text-center flex flex-col items-center">
                    <div className="rounded-lg mb-4 flex items-center justify-center w-32 h-32 overflow-hidden shadow-sm">
                      <Image
                        src="/images/user_manual.webp"
                        alt="Hướng dẫn sử dụng"
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Hướng dẫn sử dụng
                    </h3>
                    <p className="text-sm text-gray-600">
                      Sách hướng dẫn chi tiết bằng tiếng Việt với hình ảnh minh
                      họa rõ ràng.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 text-center flex flex-col items-center">
                    <div className="rounded-lg mb-4 flex items-center justify-center w-32 h-32 overflow-hidden shadow-sm">
                      <Image
                        src="/images/box.webp"
                        alt="Hộp đựng cao cấp"
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Hộp đựng cao cấp
                    </h3>
                    <p className="text-sm text-gray-600">
                      Hộp đựng thiết kế sang trọng, bảo vệ sản phẩm và phù hợp
                      làm quà tặng.
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Video Hướng Dẫn Sử Dụng
                  </h3>
                  <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-gray-500">Video hướng dẫn sử dụng</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <ProductReviews />
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <ProductFAQ />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Bảo vệ thú cưng của bạn ngay hôm nay
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Đừng để thú cưng của bạn thiếu đi sự bảo vệ và chăm sóc tốt nhất.
            Hãy để GUARDi PAW giúp bạn theo dõi sức khỏe và vị trí của chúng mọi
            lúc, mọi nơi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Mua ngay
            </Button>
            <Button size="lg" variant="outline">
              Dùng thử 7 ngày
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
