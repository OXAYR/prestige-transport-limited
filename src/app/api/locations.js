/** @format */

export default async function fetchLocationsLondon(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  console.log("jere o tje qi ===>", req);
  const searchQuery = req || "Camden";

  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
    searchQuery
  )}&filter=countrycode:gb&apiKey=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch from Geoapify" });
    }

    const data = await response.json();
    console.log("here is hte data====", data);

    const londonAreas = data.features.filter(
      (feature) =>
        feature.properties.county === "Greater London" ||
        feature.properties.formatted?.includes("London")
    );

    const areaNames = londonAreas.map((f) => ({
      name: f.properties.city || f.properties.address_line1,
      formatted: f.properties.formatted,
      lat: f.geometry.coordinates[1],
      lon: f.geometry.coordinates[0],
    }));
    console.log("here is the area name ", areaNames);
    return areaNames;
  } catch (error) {
    // console.error("Error fetching data:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch areas", details: error.message });
  }
}
