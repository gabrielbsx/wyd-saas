import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";

export function FormMobAdditional() {
  return (
    <div className="flex flex-col border border-stone-700 p-4 rounded-lg gap-4">
      <div className="text-white font-bold">ADDITIONAL</div>
      <div className="grid grid-cols-5 gap-2">
        <FormGroup className="rounded-lg items-center justify-center border border-stone-700">
          <Label className="font-medium">BossDungeon4</Label>
        </FormGroup>
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">RegenHP</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">RegenMP</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Bonus</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Direction</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>
      </div>
    </div>
  );
}
