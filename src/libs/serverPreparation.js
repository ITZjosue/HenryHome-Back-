const { facilitiesArray } = require("../config_db/facilities.array");
// const { locationsArray } = require("../config_db/locations.array");
const { servicesArray } = require("../config_db/services.array");
const { Facilities, Services, UserMod, Housing } = require("../db");
const { userMod } = require("../config_db/usersMod");
const { housesArray } = require("../config_db/houses.array");
const { Op } = require("sequelize");

const serverPreparation = async () => {
  try {
    facilitiesArray.forEach(async (f) => {
      await Facilities.findOrCreate({
        where: {
          name: f.toLowerCase(),
        },
      });
    });

    // locationsArray.forEach(async (f) => {
    //   await Location.findOrCreate({
    //     where: {
    //       name: f.toLowerCase() ,
    //     },
    //   });
    // });

    servicesArray.forEach(async (e) => {
      await Services.findOrCreate({
        where: {
          name: e.toLowerCase(),
        },
      });
    });
    // const { email, inputPassword, firstName, lastName, role } = userMod;
    // const userDemo = await UserMod.create({
    //   email,
    //   firstName,
    //   lastName,
    //   password: inputPassword,
    //   rol: role,
    // });
    // housesArray.forEach(async (e) => {
    //   const [house, status] = await Housing.findOrCreate({
    //     where: {
    //       name: e.name.toLowerCase(),
    //     },
    //     defaults: {
    //       pricePerNight: e.pricePerNight,
    //       numberOfBeds: e.numberOfBeds,
    //       numberOfPeople: e.numberOfPeople,
    //       description: e.description,
    //       houseRules: e.houseRules,
    //       images: e.images,
    //       status: e.status
    //     },
    //   });
    //   var servicesDB = await Services.findAll({
    //     where: { name: e.services },
    //   });
    //   var facilitiesDB = await Facilities.findAll({
    //     where: { name: e.facilities },
    //   });
    //   await house.addServices(servicesDB);
    //   await house.addFacilities(facilitiesDB);
    //   await house.setLocation(e.location);
    //   await house.setUserMod(userDemo.id);
    // });
    // const ids = await Housing.findAll({limit:6})
    // const Ids = ids.map(e=>e.id)
    // console.log(Ids)
    // await Housing.update(
    //   { status: "Accepted" },
    //   {
    //     where: {
    //       id:{ [Op.in]:Ids}
    //     },
    //   }
    // );

    console.log("Listo");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { serverPreparation };
