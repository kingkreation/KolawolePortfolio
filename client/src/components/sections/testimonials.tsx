import { Quote, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Joshua's leadership at Gacsfel has been transformational. His ability to coordinate media, manage teams, and inspire through music is remarkable. He truly embodies purpose-driven leadership.",
    author: "Fellow Member",
    organization: "Gacsfel OOU"
  },
  {
    id: 2,
    quote: "Joshua demonstrates exceptional attention to detail in QA processes. His communication skills and technical reliability make him a valuable team member in our software development projects.",
    author: "Supervisor",
    organization: "TestarsQuarter"
  },
  {
    id: 3,
    quote: "His musical talent and sound engineering expertise have elevated our worship experience. Joshua's technical skills combined with his heart for ministry create an atmosphere of excellence.",
    author: "Church Member",
    organization: "Living Portals Christian Center"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy text-center mb-16">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-light-grey p-8 rounded-2xl shadow-lg relative">
              <div className="text-gold text-6xl absolute top-4 left-4 opacity-20">
                <Quote />
              </div>
              <p className="text-gray-700 text-lg italic mb-6 mt-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <User className="text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-navy">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
