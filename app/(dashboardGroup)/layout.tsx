import Navber from "@/components/shared/Navber";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

import { getUser } from "@/service/getUser";
import DashboardSidebar from "./_components/my-post/dashboardSidebar";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getUser();

  const role = user?.data?.userProfile?.role;

  return (
    <TooltipProvider>
      <SidebarProvider>
        <DashboardSidebar role={role} />

        <div className="flex min-h-screen w-full flex-col">
          <Navber user={user} />

          <div className="border-b px-4 py-2 md:hidden">
            <SidebarTrigger />
          </div>

          <main className="flex-1">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default DashboardLayout;