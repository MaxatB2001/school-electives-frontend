const Modal = ({ showModal, setShowModal, children }) => {
  if (!showModal) return null;
  return (
    <div
      onClick={() => setShowModal(false)}
      className="z-50 fixed top-0 right-0 left-0 bottom-0 bg-black/25 flex items-center justify-center text-white"
    >
      <div onClick={e => e.stopPropagation()} className="text-black rounded-md max-w-2xl w-full bg-white p-5 space-y-3 flex flex-col">
      {children}
      </div>
    </div>
  );
};

export default Modal;
