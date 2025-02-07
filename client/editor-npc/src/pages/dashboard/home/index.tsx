import { FormMob } from "./components/form-mob";
import { FormMobEquips } from "./components/form-mob-equips";
import { FormMobStatus } from "./components/form-mob-status";
import { FormMobAdditional } from "./components/form-mob-additional";
import {
  FormMobPrimaryArmorLevel,
  FormMobQuartenaryArmorLevel,
  FormMobSecondaryArmorLevel,
  FormMobTertiaryArmorLevel,
} from "./components/form-mob-armor-level";
import {
  FormMobPrimaryWeaponLevel,
  FormMobSecondaryWeaponLevel,
} from "./components/form-mob-weapon-level";
import { FormMobBossLevel } from "./components/form-mob-boss-level";
import { FormMobSpecialItems } from "./components/form-mob-special-items";
import { useFetchNpcs } from "@/features/fetch-npcs/use-fetch-npcs.hook";
import { useFetchNpcByName } from "@/features/fetch-npc-by-name/use-fetch-npc-by-name.hook";

export function DashboardHomePage() {
  const { npcs, isLoading } = useFetchNpcs();
  const { setName, npc } = useFetchNpcByName();

  const onHandleNpc = (npc: string) => setName(npc);

  return (
    <div className="p-2">
      <div className="flex flex-row gap-10">
        <nav className="bg-stone-900 w-1/5 flex p-4 border border-stone-700 max-h-[calc(100vh-2rem)] rounded-lg overflow-y-auto">
          <ul className="space-y-2 w-full">
            {isLoading && (
              <div className="flex justify-center items-center h-20">
                <span className="text-white">Loading...</span>
              </div>
            )}
            {npcs.map((npc) => (
              <li key={npc}>
                <button
                  className="cursor-pointer text-white text-start w-full px-8 py-2 rounded-lg transition-all duration-500 hover:bg-stone-800"
                  onClick={() => onHandleNpc(npc)}
                  type="button"
                >
                  {npc}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <section className="grid gap-5 bg-stone-800 relative">
          <FormMobAdditional npc={npc} />
          <FormMob />
          <FormMobEquips />
          <FormMobStatus />
          <div className="grid grid-cols-3 gap-2">
            <FormMobPrimaryArmorLevel />
            <FormMobPrimaryWeaponLevel />
            <FormMobBossLevel />
            <FormMobSecondaryArmorLevel />
            <FormMobTertiaryArmorLevel />
            <FormMobQuartenaryArmorLevel />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <FormMobSpecialItems />
            <FormMobSecondaryWeaponLevel />
          </div>
        </section>
      </div>
    </div>
  );
}
