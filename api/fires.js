module.exports = async (req,res) =>{
    try {
      const apiKey = process.env.NASA_FIRMS_API_KEY;
      const url = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/${apiKey}/VIIRS_SNPP_NRT/-125,24,-65,49/5`;
  
      // trying to debug why api not working only in vercel
      console.log('API KEY:', apiKey ? 'found' : 'missing');
      // get data from nasa firms
      const response =await fetch(url);
      const csvText = await response.text();

      console.log('CSV preview:', csvText.substring(0, 200));
  
      //parse data to json
      const rows = csvText.trim().split(/\r?\n/);
      const headers = rows[0].split(',');
  
      // convert to individual fire objects
      const fires =rows.slice(1)
      .filter(row => row.trim() !== '')
      .map(row =>{
        const values = row.split(',');
        const fire = {};
        headers.forEach((header,index) => {
          fire[header.trim()]= values[index]?.trim();
        });
        return fire;});
  
      res.status(200).json(fires);
  
    } catch (error){
      console.error("error getting fires:",error);
      //added error message to see why fire api not working
      res.status(500).json({ error: error.message });
    }};