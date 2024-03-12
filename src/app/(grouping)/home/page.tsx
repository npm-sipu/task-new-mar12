import { Text } from "@/components/Common/Text";
import React from "react";

export default function home() {
  return (
    <div className='container h-[70dvh] flex justify-center items-center'>
      <div className='max-w-md'>
        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          cupiditate minus porro sed iste doloremque odit non perferendis, nemo
          distinctio in quisquam veritatis!
        </Text>
      </div>
    </div>
  );
}
