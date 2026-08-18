import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type MobileWordmarkHandle = { destroy: () => void };

type Box = { left: number; top: number; width: number };

function boxFor(element: HTMLElement): Box {
  const rect = element.getBoundingClientRect();
  return { left: rect.left, top: rect.top, width: rect.width };
}

export function createMobileWordmarkAnimation(): MobileWordmarkHandle | null {
  if (window.innerWidth >= 768) return null;

  const source = document.querySelector<HTMLElement>('[data-anim="mobile-wordmark"]');
  const target = document.querySelector<HTMLElement>('[data-anim="mobile-wordmark-target"]');
  if (!source || !target) return null;

  const from = boxFor(source);
  const to = boxFor(target);

  gsap.set(source, {
    position: "fixed",
    left: from.left,
    top: from.top,
    width: from.width,
    height: "auto",
    margin: 0,
    zIndex: 61,
  });

  const apply = (progress: number) => {
    const eased = gsap.parseEase("power2.inOut")(progress);
    gsap.set(source, {
      left: gsap.utils.interpolate(from.left, to.left, eased),
      top: gsap.utils.interpolate(from.top, to.top, eased),
      width: gsap.utils.interpolate(from.width, to.width, eased),
    });
  };

  apply(0);
  let menuOpen = false;
  const trigger = ScrollTrigger.create({
    start: 0,
    end: 280,
    scrub: 0.45,
    onUpdate: (self) => {
      if (!menuOpen) apply(self.progress);
    },
  });

  const handleMenuToggle = (event: Event) => {
    menuOpen = Boolean((event as CustomEvent<boolean>).detail);
    apply(menuOpen ? 1 : trigger.progress);
  };
  window.addEventListener("mobile-menu-toggle", handleMenuToggle);

  return {
    destroy: () => {
      trigger.kill();
      window.removeEventListener("mobile-menu-toggle", handleMenuToggle);
      gsap.set(source, { clearProps: "position,left,top,width,height,margin,zIndex" });
    },
  };
}
