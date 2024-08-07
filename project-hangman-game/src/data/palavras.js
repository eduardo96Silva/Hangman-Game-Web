
let palavras = [
    // Animais
    { categoria: "Animal", palavra: "abelha" },
    { categoria: "Animal", palavra: "abutre" },
    { categoria: "Animal", palavra: "albatroz" },
    { categoria: "Animal", palavra: "alce" },
    { categoria: "Animal", palavra: "alpaca" },
    { categoria: "Animal", palavra: "anaconda" },
    { categoria: "Animal", palavra: "anchova" },
    { categoria: "Animal", palavra: "andorinha" },
    { categoria: "Animal", palavra: "anta" },
    { categoria: "Animal", palavra: "arara" },
    { categoria: "Animal", palavra: "asno" },
    { categoria: "Animal", palavra: "avestruz" },
    { categoria: "Animal", palavra: "bezerro" },
    { categoria: "Animal", palavra: "bisonte" },
    { categoria: "Animal", palavra: "bode" },
    { categoria: "Animal", palavra: "boi" },
    { categoria: "Animal", palavra: "burro" },
    { categoria: "Animal", palavra: "cabra" },
    { categoria: "Animal", palavra: "cachalote" },
    { categoria: "Animal", palavra: "cachorro" },
    { categoria: "Animal", palavra: "camelo" },
    { categoria: "Animal", palavra: "camundongo" },
    { categoria: "Animal", palavra: "canguru" },
    { categoria: "Animal", palavra: "capivara" },
    { categoria: "Animal", palavra: "caracol" },
    { categoria: "Animal", palavra: "caranguejo" },
    { categoria: "Animal", palavra: "carneiro" },
    { categoria: "Animal", palavra: "castor" },
    { categoria: "Animal", palavra: "cavalo" },
    { categoria: "Animal", palavra: "cegonha" },
    { categoria: "Animal", palavra: "chinchila" },
    { categoria: "Animal", palavra: "chita" },
    { categoria: "Animal", palavra: "cisne" },
    { categoria: "Animal", palavra: "coala" },
    { categoria: "Animal", palavra: "codorna" },
    { categoria: "Animal", palavra: "coelho" },
    { categoria: "Animal", palavra: "coiote" },
    { categoria: "Animal", palavra: "coruja" },
    { categoria: "Animal", palavra: "corvo" },
    { categoria: "Animal", palavra: "crocodilo" },
    { categoria: "Animal", palavra: "esquilo" },
    { categoria: "Animal", palavra: "elefante" },
    { categoria: "Animal", palavra: "flamingo" },
    { categoria: "Animal", palavra: "foca" },
    { categoria: "Animal", palavra: "gaivota" },
    { categoria: "Animal", palavra: "galinha" },
    { categoria: "Animal", palavra: "galo" },
    { categoria: "Animal", palavra: "ganso" },
    { categoria: "Animal", palavra: "garça" },
    { categoria: "Animal", palavra: "gato" },
    { categoria: "Animal", palavra: "gazela" },
    { categoria: "Animal", palavra: "girafa" },
    { categoria: "Animal", palavra: "gorila" },
    { categoria: "Animal", palavra: "guaxinim" },
    { categoria: "Animal", palavra: "hamster" },
    { categoria: "Animal", palavra: "hiena" },
    { categoria: "Animal", palavra: "jabuti" },
    { categoria: "Animal", palavra: "jaguar" },
    { categoria: "Animal", palavra: "javali" },
    { categoria: "Animal", palavra: "jegue" },
    { categoria: "Animal", palavra: "jumento" },
    { categoria: "Animal", palavra: "kiwi" },
    { categoria: "Animal", palavra: "leopardo" },
    { categoria: "Animal", palavra: "lobo" },
    { categoria: "Animal", palavra: "lontra" },
    { categoria: "Animal", palavra: "macaco" },
    { categoria: "Animal", palavra: "mamute" },
    { categoria: "Animal", palavra: "marmota" },
    { categoria: "Animal", palavra: "marreco" },
    { categoria: "Animal", palavra: "morcego" },
    { categoria: "Animal", palavra: "morsa" },
    { categoria: "Animal", palavra: "mula" },
    { categoria: "Animal", palavra: "onça" },
    { categoria: "Animal", palavra: "ovelha" },
    { categoria: "Animal", palavra: "ornitorrinco" },
    { categoria: "Animal", palavra: "panda" },
    { categoria: "Animal", palavra: "pantera" },
    { categoria: "Animal", palavra: "papagaio" },
    { categoria: "Animal", palavra: "pardal" },
    { categoria: "Animal", palavra: "pato" },
    { categoria: "Animal", palavra: "peixe" },
    { categoria: "Animal", palavra: "pelicano" },
    { categoria: "Animal", palavra: "peru" },
    { categoria: "Animal", palavra: "pinguim" },
    { categoria: "Animal", palavra: "pombo" },
    { categoria: "Animal", palavra: "porco" },
    { categoria: "Animal", palavra: "preguiça" },
    { categoria: "Animal", palavra: "raposa" },
    { categoria: "Animal", palavra: "rato" },
    { categoria: "Animal", palavra: "rena" },
    { categoria: "Animal", palavra: "rinoceronte" },
    { categoria: "Animal", palavra: "sapo" },
    { categoria: "Animal", palavra: "tucano" },
    { categoria: "Animal", palavra: "urso" },
    { categoria: "Animal", palavra: "veado" },
    { categoria: "Animal", palavra: "vaca" },

    // Objetos
    { categoria: 'Objeto', palavra: 'abajur' },
    { categoria: 'Objeto', palavra: 'agulha' },
    { categoria: 'Objeto', palavra: 'apito' },
    { categoria: 'Objeto', palavra: 'bacia' },
    { categoria: 'Objeto', palavra: 'balde' },
    { categoria: 'Objeto', palavra: 'bebedouro' },
    { categoria: 'Objeto', palavra: 'bucha' },
    { categoria: 'Objeto', palavra: 'caixa' },
    { categoria: 'Objeto', palavra: 'filtro' },
    { categoria: 'Objeto', palavra: 'chave' },
    { categoria: 'Objeto', palavra: 'cofre' },
    { categoria: 'Objeto', palavra: 'escova' },
    { categoria: 'Objeto', palavra: 'lixeira' },
    { categoria: 'Objeto', palavra: 'livro' },
    { categoria: 'Objeto', palavra: 'cubo' },
    { categoria: 'Objeto', palavra: 'lupa' },
    { categoria: 'Objeto', palavra: 'espelho' },
    { categoria: 'Objeto', palavra: 'ampulheta' },
    { categoria: 'Objeto', palavra: 'bugiganga' },
    { categoria: 'Objeto', palavra: 'bumerangue' },
    { categoria: 'Objeto', palavra: 'placa' },
    { categoria: 'Objeto', palavra: 'quadro' },
    { categoria: 'Objeto', palavra: 'alambique' },
    { categoria: 'Objeto', palavra: 'algema' },
    { categoria: 'Objeto', palavra: 'alicate' },
    { categoria: 'Objeto', palavra: 'alfinete' },
    { categoria: 'Objeto', palavra: 'almofariz' },
    { categoria: 'Objeto', palavra: 'candelabro' },
    { categoria: 'Objeto', palavra: 'chamariz' },
    { categoria: 'Objeto', palavra: 'diapason' },
    { categoria: 'Objeto', palavra: 'dobradiça' },
    { categoria: 'Objeto', palavra: 'escada' },
    { categoria: 'Objeto', palavra: 'escombro' },
    { categoria: 'Objeto', palavra: 'estetoscopio' },
    { categoria: 'Objeto', palavra: 'grampeador' },
    { categoria: 'Objeto', palavra: 'interruptor' },
    { categoria: 'Objeto', palavra: 'lantejoula' },
    { categoria: 'Objeto', palavra: 'manteigueira' },
    { categoria: 'Objeto', palavra: 'quinquilharia' },
    { categoria: 'Objeto', palavra: 'serpentina' },

    // Utensílios
    { categoria: 'Utensílio', palavra: 'caneca' },
    { categoria: 'Utensílio', palavra: 'cobertor' },
    { categoria: 'Utensílio', palavra: 'colher' },
    { categoria: 'Utensílio', palavra: 'copo' },
    { categoria: 'Utensílio', palavra: 'dedal' },
    { categoria: 'Utensílio', palavra: 'faca' },
    { categoria: 'Utensílio', palavra: 'fita' },
    { categoria: 'Utensílio', palavra: 'fronha' },
    { categoria: 'Utensílio', palavra: 'garfo' },
    { categoria: 'Utensílio', palavra: 'jarra' },
    { categoria: 'Utensílio', palavra: 'lata' },
    { categoria: 'Utensílio', palavra: 'panela' },
    { categoria: 'Utensílio', palavra: 'prato' },
    { categoria: 'Utensílio', palavra: 'sacola' },
    { categoria: 'Utensílio', palavra: 'talher' },
    { categoria: 'Utensílio', palavra: 'tapete' },
    { categoria: 'Utensílio', palavra: 'toalha' },
    { categoria: 'Utensílio', palavra: 'vaso' },
    { categoria: 'Utensílio', palavra: 'vela' },
    { categoria: 'Utensílio', palavra: 'espelho' },

    // Acessórios
    { categoria: 'Acessório', palavra: 'anel' },
    { categoria: 'Acessório', palavra: 'carteira' },
    { categoria: 'Acessório', palavra: 'chupeta' },
    { categoria: 'Acessório', palavra: 'joia' },
    { categoria: 'Acessório', palavra: 'mascara' },
    { categoria: 'Acessório', palavra: 'moeda' },
    { categoria: 'Acessório', palavra: 'oculos' },
    { categoria: 'Acessório', palavra: 'gargantilha' },
    { categoria: 'Acessório', palavra: 'bolsa' },

    // Eletrônicos
    { categoria: 'Eletrônico', palavra: 'antena' },
    { categoria: 'Eletrônico', palavra: 'aspirador' },
    { categoria: 'Eletrônico', palavra: 'bateria' },
    { categoria: 'Eletrônico', palavra: 'calculadora' },
    { categoria: 'Eletrônico', palavra: 'computador' },
    { categoria: 'Eletrônico', palavra: 'controle' },
    { categoria: 'Eletrônico', palavra: 'despertador' },
    { categoria: 'Eletrônico', palavra: 'disco' },
    { categoria: 'Eletrônico', palavra: 'fone' },
    { categoria: 'Eletrônico', palavra: 'geladeira' },
    { categoria: 'Eletrônico', palavra: 'carregador' },
    { categoria: 'Eletrônico', palavra: 'mouse' },
    { categoria: 'Eletrônico', palavra: 'teclado' },
    { categoria: 'Eletrônico', palavra: 'relogio' },
    { categoria: 'Eletrônico', palavra: 'celular' },
    { categoria: 'Eletrônico', palavra: 'telefone' },
    { categoria: 'Eletrônico', palavra: 'televisor' },
    { categoria: 'Eletrônico', palavra: 'microfone' },
    { categoria: 'Eletrônico', palavra: 'nebulizador' },
    { categoria: 'Eletrônico', palavra: 'ventilador' },

    // Mobílias
    { categoria: 'Mobília', palavra: 'bancada' },
    { categoria: 'Mobília', palavra: 'banco' },
    { categoria: 'Mobília', palavra: 'sofa' },
    { categoria: 'Mobília', palavra: 'cadeira' },
    { categoria: 'Mobília', palavra: 'cortina' },
    { categoria: 'Mobília', palavra: 'janela' },
    { categoria: 'Mobília', palavra: 'escrivaninha' },
    { categoria: 'Mobília', palavra: 'cama' },
    { categoria: 'Mobília', palavra: 'mesa' },

    // Alimentos
    { categoria: 'Alimento', palavra: 'biscoito' },
    { categoria: 'Alimento', palavra: 'alcachofra' },
    { categoria: 'Alimento', palavra: 'banana' },
    { categoria: 'Alimento', palavra: 'pepino' },
    { categoria: 'Alimento', palavra: 'alface' },
    { categoria: 'Alimento', palavra: 'panqueca' },
    { categoria: 'Alimento', palavra: 'abacate' },
    { categoria: 'Alimento', palavra: 'laranja' },
    { categoria: 'Alimento', palavra: 'ovo' },
    { categoria: 'Alimento', palavra: 'amendoim' },
    { categoria: 'Alimento', palavra: 'esfirra' },
    { categoria: 'Alimento', palavra: 'espinafre' },
    { categoria: 'Alimento', palavra: 'iogurte' },
    { categoria: 'Alimento', palavra: 'pizza' },
    { categoria: 'Alimento', palavra: 'pastel' },
    { categoria: 'Alimento', palavra: 'coxinha' },

    // Material Escolar
    { categoria: 'Material Escolar', palavra: 'borracha' },
    { categoria: 'Material Escolar', palavra: 'canetinha' },
    { categoria: 'Material Escolar', palavra: 'grafite' },
    { categoria: 'Material Escolar', palavra: 'mochila' },
    { categoria: 'Material Escolar', palavra: 'caderno' },
    { categoria: 'Material Escolar', palavra: 'caneta' },
    { categoria: 'Material Escolar', palavra: 'corretivo' },
    { categoria: 'Material Escolar', palavra: 'estojo' },
    { categoria: 'Material Escolar', palavra: 'giz' },
    { categoria: 'Material Escolar', palavra: 'papel' },

    // Vestimentas
    { categoria: 'Vestimenta', palavra: 'capa' },
    { categoria: 'Vestimenta', palavra: 'vestido' },
    { categoria: 'Vestimenta', palavra: 'calça' },
    { categoria: 'Vestimenta', palavra: 'camiseta' },
    { categoria: 'Vestimenta', palavra: 'regata' },
    { categoria: 'Vestimenta', palavra: 'cropped' },
    { categoria: 'Vestimenta', palavra: 'camisa' },
    { categoria: 'Vestimenta', palavra: 'saia' },
    { categoria: 'Vestimenta', palavra: 'rasteirinha' },
    { categoria: 'Vestimenta', palavra: 'salto' },
    { categoria: 'Vestimenta', palavra: 'papete' },
    { categoria: 'Vestimenta', palavra: 'chinelo' },
    { categoria: 'Vestimenta', palavra: 'bota' },
    { categoria: 'Vestimenta', palavra: 'coturno' },
    { categoria: 'Vestimenta', palavra: 'cueca' },
    { categoria: 'Vestimenta', palavra: 'calçinha' },
    { categoria: 'Vestimenta', palavra: 'touca' },
    { categoria: 'Vestimenta', palavra: 'tamanco' },
    { categoria: 'Vestimenta', palavra: 'cachecol' },
    { categoria: 'Vestimenta', palavra: 'jaqueta' },
    { categoria: 'Vestimenta', palavra: 'moletom' },
    { categoria: 'Vestimenta', palavra: 'blusa' },
    { categoria: 'Vestimenta', palavra: 'durag' },
    { categoria: 'Vestimenta', palavra: 'cinto' },
    { categoria: 'Vestimenta', palavra: 'sandalha' },
    { categoria: 'Vestimenta', palavra: 'meia' },
    { categoria: 'Vestimenta', palavra: 'bermuda' },
    { categoria: 'Vestimenta', palavra: 'corselet' },
    { categoria: 'Vestimenta', palavra: 'sapato' },

    // Veículos
    { categoria: 'Veículo', palavra: 'quadriciclo' },
    { categoria: 'Veículo', palavra: 'jetski' },
    { categoria: 'Veículo', palavra: 'barco' },
    { categoria: 'Veículo', palavra: 'barco' },
    { categoria: 'Veículo', palavra: 'carro' },
    { categoria: 'Veículo', palavra: 'roda' },
    { categoria: 'Veículo', palavra: 'volante' },
    { categoria: 'Veículo', palavra: 'banco' },
    { categoria: 'Veículo', palavra: 'freio' },
    { categoria: 'Veículo', palavra: 'motor' },
    { categoria: 'Veículo', palavra: 'acelarador' },

    // Ferramentas
    { categoria: 'Ferramenta', palavra: 'machado' },
    { categoria: 'Ferramenta', palavra: 'martelo' },
    { categoria: 'Ferramenta', palavra: 'parafuso' },
    { categoria: 'Ferramenta', palavra: 'parafusadeira' },
    { categoria: 'Ferramenta', palavra: 'furadeira' },
    { categoria: 'Ferramenta', palavra: 'prego' },

    // Esportes
    { categoria: 'Esporte', palavra: 'raquete' },
    { categoria: 'Esporte', palavra: 'corrida' },
    { categoria: 'Esporte', palavra: 'capoeira' },
    { categoria: 'Esporte', palavra: 'karate' },
    { categoria: 'Esporte', palavra: 'taekwondo' },
    { categoria: 'Esporte', palavra: 'baseball' },
    { categoria: 'Esporte', palavra: 'futebol' },
    { categoria: 'Esporte', palavra: 'handebol' },
    { categoria: 'Esporte', palavra: 'hipismo' },
    { categoria: 'Esporte', palavra: 'basquetebol' },

    // Material de Contrução
    { categoria: 'Material de Construção', palavra: 'tijolo' },
    { categoria: 'Material de Construção', palavra: 'vidro' },
    { categoria: 'Material de Construção', palavra: 'britadeira' },
    { categoria: 'Material de Construção', palavra: 'tinta' },
    { categoria: 'Material de Construção', palavra: 'cimento' },

    // Instrumento Musical
    { categoria: 'Instrumento Musical', palavra: 'violino' },
    { categoria: 'Instrumento Musical', palavra: 'flauta' },
    { categoria: 'Instrumento Musical', palavra: 'piano' },
    { categoria: 'Instrumento musical', palavra: 'bandolim' },
    { categoria: 'Instrumento musical', palavra: 'berimbau' },
    { categoria: 'Instrumento musical', palavra: 'guitarra' },
    { categoria: 'Instrumento musical', palavra: 'bateria' },

    // Profissões
    { categoria: 'Profissão', palavra: 'advogado' },
    { categoria: 'Profissão', palavra: 'enfermeiro' },
    { categoria: 'Profissão', palavra: 'engenheiro' },
    { categoria: 'Profissão', palavra: 'pedreiro' },
    { categoria: 'Profissão', palavra: 'astronauta' },
    { categoria: 'Profissão', palavra: 'almoxarife' },
    { categoria: 'Profissão', palavra: 'embaixador' },
    { categoria: 'Profissão', palavra: 'desenvolvedor' },

    // Saúde
    { categoria: 'Saúde', palavra: 'afta' },
    { categoria: 'Saúde', palavra: 'cicatriz' },
    { categoria: 'Saúde', palavra: 'inflamado' },
    { categoria: 'Saúde', palavra: 'poliomielite' },
    { categoria: 'Saúde', palavra: 'sangue' },
    { categoria: 'Saúde', palavra: 'prurido' },
    { categoria: 'Saúde', palavra: 'seborria' },

    // Ciência
    { categoria: 'Ciência', palavra: 'alquimia' },
    { categoria: 'Ciência', palavra: 'cronologia' },
    { categoria: 'Ciência', palavra: 'ecossistema' },
    { categoria: 'Ciência', palavra: 'meteorologia' },
    { categoria: 'Ciência', palavra: 'microrganismo' },
    { categoria: 'Ciência', palavra: 'microscopio' },

    // Sentimentos
    { categoria: 'Sentimento', palavra: 'altivez' },
    { categoria: 'Sentimento', palavra: 'ansioso' },
    { categoria: 'Sentimento', palavra: 'raiva' },
    { categoria: 'Sentimento', palavra: 'faniquito' },
    { categoria: 'Sentimento', palavra: 'frustrado' },
    { categoria: 'Sentimento', palavra: 'triste' },
    { categoria: 'Sentimento', palavra: 'felicidade' },
    { categoria: 'Sentimento', palavra: 'confuso' },
    { categoria: 'Sentimento', palavra: 'sensatez' },

    // Ações
    { categoria: 'Ação', palavra: 'amplificar' },
    { categoria: 'Ação', palavra: 'aplaudir' },
    { categoria: 'Ação', palavra: 'camuflar' },
    { categoria: 'Ação', palavra: 'condescender' },
    { categoria: 'Ação', palavra: 'deglutir' },
    { categoria: 'Ação', palavra: 'depredar' },
    { categoria: 'Ação', palavra: 'digladiar' },
    { categoria: 'Ação', palavra: 'envernizar' },
    { categoria: 'Ação', palavra: 'esculacho' },
    { categoria: 'Ação', palavra: 'mesclar' },
    { categoria: 'Ação', palavra: 'atacar' },
    { categoria: 'Ação', palavra: 'perturbar' },
    { categoria: 'Ação', palavra: 'prescindir' },
    { categoria: 'Ação', palavra: 'reciclar' },
    { categoria: 'Ação', palavra: 'reflorescer' },
    { categoria: 'Ação', palavra: 'reivindicar' },
    { categoria: 'Ação', palavra: 'rescindir' },
    { categoria: 'Ação', palavra: 'simulacro' },
    { categoria: 'Ação', palavra: 'vangloriar' },

    // Adjetivos
    { categoria: 'Adjetivo', palavra: 'barulhento' },
    { categoria: 'Adjetivo', palavra: 'beneficente' },
    { categoria: 'Adjetivo', palavra: 'calibrado' },
    { categoria: 'Adjetivo', palavra: 'consciente' },
    { categoria: 'Adjetivo', palavra: 'entretido' },
    { categoria: 'Adjetivo', palavra: 'esplendor' },
    { categoria: 'Adjetivo', palavra: 'estapafurdio' },
    { categoria: 'Adjetivo', palavra: 'excentrico' },
    { categoria: 'Adjetivo', palavra: 'excepcional' },
    { categoria: 'Adjetivo', palavra: 'flexivel' },
    { categoria: 'Adjetivo', palavra: 'glorioso' },
    { categoria: 'Adjetivo', palavra: 'hermetico' },
    { categoria: 'Adjetivo', palavra: 'idolatada' },
    { categoria: 'Adjetivo', palavra: 'licenciado' },
    { categoria: 'Adjetivo', palavra: 'milionario' },
    { categoria: 'Adjetivo', palavra: 'mordaz' },
    { categoria: 'Adjetivo', palavra: 'paralisado' },
    { categoria: 'Adjetivo', palavra: 'pernostico' },
    { categoria: 'Adjetivo', palavra: 'plissado' },
    { categoria: 'Adjetivo', palavra: 'prodigio' },
    { categoria: 'Adjetivo', palavra: 'serelepe' },
    { categoria: 'Adjetivo', palavra: 'simplorio' },
    { categoria: 'Adjetivo', palavra: 'sincronico' },

    // Governo
    { categoria: 'Governo', palavra: 'burocracia' },
    { categoria: 'Governo', palavra: 'diretriz' },
    { categoria: 'Governo', palavra: 'subsidio' },
    { categoria: 'Governo', palavra: 'presidente' },
    { categoria: 'Governo', palavra: 'deputado' },
    { categoria: 'Governo', palavra: 'prefeito' },
    { categoria: 'Governo', palavra: 'partido' },

    // Plantas
    { categoria: 'Planta', palavra: 'abacateiro' },
    { categoria: 'Planta', palavra: 'alcachofra' },
    { categoria: 'Planta', palavra: 'amoreira' },
    { categoria: 'Planta', palavra: 'cerejeira' },
    { categoria: 'Planta', palavra: 'arruda' },
    { categoria: 'Planta', palavra: 'cidreira' },
    { categoria: 'Planta', palavra: 'lotus' },
    { categoria: 'Planta', palavra: 'palmeira' },
    { categoria: 'Planta', palavra: 'trevo' },
    { categoria: 'Planta', palavra: 'violeta' },
    { categoria: 'Planta', palavra: 'jade' },
    { categoria: 'Planta', palavra: 'cacto' },
]


export default palavras;