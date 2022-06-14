export const initialState = {
  questions: [
    {
      title: "¿Qué debemos hacer con la basura?",
      information: {
        title: "Basura",
        text: "Si la corriente se lleva la basura, es muy probable que esta termine tapando las bocas de agua y dificulte aún más el desagote del agua. Por lo tanto, lo correcto sería cerrar las bolsas de basura y dejarlas dentro de las casas, en lo posible donde el agua no se las pueda llevar.",
      },
      answers: [
        {
          title: "Dejarla como está",
          img: "",
          correct: false,
          tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
        },
        {
          title: "Juntar la basura y no sacarla",
          img: "",
          correct: true,
          tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
        },
        {
          title: "Juntar la basura y sacarla a la calle",
          img: "",
          correct: false,
          tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
        },
      ],
    },
    {
      title:
        "¿Cuál es considerada una consecuencia ambiental de las inundaciones?",
      information: {
        title: "Tipos de consecuencias",
        text: "Sociales: pérdida de vidas humanas, daños a bienes, etc \n Económicos: disminución de la capacidad adquisitiva y de la capacidad productiva de una región \n Ambientales: las inundaciones pueden destruir las comunidades ecológicas (vegetación, animales, ...)",
      },
      answers: [
        {
          title: "Daños de infraestructura",
          img: "",
          correct: false,
          tip: "Son considerados daños económicos",
        },
        {
          title: "Pérdida de bienes",
          img: "",
          correct: false,
          tip: "Son considerados daños económicos/sociales",
        },
        {
          title: "Destrucción de comunidades ecológicas",
          img: "",
          correct: true,
          tip: "Comunidades vegetales y animales son destruidas, dificultando el rebrotamiento y colonización de las especies",
        },
      ],
    },
    {
      title:
        "¿Cómo es mejor mantener los productos peligrosos o tóxicos (productos  de  limpieza, combustibles,  ácidos,  venenos, desinfectantes, etc.)?",
      information: {
        title: "Productos peligrosos",
        text: "Estos productos pueden contaminar el agua.",
      },
      answers: [
        {
          title: "Abiertos en un cajón de la mesada.",
          img: "",
          correct: false,
          tip: "Estos productos pueden producir daños en la salud, reacciones peligrosas e incluso explosivas, por lo que es preferible que no entren en contacto con el agua ni sean llevados por la corriente.",
        },
        {
          title:
            "Abiertos en una altura donde no los alcance el agua en caso de inundación.",
          img: "",
          correct: false,
          tip: "Estos productos pueden producir daños en la salud, reacciones peligrosas e incluso explosivas, por lo que es preferible que no entren en contacto con el agua ni sean llevados por la corriente.",
        },
        {
          title:
            "Bien cerrados en una altura donde no los alcance el agua en caso de inundación.",
          img: "",
          correct: true,
          tip: "Estos productos pueden producir daños en la salud, reacciones peligrosas e incluso explosivas, por lo que es preferible que no entren en contacto con el agua ni sean llevados por la corriente.",
        },
      ],
    },
    {
      title:
        "En caso de estar en un área vulnerable ante una inundación ¿En qué momento debemos trasladarnos a un lugar seguro (casa alta, casa de vecino o familiar, o punto seguro preestablecido)?",
      information: {
        title: "Evacuación",
        text: "Es peligroso cruzar corrientes de agua que sobrepase tus rodillas.",
      },
      answers: [
        {
          title:
            "Cuando el agua supera la altura de tu tobillo y llueve por más de 20 minutos, o cuando se ha dado un aviso de evacuación.",
          img: "",
          correct: true,
          tip: "Hay que resguardarse en un lugar seguro antes de que sea peligroso movernos.",
        },
        {
          title: "Sólo si se ha dado un aviso de evacuación.",
          img: "",
          correct: false,
          tip: "Hay que resguardarse en un lugar seguro antes de que sea peligroso movernos.",
        },
        {
          title: "Cuando el agua supera la altura de las rodillas.",
          img: "",
          correct: false,
          tip: "Hay que resguardarse en un lugar seguro antes de que sea peligroso movernos.",
        },
      ],
    },
  ],
};
