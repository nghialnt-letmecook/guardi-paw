import { Check, X } from "lucide-react";

export default function ProductSpecifications() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Thông Số Kỹ Thuật
      </h2>
      <p className="text-gray-600 mb-8">
        GUARDi PAW được thiết kế với các thông số kỹ thuật hàng đầu, đảm bảo
        hiệu suất cao và độ bền trong mọi điều kiện sử dụng.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
            Thông số cơ bản
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Pin</span>
              <span className="font-medium text-gray-800">
                5-7 ngày sử dụng liên tục
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Thời gian sạc</span>
              <span className="font-medium text-gray-800">
                2-3 giờ (sạc đầy)
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Dung lượng pin</span>
              <span className="font-medium text-gray-800">450mAh</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Cổng sạc</span>
              <span className="font-medium text-gray-800">USB Type-C</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Kháng nước</span>
              <span className="font-medium text-gray-800">
                IP67 (chống nước, chống bụi)
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Chất liệu</span>
              <span className="font-medium text-gray-800">
                Silicone y tế, nhựa ABS cao cấp
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
            Kích thước & Trọng lượng
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Kích thước (S)</span>
              <span className="font-medium text-gray-800">
                Dài 25cm, rộng 1.5cm
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Kích thước (M)</span>
              <span className="font-medium text-gray-800">
                Dài 35cm, rộng 2cm
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Kích thước (L)</span>
              <span className="font-medium text-gray-800">
                Dài 45cm, rộng 2.5cm
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Trọng lượng (S)</span>
              <span className="font-medium text-gray-800">25g</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Trọng lượng (M)</span>
              <span className="font-medium text-gray-800">35g</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Trọng lượng (L)</span>
              <span className="font-medium text-gray-800">45g</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
          Kết nối & Cảm biến
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Bluetooth</span>
              <span className="font-medium text-gray-800">Bluetooth 5.2</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">GPS</span>
              <span className="font-medium text-gray-800">GPS + GLONASS</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">WiFi</span>
              <span className="font-medium text-gray-800">2.4GHz</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Cảm biến nhịp tim</span>
              <span className="font-medium text-gray-800">
                Optical HR Sensor
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Gia tốc kế</span>
              <span className="font-medium text-gray-800">
                3-axis accelerometer
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Cảm biến nhiệt độ</span>
              <span className="font-medium text-gray-800">
                Độ chính xác ±0.5°C
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
          Tương thích
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-3">Hệ điều hành</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">iOS 12.0 trở lên</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Android 8.0 trở lên</span>
              </li>
              <li className="flex items-center">
                <X className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-sm">Windows Phone</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-3">Loại thú cưng</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Chó (mọi kích cỡ)</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Mèo (mọi kích cỡ)</span>
              </li>
              <li className="flex items-center">
                <X className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-sm">Thú cưng nhỏ khác</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-3">Môi trường</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Trong nhà</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Ngoài trời</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Dưới mưa nhẹ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          Lưu ý sử dụng
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-sm text-blue-700">
              Mặc dù có khả năng chống nước IP67, không nên để thú cưng bơi lội
              trong thời gian dài với vòng cổ.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-sm text-blue-700">
              Sạc đầy pin trước khi sử dụng lần đầu và không nên để pin cạn hoàn
              toàn.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-sm text-blue-700">
              Kiểm tra độ vừa vặn của vòng cổ thường xuyên, đặc biệt với thú
              cưng đang trong giai đoạn phát triển.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-sm text-blue-700">
              Độ chính xác của GPS có thể bị ảnh hưởng trong các tòa nhà cao
              tầng hoặc khu vực có tín hiệu yếu.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
