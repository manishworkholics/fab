import { X, AlertTriangle } from "lucide-react";
import Button from "./Buttons";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  variant?: "danger" | "warning" | "info";
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isLoading = false,
  variant = "danger",
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  const variantStyles = {
    danger: {
      icon: "text-red-600",
      iconBg: "bg-red-100",
      button: "bg-red-600 hover:bg-red-700",
    },
    warning: {
      icon: "text-orange-600",
      iconBg: "bg-orange-100",
      button: "bg-orange-600 hover:bg-orange-700",
    },
    info: {
      icon: "text-blue-600",
      iconBg: "bg-blue-100",
      button: "bg-blue-600 hover:bg-blue-700",
    },
  };

  const styles = variantStyles[variant];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4">
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-full ${styles.iconBg}`}>
                <AlertTriangle className={`w-6 h-6 ${styles.icon}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              disabled={isLoading}
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pb-4">
            <p className="text-sm text-gray-600 ml-14">
              {message}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 rounded-b-lg">
            <Button
              text={cancelText}
              handleClick={onClose}
              background="bg-white"
              color="text-gray-700"
              styles="border border-gray-300 hover:bg-gray-50"
              disabled={isLoading}
            />
            <Button
              text={confirmText}
              handleClick={onConfirm}
              background={styles.button}
              color="text-white"
              isLoading={isLoading}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}

