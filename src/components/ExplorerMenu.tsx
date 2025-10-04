import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ShoppingCart, IdCard, Handshake, FolderOpen, Mail, Newspaper } from "lucide-react";

interface ExplorerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExplorerMenu = ({ isOpen, onClose }: ExplorerMenuProps) => {
  const menuItems = [
    { icon: ShoppingCart, label: "BROWSE CATALOG", emoji: "🛒" },
    { icon: IdCard, label: "COMPANY PROFILE", emoji: "🪪" },
    { icon: Handshake, label: "PARTNER PROGRAM", emoji: "🤝" },
    { icon: FolderOpen, label: "RESOURCE CENTER", emoji: "🗄️" },
    { icon: Mail, label: "CONTACT SUPPORT", emoji: "📩" },
    { icon: Newspaper, label: "NEWS & UPDATES", emoji: "🗞️" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-wider">EXPLORER</DialogTitle>
        </DialogHeader>
        <nav className="space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 group"
              onClick={() => {
                // Handle navigation here
                console.log(`Navigate to ${item.label}`);
                onClose();
              }}
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm font-semibold tracking-wider text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
};

export default ExplorerMenu;
