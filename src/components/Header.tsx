import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

import avatarImage from "@/assets/images/avatar.webp";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="relative block px-3 py-2 transition hover:text-teal-400">
        {children}
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-400/40" />
      </a>
    </li>
  );
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 bg-zinc-800/90 text-zinc-200 space-x-5 ring-1 ring-white/10">
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Projects</NavItem>
        <NavItem href="#">Work experience</NavItem>
      </ul>
    </nav>
  );
}

function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="block py-2">
        {children}
      </a>
    </li>
  );
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full px-4 py-2 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl  p-8 ring-1  duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in bg-zinc-900 ring-zinc-800">
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton
            aria-label="Close menu"
            className="-m-1 p-1">
            <XMarkIcon className="h-6 w-6 text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-400">Navigation</h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base divide-zinc-100/5 text-zinc-300">
            <MobileNavItem href="#">About</MobileNavItem>
            <MobileNavItem href="#">Projects</MobileNavItem>
            <MobileNavItem href="#">Work experience</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  );
}

function AvatarContainer({
  className = "",
  ...props
}) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full p-0.5 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 ring-white/10"
      )}
      {...props}
    />
  );
}

function Avatar({
  large = false,
  className = "",
  ...props
}) {
  return (
    <a
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}>
      <img
        src={avatarImage.src}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
      />
    </a>
  );
}

export default function Header() {
  return (
    <header className="mx-auto max-w-2xl py-5 px-4 pointer-events-none relative z-50 flex flex-none flex-col lg:max-w-5xl lg:px-10 lg:py-10">
      <div className="flex items-center">
        <div className="top-[var(--avatar-top,theme(spacing.3))] !w-fit">
          <div className="relative">
            <AvatarContainer
              className="absolute left-0 top-3 origin-left transition-opacity"
              style={{
                opacity: "var(--avatar-border-opacity, 0)",
                transform: "var(--avatar-border-transform)",
              }}
            />
            <Avatar className="block h8 w-8 origin-left" />
          </div>
        </div>
        <div className="flex flex-1 justify-end md:justify-center">
          <MobileNavigation className="pointer-events-auto md:hidden" />
          <DesktopNavigation className="pointer-events-auto hidden md:block" />
        </div>
        <div></div>
      </div>
    </header>
  );
}
