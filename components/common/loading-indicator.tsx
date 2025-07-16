import { LoaderCircle } from "lucide-react";

const LoadingIndicator = () => {
  return (
    <div className="text-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default LoadingIndicator;
