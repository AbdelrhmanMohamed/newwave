"use client";

import * as React from "react";
import { Check, ChevronUp, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Career } from "@/types/career";

type CareerMenuProps = {
  careers: Career[];
  onSelect: (careerId: number) => void;
  initialValue?: string;
  disabled?: boolean;
};

export function CareerMenu({
  careers,
  onSelect,
  initialValue,
  disabled,
}: CareerMenuProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(initialValue || "");

  React.useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <button className="w-full bg-transparent border-b-2 border-neutral-700 py-2 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500 flex justify-between px-1">
          <span className="text-neutral-500">
            {value
              ? careers.find((career) => career.id.toString() === value)?.title
              : "Select career..."}
          </span>
          {open ? (
            <ChevronUp className="ml-2 h-4 w-4 text-neutral-500" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4 text-neutral-500" />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="popover-content-width-full p-0" align="start">
        <Command className="w-full">
          <CommandInput placeholder="Search career..." />
          <CommandList>
            <CommandEmpty>No career found.</CommandEmpty>
            <CommandGroup>
              {careers.map((career) => (
                <CommandItem
                  key={career.id}
                  value={career.id.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    onSelect(parseInt(currentValue, 10));
                  }}
                  className="text-neutral-500 hover:!bg-primary rounded-none"
                >
                  {career.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === career.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
