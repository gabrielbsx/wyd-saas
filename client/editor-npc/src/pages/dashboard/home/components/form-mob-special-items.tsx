import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";

export function FormMobSpecialItems() {
  return (
    <div className="flex flex-col border border-stone-700 p-4 rounded-lg gap-4">
      <div className="text-white font-bold">Special Items</div>
      <div className="flex flex-col gap-2">
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700 items-center">
          <Label className="font-medium ml-2 w-24">Key (1/1)</Label>
          <Input
            className="flex-auto"
            placeholder="0000 00 00 00 00 00 00"
          />{" "}
          <span className="ml-2 text-xs text-gray-400">Unicorn's_Spirit</span>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700 items-center">
          <Label className="font-medium ml-2 w-24">Potion (1/100)</Label>
          <Input
            className="flex-auto"
            placeholder="1758 0 0 0 0 0"
            defaultValue="1758 0 0 0 0 0"
          />
          <span className="ml-2 text-xs text-gray-400">
            Rujoper_Brocken_Ore
          </span>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700 items-center">
          <Label className="font-medium ml-2 w-24">Potion (1/500)</Label>
          <Input
            className="flex-auto"
            placeholder="1758 0 0 0 0 0"
            defaultValue="1758 0 0 0 0 0"
          />
          <span className="ml-2 text-xs text-gray-400">
            Rujoper_Brocken_Ore
          </span>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700 items-center">
          <Label className="font-medium ml-2 w-24">Rare (1/2500)</Label>
          <Input
            className="flex-auto"
            placeholder="0000 00 00 00 00 00 00"
          />{" "}
          <span className="ml-2 text-xs text-gray-400">Unicorn's_Spirit</span>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700 items-center">
          <Label className="font-medium ml-2 w-24">Rare (1/5000)</Label>
          <Input
            className="flex-auto"
            placeholder="0000 00 00 00 00 00 00"
          />{" "}
          <span className="ml-2 text-xs text-gray-400">Unicorn's_Spirit</span>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700 items-center">
          <Label className="font-medium ml-2 w-24">Cristal (1/5000)</Label>
          <Input className="flex-auto" placeholder="0000 00 00 00 00 00 00" />
          <span className="ml-2 text-xs text-gray-400">Unicorn's_Spirit</span>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700 items-center">
          <Label className="font-medium ml-2 w-24">Orinha (1/10000)</Label>
          <Input
            className="flex-auto"
            placeholder="0 0 0 202 30"
            defaultValue="0 0 0 202 30"
          />
          <span className="ml-2 text-xs text-gray-400">Unicorn's_Spirit</span>
        </FormGroup>
        <FormGroup className="px-4 py-2 flex-row rounded-lg border border-stone-700 items-center">
          <Label className="font-medium ml-2 w-24">Lakto (1/20000)</Label>
          <Input
            className="flex-auto"
            placeholder="1740 0 0 0 2"
            defaultValue="1740 0 0 0 2"
          />
          <span className="ml-2 text-xs text-gray-400">Unicorn's_Spirit</span>
        </FormGroup>
      </div>
    </div>
  );
}
