import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";

export function FormMobEquips() {
  return (
    <div className="flex flex-col border border-stone-700 p-4 rounded-lg gap-4">
      <div className="text-white">EQUIPMENTS</div>
      <div className="grid grid-cols-4 gap-2">
        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">FACE</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">HELM</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">BODY</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">LEG</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">GLOVES</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">BOOTS</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">1ª HAND</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">2ª HAND</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">RING</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">NECK</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">ORB</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Calbun</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Guild</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Event</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Riding</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>

        <FormGroup className="p-2 rounded-lg border border-stone-700">
          <Label className="font-medium w-16">Mantl</Label>
          <Input placeholder="0000 00 00 00 00 00 00" />
        </FormGroup>
      </div>
    </div>
  );
}
