import { ToastOptions, toast } from "react-toastify";

interface IToastProps extends ToastOptions {
  message: string;
}

export const showToast = (props: IToastProps) => {
  const { message, type } = props;

  switch (type) {
    case "error":
      toast(message, { type: "error", autoClose: 500 });
      break;
    case "info":
      toast(message, { type: "info", autoClose: 1000 });
      break;
    case "success":
      toast(message, { type: "success", autoClose: 500 });
      break;
    case "warning":
      toast(message, { type: "warning", autoClose: 1000 });
      break;
    default:
      toast(message, { type: "default", autoClose: 1000 });
  }
};
