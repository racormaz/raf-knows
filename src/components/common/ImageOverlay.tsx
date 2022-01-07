import Modal from 'react-overlays/Modal';

interface ImageOverlayProps {
  src: string,
  alt: string,
  className?: string,
}

// const Backdrop = styled("div")`
//   position: fixed;
//   z-index: 1040;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #000;
//   opacity: 0.5;
// `;

const ImageOverlay: React.FC<ImageOverlayProps> = ({ src, alt, className, ...props }) => {
  return (
    <div className="group relative cursor-pointer">
      <img src={src} alt={alt} className={`${className} object-cover rounded-md shadow-md hover:shadow-xl group-hover:blur filter transition-all ease-in-out duration-300`} />
      <span className="absolute top-1/2 text-center w-full text-gray-100 font-bold text-2xl hidden group-hover:block">Expand</span>
      {/* <Modal show={true}>
        <div>
          Hello
        </div>
      </Modal> */}
    </div>
  );
}

export default ImageOverlay;
