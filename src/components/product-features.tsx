import Image from "next/image";
import {
  Check,
  Heart,
  MapPin,
  Shield,
  BatteryFull,
  Smartphone,
} from "lucide-react";

export default function ProductFeatures() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Tính Năng Vòng Cổ Thông Minh
      </h2>
      <p className="text-gray-600 mb-8">
        Vòng cổ thông minh GUARDi PAW được trang bị những công nghệ tiên tiến
        nhất để theo dõi sức khỏe và vị trí của thú cưng, mang đến sự an tâm
        tuyệt đối cho chủ nuôi.
      </p>

      {/* Health Monitoring */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Theo Dõi Sức Khỏe Toàn Diện
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-red-100 rounded-full p-2 mt-1">
                <Heart className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  Đo nhịp tim chính xác
                </h4>
                <p className="text-sm text-gray-600">
                  Cảm biến tiên tiến theo dõi nhịp tim của thú cưng 24/7, phát
                  hiện sớm các bất thường.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-full p-2 mt-1">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  Đếm bước chân & theo dõi hoạt động
                </h4>
                <p className="text-sm text-gray-600">
                  Đảm bảo thú cưng của bạn vận động đủ mỗi ngày với tính năng
                  đếm bước chân và phân tích mức độ hoạt động.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  Phát hiện mệt mỏi & bất thường
                </h4>
                <p className="text-sm text-gray-600">
                  Thuật toán AI phân tích hành vi để phát hiện sớm các dấu hiệu
                  mệt mỏi hoặc bất thường trong sinh hoạt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 max-w-md mx-auto">
          <Image
            src="/images/vong_co_tim.webp"
            alt="Theo dõi sức khỏe toàn diện"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* GPS Tracking */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="bg-gray-100 rounded-xl p-6 md:order-first order-last max-w-md mx-auto">
          <Image
            src="/images/vong_co_gps.webp"
            alt="GPS theo dõi vị trí"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            GPS Theo Dõi Vị Trí Thời Gian Thực
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <MapPin className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Định vị chính xác</h4>
                <p className="text-sm text-gray-600">
                  Công nghệ GPS tiên tiến cho phép định vị chính xác vị trí của
                  thú cưng trong phạm vi 2-3 mét.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  Theo dõi lịch sử di chuyển
                </h4>
                <p className="text-sm text-gray-600">
                  Xem lại toàn bộ hành trình di chuyển của thú cưng trong 7 ngày
                  qua trên bản đồ chi tiết.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2 mt-1">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  Chia sẻ vị trí với gia đình
                </h4>
                <p className="text-sm text-gray-600">
                  Dễ dàng chia sẻ vị trí của thú cưng với các thành viên trong
                  gia đình để cùng theo dõi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geo-fencing */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Cảnh Báo Ra Khỏi Vùng An Toàn (Geo-fencing)
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-full p-2 mt-1">
                <Shield className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  Thiết lập vùng an toàn
                </h4>
                <p className="text-sm text-gray-600">
                  Dễ dàng tạo các vùng an toàn tùy chỉnh trên bản đồ để đảm bảo
                  thú cưng luôn ở trong khu vực an toàn.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-full p-2 mt-1">
                <Check className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Cảnh báo tức thời</h4>
                <p className="text-sm text-gray-600">
                  Nhận thông báo ngay lập tức khi thú cưng rời khỏi vùng an toàn
                  đã thiết lập.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-full p-2 mt-1">
                <Check className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  Lịch trình thông minh
                </h4>
                <p className="text-sm text-gray-600">
                  Thiết lập các vùng an toàn khác nhau theo thời gian trong ngày
                  hoặc các ngày trong tuần.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 max-w-md mx-auto">
          <Image
            src="/images/vong_co_zone.webp"
            alt="Cảnh báo ra khỏi vùng an toàn"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Other Features */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
            <BatteryFull className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Pin Siêu Bền</h3>
          <p className="text-sm text-gray-600">
            Thời lượng pin lên đến 5-7 ngày với một lần sạc, đảm bảo theo dõi
            liên tục không gián đoạn.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Chống Nước IP67</h3>
          <p className="text-sm text-gray-600">
            Thiết kế chống nước IP67 cho phép thú cưng thoải mái vui chơi dưới
            mưa hoặc bơi lội nhẹ.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
            <Smartphone className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">
            Kết Nối Đa Nền Tảng
          </h3>
          <p className="text-sm text-gray-600">
            Ứng dụng tương thích với cả iOS và Android, dễ dàng kết nối qua
            Bluetooth và WiFi.
          </p>
        </div>
      </div>
    </div>
  );
}
