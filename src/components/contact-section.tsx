import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle, FileText } from "lucide-react"

const faqs = [
  {
    question: "Thời lượng pin của vòng cổ là bao lâu?",
    answer:
      "Vòng cổ Smart Collar có thể hoạt động liên tục từ 7-10 ngày tùy theo mức độ sử dụng. Thời gian sạc đầy chỉ mất 2-3 giờ.",
  },
  {
    question: "Làm thế nào để cài đặt ứng dụng?",
    answer:
      "Bạn có thể tải ứng dụng Smart Collar từ App Store hoặc Google Play. Sau đó làm theo hướng dẫn trong ứng dụng để kết nối với vòng cổ.",
  },
  {
    question: "Vòng cổ có chống nước không?",
    answer: "Có, tất cả sản phẩm của chúng tôi đều có chuẩn chống nước IPX7, an toàn khi thú cưng tắm hoặc đi mưa.",
  },
  {
    question: "Chính sách bảo hành như thế nào?",
    answer: "Chúng tôi cung cấp bảo hành 12 tháng cho tất cả sản phẩm, bao gồm lỗi phần cứng và phần mềm.",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Liên Hệ & Hỗ Trợ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn và thú cưng yêu quý. Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Gửi tin nhắn cho chúng tôi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                  <Input placeholder="Nhập họ và tên của bạn" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                  <Input placeholder="Nhập số điện thoại" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <Input type="email" placeholder="Nhập địa chỉ email" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
                <Input placeholder="Chủ đề tin nhắn" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung *</label>
                <Textarea placeholder="Mô tả chi tiết vấn đề hoặc câu hỏi của bạn..." rows={5} />
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600" size="lg">
                Gửi tin nhắn
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@smartcollar.vn</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hotline</h3>
                    <p className="text-gray-600">1900-1234</p>
                    <p className="text-sm text-gray-500">Hỗ trợ 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Văn phòng</h3>
                    <p className="text-gray-600">TP. Hồ Chí Minh</p>
                    <p className="text-sm text-gray-500">Quận 1, TP.HCM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Giờ làm việc</h3>
                    <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                    <p className="text-gray-600">Thứ 7 - CN: 9:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button className="flex-1" variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat trực tiếp
              </Button>
              <Button className="flex-1" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Tài liệu hướng dẫn
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">Câu Hỏi Thường Gặp</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Xem tất cả câu hỏi thường gặp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
