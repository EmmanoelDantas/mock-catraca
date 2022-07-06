// const {changeEndpoint} = require('./monitor/changeEndpoint');

const event = (req, res) => {
  // changeEndpoint
  
  body = {
    event: {
      type: 7,
      name: 'TURN LEFT',
      time: 1484126902
    },
    device_id: 935107
  }
  res.status(200).json({body});
}

module.exports = {event}