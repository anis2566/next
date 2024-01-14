import {
  BringToFront,
  Layers3,
  LayoutDashboard,
  List,
  LucideIcon,
  PercentCircle,
  PlusCircle,
  ShoppingBasket,
} from "lucide-react";

type Nav = {
  label: string;
  Icon: LucideIcon;
  href: string;
  children?: Nav[];
};

export const SIDEBAR_NAV: Nav[] = [
  {
    label: "Dashboard",
    Icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    label: "Category",
    Icon: Layers3,
    href: "/admin/category",
    children: [
      {
        label: "Create",
        href: "/admin/category/create",
        Icon: PlusCircle,
      },
      {
        label: "List",
        href: "/admin/category/list",
        Icon: List,
      },
    ],
  },
  {
    label: "Product",
    Icon: ShoppingBasket,
    href: "/admin/product",
    children: [
      {
        label: "Create",
        href: "/admin/product/create",
        Icon: PlusCircle,
      },
      {
        label: "List",
        href: "/admin/product/list",
        Icon: List,
      },
      {
        label: "Discount",
        href: "/admin/product/discount",
        Icon: PercentCircle,
      },
    ],
  },
  {
    label: "Orders",
    Icon: BringToFront,
    href: "/admin/orders",
  },
];
