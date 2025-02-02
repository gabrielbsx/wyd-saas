import { Button } from "@/shared/components/button/button";
import { Form } from "@/shared/components/form/form";
import { FormGroup } from "@/shared/components/form/form-group";
import { Input } from "@/shared/components/input/input";
import { Label } from "@/shared/components/label/label";
import { useSignin } from "@/features/signin/use-signin.hook";
import { FormError } from "@/shared/components/form/form-error";

export default function SigninPage() {
  const {
    form: {
      register,
      formState: { errors },
    },
    onSubmit,
  } = useSignin();

  return (
    <div className="flex flex-row justify-between min-h-screen">
      <div className="flex-1 flex bg-stone-900"></div>
      <div className="flex flex-col gap-8 items-center border-l-2 border-stone-700 justify-center flex-1">
        <section className="flex w-96 bg-stone-800">
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                {...register("username")}
                placeholder="Digite seu usuário"
              />
              <FormError error={errors.username?.message} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                {...register("password")}
                placeholder="Digite sua senha"
              />
              <FormError error={errors.password?.message} />
            </FormGroup>

            <Button type="submit">Entrar</Button>
          </Form>
        </section>
        <div>
          <p className="text-stone-100 text-sm">
            Não possui uma conta?{" "}
            <a href="/signup" className="text-blue-300 ml-2">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
