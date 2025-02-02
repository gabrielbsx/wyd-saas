import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";

export function FormMobStatus() {
  return (
    <div className="flex flex-col border border-stone-700 p-4 rounded-lg gap-4">
      <div className="text-white font-bold">MOB STATUS</div>
      <div className="grid grid-cols-4 gap-2">
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">Level</Label>
          <Input placeholder="0000" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">AC</Label>
          <Input placeholder="000000" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">Dam</Label>
          <Input placeholder="000000" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">Regen</Label>
          <Input placeholder="000000" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">Str</Label>
          <Input placeholder="000000" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">Int</Label>
          <Input placeholder="000000" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">Dex</Label>
          <Input placeholder="000000" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">Con</Label>
          <Input placeholder="000000" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">HP / MAX</Label>
          <div className="flex flex-col gap-2">
            <Input className="flex-auto" placeholder="000000" />
            <Input className="flex-auto" placeholder="000000" />
          </div>
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-28">MP / MAX</Label>
          <div className="flex flex-col gap-2">
            <Input placeholder="000000" />
            <Input placeholder="000000" />
          </div>
        </FormGroup>

        <div className="flex flex-col">
          <FormGroup className="p-2 rounded-lg border border-stone-700">
            <Label className="font-medium w-28">Near</Label>
            <Input placeholder="000000" />
          </FormGroup>

          <FormGroup className="p-2 rounded-lg border border-stone-700">
            <Label className="font-medium w-28">Motion</Label>
            <Input placeholder="000000" />
          </FormGroup>
        </div>
        <div className="flex flex-col">
          <FormGroup className="p-2 rounded-lg border border-stone-700">
            <Label className="font-medium w-28">Far</Label>
            <Input placeholder="000000" />
          </FormGroup>

          <FormGroup className="p-2 rounded-lg border border-stone-700">
            <Label className="font-medium w-28">Motion 2</Label>
            <Input placeholder="000000" />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
