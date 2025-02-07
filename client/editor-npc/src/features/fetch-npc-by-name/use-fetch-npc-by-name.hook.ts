import { useEffect, useState } from "react";
import { fetchNpcByNameService } from "./fetch-npc-by-name.service";
import { StructMobType } from "./npc.structs";

export function useFetchNpcByName() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [npc, setNpc] = useState<StructMobType>();

  useEffect(() => {
    if (!name) return;

    setIsLoading(true);

    fetchNpcByNameService(name)
      .then(setNpc)
      .then(() => setIsLoading(false));
  }, [name]);

  return { npc, setName, isLoading };
}
