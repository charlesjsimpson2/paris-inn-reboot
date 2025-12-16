import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactBubble = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-burgundy text-white px-6 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium text-base">Contactez-nous</span>
    </Link>
  );
};
