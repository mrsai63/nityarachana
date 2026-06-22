import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919966080999"
        target="_blank" rel="noopener noreferrer"
        className="h-14 w-14 rounded-full bg-[#25D366] grid place-items-center text-white shadow-elegant hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+919966080999"
        className="h-14 w-14 rounded-full bg-gradient-accent grid place-items-center text-white shadow-glow hover:scale-105 transition"
        aria-label="Call"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}