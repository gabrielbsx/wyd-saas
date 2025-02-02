import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";

export function FormMob() {
  return (
    <div className="flex flex-col gap-2">
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">NAME</Label>
        <Input name="name" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">RACE</Label>
        <Input name="race" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">MERCHANT</Label>
        <Input name="merchant" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">CLASS</Label>
        <Input name="class" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">MONEY</Label>
        <Input name="money" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">EXP</Label>
        <Input name="exp" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">H-X</Label>
        <Input name="hX" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">H-Y</Label>
        <Input name="hY" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">SKILL</Label>
        <Input name="skill" />
      </FormGroup>
      <FormGroup className="p-2 rounded-lg border border-stone-700">
        <Label className="font-medium w-22">LEARN</Label>
        <Input name="learn" />
      </FormGroup>
    </div>
  );
}
