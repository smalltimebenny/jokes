const Joke = require('../models/joke.model')

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then((allTheJokes) => {
        res.json({ jokes: allTheJokes})
    })
    .catch((err) => {
        res.json({message: 'The heckin heck happened here?', error:err})
    })
}

module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(oneSingleJoke => {
        res.json({joke: oneSingleJoke})
    })
    .catch((err) => res.json({message: "The heckin' heck happened here?", error: err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(brandNewJoke => {
            res.json({ joke: brandNewJoke})
        })
        .catch((err) => {
            res.json({message: "The heckin heck happened here?", error: err})
        })
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
    .then(updatedJoke => {
        res.json({joke: updatedJoke})
    })
    .catch((err) => {
        res.json({mesage: "That didn't work.", error: err})
    })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne(
        {_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
}