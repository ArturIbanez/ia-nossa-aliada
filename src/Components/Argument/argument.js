import "./argument.css"
import { motion } from "framer-motion";

function TextoAnimado({ children }) {
  // Define as variantes da animação
  const variantesTexto = {
    escondido: {
      opacity: 0,
      x: -100, // Começa 100px para a esquerda
    },
    visivel: {
      opacity: 1,
      x: 0, // Move para a posição original (x: 0)
      transition: {
        type: 'spring', // Tipo de transição (opcional, pode ser 'tween')
        stiffness: 15, // Rigidez da mola (se type: 'spring')
        duration: 1, // Duração se type: 'tween'
        ease: 'easeOut', // Curva de atenuação
      },
    },
  };

  return (
    <motion.div
      variants={variantesTexto}
      initial="escondido" // Estado inicial da animação
      whileInView="visivel" // Anima para o estado 'visivel' quando entra na viewport
      viewport={{ once: true, amount: 0.3 }} // Configurações da viewport
                                            // once: true -> anima apenas uma vez
                                            // amount: 0.3 -> anima quando 30% do elemento estiver visível
    >
      {children}
    </motion.div>
  );
}

function argument(){
    return(
        <div className="argument-container">
            <div className="linha-argument"></div>
            <div className="argument-columm-left">

                <textoAnimado>
                  <h3><strong>Argumentos a favor da IA</strong></h3>
                </textoAnimado>

                <TextoAnimado>
                <h2>Foco em Tarefas, Não em Empregos</h2>
                </TextoAnimado>

                <TextoAnimado>
                    <p>É importante entender que a Inteligência Artificial é especialista em <strong>automatizar tarefas específicas e repetitivas</strong>, não em substituir empregos inteiros.
                     Ao cuidar dessas atividades, a IA permite que os profissionais <strong>concentrem seu tempo e talento em atividades que exigem criatividade, pensamento crítico</strong> 
                     e interação humana genuína, agregando ainda mais valor ao seu trabalho.</p>
                </TextoAnimado>

                <TextoAnimado>
                <h2>Criação de Novas Profissões</h2>
                </TextoAnimado>

                <TextoAnimado>
                <p>A história da tecnologia nos ensina uma lição valiosa: avanços tecnológicos, como a IA,
                     não apenas transformam as profissões existentes, mas também <strong>criam funções e especialidades inteiramente novas</strong>.
                      Já estamos vendo o surgimento de carreiras promissoras como <strong>engenheiro de prompt</strong>, que cria comandos eficazes para IAs,
                       e <strong>especialista em ética de IA</strong>, garantindo que a tecnologia seja usada de forma responsável e justa.</p>
                </TextoAnimado>
            </div>

            <div className="argument-columm-right">
                
                <TextoAnimado>
                <h2>O "Efeito Ludita"</h2>
                </TextoAnimado>

                <TextoAnimado>
                <p>O receio de que as máquinas venham a destruir todos os empregos é um tema antigo, conhecido como efeito Ludita.
                     No entanto, <strong>historicamente, a tecnologia tem se provado uma força para a prosperidade</strong>,
                         gerando novas oportunidades e melhorando a qualidade de vida. A IA segue essa tendência,
                          prometendo <strong>impulsionar a inovação e o crescimento econômico</strong>.</p>
                </TextoAnimado>
            </div>
                
        </div>
    )
}

export default argument;