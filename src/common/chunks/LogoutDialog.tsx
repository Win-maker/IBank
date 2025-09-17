import { ReactNode } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


type LogoutDialogProps = {
  children: ReactNode;
};

const LogoutDialog = ({ children }: LogoutDialogProps) => {


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-[400px] w-[90vw] rounded-sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Log Out</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to log out?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive active:bg-destructive"
           
          >
           Log Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutDialog;