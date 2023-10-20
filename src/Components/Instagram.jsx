import { useEffect, useState } from "react";
import Loading from "./Loading";

const Instagram = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("/instagram.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container mx-auto pt-12 pb-16 px-4 lg:px-8">
      <div className="pb-8 text-center">
        <h2 className="text-dark text-4xl md:text-5xl font-medium pb-2">
          Instagram
        </h2>
        <h3 className="text-gray-3">Follow us to see what's trending now!</h3>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-2">
          {images.map((item) => (
            <div
              key={item.id}
              className="h-[150px] sm:h-[250px] overflow-hidden rounded shadow hover:shadow-md"
            >
              <img className="w-full" src={item.url} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Instagram;
