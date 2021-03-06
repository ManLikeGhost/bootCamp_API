


// @desc    get all bootcamps
// @route   GET api/v1/bootcamps
// @access     Public
exports.getBootCamps = ( req, res, next ) => {
    res.status( 200 ).json( { success: true, msg: 'Show all bootcamps' } )
}

// @desc    get single bootcamp
// @route   GET api/v1/bootcamps/:id
// @access     Public
exports.getBootCamp = ( req, res, next ) => {
    res.status( 200 ).json( { success: true, msg: `Show bootcamp ${req.params.id}` } )
}

// @desc    create a bootcamp
// @route   POST api/v1/bootcamps
// @access     Private
exports.createBootCamp = ( req, res, next ) => {
    res.status( 200 ).json( { success: true, msg: 'Create new bootcamps' } )
}

// @desc    update single bootcamp
// @route   PUT api/v1/bootcamps/:id
// @access     Private
exports.updateBootCamp = ( req, res, next ) => {
    res.status( 200 ).json( { success: true, msg: `Update bootcamp ${req.params.id}` } )
}

// @desc    delete single bootcamp
// @route   DELETE api/v1/bootcamps/:id
// @access     Private
exports.deleteBootCamp = ( req, res, next ) => {
    res.status( 200 ).json( { success: true, msg: `Delete bootcamp ${req.params.id}` } )
}