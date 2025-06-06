import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Thời lượng pin của vòng cổ thông minh là bao lâu?",
    answer:
      "Vòng cổ GUARDi PAW có thể hoạt động liên tục từ 5-7 ngày tùy theo mức độ sử dụng. Với sử dụng bình thường (theo dõi GPS và sức khỏe), pin có thể kéo dài 5-6 ngày. Thời gian sạc đầy chỉ mất 2-3 giờ với cáp USB-C đi kèm.",
  },
  {
    question:
      "Vòng cổ có chống nước không? Thú cưng có thể tắm với vòng cổ không?",
    answer:
      "Có, vòng cổ GUARDi PAW có chuẩn chống nước IPX7, an toàn khi thú cưng tắm, đi mưa hoặc chơi nước. Tuy nhiên, không nên để thú cưng bơi lội trong thời gian dài với vòng cổ để đảm bảo tuổi thọ sản phẩm.",
  },
  {
    question: "Làm thế nào để cài đặt và sử dụng ứng dụng?",
    answer:
      "Bạn có thể tải ứng dụng GUARDi PAW miễn phí từ App Store (iOS) hoặc Google Play (Android). Sau khi tải về, làm theo hướng dẫn trong ứng dụng để kết nối với vòng cổ qua Bluetooth. Quá trình thiết lập chỉ mất 5-10 phút.",
  },
  {
    question: "Vòng cổ có phù hợp với mọi kích cỡ chó mèo không?",
    answer:
      "GUARDi PAW có 3 kích cỡ: S (dưới 5kg), M (5-15kg), và L (15-30kg). Vòng cổ được thiết kế với dây đeo có thể điều chỉnh để phù hợp với chu vi cổ của thú cưng. Bạn nên đo chu vi cổ thú cưng trước khi đặt hàng để chọn size phù hợp.",
  },
  {
    question: "Độ chính xác của GPS như thế nào?",
    answer:
      "GPS của GUARDi PAW có độ chính xác trong phạm vi 2-3 mét trong điều kiện tín hiệu tốt. Sản phẩm sử dụng công nghệ GPS + GLONASS để đảm bảo định vị chính xác nhất. Trong các tòa nhà cao tầng hoặc khu vực có tín hiệu yếu, độ chính xác có thể giảm xuống 5-10 mét.",
  },
  {
    question: "Có thể theo dõi nhiều thú cưng trên một ứng dụng không?",
    answer:
      "Có, ứng dụng GUARDi PAW cho phép bạn theo dõi tối đa 5 thú cưng trên một tài khoản. Bạn có thể dễ dàng chuyển đổi giữa các thú cưng và xem thông tin riêng biệt của từng bé.",
  },
  {
    question: "Chính sách bảo hành như thế nào?",
    answer:
      "GUARDi PAW cung cấp bảo hành 12 tháng cho tất cả sản phẩm, bao gồm lỗi phần cứng và phần mềm. Ngoài ra, chúng tôi có chính sách đổi trả trong vòng 7 ngày đầu tiên nếu bạn không hài lòng với sản phẩm.",
  },
  {
    question: "Có cần trả phí hàng tháng để sử dụng GPS không?",
    answer:
      "Không, GUARDi PAW không tính phí hàng tháng cho việc sử dụng GPS. Tất cả các tính năng cơ bản đều miễn phí. Chúng tôi có gói Premium với các tính năng nâng cao như lưu trữ dữ liệu lâu hơn và báo cáo chi tiết, nhưng hoàn toàn tùy chọn.",
  },
];

export default function ProductFAQ() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Câu Hỏi Thường Gặp
      </h2>
      <p className="text-gray-600 mb-8">
        Dưới đây là những câu hỏi thường gặp về vòng cổ thông minh GUARDi PAW.
        Nếu bạn có thắc mắc khác, đừng ngần ngại liên hệ với chúng tôi.
      </p>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          Vẫn có thắc mắc?
        </h3>
        <p className="text-blue-700 mb-4">
          Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng giải đáp mọi
          thắc mắc của bạn.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:1900-1234"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition-colors"
          >
            Gọi hotline: 1900-1234
          </a>
          <a
            href="mailto:support@guardipaw.vn"
            className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg text-center hover:bg-blue-50 transition-colors"
          >
            Email: support@guardipaw.vn
          </a>
        </div>
      </div>
    </div>
  );
}
