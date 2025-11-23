import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ITSS_BLUE = '#2563eb';
const ITSS_ORANGE = '#f97316';

interface LegalContent {
  title: string;
  sections: Array<{
    heading: string;
    content: string[];
  }>;
}

const addHeader = (doc: jsPDF) => {
  doc.setFillColor(ITSS_BLUE);
  doc.rect(0, 0, 210, 35, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('IT Services & Security', 105, 15, { align: 'center' });

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Tecnología, Seguridad e Innovación', 105, 24, { align: 'center' });
};

const addFooter = (doc: jsPDF, pageNumber: number, totalPages: number) => {
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text(
    'IT Services & Security | itservice.pr4u@gmail.com | (939) 284-2551 | (787) 619-3432',
    105,
    285,
    { align: 'center' }
  );
  doc.text(`Página ${pageNumber} de ${totalPages}`, 190, 285, { align: 'right' });
};

const addDocumentTitle = (doc: jsPDF, title: string) => {
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 105, 50, { align: 'center' });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  const date = new Date().toLocaleDateString('es-PR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  doc.text(`Última actualización: Enero 2025`, 105, 58, { align: 'center' });
  doc.text(`Documento generado: ${date}`, 105, 64, { align: 'center' });
};

const generatePDF = (content: LegalContent): jsPDF => {
  const doc = new jsPDF();
  let yPosition = 75;
  const lineHeight = 6;
  const pageHeight = 280;
  const marginLeft = 20;
  const marginRight = 190;
  const maxWidth = marginRight - marginLeft;

  addHeader(doc);
  addDocumentTitle(doc, content.title);

  content.sections.forEach((section) => {
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(ITSS_BLUE);
    doc.text(section.heading, marginLeft, yPosition);
    yPosition += lineHeight + 2;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    section.content.forEach((paragraph) => {
      const lines = doc.splitTextToSize(paragraph, maxWidth);

      if (yPosition + (lines.length * lineHeight) > pageHeight) {
        doc.addPage();
        yPosition = 20;
      }

      lines.forEach((line: string) => {
        doc.text(line, marginLeft, yPosition);
        yPosition += lineHeight;
      });

      yPosition += 3;
    });

    yPosition += 5;
  });

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addFooter(doc, i, totalPages);
  }

  return doc;
};

