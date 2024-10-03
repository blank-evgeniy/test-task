import { createPortal } from "react-dom";

interface PortalProps {
  container?: HTMLElement;
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({
  children,
  container = document.body,
}) => {
  return createPortal(children, container);
};

export default Portal;
