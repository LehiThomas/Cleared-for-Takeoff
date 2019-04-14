import axios from "axios";

class AirportService {
  async getAirportInfo(airportCode) {
    const res = await axios(`https://avwx.rest/api/station/${airportCode}`);
    return res.data;
  }

  async getMETAR(airportCode) {
    const res = await axios(
      `https://api.checkwx.com/metar/${airportCode}/decoded`,
      {
        headers: { "X-API-Key": "21bf12c23808273cb75fb7cf5c" }
      }
    );
    return res.data;
  }

  async getTAF(airportCode) {
    const res = await axios(
      `https://api.checkwx.com/taf/${airportCode}/decoded`,
      {
        headers: { "X-API-Key": "21bf12c23808273cb75fb7cf5c" }
      }
    );
    return res.data;
  }
}

const airportService = new AirportService();

export default airportService;
