import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  ShoppingCart, 
  BookOpen, 
  Plane, 
  Home, 
  Truck, 
  Users, 
  Layers 
} from "lucide-react";

const solutions = [
  { icon: Building2, title: "Rental Management Platform", desc: "End-to-end booking and fleet management." },
  { icon: ShoppingCart, title: "E-commerce Marketplace", desc: "Multi-vendor scalable retail solutions." },
  { icon: BookOpen, title: "E-learning Management System", desc: "Engaging virtual classrooms & course delivery." },
  { icon: Plane, title: "Travel Booking Platform", desc: "Seamless itinerary and reservation engines." },
  { icon: Home, title: "Real Estate Portal", desc: "Property listings, CRM, and agent tools." },
  { icon: Truck, title: "Logistics & Fleet Management", desc: "Real-time tracking and supply chain tools." },
  { icon: Users, title: "Corporate HR Portal", desc: "Employee onboarding, payroll, and culture." },
  { icon: Layers, title: "Multi-vendor SaaS Platform", desc: "Robust architecture for SaaS businesses." },
];

export default function Solutions() {
  return (
    <section className="py-24 bg-[#f8f9fa]" id="product">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Pre-packaged software solutions.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We employ an agile model to accelerate time to value — choose from ready-to-deploy industry solutions customized to your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 flex flex-col items-start text-left gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f8f9fa] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <sol.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}