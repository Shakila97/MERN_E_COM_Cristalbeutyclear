"use client";
import * as React from "react";
import { cva } from "class-variance-authority"; // Optional for variants

const Sheet = ({ 
  children,
  side = "right",
  open,
  onOpenChange,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(open);

  const sideClasses = {
    top: "inset-x-0 top-0 border-b",
    bottom: "inset-x-0 bottom-0 border-t",
    left: "inset-y-0 left-0 border-r",
    right: "inset-y-0 right-0 border-l",
  };

  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (child.type === SheetTrigger) {
          return React.cloneElement(child, {
            onClick: () => setIsOpen(!isOpen),
          });
        }
        if (child.type === SheetContent) {
          return React.cloneElement(child, {
            isOpen,
            onClose: () => setIsOpen(false),
            side,
            className,
            ...props,
          });
        }
        return child;
      })}
    </div>
  );
};

const SheetTrigger = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const SheetContent = ({
  children,
  isOpen,
  onClose,
  side = "right",
  className,
  ...props
}) => {
  const sideClasses = {
    top: "animate-slide-down w-full",
    bottom: "animate-slide-up w-full",
    left: "animate-slide-left h-full",
    right: "animate-slide-right h-full",
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed z-50 bg-background shadow-lg ${sideClasses[side]} ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export { Sheet, SheetTrigger, SheetContent };