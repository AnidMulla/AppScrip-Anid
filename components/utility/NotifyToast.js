import { toast } from "react-toastify";

export function NotifyToast() {
  return () => toast.info("Coming SOON!", { theme: "colored" });
}
