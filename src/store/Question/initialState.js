// import q1i1 from "../../images/q1i1.png";
// import q1i2 from "../../images/q1i2.png";
// import q1i3 from "../../images/q1i3.png";
// import q2i1 from "../../images/q2i1.png";
// import q2i2 from "../../images/q2i2.png";
// import q2i3 from "../../images/q2i3.png";
import q3i1 from "../../images/q3i1.png";
import q3i2 from "../../images/q3i2.png";
import q3i3 from "../../images/q3i3.png";
import q4i1 from "../../images/q4i1.png";
import q4i2 from "../../images/q4i2.png";
import q4i3 from "../../images/q4i3.png";
import q5i1 from "../../images/q5i1.png";
import q5i2 from "../../images/q5i2.png";
import q5i3 from "../../images/q5i3.png";
import q6i1 from "../../images/q6i1.png";
import q6i2 from "../../images/q6i2.png";
import q6i3 from "../../images/q6i3.png";
import q7i1 from "../../images/q7i1.png";
import q7i2 from "../../images/q7i2.png";
import q7i3 from "../../images/q7i3.png";
import q8i1 from "../../images/q8i1.png";
import q8i2 from "../../images/q8i2.png";
import q8i3 from "../../images/q8i3.png";
// import q9i1 from "../../images/q9i1.png";
// import q9i2 from "../../images/q9i2.png";
// import q9i3 from "../../images/q9i3.png";
// import q10i1 from "../../images/q10i1.png";
// import q10i2 from "../../images/q10i2.png";
// import q10i3 from "../../images/q10i3.png";

