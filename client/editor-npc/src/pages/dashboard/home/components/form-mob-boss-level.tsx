import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";

export function FormMobBossLevel() {
  return (
    <div className="flex flex-col border border-stone-700 p-4 rounded-lg gap-4">
      <div className="text-white font-bold">Boss Level 1/4</div>
      <div className="flex flex-col gap-2">
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700">
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <Label className="font-medium">Lactolerium</Label>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700">
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <Label className="font-medium">Lactolerium</Label>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700">
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <Label className="font-medium">Lactolerium</Label>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700">
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <Label className="font-medium">Lactolerium</Label>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700">
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <Label className="font-medium">Lactolerium</Label>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700">
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <Label className="font-medium">Lactolerium</Label>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700">
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <Label className="font-medium">Lactolerium</Label>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700">
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <Label className="font-medium">Lactolerium</Label>
        </FormGroup>
      </div>
    </div>
  );
}

