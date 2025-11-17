import Container from "../../Container";
import ItemCarousel, { ListItem } from "../../ItemCaroussel";

const sampleVideoItems: ListItem[] = [
    {
        id: '1',
        title: "Réception Email",
        description:
            'Nouvel email dans votre boite',
        videoUrl: '/assets/img/reception-email.png',
        alt: "Interface de tri automatique d'emails par IA - Gestion intelligente de boîte mail professionnelle",
        keywords: [
            'tri emails automatique',
            'gestion boîte mail IA',
            'filtrage emails intelligent',
            'automatisation messagerie',
            'productivité email',
        ],
        category: 'Communication et Messagerie',
    },
    {
        id: '2',
        title: 'Analyse & Classification',
        description:
            'Scan du contenu, expéditeur, context et tri automatique des emails.',
        videoUrl: '/assets/img/analyse-classification.png',
        alt: 'Image de l\'analyse et classification des emails',
        keywords: [
            'analyse email IA',
            'classification email IA',
            'scan email IA',
            'tri email IA',
            'context email IA',
            'expéditeur email IA',
            'automatisation email IA',
            'productivité email IA',
            'gestion email IA',
        ],
        category: 'Automatisation et Productivité',
    },
    {
        id: '3',
        title: 'Génération de réponse',
        description:
            "Création d'un brouillon personnalisé et adapté.",
        videoUrl: '/assets/img/generation-reponse.png',
        alt: 'Outil IA de transcription de réunions - Résumé automatique et compte-rendu intelligent',
        keywords: [
            'génération de réponse email IA',
            'brouillon email IA',
            'personnalisation email IA',
            'adaptation email IA',
            'automatisation email IA',
            'productivité email IA',
            'gestion email IA',
        ],
        category: 'Productivité et Collaboration',
    },

    {
        id: '4',
        title: 'Validation Humaine',
        description:
            "Vous validez ou modifiez avant l'envoi.",
        videoUrl: '/assets/img/validation-email.png',
        alt: 'Système automatisé de gestion de factures - Création, relance et suivi comptable par IA',
        keywords: [
          'validation email IA',
          'modification email IA',
          'envoi email IA',
          'automatisation email IA',
          'productivité email IA',
          'gestion email IA',
        ],
        category: 'Communication et Messagerie',
    },
];



export default function HowItWorkSection() {


    return (
        <section className="flex flex-col items-center">

            <h2 className="font-thunder font-black text-7xl mb-16 text-center lg:mt-10">Comment ça marche ?</h2>
            <p className="font-roboto  text-2xl mb-20">4 étapes simple pour une intégration réussie</p>

            <Container>
                <ItemCarousel
                    items={sampleVideoItems}
                    brandColor='#F27732'
                />
            </Container>

        </section>
    )

}