export const questions = [
  // {
  //   title: "¿Qué debemos hacer con la basura?",
  //   information: {
  //     title: "Basura",
  //     text: "Si la corriente se lleva la basura, es muy probable que esta termine tapando las bocas de agua y dificulte aún más el desagote del agua. Por lo tanto, lo correcto sería cerrar las bolsas de basura y dejarlas dentro de las casas, en lo posible donde el agua no se las pueda llevar.",
  //   },
  //   answers: [
  //     {
  //       title: "Dejarla como está",
  //       img: q1i1,
  //       imgAlt: "",
  //       correct: false,
  //       tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
  //     },
  //     {
  //       title: "Juntar la basura y no sacarla",
  //       img: q1i2,
  //       imgAlt: "",
  //       correct: true,
  //       tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
  //     },
  //     {
  //       title: "Juntar la basura y sacarla a la calle",
  //       img: q1i3,
  //       imgAlt: "",
  //       correct: false,
  //       tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
  //     },
  //   ],
  // },
  // {
  //   title:
  //     "¿Cuál es considerada una consecuencia ambiental de las inundaciones?",
  //   information: {
  //     title: "Tipos de consecuencias",
  //     text: "Sociales: pérdida de vidas humanas, daños a bienes, etc \n Económicos: disminución de la capacidad adquisitiva y de la capacidad productiva de una región \n Ambientales: las inundaciones pueden destruir las comunidades ecológicas (vegetación, animales, ...)",
  //   },
  //   answers: [
  //     {
  //       title: "Daños de infraestructura",
  //       img: q2i1,
  //       imgAlt: "",
  //       correct: false,
  //       tip: "Son considerados daños económicos",
  //     },
  //     {
  //       title: "Pérdida de bienes",
  //       img: q2i2,
  //       imgAlt: "",
  //       correct: false,
  //       tip: "Son considerados daños económicos/sociales",
  //     },
  //     {
  //       title: "Destrucción de comunidades ecológicas",
  //       img: q2i3,
  //       imgAlt: "",
  //       correct: true,
  //       tip: "Comunidades vegetales y animales son destruidas, dificultando el rebrotamiento y colonización de las especies",
  //     },
  //   ],
  // },
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
        img: q3i1,
        imgAlt: "Productos de limpieza abiertos en un cajón",
        correct: false,
        tip: "Estos productos pueden producir daños en la salud, reacciones peligrosas e incluso explosivas, por lo que es preferible que no entren en contacto con el agua ni sean llevados por la corriente.",
      },
      {
        title:
          "Abiertos en una altura donde no los alcance el agua en caso de inundación.",
        img: q3i2,
        imgAlt: "Productos de limpieza abiertos en una alacena",
        correct: false,
        tip: "Estos productos pueden producir daños en la salud, reacciones peligrosas e incluso explosivas, por lo que es preferible que no entren en contacto con el agua ni sean llevados por la corriente.",
      },
      {
        title:
          "Bien cerrados en una altura donde no los alcance el agua en caso de inundación.",
        img: q3i3,
        imgAlt: "Productos de limpieza cerrados en una alacena",
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
        img: q4i1,
        imgAlt:
          "Una botella de agua, una escoba, un par de parlantes y un documento",
        correct: false,
        tip: "Los productos de limpieza y parlantes no son elementos básicos necesarios ante una evacuación",
      },
      {
        title:
          "Agua embotellada, alimentos enlatados, productos de limpieza, documentos y muda seca de ropa",
        img: q4i2,
        imgAlt:
          "Una botella de agua, una escoba, un documento, dos latas de alimentos y ropa apilada",
        correct: false,
        tip: "Los productos de limpieza y parlantes no son elementos básicos necesarios ante una evacuación",
      },
      {
        title:
          "Agua embotellada, alimentos enlatados, documentos, dinero, muda seca de ropa y medicamentos",
        img: q4i3,
        imgAlt:
          "Una botella de agua, un documento, dos latas de alimentos, ropa apilada y dos botellas de medicamentos",
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
        img: q5i1,
        imgAlt:
          "Persona con agua a la altura de los tobillos, una nube de lluvia y una señal de emergencia",
        correct: true,
        tip: "Hay que resguardarse en un lugar seguro antes de que sea peligroso movernos.",
      },
      {
        title: "Sólo si se ha dado un aviso de evacuación.",
        img: q5i2,
        imgAlt:
          "Una señal de emergencia y un cartel de evacuación de emergencia",
        correct: false,
        tip: "Hay que resguardarse en un lugar seguro antes de que sea peligroso movernos.",
      },
      {
        title: "Cuando el agua supera la altura de las rodillas.",
        img: q5i3,
        imgAlt: "Persona con agua a la altura de la cintura",
        correct: false,
        tip: "Hay que resguardarse en un lugar seguro antes de que sea peligroso movernos.",
      },
    ],
    link: "Recomendaciones-Durante",
  },
  {
    title: "¿Qué debemos hacer con los servicios de electricidad, gas y agua?",
    information: {
      title: "Servicios",
      text: "Durante una inundación, los servicios pueden verse comprometidos y utilizarlos puede provocar más problemas.",
    },
    answers: [
      {
        title: "Cortarlos al comienzo de la inundación",
        img: q6i1,
        imgAlt: "Señal de un usar canilla de agua",
        correct: true,
        tip: "Cortar los servicios debe ser lo primero que debemos hacer.",
      },
      {
        title: "Usarlos hasta que se corten sólos",
        img: q6i2,
        imgAlt: "Canilla de agua goteando",
        correct: false,
        tip: "Cortar los servicios debe ser lo primero que debemos hacer.",
      },
      {
        title: "Cortarlos solo en caso de evacuación",
        img: q6i3,
        imgAlt:
          "Señal de un usar canilla de agua y un cartel de evacuación de emergencia",
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
        img: q7i1,
        imgAlt: "Heladera cerrada y desenchufada",
        correct: false,
        tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
      },
      {
        title: "Abrir sus puertas y dejarlos enchufados.",
        img: q7i2,
        imgAlt: "Heladera abierta y enchufada",
        correct: true,
        tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
      },
      {
        title: "Moverlos cerca de las puertas para que obstruyan el agua.",
        img: q7i3,
        imgAlt: "Heladera cerrada frente a una puerta",
        correct: false,
        tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
      },
    ],
    link: "Recomendaciones-Durante",
  },
  // // Pregunta con mapas y elección de cuál sería el punto de encuentro recomendado. Mapa con 3 puntos de encuentro, lugar actual, y zonas vulnerables al agua.
  // // {
  // //   title:
  // //     "",
  // //   information: {
  // //     title: "",
  // //     text: "",
  // //   },
  // //   answers: [
  // //     {
  // //       title:
  // //         "",
  // //       img: q3i1,
  // //       correct: true,
  // //       tip: "",
  // //     },
  // //     {
  // //       title: "",
  // //       img: q3i1,
  // //       correct: false,
  // //       tip: "",
  // //     },
  // //     {
  // //       title: "",
  // //       img: q3i1,
  // //       correct: false,
  // //       tip: "",
  // //     },
  // //   ],
  // //   link: "",
  // // },
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
        img: q8i1,
        imgAlt:
          "Un balde de agua, un envase de lavandina y un símbolo de viento",
        correct: true,
        tip: "El agua de inundación puede estar contaminada y generar problemas de salud. El agua con lavandina ayuda a desinfectar y disminuir los riesgos.",
      },
      {
        title: "Ventilando las habitaciones y limpiando con agua y detergente",
        img: q8i2,
        imgAlt:
          "Un balde de agua, un envase de detergente y un símbolo de viento",
        correct: false,
        tip: "El agua de inundación puede estar contaminada y generar problemas de salud. El agua con lavandina ayuda a desinfectar y disminuir los riesgos.",
      },
      {
        title: "Limpiando con agua y gaseosa",
        img: q8i3,
        imgAlt: "Un balde de agua y una botella de gaseosa cola",
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
  //       img: q3i1,
  //       correct: true,
  //       tip: "",
  //     },
  //     {
  //       title: "",
  //       img: q3i1,
  //       correct: false,
  //       tip: "",
  //     },
  //     {
  //       title: "",
  //       img: q3i1,
  //       correct: false,
  //       tip: "",
  //     },
  //   ],
  //   link: "",
  // },
];

