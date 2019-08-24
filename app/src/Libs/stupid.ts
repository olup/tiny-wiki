import { useEffect } from "react";
import onChange from "on-change";
import { useState } from "react";

export default <T>(initialStore: T) => {
  const triggers: (((e?: any) => void) | null)[] = [];
  const subscribe = (callback: (e?: any) => void) => {
    const emptyPosition = triggers.indexOf(null);
    const position = emptyPosition === -1 ? triggers.length : emptyPosition;
    triggers[position] = callback;
    return position;
  };
  const unSubscribe = (handle: number) => {
    triggers[handle] = null;
  };

  const dynamicStore = onChange(initialStore, function() {
    console.log(this);
    triggers.map(trigger => trigger && trigger());
  });
  const useStore = () => {
    const [_, setStore] = useState(0);
    useEffect(() => {
      const handle = subscribe(() => setStore(Date.now()));
      return () => unSubscribe(handle);
    }, []);
    return dynamicStore;
  };

  return { store: initialStore, useStore };
};
