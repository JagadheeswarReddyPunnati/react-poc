import Home from "../views/home/Home"
import Dashboard from "../views/dashboard/Dashboard"
import ContractorSearch from "../views/contractor-search/ContractorSearch"
import BPOSearch from "../views/bpo-search/BPOSearch"
import Reports from "../views/reports/Reports"
import UserGuide from "../views/user-guide/UserGuide"
import PreAward from "../views/pre-award/PreAward"
import PostAward from "../views/post-award/PostAaward"
import SystemAdmin from "../views/system-admin/SystemAdmin"
import LogOff from "../views/logoff/LogOff";


const context = "/";
const routes = [
  { path: context, exact: true, name: "Home", component: Home },
   {
    path: context + "dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: context + "contractor-search",
    exact: true,
    name: "ContractorSearch",
    component: ContractorSearch
  },
  {
    path: context + "bpo-search",
    exact: true,
    name: "BPOSearch",
    component: BPOSearch
  },
   {
    path: context + "reports",
    exact: true,
    name: "Reports",
    component: Reports
  },
   {
    path: context + "user-guide",
    exact: true,
    name: "UserGuide",
    component: UserGuide
  },
  {
    path: context + "pre-award",
    exact: true,
    name: "PreAward",
    component: PreAward
  },
  {
    path: context + "post-award",
    exact: true,
    name: "PostAward",
    component: PostAward
  },
  {
    path: context + "system-admin",
    exact: true,
    name: "SystemAdmin",
    component: SystemAdmin
  },
  {
    path: context + "logoff",
    exact: true,
    name: "LogOff",
    component: LogOff
  }
];

export default routes;
