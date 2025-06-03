import "./benefits.css"
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

function Benefits(){
    return(
        <div className="benefits-container">
            <div className="linha-benefits"></div>
            <div className="benefits-columm-left">

                <textoAnimado>
                  <h3><strong>Profissões Transformadas pela IA</strong></h3>
                </textoAnimado>

                <TextoAnimado>
                <h2>Jornalistas</h2>
                </TextoAnimado>

                <TextoAnimado>
                    <p>A Inteligência Artificial surge como uma poderosa aliada no jornalismo.
                     Ferramentas de IA <strong>processam volumes massivos de dados</strong> agilmente, revelando padrões e insights antes difíceis de alcançar.
                     Isso permite que jornalistas dediquem mais tempo à <strong>análise crítica e à construção de narrativas complexas.</strong>
                     A IA não substitui o faro jornalístico, <strong>mas o potencializa para investigações mais profundas.</strong></p>
                </TextoAnimado>

                <TextoAnimado>
                <h2>Advogados</h2>
                </TextoAnimado>

                <TextoAnimado>
                <p>No campo jurídico, a IA está otimizando o trabalho dos advogados.
                   Softwares inteligentes analisam <strong>milhares de documentos legais em minutos</strong>, identificando informações cruciais com velocidade impressionante.
                   Essa capacidade libera os profissionais para se concentrarem no <strong>desenvolvimento de teses, no aconselhamento ao cliente</strong> e na preparação estratégica de cada caso,
                    resultando em uma advocacia mais <strong>eficiente e precisa.</strong></p>
                </TextoAnimado>
            </div>

            <div className="benefits-columm-right">
                
                <TextoAnimado>
                <h2>Profissionais de Marketing</h2>
                </TextoAnimado>

                <TextoAnimado>
                <p>Para o marketing, a IA é a chave para personalização e eficácia.
                   Ela <strong>automatiza a análise de dados e otimiza a segmentação de público</strong> com alta precisão.
                   Com tarefas operacionais simplificadas, as equipes focam no <strong>planejamento estratégico e na criação de campanhas inovadoras,</strong>
                   construindo conexões autênticas. A IA transforma dados em insights, permitindo que a <strong>criatividade floresça com inteligência.</strong></p>
                </TextoAnimado>
            </div>
                
        </div>
    )
}

export default Benefits;