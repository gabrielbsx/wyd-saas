import { api } from "@/shared/config/api";
import { toast } from "sonner";

type FetchNpcsResponse = Readonly<
  {
    name: string;
  }[]
>;

export const fetchNpcsService = async () => {
  const response = await api.get("npc");

  if (response.status !== 200) {
    const { message, details } = response.data;
    toast.error(details ? details.join(", ") : message);
    return [];
  }

  const npcs = response.data as FetchNpcsResponse;

  return npcs.map(({ name }) => name);
};
