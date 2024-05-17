"use clinet";
import axios from "axios";
import { useEffect, useState } from "react";

const VisitorList: React.FC = () => {
  const [visitorList, setVisitorList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/visitorList");

        const visitorsWithLocation = await Promise.all(
          response.data.visitorList.map(async (visitor: any) => {
            const locationResponse = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${visitor.latitude}+${visitor.longitude}&key=8a3f5e0784a942f0bfc8b2b2712261bc`
            );

            return {
              ...visitor,
              location: locationResponse.data.results[0].formatted,
            };
          })
        );

        setVisitorList(visitorsWithLocation);
      } catch (error) {
        console.error("Error fetching chat bot history:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Visitor List</h1>
      <table className="min-w-full table-auto bg-red-500 rounded-lg overflow-hidden border border-spacing-4">
        <thead>
          <tr>
            <th className="p-2">Latitude</th>
            <th className="p-2">Longitude</th>
            <th className="p-2">Location</th>
            <th className="p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {visitorList &&
            Array.isArray(visitorList) &&
            visitorList.map((visitor: any) => (
              <tr key={visitor._id}>
                <td className="p-2">{visitor.latitude}</td>
                <td className="p-2">{visitor.longitude}</td>
                <td className="p-2">
                  {visitor.location ? visitor.location : "Loading location..."}
                </td>
                <td className="p-2">
                  {new Date(visitor.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorList;
