import { Users, Award, Lightbulb, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Tầm Nhìn & Sứ Mệnh
          </h2>
          <p className="text-xl text-pink-600 font-medium mb-6">
            Công nghệ vì sự sống khỏe mạnh và hạnh phúc của thú cưng
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Startup công nghệ Việt, hợp tác với các chuyên gia phần cứng và kỹ
            sư IT trẻ. Định vị là thương hiệu hiện đại – nhân văn – bền vững,
            hướng đến cộng đồng yêu thú cưng văn minh và gắn kết.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Đổi Mới
            </h3>
            <p className="text-gray-600">
              Ứng dụng công nghệ tiên tiến để tạo ra những sản phẩm thông minh,
              hữu ích
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cộng Đồng
            </h3>
            <p className="text-gray-600">
              Xây dựng cộng đồng yêu thú cưng văn minh, chia sẻ kinh nghiệm chăm
              sóc
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Chất Lượng
            </h3>
            <p className="text-gray-600">
              Cam kết chất lượng cao, bền vững và an toàn cho thú cưng yêu quý
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Bền Vững
            </h3>
            <p className="text-gray-600">
              Phát triển bền vững, thân thiện với môi trường và xã hội
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Thông Điệp Của Chúng Tôi
            </h3>
            <blockquote className="text-lg lg:text-xl text-gray-700 italic leading-relaxed">
              &quot;Hãy để công nghệ chăm sóc người bạn nhỏ của bạn – như cách
              bạn yêu thương chúng mỗi ngày.&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