export const downloadTermsPDF = () => {
  const content: LegalContent = {
    title: 'Términos y Condiciones',
    sections: [
      {
        heading: '1. Aceptación de Términos',
        content: [
          'Al acceder y utilizar el sitio web de IT Services & Security ("ITSS", "nosotros", "nuestro"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo, por favor no utilices nuestros servicios.'
        ]
      },
      {
        heading: '2. Servicios Ofrecidos',
        content: [
          'ITSS provee servicios de:',
          '• Instalación y mantenimiento de sistemas de seguridad (CCTV, alarmas, control de acceso)',
          '• Diseño e implementación de infraestructura de redes',
          '• Consultoría técnica en tecnología y seguridad',
          '• Soporte técnico y reparaciones',
          '• Venta de equipos y productos relacionados (próximamente)'
        ]
      },
      {
        heading: '3. Cotizaciones y Contratos',
        content: [
          '3.1 Solicitud: Las cotizaciones solicitadas a través del sitio web son gratuitas y sin compromiso.',
          '3.2 Validez: Las cotizaciones tienen validez de 30 días desde su emisión, salvo especificación contraria.',
          '3.3 Modificaciones: Cualquier cambio en el alcance del proyecto después de la cotización puede resultar en ajustes de precio.',
          '3.4 Contrato: Los servicios se formalizan mediante contrato escrito o aceptación explícita de cotización.'
        ]
      },
      {
        heading: '4. Garantías',
        content: [
          '4.1 Cobertura: Todos nuestros servicios de instalación incluyen garantía de 1 año sobre mano de obra.',
          '4.2 Equipos: Los equipos instalados están cubiertos por la garantía del fabricante (varía según marca y modelo).',
          '4.3 Exclusiones: La garantía NO cubre daños causados por:',
          '  • Mal uso o negligencia del cliente',
          '  • Desastres naturales (huracanes, inundaciones, rayos)',
          '  • Modificaciones no autorizadas por terceros',
          '  • Voltaje eléctrico inadecuado o fluctuaciones',
          '4.4 Reclamos: Para hacer válida la garantía, contacta dentro de 48 horas de detectar el problema.'
        ]
      },
      {
        heading: '5. Pagos y Facturación',
        content: [
          '5.1 Métodos: Aceptamos efectivo, cheques, transferencias bancarias, ATH Móvil y tarjetas de crédito/débito.',
          '5.2 Depósito: Se requiere un depósito del 50% para iniciar proyectos. El saldo restante se paga al completar.',
          '5.3 Proyectos Grandes: Para proyectos mayores a $10,000, se pueden acordar pagos en etapas (milestones).',
          '5.4 Mora: Facturas no pagadas después de 30 días incurren en un cargo del 1.5% mensual sobre el saldo pendiente.',
          '5.5 Emergencias: Servicios de emergencia fuera de horario tienen un cargo adicional del 50% sobre tarifa regular.'
        ]
      },
      {
        heading: '6. Cancelaciones y Reembolsos',
        content: [
          '6.1 Por el Cliente: Cancelaciones con menos de 48 horas de anticipación al servicio programado incurren en cargo del 25% del total.',
          '6.2 Reembolsos: Depósitos son reembolsables si ITSS cancela el servicio. Si el cliente cancela después de iniciado el proyecto, el reembolso será proporcional al trabajo no completado.',
          '6.3 Equipos Ordenados: Equipos ordenados especialmente para tu proyecto NO son reembolsables si decides cancelar.'
        ]
      },
      {
        heading: '7. Responsabilidad del Cliente',
        content: [
          'El cliente se compromete a:',
          '• Proveer acceso completo al área de trabajo',
          '• Asegurar que la instalación eléctrica cumpla con códigos locales',
          '• Obtener permisos necesarios de construcción (si aplica)',
          '• Proteger los equipos instalados contra vandalismo y robo',
          '• Mantener las credenciales de acceso seguras',
          '• Notificar de cualquier problema dentro de la garantía'
        ]
      },
      {
        heading: '8. Limitación de Responsabilidad',
        content: [
          '8.1 Alcance: ITSS no será responsable por:',
          '  • Pérdidas o daños indirectos, incidentales o consecuenciales',
          '  • Pérdida de datos o interrupción de negocio',
          '  • Daños causados por caso fortuito o fuerza mayor',
          '8.2 Máximo: Nuestra responsabilidad total no excederá el monto pagado por el servicio específico en cuestión.',
          '8.3 Seguridad: Los sistemas de seguridad son elementos disuasivos. ITSS no garantiza prevención absoluta de crímenes o incidentes.'
        ]
      },
      {
        heading: '9. Propiedad Intelectual',
        content: [
          'Todos los diseños, diagramas, configuraciones y documentación creada por ITSS son propiedad intelectual de la empresa. El cliente recibe licencia de uso, pero no puede reproducir, vender o distribuir estos materiales sin autorización escrita.'
        ]
      },
      {
        heading: '10. Uso del Sitio Web',
        content: [
          '10.1 Prohibido: Está prohibido:',
          '  • Usar el sitio para actividades ilegales',
          '  • Intentar acceder a áreas restringidas',
          '  • Transmitir virus o código malicioso',
          '  • Copiar o reproducir contenido sin permiso',
          '  • Usar información de contacto para spam',
          '10.2 Disponibilidad: No garantizamos disponibilidad ininterrumpida del sitio web.'
        ]
      },
      {
        heading: '11. Modificaciones',
        content: [
          'ITSS se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente al publicarse en el sitio web. Es responsabilidad del usuario revisar periódicamente estos términos.'
        ]
      },
      {
        heading: '12. Ley Aplicable',
        content: [
          'Estos términos se rigen por las leyes del Estado Libre Asociado de Puerto Rico y las leyes federales de Estados Unidos aplicables. Cualquier disputa se resolverá en los tribunales competentes de Puerto Rico.'
        ]
      },
      {
        heading: '13. Contacto',
        content: [
          'Para preguntas sobre estos términos o cualquier asunto legal:',
          'Email: itservice.pr4u@gmail.com',
          'WhatsApp: (939) 284-2551',
          'Teléfono: (787) 619-3432',
          '',
          'IT Services & Security',
          'Mayagüez, Puerto Rico',
          'Cobertura: Toda la isla'
        ]
      }
    ]
  };

  const doc = generatePDF(content);
  doc.save('ITSS_Terminos_y_Condiciones.pdf');
};

