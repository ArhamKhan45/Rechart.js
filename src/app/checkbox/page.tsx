"use client";

import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Check } from "lucide-react";

const CheckboxDemo = () => (
  <form>
    <div className="flex items-center m-5">
      <Checkbox.Root
        className={clsx(
          "border-2 border-black hover:bg-violet3 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-white  outline-none  ",
          "data-[state=checked]:bg-blue-500"
        )}
        id="c1"
      >
        <Checkbox.Indicator className="text-white">
          <Check size={10} strokeWidth={5} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className="pl-[15px] text-[20px] leading-none text-white"
        htmlFor="c1"
      >
        Accept terms and conditions.
      </label>
    </div>
  </form>
);

export default CheckboxDemo;
