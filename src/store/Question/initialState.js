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
  ],
};
