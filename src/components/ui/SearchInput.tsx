"use client";
import React from "react";
import { Input } from "./input";
import { Search } from "lucide-react";
import { cn } from "~/lib/utils";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, placeholder, onChange }, ref) => {
    return (
      <div
        className={cn(
          "relative flex justify-center items-center border px-2 sm:min-w-96 w-full rounded-sm ",
          className
        )}
      >
        <Search className="size-5 text-gray-500" />
        <Input
          className="w-full border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
export { SearchInput };
