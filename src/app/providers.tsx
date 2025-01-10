// "use client";

// import React from "react";
// import { Provider } from "react-redux";
// import { makeStore } from "../lib/store";
// import { PersistGate } from "redux-persist/integration/react";
// import styles from "../components/ui/SpinnerbLoader.module.css"

// type Props = {
//   children: React.ReactNode;
// };

// const Providers = ({ children }: Props) => {
//   const { store, persistor } = makeStore();

//   return (
//     <Provider store={store}>
//       <PersistGate
//         loading={
//           <div className="flex items-center justify-center h-96">
//             <SpinnerbLoader className="w-10 border-2 border-gray-300 border-r-gray-600" />
//           </div>
//         }
//         persistor={persistor}
//       >
//         {children}
//       </PersistGate>
//     </Provider>
//   );
// };

// export default Providers;


"use client";

import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";
import styles from "../components/ui/SpinnerbLoader.module.css"; // Importing CSS module for styling

type Props = {
  children: React.ReactNode;
};

// Define the SpinnerLoader as a functional component
const SpinnerbLoader = ({ className }: { className?: string }) => {
  return <div className={`${styles.spinner} ${className || ""}`} />;
};

const Providers = ({ children }: Props) => {
  const { store, persistor } = makeStore();

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="flex items-center justify-center h-96">
            <SpinnerbLoader className="w-10 border-2 border-gray-300 border-r-gray-600" />
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;