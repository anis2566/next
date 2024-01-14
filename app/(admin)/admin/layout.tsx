import Navbar from "./_components/navbar";
import SideBar from "./_components/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-7xl mx-auto relative">
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="p-2 flex-1 w-full">
          <div className="p-2 mt-14">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
