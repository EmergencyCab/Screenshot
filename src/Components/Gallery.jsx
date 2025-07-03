const Gallery = ({ images }) => {
  return (
    <div>
      <h2>Screenshot Gallery</h2>
      {images.length === 0 ? (
        <p>No screenshots yet. Take some screenshots above! 📷</p>
      ) : (
        <ul className="gallery">
          {images.map((img, index) => (
            <li key={index}>
              <img
                src={img}
                alt={`Screenshot ${index + 1}`}
                className="thumbnail"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