export const downloadPrivacyPDF = () => {
  const content: LegalContent = {
    title: 'Política de Privacidad',
    sections: [
      {
        heading: 'Resumen Ejecutivo',
        content: [
          'En IT Services & Security, respetamos tu privacidad y nos comprometemos a proteger cualquier información personal que compartas con nosotros.'
        ]
      },
      {
        heading: '1. Información que Recopilamos',
        content: [
          'Cuando completas formularios en nuestro sitio web o a través de anuncios en plataformas como Facebook e Instagram, recopilamos:',
          '• Nombre completo',
          '• Número de teléfono',
          '• Correo electrónico',
          '• Información sobre el servicio solicitado',
          '• Archivos adjuntos voluntarios (planos, fotos, etc.)'
        ]
      },
      {
        heading: '2. Uso de la Información',
        content: [
          'Utilizamos tu información exclusivamente para:',
          '• Responder a tu solicitud de cotización o consulta',
          '• Proveer información sobre nuestros servicios',
          '• Dar seguimiento a proyectos activos',
          '• Enviar comunicaciones relacionadas con tu solicitud',
          '• Mejorar nuestros servicios y experiencia del cliente'
        ]
      },
      {
        heading: '3. Protección de Datos',
        content: [
          'Tu información personal:',
          '• NO será vendida a terceros bajo ninguna circunstancia',
          '• NO será compartida con empresas externas para fines de marketing',
          '• Será almacenada de forma segura en servidores protegidos',
          '• Solo será accedida por personal autorizado de ITSS'
        ]
      },
      {
        heading: '4. Tus Derechos',
        content: [
          'Tienes derecho a:',
          '• Solicitar acceso a tu información personal',
          '• Corregir información inexacta',
          '• Solicitar la eliminación de tus datos',
          '• Retractarte del consentimiento en cualquier momento',
          '• Recibir una copia de tu información en formato portable'
        ]
      },
      {
        heading: '5. Cookies y Tecnologías de Rastreo',
        content: [
          'Nuestro sitio utiliza cookies para mejorar tu experiencia. Estas cookies nos ayudan a:',
          '• Recordar tus preferencias',
          '• Analizar el tráfico del sitio',
          '• Personalizar contenido',
          '• Medir la efectividad de campañas publicitarias'
        ]
      },
      {
        heading: '6. Cumplimiento Legal',
        content: [
          'Esta política cumple con las regulaciones de privacidad de Meta (Facebook/Instagram) y las leyes aplicables en Puerto Rico y Estados Unidos.'
        ]
      },
      {
        heading: 'Contacto',
        content: [
          'Para ejercer tus derechos o cualquier pregunta sobre esta política:',
          'Email: itservice.pr4u@gmail.com',
          'WhatsApp: (939) 284-2551',
          'Teléfono: (787) 619-3432'
        ]
      }
    ]
  };

  const doc = generatePDF(content);
  doc.save('ITSS_Politica_de_Privacidad.pdf');
};