export const initialState = {
  questions: [
    // {
    //   title: "¿Qué debemos hacer con la basura?",
    //   information: {
    //     title: "Basura",
    //     text: "Si la corriente se lleva la basura, es muy probable que esta termine tapando las bocas de agua y dificulte aún más el desagote del agua. Por lo tanto, lo correcto sería cerrar las bolsas de basura y dejarlas dentro de las casas, en lo posible donde el agua no se las pueda llevar.",
    //   },
    //   answers: [
    //     {
    //       title: "Dejarla como está",
    //       img: q1i1,
    //       imgAlt: "",
    //       correct: false,
    //       tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
    //     },
    //     {
    //       title: "Juntar la basura y no sacarla",
    //       img: q1i2,
    //       imgAlt: "",
    //       correct: true,
    //       tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
    //     },
    //     {
    //       title: "Juntar la basura y sacarla a la calle",
    //       img: q1i3,
    //       imgAlt: "",
    //       correct: false,
    //       tip: "La corriente puede llevarse la basura y esta tapar las boca de agua",
    //     },
    //   ],
    // },
    // {
    //   title:
    //     "¿Cuál es considerada una consecuencia ambiental de las inundaciones?",
    //   information: {
    //     title: "Tipos de consecuencias",
    //     text: "Sociales: pérdida de vidas humanas, daños a bienes, etc \n Económicos: disminución de la capacidad adquisitiva y de la capacidad productiva de una región \n Ambientales: las inundaciones pueden destruir las comunidades ecológicas (vegetación, animales, ...)",
    //   },
    //   answers: [
    //     {
    //       title: "Daños de infraestructura",
    //       img: q2i1,
    //       imgAlt: "",
    //       correct: false,
    //       tip: "Son considerados daños económicos",
    //     },
    //     {
    //       title: "Pérdida de bienes",
    //       img: q2i2,
    //       imgAlt: "",
    //       correct: false,
    //       tip: "Son considerados daños económicos/sociales",
    //     },
    //     {
    //       title: "Destrucción de comunidades ecológicas",
    //       img: q2i3,
    //       imgAlt: "",
    //       correct: true,
    //       tip: "Comunidades vegetales y animales son destruidas, dificultando el rebrotamiento y colonización de las especies",
    //     },
    //   ],
    // },
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
          img: q3i1,
          imgAlt: "Productos de limpieza abiertos en un cajón",
          correct: false,
          tip: "Estos productos pueden producir daños en la salud, reacciones peligrosas e incluso explosivas, por lo que es preferible que no entren en contacto con el agua ni sean llevados por la corriente.",
        },
        {
          title:
            "Abiertos en una altura donde no los alcance el agua en caso de inundación.",
          img: q3i2,
          imgAlt: "Productos de limpieza abiertos en una alacena",
          correct: false,
          tip: "Estos productos pueden producir daños en la salud, reacciones peligrosas e incluso explosivas, por lo que es preferible que no entren en contacto con el agua ni sean llevados por la corriente.",
        },
        {
          title:
            "Bien cerrados en una altura donde no los alcance el agua en caso de inundación.",
          img: q3i3,
          imgAlt: "Productos de limpieza cerrados en una alacena",
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
          img: q4i1,
          imgAlt:
            "Una botella de agua, una escoba, un par de parlantes y un documento",
          correct: false,
          tip: "Los productos de limpieza y parlantes no son elementos básicos necesarios ante una evacuación",
        },
        {
          title:
            "Agua embotellada, alimentos enlatados, productos de limpieza, documentos y muda seca de ropa",
          img: q4i2,
          imgAlt:
            "Una botella de agua, una escoba, un documento, dos latas de alimentos y ropa apilada",
          correct: false,
          tip: "Los productos de limpieza y parlantes no son elementos básicos necesarios ante una evacuación",
        },
        {
          title:
            "Agua embotellada, alimentos enlatados, documentos, dinero, muda seca de ropa y medicamentos",
          img: q4i3,
          imgAlt:
            "Una botella de agua, un documento, dos latas de alimentos, ropa apilada y dos botellas de medicamentos",
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
          img: q5i1,
          imgAlt:
            "Persona con agua a la altura de los tobillos, una nube de lluvia y una señal de emergencia",
          correct: true,
          tip: "Hay que resguardarse en un lugar seguro antes de que sea peligroso movernos.",
        },
        {
          title: "Sólo si se ha dado un aviso de evacuación.",
          img: q5i2,
          imgAlt:
            "Una señal de emergencia y un cartel de evacuación de emergencia",
          correct: false,
          tip: "Hay que resguardarse en un lugar seguro antes de que sea peligroso movernos.",
        },
        {
          title: "Cuando el agua supera la altura de las rodillas.",
          img: q5i3,
          imgAlt: "Persona con agua a la altura de la cintura",
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
          img: q6i1,
          imgAlt: "Señal de un usar canilla de agua",
          correct: true,
          tip: "Cortar los servicios debe ser lo primero que debemos hacer.",
        },
        {
          title: "Usarlos hasta que se corten sólos",
          img: q6i2,
          imgAlt: "Canilla de agua goteando",
          correct: false,
          tip: "Cortar los servicios debe ser lo primero que debemos hacer.",
        },
        {
          title: "Cortarlos solo en caso de evacuación",
          img: q6i3,
          imgAlt:
            "Señal de un usar canilla de agua y un cartel de evacuación de emergencia",
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
          img: q7i1,
          imgAlt: "Heladera cerrada y desenchufada",
          correct: false,
          tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
        },
        {
          title: "Abrir sus puertas y dejarlos enchufados.",
          img: q7i2,
          imgAlt: "Heladera abierta y enchufada",
          correct: true,
          tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
        },
        {
          title: "Moverlos cerca de las puertas para que obstruyan el agua.",
          img: q7i3,
          imgAlt: "Heladera cerrada frente a una puerta",
          correct: false,
          tip: "Los electrodomésticos grandes pueden flotar y tapar las salidas, impidiendo la evacuación en caso de emergencia.",
        },
      ],
      link: "Recomendaciones-Durante",
    },
    // // Pregunta con mapas y elección de cuál sería el punto de encuentro recomendado. Mapa con 3 puntos de encuentro, lugar actual, y zonas vulnerables al agua.
    // // {
    // //   title:
    // //     "",
    // //   information: {
    // //     title: "",
    // //     text: "",
    // //   },
    // //   answers: [
    // //     {
    // //       title:
    // //         "",
    // //       img: q3i1,
    // //       correct: true,
    // //       tip: "",
    // //     },
    // //     {
    // //       title: "",
    // //       img: q3i1,
    // //       correct: false,
    // //       tip: "",
    // //     },
    // //     {
    // //       title: "",
    // //       img: q3i1,
    // //       correct: false,
    // //       tip: "",
    // //     },
    // //   ],
    // //   link: "",
    // // },
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
          img: q8i1,
          imgAlt:
            "Un balde de agua, un envase de lavandina y un símbolo de viento",
          correct: true,
          tip: "El agua de inundación puede estar contaminada y generar problemas de salud. El agua con lavandina ayuda a desinfectar y disminuir los riesgos.",
        },
        {
          title:
            "Ventilando las habitaciones y limpiando con agua y detergente",
          img: q8i2,
          imgAlt:
            "Un balde de agua, un envase de detergente y un símbolo de viento",
          correct: false,
          tip: "El agua de inundación puede estar contaminada y generar problemas de salud. El agua con lavandina ayuda a desinfectar y disminuir los riesgos.",
        },
        {
          title: "Limpiando con agua y gaseosa",
          img: q8i3,
          imgAlt: "Un balde de agua y una botella de gaseosa cola",
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
    //       img: q3i1,
    //       correct: true,
    //       tip: "",
    //     },
    //     {
    //       title: "",
    //       img: q3i1,
    //       correct: false,
    //       tip: "",
    //     },
    //     {
    //       title: "",
    //       img: q3i1,
    //       correct: false,
    //       tip: "",
    //     },
    //   ],
    //   link: "",
    // },
  ],
  index: 0,
  currentQuestion: questions[0],
  selectedAnswer: null,
  answered: false,
  finished: false,
};
