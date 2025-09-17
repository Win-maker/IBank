import DefaultLayout from "@/layouts/DefaultLayout";
import LoanView from "@/modules/Loan/LoanView";
import LoanApplicantView from "@/modules/LoanApplicant/LoanApplicantView";
import DetailMasterDataView from "@/modules/MasterData/chunk/DetailMasterDataView";
import EditMasterData from "@/modules/MasterData/chunk/EditMasterData";
import MasterDataView from "@/modules/MasterData/MasterDataView";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/loanApplicant",
          element: <LoanApplicantView />,
        },
        {
          path: "/masterData",
          element: <MasterDataView />,
        },
        {
          path: "/loan",
          element: <LoanView />,
        },
        {
          path: "/masterData/detail",
          element: <DetailMasterDataView />,
        },
        {
          path: "/masterData/edit",
          element: <EditMasterData/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
