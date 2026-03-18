import type { Metadata } from "next"

import { Footer } from "@/components/footer/footer"
import { Header } from "@/components/header/header"

export const metadata: Metadata = {
  title: "Política de Privacidade | Imperial Gás",
  description:
    "Conheça a política de privacidade e cookies da Imperial Gás.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 lg:py-24 text-[#1d1d1d]">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb8404]">
              Política de Privacidade
            </span>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl font-heading">
              Política de Privacidade & Cookies
            </h1>
            <p className="text-lg font-body text-[#3d3d3d]">
              Saiba como a Imperial Gás trata informações durante a navegação no
              site.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-base font-body text-[#3d3d3d]">
            <section className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-[#1d1d1d]">
                1. Sobre esta Política
              </h2>
              <p>
                A Imperial Gás, localizada na Rua A, 79 - Vila das Flores, Betim
                - MG, CEP: 32605-350, valoriza a privacidade e a segurança das
                informações dos visitantes de seu site.
              </p>
              <p>
                Esta Política de Privacidade tem como objetivo esclarecer como
                as informações são tratadas durante a navegação em nosso site.
              </p>
              <p>
                Ao utilizar o site da Imperial Gás, você concorda com as
                práticas descritas neste documento.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-[#1d1d1d]">
                2. Coleta de Informações
              </h2>
              <p>
                O site da Imperial Gás não realiza coleta de dados pessoais
                diretamente.
              </p>
              <p>Não solicitamos informações como:</p>
              <ul className="grid gap-2 pl-5 text-[#3d3d3d]">
                <li className="list-disc">Nome</li>
                <li className="list-disc">Telefone</li>
                <li className="list-disc">E-mail</li>
                <li className="list-disc">CPF</li>
                <li className="list-disc">Endereço</li>
                <li className="list-disc">Cadastro de usuários</li>
              </ul>
              <p>
                Nosso site tem caráter informativo e serve apenas como um canal
                para facilitar o contato com nossa empresa.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-[#1d1d1d]">
                3. Redirecionamento para WhatsApp
              </h2>
              <p>
                O site possui botões de contato que redirecionam o visitante
                para o WhatsApp, permitindo que o cliente inicie uma conversa
                diretamente com a equipe da Imperial Gás.
              </p>
              <p>
                Ao clicar nesses botões, você será direcionado para a plataforma
                do WhatsApp, que possui sua própria Política de Privacidade e
                Termos de Uso.
              </p>
              <p>
                Recomendamos que o usuário consulte a política da plataforma
                acessando:{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#fb8404] underline-offset-4 hover:underline"
                >
                  https://www.whatsapp.com/legal/privacy-policy
                </a>
              </p>
              <p>
                As informações eventualmente compartilhadas pelo usuário durante
                a conversa no WhatsApp são fornecidas voluntariamente pelo
                próprio usuário.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-[#1d1d1d]">
                4. Cookies e Tecnologias de Navegação
              </h2>
              <p>
                O site da Imperial Gás pode utilizar cookies e tecnologias
                semelhantes para melhorar a experiência de navegação e entender
                como os visitantes interagem com o site.
              </p>
              <p>Entre as ferramentas utilizadas estão:</p>
              <ul className="grid gap-2 pl-5 text-[#3d3d3d]">
                <li className="list-disc">
                  Meta Pixel (Facebook Pixel), utilizado para fins de análise
                  de desempenho de campanhas e ações de marketing.
                </li>
                <li className="list-disc">
                  Google Tag Manager, utilizado para gerenciar scripts e
                  ferramentas de análise no site.
                </li>
              </ul>
              <p>Essas tecnologias podem coletar informações como:</p>
              <ul className="grid gap-2 pl-5 text-[#3d3d3d]">
                <li className="list-disc">Páginas visitadas</li>
                <li className="list-disc">Tempo de navegação</li>
                <li className="list-disc">
                  Interações com elementos do site
                </li>
                <li className="list-disc">
                  Informações técnicas do dispositivo e navegador
                </li>
              </ul>
              <p>
                Esses dados são coletados de forma automatizada e anônima, sendo
                utilizados apenas para fins estatísticos, análise de desempenho
                e melhoria das campanhas de marketing.
              </p>
              <p>
                Os cookies podem ser gerenciados ou desativados diretamente nas
                configurações do navegador do usuário. No entanto, a desativação
                de cookies pode afetar algumas funcionalidades de navegação.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-[#1d1d1d]">
                5. Segurança das Informações
              </h2>
              <p>
                Como não realizamos coleta ou armazenamento de dados pessoais
                diretamente pelo site, não mantemos bancos de dados com
                informações de visitantes.
              </p>
              <p>
                Qualquer informação compartilhada pelo usuário ocorre
                diretamente por meio do WhatsApp, fora do ambiente do site.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-[#1d1d1d]">
                6. Alterações nesta Política
              </h2>
              <p>
                A Imperial Gás poderá atualizar esta Política de Privacidade
                sempre que necessário, com o objetivo de manter transparência e
                conformidade com a legislação vigente.
              </p>
              <p>
                Recomendamos que os usuários revisem este documento
                periodicamente.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-[#1d1d1d]">7. Contato</h2>
              <p>
                Caso tenha dúvidas sobre esta Política de Privacidade ou sobre
                nossos serviços, entre em contato:
              </p>
              <div className="rounded-3xl border border-[#fb8404]/20 bg-[#fb8404]/10 p-6 text-[#1d1d1d]">
                <p className="text-lg font-semibold">Imperial Gás</p>
                <p>Rua A, 79 - Vila das Flores</p>
                <p>Betim - MG, CEP: 32605-350</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
