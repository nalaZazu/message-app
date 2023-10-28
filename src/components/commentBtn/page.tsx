"use client";

import Image from "next/image";
import React from "react";
// if decleared outside the function then using the getState
// const state = useVoteStore.getState()
const CommentBtn = () => {

  return (
    <div className="bg-[#f5f6fa] p-3 m-4 rounded-md text-center">
      <button >
        <Image src="/plus.svg" alt="plus" width={18} height={18} />
      </button>
      <div className="text-[#5457b6] font-semibold text-base">12</div>
      <button >
        <Image src="/minus.svg" alt="plus" width={18} height={18} />
      </button>
    </div>
  );
};

export default CommentBtn;