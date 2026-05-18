const supabase = require("./supabase");

module.exports = async (req, res) => {
  
  //get my saved locations from supabase
  if (req.method === "GET") {
    try {
      const { data, error} = await supabase
        .from("saved_locations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      res.status(200).json(data);

    } catch (error) {
      console.error("error getting locations:", error);
    }
  }

  //save a new location to supabase
  else if (req.method === "POST") {
    try {
      const { name,lat,lng}= req.body;
      const { data, error} = await supabase
        .from('saved_locations')
        .insert([{ name,lat,lng}])
        .select();

      if (error) throw error;
      res.status(201).json(data[0]);

    } catch (error) {
      console.error('Error saving location:', error);
    }
  }};