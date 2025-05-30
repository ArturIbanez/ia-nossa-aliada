import "./article.css"
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

function Article(){
    return(
        <div className="article-container">
            <div className="linha-article"></div>
            <div className="article-columm-left">
                <TextoAnimado>
                <h2>Saúde</h2>
                </TextoAnimado>

                <TextoAnimado>
                    <p>A Inteligência Artificial está trazendo avanços incríveis para a saúde, atuando como uma grande parceira dos profissionais da área!
                    Ela ajuda a tornar os <strong>diagnósticos muito mais rápidos e precisos</strong>, como na análise de imagens médicas para detectar doenças como o câncer de forma precoce. 
                    Além disso, a IA está acelerando a <strong>descoberta de novos medicamentos</strong>, o que pode trazer tratamentos inovadores mais rapidamente para quem precisa. 
                    E com os <strong>chatbots e sistemas de monitoramento remoto</strong>, os pacientes podem ter um acompanhamento mais próximo e um acesso facilitado a informações e cuidados básicos. 
                    É a tecnologia trabalhando para uma saúde melhor e mais eficiente para todos!</p>
                </TextoAnimado>

                <TextoAnimado>
                <h2>Setor Criativo</h2>
                </TextoAnimado>

                <TextoAnimado>
                <p>No mundo da criatividade, a Inteligência Artificial surge como uma nova e empolgante ferramenta para artistas e criadores! 
                Ela pode <strong>auxiliar na composição de músicas, na criação de designs gráficos, na redação de textos e até na geração de obras de arte visuais</strong>. 
                Longe de substituir a criatividade humana, a IA ajuda a <strong>expandir as possibilidades</strong>, automatizando tarefas mais técnicas ou repetitivas. 
                Assim, os profissionais podem ter mais tempo para focar na sua visão artística, experimentar novas ideias e levar sua criatividade a novos patamares. 
                É a tecnologia dando uma força para a imaginação!</p>
                </TextoAnimado>
            </div>

            <div className="article-columm-right">
                
                <TextoAnimado>
                <h2>Indústria</h2>
                </TextoAnimado>

                <TextoAnimado>
                <p>Na indústria, a Inteligência Artificial chegou para otimizar tudo e deixar a produção mais inteligente e eficiente! 
                Um dos grandes destaques é a <strong>manutenção preditiva</strong>: a IA consegue "prever" quando uma máquina pode falhar, evitando paradas inesperadas e grandes prejuízos. 
                Outro ponto super positivo é o controle de <strong>qualidade automatizado</strong>, onde a IA inspeciona os produtos com uma precisão incrível, 
                garantindo que tudo saia perfeito e com menos desperdício. No geral, a IA está ajudando as indústrias a produzirem mais e melhor, 
                de forma mais segura e econômica.</p>
                </TextoAnimado>
            </div>
                
        </div>
    )
}

export default Article;