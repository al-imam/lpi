import classes from "./gallery.module.css";

function Gallery({ pictures }) {
  return (
    <div className="App">
      {pictures.map(({ url }) => (
        <div>
          <img src={url} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