export const downloadWarrantyPDF = () => {
  const content: LegalContent = {
    title: 'Términos de Garantía',
    sections: [
      {
        heading: '1 Año de Garantía en Mano de Obra',
        content: [
          'Todos nuestros servicios de instalación incluyen garantía completa de 1 año sobre la mano de obra, sin costo adicional.',
          '',
          'Cobertura incluye:',
          '• Instalación: 1 año',
          '• Configuración: 1 año',
          '• Cableado: 1 año'
        ]
      },
      {
        heading: 'Garantía de Equipos',
        content: [
          'Los equipos que instalamos están cubiertos por la garantía del fabricante, la cual varía según marca y modelo:',
          '',
          '• Hikvision: 2-3 años',
          '• Uniview: 2 años',
          '• Ruijie: 1 año (lifetime limitado)',
          '• Mikrotik: 1 año',
          '• Linear / LiftMaster: 1-2 años',
          '• Epcom: 1 año'
        ]
      },
      {
        heading: 'Qué SÍ Cubre la Garantía',
        content: [
          '• Defectos de fabricación en equipos',
          '• Fallas en la instalación o configuración',
          '• Problemas con cableado estructurado',
          '• Errores en programación de sistemas',
          '• Reemplazo de equipos defectuosos (con RMA del fabricante)',
          '• Mano de obra para correcciones',
          '• Soporte técnico remoto ilimitado'
        ]
      },
      {
        heading: 'Qué NO Cubre la Garantía',
        content: [
          '• Daños por desastres naturales (huracanes, inundaciones, rayos)',
          '• Mal uso o negligencia del usuario',
          '• Modificaciones no autorizadas por terceros',
          '• Daños físicos intencionales o vandalismo',
          '• Problemas eléctricos de la instalación del cliente',
          '• Fluctuaciones de voltaje o apagones',
          '• Robo de equipos instalados'
        ]
      },
      {
        heading: 'Cómo Hacer un Reclamo de Garantía',
        content: [
          'Paso 1: Contacta Inmediatamente (< 48 horas)',
          'Llámanos o escríbenos dentro de 48 horas de detectar el problema.',
          '',
          'Paso 2: Diagnóstico Remoto (< 24 horas)',
          'Intentaremos resolver el problema por teléfono o acceso remoto primero.',
          '',
          'Paso 3: Visita Técnica si necesario (24-72 horas)',
          'Si no se resuelve remotamente, programamos visita sin cargo dentro de garantía.',
          '',
          'Paso 4: Resolución (según caso)',
          'Reparamos o reemplazamos según corresponda. RMA del fabricante si aplica.'
        ]
      },
      {
        heading: 'Contratos de Mantenimiento',
        content: [
          'Ofrecemos Contratos de Mantenimiento que extienden la cobertura y añaden beneficios adicionales:',
          '',
          'Plan Básico:',
          '• 2 visitas al año',
          '• Soporte prioritario',
          '• 10% descuento en servicios',
          '',
          'Plan Plus:',
          '• 4 visitas al año',
          '• Soporte 24/7',
          '• 20% descuento en servicios',
          '',
          'Plan Premium:',
          '• Visitas ilimitadas',
          '• Emergencias sin cargo adicional',
          '• 30% descuento en servicios'
        ]
      },
      {
        heading: 'Contacto para Reclamos',
        content: [
          '¿Necesitas hacer un reclamo? Nuestro equipo está listo para ayudarte.',
          '',
          'WhatsApp: (939) 284-2551',
          'Teléfono: (787) 619-3432',
          'Email: itservice.pr4u@gmail.com',
          '',
          'Horario de atención: Lunes a Viernes, 8:00 AM - 5:00 PM',
          'Emergencias: Disponible 24/7 (con cargo adicional)'
        ]
      }
    ]
  };

  const doc = generatePDF(content);
  doc.save('ITSS_Terminos_de_Garantia.pdf');
};
