import { StructMobType } from "@/features/fetch-npc-by-name/npc.structs";
import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";

interface FormMobAdditionalProps {
  npc?: StructMobType;
}

export function FormMobAdditional({ npc }: FormMobAdditionalProps) {
  return (
    <div className="flex flex-col border border-stone-700 p-4 rounded-lg gap-4">
      <div className="text-white font-bold">ADDITIONAL</div>
      <div className="grid grid-cols-5 gap-2">
        <FormGroup className="rounded-lg items-center justify-center border border-stone-700">
          <Label className="font-medium">{npc?.MobName}</Label>
        </FormGroup>
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">RegenHP</Label>
          <Input placeholder="0000 00 00 00 00 00 00" value={npc?.RegenHp} />
        </FormGroup>
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">RegenMP</Label>
          <Input placeholder="0000 00 00 00 00 00 00" value={npc?.RegenMp} />
        </FormGroup>
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Bonus</Label>
          <Input placeholder="??" />
        </FormGroup>
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Direction</Label>
          <Input placeholder="??" />
        </FormGroup>
      </div>
    </div>
  );
}
