"use client";
import { FC, useEffect, useState } from "react";

interface IndicatorProps {}

const Indicator: FC<IndicatorProps> = ({}) => {
  const [data, setData] = useState<{
    name: string;
    status: string;
  }>({
    name: "",
    status: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make the GET request when the component mounts
    fetch("https://status.openai.com/api/v2/components.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData({
          name: responseData.components[0].name,
          status: responseData.components[0].status,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <span className="animate-pulse relative flex h-3 w-3 align-top">
        <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></span>
      </span>
    );
  }

  return (
    <>
      {data.status !== "operational" ? (
        <span className="relative flex h-3 w-3 align-top">
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      ) : (
        <span className="relative flex h-3 w-3 align-top">
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
    </>
  );
};

export default Indicator;
