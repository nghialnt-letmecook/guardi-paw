"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Heart, Filter, Grid, List } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Smart Collar Pro",
    subtitle: "GPS + Sức khỏe",
    price: 950000,
    originalPrice: 1200000,
    colors: ["Đen", "Xanh", "Hồng"],
    size: "L",
    category: "Chó lớn",
    features: [
      "GPS siêu chính xác",
      "Theo dõi sức khỏe nâng cao",
      "Pin siêu bền (10 ngày)",
    ],
    image: "/images/vong_co_thong_minh_showcase_1.png",
    rating: 4.8,
    reviews: 124,
    badge: "Bán chạy",
  },
  {
    id: 2,
    name: "Smart Collar Mini",
    subtitle: "Nhẹ và Đáng Yêu",
    price: 790000,
    colors: ["Hồng pastel", "Trắng"],
    size: "S",
    category: "Mèo",
    features: ["Thời trang cao cấp", "GPS siêu chính xác"],
    image: "/images/vong_co_thong_minh_showcase_2.png",
    rating: 4.9,
    reviews: 89,
    badge: "Mới",
  },
  {
    id: 3,
    name: "Smart Collar AI Edition",
    subtitle: "Phân tích nâng cao",
    price: 1200000,
    colors: ["Đen nhám", "Cam năng động"],
    size: "M",
    category: "Chó nhỏ",
    features: [
      "Theo dõi sức khỏe nâng cao",
      "GPS siêu chính xác",
      "Pin siêu bền (10 ngày)",
    ],
    image: "/images/vong_co_thong_minh_showcase_3.png",
    rating: 4.7,
    reviews: 67,
    badge: "Premium",
  },
  {
    id: 4,
    name: "Smart Collar Style",
    subtitle: "Thời trang & tiện ích",
    price: 820000,
    colors: ["Xanh mint", "Tím nhạt"],
    size: "M",
    category: "Chó nhỏ",
    features: ["Thời trang cao cấp", "GPS siêu chính xác"],
    image: "/images/vong_co_thong_minh_showcase_4.png",
    rating: 4.6,
    reviews: 45,
    badge: "Thời trang",
  },
];

const filters = {
  categories: ["Chó lớn", "Chó nhỏ", "Mèo", "Thú cưng đặc biệt"],
  colors: ["Đen", "Xanh dương", "Hồng pastel", "Cam năng động", "Trắng"],
  sizes: ["S", "M", "L", "XL"],
  features: [
    "GPS siêu chính xác",
    "Theo dõi sức khỏe nâng cao",
    "Pin siêu bền (10 ngày)",
    "Thời trang cao cấp",
  ],
};

export default function ProductCatalog() {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    colors: [] as string[],
    sizes: [] as string[],
    features: [] as string[],
  });
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Thêm hàm để xử lý việc thay đổi filter
  const handleFilterChange = (
    type: keyof typeof selectedFilters, // keyof là keyword để lấy các key của object
    // type là một trong các key của selectedFilters cụ thể là 'categories', 'colors', 'sizes', hoặc 'features'
    // value là giá trị của filter mà người dùng chọn
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const currentFilters = [...prev[type]];
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [type]: currentFilters.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [type]: [...currentFilters, value],
        };
      }
    });
  };

  // Thêm hàm để xóa tất cả filter
  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      colors: [],
      sizes: [],
      features: [],
    });
  };

  // Thêm logic lọc sản phẩm dựa trên filter đã chọn
  const filteredProducts = products.filter((product) => {
    // Nếu không có filter nào được chọn, hiển thị tất cả sản phẩm
    if (
      selectedFilters.categories.length === 0 &&
      selectedFilters.colors.length === 0 &&
      selectedFilters.sizes.length === 0 &&
      selectedFilters.features.length === 0
    ) {
      return true;
    }

    // Kiểm tra từng loại filter
    const matchesCategory =
      selectedFilters.categories.length === 0 ||
      selectedFilters.categories.includes(product.category);

    const matchesColor =
      selectedFilters.colors.length === 0 ||
      product.colors.some((color) => selectedFilters.colors.includes(color));

    const matchesSize =
      selectedFilters.sizes.length === 0 ||
      selectedFilters.sizes.includes(product.size);

    const matchesFeature =
      selectedFilters.features.length === 0 ||
      product.features.some((feature) =>
        selectedFilters.features.includes(feature)
      );

    return matchesCategory && matchesColor && matchesSize && matchesFeature;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Danh Mục Sản Phẩm
        </h1>
        <p className="text-lg text-gray-600">
          Khám phá bộ sưu tập vòng cổ thông minh cho thú cưng yêu quý của bạn
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div
          className={`lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Bộ lọc</h3>
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Xóa tất cả
                </Button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-3">
                  Loại thú cưng
                </h4>
                <div className="space-y-2">
                  {filters.categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedFilters.categories.includes(category)}
                        onCheckedChange={() =>
                          handleFilterChange("categories", category)
                        }
                      />
                      <label
                        htmlFor={category}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-3">Màu sắc</h4>
                <div className="space-y-2">
                  {filters.colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox
                        id={color}
                        checked={selectedFilters.colors.includes(color)}
                        onCheckedChange={() =>
                          handleFilterChange("colors", color)
                        }
                      />
                      <label
                        htmlFor={color}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-3">Kích cỡ</h4>
                <div className="space-y-2">
                  {filters.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={size}
                        checked={selectedFilters.sizes.includes(size)}
                        onCheckedChange={() =>
                          handleFilterChange("sizes", size)
                        }
                      />
                      <label
                        htmlFor={size}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-3">
                  Tính năng nổi bật
                </h4>
                <div className="space-y-2">
                  {filters.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={selectedFilters.features.includes(feature)}
                        onCheckedChange={() =>
                          handleFilterChange("features", feature)
                        }
                      />
                      <label
                        htmlFor={feature}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? "Ẩn bộ lọc" : "Bộ lọc"}
              </Button>
              <span className="text-sm text-gray-600">
                Hiển thị {filteredProducts.length} sản phẩm
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "md:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className={`w-full object-cover ${
                      viewMode === "grid" ? "h-64" : "h-48"
                    }`}
                  />
                  <Badge className="absolute top-4 left-4 bg-pink-500 text-white">
                    {product.badge}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-pink-600 transition-colors line-clamp-2 cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-pink-600 font-medium mb-1">
                      {product.subtitle}
                    </p>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} đánh giá)
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-gray-800">
                        {formatPrice(product.price)} VNĐ
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {formatPrice(product.originalPrice)} VNĐ
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Màu sắc: {product.colors.join(", ")}
                    </p>
                    <p className="text-sm text-gray-600">
                      Danh mục: {product.category}
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
                    <Button variant="outline">Yêu cầu báo giá sỉ</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty state when no products match filters */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="text-gray-400 mb-4">
                <Filter className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Không tìm thấy sản phẩm
              </h3>
              <p className="text-gray-600 mb-4">
                Không có sản phẩm nào phù hợp với bộ lọc đã chọn
              </p>
              <Button onClick={clearAllFilters}>Xóa tất cả bộ lọc</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
