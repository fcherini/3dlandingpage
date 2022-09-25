import Animation from '../components/Animation';
import Form from '../components/Form';
import CtrlLogo from '../components/CtrlLogo';

export default function Home() {
  return (
    <div className="w-vw max-w-full flex flex-col p-6 justify-center align-center justify-items-center content-center items-center self-center place-content-center justify-self-center min-h-screen gap-6">
      <div className="flex flex-col items-center w-fit">
        <CtrlLogo />
        <p className="font-poppins w-fit font-600 text-center leading-tight text-28 pt-2 text-primary">
          Ganhe uma Aula Experimental Grátis!
        </p>
        <p className="text-center w-5/6 leading-tight">
          Cadastre-se e ganhe um cupom para fazer uma aula experimental gratuita
          na Ctrl+Play
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-start gap-10 align-center justify-center ">
        <Form />
        <div className="relative w-fit max-h-fit m-0 p-0 w-80 h-96 md:w-[375px] md:h-[456px] flex items-center justify-center">
          <div className="badge badge-primary badge-lg absolute top-[23%] -right-[10%] z-10">
            + creatividade
          </div>
          <div className="badge badge-accent badge-lg absolute left-[25%] md:left-[30%] bottom-1 z-10">
            + raciocínio lógico
          </div>
          <div className="badge badge-secondary badge-lg absolute -left-[15%] md:-left-[5%] top-[65%] z-10">
            + inglês técnico
          </div>
          <Animation />
        </div>
      </div>
    </div>
  );
}
