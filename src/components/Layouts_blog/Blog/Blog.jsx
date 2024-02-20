
import React from "react";
import Card from "./fragments/Card";
import Category from "./fragments/Category";
import News from "./fragments/News";

const Blog = () => {
  return (
    <div className=" px-10 py-10 my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 sm:grid-cols-1 lg:gap-10 md:gap-y-5  sm:gap-y-10">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">
      <Category></Category>
      <div className="border border-slate-700 rounded-md shadow-md max-w-lg px-10 mt-10 pb-8">
        <h1 className="text-3xl">Lates News</h1>
      <News></News>
      </div>
      </div>
    </div>
  );
};

export default Blog;
