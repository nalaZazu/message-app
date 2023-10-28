"use client";
import React from "react";
import CommentReply from "@/components/commentReply/page";
import Header from "@/components/Header/page";
import MessageComment from "@/components/messageComment/page";
import ReactGA from 'react-ga';
// const TRACKING_ID = "UA-212738948-3"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);
export default function Home() {

  return (
    <div>
      <Header />
      <div className="{rubik.className} pt-8 mb-8">
        <MessageComment />
        <CommentReply />
      </div>
    </div>
  );
}
