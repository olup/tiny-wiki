import { useEffect } from "react";
import onChange from "on-change";
import { useState } from "react";

export default <T>(initialStore: T) => {
  const triggers: ((e?: any) => void)[] = [];
  const subscribe = (callback: (e?: any) => void) => {
    const position = triggers.length;
    triggers.push(callback);
    return position;
  };
  const unSubscribe = (handle: number) => {
    triggers.splice(handle, 1);
  };

  const dynamicStore = onChange(initialStore, function() {
    console.log(this);
    triggers.map(trigger => trigger());
  });
  const useStore = () => {
    const [store, setStore] = useState(0);
    useEffect(() => {
      const handle = subscribe(() => setStore(Date.now()));
      return () => unSubscribe(handle);
    }, []);
    return dynamicStore;
  };

  return { store: initialStore, useStore };
};
