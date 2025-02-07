import { useEffect, useState } from "react";
import { fetchNpcsService } from "./fetch-npcs.service";

export function useFetchNpcs() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [npcs, setNpcs] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchNpcsService()
      .then(setNpcs)
      .then(() => setIsLoading(false));
  }, []);

  return { npcs, isLoading };
}
