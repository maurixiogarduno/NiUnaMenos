const Atm = require('../models/atm')

const atmCtrl = {};

//Obtener todos los datos
atmCtrl.getAtm = async (req, res) => {
   const atms = await Atm.find();
   res.json(atms);
};

//Obtener playlist
atmCtrl.getPlaylisy = async (req, res) => {
    const atms = await Atm.find();
    res.json(atms);
 };

//Guardar un dato
atmCtrl.createAtm = async (req, res) => {
    const atm = new Atm({
        Identification: req.body.Identification,
        Name: req.body.Name,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude
    });
    await atm.save();
        // res.json({status: 'Employee created'});

    // API ________________________________________________________

const fetch = require('node-fetch');
const {stringify} = require('querystring');

const SERVER = 'https://qsz08t9vtl.execute-api.us-east-1.amazonaws.com/production';

const queryRecs = (params) =>
  fetch(`${SERVER}/recs?${stringify(params)}`).then(r => r.json());

const querySearch = (params) =>
  fetch(`${SERVER}/search?${stringify(params)}`).then(r => r.json());

(async () => {
  try {
    const { results: search } = await querySearch({ category: 'music/artists', query: req.body.Name })

    const firstSearchResult = search[0].id;

    const { results: recs } = await queryRecs({ sample: firstSearchResult, category: 'music/artists' })

    console.log("Top 5 movies for James Brown");
    console.log(recs.slice(0,20).map(item => ` - ${item.name}`).join("\n"))
    res.json(recs.slice(0,20).map(item => `${item.name}`)    );

  } catch (e) {
    console.error(e)
  }
})();

// ________________________________________________________
};

//Consultar un dato con ID
atmCtrl.getOneAtm = async (req, res) => {
    // console.log(req.params.id);
    const atm = await Atm.findById(req.params.id);
    res.json(atm);
};

//Actualizar un dato con ID
atmCtrl.editAtm = async (req, res) => {
    const { id } = req.params;
    const atm = {
        Identification: req.body.Identification,
        Name: req.body.Name,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude
    }
    await Atm.findByIdAndUpdate(id, {$set: atm}, {new: true});
    res.json({
        status: "atm update"
    });
};

//Eliminar un dato con ID
atmCtrl.deleteAtm = async (req, res) => {
    await Atm.findByIdAndDelete(req.params.id);
    res.json({
        status: "atm delete"
    });
};

module.exports = atmCtrl;

