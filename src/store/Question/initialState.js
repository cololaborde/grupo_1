import image1 from "../../images/p1i1.png";
import image2 from "../../images/p1i2.png";
import image3 from "../../images/p1i3.png";

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
          img: image1,
          correct: false,
          tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
        },
        {
          title: "Juntar la basura y no sacarla",
          img: image2,
          correct: true,
          tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
        },
        {
          title: "Juntar la basura y sacarla a la calle",
          img: image3,
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
      link: "Recomendaciones-Antes",
    },
    {
      title: "¿Cuál listado corresponde a un mejor kit de emergencia?",
      information: {
        title: "Kit de emergencia",
        text: "Un kit de emergencia debería contener sólo elementos básicos para usar, o que no queramos perder, en caso de tener que evacuar durante una inundación.",
      },
      answers: [
        {
          title:
            "Agua embotellada, productos de limpieza, documentos y parlantes",
          img: "",
          correct: false,
          tip: "Los productos de limpieza y parlantes no son elementos básicos necesarios ante una evacuación",
        },
        {
          title:
            "Agua embotellada, alimentos enlatados, productos de limpieza, documentos y muda seca de ropa",
          img: "",
          correct: false,
          tip: "Los productos de limpieza y parlantes no son elementos básicos necesarios ante una evacuación",
        },
        {
          title:
            "Agua embotellada, alimentos enlatados, documentos, dinero, muda seca de ropa y medicamentos",
          img: "",
          correct: true,
          tip: "Los productos de limpieza y parlantes no son elementos básicos necesarios ante una evacuación",
        },
      ],
      link: "Recomendaciones-Antes",
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
      link: "Recomendaciones-Durante",
    },
    {
      title:
        "¿Qué debemos hacer con los servicios de electricidad, gas y agua?",
      information: {
        title: "Servicios",
        text: "Durante una inundación, los servicios pueden verse comprometidos y utilizarlos puede provocar más problemas.",
      },
      answers: [
        {
          title: "Cortarlos al comienzo de la inundación",
          img: "",
          correct: true,
          tip: "Cortar los servicios debe ser lo primero que debemos hacer.",
        },
        {
          title: "Usarlos hasta que se corten sólos",
          img: "",
          correct: false,
          tip: "Cortar los servicios debe ser lo primero que debemos hacer.",
        },
        {
          title: "Cortarlos solo en caso de evacuación",
          img: "",
          correct: false,
          tip: "Cortar los servicios debe ser lo primero que debemos hacer.",
        },
      ],
      link: "Recomendaciones-Durante",
    },
    {
      title:
        "¿Qué debemos hacer con los electrodomésticos grandes (heladera, lavarropas, etc)?",
      information: {
        title: "Electrodomésticos grandes",
        text: "Es recomendable mantener las salidas libres en caso de emergencia.",
      },
      answers: [
        {
          title: "Mantenerlos cerrados y desenchufarlos.",
          img: "",
          correct: false,
          tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
        },
        {
          title: "Abrir sus puertas y dejarlos enchufados.",
          img: "",
          correct: true,
          tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
        },
        {
          title: "Moverlos cerca de las puertas para que obstruyan el agua.",
          img: "",
          correct: false,
          tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
        },
      ],
      link: "Recomendaciones-Durante",
    },
    // Pregunta con mapas y elección de cuál sería el punto de encuentro recomendado. Mapa con 3 puntos de encuentro, lugar actual, y zonas vulnerables al agua.
    // {
    //   title:
    //     "",
    //   information: {
    //     title: "",
    //     text: "",
    //   },
    //   answers: [
    //     {
    //       title:
    //         "",
    //       img: "",
    //       correct: true,
    //       tip: "",
    //     },
    //     {
    //       title: "",
    //       img: "",
    //       correct: false,
    //       tip: "",
    //     },
    //     {
    //       title: "",
    //       img: "",
    //       correct: false,
    //       tip: "",
    //     },
    //   ],
    //   link: "",
    // },
    {
      title:
        "¿Cómo debemos limpiar las paredes, pisos y otras superficies afectadas por la inundación?",
      information: {
        title: "Limpieza",
        text: "Lo más importante al limpiar las superficies es la desinfección.",
      },
      answers: [
        {
          title: "Ventilando las habitaciones y limpiando con agua y lavandina",
          img: "",
          correct: true,
          tip: "El agua de inundación puede estar contaminada y generar problemas de salud. El agua con lavandina ayuda a desinfectar y disminuir los riesgos.",
        },
        {
          title:
            "Ventilando las habitaciones y limpiando con agua y detergente",
          img: "",
          correct: false,
          tip: "El agua de inundación puede estar contaminada y generar problemas de salud. El agua con lavandina ayuda a desinfectar y disminuir los riesgos.",
        },
        {
          title: "Limpiando con agua y gaseosa",
          img: "",
          correct: false,
          tip: "El agua de inundación puede estar contaminada y generar problemas de salud. El agua con lavandina ayuda a desinfectar y disminuir los riesgos.",
        },
      ],
      link: "Recomendaciones-Después",
    },
    // {
    //   title:
    //     "",
    //   information: {
    //     title: "",
    //     text: "",
    //   },
    //   answers: [
    //     {
    //       title:
    //         "",
    //       img: "",
    //       correct: true,
    //       tip: "",
    //     },
    //     {
    //       title: "",
    //       img: "",
    //       correct: false,
    //       tip: "",
    //     },
    //     {
    //       title: "",
    //       img: "",
    //       correct: false,
    //       tip: "",
    //     },
    //   ],
    //   link: "",
    // },
  ],
};
