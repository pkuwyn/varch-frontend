import React from "react";
import { useLocation } from "react-router-dom";
export default function LearnPage(props) {
  const { search } = useLocation();
  const urlSearch = new URLSearchParams(search);
  const vtourId = urlSearch.get("vtourId");
  const vtourName = urlSearch.get("name");

  return (
    <>
      <h2>LearnPage</h2>
      {vtourId ? (
        <h4>vtourId : {vtourId}</h4>
      ) : vtourName ? (
        <h4>VtourName: {vtourName}</h4>
      ) : null}
    </>
  );
}
