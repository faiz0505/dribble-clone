import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import Link from "next/link";

export default function CustomSelect({ options, ...props }) {
  return (
    <Select {...props} className="">
      {options.map((item, i) => {
        return (
          <SelectItem key={i} textValue={item.title}>
            <Link href={`/category/${item.toLowerCase()}`}>{item}</Link>
          </SelectItem>
        );
      })}
    </Select>
  );
}
