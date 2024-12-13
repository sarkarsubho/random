
export const placeholderImage = "https://via.placeholder.com/150"; // Replace with your placeholder image URL

const ImageWithFallback = ({ src, alt }) => {
  const handleError = (e) => {
    e.target.src = placeholderImage;
  };

  return <img src={src} alt={alt} onError={handleError} />;
};

export const PhotoGallery = () => {
  const imageUrls = [
    "https://media.istockphoto.com/id/2155498773/photo/confident-woman-walking-with-red-suitcase-in-modern-urban-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=b4YsoCA-i7HlxSZUepR-sA7Lw-_zeief0-djJ6d6iDo=",
    "https://media.istockphoto.com/id/2155498773/photo/confident-woman-walking-with-red-suitcase-in-modern-urban-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=b4YsoCA-i7HlxSZUepR-sA7Lw-_zeief0-djJ6d6iDo=",
    "https://ik.imagekit.io/ydyooc8lo/Abhiwan_tracker/DESKTOP-8617N6I_20241210-192240_2ZPELY0eQ.webp", // Valid example
  ];

  return (
    <div>
      {imageUrls.map((url, index) => (
        <ImageWithFallback key={index} src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};
