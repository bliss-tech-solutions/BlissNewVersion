const pngAllLogos = [
    "samved group.png",
    "AATMIYA GROUP LOGO.png",
    "HAJI BUILDCON.png",
    "VEDANT.png",
    "DESIGN STUDIO LOGO.png",
    "HAPPY GROUP.png",
    "NYSA GROUP.png",
    "ALAP-01.png",
    "MARUTI ARISE GROUP.png",
    "ADVAITYA-04.png",
    "AFFNITY GROUP.png",
    "ATHARAVA GROUP.png",
    "ARTHAM GROUP.png",
    "LILLERIA GROUP.png",
    "PARAM GROUP-08.png",
    "PAVITRA BUILDERS ( AVION LUXURIA ).png",
    "SAMRAJYA GROUP.png",
    "TIMES GROUP.png",
    "SHIVANTA SERENE-10.png",
    "DHARAM ELEGANCE-06.png",
    "SIDDHIPRIYA GROUP.png",
    "KIVA-07.png",
    "BY RADHE GROUP.png",
    "SUVAS ANANTA-02.png",
    "SUNWOODS & SHREENATH GROUP.png",
    "SHIVAAY GROUP (SHIVAY SETU).png",
    "JUNNIPER RELTOR-11.png",
    "SANTAM-05.png",
    "tatva bliss-01.png",
    "GAJANAN-03.png",
    "SHIKSHAPATRI-09.png",
    "JUNNIPER FINANCE-12.png",
    "SHYAM GROUP ( SHYAM ELEGANCE ).png",
    "ARTICAL HUB.png",
    "SHIVRUDRA COPR. ( SERENE HIEGHTS ).png",
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

export const allClientLogos = pngAllLogos.map((file) => ({
    name: formatClientName(file),
    logo: `/Images/ClientsLogos/PngAllLogos/${file}`,
}));

export const clientCategories = ["All", "Ahmedabad", "Gandhinagar", "Vadodara"];

const AllClientsByCategoriesData = clientCategories
    .filter((category) => category !== "All")
    .map((category) => ({ category }));

export default AllClientsByCategoriesData;