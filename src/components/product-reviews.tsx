import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "15/05/2025",
    title: "Sản phẩm tuyệt vời!",
    content:
      "Tôi đã sử dụng vòng cổ này cho bé Golden của mình được 2 tháng và rất hài lòng. GPS cực kỳ chính xác, pin trâu và app rất dễ sử dụng. Đặc biệt tính năng cảnh báo khi bé ra khỏi vùng an toàn đã cứu bé khỏi việc đi lạc một lần!",
    verified: true,
  },
  {
    id: 2,
    name: "Trần Hoàng",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "10/05/2025",
    title: "Rất hữu ích",
    content:
      "Sản phẩm tốt, giúp tôi theo dõi được sức khỏe và vị trí của mèo. Trừ 1 sao vì đôi lúc kết nối Bluetooth hơi chậm.",
    verified: true,
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "05/05/2025",
    title: "Đáng đồng tiền bát gạo",
    content:
      "Ban đầu tôi hơi ngần ngại vì giá không rẻ, nhưng sau khi dùng thì thấy rất đáng tiền. Chất lượng tốt, pin dùng được cả tuần, và tính năng theo dõi sức khỏe giúp tôi phát hiện sớm khi chó bị sốt.",
    verified: true,
  },
];

export default function ProductReviews() {
  const averageRating = 4.8;
  const totalReviews = 124;
  const ratingDistribution = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Đánh Giá Từ Khách Hàng
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Rating Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-gray-800 mb-2">
              {averageRating}
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Dựa trên {totalReviews} đánh giá
            </div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center space-x-2">
                <div className="text-sm text-gray-600 w-6">{item.stars}★</div>
                <Progress value={item.percentage} className="h-2" />
                <div className="text-sm text-gray-600 w-8">
                  {item.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Highlights */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Điểm nổi bật từ đánh giá
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <h4 className="font-medium text-green-800 mb-2">
                Người dùng yêu thích
              </h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>GPS chính xác, dễ dàng tìm thấy thú cưng</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Pin bền, sử dụng được nhiều ngày</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Ứng dụng trực quan, dễ sử dụng</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
              <h4 className="font-medium text-orange-800 mb-2">
                Điểm cần cải thiện
              </h4>
              <ul className="space-y-2 text-sm text-orange-700">
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Kết nối Bluetooth đôi khi không ổn định</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Giá thành hơi cao so với một số sản phẩm khác</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Cần thêm tùy chọn màu sắc</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Đánh giá chi tiết
        </h3>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg p-6"
          >
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-800">{review.name}</h4>
                    {review.verified && (
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                        Đã mua hàng
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <h5 className="font-medium text-gray-800 mb-2">
                  {review.title}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline">Xem tất cả đánh giá</Button>
      </div>
    </div>
  );
}
