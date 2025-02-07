import { api } from "@/shared/config/api";
import { toast } from "sonner";
import { StructMobType } from "./npc.structs";

type FetchNpcByNameResponse = Readonly<StructMobType>;

export const fetchNpcByNameService = async (name: string) => {
  const response = await api.get(`npc/${name}`);

  if (response.status !== 200) {
    const { message, details } = response.data;
    toast.error(details ? details.join(", ") : message);
    return;
  }

  const npc = response.data as FetchNpcByNameResponse;

  return npc;
};
