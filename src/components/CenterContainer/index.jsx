// eslint-disable-next-line react/prop-types
const CenterContainer = ({ children, className }) => {
  return (
    <div
      className={`bg-[f6f6f6f] rounded-lg w-11/12 max-w-5xl p-6 ${className} h-10`}
    >

      {children}
    </div>
  );
};
export default CenterContainer;
