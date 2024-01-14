const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-200/40">
      {children}
    </div>
  );
};

export default layout;
