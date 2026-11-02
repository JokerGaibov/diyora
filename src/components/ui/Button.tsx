import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  gold: "bg-gold text-brown hover:bg-[#e6c58d] shadow-lg shadow-black/20",
  outline: "border border-cream/40 text-cream hover:bg-cream/10 hover:border-cream/70",
  ghost: "text-cream hover:bg-cream/10",
};

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  external?: boolean;
}

export function Button({ variant = "gold", external, className, children, ...rest }: Props) {
  return (
    <a
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        styles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
