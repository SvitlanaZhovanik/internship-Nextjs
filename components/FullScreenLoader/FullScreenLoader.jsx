import { RevolvingDot } from 'react-loader-spinner';

export const FullScreenLoader = ({ children, error }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-4 bg-[rgba(51,65,85,0.85)]">
      {children}

      {!error && (
        <RevolvingDot
          height="100"
          width="100"
          radius="30"
          color="#20BCC6"
          secondaryColor=""
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </div>
  );
};
