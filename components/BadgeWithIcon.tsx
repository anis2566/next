import { LucideIcon } from "lucide-react";

interface BadgeWithIconProps {
  Icon: LucideIcon;
  value: number;
}

const BadgeWithIcon = ({ Icon, value }: BadgeWithIconProps) => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center p-1 text-sm font-medium text-center text-white hover:bg-slate-200 dark:hover:bg-transparent rounded-lg  "
    >
      <Icon className="text-black dark:text-white" />
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
        {value}
      </div>
    </button>
  );
};

export default BadgeWithIcon;
