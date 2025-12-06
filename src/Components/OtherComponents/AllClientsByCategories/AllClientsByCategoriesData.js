const clientLogoFiles = [
    "samruddh.png",
    "pravish.png",
    "origingroup.png",
    "Vraj.png",
    "VrBuildcon.png",
    "VisionCreativeGroup.png",
    "Vinayak.png",
    "Verdana.png",
    "VRGroup.png",
    "Trisha.png",
    "TimesSquareArcadeGroup.png",
    "TheOrion.png",
    "TheAurohgroup.png",
    "The1st.png",
    "TheAdress.png",
    "TNTC.png",
    "TGS.png",
    "SwarnimShrushti.png",
    "SwastikRise.png",
    "SwaraBuildingHarmony.png",
    "SwamiNaraynGroup.png",
    "Sunwoods.png",
    "Sundaramgroup.png",
    "Sohamgroup.png",
    "Solitaire.png",
    "SparshVilla.png",
    "Skydeck78.png",
    "Shypram.png",
    "Shyam.png",
    "Shyamal.png",
    "ShrimayPulence.png",
    "ShrimadGlory.png",
    "ShreemMaxima.png",
    "ShreemaLuxuria.png",
    "ShreeHari.png",
    "ShreemAvdhesh.png",
    "Shivanta.png",
    "ShivantaGroup.png",
    "Shivana.png",
    "ShivalikSky.png",
    "Shilpgroup.png",
    "ShineSwasti.png",
    "Shashwatgroup.png",
    "Shashvat.png",
    "Sattva.png",
    "Sharanya.png",
    "SarthakPulse.png",
    "SaralBuildCon.png",
    "SamdevAmara.png",
    "Sahashya.png",
    "Sakargroup.png",
    "SamanvayRealty.png",
    "SafalBlisss.png",
    "SWCSkyLight.png",
    "RandRGroup.png",
    "Regalia.png",
    "RoyalRevanta3.png",
    "PushkarLuxuria.png",
    "PushkarGold.png",
    "PushkarIndstrialHub.png",
    "Proxima.png",
    "Praharsh.png",
    "PrathanaGroup.png",
    "OrynGroup.png",
    "NysaGroup.png",
    "OmElegance.png",
    "Nyalkaran.png",
    "Nest.png",
    "NirgunTrust.png",
    "MoneyPlantJunction.png",
    "MadhuvanGroup.png",
    "MarsArise.png",
    "Maruti.png",
    "LoveKuchVilla.png",
    "Lilleria.png",
    "LaxmiSkycity.png",
    "LaxmiDevelopers.png",
    "Kalashgroup.png",
    "KasperGenesis.png",
    "Happygroup.png",
    "HarmonyHarikesh.png",
    "ImperialSky.png",
    "GrandCity.png",
    "GoodEarth.png",
    "Elevate.png",
    "Elite.png",
    "Ganesha48.png",
    "DurgaDeveloper.png",
    "EarthEleanor.png",
    "EktaDevelopers.png",
    "DhartiSaket.png",
    "Dhanani.png",
    "DevLifeSpaces.png",
    "DesignStudio.png",
    "DHSOrbit.png",
    "D&CDevelopers.png",
    "CourtYard.png",
    "BinoriLogo.png",
    "AyanamHappiness.png",
    "BREnterprices.png",
    "AmarGroup.png",
    "Aatmiya.png",
    "AtharvLandmark.png",
];

const formatClientName = (fileName) => {
    const baseName = fileName.replace(/\.[^/.]+$/, "");
    const withSpaces = baseName
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[-_]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    return withSpaces
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

// Helper function to find logo file by client name
const findLogoFile = (clientName) => {
    const normalizedName = clientName.toLowerCase().replace(/\s+/g, "");
    
    // Direct mappings for Vadodara clients
    const vadodaraLogoMap = {
        "kaspergenesis": "KasperGenesis.png",
        "nysagroup": "NysaGroup.png",
        "associatedesignstudio": "DesignStudio.png",
        "amargroup": "AmarGroup.png",
        "sparshvilla": "SparshVilla.png",
        "aatmiyaheights": "Aatmiya.png",
        "aatmiya15grandvilla": "Aatmiya.png",
        "aatmiya18grandvilla": "Aatmiya.png",
        "aatmiya10grandvilla": "Aatmiya.png",
        "lilleria": "Lilleria.png",
        "shrimaygroup": "ShrimayPulence.png",
        "atharvagroup": "AtharvLandmark.png",
        "sundaramstatus": "Sundaramgroup.png",
    };

    const mappedLogo = vadodaraLogoMap[normalizedName];
    if (mappedLogo) {
        return mappedLogo;
    }

    // Try to find in existing files
    const found = clientLogoFiles.find((file) => {
        const fileBase = file.replace(/\.[^/.]+$/, "").toLowerCase();
        return normalizedName.includes(fileBase) || fileBase.includes(normalizedName);
    });

    return found || null;
};

// All clients (for Ahmedabad and Gandhinagar)
const allClients = clientLogoFiles.map((file) => ({
    name: formatClientName(file),
    logo: `/Images/ClientsLogos/${file}`,
}));

// Vadodara specific clients
const vadodaraClientsList = [
    "KASPER GENESIS",
    "JUNIPPER",
    "NYSA GROUP",
    "SAMYAK MIDTOWN",
    "ASSOCIATE DESIGN STUDIO",
    "PROPNET REALTY",
    "JUNNIPER FINANCE",
    "SAMBHAV GROUP",
    "SAMARTHA SPRINGS",
    "SUNDARAM STATUS",
    "SAMARTHA MEADOWS",
    "AMAR GROUP",
    "SPARSH VILLA",
    "AATMIYA HEIGHTS",
    "AATMIYA 15 GRAND VILLA",
    "AATMIYA 18 GRAND VILLA",
    "AATMIYA 10 GRAND VILLA",
    "PARK RESIDENCY",
    "LILLERIA",
    "KRISHIV INFRA",
    "UNITY GROUP",
    "Devashay Veronica",
    "shrimay group",
    "Shree Aarna Villa",
    "Anaya Bunglows",
    "Anaya Eternity",
    "GT",
    "Ar. Lixus Spaces",
    "AURO PARADISE",
    "Atharva Group",
    "Dream 24",
    "AVION LUXURIA",
];

const vadodaraClients = vadodaraClientsList.map((clientName) => {
    const logoFile = findLogoFile(clientName);
    return {
        name: clientName,
        logo: logoFile ? `/Images/ClientsLogos/${logoFile}` : null, // null if logo not found
    };
});

const AllClientsByCategoriesData = [
    {
        category: "Ahmedabad",
        clients: allClients,
    },
    {
        category: "Gandhinagar",
        clients: allClients,
    },
    {
        category: "Vadodara",
        clients: vadodaraClients,
    },
];

export default AllClientsByCategoriesData;