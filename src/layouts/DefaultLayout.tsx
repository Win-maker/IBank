import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'
import { MenuSidebar } from './MenuSidebar'
import ProfileBox from '@/common/ProfileBox'
import notification from "@/assets/ion_notifcations.svg"
import LanguageBox from '@/common/LanguageBox'


const DefaultLayout = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SidebarProvider>
        <MenuSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <nav className="flex justify-between gap-4 p-3">
            <div className="text-[#17471A] font-bold text-[30px]">mini CAP</div>
            <div className="flex justify-center items-center gap-3">
              <LanguageBox/>
              <img src={notification} className="w-5 h-5" />
              <ProfileBox />
            </div>
          </nav>

          <div className="flex-1 overflow-y-auto hide-scrollbar">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}


export default DefaultLayout;
