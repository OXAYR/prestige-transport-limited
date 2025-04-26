/** @format */

export default async function fetchLocationsLondon(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
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

    const areaNames = data.features.map((f) => ({
      name:
        f.properties.address_line1 || f.properties.street || f.properties.name,
      city:
        f.properties.city || f.properties.town || f.properties.village || "",
      formatted: f.properties.formatted,
      lat: f.geometry.coordinates[1],
      lon: f.geometry.coordinates[0],
    }));
    return areaNames;
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch areas", details: error.message });
  }
}
