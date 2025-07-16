import { LoaderCircle } from "lucide-react";

const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default LoadingIndicator;
