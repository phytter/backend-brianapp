const Employer = require('./employers')
const aqp =require('api-query-params')
const _ = require('lodash')
Employer.methods(['post','put','delete'])
Employer.updateOptions({new:true,runValidators: true})



const get = async (req, res, next) => {
    const { filter} = aqp(req.query);
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const sort = req.query.sort || 'name';
    const salto = (page - 1) * limit;
    const key_to_sort = _.last(sort.split('-'));
    const sorter = sort.split('-').length === 1 ? 1 : -1;
    filter.page = undefined;
    const total = await Employer.countDocuments(filter);
    Object.keys(filter).forEach(key => {
      if (filter[key])
      filter[key] = `/${filter[key]}/`
    });
    console.log(filter)

    Employer.find(filter).sort({ [key_to_sort] : sorter })
      .skip(salto)
      .limit(limit)     
      .exec((err, docs) => {
        if (err) {
          return res.send(err);
        }
        res.send({
         docs,
         page,
         limit,
         total,
        });
    });
}

module.exports = {Employer, get}