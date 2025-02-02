import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";
import { FormMob } from "./components/form-mob";
import { FormMobEquips } from "./components/form-mob-equips";
import { FormMobStatus } from "./components/form-mob-status";

export function DashboardHomePage() {
  const npcs = [
    "BossAzran",
    "BossAzran_",
    "BossAzran__",
    "Boss_1",
    "Boss_2",
    "Boss_3",
  ];

  const onHandleNpc = (npc: string) => {
    console.log(npc);
  };

  return (
    <div className="p-2">
      <div className="flex flex-row gap-10">
        <nav className="bg-stone-900 w-1/5 flex p-4 border border-stone-700 rounded-lg overflow-y-auto">
          <ul className="space-y-2 w-full">
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
          <FormMob />
          <FormMobEquips />
          <FormMobStatus />
        </section>
      </div>
    </div>
  );
}
