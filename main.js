const schoolData = {
        ENSA: {
            description: "Les ENSA offrent une formation d’ingénieurs dans plusieurs domaines technologiques modernes.",
            filieres: "Génie Informatique, Intelligence Artificielle & Data Science, Cybersécurité, Génie Réseaux & Télécom, Systèmes Embarqués & IA, Génie Logiciel, Génie Industriel, Génie Civil, Génie Électrique, Génie Mécatronique, Génie Biomédical, Génie Cyber-Défense, Génie des Données",
            duree: "5 ans",
            niveau: "Bon niveau en mathématiques et physique"
        },
        ENCG: {
            description: "Formation spécialisée dans le commerce, la gestion et le management.",
            filieres: "Finance, Marketing, Gestion, Commerce International, Audit & Contrôle de Gestion, Gestion des Ressources Humaines, Logistique & Supply Chain, Business Intelligence, Entrepreneuriat, E-Business, Management des Organisations, Publicité & Communication Digitale, Analyse Financière, Banque & Assurance",
            duree: "5 ans",
            niveau: "Bon niveau général et communication"
        },

        CPGE: {
            description: "Parcours intensif permettant d’accéder aux grandes écoles d’ingénieurs.",
            filieres: "MPSI, PCSI, TSI, ECS, ECT, BCPST, MP, PSI",
            duree: "2 ans + concours",
            niveau: "Excellent niveau scientifique"
        },

        FST: {
            description: "Études scientifiques et techniques avec possibilité de poursuivre en cycle ingénieur.",
            filieres: "Informatique, Mathématiques, Génie Électrique, Génie Informatique, Génie Industriel, Génie Mécanique, Énergies Renouvelables, Big Data & IA, Réseaux & Télécommunications, Génie Civil, Sciences de Données, Electronique & Systèmes Embarqués, Chimie Industrielle",
            duree: "3 à 5 ans",
            niveau: "Bon niveau scientifique"
        },

        ISPITS: {
            description: "Formation dans le domaine médical et paramédical.",
            filieres: "Infirmier Polyvalent, Radiologie, Laboratoire, Sage-Femme, Kinésithérapie, Urgences & Soins Intensifs, Santé Mentale, Anesthésie & Réanimation, Nutrition & Diététique, Hygiène & Santé Environnementale, Orthophonie",
            duree: "3 ans",
            niveau: "Intérêt pour la santé et les sciences"
        },

        "Faculté de Médecine": {
            description: "Études médicales longues pour devenir médecin, pharmacien ou dentiste.",
            filieres: "Médecine Générale, Pharmacie, Médecine Dentaire, Chirurgie, Cardiologie, Pédiatrie, Gynécologie, Dermatologie, Neurologie, Ophtalmologie, Psychiatrie, Anesthésie & Réanimation",
            duree: "6 à 7 ans",
            niveau: "Très bon niveau scientifique"
        },

        ENA: {
            description: "Formation en architecture et design des espaces.",
            filieres: "Architecture, Urbanisme, Design d’Espace, Architecture Durable, Patrimoine Architectural, Architecture Intérieure, Aménagement Urbain, Paysagisme",
            duree: "6 ans",
            niveau: "Créativité et dessin"
        },

        OFPPT: {
            description: "Formation pratique orientée vers le marché du travail.",
            filieres: "Développement Digital, Infrastructure Digitale, Réseaux Informatiques, Cybersécurité, Infographie, Design UI/UX, Comptabilité, Gestion des Entreprises, Électricité Industrielle, Maintenance Informatique, Commerce Digital, Audiovisuel, Génie Civil, Énergies Renouvelables, Cuisine & Hôtellerie",
            duree: "2 ans",
            niveau: "Accessible et pratique"
        },

        EST: {
            description: "École technique avec formations professionnalisantes.",
            filieres: "Développement Informatique, Génie Logiciel, Réseaux & Systèmes, Cybersécurité, Génie Industriel, Techniques de Management, Gestion Comptable & Financière, Génie Électrique, Génie Mécanique, Logistique, Commerce & Distribution, Data Analytics, Multimédia & Web Design",
            duree: "2 ans",
            niveau: "Niveau moyen à bon"
        },

        BTS: {
            description: "Brevet de Technicien Supérieur avec une formation technique et professionnelle orientée vers le marché du travail.",
            filieres: "Développement des Systèmes d’Information, Cybersécurité, Réseaux Informatiques, Systèmes Électroniques, Électromécanique, Maintenance Industrielle, Comptabilité & Gestion, Commerce International, Management Commercial, Assistant de Direction, Génie Civil, Énergies Renouvelables, Design Graphique, Audiovisuel, Tourisme & Hôtellerie",
            duree: "2 ans",
            niveau: "Bon niveau général et motivation"
        }
    };

const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');

cards.forEach(card => {
    card.style.cursor = 'pointer';

    card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    const data = schoolData[title];

    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupDescription').textContent = data.description;
    document.getElementById('popupFilieres').textContent = data.filieres;
    document.getElementById('popupDuree').textContent = data.duree;
    document.getElementById('popupNiveau').textContent = data.niveau;

    popup.classList.add('show');
    });
});

function closePopup() {
    popup.classList.remove('show');
}

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
    closePopup();
    }
});